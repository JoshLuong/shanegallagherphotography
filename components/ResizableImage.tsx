import { getBehaviourStyles } from '@/utils/getBehaviourStyles'
import { loaderProp } from '@/utils/loader-prop'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/ResizableImage.module.less'

interface ResizableImageProps {
    src: string
    behaviour: string
}

const ResizableImage: React.FC<ResizableImageProps> = ({ src, behaviour }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isIntersecting, setIntersecting] = useState(false)
    const [isSeen, setIsSeen] = useState(false)

    const scrollHandler = () => {
        const offset = ref?.current?.getBoundingClientRect().top || 0
        if (offset <= 250) {
            setIntersecting(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, true)
        return () => {
            window.removeEventListener('scroll', scrollHandler, true)
        }
    }, [])

    useEffect(() => {
        if (isIntersecting) {
            setIsSeen(true)
        }
    }, [isIntersecting])

    const style = getBehaviourStyles(behaviour)
    return (
        <div ref={ref} style={{ width: '100%', height: '100%' }}>
            <Image
                alt={'TODO'}
                src={src}
                width="0"
                height="0"
                style={{
                    width:
                        isIntersecting || isSeen
                            ? style?.endWidth
                            : style?.startWidth,
                    height:
                        isIntersecting || isSeen
                            ? style?.endHeight
                            : style?.startHeight,
                    marginLeft: style?.marginLeft ?? '0',
                }}
                loader={loaderProp}
                loading="lazy"
                className={styles.resizableImage}
            />
        </div>
    )
}

export default ResizableImage
