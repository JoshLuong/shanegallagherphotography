import Masonry from '@mui/lab/Masonry'
import { ReactNode } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import client from '@/gql/apollo-client'
import { Projects } from '@/types/graphql'
import styles from '../../styles/project.module.less'
import Image from 'next/image'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { projectPageQuery } from '@/gql/project-page-query'
import { slugUrlsQuery } from '@/gql/slug-urls-query'
import { SlugUrl } from '@/types/graphql'

export default function Project({
    items,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const project = items[0] as Projects
    const gallery: string[] = []
    project.galleryCollection?.items.forEach((item) => {
        if (item?.url) {
            gallery.push(item.url)
        }
    })

    const loaderProp = ({ src }: any) => {
        return src
    }
    return (
        <div className={styles.projectPage__container}>
            <h1>{project.title}</h1>
            <div>{documentToReactComponents(project.description?.json)}</div>
            <Masonry columns={3} className={styles.projectPage__masonry}>
                {gallery &&
                    gallery.map((url, index): ReactNode => {
                        // eslint-disable-next-line jsx-a11y/alt-text
                        return (
                            <div
                                key={index}
                                className={styles.projectPage__imageContainer}
                            >
                                <Image
                                    key={index}
                                    alt={'TODO'}
                                    src={url}
                                    width="0"
                                    height="0"
                                    style={{ width: '30%', height: '100%' }}
                                    loader={loaderProp}
                                    loading="lazy"
                                />
                            </div>
                        )
                    })}
            </Masonry>
        </div>
    )
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: projectPageQuery,
        variables: { slug: 'earls' },
    })

    return {
        props: {
            items: data.projectsCollection.items as Array<Projects>,
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
