import "./FloatingImage.less";
import { useState } from "react";

interface FloatingImageProps {
  src: string;
  hover?: boolean;
}
const FloatingImage: React.FC<FloatingImageProps> = ({ src, hover }) => {
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
        <span style={{ ...spanAnimationStyle }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
          posuere magna. Sed sit amet dolor sed nisi sollicitudin placerat eu eu
          mauris. Morbi rhoncus consequat lacus, vel ullamcorper ligula
          pellentesque pretium. Donec sagittis, risus at tempor maximus, tortor
          velit iaculis tortor, sit amet ullamcorper ipsum dolor et tortor.
          Vivamus venenatis tortor at sagittis luctus. Maecenas cursus
          sollicitudin dui, at mattis metus imperdiet id. Suspendisse et nulla
          et leo malesuada tincidunt.
        </span>
      </div>
    </div>
  );
};

export default FloatingImage;
