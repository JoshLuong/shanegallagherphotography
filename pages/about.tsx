import styles from '../styles/about.module.less'
import client from '../gql/apollo-client'
import { subsectionQuery } from '@/gql/landing-page-query'
import { Subsection } from '../types/graphql'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Block from '@/components/block/Block'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import useBlockGenerator from '@/hooks/useBlockGenerator'
import { Fade } from '@mui/material'

export const NO_SECTION_OPEN = -1
export default function Home({
    items,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { isMobile } = useWindowDimensions()
    if (!items) {
        // This should never happen
        return null
    }
    // screen needs at least 6 squares width wise
    // min width needs to be 60px
    // calc how many per row minus 6, divide by 2

    const mobileReadyBlocks = [
        isMobile ? [{}, {}, {}, {}, {}, {}] : [{}, {}, {}, {}, {}, {}, {}, {}],
    ]
    const blocks = useBlockGenerator({
        blocks: mobileReadyBlocks,
        fixedRowCount: mobileReadyBlocks[0].length,
        isNavBar: true,
    })


    return (
        <main
            className={styles.aboutPage__container}
            style={{
                // WARNING: do not edit, it will cause weird bug with height and width
                height: '100vh',
                position: 'fixed',
                overflow: 'auto',
            }}
        >
            <Head>
                <title>Shane Gallagher</title>
            </Head>
            <div>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                    }}
                    className={styles.landingPage__block_container}
                >
                    {blocks?.map((block: any, i: number) => {
                        return (
                            <Block
                                {...block}
                                index={i}
                                borderBottomHidden
                                borderLeftHidden
                                borderRightHidden
                                borderTopHidden
                                loadAnimation={false}
                            />
                        )
                    })}
                </div>
                <Fade
                    in={true}
                    timeout={{
                        enter: 1300,
                    }}
                >
                    <div className={styles.aboutPage__text}>
                        SHANE GALLAGHER IS A MAN OF MANY PARTS: FLORIST,
                        PHOTOGRAPHER, SET DESIGNER, AND ARTIST. IN ALL THAT HE
                        DOES HIS WORK MANAGES TO BE BOTH DRAMATIC WITH ABUNDANCE
                        AND SOMEHOW SIMULTANEOUSLY RESTRAINED WITH FOCUS.
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
            items: data.subsectionCollection.items as Array<Subsection>,
        },
    }
}
