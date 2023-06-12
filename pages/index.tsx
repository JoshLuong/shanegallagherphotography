import styles from '../styles/index.module.less'
import client from '../gql/apollo-client'
import { subsectionQuery } from '@/gql/landing-page-query'
import { Subsection } from '../types/graphql'
import { InferGetStaticPropsType } from 'next'
import { ReactNode, useState } from 'react'
import { useRouter } from 'next/navigation'
import LandingPageSection from '@/components/landing-page/LandingPageSection'
import SubSection, { ThemeType } from '@/components/landing-page/SubSection'
import Head from 'next/head'

export const NO_SECTION_OPEN = -1
export default function Home({
    items,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [openSection, setOpenSection] = useState<number>(NO_SECTION_OPEN)
    const [fastAnimation, setFastAnimation] = useState<boolean>(false)
    const router = useRouter()

    if (!items) {
        // This should never happen
        return null
    }
    return (
        <main>
            <Head>
                <title>Home</title>
            </Head>
            <div className={`${styles.landingPage__container} `}>
                <div className={styles.landingPage__containerSections}>
                    {items.map(
                        (value: Subsection, index: number): ReactNode => {
                            if (!value) return null
                            const {
                                title,
                                previewContent,
                                width,
                                colourScheme,
                            } = value
                            const show = openSection === index

                            const onOpen = () => {
                                if (show) {
                                    onClose()
                                    return
                                }
                                setOpenSection(index)
                                setTimeout(() => {
                                    setFastAnimation(true)
                                }, 150)
                                setTimeout(() => {
                                    setFastAnimation(false)
                                }, 800)
                            }
                            const onClose = () => {
                                setOpenSection(NO_SECTION_OPEN)
                            }

                            const props = {
                                backgroundColor: colourScheme?.primary || '',
                                titleColor: colourScheme?.secondary || '',
                                title: title || '',
                            }
                            return (
                                <>
                                    <LandingPageSection
                                        openSection={openSection}
                                        onClick={onOpen}
                                        onMobileClick={() =>
                                            router.push(
                                                `/projects/${previewContent?.url?.id}`
                                            )
                                        }
                                        fastAnimation={fastAnimation}
                                        containerWidth={width || undefined}
                                        {...props}
                                        index={index}
                                    />
                                    <SubSection
                                        onClick={onClose}
                                        show={show}
                                        subsectionContent={previewContent}
                                        colourScheme={colourScheme}
                                        // TODO: make contentful
                                        theme={
                                            previewContent?.contentType
                                                ?.type as ThemeType
                                        }
                                    />
                                </>
                            )
                        }
                    )}
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
            items: data.subsectionCollection.items as Array<Subsection>,
        },
    }
}
