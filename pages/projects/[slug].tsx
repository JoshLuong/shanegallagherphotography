import Masonry from '@mui/lab/Masonry'
import { ReactNode } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import client from '@/gql/apollo-client'
import { Asset, GalleryImageBehaviour, Projects } from '@/types/graphql'
import styles from '../../styles/project.module.less'
import Image from 'next/image'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import {
    projectPageImageBehaviourQuery,
    projectPageQuery,
} from '@/gql/project-page-query'
import { slugUrlsQuery } from '@/gql/slug-urls-query'
import { SlugUrl } from '@/types/graphql'
import { loaderProp } from '@/utils/loader-prop'
import ResizableImage from '@/components/ResizableImage'
import { ImageList, ImageListItem } from '@mui/material'

export default function Project({
    items,
    imageBehaviours,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const project = items[0] as Projects
    const gallery: Array<Asset> = []
    project.galleryCollection?.items.forEach((item) => {
        if (item?.url) {
            gallery.push(item)
        }
    })
    const imageBehaviourMap =
        imageBehaviours.reduce(function (map: Record<number, string>, obj) {
            if (!obj || !obj.index || !obj?.behaviour) return map
            map[obj.index] = obj?.behaviour
            return map
        }, {}) || {}

    return (
        <div className={styles.projectPage__container}>
            <h1 className={styles.projectPage__title}>{project.title}</h1>
            <div>{documentToReactComponents(project.description?.json)}</div>

            <ImageList
                variant="quilted"
                cols={2}
                gap={40}
                className={styles.projectPage__quilted}
            >
                {gallery.map((item, index) => {
                    const behaviour = imageBehaviourMap[index + 1]
                    return (
                        <ImageListItem
                            key={index}
                            cols={
                                (item?.width || 0) > (item?.height || 0) ? 2 : 1
                            }
                            rows={1}
                        >
                            {!behaviour ? (
                                <Image
                                    key={index}
                                    alt={item.description || 'No description'}
                                    src={item.url || ''}
                                    width="0"
                                    height="0"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                    loader={loaderProp}
                                    loading="lazy"
                                />
                            ) : (
                                <ResizableImage
                                    src={item.url || ''}
                                    behaviour={behaviour}
                                />
                            )}
                        </ImageListItem>
                    )
                })}
            </ImageList>
        </div>
    )
}

export async function getStaticProps(context: any) {
    const slug = context.params.slug
    const { data } = await client.query({
        query: projectPageQuery,
        variables: { slug },
    })
    const { data: behaviourData } = await client.query({
        query: projectPageImageBehaviourQuery,
        variables: { slug },
    })

    return {
        props: {
            items: data.projectsCollection.items as Array<Projects>,
            imageBehaviours:
                behaviourData.projectsCollection.items.length >= 1
                    ? (behaviourData.projectsCollection.items[0]
                          .behaviourCollection
                          ?.items as Array<GalleryImageBehaviour>)
                    : [],
        },
    }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const { data } = await client.query({
        query: slugUrlsQuery,
    })
    const slugs = data.slugUrlCollection.items.map(
        (url: SlugUrl): { params: { slug: string } } => ({
            params: { slug: url.id || '' },
        })
    )
    return {
        paths: [...slugs], //indicates that no page needs be created at build time
        fallback: true, //indicates the type of fallback
    }
}
