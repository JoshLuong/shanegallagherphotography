import { loaderProp } from '@/utils/loader-prop'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import styles from '../styles/ResizableImage.module.less'

interface ResizableImageProps {
    src: string
}
const ResizableImage: React.FC<ResizableImageProps> = ({ src }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isIntersecting, setIntersecting] = useState(false)
    const [width, setWidth] = useState<number | null>(null)
    const [height, setHeight] = useState<number | null>(null)
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [isSeen, setIsSeen] = useState(false)

    let observer: any = null

    useEffect(() => {
        if (ref?.current && isImageLoaded) {
            setWidth(ref.current?.clientWidth)
            setHeight(ref.current?.clientHeight)

            observer = new IntersectionObserver(([entry]) =>
                setIntersecting(entry.isIntersecting)
            )
            observer.observe(ref?.current)
        }
        return () => observer?.disconnect()
    }, [isImageLoaded])

    useEffect(() => {
        if (isIntersecting) {
            setIsSeen(true)
        }
    }, [isIntersecting])
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div
            ref={ref}
            style={{ width: width ?? '100%', height: height ?? '100%' }}
        >
            <Image
                alt={'TODO'}
                src={src}
                width="0"
                height="0"
                style={{
                    width: isIntersecting || isSeen ? '50%' : '100%',
                    height: isIntersecting || isSeen ? '50%' : '100%',
                }}
                loader={loaderProp}
                loading="lazy"
                onLoadingComplete={() => setIsImageLoaded(true)}
                className={styles.resizableImage}
            />
        </div>
    )
}

export default ResizableImage
