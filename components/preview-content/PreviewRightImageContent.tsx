import { Maybe } from 'graphql/jsutils/Maybe'
import { Grid } from '@mui/material'
import PreviewContentImage from './PreviewContentImage'
import RotatedText from '../RotatedText'
import { useImageLoaded } from '@/hooks/useImageLoaded'
import { SubsectionPreview, Colour } from '@/types/graphql'
import { useRouter } from 'next/router'
import { Fade } from 'react-awesome-reveal'
import stylesc from '../../styles/PreviewContentShared.module.less'
import styles from '../../styles/PreviewRightImageContent.module.less'
import Link from 'next/link'

interface PreviewRightImageContentProps {
    subsectionContent: Maybe<SubsectionPreview> | undefined
    colourScheme: Colour
}
const PreviewRightImageContent: React.FC<PreviewRightImageContentProps> = ({
    subsectionContent,
}) => {
    const router = useRouter()

    if (!subsectionContent) {
        return null
    }
    const { title, url, secondaryText, tertiaryText, previewImagesCollection } =
        subsectionContent
    const fontSize = subsectionContent.titleFontSize
        ? { fontSize: subsectionContent.titleFontSize }
        : {}
    const onNavigate = () => router.push(`/projects/${url?.id}`)

    return (
        <Fade delay={300} duration={1800}>
            <div className={styles.previewRightImageContent__container}>
                <div className={styles.previewRightImageContent__textContainer}>
                    <RotatedText
                        text={title}
                        className={styles.previewRightImageContent__text}
                        fontStyle="primary"
                        fontSize={'3em'}
                    />
                    <RotatedText
                        text={secondaryText}
                        className={styles.previewRightImageContent__subtext}
                        fontStyle="secondary"
                        fontSize={'1.5em'}
                    />
                </div>
                <div
                    className={styles.previewRightImageContent__imagesContainer}
                >
                    {previewImagesCollection?.items.map((item, index) => (
                        <div
                            key={index}
                            className={styles.previewRightImageContent__image}
                            style={{ height: index === 1 ? '75vh' : '100%' }}
                        >
                            <Link href={`/projects/${url?.id}`}>
                                <PreviewContentImage
                                    width="100%"
                                    previewImageURL={item?.url || ''}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
                <RotatedText
                    text={tertiaryText}
                    fontStyle="tertiary"
                    alignment="start"
                    className={styles.previewRightImageContent__subText}
                    fontSize={'0.7em'}
                />
            </div>
        </Fade>
    )
}

export default PreviewRightImageContent
