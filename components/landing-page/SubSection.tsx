import { useState, useEffect } from 'react'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Maybe } from 'graphql/jsutils/Maybe'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import styles from '../../styles/SubSection.module.less'
import { SubsectionPreview, Colour } from '@/types/graphql'
import PreviewLeftImageContent from '../preview-content/PreviewLeftImageContent'
import PreviewRightImageContent from '../preview-content/PreviewRightImageContent'
import { Bebas_Neue } from 'next/font/google'
import PreviewFullImage from '../preview-content/PreviewFullImage'

export type ThemeType = 'align-left' | 'align-right' | 'full-image-background'
interface SubSectionProps {
    show: boolean
    onClick: () => void
    subsectionContent: Maybe<SubsectionPreview> | undefined
    colourScheme: Maybe<Colour> | undefined
    theme: ThemeType
}
const bebasNeue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
})
const SubSection: React.FC<SubSectionProps> = ({
    show,
    onClick,
    subsectionContent,
    colourScheme,
    theme,
}) => {
    const { isMobile } = useWindowDimensions()

    /*
  whats this?
  useEffect(() => {
    handleResize(setWindowDimensions);
  }, []);
  */
    // Close the open section if it is open in mobile view
    useEffect(() => {
        if (isMobile) {
            onClick()
        }
    }, [isMobile, onClick])
    if (!colourScheme) {
        return null
    }
    const { primary, secondary } = colourScheme

    const innerContainerStyles = show
        ? {
              // can customize
              width: '50vw',
          }
        : {
              width: '0',
          }

    const getThemedSubSectionPreview = () => {
        switch (theme) {
            case 'align-left':
                return (
                    <PreviewLeftImageContent
                        colourScheme={colourScheme}
                        subsectionContent={subsectionContent}
                    />
                )
            case 'align-right':
                return (
                    <PreviewRightImageContent
                        colourScheme={colourScheme}
                        subsectionContent={subsectionContent}
                    />
                )
            case 'full-image-background':
                return (
                    <PreviewFullImage
                        colourScheme={colourScheme}
                        subsectionContent={subsectionContent}
                    />
                )
            default:
                return null
        }
    }
    return (
        <div
            className={`${styles.subsection__container} ${bebasNeue.className}`}
            role="region"
            id={'subsection__' + subsectionContent?.title}
            tabIndex={show ? 0 : -1}
        >
            <div
                className={styles.subsection__innerContainer}
                style={{ ...innerContainerStyles }}
            >
                {show && (
                    <div>
                        <div className={styles.subsection__closeButton}>
                            <IconButton
                                onClick={onClick}
                                aria-label="close button"
                                style={{ color: 'white' }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </div>
                        {getThemedSubSectionPreview()}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SubSection
