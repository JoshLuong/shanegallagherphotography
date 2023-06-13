import React, { ReactNode } from 'react'
import styles from '../../styles/PreviewContentDate.module.less'
// TODO more import??

interface PreviewContentDateProps {
    date: string | ReactNode
    className?: string
}
const PreviewContentDate: React.FC<PreviewContentDateProps> = ({
    date,
    className,
}) => {
    return (
        <div
            className={`${styles.previewContent__subsectionDate} ${className}`}
        >
            <span className={styles.previewContent__rotate}>
                <div className={styles.previewContent__text}>{date}</div>
            </span>
        </div>
    )
}

export default PreviewContentDate
