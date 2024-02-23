import { Asset } from '@/types/graphql'
import { loaderProp } from '@/utils/loader-prop'
import { Dialog, DialogTitle, Fade, IconButton } from '@mui/material'
import Image from 'next/image'
import {
    CSSProperties,
    ReactNode,
    useEffect,
    useState,
} from 'react'
import CloseIcon from '@mui/icons-material/Close'
import styles from '../styles/Asset.module.less'
import Draggable from 'react-draggable'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { Rnd } from 'react-rnd'

interface AssetProps {
    imageAsset?: Asset
    reactNode?: string | ReactNode
    transformation?: string
    style?: CSSProperties
}

const DraggableAsset: React.FC<AssetProps> = ({
    imageAsset,
    transformation,
    reactNode,
    style,
}) => {
    const { isMobile } = useWindowDimensions()
    const [openLargeImage, setOpenLargeImage] = useState(false)
    const [shouldShowImage, setShouldShowImage] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShouldShowImage(true)
        }, 850 + 650 * Math.random())
    })

    const [isDragging, setIsDragging] = useState<any>(false)

    const eventControl = (event: { type: any }, info: any) => {
        if (event.type === 'mousemove' || event.type === 'touchmove') {
            setIsDragging(true)
        }
        if (event.type === 'touchend' && !isDragging && isMobile) {
            setOpenLargeImage(!openLargeImage) // mobile events only fire touchend
        } else if (event.type === 'mouseup' || event.type === 'touchend') {
            setTimeout(() => {
                setIsDragging(false)
            }, 100)
        }
    }

    // for horizontal images
    const dimensions =
        (imageAsset?.width || 0) > (imageAsset?.height || 0)
            ? { width: isMobile ? '90%' : '25em' }
            : { width: isMobile ? '40%' : '17em' }

    const displayElement = (element: any) => (
        <Fade
            in={true}
            timeout={{
                enter: 500,
            }}
            style={{ transitionDelay: `${700 + 300 * Math.random()}ms` }}
        >
            <div>
                <Draggable onDrag={eventControl} onStop={eventControl}>
                    <div
                        className={styles.asset}
                        style={{
                            width: isMobile ? '100%' : '20em',
                            color: 'white',
                            maxHeight: '15em',
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

    return reactNode != null ? (
        displayElement(reactNode)
    ) : (
        <Fade in={shouldShowImage}>
            <div
                style={{
                    ...dimensions,
                    margin: isMobile
                        ? '0 0.7em 0.4em 0.7em'
                        : '0 0.9em 0.9em 0.9em',
                    transform: transformation,
                    objectFit: 'cover',
                    height: isMobile ? '15em' : '25em',
                }}
            >
                <div>
                    <Rnd
                        onDrag={eventControl}
                        onDragStop={eventControl}
                        onResize={eventControl}
                        onResizeStop={eventControl}
                        lockAspectRatio
                        onClick={() => {
                            if (!isDragging) {
                                setOpenLargeImage(!openLargeImage)
                            }
                        }}
                    >
                        <Image
                            alt={'TODO'}
                            src={imageAsset!!.url || ''}
                            width={imageAsset!!.width || '0'}
                            onDrag={(e) => e.preventDefault()}
                            onDragStart={(e) => e.preventDefault()}
                            height={imageAsset!!.height || 0}
                            style={{
                                height: '100%',
                                width: '100%',
                            }}
                            loader={loaderProp}
                            loading="eager"
                        />
                    </Rnd>
                </div>
                <Dialog
                    open={openLargeImage}
                    onClose={() => setOpenLargeImage(false)}
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
                    <Image
                        alt={'TODO'}
                        src={imageAsset?.url || ''}
                        width={imageAsset?.width || '0'}
                        height={imageAsset?.height || '0'}
                        style={{
                            height: '100%',
                            width: '100%',
                        }}
                        loader={loaderProp}
                        loading="lazy"
                        className={styles.asset}
                    />
                </Dialog>
            </div>
        </Fade>
    )
}

export default DraggableAsset
