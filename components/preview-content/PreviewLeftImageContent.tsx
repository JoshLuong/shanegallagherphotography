import { Maybe } from 'graphql/jsutils/Maybe'
import { useRouter } from 'next/navigation'
import { Fade, Grid } from '@mui/material'
import PreviewContentImage from './PreviewContentImage'
import PreviewContentDate from './PreviewContentDate'
import { useImageLoaded } from '@/hooks/useImageLoaded'
import { SubsectionPreview, Colour } from '@/types/graphql'
import styles from '../../styles/PreviewLeftImageContent.module.less'

interface PreviewLeftImageContentProps {
    subsectionContent: Maybe<SubsectionPreview> | undefined
    colourScheme: Colour
}
const PreviewLeftImageContent: React.FC<PreviewLeftImageContentProps> = ({
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
    const onNavigate = () => router.push(`/projects/${url?.id}`)

    return (
        <div className={styles.previewLeftImageContent__container}>
            <div className={styles.previewLeftImageContent__text}>
                <Fade
                    in={true}
                    timeout={{
                        enter: 1000,
                    }}
                    style={{ transitionDelay: `300ms` }}
                >
                    <div>
                        <div
                            className={
                                styles.previewLeftImageContent__primaryText
                            }
                        >
                            {title}
                        </div>
                        <div
                            className={
                                styles.previewLeftImageContent__secondaryText
                            }
                        >
                            Chin Injeti
                        </div>
                        <div
                            className={
                                styles.previewLeftImageContent__tertiaryText
                            }
                        >
                            Music Video
                        </div>
                    </div>
                </Fade>
            </div>
            <div
                className={styles.previewLeftImageContent__imagesContainer}
                onClick={() => onNavigate()}
            >
                {[1, 2, 3].map((_, index) => (
                    <div
                        key={index}
                        className={styles.previewLeftImageContent__image}
                    >
                        <PreviewContentImage
                            loaded={loaded}
                            width="100%"
                            ref={ref}
                            onLoad={onLoad}
                            previewImageURL={previewImage?.url || ''}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PreviewLeftImageContent
