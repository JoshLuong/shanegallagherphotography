import Masonry from '@mui/lab/Masonry'
import { useEffect, useRef, useState } from 'react'
import client from '@/gql/apollo-client'
import { Asset, Project } from '@/types/graphql'
import styles from '../../styles/project.module.less'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { projectPageQuery, projectUrlsQuery } from '@/gql/project-page-query'
import { slugUrlsQuery } from '@/gql/slug-urls-query'
import { SlugUrl } from '@/types/graphql'
import { Fade } from '@mui/material'
import useBlockGenerator, { BLOCK_SIZE } from '@/hooks/useBlockGenerator'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import DraggableAsset from '@/components/DraggableAsset'
import Toolbar from '@/components/Toolbar'
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'

export default function Project({
    currentSlug,
    projectUrls,
    gallery,
    project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { isMobile } = useWindowDimensions()
    const [didLoad, setDidLoad] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        setDidLoad(true)
    })
    const projects = projectUrls?.projectCollection?.items
    const slugIndex = projects.findIndex(
        (item: Project) => item?.url?.id == currentSlug
    )

    return (
        <main
            style={{
                // WARNING: do not edit, it will cause weird bug with height and width
                height: '100vh',
                overflow: 'auto',
                overflowX: 'hidden', // helps with mobile issue where the whole project is able to be moved left to right
                position: 'relative', // this is so we can have proper background when making the below pos absolute
            }}
            className={styles.projectPage__main}
        >
            <Head>
                <title>{project.title}</title>
            </Head>

            <Toolbar isGridBackground />
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    margin: isMobile
                        ? `${BLOCK_SIZE}px 1.5em 0 0`
                        : `${BLOCK_SIZE * 1.5}px 1em 1em 1em`,
                    position: 'absolute',
                }}
            >
                <DraggableAsset
                    key={100}
                    reactNode={project.title}
                    transformation={'none'}
                    style={{
                        // color: '#0087F3',
                    }}
                />
                <DraggableAsset
                    reactNode={documentToReactComponents(
                        project.description.json
                    )}
                    key={101}
                    transformation={'none'}
                />
                {didLoad &&
                    gallery.map((item, index) => {
                        if (typeof item == 'string') {
                            // return null // SKIP for now, cause spacing issue with text
                        }
                        const randomInt = Math.random()
                        const englargeRandomInt = Math.random()
                        let transformation = 'none'
                        if (randomInt == 1) {
                            transformation = `translate(${
                                1.8 * Math.random()
                            }em, ${1.5 * Math.random()}em)`
                        } else if (randomInt >= 0.8) {
                            transformation = `translate(${
                                2.6 * Math.random()
                            }em, ${1.5 * Math.random()}em)`
                        } else if (randomInt == 0.7) {
                            transformation = `translate(${
                                1.7 * Math.random()
                            }em, ${-1.9 * Math.random()}em)`
                        } else if (randomInt >= 0.5) {
                            transformation = `translate(${
                                -2.3 * Math.random()
                            }em, ${2.1 * Math.random()}em)`
                        } else if (randomInt >= 0.3) {
                            transformation = `translate(${
                                1.6 * Math.random()
                            }em, ${-2.3 * Math.random()}em)`
                        } else if (randomInt == 0.2) {
                            transformation = `translate(${
                                2.3 * Math.random()
                            }em, ${-2.3 * Math.random()}em)`
                        } else {
                            transformation = `translate(${
                                -2.8 * Math.random()
                            }em, ${-2.3 * Math.random()}em)`
                        }
                        let scale = ''
                        if (englargeRandomInt >= 0.8) {
                            scale = 'scale(1.3)'
                        } else if (englargeRandomInt == 0.6) {
                            scale = 'scale(-0.5)'
                        }
                        transformation += scale

                        return typeof item === 'string' ? (
                            <DraggableAsset
                                reactNode={item}
                                key={index}
                                transformation={transformation}
                            />
                        ) : (
                            <DraggableAsset
                                imageAsset={item}
                                key={index}
                                transformation={transformation}
                            />
                        )
                    })}
            </div>
            <Fade
                in
                timeout={{
                    enter: 800,
                }}
            >
                <div>
                    {slugIndex > 0 && (
                        <Link href={projects[slugIndex - 1].url.id}>
                            <div
                                className={`${styles.projectPage__project_links} ${styles.projectPage__project_links_left}`}
                            >
                                <div
                                    className={
                                        styles.projectPage__project_links_desc
                                    }
                                >
                                    View previous work
                                </div>
                                <div
                                    className={
                                        styles.projectPage__project_links_project_title
                                    }
                                >
                                    {projects[slugIndex - 1].title}
                                </div>
                            </div>
                        </Link>
                    )}
                    {slugIndex < projects.length - 1 && (
                        <Link href={projects[slugIndex + 1].url.id}>
                            <div
                                className={`${styles.projectPage__project_links} ${styles.projectPage__project_links_right}`}
                            >
                                <div
                                    className={
                                        styles.projectPage__project_links_desc
                                    }
                                >
                                    View next work
                                </div>
                                <div
                                    className={
                                        styles.projectPage__project_links_project_title
                                    }
                                >
                                    {projects[slugIndex + 1].title}
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </Fade>
        </main>
    )
}

export async function getStaticProps(context: any) {
    const slug = context.params.slug
    const { data } = await client.query({
        query: projectPageQuery,
        variables: { slug },
    })

    const projectUrls = await client.query({
        query: projectUrlsQuery,
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
            currentSlug: slug,
            projectUrls: projectUrls.data,
            gallery,
            project: data.projectsCollection.items[0],
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
