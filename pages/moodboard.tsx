'use client'

import client from '../gql/apollo-client'
import { Asset } from '../types/graphql'
import Head from 'next/head'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import DraggableAsset from '@/components/DraggableAsset'
import styles from '../styles/moodboard.module.less'
import { useEffect, useMemo, useRef, useState } from 'react'
import getRandomTransformation from '@/utils/getRandomTransformation'
import { moodboardQuery } from '@/gql/moodboard-query'
import getMoodboard from '@/utils/getMoodboard'
import PageWrapper from '@/components/PageWrapper'
import { onScrollToTop } from '@/utils/onScrollToTop'
import Link from 'next/link'

export default function Moodboard({}) {
    const { isMobile } = useWindowDimensions()
    const [gallery, setGallery] = useState<Asset[]>([])
    const [didLoad, setDidLoad] = useState(false)
    const zIndexRef = useRef(1)

    useEffect(() => {
        onScrollToTop() // resets scroll position (mainly for mobile)
    }, [])

    useEffect(() => {
        zIndexRef.current = 1
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
                setGallery(response.data.assetCollection?.items)
                setDidLoad(true)
            })

        window.addEventListener('moodboard-storage', removeMoodboard)

        return () =>
            window.removeEventListener('moodboard-storage', removeMoodboard)
    })

    let imageCount = 0

    const node = useMemo(() => {
        const galleryElements = gallery.map((item, index) => {
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
        })
        return galleryElements.length == 0 && didLoad ? (
            <div
                style={{
                    color: 'white',
                    padding: '0.5em',
                }}
                className={styles.moodboardPage__empty_text}
            >
                This space is for creating your personal moodboard with images
                from my{' '}
                <Link
                    href="/works"
                    className="clickable_component"
                    style={{
                        color: 'black',
                        textDecoration: 'none',
                        background: 'white',
                    }}
                >
                    works
                </Link>
                .
                <span
                    style={{
                        display: 'block',
                        marginTop: '0.2em',
                        fontSize: '0.7em',
                    }}
                >
                    Explore, pin, and bring your vision to life!
                </span>
            </div>
        ) : (
            galleryElements
        )
    }, [gallery, didLoad, gallery.length == 0 && didLoad])

    return (
        <PageWrapper
            headElement={
                <Head>
                    <title>Your Moodboard</title>
                    <meta
                        property="og:description"
                        content="A space to curate your personal
                    moodboard."
                    />
                    {gallery.length > 0 && (
                        <meta
                            property="og:image"
                            content={gallery[0].fileName || ''}
                        />
                    )}
                </Head>
            }
            onlyShowNavBar={didLoad && gallery.length == 0}
            content={node}
        />
    )
}
