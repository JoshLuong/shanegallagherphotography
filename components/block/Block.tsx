import { Divider, Fade, Menu, MenuItem } from '@mui/material'
import Link from 'next/link'
import styles from '../../styles/Block.module.less'
import { BLOCK_SIZE, MOBILE_BLOCK_SIZE } from '@/hooks/useBlockGenerator'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import Image from 'next/image'
import { loaderProp } from '@/utils/loader-prop'
import { ReactNode, useEffect, useState } from 'react'
import { BlackTooltip } from '../BlackTooltip'
import { Asset, ContentfulTag } from '@/types/graphql'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import WorksMenu from '../menu/WorksMenu'

interface BlockProps {
    topLBorderRadius?: string
    topRBorderRadius?: string
    bottomLBorderRadius?: string
    bottomRBorderRadius?: string
    sideBlockMultiplier?: number
    heightBlockMultiplier?: number
    borderTopHidden?: boolean
    borderLeftHidden?: boolean
    borderRightHidden?: boolean
    borderBottomHidden?: boolean
    backgroundImage?: Asset
    thumbnailPreviewImage?: Asset // anything with background image should have a smaller minified version which is this
    title?: string // title for image
    index: number
    text?: string // text like "Home", "About"
    link?: string
    loadAnimation?: boolean
    isTempBackground?: boolean // should time out to black square and not allow clicks
    shouldDisplayPreviewImage?: boolean
}

const Block: React.FC<BlockProps> = ({
    topLBorderRadius = '0px',
    topRBorderRadius = '0px',
    bottomLBorderRadius = '0px',
    bottomRBorderRadius = '0px',
    sideBlockMultiplier = 1,
    heightBlockMultiplier = 1,
    borderTopHidden = false,
    borderLeftHidden = false,
    borderRightHidden = false,
    borderBottomHidden = false,
    backgroundImage,
    title = '',
    index,
    text = '',
    link = '',
    loadAnimation = true,
    isTempBackground = false,
    shouldDisplayPreviewImage = true,
    thumbnailPreviewImage,
}) => {
    const delay = 1300 + index * 7
    const { isMobile } = useWindowDimensions()
    const [isBlockLoaded, setIsBlockLoaded] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [shouldChangeBackground, setShouldChangeBackground] = useState(false)
    let width = `${sideBlockMultiplier * BLOCK_SIZE}px`
    let height = `${heightBlockMultiplier * BLOCK_SIZE}px`

    const hiddenBorder = `0px solid white`
    const solidBorder = `0.7px solid white`

    const isTextHome = () => text.toLocaleUpperCase() == 'HOME'
    const isTextNavBar = () =>
        isTextHome() ||
        text.toLocaleUpperCase() == 'ABOUT' ||
        text.toLocaleUpperCase() == 'CONTACT' ||
        text.toLocaleUpperCase() == 'WORKS'
    const getLink = () => {
        if (text && !link) {
            if (text === 'Home') {
                return '/'
            }
            return `/${text.toLocaleLowerCase()}`
        } else if (link) {
            return `/works/${link}`
        } else return ''
    }

    useEffect(() => {
        setIsBlockLoaded(true)
    })

    const classNames =
        backgroundImage && !isTempBackground
            ? `${styles.block__container} ${styles.block__image_container_hover_opacity}`
            : styles.block__container

    let blockFontSize = '1em'
    if (isTextHome()) {
        blockFontSize = isMobile
            ? `${MOBILE_BLOCK_SIZE - MOBILE_BLOCK_SIZE / 2}px`
            : `${BLOCK_SIZE - BLOCK_SIZE / 2}px`
    } else if (BLOCK_SIZE < 90) {
        blockFontSize = '0.8em'
    } else if (BLOCK_SIZE < 70) {
        blockFontSize = '0.65em'
    }
    const hyperlink = getLink()

    if (width == '0px' || height == '0px') {
        // helps with issue with empty rows because height is 90px and width is 0px
        return null
    }

    const getTextComponent = () => {
        if (text == 'Home') {
            return 'S'
        }
        if (text == 'Moodboard') {
            // this condition is used in aria-hidden above
            return (
                <BlackTooltip
                    title={
                        <div
                            style={{
                                background: 'black',
                                color: 'white',
                                padding: '0.75em',
                                fontSize: isMobile ? '0.65em' : '1.3em',
                                fontWeight: 'bold',
                            }}
                        >
                        MOODBOARD
                        </div>
                    }
                    slotProps={{
                        popper: {
                            sx: {
                                [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                                    {
                                        marginTop: '0px',
                                    },
                                [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                                    {
                                        marginBottom: '0px',
                                    },
                                [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                                    {
                                        marginLeft: '0px',
                                    },
                                [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                                    {
                                        marginRight: '0px',
                                    },
                            },
                        },
                    }}
                    placement="bottom"
                    aria-label="Link to your moodboard"
                >
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                        }}
                    >
                        <PushPinOutlinedIcon
                            style={{
                                fontSize: isMobile ? '1.2em' : '1.3em',
                                margin: 'auto',
                            }}
                        />
                    </div>
                </BlackTooltip>
            )
        } else if (text.toUpperCase() === 'WORKS') {
            return <WorksMenu hyperlink={hyperlink} />
        } else {
            return text.toUpperCase()
        }
    }
    const blockContent = (
        <div
            style={{
                width: width,
                height: height,
                borderTop: borderTopHidden ? hiddenBorder : solidBorder,
                borderLeft: borderLeftHidden ? hiddenBorder : solidBorder,
                borderRight: borderRightHidden ? hiddenBorder : solidBorder,
                borderBottom: borderBottomHidden ? hiddenBorder : solidBorder,
                boxSizing: 'border-box',
                borderRadius: `${topLBorderRadius} ${topRBorderRadius} ${bottomRBorderRadius} ${bottomLBorderRadius}`,
                background: 'black', // Note, if we use image as background, loading will be much slower
                fontSize: isMobile && !isTextHome() ? '0.65em' : blockFontSize,
                fontWeight: isTextNavBar() ? 'bold' : 'normal',
                letterSpacing: isTextHome() ? '0.6px' : '0.5px',
                color: isTextHome() ? 'white' : 'white',
                overflow: 'hidden', // for the Image tag below to hide under the radius borders
            }}
            className={classNames}
            aria-hidden={
                (!(
                    shouldDisplayPreviewImage &&
                    !text &&
                    backgroundImage?.url
                ) &&
                    !text) ||
                shouldChangeBackground
            }
        >
            {shouldDisplayPreviewImage &&
                !text &&
                backgroundImage?.url && ( // this condition is used in aria-hidden above
                    <Fade
                        in={
                            (isImageLoaded &&
                                backgroundImage &&
                                !shouldChangeBackground) == true
                        }
                        exit={isImageLoaded}
                        enter={isImageLoaded}
                        timeout={{
                            enter: 30 + index * 12, // the waterfall effect on homepage of images
                            exit: 500 + index * 7, // the waterfall effect on homepage of images
                        }}
                    >
                        <Image
                            src={
                                (thumbnailPreviewImage
                                    ? thumbnailPreviewImage?.url
                                    : backgroundImage?.url) || ''
                            }
                            alt={backgroundImage?.description || backgroundImage?.title || ''}
                            onLoadingComplete={() => {
                                setIsImageLoaded(true)
                                // keep this here so the temp image only exits once loaded
                                setTimeout(() => {
                                    setShouldChangeBackground(isTempBackground)
                                }, delay + 100)
                            }}
                            loading="lazy"
                            width="0"
                            height="0"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            loader={loaderProp}
                        />
                    </Fade>
                )}
            {getTextComponent()}
        </div>
    )

    const tooltipDimensions =
        backgroundImage?.width!! > backgroundImage?.height!!
            ? { height: '250px', width: 'auto' }
            : { width: '250px', height: 'auto' }
    return (
        <BlackTooltip
            title={
                title && !isTempBackground ? (
                    <div
                        style={{
                            display: 'flex',
                            zIndex: 10000,
                            flexDirection: 'column',
                            alignItems: 'center',
                            ...tooltipDimensions,
                        }}
                    >
                        <Image
                            src={backgroundImage?.url!!}
                            alt={backgroundImage?.description || backgroundImage?.title || ''}
                            loading="eager"
                            width="0"
                            height="0"
                            style={{
                                ...tooltipDimensions,
                                zIndex: 1001, // make sure this is larger than the one defined below - (isTextNavBar() ? 1000: 1)
                            }}
                            loader={loaderProp}
                        />
                        <div
                            style={{
                                fontSize: '1.5em',
                                backgroundColor: 'black',
                                textAlign: 'center',
                                color: 'white',
                                width: '100%',
                            }}
                        >
                            {title.toLocaleUpperCase()}
                        </div>
                    </div>
                ) : null
            }
            followCursor
        >
            <Fade
                in={isBlockLoaded}
                timeout={{
                    enter: loadAnimation ? delay : 1,
                }}
            >
                {text.toUpperCase() != 'WORKS' &&
                hyperlink != null &&
                hyperlink != '' ? (
                    <Link
                        href={hyperlink}
                        prefetch={true}
                        style={{
                            cursor:
                                (link || text != null) && !isTempBackground
                                    ? 'pointer'
                                    : 'unset',
                            textDecoration: 'none',
                            zIndex: isTextNavBar() ? 1000 : 1,
                        }}
                    >
                        {blockContent}
                    </Link>
                ) : (
                    blockContent
                )}
            </Fade>
        </BlackTooltip>
    )
}

export default Block
