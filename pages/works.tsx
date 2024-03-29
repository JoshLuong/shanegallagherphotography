import client from '../gql/apollo-client'
import { subsectionQuery } from '@/gql/landing-page-query'
import { Project } from '../types/graphql'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import Link from 'next/link'
import Image from 'next/image'
import { loaderProp } from '@/utils/loader-prop'
import PageWrapper from '@/components/PageWrapper'
import { ReactNode, useState } from 'react'
import { Fade } from '@mui/material'

export default function Works({
    items,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { isMobile } = useWindowDimensions()
    if (!items) {
        // This should never happen
        return null
    }

    const getItems = (project: Project[], showSquareImage?: boolean) => {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexFlow: 'wrap',
                }}
            >
                {project.map((item) => {
                    const [load, setLoad] = useState(false)
                    return (
                        <Link
                            href={`works/${item.url?.id || ''}`}
                            style={{
                                textDecoration: 'none',
                                display: 'flex',
                                color: 'white',
                                margin: isMobile ? '0.4em 0.5em' : '0.4em 1em',
                                boxSizing: 'border-box',
                                flexDirection: 'column',
                                width: isMobile ? '45%' : '20%',
                                fontSize: isMobile ? '0.9em' : '1em',
                            }}
                            aria-label={`Link to ${item.title}`}
                        >
                            <Fade
                                in={load}
                                timeout={{
                                    enter: 800,
                                    exit: 2000,
                                }}
                            >
                                <div>
                                    {item.previewImage?.url && (
                                        <Image
                                            src={item.previewImage?.url || ''}
                                            alt={
                                                item.previewImage
                                                    ?.description || ''
                                            }
                                            loading="eager"
                                            priority
                                            width="0"
                                            height="0"
                                            onLoadingComplete={() => {
                                                setLoad(true)
                                            }}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                aspectRatio: showSquareImage
                                                    ? '1 / 1'
                                                    : 'initial',
                                                objectFit: 'cover',
                                            }}
                                            loader={loaderProp}
                                        />
                                    )}
                                    <div
                                        style={{
                                            background: 'black',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                </div>
                            </Fade>
                        </Link>
                    )
                })}
            </div>
        )
    }

    return (
        <PageWrapper
            headElement={
                <Head>
                    <title>Works of Shane Gallagher</title>
                    <meta
                        property="og:image"
                        content={'Works of Shane Gallagher'}
                    />
                    <meta
                        name="description"
                        content="Explore the works of Shane Gallagher: Sangre De Fruta, Pass the Peas, Sundays Furniture, and many others."
                    />
                </Head>
            }
            pageAriaDescription="A list of all the works and projects by Shane Gallagher."
            content={[
                getItems(items.filter((item) => item.isCollectionType)),
                getItems(
                    items.filter((item) => !item.isCollectionType),
                    true
                ),
            ]}
        />
    )
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: subsectionQuery,
    })

    return {
        props: {
            items: data.projectCollection.items as Array<Project>,
        },
    }
}
