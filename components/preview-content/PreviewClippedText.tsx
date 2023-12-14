import { Maybe } from 'graphql/jsutils/Maybe'
import { Grid } from '@mui/material'
import { Fade } from 'react-awesome-reveal'
import PreviewContentImage from './PreviewContentImage'
import { useRouter } from 'next/router'
import { useImageLoaded } from '@/hooks/useImageLoaded'
import { SubsectionPreview, Colour } from '@/types/graphql'
import commonStyles from '../../styles/PreviewContentShared.module.less'
import RotatedText from '../RotatedText'
import styles from '../../styles/PreviewClippedText.module.less'
// @ts-ignore
import ScaleText from 'react-scale-text'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface PreviewClippedTextProps {
    subsectionContent: Maybe<SubsectionPreview> | undefined
    colourScheme: Colour
}
const PreviewClippedText: React.FC<PreviewClippedTextProps> = ({
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
            className={`${commonStyles.previewImageContent__container} ${styles.previewClippedText__container} ${styles[hoverEffect]}`}
            style={{
                backgroundColor: primary || 'black',
                color: primary || 'black',
                width: '50vw',
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${previewImagesCollection?.items[0]?.url})`,
                }}
                className={styles.previewClippedText__background}
            >
                <div className={styles.previewClippedText__text}>
                    {title?.split(" ").map(text => <ScaleText widthOnly={true}>{text}</ScaleText>)}
                </div>
                <div className={styles.previewClippedText__subText}>
                    <span
                        className={styles.previewClippedText__secondarySubText}
                    >
                        {secondaryText}
                    </span>
                    <span
                        className={styles.previewClippedText__tertiarySubText}
                    >
                        {tertiaryText}
                    </span>
                </div>

            </div>

        </Grid>
        </Link>
        </Fade>

    )
}

export default PreviewClippedText
