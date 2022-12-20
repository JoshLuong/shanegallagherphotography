import { useState, useEffect } from "react";
import "./SubSection.less";
import {ReactComponent as LeftArrow} from "../svg/left-arrow.svg";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid2 version 2
//@ts-ignore
import Fade from "react-reveal/Fade";
import test from "../test.png";
import FloatingImage from "./FloatingImage";
// @ts-ignore
import { getWindowDimensions, handleResize } from "../common/windowDimensions";

interface SubSectionProps {
  show: boolean;
  backgroundColor: string;
  titleColor: string;
  onClick: () => void;
  title: string; // TODO remove
}
const SubSection: React.FC<SubSectionProps> = ({
  show,
  backgroundColor,
  titleColor,
  onClick,
}) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    handleResize(setWindowDimensions)
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
        color: `${titleColor}`,
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
                xs={12}
                mdOffset="auto"
                display="flex"
                flexDirection="column"
                alignItems="end"
              >
                <LeftArrow fill={titleColor} title="Close" className="subsection__close-button" onClick={onClick}/>
              </Grid2>
            </Grid2>
            <Grid2 xs={12} md={8} padding="0.5em" margin="auto">
              { show && <FloatingImage src={test} />}
            </Grid2>
            <Grid2 xs={12} md={4} padding="0.5em">
            { show && <FloatingImage hover src={test} />}
            </Grid2>
            <Grid2 xs={12} padding="0.5em">
            { show && <FloatingImage src={test} />}
            </Grid2>
          </Grid2>
        </Fade>
      </div>
    </div>
  );
};

export default SubSection;
