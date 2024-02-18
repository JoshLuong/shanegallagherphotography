import styles from '../styles/index.module.less'
import client from '../gql/apollo-client'
import { subsectionQuery } from '@/gql/landing-page-query'
import { Subsection } from '../types/graphql'
import { InferGetStaticPropsType } from 'next'
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LandingPageSection from '@/components/landing-page/LandingPageSection'
import SubSection, { ThemeType } from '@/components/landing-page/SubSection'
import Head from 'next/head'
import Block from '@/components/block/Block'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import useBlockGenerator, { BLOCK_SIZE } from '@/hooks/useBlockGenerator'

export const NO_SECTION_OPEN = -1
export default function Home({
    items,
}: InferGetStaticPropsType<typeof getStaticProps>) {

    const {isMobile} = useWindowDimensions();
    if (!items) {
        // This should never happen
        return null
    }
    // screen needs at least 6 squares width wise
    // min width needs to be 60px
    // calc how many per row minus 6, divide by 2

    /*
    This is the data needed from items:
        backgroundImage: items[1].previewContent?.photo?.url,
        title: items[1].title,
        link: items[1].previewContent?.url?.id

    */

    const blocks: any[] = [
        [{},
            {},
            { bottomRBorderRadius: '10px' },
            { bottomLBorderRadius: '10px', bottomRBorderRadius: '17px' },
            { bottomLBorderRadius: '17px', bottomRBorderRadius: '10px' },
            { bottomLBorderRadius: '10px' },
            {},
            {},
        ],
        // new line
        [
            {},
            { bottomRBorderRadius: '17px' },
            {
                topRBorderRadius: '10px',
                bottomLBorderRadius: '17px',
                bottomRBorderRadius: '35px',
            },
            {
                topLBorderRadius: '10px',
                topRBorderRadius: '17px',
                bottomLBorderRadius: '35px',
                bottomRBorderRadius: '35px',
            },
            {
                topLBorderRadius: '17px',
                topRBorderRadius: '10px',
                bottomLBorderRadius: '35px',
                bottomRBorderRadius: '35px',
            },
            {
                topLBorderRadius: '10px',
                bottomLBorderRadius: '35px',
                bottomRBorderRadius: '17px',
            },
            { bottomLBorderRadius: '17px' },
            {},
        ],
        // new line
        [
            {},
            { topRBorderRadius: '17px', bottomRBorderRadius: '35px' },
            {
                topLBorderRadius: '17px',
                topRBorderRadius: '35px',
                bottomLBorderRadius: '35px',
                bottomRBorderRadius: '17px',
            },
            {
                topLBorderRadius: '35px',
                topRBorderRadius: '35px',
                bottomLBorderRadius: '17px',
            },
            {
                topLBorderRadius: '35px',
                topRBorderRadius: '35px',
                bottomRBorderRadius: '17px',
            },
            {
                topLBorderRadius: '35px',
                topRBorderRadius: '17px',
                bottomLBorderRadius: '17px',
                bottomRBorderRadius: '35px  ',
            },
            { topLBorderRadius: '17px', bottomLBorderRadius: '35px' },
            {},
        ],
        // new line
        [
            { bottomRBorderRadius: '17px'},
            { topRBorderRadius: '35px', bottomRBorderRadius: '35px' , bottomLBorderRadius: '17px'},
            {
                topLBorderRadius: '35px',
                topRBorderRadius: '17px',
                bottomLBorderRadius: '35px',
            },
            { topLBorderRadius: '17px' },
            { topRBorderRadius: '17px',
            backgroundImage: items[1].previewContent?.photo?.url,
            title: items[1].title,
            link: items[1].previewContent?.url?.id
         },
            { topLBorderRadius: '17px', topRBorderRadius: '35px' },
            { topLBorderRadius: '35px' },
            {},
        ],
        // new line
        [
            {topRBorderRadius: '17px'},
            { topRBorderRadius: '35px', topLBorderRadius: '17px',bottomRBorderRadius: '17px' },
            {
                topLBorderRadius: '35px',
                bottomRBorderRadius: '35px',
                bottomLBorderRadius: '17px',
            },
            { bottomLBorderRadius: '35px', bottomRBorderRadius: '17px' },
            { bottomLBorderRadius: '17px', bottomRBorderRadius: '17px' },
            { bottomLBorderRadius: '17px', bottomRBorderRadius: '10px' },
            { bottomLBorderRadius: '10px' },
            {},
        ],
        // new line
        [
            {},
            { topRBorderRadius: '17px' },
            {
                topLBorderRadius: '17px',
                topRBorderRadius: '35px',
                bottomRBorderRadius: '17px',
            },
            {
                topLBorderRadius: '35px',
                topRBorderRadius: '17px',
                bottomLBorderRadius: '17px',
                bottomRBorderRadius: '35px',
            },
            {
                topLBorderRadius: '17px',
                topRBorderRadius: '17px',
                bottomLBorderRadius: '35px',
                bottomRBorderRadius: '35px',
            },
            {
                topLBorderRadius: '17px',
                topRBorderRadius: '10px',
                bottomLBorderRadius: '35px',
                bottomRBorderRadius: '17px',
            },
            { topLBorderRadius: '10px', bottomLBorderRadius: '17px' },
            {},
        ],
        // new line
        [
            {},
            {
            },
            { topRBorderRadius: '17px' },
            { topLBorderRadius: '17px', topRBorderRadius: '35px' },
            { topLBorderRadius: '35px', topRBorderRadius: '35px' },
            {
                topLBorderRadius: '35px',
                topRBorderRadius: '17px',
                bottomRBorderRadius: '35px',
                backgroundImage: items[4].previewContent?.photo?.url,
                title: items[4].title,
                link: items[4].previewContent?.url?.id
            },
            {
                topLBorderRadius: '17px',
                bottomLBorderRadius: '35px',
                bottomRBorderRadius: '10px',
            },
            { bottomLBorderRadius: '10px' },
        ],
        // new line
        [
            {},
            { bottomRBorderRadius: '35px' },
            { bottomLBorderRadius: '35px', bottomRBorderRadius: '17px', },
            {bottomLBorderRadius: '17px',},
            { bottomRBorderRadius: '17px' },
            {
                bottomLBorderRadius: '17px',
                topRBorderRadius: '35px',
                bottomRBorderRadius: '35px',
            },
            {
                topLBorderRadius: '35px',
                topRBorderRadius: '10px',
                bottomLBorderRadius: '35px',
                bottomRBorderRadius: '17px',
            },
            { topLBorderRadius: '10px', bottomLBorderRadius: '17px' },
        ],
        // new line
        [
            {},
            {
                topRBorderRadius: '35px',
                bottomRBorderRadius: '17px',
            },
            {
                topLBorderRadius: '35px',
                bottomLBorderRadius: '17px',
                topRBorderRadius: '17px',
                bottomRBorderRadius: '35px',
            },
            {
                bottomLBorderRadius: '35px',
                topLBorderRadius: '17px',
                bottomRBorderRadius: '35px',
            },
            {
                topRBorderRadius: '17px',
                bottomLBorderRadius: '35px',
                bottomRBorderRadius: '35px',
            },
            {
                topLBorderRadius: '17px',
                topRBorderRadius: '35px',
                bottomLBorderRadius: '35px',
                bottomRBorderRadius: '17px',
            },
            {
                topLBorderRadius: '35px',
                topRBorderRadius: '17px',
                bottomLBorderRadius: '17px',
            },
            { topLBorderRadius: '17px' },
        ],
        // new line
        [
            {},
            {
                topRBorderRadius: '17px',
            },
            {
                topLBorderRadius: '17px',
                topRBorderRadius: '35px',
                bottomRBorderRadius: '10px',
            },
            {
                topLBorderRadius: '35px',
                topRBorderRadius: '35px',
                bottomLBorderRadius: '10px',
                bottomRBorderRadius: '17px',
            },
            {
                topLBorderRadius: '35px',
                topRBorderRadius: '35px',
                bottomLBorderRadius: '17px',
                bottomRBorderRadius: '10px',
            },
            {
                topLBorderRadius: '35px',
                topRBorderRadius: '17px',
                bottomLBorderRadius: '10px',
            },
            {
                topLBorderRadius: '17px',
            },
            {},
        ],
        // new line
        [
            {},
            {},
            {
                topRBorderRadius: '10px',
            },
            {
                topLBorderRadius: '10px',
                topRBorderRadius: '17px',
            },
            {
                topLBorderRadius: '17px',
                topRBorderRadius: '10px',
            },
            {
                topLBorderRadius: '10px',
            },
            {},
            {},
        ],
    ]
   const mobileReadyBlocks = blocks.map((block) => {
        if (isMobile) {
            console.log(block.slice(1, block.length))
            return block.slice(1, block.length - 1)
        }
        return block
    })

    const generatedBlocks = useBlockGenerator({blocks: mobileReadyBlocks, fixedRowCount: mobileReadyBlocks[0].length})
    const [showBlocks, setShowBlocks] = useState(false)

    useEffect(() => {
        setShowBlocks(true) // issue with loading the blocks too soon
    })


    return (
        <main style={{
            minWidth: `${mobileReadyBlocks[0].length * BLOCK_SIZE + 10}px`, // num squares * size + buffer px
        }}>
            <Head>
                <title>Shane Gallagher</title>
            </Head>
            <div className={styles.landingPage__container}>
                {showBlocks && <div
                    
                    className={styles.landingPage__block_container}
                >
                    {generatedBlocks.map((block: any, i: number) => {
                        return <Block {...block} index={i} />
                    })}
                </div>
                
                }
                
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
