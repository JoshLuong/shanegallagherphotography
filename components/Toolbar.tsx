import useBlockGenerator from '@/hooks/useBlockGenerator'
import styles from '../styles/Toolbar.module.less'
import Block from './block/Block'

interface ToolbarProps {
}

const Toolbar: React.FC<ToolbarProps> = ({
}) => {
    const blocks = useBlockGenerator({
        isNavBar: true,
    })
    return <div
    style={{
        display: 'flex',
        width: '100%',
    }}
    className={styles.toolbar__block_container}
>
    {blocks?.map((block: any, i: number) => {
        return (
            <Block
                {...block}
                index={i}
                borderBottomHidden
                borderLeftHidden
                borderRightHidden
                borderTopHidden
                loadAnimation={false}
            />
        )
    })}
</div>
}

export default Toolbar
