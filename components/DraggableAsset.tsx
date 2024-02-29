import { Asset, ContentfulTag, Maybe } from '@/types/graphql'
import { loaderProp } from '@/utils/loader-prop'
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    Fade,
    IconButton,
} from '@mui/material'
import Image from 'next/image'
import { CSSProperties, ReactNode, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import styles from '../styles/Asset.module.less'
import Draggable from 'react-draggable'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { Rnd } from 'react-rnd'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import React from 'react'
import { BlackTooltip } from './BlackTooltip'
import PushPinIcon from '@mui/icons-material/PushPin'
import getMoodboard from '@/utils/getMoodboard'

interface AssetProps {
    imageAsset?: Asset
    reactNode?: string | ReactNode
    transformation?: string
    style?: CSSProperties
    images?: Asset[]
    index: number
    tags?: Maybe<ContentfulTag>[]
    disableDrag?: boolean
    className?: string
    ref?: React.Ref<any>
}

const DraggableAsset: React.FC<AssetProps> = React.forwardRef(
    (
        {
            imageAsset,
            transformation,
            reactNode,
            style, // for draggable asset only
            images,
            index,
            tags,
            disableDrag = false,
            className, // for draggable asset only
        },
        zIndexRef
    ) => {
        const { isMobile } = useWindowDimensions()
        const isImageTransparent = imageAsset?.title === 'TRANSPARENT IMAGE'
        const [openLargeImage, setOpenLargeImage] = useState(false)
        const [curLargeImageIndex, setCurLargeImageIndex] = useState<
            number | null
        >(index)
        const [shouldShowImage, setShouldShowImage] = useState(false)

        const [isDragging, setIsDragging] = useState<any>(false)
        const [curZIndex, setCurZIndex] = useState(1)
        const [isAddedToMoodboard, setIsAddedToMoodboard] = useState(false)

        useEffect(() => {
            setIsAddedToMoodboard(
                getMoodboard().includes(imageAsset?.fileName || '')
            )
        })

        const clickAddToMoodboard = () => {
            let moodboard = getMoodboard()
            if (imageAsset!!.fileName != null) {
                setIsAddedToMoodboard(!isAddedToMoodboard)
                if (getMoodboard().includes(imageAsset?.fileName || '')) {
                    window.sessionStorage.setItem(
                        'moodboard',
                        JSON.stringify(
                            moodboard.filter(
                                (fileName) => fileName != imageAsset?.fileName
                            )
                        )
                    )
                } else {
                    window.sessionStorage.setItem(
                        'moodboard',
                        JSON.stringify([...moodboard, imageAsset!!.fileName])
                    )
                }
                window.dispatchEvent(new Event('moodboard-storage'))
            }
        }

        useEffect(() => {
            // @ts-ignore
        }, [zIndexRef?.current])

        const eventControl = (event: { type: any }, info: any) => {
            if (event.type === 'mousemove' || event.type === 'touchmove') {
                if (!isDragging) {
                    // Only do this once per drag
                    // @ts-ignore
                    zIndexRef!!.current = zIndexRef!!.current + 1
                    // @ts-ignore
                    setCurZIndex(zIndexRef!!.current)
                }
                setIsDragging(true)
            }
            if (
                event.type === 'touchend' &&
                !isDragging &&
                isMobile &&
                !isImageTransparent
            ) {
                setOpenLargeImage(!openLargeImage) // mobile events only fire touchend
            } else if (event.type === 'mouseup' || event.type === 'touchend') {
                setTimeout(() => {
                    setIsDragging(false)
                }, 100)
            }
        }
        const isHorizontalImage =
            (imageAsset?.width || 0) > (imageAsset?.height || 0)

        // for horizontal images
        const dimensions = isHorizontalImage
            ? { width: isMobile ? '90%' : '25em' }
            : { width: isMobile ? '40%' : '17em' }

        const displayElementOnly = (element: any) => (
            <Fade
                in={true}
                timeout={{
                    enter: 500,
                }}
                style={{ transitionDelay: `${700 + 300 * Math.random()}ms` }}
            >
                <div
                    style={{
                        zIndex: curZIndex, // uses the new z-index
                    }}
                >
                    <Draggable
                        onDrag={eventControl}
                        onStop={eventControl}
                        disabled={disableDrag}
                    >
                        <div
                            className={`${styles.asset} ${className}`}
                            style={{
                                width: isMobile ? '100%' : '20em',
                                color: 'white',
                                // maxHeight: '15em', temp disable, let it bake for couple days Feb 25
                                overflow: 'visible',
                                padding: '1em',
                                backgroundColor: 'black',
                                ...style,
                            }}
                            draggable={true}
                            onDrag={(e) => e.preventDefault()}
                            onDragStart={(e) => e.preventDefault()}
                        >
                            {element}
                        </div>
                    </Draggable>
                </div>
            </Fade>
        )
        const topRightStyles = {
            // cursor: 'pointer',
            // right: "0",
            // bottom: "0"
        }

        /*
                    enableResizing={{ top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false }}

                          resizeHandleStyles={{
                        bottomRight: topRightStyles,
                      }}
                      resizeHandleComponent={{
                        bottomRight: <DragHandleIcon style={{fontSize: "20px", color: "white", transform: "rotate(140deg)"}}/>
                      }}

      */

        const hasLeftImageButton = curLargeImageIndex && curLargeImageIndex > 0
        const hasRightImageButton =
            curLargeImageIndex != null &&
            curLargeImageIndex < (images?.length || 0) - 1
        const mobileDimension =
            isMobile &&
            (tags?.filter((tag) => tag?.name === 'enlarge-image').length || 0) >
                0
                ? {
                      width: isHorizontalImage ? '100vw' : '75vw',
                      height: isHorizontalImage ? '35vh' : '50vh',
                  }
                : {
                      height: isMobile ? '15em' : '25em',
                  }

        // Make transparent images smaller
        const transparentImageDimensions = isImageTransparent
            ? {
                  width: isMobile ? '10%' : '10em',
                  height: isMobile ? '7em' : '10em',
              }
            : {}
        return reactNode != null ? (
            displayElementOnly(reactNode)
        ) : (
            <Fade
                in={shouldShowImage}
                timeout={{
                    enter: 800,
                }}
            >
                <div
                    style={{
                        ...dimensions,
                        margin: isMobile
                            ? '0 0.7em 0.4em 0.7em'
                            : '0 0.9em 0.9em 0.9em',
                        transform: transformation,
                        objectFit: 'cover',
                        pointerEvents: 'none', // helps when this div gets in front of another draggable asset
                        ...mobileDimension,
                        ...transparentImageDimensions, // this should be last and take precedence
                        zIndex: curZIndex, // uses the new z-index
                    }}
                >
                    <Rnd
                        onDrag={eventControl}
                        onDragStop={eventControl}
                        onResize={eventControl}
                        onResizeStop={eventControl}
                        disabled={disableDrag}
                        lockAspectRatio
                        onClick={() => {
                            if (!isDragging && !isImageTransparent) {
                                setOpenLargeImage(!openLargeImage)
                            }
                        }}
                        style={{
                            pointerEvents: isImageTransparent ? 'none' : 'auto',
                        }}
                        enableResizing={!isImageTransparent}
                        disableDragging={isImageTransparent}
                    >
                        <Image
                            alt={'TODO'}
                            placeholder="empty"
                            src={imageAsset!!.url || ''}
                            width={imageAsset!!.width || '0'}
                            onLoadingComplete={() => {
                                setTimeout(() => {
                                    setShouldShowImage(true)
                                }, 850 + 650 * Math.random())
                            }}
                            onDrag={(e) => e.preventDefault()}
                            onDragStart={(e) => e.preventDefault()}
                            height={imageAsset!!.height || 0}
                            style={{
                                height: '100%',
                                width: '100%',
                                pointerEvents: isImageTransparent
                                    ? 'none'
                                    : 'auto', // helps when this div gets in front of another draggable asset
                            }}
                            loader={loaderProp}
                            loading="eager"
                        />
                    </Rnd>
                    <Dialog
                        open={openLargeImage}
                        onClose={() => {
                            setOpenLargeImage(false)
                            setCurLargeImageIndex(index)
                        }}
                        onKeyDown={(event) => {
                            if (event.keyCode === 37 && hasLeftImageButton) {
                                // left key press
                                setCurLargeImageIndex(curLargeImageIndex - 1)
                            }
                            if (event.keyCode === 39 && hasRightImageButton) {
                                // right key press
                                setCurLargeImageIndex(curLargeImageIndex + 1)
                            }
                        }}
                        PaperProps={{
                            style: {
                                borderRadius: '0px',
                            },
                        }}
                        maxWidth={false}
                    >
                        <DialogTitle className={styles.asset__dialogTitle}>
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
                        {curLargeImageIndex != null &&
                            curLargeImageIndex >= 0 &&
                            images!![curLargeImageIndex] != null && (
                                <Image
                                    alt={'TODO'}
                                    src={
                                        images!![curLargeImageIndex]?.url || ''
                                    }
                                    width={
                                        images!![curLargeImageIndex]?.width ||
                                        '0'
                                    }
                                    height={
                                        images!![curLargeImageIndex]?.height ||
                                        '0'
                                    }
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                    loader={loaderProp}
                                    loading="eager" // this may cause loading issues
                                    className={styles.asset}
                                />
                            )}

                        <DialogActions style={{ background: 'black' }}>
                            {hasLeftImageButton && (
                                <div
                                    className={styles.asset__largeImageNav}
                                    style={{
                                        marginRight: 'auto',
                                    }}
                                    onClick={() =>
                                        setCurLargeImageIndex(
                                            curLargeImageIndex - 1
                                        )
                                    }
                                >
                                    Previous
                                </div>
                            )}
                            {!isImageTransparent && (
                                <BlackTooltip
                                    title={
                                        <div
                                            style={{
                                                background: 'black',
                                                color: 'white',
                                                padding: '0.5em',
                                            }}
                                        >
                                            {isAddedToMoodboard
                                                ? 'REMOVE FROM'
                                                : 'SAVE TO'}{' '}
                                            YOUR CUSTOM MOODBOARD.
                                        </div>
                                    }
                                    followCursor
                                    placement="top"
                                >
                                    {isAddedToMoodboard ? (
                                        <PushPinIcon
                                            style={{
                                                color: 'white',
                                                width: '20px',
                                                height: '20px',
                                                fontSize: '20px',
                                                transform: 'unset',
                                                margin: 0,
                                            }}
                                            onClick={() =>
                                                clickAddToMoodboard()
                                            }
                                        />
                                    ) : (
                                        <PushPinOutlinedIcon
                                            style={{
                                                color: 'white',
                                                width: '20px',
                                                height: '20px',
                                                fontSize: '20px',
                                                transform: 'unset',
                                                margin: 0,
                                            }}
                                            onClick={() =>
                                                clickAddToMoodboard()
                                            }
                                        />
                                    )}
                                </BlackTooltip>
                            )}
                            {hasRightImageButton && (
                                <div
                                    className={styles.asset__largeImageNav}
                                    onClick={() =>
                                        setCurLargeImageIndex(
                                            curLargeImageIndex + 1
                                        )
                                    }
                                    style={{
                                        marginLeft: 'auto',
                                    }}
                                >
                                    Next
                                </div>
                            )}
                        </DialogActions>
                    </Dialog>
                </div>
            </Fade>
        )
    }
)

export default DraggableAsset
