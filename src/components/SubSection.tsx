import { useState, useEffect } from "react";
import "./SubSection.less";
import LeftArrow from "../svg/left-arrow.svg";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid2 version 2
//@ts-ignore
import Fade from "react-reveal/Fade";
import test from "../test.png";
import FloatingImage from "./FloatingImage";

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
      style={{
        backgroundColor: `${backgroundColor}`,
        color: `${backgroundColor2}`,
        ...styles,
      }}
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
                <h1 className="subsection__title">{title}</h1>
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
            <Grid2 xs={12} md={8} padding="0.5em">
              <FloatingImage src={test} />
            </Grid2>
            <Grid2 xs={12} md={4} padding="0.5em">
              <FloatingImage src={test} />
            </Grid2>
            <Grid2 xs={12} padding="0.5em">
              <FloatingImage src={test} />
            </Grid2>
          </Grid2>
        </Fade>
      </div>
    </div>
  );
};

export default SubSection;
