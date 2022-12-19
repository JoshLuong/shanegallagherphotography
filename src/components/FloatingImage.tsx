import "./FloatingImage.less";
import { useState, useEffect } from "react";

interface FloatingImageProps {
    src: string;
}
const FloatingImage: React.FC<FloatingImageProps> = ({src}) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
  
    const countTimers = () => {
      setInterval(() => {
        setX(Math.random() * (10 - 1) + 1);
        setY(Math.random() * (10 - 1) + 1);
      }, 250);
    };
    useEffect(() => {
      countTimers();
    }, []);
    return (
        <div className="subsection__image1">
        <div
          className="subsection__hover"
          onClick={() => alert("ur a hoe!")}
        >
          <div
            className="subsection__image-container"
            style={{
              transition: "all 1s ease-in-out",
              transform: `translateX(${x}px) translateY(${y}px)`,
            }}
          >
            <img src={src} alt="" width="300px"></img>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce a posuere magna. Sed sit amet dolor sed nisi
            sollicitudin placerat eu eu mauris. Morbi rhoncus consequat
            lacus, vel ullamcorper ligula pellentesque pretium. Donec
            sagittis, risus at tempor maximus, tortor velit iaculis
            tortor, sit amet ullamcorper ipsum dolor et tortor. Vivamus
            venenatis tortor at sagittis luctus. Maecenas cursus
            sollicitudin dui, at mattis metus imperdiet id. Suspendisse
            et nulla et leo malesuada tincidunt.
          </span>
        </div>
      </div>
    );
  };
  
  export default FloatingImage;