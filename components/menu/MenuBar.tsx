import styles from '../../styles/MenuBar.module.less'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import { useState } from 'react'
import MenuBarContent from './MenuBarContent'
import { Button, IconButton, Link } from '@mui/material'

const MenuBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const menuStyles = showMenu
        ? {
              width: '100%',
          }
        : {
              width: '0',
          }
    return (
        <div className={styles.menuBar__menu}>
            <div
                className={styles.menuBar__menuContent}
                style={{ ...menuStyles }}
            >
                {showMenu && <MenuBarContent />}
            </div>
            <div className={styles.menuBar__container}>
                <div className={styles.menuBar__hamburgerLines}>
                    <Button
                        className={styles.menuBar__hamburgerButton}
                        aria-label="Hamburger menu button"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <span
                            className={`${styles.line} ${styles.line1}`}
                        ></span>
                        <span
                            className={`${styles.line} ${styles.line2}`}
                        ></span>
                        <span
                            className={`${styles.line} ${styles.line3}`}
                        ></span>
                    </Button>
                </div>
                <div className={styles.menuBar__contentContainer}>
                    <div className={styles.menuBar__content}>
                        <Link
                            aria-label="Open Instagram page"
                            className={styles.menuBar__link}
                            href="https://www.instagram.com/shanegallagher_/"
                            target="_blank"
                        >
                            <InstagramIcon />
                        </Link>

                        <Link
                            aria-label="Open E-mail"
                            className={styles.menuBar__link}
                            href="mailto:shanegallagherphotography@gmail.com"
                            target="_blank"
                        >
                            <EmailIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar
