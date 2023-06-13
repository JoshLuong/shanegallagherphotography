import { Maybe } from 'graphql/jsutils/Maybe'
import { Grid } from '@mui/material'
import PreviewContentImage from './PreviewContentImage'
import PreviewContentDate from './PreviewContentDate'
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
    colourScheme,
}) => {
    const [ref, loaded, onLoad] = useImageLoaded()
    const router = useRouter()

    if (!subsectionContent) {
        return null
    }
    const { previewImage, previewDescription, title, url } = subsectionContent
    const { tertiary } = colourScheme
    const fontSize = subsectionContent.titleFontSize
        ? { fontSize: subsectionContent.titleFontSize }
        : {}
    const onNavigate = () => router.push(`/projects/${url?.id}`)

    return (
        <Fade delay={300} duration={1800}>
            <div className={styles.previewRightImageContent__container}>
                <div className={styles.previewRightImageContent__textContainer}>
                    <PreviewContentDate
                        date={title}
                        className={styles.previewRightImageContent__text}
                    />
                    <PreviewContentDate
                        date={'Watermelon Summer Series'}
                        className={styles.previewRightImageContent__subtext}
                    />
                </div>
                <div
                    className={styles.previewRightImageContent__imagesContainer}
                >
                    {[1, 2, 3].map((_, index) => (
                        <div
                            key={index}
                            className={styles.previewRightImageContent__image}
                        >
                            <Link href={`/projects/${url?.id}`}>
                                <PreviewContentImage
                                    loaded={loaded}
                                    width="100%"
                                    ref={ref}
                                    onLoad={onLoad}
                                    previewImageURL={previewImage?.url || ''}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
                <PreviewContentDate
                    date="Social Content"
                    className={styles.previewRightImageContent__subText}
                />
            </div>
        </Fade>
    )
}

export default PreviewRightImageContent
