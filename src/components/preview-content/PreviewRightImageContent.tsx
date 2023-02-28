import "./PreviewRightImageContent.less";
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

interface PreviewRightImageContentProps {
  subsectionContent: Maybe<SubsectionPreview> | undefined;
  colourScheme: Colour;
}
const PreviewRightImageContent: React.FC<PreviewRightImageContentProps> = ({
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
      <PreviewContentImage
        loaded={loaded}
        ref={ref}
        onLoad={onLoad}
        previewImageURL={previewImage?.url || ""}
      />
      <Fade right delay={300} duration={1800} when={loaded} distance="70em">
        <PreviewContentDate
          date="May 2020"
          className="preview-content__subsection-date-right"
        />
        <div
          className="preview-content__subsection-text-container"
          style={{ opacity: 1 }}
        >
          <p
            className="preview-content__subsection-title preview-content__subsection-title-right"
            style={{ color: tertiary || "" }}
          >
            <span
              className="preview-content__hover"
              onClick={() => onNavigate()}
            >
              {title}
            </span>
          </p>
          <div className="preview-content__subsection-desc">
            {previewDescription}
          </div>
        </div>
      </Fade>
    </Grid>
  );
};

export default PreviewRightImageContent;
