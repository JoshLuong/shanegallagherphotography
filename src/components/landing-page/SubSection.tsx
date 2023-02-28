import { useState, useEffect } from "react";
import "./SubSection.less";
//@ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import { getWindowDimensions, handleResize } from "../../common/windowDimensions";
import SummaryContent from "./SummaryContent";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Maybe } from "graphql/jsutils/Maybe";
import { SubsectionPreview, Colour} from "../../__generated__/graphql";

interface SubSectionProps {
  show: boolean;
  onClick: () => void;
  // TODO remove ?
  subSectionContent?: Maybe<SubsectionPreview> | undefined;
  colourScheme: Maybe<Colour> | undefined;
}
const SubSection: React.FC<SubSectionProps> = ({
  show,
  onClick,
  subSectionContent,
  colourScheme
}) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    handleResize(setWindowDimensions);
  }, []);
  if (!colourScheme) {
    return null;
  }
  const {primary, secondary} = colourScheme;

  const mobileView = windowDimensions.width <= 800;
  const size = show ? "100%" : "0";

  const innerContainerStyles = show
    ? {
        // can customize
        width: "50vw",
      }
    : {
        width: "0",
      };

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
      style={{
        backgroundColor: `${primary}`,
        color: `${secondary}`,
        ...styles,
      }}
    >
      <div
        className="subsection__inner-container"
        style={{ ...innerContainerStyles }}
      >
        {show && (
          <div>
            <div className="subsection__close-button">
            <IconButton
                    onClick={onClick}
                    aria-label="fingerprint"
                    style={{ color: secondary || ""}}
                  >
                    <CloseIcon />
                  </IconButton>
                  </div>
              {subSectionContent && show && (
                <SummaryContent colourScheme={colourScheme} subSectionContent={subSectionContent} />
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubSection;
