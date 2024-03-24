import useBlockGenerator from '@/hooks/useBlockGenerator'
import styles from '../styles/Toolbar.module.less'
import Block from './block/Block'
import React, { useEffect } from 'react'
import useWindowDimensions from '@/hooks/useWindowDimensions'

interface ToolbarProps {
    isGridBackground?: boolean
    onlyShowNavBar?: boolean
    ref?: React.Ref<HTMLDivElement>
    setTopOffset: (offset: number) => void
}

const Toolbar: React.FC<ToolbarProps> = React.forwardRef(
    ({ isGridBackground, onlyShowNavBar = false, setTopOffset }, ref) => {
        const {generatedBlocks, navBarHeight} = useBlockGenerator({
            isNavBar: true,
            isGridBackground,
            onlyShowNavBar,
        })

       
        useEffect(() => {
            setTopOffset(navBarHeight)
        }, [navBarHeight])

        return (
            <div
                ref={ref}
                style={{
                    display: 'flex',
                    width: '100%',
                    position: isGridBackground ? 'fixed' : 'relative', // in doing so, make sure the consuming container has content as position absolute
                }}
                className={styles.toolbar__block_container}
            >
                {generatedBlocks?.map((block: any, i: number) => {
                    return (
                        <Block
                            {...block}
                            index={i}
                            key={i}
                            loadAnimation={false}
                        />
                    )
                })}
            </div>
        )
    }
)

export default Toolbar
