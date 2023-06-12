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
    console.log('left')
    const router = useRouter()
    if (!subsectionContent) {
        return null
    }
    const { previewImage, previewDescription, title, url } = subsectionContent
    const { tertiary } = colourScheme
    const onNavigate = () => router.push(`/projects/${url?.id}`)

    console.log('LEFT')
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
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
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
