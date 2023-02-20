import "./FloatingImage.less";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Maybe } from "graphql/jsutils/Maybe";
import { SubsectionPreview } from "../__generated__/graphql";

interface FloatingImageProps {
  subsectionContent: Maybe<SubsectionPreview>;
  hover?: boolean;
}
const FloatingImage: React.FC<FloatingImageProps> = ({
  subsectionContent,
  hover,
}) => {
  const navigate = useNavigate();
  const [isMouseOver, setIsMouseOver] = useState(false);

  if (!subsectionContent) {
    return null;
  }
  const { previewImage, previewDescription, title } = subsectionContent;
  const className = hover ? "subsection__image-container-hover" : "";

  const imageAnimationStyle = isMouseOver
    ? {
        opacity: "60%",
        transform: "scale(1.5)",
        transition: "all 1s ease-in-out",
      }
    : {};

  const spanAnimationStyle = isMouseOver
    ? {
        transform: "translate(-1em, -5em)",
      }
    : {};

  return (
    <div className="subsection__image1">
      <div className="subsection__hover">
        <div className="subsection__title-image">
          <span>{title}</span>
          <div className={className + " subsection__image-container"}>
            <img
              onClick={() => navigate("/")}
              onMouseEnter={() => setIsMouseOver(true)}
              onMouseLeave={() => setIsMouseOver(false)}
              src={previewImage?.url || ""}
              alt=""
              width="300px"
              style={{ ...imageAnimationStyle }}
            ></img>
          </div>
        </div>
        <span style={{ ...spanAnimationStyle }}>{previewDescription}</span>
      </div>
    </div>
  );
};

export default FloatingImage;
