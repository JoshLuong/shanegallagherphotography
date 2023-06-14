import React, { ReactNode } from 'react'
import styles from '../styles/RotatedText.module.less'
import { Bebas_Neue } from 'next/font/google'

interface RotatedTextProps {
    text: string | ReactNode
    fontStyle: 'primary' | 'secondary' | 'tertiary' | 'secondaryVariant'
    className?: string
    fontSize: string
    alignment?: 'start' | 'end'
}

const bebasNeue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
})

const RotatedText: React.FC<RotatedTextProps> = ({
    text,
    className,
    fontStyle,
    fontSize,
    alignment,
}) => {
    const getFontType = () => {
        switch (fontStyle) {
            case 'primary':
                return 'Bodoni Moda,serif'
            case 'secondary':
                return 'Bebas Neue,sans-serif'
            case 'tertiary':
                return 'Cabin,sans-serif'
            case 'secondaryVariant':
                return bebasNeue.style.fontFamily
        }
    }

    const getAlignment = () => {
        switch (alignment) {
            case 'start':
                return 'flex-start'
            case 'end':
                return 'flex-end'
        }
    }
    return (
        <div
            className={`${styles.rotatedText}`}
            style={{ alignSelf: getAlignment() }}
        >
            <span className={styles.rotatedText__container}>
                <div
                    className={`${styles.rotatedText__text} ${className}`}
                    style={{ fontFamily: getFontType(), fontSize }}
                >
                    {text}
                </div>
            </span>
        </div>
    )
}

export default RotatedText
