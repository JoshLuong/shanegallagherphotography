import { Fade } from '@mui/material'
import styles from '../../styles/MenuBarContent.module.less'

const MenuBarContent = () => {
    return (
        <div className={styles.menuBarContent__container}>
            <div className={styles.menuBarContent__stack}>
            <div>
                hi
            </div>
            <div>
                hi
            </div>
            <div>
                hi
            </div>
            </div>
            <div className={styles.menuBarContent__about}>
                <Fade
                    in={true}
                    timeout={{
                        enter: 1700,
                    }}
                >
                    <div>About</div>
                </Fade>
            </div>
        </div>
    )
}

export default MenuBarContent
