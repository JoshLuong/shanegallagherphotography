import "./FloatingImage.less";
import { useState } from "react";

interface FloatingImageProps {
  src: string;
  description: string;
  hover?: boolean;
}
const FloatingImage: React.FC<FloatingImageProps> = ({ src, hover, description }) => {
  const className = hover ? "subsection__image-container-hover" : "";
  const [isMouseOver, setIsMouseOver] = useState(false);

  const imageAnimationStyle = isMouseOver
    ? {
        opacity: "60%",
        transform: "scale(1.5)",
        transition: "all 0.5s ease-in-out",
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
        <div className={className + " subsection__image-container"}>
            <div className="subsection__title-image">
            <span>TITLE</span>
          <img
            onClick={() => alert("ur a hoe!")}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            src={src}
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
