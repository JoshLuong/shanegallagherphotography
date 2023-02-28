import "./ImageLeftContent.less";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Maybe } from "graphql/jsutils/Maybe";
import { Colour, SubsectionPreview } from "../../__generated__/graphql";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { useImageLoaded } from "../../common/useImageLoaded";
import { Grid } from "@mui/material";

interface FloatingImageProps {
  subsectionContent: Maybe<SubsectionPreview>;
  hover?: boolean;
  showBorder?: boolean;
  width?: number;
  height?: number;
  colourScheme: Colour;
}
const ImageLeftContent: React.FC<FloatingImageProps> = ({
  subsectionContent,
  hover,
  showBorder,
  width,
  height,
  colourScheme,
}) => {
  const navigate = useNavigate();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [ref, loaded, onLoad] = useImageLoaded();

  if (!subsectionContent) {
    return null;
  }
  const { previewImage, previewDescription, title, url } = subsectionContent;

  const imageAnimationStyle = isMouseOver
    ? {
        opacity: "60%",
        transform: "scale(1.5)",
        transition: "all 1s ease-in-out",
      }
    : {};

  const borderStyle = showBorder
    ? {
        border: "15px solid white",
        borderBottom: "36px solid white",
        boxShadow: "#20212430 8px 2px 30px",
      }
    : {};
  const { tertiary } = colourScheme;

  return (
    <Grid container className="summary-content__subsection-images">
      <Fade delay={500} duration={1200} when={loaded}>
        <img
          ref={ref}
          className={`floating-image__image ${
            showBorder ? "subsection__image-container-hover" : ""
          }`}
          onLoad={onLoad}
          onClick={() => navigate(`/projects/${url?.id}`)}
          src={previewImage?.url || ""}
          alt=""
          loading="lazy"
          width="50%"
          height="100%"
          style={{ ...imageAnimationStyle, ...borderStyle }}
        ></img>
      </Fade>

      <Fade right delay={300} duration={1800} when={loaded} distance="70em">
      <div className="summary-content__subsection-date summary-content__subsection-date-right">
          May 2020
        </div>
        <div
          className="summary-content__subsection-text-container"
          style={{ opacity: 1 }}
        >
          <p
            className="summary-content__subsection-title summary-content__subsection-title-right"
            style={{ color: tertiary || "" }}
          >
            {title}
          </p>
          <div className="summary-content__subsection-desc">
            {previewDescription}
          </div>
        </div>
      </Fade>
    </Grid>
  );
};

export default ImageLeftContent;
