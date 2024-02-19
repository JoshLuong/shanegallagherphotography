import { Asset } from '@/types/graphql'
import { getBehaviourStyles } from '@/utils/getBehaviourStyles'
import { loaderProp } from '@/utils/loader-prop'
import { Dialog, DialogTitle, Fade, IconButton } from '@mui/material'
import Image from 'next/image'
import { RefObject, useEffect, useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import styles from '../styles/Asset.module.less'

interface AssetProps {
    item: Asset | string
}

const Asset: React.FC<AssetProps> = ({
    item,
}) => {
    const isString = typeof item == 'string'
    const [openLargeImage, setOpenLargeImage] = useState(false)


    return isString ? (
                    <Fade in>
                        <div className={styles.asset}>
                            {item}
                        </div>
                    </Fade>
                ) : (
                    <>
                        <Image
                            alt={'TODO'}
                            src={item.url || ''}
                            width={item.width || '0'}
                            height={item.height || 0}
                            style={{
                                          height: '100%',
                                          width: '100%',
                                      }
                            }
                            loader={loaderProp}
                            loading="lazy"
                            onClick={() => {
                                setOpenLargeImage(!openLargeImage)
                            }}
                        />
                        <Dialog
                            open={openLargeImage}
                            onClose={() => setOpenLargeImage(false)}
                            maxWidth={false}
                        >
                            <DialogTitle
                                className={styles.asset__dialogTitle}
                            >
                                <IconButton
                                    aria-label="close"
                                    onClick={() => setOpenLargeImage(false)}
                                    sx={{
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: 'white',
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>
                            <Image
                                alt={'TODO'}
                                src={item?.url || ''}
                                width={item?.width || '0'}
                                height={item?.height || '0'}
                                style={{
                                          height: '100%',
                                          width: '100%',
                                      }
                            }
                                loader={loaderProp}
                                loading="lazy"
                                className={styles.asset}
                            />
                        </Dialog>
                    </>
                )
}

export default Asset
