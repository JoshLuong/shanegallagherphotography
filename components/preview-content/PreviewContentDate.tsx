import React from "react";
import styles from "../../styles/PreviewContentDate.module.less";
// TODO more import??

interface PreviewContentDateProps {
  date: string;
  className?: string;
}
const PreviewContentDate: React.FC<PreviewContentDateProps> = ({
  date,
  className,
}) => {
  return (
    <div className={`${styles.previewContent__subsectionDate} ${className}`}>
      <span className={styles.previewContent__rotate}>{date}</span>
    </div>
  );
};

export default PreviewContentDate;
