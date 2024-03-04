import styles from '../styles/works.module.less'
import client from '../gql/apollo-client'
import { subsectionQuery } from '@/gql/landing-page-query'
import { Project, Subsection } from '../types/graphql'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Block from '@/components/block/Block'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import useBlockGenerator from '@/hooks/useBlockGenerator'
import { Fade } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { BlackTooltip } from '@/components/BlackTooltip'
import { loaderProp } from '@/utils/loader-prop'
import ToolBar from '@/components/Toolbar'

export default function Works({
    items,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { isMobile } = useWindowDimensions()
    if (!items) {
        // This should never happen
        return null
    }

    return (
        <main
            className={styles.worksPage__container}
            style={{
                // WARNING: do not edit, it will cause weird bug with height and width
                height: '100vh',
                position: 'fixed',
                overflow: 'auto',
            }}
            aria-description='A list of all the works and projects by Shane Gallagher.'
        >
            <Head>
                <title>Works of Shane Gallagher</title>
                <meta name="description" content="Explore the works of Shane Gallagher: Sangre De Fruta, Pass the Peas, Sundays Furniture, and many others." />
            </Head>
            <div>
                <ToolBar />
                <Fade
                    in={true}
                    timeout={{
                        enter: 1300,
                    }}
                >
                    <div className={styles.worksPage__text}>
                        {items.map((item) => {
                            return (
                                <Link
                                    href={`works/${item.url?.id || ''}`}
                                    style={{
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignSelf: 'flex-start',
                                        color: 'white',
                                        margin: '0.2em 0',
                                    }}
                                    aria-label={`Link to ${item.title}`}
                                >
                                    <BlackTooltip
                                        title={
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Image
                                                    src={
                                                        item.previewImage
                                                            ?.url || ''
                                                    }
                                                    alt=""
                                                    loading="eager"
                                                    width="0"
                                                    height="0"
                                                    style={{
                                                        width: 'auto',
                                                        height: '400px',
                                                    }}
                                                    loader={loaderProp}
                                                />
                                            </div>
                                        }
                                        followCursor
                                    >
                                        <div
                                            style={{ display: 'inline-block' }}
                                        >
                                            {item.title?.toLocaleUpperCase()}
                                        </div>
                                    </BlackTooltip>
                                </Link>
                            )
                        })}
                        <Link
                            href="moodboard"
                            style={{
                                textDecoration: 'none',
                                display: 'flex',
                                alignSelf: 'flex-start',
                                color: 'white',
                                margin: '0.2em 0',
                                marginTop: '1.3em',
                                flexDirection: 'column',
                            }}
                            aria-label={`Link to your custom Moodboard.`}
                        >
                            <div style={{ display: 'inline-block' }}>
                                YOUR CUSTOM MOODBOARD
                            </div>
                            <div
                                style={{ display: 'block', fontSize: '0.5em' }}
                            >
                                Create your own moodboard using the moments
                                captured in any of my works listed above.
                            </div>
                        </Link>
                    </div>
                </Fade>
            </div>
        </main>
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
