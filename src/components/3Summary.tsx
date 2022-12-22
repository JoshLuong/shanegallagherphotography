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
import { Subsection } from "./sections";

interface Summary3Props {
    sections: Subsection[]
}
const Summary3: React.FC<Summary3Props> = ({
    sections
}) => {
  return (
          <Grid2 container>
          <Grid2 xs={12} md={6} padding="0.5em" margin="auto">
              {<FloatingImage src={sections[0].href} />}
            </Grid2>
            <Grid2 xs={12} md={6} padding="0.5em">
            { <FloatingImage hover src={sections[1].href} />}
            </Grid2>
          </Grid2>
  );
};

export default Summary3;
