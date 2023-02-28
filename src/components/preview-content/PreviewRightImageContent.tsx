import "./PreviewRightImageContent.less";
import "./PreviewContent.less";
import { useNavigate } from "react-router-dom";
import { Maybe } from "graphql/jsutils/Maybe";
import { Colour, SubsectionPreview } from "../../__generated__/graphql";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { useImageLoaded } from "../../common/useImageLoaded";
import { Grid } from "@mui/material";

interface PreviewRightImageContentProps {
  subsectionContent: Maybe<SubsectionPreview>;
  showBorder?: boolean;
  colourScheme: Colour;
}
const PreviewRightImageContent: React.FC<PreviewRightImageContentProps> = ({
  subsectionContent,
  showBorder,
  colourScheme,
}) => {
  const navigate = useNavigate();
  const [ref, loaded, onLoad] = useImageLoaded();

  if (!subsectionContent) {
    return null;
  }
  const { previewImage, previewDescription, title, url } = subsectionContent;

  const borderStyle = showBorder
    ? {
        border: "15px solid white",
        borderBottom: "36px solid white",
        boxShadow: "#20212430 8px 2px 30px",
      }
    : {};
  const { tertiary } = colourScheme;

  return (
    <Grid container className="preview-content-grid">
      <Fade delay={500} duration={1200} when={loaded}>
        <img
          ref={ref}
          className="preview-content__image"
          onLoad={onLoad}
          onClick={() => navigate(`/projects/${url?.id}`)}
          src={previewImage?.url || ""}
          alt=""
          loading="lazy"
          width="50%"
          height="100%"
          style={{...borderStyle }}
        ></img>
      </Fade>

      <Fade right delay={300} duration={1800} when={loaded} distance="70em">
      <div className="preview-content__subsection-date preview-content__subsection-date-right">
          May 2020
        </div>
        <div
          className="preview-content__subsection-text-container"
          style={{ opacity: 1 }}
        >
          <p
            className="preview-content__subsection-title preview-content__subsection-title-right"
            style={{ color: tertiary || "" }}
          >
            <span className="preview-content__hover">{title}</span>
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
