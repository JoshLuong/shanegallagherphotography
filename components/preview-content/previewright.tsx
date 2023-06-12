import { Maybe } from "graphql/jsutils/Maybe";
import { Grid } from "@mui/material";
import PreviewContentImage from "./PreviewContentImage";
import PreviewContentDate from "./PreviewContentDate";
import { useImageLoaded } from "@/hooks/useImageLoaded";
import { SubsectionPreview, Colour } from "@/types/graphql";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";
import styles from "../../styles/PreviewContentShared.module.less";

interface PreviewRightImageContentProps {
  subsectionContent: Maybe<SubsectionPreview> | undefined;
  colourScheme: Colour;
}
const PreviewRightImageContent: React.FC<PreviewRightImageContentProps> = ({
  subsectionContent,
  colourScheme,
}) => {
  const [ref, loaded, onLoad] = useImageLoaded();
  const router = useRouter();

  if (!subsectionContent) {
    return null;
  }
  const { previewImage, previewDescription, title, url } = subsectionContent;
  const { tertiary } = colourScheme;
  const fontSize = subsectionContent.titleFontSize
    ? { fontSize: subsectionContent.titleFontSize }
    : {};
  const onNavigate = () => router.push(`/projects/${url?.id}`);

  return (
    <Grid container className={styles.previewContentGrid}>
      <PreviewContentImage
        loaded={loaded}
        ref={ref}
        onLoad={onLoad}
        previewImageURL={previewImage?.url || ""}
      />
      <Fade delay={300} duration={1800}>
        <>
        <PreviewContentDate
          date="May 2020"
          className={styles.previewContent__subsectionDateRight}
        />
        <div
          className={styles.previewContent__subsectionTextContainer}
          style={{ opacity: 1 }}
        >
          <p
            className={`${styles.previewContent__subsectionTitle} ${styles.previewContent__subsectionTitleRight}`}
            style={{
              fontSize: subsectionContent?.titleFontSize || "10em",
              color: tertiary || "",
            }}
          >
            <span
              className={styles.previewContent__hover}
              onClick={() => onNavigate()}
            >
              {title}
            </span>
          </p>
          <div className={styles.previewContent__subsectionDesc}>
            {previewDescription}
          </div>
        </div>
        </>
      </Fade>
    </Grid>
  );
};

export default PreviewRightImageContent;