import { useState, useEffect } from "react";
import "./SubSection.less";
import LeftArrow from "../left-arrow.svg";
//@ts-ignore
import Fade from "react-reveal/Fade";
import test from "../test.png";

interface SubSectionProps {
  show: boolean;
  backgroundColor: string;
  backgroundColor2: string;
  onClick: () => void;
}
const SubSection: React.FC<SubSectionProps> = ({
  show,
  backgroundColor,
  backgroundColor2,
  onClick,
}) => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const countTimers = () => {
    setInterval(() => {
        setX(Math.random() * (7 - 1) + 1)
        setY(Math.random() * (7 - 1) + 1)
    }, 250);
  }
useEffect(() => {
    countTimers()
},[])
  useEffect(() => {
    function handleResize() {
      console.log(getWindowDimensions());
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileView = windowDimensions.width <= 800;
  const size = show ? "65%" : "0";
  const background = `linear-gradient(${
    mobileView ? "" : "to right,"
  }${backgroundColor}, ${backgroundColor2})`;

  const innerContainerStyles = show ? {
    display: "block"
  } : {
    display: "none"
  }

  const styles = mobileView
    ? {
        height: size,
      }
    : {
        width: size,
      };
  return (
    <div
      className="subsection__container"
      style={{ backgroundImage: background, ...styles }}
    >
      <div
        className="subsection__inner-container"
        style={{ ...innerContainerStyles}}
      >
        <Fade delay={700}>
          <div title="Close" onClick={onClick} className="subsection__close-button">
            <img src={LeftArrow} alt="Close" />
          </div>
          <div className="subsection__image1">
            <div className="subsection__hover" onClick={() => alert("ur a hoe!")}>
            <div className="subsection__image-container" style={{transition: "all 0.4s ease-in-out", transform: `translateX(${x}px) translateY(${y}px)`}}>
              <img src={test} alt="" width="300px"></img>
            </div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                posuere magna. Sed sit amet dolor sed nisi sollicitudin placerat
                eu eu mauris. Morbi rhoncus consequat lacus, vel ullamcorper
                ligula pellentesque pretium. Donec sagittis, risus at tempor
                maximus, tortor velit iaculis tortor, sit amet ullamcorper ipsum
                dolor et tortor. Vivamus venenatis tortor at sagittis luctus.
                Maecenas cursus sollicitudin dui, at mattis metus imperdiet id.
                Suspendisse et nulla et leo malesuada tincidunt.
              </span>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default SubSection;
