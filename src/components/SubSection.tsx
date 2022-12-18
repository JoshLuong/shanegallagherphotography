import { useState, useEffect } from "react";
import "./SubSection.less";
import LeftArrow from "../left-arrow.svg";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid2 version 2
//@ts-ignore
import Fade from "react-reveal/Fade";
import test from "../test.png";

interface SubSectionProps {
  show: boolean;
  backgroundColor: string;
  backgroundColor2: string;
  onClick: () => void;
  title: string;
}
const SubSection: React.FC<SubSectionProps> = ({
  show,
  backgroundColor,
  backgroundColor2,
  title,
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
      setX(Math.random() * (10 - 1) + 1);
      setY(Math.random() * (10 - 1) + 1);
    }, 250);
  };
  useEffect(() => {
    countTimers();
  }, []);
  useEffect(() => {
    function handleResize() {
      console.log(getWindowDimensions());
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileView = windowDimensions.width <= 800;
  const size = show ? "auto" : "0";
  const background = `linear-gradient(${
    mobileView ? "" : "to right,"
  }${backgroundColor}, ${backgroundColor2})`;

  const innerContainerStyles = show
    ? {
        display: "flex",
      }
    : {
        display: "none",
      };

  const styles = mobileView
    ? {
        height: size,
      }
    : {
        minWidth: size,
      };
  return (
    <div
      className="subsection__container"
      style={{ backgroundImage: background, ...styles }}
    >
      <div
        className="subsection__inner-container"
        style={{ ...innerContainerStyles }}
      >
        <Fade duration={900} delay={400}>
          <Grid2 container>
            <Grid2 xs={12} container marginTop="0.5em" marginBottom="0.5em">
            <Grid2
              xs={11}
              mdOffset="auto"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
                <h1 className="subsection__title">
                {title}

                </h1>
            </Grid2>
            <Grid2
              xs={1}
              mdOffset="auto"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <img
                title="Close"
                onClick={onClick}
                className="subsection__close-button"
                src={LeftArrow}
                alt="Close"
              />
            </Grid2>
            </Grid2>
            <Grid2 xs={12} md={8}>
              <div className="subsection__image1">
                <div
                  className="subsection__hover"
                  onClick={() => alert("ur a hoe!")}
                >
                  <div
                    className="subsection__image-container"
                    style={{
                      transition: "all 0.6s ease-in-out",
                      transform: `translateX(${x}px) translateY(${y}px)`,
                    }}
                  >
                    <img src={test} alt="" width="300px"></img>
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
            </Grid2>
            <Grid2 xs={12} md={4}>
              <div className="subsection__image1">
                <div
                  className="subsection__hover"
                  onClick={() => alert("ur a hoe!")}
                >
                  <div
                    className="subsection__image-container"
                    style={{
                      transition: "all 0.6s ease-in-out",
                      transform: `translateX(${x}px) translateY(${y}px)`,
                    }}
                  >
                    <img src={test} alt="" width="300px"></img>
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
            </Grid2>
            <Grid2 xs={12}>
              <div className="subsection__image1">
                <div
                  className="subsection__hover"
                  onClick={() => alert("ur a hoe!")}
                >
                  <div
                    className="subsection__image-container"
                    style={{
                      transition: "all 0.6s ease-in-out",
                      transform: `translateX(${x}px) translateY(${y}px)`,
                    }}
                  >
                    <img src={test} alt="" width="300px"></img>
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
            </Grid2>
          </Grid2>
        </Fade>
      </div>
    </div>
  );
};

export default SubSection;
