import "./FloatingImage.less";
import { useState } from "react";
import { SubSectionContent } from "./sections";
import { useNavigate } from "react-router-dom";

interface FloatingImageProps {
  subsectionContent: SubSectionContent
  hover?: boolean;
}
const FloatingImage: React.FC<FloatingImageProps> = ({ subsectionContent, hover }) => {
    const {href, description, title, path} = subsectionContent
    const navigate = useNavigate();
  const className = hover ? "subsection__image-container-hover" : "";
  const [isMouseOver, setIsMouseOver] = useState(false);

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
            onClick={() => navigate(path)}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            src={href}
            alt=""
            width="300px"
            style={{ ...imageAnimationStyle }}
          ></img>
          </div>
        </div>
        <span style={{ ...spanAnimationStyle }}>
          {description}
        </span>
      </div>
    </div>
  );
};

export default FloatingImage;
