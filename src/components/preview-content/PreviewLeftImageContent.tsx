import "./PreviewLeftImageContent.less";
import "./PreviewContent.less";
import { useNavigate } from "react-router-dom";
import { Maybe } from "graphql/jsutils/Maybe";
import { Colour, SubsectionPreview } from "../../__generated__/graphql";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { useImageLoaded } from "../../common/useImageLoaded";
import { Grid } from "@mui/material";
import PreviewContentImage from "./PreviewContentImage";
import PreviewContentDate from "./PreviewContentDate";

interface PreviewLeftImageContentProps {
  subsectionContent: Maybe<SubsectionPreview> | undefined;
  colourScheme: Colour;
}
const PreviewLeftImageContent: React.FC<PreviewLeftImageContentProps> = ({
  subsectionContent,
  colourScheme,
}) => {
  const [ref, loaded, onLoad] = useImageLoaded();
  const navigate = useNavigate();
  if (!subsectionContent) {
    return null;
  }
  const { previewImage, previewDescription, title, url } = subsectionContent;
  const { tertiary } = colourScheme;
  const onNavigate = () => navigate(`/projects/${url?.id}`);

  return (
    <Grid container className="preview-content-grid">
      <Fade left delay={300} duration={1800} when={loaded} distance="70em">
        <PreviewContentDate
          date="May 2020"
          className="preview-content__subsection-date-left"
        />
        <div
          className="preview-content__subsection-text-container preview-content__subsection-text-container-left"
          style={{ opacity: 1 }}
        >
          <p
            className="preview-content__subsection-title preview-content__subsection-title-left"
            style={{
              fontSize: subsectionContent?.titleFontSize || "10em",
              color: tertiary || "",
            }}
          >
            <span
              className="preview-content__hover"
              onClick={() => onNavigate()}
            >
              {title}
            </span>
          </p>
          <div className="preview-content__subsection-desc preview-content__subsection-desc-left">
            {previewDescription}
          </div>
        </div>
      </Fade>
      <PreviewContentImage
        loaded={loaded}
        ref={ref}
        onLoad={onLoad}
        previewImageURL={previewImage?.url || ""}
      />
    </Grid>
  );
};

export default PreviewLeftImageContent;
