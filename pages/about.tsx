import client from '../gql/apollo-client'
import { About } from '../types/graphql'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { aboutContentQuery } from '@/gql/about-page-query'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { loaderProp } from '@/utils/loader-prop'
import Image from 'next/image'
import styles from '../styles/about.module.less'
import options from '@/utils/documentToReactComponentsOptions'
import PageWrapper from '@/components/PageWrapper'

export default function About({
    about,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { isMobile } = useWindowDimensions()

    if (!about || !about.portraitsCollection?.items) {
        // This should never happen
        return null
    }

    const description =
        'Meet Shane Gallagher: Photographer, Creative Director, Stylist. Global perspective. Captivating work.'

    return (
        <PageWrapper
            onlyShowNavBar
            pageAriaDescription="A list of all the works and projects by Shane Gallagher."
            headElement={
                <Head>
                    <title>About Shane Gallagher</title>
                    <meta name="description" content={description} />
                    <meta
                        property="og:description"
                        content={
                            'Meet Shane Gallagher: Photographer, Creative Director, Stylist.'
                        }
                    />
                    <meta
                        property="og:title"
                        content={'About Shane Gallagher'}
                    />
                    <meta
                        property="og:image"
                        content={about.portraitsCollection?.items[0]?.url || ''}
                    />
                </Head>
            }
            content={
                <div
                    style={{
                        color: 'white',
                        width: isMobile ? '90%' : '70%',
                        paddingBottom: '1em',
                    }}
                    className={styles.aboutPage__containerSections}
                >
                    <div className={styles.aboutPage__description}>
                        {documentToReactComponents(
                            about.description?.json,
                            options
                        )}
                    </div>
                    <Image
                        alt={
                            about.portraitsCollection?.items!![0]
                                ?.description || ''
                        }
                        src={about.portraitsCollection?.items!![0]?.url || ''}
                        width={
                            about.portraitsCollection?.items!![0]?.width || '0'
                        }
                        height={
                            about.portraitsCollection?.items!![0]?.height || '0'
                        }
                        style={{
                            width: isMobile ? '100%' : '15em',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                        loader={loaderProp}
                        loading="eager" // this may cause loading issues
                    />
                </div>
            }
        />
    )
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: aboutContentQuery,
    })
    return {
        props: {
            about: data.about as About,
        },
    }
}
