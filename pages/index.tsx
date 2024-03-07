import styles from '../styles/index.module.less'
import client from '../gql/apollo-client'
import { subsectionQuery } from '@/gql/landing-page-query'
import { InferGetStaticPropsType } from 'next'
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LandingPageSection from '@/components/landing-page/LandingPageSection'
import SubSection, { ThemeType } from '@/components/landing-page/SubSection'
import Head from 'next/head'
import Block from '@/components/block/Block'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import useBlockGenerator, { BLOCK_SIZE } from '@/hooks/useBlockGenerator'
import { Project } from '@/types/graphql'

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

    /*
    This is the data needed from items:
        backgroundImage: items[1].previewImage?.url,
        title: items[1].title,
        link: items[1].url?.id

    */

    const smallRadius = isMobile ? '8px' : '10px'
    const mediumRadius = isMobile ? '14px' : '17px'
    const largeRadius = isMobile ? '30px' : '35px'

    const blocks: any[] = [
        [
            {},
            {},
            { bottomRBorderRadius: smallRadius },
            {
                bottomLBorderRadius: smallRadius,
                bottomRBorderRadius: mediumRadius,
            },
            {
                bottomLBorderRadius: mediumRadius,
                bottomRBorderRadius: smallRadius,
            },
            { bottomLBorderRadius: smallRadius },
            {},
            {},
        ],
        // new line
        [
            {},
            { bottomRBorderRadius: mediumRadius },
            {
                topRBorderRadius: smallRadius,
                bottomLBorderRadius: mediumRadius,
                bottomRBorderRadius: largeRadius,
            },
            {
                topLBorderRadius: smallRadius,
                topRBorderRadius: mediumRadius,
                bottomLBorderRadius: largeRadius,
                bottomRBorderRadius: largeRadius,
            },
            {
                topLBorderRadius: mediumRadius,
                topRBorderRadius: smallRadius,
                bottomLBorderRadius: largeRadius,
                bottomRBorderRadius: largeRadius,
            },
            {
                topLBorderRadius: smallRadius,
                bottomLBorderRadius: largeRadius,
                bottomRBorderRadius: mediumRadius,
            },
            { bottomLBorderRadius: mediumRadius },
            {},
        ],
        // new line
        [
            {},
            {
                topRBorderRadius: mediumRadius,
                bottomRBorderRadius: largeRadius,
            },
            {
                topLBorderRadius: mediumRadius,
                topRBorderRadius: largeRadius,
                bottomLBorderRadius: largeRadius,
                bottomRBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: largeRadius,
                topRBorderRadius: largeRadius,
                bottomLBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: largeRadius,
                topRBorderRadius: largeRadius,
                bottomRBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: largeRadius,
                topRBorderRadius: mediumRadius,
                bottomLBorderRadius: mediumRadius,
                bottomRBorderRadius: largeRadius,
            },
            {
                topLBorderRadius: mediumRadius,
                bottomLBorderRadius: largeRadius,
            },
            {},
        ],
        // new line
        [
            { bottomRBorderRadius: mediumRadius },
            {
                topRBorderRadius: largeRadius,
                bottomRBorderRadius: largeRadius,
                bottomLBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: largeRadius,
                topRBorderRadius: mediumRadius,
                bottomLBorderRadius: largeRadius,
            },
            { topLBorderRadius: mediumRadius },
            {
                topRBorderRadius: mediumRadius,
            },
            { topLBorderRadius: mediumRadius, topRBorderRadius: largeRadius },
            { topLBorderRadius: largeRadius },
            {},
        ],
        // new line
        [
            { topRBorderRadius: mediumRadius },
            {
                topRBorderRadius: largeRadius,
                topLBorderRadius: mediumRadius,
                bottomRBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: largeRadius,
                bottomRBorderRadius: largeRadius,
                bottomLBorderRadius: mediumRadius,
            },
            {
                bottomLBorderRadius: largeRadius,
                bottomRBorderRadius: mediumRadius,
            },
            {
                bottomLBorderRadius: mediumRadius,
                bottomRBorderRadius: mediumRadius,
            },
            {
                bottomLBorderRadius: mediumRadius,
                bottomRBorderRadius: smallRadius,
            },
            { bottomLBorderRadius: smallRadius },
            {},
        ],
        // new line
        [
            {},
            {
                topRBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: mediumRadius,
                topRBorderRadius: largeRadius,
                bottomRBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: largeRadius,
                topRBorderRadius: mediumRadius,
                bottomLBorderRadius: mediumRadius,
                bottomRBorderRadius: largeRadius,
            },
            {
                topLBorderRadius: mediumRadius,
                topRBorderRadius: mediumRadius,
                bottomLBorderRadius: largeRadius,
                bottomRBorderRadius: largeRadius,
            },
            {
                topLBorderRadius: mediumRadius,
                topRBorderRadius: smallRadius,
                bottomLBorderRadius: largeRadius,
                bottomRBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: smallRadius,
                bottomLBorderRadius: mediumRadius,
            },
            {},
        ],
        // new line
        [
            {},
            {},
            { topRBorderRadius: mediumRadius },
            { topLBorderRadius: mediumRadius, topRBorderRadius: largeRadius },
            { topLBorderRadius: largeRadius, topRBorderRadius: largeRadius },
            {
                topLBorderRadius: largeRadius,
                topRBorderRadius: mediumRadius,
                bottomRBorderRadius: largeRadius,
            },
            {
                topLBorderRadius: mediumRadius,
                bottomLBorderRadius: largeRadius,
                bottomRBorderRadius: smallRadius,
            },
            { bottomLBorderRadius: smallRadius },
        ],
        // new line
        [
            {},
            { bottomRBorderRadius: largeRadius },
            {
                bottomLBorderRadius: largeRadius,
                bottomRBorderRadius: mediumRadius,
            },
            { bottomLBorderRadius: mediumRadius },
            { bottomRBorderRadius: mediumRadius },
            {
                bottomLBorderRadius: mediumRadius,
                topRBorderRadius: largeRadius,
                bottomRBorderRadius: largeRadius,
            },
            {
                topLBorderRadius: largeRadius,
                topRBorderRadius: smallRadius,
                bottomLBorderRadius: largeRadius,
                bottomRBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: smallRadius,
                bottomLBorderRadius: mediumRadius,
            },
        ],
        // new line
        [
            {},
            {
                topRBorderRadius: largeRadius,
                bottomRBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: largeRadius,
                bottomLBorderRadius: mediumRadius,
                topRBorderRadius: mediumRadius,
                bottomRBorderRadius: largeRadius,
            },
            {
                bottomLBorderRadius: largeRadius,
                topLBorderRadius: mediumRadius,
                bottomRBorderRadius: largeRadius,
            },
            {
                topRBorderRadius: mediumRadius,
                bottomLBorderRadius: largeRadius,
                bottomRBorderRadius: largeRadius,
            },
            {
                topLBorderRadius: mediumRadius,
                topRBorderRadius: largeRadius,
                bottomLBorderRadius: largeRadius,
                bottomRBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: largeRadius,
                topRBorderRadius: mediumRadius,
                bottomLBorderRadius: mediumRadius,
            },
            { topLBorderRadius: mediumRadius },
        ],
        // new line
        [
            {},
            {
                topRBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: mediumRadius,
                topRBorderRadius: largeRadius,
                bottomRBorderRadius: smallRadius,
            },
            {
                topLBorderRadius: largeRadius,
                topRBorderRadius: largeRadius,
                bottomLBorderRadius: smallRadius,
                bottomRBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: largeRadius,
                topRBorderRadius: largeRadius,
                bottomLBorderRadius: mediumRadius,
                bottomRBorderRadius: smallRadius,
            },
            {
                topLBorderRadius: largeRadius,
                topRBorderRadius: mediumRadius,
                bottomLBorderRadius: smallRadius,
            },
            {
                topLBorderRadius: mediumRadius,
            },
            {},
        ],
        // new line
        [
            {},
            {},
            {
                topRBorderRadius: smallRadius,
            },
            {
                topLBorderRadius: smallRadius,
                topRBorderRadius: mediumRadius,
            },
            {
                topLBorderRadius: mediumRadius,
                topRBorderRadius: smallRadius,
            },
            {
                topLBorderRadius: smallRadius,
            },
            {},
            {},
        ],
    ]

    const mobileReadyBlocks = blocks.map((blockRow) => {
        if (isMobile) {
            const newBlockRow =  blockRow.slice(1, blockRow.length - 1) // remove the first and last column of each row
            return newBlockRow
        }
        return blockRow
    })

    // insert the images into the blocks based on the defined coordinates in contentful
    items.map(
        ({
            title,
            thumbnailXCoordinate: x,
            thumbnailYCoordinate: y,
            previewImage,
            thumbnailPreviewImage,
            url,
            shouldDisplayPreviewImage,
        }) => {
            if (isMobile && x!! >= mobileReadyBlocks[0].length) {
                // because of the shaving above
                x!! = Math.min(mobileReadyBlocks[0].length - (x!! - (mobileReadyBlocks[0].length)), mobileReadyBlocks[0].length - 1)
            }
            const block = mobileReadyBlocks[y!!][x!!]
            if (!block) {
                return
            }
            if (previewImage != null) {
                block.backgroundImage = previewImage
                block.thumbnailPreviewImage = thumbnailPreviewImage
                block.title = title
            }
            if (previewImage == null || !shouldDisplayPreviewImage) {
                block.text = title // show text for projects like "Editorial, Social, etc."
            }
            block.shouldDisplayPreviewImage = shouldDisplayPreviewImage
            block.link = url!!.id
        }
    )

    const generatedBlocks = useBlockGenerator({ blocks: mobileReadyBlocks })
    const [showBlocks, setShowBlocks] = useState(false)

    useEffect(() => {
        setShowBlocks(true) // issue with loading the blocks too soon
    })

    const backgroundProjects = items.filter((item) => item.previewImage != null)

    // TODO  projectsCount) + 0].previewIm
    return (
        <main
            style={{
                minWidth: `${mobileReadyBlocks[0].length * BLOCK_SIZE + 10}px`, // num squares * size + buffer px
                backgroundColor: 'white', // this is to fix flash of white during load
            }}
            id="landing_page" // this ID is used in the body css to fix a bug
        >
            <Head>
                <title>Shane Gallagher</title>
                <meta name="description" content="Shane Gallagher: Irish photographer in Vancouver. Explore his portfolio featuring clients like Sangre De Fruta, Pass the Peas, Sundays Furniture, and more." />
            </Head>
            <div
                className={styles.landingPage__container}
                aria-description={`This landing page is filled with bauhaus-inspired black boxes with white borders differing in radii, to form the silhouette of an "S" for Shane. In the middle of the home page where the S remains prevalent, there are captivating image-previews of Shane's projects, which also act as navigation points to the respective project`}
            >
                {showBlocks && (
                    <div className={styles.landingPage__block_container}>
                        {generatedBlocks.map((block: any, i: number) => {
                            const r = Math.random()
                            if (r >= 0.7 && block.backgroundImage == null) {
                                return (
                                    <Block
                                        {...block}
                                        index={i}
                                        backgroundImage={
                                            backgroundProjects[
                                                Math.floor(
                                                    Math.random() *
                                                        backgroundProjects.length
                                                ) + 0
                                            ]?.previewImage
                                        }
                                        isTempBackground
                                    />
                                )
                            }
                            return <Block {...block} index={i} />
                        })}
                    </div>
                )}
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
            items: data.projectCollection.items.filter(
                (item: Project) => item.isProjectFeatured == true
            ) as Array<Project>,
        },
    }
}
