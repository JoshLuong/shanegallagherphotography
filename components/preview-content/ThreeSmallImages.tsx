import { Maybe } from 'graphql/jsutils/Maybe'
import { Grid } from '@mui/material'
import { Fade } from 'react-awesome-reveal'
import PreviewContentImage from './PreviewContentImage'
import { useRouter } from 'next/router'
import { useImageLoaded } from '@/hooks/useImageLoaded'
import { SubsectionPreview, Colour } from '@/types/graphql'
import commonStyles from '../../styles/PreviewContentShared.module.less'
import RotatedText from '../RotatedText'
import styles from '../../styles/ThreeSmallImages.module.less'
// @ts-ignore
import ScaleText from 'react-scale-text'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ThreeSmallImagesProps {
    subsectionContent: Maybe<SubsectionPreview> | undefined
    colourScheme: Colour
}
const ThreeSmallImages: React.FC<ThreeSmallImagesProps> = ({
    subsectionContent,
    colourScheme,
}) => {
    const [hoverEffect, setHoverEffect] = useState("");

    if (!subsectionContent) {
        return null
    }
    const { primary } = colourScheme
    const { url, title, secondaryText, tertiaryText, previewImagesCollection } =
        subsectionContent

    useEffect(() => {
        setTimeout(() => {
            setHoverEffect("previewClippedText__containerHover")
        }, 0.1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fade duration={1300} delay={500} style={{
            width: '50vw',
            height: "100%"
        }}>
        <Link href={`/projects/${url?.id}`} className={styles.previewClippedText__link}>

        <Grid
            container
            className={`${commonStyles.previewImageContent__container} ${styles.threeSmallImages__background}`}
            style={{backgroundImage: `url(${previewImagesCollection?.items[0]?.url})`}}
        >
            <div className={styles.previewRightImageContent__textContainer}>
                    <RotatedText
                        text={title}
                        className={styles.previewRightImageContent__text}
                        fontStyle="primary"
                        fontSize={'3.3em'}
                    />
                 <RotatedText
                        text={secondaryText}
                        className={styles.previewRightImageContent__subtext}
                        fontStyle="secondary"
                        fontSize={'1.5em'}
                    />
                     <RotatedText
                    text={tertiaryText}
                    fontStyle="tertiary"
                    className={styles.previewRightImageContent__subText}
                    fontSize={'0.9em'}
                />
   
                </div>
                <Fade duration={1300} delay={500} className={styles.threeSmallImages__fadeContainer}>
            <div className={styles.threeSmallImages__imageContainer}>
            
                {previewImagesCollection?.items.slice(1, 4).map((item, index) => {
                    return <PreviewContentImage width="100%"
                    previewImageURL={item?.url || ''}/>
                })}
            </div>
            </Fade>

            

        </Grid>
        </Link>
        </Fade>

    )
}

export default ThreeSmallImages
