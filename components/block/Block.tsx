import { Fade } from '@mui/material'
import Link from 'next/link'
import styles from '../../styles/Block.module.less'
import { BLOCK_SIZE } from '@/hooks/useBlockGenerator'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import Image from 'next/image'
import { loaderProp } from '@/utils/loader-prop'
import { useEffect, useState } from 'react'
import { BlackTooltip } from '../BlackTooltip'
import { Asset, ContentfulTag } from '@/types/graphql'

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
    title?: string
    index: number
    text?: string
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
}) => {
    const delay = 1300 + index * 7
    const { isMobile } = useWindowDimensions()
    const [isLoaded, setIsLoaded] = useState(false)
    const [shouldChangeBackground, setShouldChangeBackground] = useState(false)
    const width = `${sideBlockMultiplier * BLOCK_SIZE}px`
    const height = `${heightBlockMultiplier * BLOCK_SIZE}px`
    const hiddenBorder = `0px solid white`
    const solidBorder = `0.7px solid white`

    const isTextHome = () => text.toLocaleUpperCase() == 'HOME'
    const isTextNavBar = () => isTextHome() || text.toLocaleUpperCase() == 'ABOUT' || text.toLocaleUpperCase() || text.toLocaleUpperCase()== 'WORKS'
    const getLink = () => {
        if (text && !link) {
            if (text === 'Home') {
                return '/'
            }
            return `/${text.toLocaleLowerCase()}`
        } else if (link) {
            return `/projects/${link}`
        } else return ''
    }

    useEffect(() => {
        setIsLoaded(true)
        setTimeout(() => {
            setShouldChangeBackground(isTempBackground)
        }, delay + 100)
    })

    const classNames =
        backgroundImage && !isTempBackground
            ? `${styles.block__container} ${styles.block__image_container_hover_opacity}`
            : styles.block__container

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
                fontSize: isMobile ? '0.65em' : '1em',
                fontWeight: isTextNavBar() ? 'bold' : 'normal',
                letterSpacing: isTextHome() ? '0.6px' : '0.5px',
                color: isTextHome() ? '#0087F3' : 'white',
                overflow: 'hidden', // for the Image tag below to hide under the radius borders
            }}
            className={classNames}
        >
            {shouldDisplayPreviewImage && !text && backgroundImage?.url && (
                <Fade
                    in={(backgroundImage && !shouldChangeBackground) == true}
                    timeout={{
                        exit: 500 + index * 7, // the waterfall effect on homepage of images
                    }}
                >
                    <Image
                        src={backgroundImage?.url}
                        alt="TODO"
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
            {text.toUpperCase()}
        </div>
    )

    const hyperlink = getLink()
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
                            flexDirection: 'column',
                            alignItems: 'center',
                            ...tooltipDimensions,
                        }}
                    >
                        <Image
                            src={backgroundImage?.url!!}
                            alt="TODO"
                            loading="eager"
                            width="0"
                            height="0"
                            style={{ ...tooltipDimensions }}
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
                in={isLoaded}
                timeout={{
                    enter: loadAnimation ? delay : 1,
                }}
            >
                {hyperlink != null && hyperlink != '' ? (
                    <Link
                        href={hyperlink}
                        prefetch={true}
                        style={{
                            cursor:
                                (link || text != null) && !isTempBackground
                                    ? 'pointer'
                                    : 'unset',
                            textDecoration: 'none',
                            zIndex: isTextNavBar() ? 10000: 1,
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
