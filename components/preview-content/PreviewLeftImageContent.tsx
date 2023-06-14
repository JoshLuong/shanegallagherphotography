import { Maybe } from 'graphql/jsutils/Maybe'
import { useRouter } from 'next/navigation'
import { Fade, Grid } from '@mui/material'
import PreviewContentImage from './PreviewContentImage'
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
    const { secondaryText, tertiaryText, title, url, previewImagesCollection } =
        subsectionContent
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
                            {secondaryText}
                        </div>
                        <div
                            className={
                                styles.previewLeftImageContent__tertiaryText
                            }
                        >
                            {tertiaryText}
                        </div>
                    </div>
                </Fade>
            </div>
            <div
                className={styles.previewLeftImageContent__imagesContainer}
                onClick={() => onNavigate()}
            >
                {previewImagesCollection?.items.map((item, index) => (
                    <div
                        key={index}
                        className={styles.previewLeftImageContent__image}
                        style={{
                            height: `${
                                100 / previewImagesCollection?.items.length
                            }%`,
                        }}
                    >
                        <PreviewContentImage
                            loaded={loaded}
                            width="100%"
                            ref={ref}
                            onLoad={onLoad}
                            previewImageURL={item?.url || ''}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PreviewLeftImageContent
