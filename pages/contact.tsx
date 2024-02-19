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
                <Fade
                    in={true}
                    timeout={{
                        enter: 1300,
                    }}
                >
                    <a href="mailto:gallaghershanephotography@gmail.com" className={styles.contactPage__text}> GALLAGHERSHANEPHOTOGRAPHY@GMAIL.COM</a>
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
