import {
    Tooltip,
    styled,
    tooltipClasses,
    TooltipProps,
    Fade,
} from '@mui/material'
import Link from 'next/link'
import styles from '../../styles/Block.module.less'
import { BLOCK_SIZE } from '@/hooks/useBlockGenerator'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import Image from 'next/image'
import { loaderProp } from '@/utils/loader-prop'

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
    backgroundImage?: string
    title?: string
    index: number
    text?: string
    link?: string
    loadAnimation?: boolean
}

const BlackTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
        {...props}
        arrow
        classes={{ popper: className }}
        placement="right"
    />
))(() => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: 'transparent',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
        color: 'red',
        fontSize: '0.7em',
    },
}))

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
    backgroundImage = '',
    title = '',
    index,
    text = '',
    link = text.toLocaleLowerCase(),
    loadAnimation = true,
}) => {
    const { isMobile } = useWindowDimensions()
    const width = `${sideBlockMultiplier * BLOCK_SIZE}px`
    const height = `${heightBlockMultiplier * BLOCK_SIZE}px`
    const hiddenBorder = `0px solid white`
    const solidBorder = `0.7px solid white`
    const background =
        backgroundImage != ''
            ? {
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
              }
            : { background: 'black' }
    const getLink = () => {
        if (text) {
            if (text === 'Home') {
                return '/'
            }
            return text.toLocaleLowerCase()
        } else if (link) {
            return `/projects/${link}`
        } else return ''
    }

    const classNames = backgroundImage ? `${styles.block__container} ${styles.block__image_container}` : styles.block__container
    return (
        <BlackTooltip
            title={
                title ? <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                    <Image
                        src={backgroundImage}
                        alt=""
                        loading="eager"
                        width="0"
                        height="0"
                        style={{ width: 'auto', height: '400px' }}
                        loader={loaderProp}
                    />
                    <div style={{fontSize: "1.5em"}}>
                        {title.toLocaleUpperCase()}
                    </div>
                </div> : null
                
            }
            followCursor
        >
            <Fade
                in={true}
                timeout={{
                    enter: loadAnimation ? 1300 + index * 5 : 1,
                }}
            >
                <Link
                    href={getLink()}
                    prefetch={true}
                    style={{ cursor: 'unset', textDecoration: 'none' }}
                >
                    <div
                        style={{
                            width: width,
                            height: height,
                            borderTop: borderTopHidden
                                ? hiddenBorder
                                : solidBorder,
                            borderLeft: borderLeftHidden
                                ? hiddenBorder
                                : solidBorder,
                            borderRight: borderRightHidden
                                ? hiddenBorder
                                : solidBorder,
                            borderBottom: borderBottomHidden
                                ? hiddenBorder
                                : solidBorder,
                            boxSizing: 'border-box',
                            borderRadius: `${topLBorderRadius} ${topRBorderRadius} ${bottomRBorderRadius} ${bottomLBorderRadius}`,
                            ...background,
                            fontSize: isMobile ? '15px' : '1em',
                            color:
                                text.toLocaleUpperCase() == 'HOME'
                                    ? 'red'
                                    : 'white',
                        }}
                        className={classNames}
                    >
                        {text.toUpperCase()}
                    </div>
                </Link>
            </Fade>
        </BlackTooltip>
    )
}

export default Block
