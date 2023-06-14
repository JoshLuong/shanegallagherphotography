import { loaderProp } from '@/utils/loader-prop'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styles from '../../styles/PreviewContentImage.module.less'

interface PreviewContentImageProps {
    previewImageURL: string
    ref: any
    loaded: boolean
    onLoad: () => any
    className?: string
    width?: string
    delay?: number
    duration?: number
}
const PreviewContentImage: React.FC<PreviewContentImageProps> = ({
    previewImageURL,
    ref,
    onLoad,
    loaded,
    className,
    width,
    delay,
    duration,
}) => {
    return (
        <Fade
            delay={delay ?? 500}
            duration={duration ?? 1200}
            className={styles.previewContent__imageContainer}
        >
            <Image
                ref={ref}
                className={`${styles.previewContent__image} " ${className}`}
                onLoad={onLoad}
                src={previewImageURL}
                alt=""
                loading="lazy"
                width="0"
                height="0"
                style={{ width: width || '50%', height: '100%' }}
                loader={loaderProp}
            />
        </Fade>
    )
}

export default PreviewContentImage
