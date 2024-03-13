import styles from '../styles/contact.module.less'
import client from '../gql/apollo-client'
import { subsectionQuery } from '@/gql/landing-page-query'
import { Subsection } from '../types/graphql'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Block from '@/components/block/Block'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import useBlockGenerator, { BLOCK_SIZE } from '@/hooks/useBlockGenerator'
import { Fade } from '@mui/material'
import ToolBar from '@/components/Toolbar'
import ContactForm from '@/components/contact/Contact'

export const NO_SECTION_OPEN = -1
export default function Contact({
    items,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { isMobile } = useWindowDimensions()
    if (!items) {
        // This should never happen
        return null
    }

    return (
        <main
            className={styles.contactPage__container}
            style={{
                // WARNING: do not edit, it will cause weird bug with height and width
                height: '100vh',
                position: 'relative',
                overflow: 'auto',
            }}
        >
            <div>
                <ToolBar isGridBackground hideBorders />
                <Head>
                    <title>Contact Shane Gallagher</title>
                    <meta
                        name="description"
                        content="Contact Shane Gallagher: gallaghershane@icloud.com."
                    />
                </Head>
                <div
                    style={{
                        top: isMobile
                            ? `${BLOCK_SIZE * 1}px`
                            : `${BLOCK_SIZE * 1.5}px`,
                        position: 'absolute',
                        width: '100%',
                    }}
                    className={styles.contactPage__text_container}
                >
                    <Fade
                        in={true}
                        timeout={{
                            enter: 1300,
                        }}
                    >
                        <div
                            style={{
                                width: isMobile ? '90%' : '60%',
                                margin: 'auto',
                            }}
                        >
                            <a
                                href="https://www.instagram.com/shanegallagher_/"
                                target="_blank"
                                className={styles.contactPage__text}
                            >
                                INSTAGRAM @SHANEGALLAGHER_
                            </a>

                            <a
                                href="mailto:hello@shanegallagher.com"
                                className={styles.contactPage__text}
                            >
                                SEND A MESSAGE TO HELLO@SHANEGALLAGHER.COM
                            </a>
                            <ContactForm />
                        </div>
                    </Fade>
                </div>
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
            items: data.projectCollection.items as Array<Subsection>,
        },
    }
}
