'use client'

import client from '../gql/apollo-client'
import { subsectionQuery } from '@/gql/landing-page-query'
import { About, Asset, Subsection } from '../types/graphql'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Block from '@/components/block/Block'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import useBlockGenerator, { BLOCK_SIZE } from '@/hooks/useBlockGenerator'
import { Fade } from '@mui/material'
import ToolBar from '@/components/Toolbar'
import { aboutContentQuery } from '@/gql/about-page-query'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import DraggableAsset from '@/components/DraggableAsset'
import { loaderProp } from '@/utils/loader-prop'
import Image from 'next/image'
import styles from '../styles/about.module.less'
import Link from 'next/link'
import Toolbar from '@/components/Toolbar'
import { useEffect, useMemo, useRef, useState } from 'react'
import getRandomTransformation from '@/utils/getRandomTransformation'
import { moodboardQuery } from '@/gql/moodboard-query'

export default function Moodboard({}) {
    const { isMobile } = useWindowDimensions()
    const [offset, setOffset] = useState(0) // in pixels
    const ref = useRef<HTMLDivElement>(null)
    const [gallery, setGallery] = useState<Asset[]>([])
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


    useEffect(() => {
        let moodboard: string[] = [];
        const sessionItem = window.sessionStorage.getItem("moodboard")
        if (sessionItem != null) {
            moodboard = JSON.parse(sessionItem)
            console.log(moodboard)
        }
        client.query({
            query: moodboardQuery,
            variables: { fileNames:moodboard} 
        }).then((response: any) => {
            console.log(response)
            console.log(response.data.assetCollection)
            setGallery(response.data.assetCollection?.items)
        })
    })

    let imageCount = 0
    const galleryElements = useMemo(
        () =>
            gallery.map((item, index) => {
                console.log("ITEM")
                console.log(item)
                const isString = typeof item == 'string'
                const randomInt = Math.random()
                let transformation = getRandomTransformation()
                let scale = ''
                if (!isMobile && !isString && randomInt >= 0.8) {
                    scale = 'scale(1.2)'
                }
                transformation += scale

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
            className={styles.aboutPage__container}
        >
            <Head>
                <title>About Shane Gallagher</title>
            </Head>

            <Toolbar ref={ref} />
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    margin: isMobile ? `0 0.2em 1.3em 0` : `0 1.2em 1em 1.2em`,
                    top: `${offset * 1.5}px`,
                    position: 'absolute',
                }}
            >
                {galleryElements}
            </div>
        </main>
    )
}

