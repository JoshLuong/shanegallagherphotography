import { Maybe } from 'graphql/jsutils/Maybe'
import { Grid } from '@mui/material'
import PreviewContentImage from './PreviewContentImage'
import { useRouter } from 'next/router'
import { useImageLoaded } from '@/hooks/useImageLoaded'
import { SubsectionPreview, Colour } from '@/types/graphql'
import { Fade } from 'react-awesome-reveal'
import commonStyles from '../../styles/PreviewContentShared.module.less'
import RotatedText from '../RotatedText'
import styles from '../../styles/PreviewFullImage.module.less'

interface PreviewFullImageProps {
    subsectionContent: Maybe<SubsectionPreview> | undefined
    colourScheme: Colour
}
const PreviewFullImage: React.FC<PreviewFullImageProps> = ({
    subsectionContent,
    colourScheme,
}) => {
    const router = useRouter()

    if (!subsectionContent) {
        return null
    }
    const { url, title, secondaryText, tertiaryText, previewImagesCollection } =
        subsectionContent
    const onNavigate = () => router.push(`/projects/${url?.id}`)

    return (
        <Grid container className={commonStyles.previewImageContent__container}>
            <PreviewContentImage
                previewImageURL={previewImagesCollection?.items[0]?.url || ''}
                className="preview-fill-image__background"
                delay={700}
                duration={800}
                width="100%"
            />
            <div className={styles.previewFullImage__textContainer}>
                <div className={styles.previewFullImage__subtextContainer}>
                    <RotatedText
                        text={secondaryText}
                        fontSize={'3em'}
                        className={styles.previewFullImage__secondarytext}
                        fontStyle="secondary"
                    />
                    <RotatedText
                        text={tertiaryText}
                        className={styles.previewFullImage__tertiarytext}
                        fontStyle="tertiary"
                        fontSize={'2em'}
                    />
                </div>

                <RotatedText
                    text={title}
                    className={styles.previewFullImage__mainText}
                    fontSize={'4em'}
                    fontStyle="primary"
                />
            </div>
        </Grid>
    )
}

export default PreviewFullImage
