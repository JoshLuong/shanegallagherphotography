import { Asset } from '@/types/graphql'
import { getBehaviourStyles } from '@/utils/getBehaviourStyles'
import { loaderProp } from '@/utils/loader-prop'
import { Dialog, DialogTitle, Fade, IconButton } from '@mui/material'
import Image from 'next/image'
import { RefObject, useEffect, useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import styles from '../styles/ResizableAsset.module.less'

interface ResizableAssetProps {
    item: Asset | string
    behaviour: string
    parent: RefObject<HTMLDivElement>
}

const ResizableAsset: React.FC<ResizableAssetProps> = ({
    item,
    behaviour,
    parent,
}) => {
    const isString = typeof item == 'string'
    const ref = useRef<HTMLDivElement>(null)
    const [isIntersecting, setIntersecting] = useState(false)
    const [isSeen, setIsSeen] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [width, setWidth] = useState<number | null>(null)
    const [height, setHeight] = useState<number | null>(null)
    const [animationStyle, setAnimationStyle] = useState('')
    const [openLargeImage, setOpenLargeImage] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const isLeftAligned =
        (containerRef.current?.getBoundingClientRect().left || 1) -
            (parent?.current?.getBoundingClientRect().left || 1) <
        (parent?.current?.getBoundingClientRect().width || 1) / 2

    const scrollHandler = () => {
        const offset = ref?.current?.getBoundingClientRect().top || 0

        setAnimationStyle(
            `translate3d(0,calc(1px*(${window.scrollY - window.innerWidth} + ${
                window.innerHeight * 0.5
            }*2)*.07),0)`
        )
        if (offset <= window.innerHeight / 2 - 50) {
            setIntersecting(true)
        } else {
            setIntersecting(false)
        }
    }

    useEffect(() => {
        if ((ref?.current && isImageLoaded) || isString) {
            setWidth(ref.current?.clientWidth || 0)
            setHeight(ref.current?.clientHeight || 0)
        }
    }, [isImageLoaded, isString])

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, true)
        return () => {
            window.removeEventListener('scroll', scrollHandler, true)
        }
    }, [])

    useEffect(() => {
        if (isIntersecting) {
            setIsSeen(true)
        } else {
            setIsSeen(false)
        }
    }, [isIntersecting])

    const behaviourStyle = getBehaviourStyles(behaviour)
    const style = {
        width:
            isIntersecting || isSeen
                ? behaviourStyle?.endWidth
                : behaviourStyle?.startWidth,
        height:
            isIntersecting || isSeen
                ? behaviourStyle?.endHeight
                : behaviourStyle?.startHeight,
        marginLeft: behaviourStyle?.marginLeft ?? '0',
    }
    return (
        <div
            ref={containerRef}
            style={{
                transform: isLeftAligned ? animationStyle : 'none',
            }}
            className={styles.resizableAsset__parallax}
        >
            <div
                ref={ref}
                style={{
                    width: width || '100%',
                    height: height || '100%',
                }}
                className={styles.resizableAsset__container}
            >
                {isString ? (
                    <Fade in>
                        <div className={styles.resizableAsset} style={style}>
                            {item}
                        </div>
                    </Fade>
                ) : (
                    <>
                        <Image
                            alt={'TODO'}
                            src={item.url || ''}
                            width={item.width || '0'}
                            height={'0'}
                            style={
                                height == null && width == null
                                    ? {
                                          height: '100%',
                                          width: '100%',
                                          visibility: 'hidden',
                                      }
                                    : style
                            }
                            loader={loaderProp}
                            onLoadingComplete={() => setIsImageLoaded(true)}
                            loading="lazy"
                            onClick={() => {
                                setOpenLargeImage(!openLargeImage)
                            }}
                            className={`${styles.resizableAsset} ${styles.resizableAsset__boxShadow}`}
                        />
                        <Dialog
                            open={openLargeImage}
                            onClose={() => setOpenLargeImage(false)}
                            maxWidth={false}
                        >
                            <DialogTitle
                                className={styles.resizableAsset__dialogTitle}
                            >
                                <IconButton
                                    aria-label="close"
                                    onClick={() => setOpenLargeImage(false)}
                                    sx={{
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: 'white',
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>
                            <Image
                                alt={'TODO'}
                                src={item?.url || ''}
                                width={item?.width || '0'}
                                height={item?.height || '0'}
                                style={style}
                                loader={loaderProp}
                                onLoadingComplete={() => setIsImageLoaded(true)}
                                loading="lazy"
                                className={styles.resizableAsset}
                            />
                        </Dialog>
                    </>
                )}
            </div>
        </div>
    )
}

export default ResizableAsset
