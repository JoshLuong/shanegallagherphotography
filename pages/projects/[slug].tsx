import Masonry from '@mui/lab/Masonry'
import { useRef } from 'react'
import client from '@/gql/apollo-client'
import { Asset, GalleryImageBehaviour, Projects } from '@/types/graphql'
import styles from '../../styles/project.module.less'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import {
    projectPageImageBehaviourQuery,
    projectPageQuery,
} from '@/gql/project-page-query'
import { slugUrlsQuery } from '@/gql/slug-urls-query'
import { SlugUrl } from '@/types/graphql'
import ResizableAsset from '@/components/ResizableAsset'
import { Fade } from '@mui/material'
import RotatedText from '@/components/RotatedText'

export default function Project({
    gallery,
    project,
    imageBehaviours,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const imageBehaviourMap =
        imageBehaviours.reduce(function (map: Record<number, string>, obj) {
            if (!obj || !obj.index || !obj?.behaviour) return map
            map[obj.index] = obj?.behaviour
            return map
        }, {}) || {}

    const ref = useRef<HTMLDivElement>(null)
    return (
        <div className={styles.projectPage__container}>
            <div className={styles.projectPage__title}>
                <RotatedText
                    text={project?.title}
                    fontStyle="secondary"
                    fontSize={'1.5em'}
                />
            </div>
            <Fade
                in={true}
                timeout={{
                    enter: 2000,
                }}
                style={{ flex: 1 }}
            >
                <div>
                    <Masonry
                        columns={2}
                        ref={ref}
                        spacing={10}
                        className={styles.projectPage__quilted}
                    >
                        {gallery.map((item, index) => {
                            const behaviour = imageBehaviourMap[index + 1]

                            return (
                                <ResizableAsset
                                    item={item}
                                    behaviour={behaviour}
                                    parent={ref}
                                />
                            )
                        })}
                    </Masonry>
                </div>
            </Fade>
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

    let gallery: Array<Asset | string> = []

    for (const item of data.projectsCollection.items[0]?.galleryCollection
        ?.items) {
        if (item.contentType === 'text/plain' && item.url != null) {
            const res = await fetch(item.url)
            const text = await res.text()
            gallery.push(text)
        } else if (item.url != null) {
            gallery.push(item)
        }
    }
    return {
        props: {
            gallery,
            project: data.projectsCollection.items[0],
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
