// import styles from '../styles/about.module.less'
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
import { useMemo } from 'react'
import getRandomTransformation from '@/utils/getRandomTransformation'


export default function About({
    about,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { isMobile } = useWindowDimensions()
    if (!about || !about.portraitsCollection?.items) {
        // This should never happen
        return null
    }

    let imageCount = 0;
    const galleryElements = useMemo(() => about.portraitsCollection?.items.map((item, index) => {
        const isString = typeof item == "string"
        const randomInt = Math.random()
        let transformation = getRandomTransformation()
        let scale = ''
        if (!isMobile && !isString && randomInt >= 0.8) {
            scale = 'scale(1.2)'
        }
        transformation += scale

        return typeof item === 'string' ? (
            <DraggableAsset
                reactNode={item}
                key={index}
                transformation={transformation}
                index={index}
            />
        ) : (
            <DraggableAsset
                imageAsset={item!!}
                key={index}
                transformation={transformation}
                index={imageCount++}
                images={about.portraitsCollection?.items as Asset[]}
                tags={[]}
            />
        )
    }), [about.portraitsCollection?.items, isMobile])


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

            <Toolbar />
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    margin: isMobile
                        ? `0 0.2em 1.3em 0`
                        : `0 1.2em 1em 1.2em`,
                    top: isMobile
                    ? `${BLOCK_SIZE * 1.5}px`
                    : `${BLOCK_SIZE * 1.9}px`,
                    position: 'absolute',
                }}
            >
                <DraggableAsset
                    key={"about-key"}
                    reactNode={documentToReactComponents(about.description?.json)}
                    transformation={'none'}
                    className={styles.aboutPage__aboutAsset}
                    disableDrag
                    index={-1}
                />
                {galleryElements}
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
