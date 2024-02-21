import { useState, useEffect } from 'react'
// @ts-ignore
import _ from 'lodash'

const MOBILE_DIMENSION = 800 // this is shared with css files
const useWindowDimensions = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        setIsMobile(window.innerWidth <= MOBILE_DIMENSION)
    }

    useEffect(() => {
        // component is mounted and window is available
        handleWindowResize()
        const handleResizeThrottled = _.throttle(handleWindowResize, 800); // throttle
        window.addEventListener('resize', handleResizeThrottled)
        setIsMobile(window.innerWidth <= MOBILE_DIMENSION)
        // unsubscribe from the event on component unmount
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return { width, height, isMobile }
}

export default useWindowDimensions
