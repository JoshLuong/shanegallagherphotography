import "./FloatingImage.less";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Maybe } from "graphql/jsutils/Maybe";
import { SubsectionPreview } from "../../__generated__/graphql";

interface FloatingImageProps {
  subsectionContent: Maybe<SubsectionPreview>;
  hover?: boolean;
  showBorder?: boolean;
  width?: number;
  height?: number;
}
const FloatingImage: React.FC<FloatingImageProps> = ({
  subsectionContent,
  hover,
  showBorder,
  width,
  height
}) => {
  const navigate = useNavigate();
  const [isMouseOver, setIsMouseOver] = useState(false);

  if (!subsectionContent) {
    return null;
  }
  const { previewImage, previewDescription, title, url } = subsectionContent;
  const className = hover ? "subsection__image-container-hover" : "";

  const imageAnimationStyle = isMouseOver
    ? {
        opacity: "60%",
        transform: "scale(1.5)",
        transition: "all 1s ease-in-out",
      }
    : {};

  const borderStyle = showBorder ? {
    border: "15px solid white",
    borderBottom: "36px solid white",
    boxShadow: "#20212430 8px 2px 30px"
  } : {};

  const spanAnimationStyle = isMouseOver
    ? {
        transform: "translate(-1em, -5em)",
      }
    : {};


  return (
            <img
              className={`floating-image__image ${showBorder ? "subsection__image-container-hover" : ""}`}
              onClick={() => navigate(`/projects/${url?.id}`)}
              src={previewImage?.url || ""}
              alt=""
              loading="lazy"
              width="50%"
              height="100%"
              style={{ ...imageAnimationStyle, ...borderStyle}}
            ></img>
  );
};

export default FloatingImage;
