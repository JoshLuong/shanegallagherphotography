import styles from '../styles/contact.module.less'
import client from '../gql/apollo-client'
import { subsectionQuery } from '@/gql/landing-page-query'
import { Subsection } from '../types/graphql'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Block from '@/components/block/Block'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import useBlockGenerator from '@/hooks/useBlockGenerator'
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
                position: 'fixed',
                overflow: 'auto',
            }}
        >
            <div>
                <ToolBar  />
                <Head>
                    <title>Contact Shane Gallagher</title>
                    <meta name="description" content="Contact Shane Gallagher: gallaghershane@icloud.com." />
                </Head>
                <Fade
                    in={true}
                    timeout={{
                        enter: 1300,
                    }}
                >
                    <div className={styles.contactPage__text_container}>

                    <a href="https://www.instagram.com/shanegallagher_/" target='_blank' className={styles.contactPage__text}>INSTAGRAM @SHANEGALLAGHER_</a>

                    <a href="mailto:gallaghershane@icloud.com" className={styles.contactPage__text}>SEND A MESSAGE TO GALLAGHERSHANE@ICLOUD.COM</a>
                    <ContactForm />

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
            items: data.projectCollection.items as Array<Subsection>,
        },
    }
}
