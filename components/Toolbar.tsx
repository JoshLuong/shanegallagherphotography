import useBlockGenerator from '@/hooks/useBlockGenerator'
import styles from '../styles/Toolbar.module.less'
import Block from './block/Block'

interface ToolbarProps {
    isGridBackground?: boolean
}

const Toolbar: React.FC<ToolbarProps> = ({ isGridBackground }) => {
    const blocks = useBlockGenerator({
        isNavBar: true,
        isGridBackground,
    })

    const blockProps = isGridBackground
        ? {}
        : {
              borderBottomHidden: true,
              borderLeftHidden: true,
              borderRightHidden: true,
              borderTopHidden: true,
          }
    return (
        <div
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
                        {...blockProps}
                        loadAnimation={false}
                    />
                )
            })}
        </div>
    )
}

export default Toolbar
