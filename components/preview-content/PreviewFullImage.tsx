import { Maybe } from 'graphql/jsutils/Maybe'
import { Grid } from '@mui/material'
import PreviewContentImage from './PreviewContentImage'
import { useRouter } from 'next/router'
import { useImageLoaded } from '@/hooks/useImageLoaded'
import { SubsectionPreview, Colour } from '@/types/graphql'
import { Fade } from 'react-awesome-reveal'
import commonStyles from '../../styles/PreviewContentShared.module.less'
import PreviewContentDate from './PreviewContentDate'
import styles from '../../styles/PreviewFullImage.module.less'

interface PreviewFullImageProps {
    subsectionContent: Maybe<SubsectionPreview> | undefined
    colourScheme: Colour
}
const PreviewFullImage: React.FC<PreviewFullImageProps> = ({
    subsectionContent,
    colourScheme,
}) => {
    const [ref, loaded, onLoad] = useImageLoaded()
    const router = useRouter()

    if (!subsectionContent) {
        return null
    }
    const { previewImage, url, title } = subsectionContent
    const { tertiary } = colourScheme
    const onNavigate = () => router.push(`/projects/${url?.id}`)

    return (
        <Grid container className={commonStyles.previewImageContent__container}>
            <PreviewContentImage
                loaded={loaded}
                fadeLeft
                ref={ref}
                onLoad={onLoad}
                previewImageURL={previewImage?.url || ''}
                className="preview-fill-image__background"
                delay={700}
                duration={800}
                width="100%"
            />
            <div className={styles.previewFullImage__textContainer}>
                <div className={styles.previewFullImage__subtextContainer}>
                    <PreviewContentDate
                        date={'With Lucy Guo'}
                        className={styles.previewFullImage__secondarytext}
                    />
                    <PreviewContentDate
                        date={'Portraits'}
                        className={styles.previewFullImage__tertiarytext}
                    />
                </div>

                <PreviewContentDate
                    date={title}
                    className={styles.previewFullImage__mainText}
                />
            </div>
        </Grid>
    )
}

export default PreviewFullImage
