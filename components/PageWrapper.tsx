import useWindowDimensions from '@/hooks/useWindowDimensions'
import { BLOCK_SIZE, MOBILE_BLOCK_SIZE } from '@/hooks/useBlockGenerator'
import { Fade } from '@mui/material'
import ToolBar from '@/components/Toolbar'
import styles from '../styles/PageWrapper.module.less'
import { ReactNode } from 'react'

interface PageWrapperProps {
    pageAriaDescription?: string
    headElement: ReactNode
    content: ReactNode | ReactNode[] | any
    onlyShowNavBar?: boolean
}

const PageWrapper: React.FC<PageWrapperProps> = ({
    pageAriaDescription,
    headElement,
    content,
    onlyShowNavBar = false,
}) => {
    const { isMobile } = useWindowDimensions()

    const topOffset = isMobile
        ? `${MOBILE_BLOCK_SIZE * 1.2}px`
        : `${BLOCK_SIZE * 1.8}px`

    return (
        <main
            className={styles.pageWrapper__container}
            style={{
                // WARNING: do not edit, it will cause weird bug with height and width
                // Don't add height 100vh or it will be too large on mobile
                position: 'relative',
                overflow: 'visible', // DO NOT CHANGE THIS -- this causes weird bug on mobile when scrolling to bottom
            }}
            aria-description={pageAriaDescription}
        >
            {headElement}
            <div>
                <ToolBar isGridBackground onlyShowNavBar={onlyShowNavBar} />
                <Fade
                    in={true}
                    timeout={{
                        enter: 1300,
                    }}
                >
                    <div
                        className={styles.pageWrapper__text}
                        style={{
                            top: topOffset,
                            position: 'absolute',
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            overflow: 'visible',
                            height: `auto`,
                            boxSizing: 'border-box',
                            justifyContent: 'center',
                            marginBottom: '2em',
                            width: '100%',
                            fontSize: isMobile ? '1.2em' : '1.4em',
                        }}
                    >
                        {content}
                    </div>
                </Fade>
            </div>
        </main>
    )
}

export default PageWrapper
