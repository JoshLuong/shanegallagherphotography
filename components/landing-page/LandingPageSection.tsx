import { Tooltip, styled, tooltipClasses, TooltipProps } from '@mui/material'
import { useEffect, useMemo, useRef, useState } from 'react'

import { NO_SECTION_OPEN } from '../../pages/index'

import Marquee from 'react-fast-marquee'
import useIsSafari from '@/hooks/useIsSafari'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import styles from '../../styles/LandingPageSection.module.less'
import { handleResize } from '@/utils/window-dimensions'

interface LandingPageSectionProps {
    onClick?: () => void
    onMobileClick: () => void
    title: string
    backgroundColor: string
    titleColor: string
    openSection: number
    containerWidth?: number
    fastAnimation: boolean
    index: number
}
const BlackTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}))

// This correlates to the transition time defined in .subsection__container
const DELAY = 380

const LandingPageSection: React.FC<LandingPageSectionProps> = ({
    title,
    backgroundColor,
    titleColor,
    onClick,
    onMobileClick,
    openSection,
    containerWidth,
    fastAnimation,
    index,
}: LandingPageSectionProps) => {
    const [isSafari] = useIsSafari()
    const textContainerRef = useRef<any>(null)
    const { width, isMobile } = useWindowDimensions()

    const _repeats = useMemo(() => (width <= 800 ? 1 : 20), [width])
    const animationDuration = title.length * _repeats * 0.75
    const isSectionOpen = useMemo(
        () => index === openSection,
        [openSection, index]
    )
    const [showInitialBackgroundColor, setShowInitialBackgroundColor] =
        useState(true)
    const [isHovering, setIsHovering] = useState(false)

    const [fontSize, setFontSize] = useState('')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const setFontSizeHandler = () => {
        if (!isMobile) {
            const divWidth = textContainerRef.current?.clientWidth
            setFontSize(`${divWidth}px`)
        } else {
            const divHeight = textContainerRef.current?.clientHeight
            setFontSize(`${divHeight}px`)
        }
    }

    useEffect(() => {
        // execute this immediately upon load (only once)
        setFontSizeHandler()

        // set a timer
        const timer = setTimeout(() => {
            setShowInitialBackgroundColor(false) // set class to none
        }, 450 + index * 75)

        // don't forget to clear in cleanup
        return () => {
            clearTimeout(timer)
        }
    }, [index, setFontSizeHandler, openSection])

    useEffect(() => {
        if (!isSafari) {
            setTimeout(() => {
                setFontSizeHandler()
            }, DELAY)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width, isSectionOpen, openSection])

    const containerStyles = useMemo((): any => {
        // BUG MOBILE
        const fontStyles = isSafari || isMobile ? {} : { fontSize }
        const width =
            containerWidth && !isSectionOpen ? `${containerWidth}px` : '100%'
        let styles: any = {
            width,
            ...fontStyles,
        }
        if (!isHovering && !isSectionOpen && !showInitialBackgroundColor) {
            return styles
        }
        if (showInitialBackgroundColor) {
            styles = {
                pointerEvents: 'none',
                ...styles,
            }
        }
        return {
            ...styles,
            backgroundColor,
            color: titleColor,
        }
    }, [
        backgroundColor,
        containerWidth,
        fontSize,
        isHovering,
        isMobile,
        isSectionOpen,
        showInitialBackgroundColor,
        titleColor,
    ])

    useEffect(() => {
        const elem: any = document.getElementById('title')
        if (!elem || typeof window == 'undefined') {
            return
        }
        var style = window.getComputedStyle(elem, null)
        var frame = style.getPropertyValue('z-index')
        var delay = -frame / 36
        elem.style['-webkit-animation-delay'] = delay + 's !important'
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fastAnimation])

    const handleSubsectionClick = () => {
        if (isMobile) {
            onMobileClick()
        } else {
            onClick && onClick()
        }
    }

    return (
        <BlackTooltip title={title} followCursor>
            <section></section>
        </BlackTooltip>
    )
}
// BUG with title repeat in safari,... side on left is offset

export default LandingPageSection
