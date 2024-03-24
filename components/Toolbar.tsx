import useBlockGenerator from '@/hooks/useBlockGenerator'
import styles from '../styles/Toolbar.module.less'
import Block from './block/Block'
import React from 'react'
import useWindowDimensions from '@/hooks/useWindowDimensions'

interface ToolbarProps {
    isGridBackground?: boolean
    onlyShowNavBar?: boolean
    ref?: React.Ref<HTMLDivElement>
}

const Toolbar: React.FC<ToolbarProps> = React.forwardRef(
    ({ isGridBackground, onlyShowNavBar = false }, ref) => {
        const blocks = useBlockGenerator({
            isNavBar: true,
            isGridBackground,
            onlyShowNavBar,
        })

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
                {blocks?.map((block: any, i: number) => {
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
