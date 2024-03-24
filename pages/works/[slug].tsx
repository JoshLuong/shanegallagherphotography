import { useEffect, useMemo, useRef, useState } from 'react'
import client from '@/gql/apollo-client'
import { Asset, Project } from '@/types/graphql'
import styles from '../../styles/project.module.less'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { projectPageQuery, projectUrlsQuery } from '@/gql/project-page-query'
import { slugUrlsQuery } from '@/gql/slug-urls-query'
import { SlugUrl } from '@/types/graphql'
import { Fade } from '@mui/material'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import DraggableAsset from '@/components/DraggableAsset'
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import getRandomTransformation from '@/utils/getRandomTransformation'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import options from '@/utils/documentToReactComponentsOptions'
import PageWrapper from '@/components/PageWrapper'
import { onScrollToTop } from '@/utils/onScrollToTop'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'

export default function Project({
    currentSlug,
    projectUrls,
    gallery,
    project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    useEffect(() => {
        onScrollToTop() // resets scroll position (mainly for mobile)
    }, [])
    const { isMobile } = useWindowDimensions()
    const [didLoad, setDidLoad] = useState(false)
    const [displayScrollToTop, setShouldDisplayScrollToTop] = useState(false)
    const zIndexRef = useRef(1)

    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        setDidLoad(true)
        zIndexRef.current = 1
    })
    const projects = projectUrls?.projectCollection?.items
    const slugIndex = projects.findIndex(
        (item: Project) => item?.url?.id == currentSlug
    )
    const itemIsNotStringOrTransparent = (item: Asset | string) =>
        typeof item !== 'string' && item.title !== 'TRANSPARENT IMAGE'
    const images: Asset[] = useMemo(
        () =>
            gallery.filter((item) =>
                itemIsNotStringOrTransparent(item)
            ) as Asset[],
        [gallery]
    )

    const shouldDisplayScrollToTop = () => {
        if (document) {
            return document?.body.clientHeight / 2 < (window.scrollY || 0)
        }
        return false
    }

    useEffect(() => {
        onScrollToTop() // resets scroll position (mainly for mobile)
    }, [currentSlug])

    useEffect(() => {
        const onScroll = () => {
            setShouldDisplayScrollToTop(shouldDisplayScrollToTop())
        }
        window?.addEventListener('scroll', onScroll)
        return () => {
            window?.removeEventListener('scroll', onScroll)
        }
    })

    let imageCount = -1
    const galleryElements = useMemo(
        () =>
            gallery.map((item, index) => {
                const isString = typeof item == 'string'
                let transformation = getRandomTransformation(isMobile)
                let scale = ''
                if (
                    !isMobile &&
                    !isString &&
                    item.contentfulMetadata.tags
                        .map((tag) => tag!!.name)
                        .includes('enlarge-image')
                ) {
                    scale = 'scale(1.2)'
                } else if (
                    !isMobile &&
                    !isString &&
                    item.contentfulMetadata.tags
                        .map((tag) => tag!!.name)
                        .includes('shrink-image')
                ) {
                    scale = 'scale(0.75)'
                }
                transformation += scale

                if (itemIsNotStringOrTransparent(item)) {
                    imageCount++
                }
                const key = `${currentSlug}${index}${
                    typeof item === 'string' ? item : item.fileName
                }` // need unique keys so react will re-animate during navigation between projects
                return typeof item === 'string' ? (
                    <DraggableAsset
                        reactNode={item}
                        key={key}
                        transformation={transformation}
                        index={index}
                        ref={zIndexRef}
                        disableDrag={isMobile}
                    />
                ) : (
                    <DraggableAsset
                        imageAsset={item}
                        key={key}
                        transformation={transformation}
                        index={imageCount}
                        images={images as Asset[]}
                        tags={item.contentfulMetadata.tags}
                        ref={zIndexRef}
                        disableResize={isMobile}
                        disableDrag={isMobile}
                    />
                )
            }),
        [gallery, currentSlug, isMobile]
    )

    const onMouseDown = (shouldGoUp?: boolean) => {
        let height = window.innerHeight * (isMobile ? 1.3 : 2)
        if (shouldGoUp) {
            height = -height
        }
        window.scrollTo({
            top: window.scrollY + height / 2,
            behavior: 'smooth',
        })
    }

    const description = documentToPlainTextString(project.description?.json.content[0]) || `Shane Gallagher's: ${project.title}`
    return (
        <PageWrapper
            headElement={
                <Head>
                    <title>{project.title}</title>
                    <meta
                        name="description"
                        content={description}
                    />
                    <meta
                        property="og:title"
                        content={`Shane Gallagher's ${project.title}`}
                    />
                    <meta
                        property="og:description"
                        content={description}
                    />
                    <meta property="og:image" content={images[0].url || ''} />
                </Head>
            }
            content={
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        width: '100%',
                        gap: '12px',
                        margin: isMobile
                            ? `0 0.2em 1.3em 0`
                            : `0 1.2em 1em 1.2em`,
                    }}
                >
                    <DraggableAsset
                        key={`${currentSlug}${100}`}
                        disableDrag={isMobile}
                        reactNode={
                            <div>
                                <h1
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: '1em',
                                        margin: '0 0 1em 0',
                                        fontSize: isMobile ? '0.9em' : '0.7em',
                                        fontWeight: 'normal',
                                    }}
                                >
                                    {project.title}
                                </h1>
                                {project.description && (
                                    <div
                                        style={{
                                            backgroundColor: 'black',
                                            color: 'white',
                                            padding: '1em',
                                            fontSize: isMobile
                                                ? '0.9em'
                                                : '0.7em',
                                        }}
                                    >
                                        {documentToReactComponents(
                                            project.description?.json,
                                            options
                                        )}
                                    </div>
                                )}
                            </div>
                        }
                        style={{
                            backgroundColor: 'transparent',
                        }}
                        transformation={'none'}
                        index={-1}
                        ref={zIndexRef}
                    />
                    {didLoad && galleryElements}
                    <Fade
                        in
                        timeout={{
                            enter: 800,
                        }}
                    >
                        <div>
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
                            <Fade
                                in={displayScrollToTop}
                                timeout={{
                                    enter: 800,
                                    exit: 800,
                                }}
                            >
                                <div
                                    style={{
                                        bottom: isMobile ? '12em' : '15em',
                                        zIndex: 1001,
                                    }}
                                    className={`${styles.projectPage__project_arrow_button} clickable_component`}
                                    onClick={() => onScrollToTop()}
                                >
                                    <KeyboardDoubleArrowUpIcon
                                        style={{
                                            margin: 'auto',
                                            fontSize: '30px',
                                            color: 'black',
                                        }}
                                        fontSize="medium"
                                    />
                                </div>
                            </Fade>
                            <div
                                style={{
                                    bottom: isMobile ? '9.5em' : '12.5em',
                                    zIndex: 1001,
                                }}
                                className={`${styles.projectPage__project_arrow_button} clickable_component`}
                                onClick={() => onMouseDown(true)}
                            >
                                <KeyboardArrowUpIcon
                                    style={{
                                        margin: 'auto',
                                        fontSize: '30px',
                                        color: 'black',
                                    }}
                                    fontSize="medium"
                                />
                            </div>
                            <div
                                style={{
                                    bottom: isMobile ? '7em' : '10em',
                                    zIndex: 1001,
                                }}
                                className={`${styles.projectPage__project_arrow_button} clickable_component`}
                                onClick={() => onMouseDown()}
                            >
                                <KeyboardArrowDownIcon
                                    style={{
                                        margin: 'auto',
                                        fontSize: '30px',
                                        color: 'black',
                                    }}
                                />
                            </div>
                        </div>
                    </Fade>
                </div>
            }
        />
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
