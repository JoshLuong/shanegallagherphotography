import "./PreviewFullImage.less";
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

interface PreviewFullImageProps {
  subsectionContent: Maybe<SubsectionPreview> | undefined;
  colourScheme: Colour;
}
const PreviewFullImage: React.FC<PreviewFullImageProps> = ({
  subsectionContent,
  colourScheme,
}) => {
  const [ref, loaded, onLoad] = useImageLoaded();
  const navigate = useNavigate();

  if (!subsectionContent) {
    return null;
  }
  const { previewImage, url, title } = subsectionContent;
  const { tertiary } = colourScheme;
  const onNavigate = () => navigate(`/projects/${url?.id}`);

  return (
    <Grid container className="preview-content-grid">
      <PreviewContentImage
        loaded={loaded}
        fadeLeft
        ref={ref}
        onLoad={onLoad}
        previewImageURL={previewImage?.url || ""}
        className="preview-fill-image__background"
        delay={700}
        duration={800}
        width="100%"
      />
      <Fade delay={800} duration={600} when={loaded} distance="70em">
        <div
          className="preview-content__subsection-text-container preview-content__subsection-text-container-full-image"
          style={{ opacity: 1 }}
        >
          <p
            className="preview-content__subsection-title"
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
        </div>
      </Fade>
    </Grid>
  );
};

export default PreviewFullImage;
