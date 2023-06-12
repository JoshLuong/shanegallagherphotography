export function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

export const handleResize = (
    setState: React.Dispatch<
        React.SetStateAction<{
            width: number
            height: number
        }>
    >
) => {
    let timeoutId: any = null
    const resizeListener = () => {
        // prevent execution of previous setTimeout
        clearTimeout(timeoutId)
        // change width from the state object after 150 milliseconds
        timeoutId = setTimeout(() => setState(getWindowDimensions()), 1000)
    }
    // set resize listener
    window.addEventListener('resize', resizeListener)

    // clean up function
    return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener)
    }
}
