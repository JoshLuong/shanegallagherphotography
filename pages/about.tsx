import styles from '../styles/about.module.less'
import client from '../gql/apollo-client'
import { subsectionQuery } from '@/gql/landing-page-query'
import { About, Asset, Subsection } from '../types/graphql'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Block from '@/components/block/Block'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import useBlockGenerator from '@/hooks/useBlockGenerator'
import { Fade } from '@mui/material'
import ToolBar from '@/components/Toolbar'
import { aboutContentQuery } from '@/gql/about-page-query'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import DraggableAsset from '@/components/DraggableAsset'
import { loaderProp } from '@/utils/loader-prop'
import Image from 'next/image'

export const NO_SECTION_OPEN = -1
export default function About({
    about,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { isMobile } = useWindowDimensions()
    if (!about || !about.portraitsCollection?.items) {
        // This should never happen
        return null
    }
    // screen needs at least 6 squares width wise
    // min width needs to be 60px
    // calc how many per row minus 6, divide by 2

    return (
        <main
            className={styles.aboutPage__container}
            style={{
                // WARNING: do not edit, it will cause weird bug with height and width
                height: '100vh',
                position: 'relative', // allows mobile to show all portraits without cutoff
                overflow: 'scroll',
            }}
        >
            <Head>
                <title>About Shane Gallagher</title>
            </Head>
            <div>
                <ToolBar/>
                <Fade
                    in={true}
                    timeout={{
                        enter: 1300,
                    }}
                >
                    <div>
                    <div className={styles.aboutPage__text}>
                        {
                            documentToReactComponents(about.description?.json)
                        }
                    </div>
                    <div className={styles.aboutPage__portraits}>
                        {
                            about.portraitsCollection?.items?.map((item, i) => {
                                if (!item) return null
                                return <Image
                                alt={'TODO'}
                                placeholder="empty"
                                src={item.url || ''}
                                width={item.width || '0'}
                                height={item.height || 0}
                                style={{
                                    height: isMobile ? "10em" : "20em",
                                    width: 'auto',
                                }}
                                loader={loaderProp}
                                loading="eager"
                            />
                            })
                        }
                    </div>
                    </div>
                </Fade>
            </div>
        </main>
    )
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: aboutContentQuery,
    })
    return {
        props: {
            about: data.about as About
        },
    }
}
