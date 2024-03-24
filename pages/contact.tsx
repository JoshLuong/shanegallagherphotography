import styles from '../styles/contact.module.less'
import client from '../gql/apollo-client'
import { subsectionQuery } from '@/gql/landing-page-query'
import { Subsection } from '../types/graphql'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import ContactForm from '@/components/contact/Contact'
import PageWrapper from '@/components/PageWrapper'

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
        <PageWrapper
            onlyShowNavBar
            headElement={
                <Head>
                    <title>Contact Shane Gallagher</title>
                    <meta
                        name="description"
                        content="Contact Shane Gallagher: hello@shanegallagher.com."
                    />
                </Head>
            }
            content={
                <div
                    style={{
                        width: isMobile ? '90%' : '60%',
                        margin: 'auto',
                    }}
                    className={styles.contactPage__text_container}
                >
                    <a
                        href="https://www.instagram.com/shanegallagher_/"
                        target="_blank"
                        className={styles.contactPage__text}
                        style={{
                            marginBottom: '0.5em',
                        }}
                    >
                        <InstagramIcon
                            style={{
                                marginRight: '0.5em',
                            }}
                        />{' '}
                        shanegallagher_
                    </a>

                    <a
                        href="mailto:hello@shanegallagher.com"
                        className={styles.contactPage__text}
                    >
                        <EmailIcon
                            style={{
                                marginRight: '0.5em',
                            }}
                        />{' '}
                        hello@shanegallagher.com
                    </a>
                    <ContactForm />
                </div>
            }
        />
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
