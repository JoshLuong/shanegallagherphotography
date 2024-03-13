'use client'

import client from '../gql/apollo-client'
import { About, Asset, Subsection } from '../types/graphql'
import Head from 'next/head'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import useBlockGenerator, { BLOCK_SIZE } from '@/hooks/useBlockGenerator'
import DraggableAsset from '@/components/DraggableAsset'
import styles from '../styles/moodboard.module.less'
import Toolbar from '@/components/Toolbar'
import { useEffect, useMemo, useRef, useState } from 'react'
import getRandomTransformation from '@/utils/getRandomTransformation'
import { moodboardQuery } from '@/gql/moodboard-query'
import getMoodboard from '@/utils/getMoodboard'

export default function Moodboard({}) {
    const { isMobile } = useWindowDimensions()
    const [offset, setOffset] = useState(0) // in pixels
    const ref = useRef<HTMLDivElement>(null)
    const [gallery, setGallery] = useState<Asset[]>([])
    const [didLoad, setDidLoad] = useState(false)
    const zIndexRef = useRef(1)

    useEffect(() => {
        zIndexRef.current = 1
        if (!ref.current) return
        const resizeObserver = new ResizeObserver(() => {
            setOffset(ref.current!!.offsetHeight)
        })
        resizeObserver.observe(ref.current)
        return () => resizeObserver.disconnect() // clean up
    }, [])

    const removeMoodboard = () => {
        let moodboard = getMoodboard()
        setGallery(
            gallery.filter((galImage) =>
                moodboard.includes(galImage.fileName || '')
            )
        )
    }

    useEffect(() => {
        let moodboard = getMoodboard()
        client
            .query({
                query: moodboardQuery,
                variables: { fileNames: moodboard },
            })
            .then((response: any) => {
                console.log(response.data)
                setGallery(response.data.assetCollection?.items)
                setDidLoad(true)
            })

        window.addEventListener('moodboard-storage', removeMoodboard)

        return () =>
            window.removeEventListener('moodboard-storage', removeMoodboard)
    })

    let imageCount = 0
    const galleryElements = useMemo(
        () =>
            gallery.map((item, index) => {
                const isString = typeof item == 'string'
                let transformation = getRandomTransformation()

                return isString ? (
                    <DraggableAsset
                        reactNode={item}
                        key={index}
                        transformation={transformation}
                        index={index}
                        ref={zIndexRef}
                    />
                ) : (
                    <DraggableAsset
                        imageAsset={item!!}
                        key={index}
                        transformation={transformation}
                        index={imageCount++}
                        images={gallery as Asset[]}
                        tags={[]}
                        ref={zIndexRef}
                    />
                )
            }),
        [gallery, isMobile]
    )

    // TODO: we know the height of toolbar (use ref) so just use that to calc the block size
    return (
        <main
            style={{
                // WARNING: do not edit, it will cause weird bug with height and width
                height: '100vh',
                overflow: 'auto',
                overflowX: 'hidden', // helps with mobile issue where the whole project is able to be moved left to right
                position: 'relative', // this is so we can have proper background when making the below pos absolute
            }}
            id="scroll"
            className={styles.moodboardPage__container}
        >
            <Head>
                <title>Your Custom Moodboard</title>
                <meta property="og:image" content={"Shane Gallagher - Your Custom Moodboard"} />
            </Head>

            <Toolbar ref={ref} isGridBackground />
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    margin: isMobile ? `0 0.2em 1.3em 0` : `0 1.2em 1em 1.2em`,
                    top: isMobile
                        ? `${BLOCK_SIZE * 1.5}px`
                        : `${BLOCK_SIZE * 1.9}px`,
                    position: 'absolute',
                    width: '100%',
                }}
            >
                {galleryElements.length == 0 && didLoad ? (
                    <div
                        style={{
                            color: 'white',
                            background: 'black',
                            padding: '0.5em',
                        }}
                        className={styles.moodboardPage__empty_text}
                    >
                        THIS IS A DEDICATED SPACE TO CURATE YOUR PERSONAL
                        MOODBOARD USING ANY OF THE MOMENTS CAPTURED IN MY
                        WORK.&nbsp;
                        <span
                            style={{
                                fontSize: '0.75em',
                                display: 'block',
                                marginTop: '0.2em',
                            }}
                        >
                            START BY EXPLORING MY WORKS AND PINNING ANY IMAGES
                            YOU ENVISION IN THIS BOARD.
                        </span>
                    </div>
                ) : (
                    galleryElements
                )}
            </div>
        </main>
    )
}
