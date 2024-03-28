import styles from '../../styles/Block.module.less'
import React, { useState } from 'react'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import { MenuItem, Divider, popoverClasses, styled, Menu } from '@mui/material'
import Link from 'next/link'

interface WorksMenuProps {
    hyperlink: string
}

const CssMenu = styled(Menu)({
    '& .MuiPaper-root': {
        borderRadius: '0px',
        width: '15em',
    },
    '& .MuiButtonBase-root': {
        fontFamily: `"Space Grotesk", sans-serif`,
        textWrap: 'wrap !important',
        color: '#0087F3',
    },
    '& .MuiInputBase-root': {
        borderRadius: '0',
    },
    '& .MuiInputBase-input, .MuiFormLabel-root': {
        color: 'white',
        fontFamily: `"Space Grotesk", sans-serif`,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
})

const WorksMenu: React.FC<WorksMenuProps> = ({ hyperlink }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    let currentlyHovering = false

    function handleClick(event: any) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget)
        }
    }

    function handleHover() {
        currentlyHovering = true
    }

    function handleClose() {
        setAnchorEl(null)
    }

    function handleCloseHover() {
        currentlyHovering = false
        setTimeout(() => {
            if (!currentlyHovering) {
                handleClose()
            }
        }, 50)
    }

    return (
        <div
            className="clickable_component"
            style={{
                height: '100%',
                width: '100%',
            }}
        >
            <div
                onClick={(e) => {
                    if (anchorEl == null) {
                        handleClick(e)
                    }
                }}
                onTouchStart={(e) => {
                    if (anchorEl == null) {
                        handleClick(e)
                    }
                }}
                onMouseEnter={(e) => {
                    if (anchorEl == null) {
                        handleClick(e)
                    }
                }}
                onMouseLeave={handleCloseHover}
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                    lineBreak: 'anywhere',
                    padding: '2px',
                }}
            >
                WORKS
            </div>
            <CssMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{
                    borderRadius: '0px',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                disableAutoFocusItem
                MenuListProps={{
                    onMouseEnter: handleHover,
                    onMouseLeave: handleCloseHover,
                    style: { pointerEvents: 'auto' },
                }}
                sx={{ [`&.${popoverClasses.root}`]: { pointerEvents: 'none' } }}
            >
                <MenuItem
                    onClick={handleClose}
                    className="clickable_component"
                    style={{
                        padding: 0,
                    }}
                >
                    <Link
                        href={hyperlink}
                        className={styles.block__popup_menu_item}
                        prefetch={true}
                        style={{
                            textDecoration: 'none',
                            color: 'black',
                            width: '100%',
                            fontWeight: 'bold',
                            padding: '0.5em 1em',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            OVERVIEW
                            <span
                                style={{
                                    fontSize: '0.7em',
                                    fontWeight: 'normal',
                                }}
                            >
                                Collections & Projects
                            </span>
                        </div>
                    </Link>
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    className="clickable_component"
                    style={{
                        padding: 0,
                    }}
                >
                    <Link
                        href={'https://strangeragency.com/models/shane/'}
                        target="_blank"
                        prefetch={true}
                        className={styles.block__popup_menu_item}
                        style={{
                            textDecoration: 'none',
                            color: 'black',
                            fontWeight: 'bold',
                            width: '100%',
                            padding: '0.5em 1em',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            MODEL PORTFOLIO
                            <span
                                style={{
                                    fontSize: '0.7em',
                                    fontWeight: 'normal',
                                }}
                            >
                                by Stranger Agency
                            </span>
                        </div>
                    </Link>
                </MenuItem>
                <Divider />
                <MenuItem
                    onClick={handleClose}
                    className="clickable_component"
                    style={{
                        padding: 0,
                    }}
                >
                    <Link
                        href={'/moodboard'}
                        className={styles.block__popup_menu_item}
                        prefetch={true}
                        style={{
                            textDecoration: 'none',
                            color: 'black',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            fontWeight: 'bold',
                            padding: '0.5em 1em',
                        }}
                    >
                        <PushPinOutlinedIcon
                            style={{
                                fontSize: '1em',
                                marginRight: '2px',
                            }}
                        />
                        MOODBOARD
                    </Link>
                </MenuItem>
            </CssMenu>
        </div>
    )
}

export default WorksMenu
