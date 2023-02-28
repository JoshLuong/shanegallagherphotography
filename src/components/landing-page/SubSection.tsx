import { useState, useEffect } from "react";
import "./SubSection.less";
// @ts-ignore
import {
  getWindowDimensions,
  handleResize,
} from "../../common/windowDimensions";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Maybe } from "graphql/jsutils/Maybe";
import { SubsectionPreview, Colour } from "../../__generated__/graphql";
import PreviewLeftImageContent from "../preview-content/PreviewLeftImageContent";
import PreviewRightImageContent from "../preview-content/PreviewRightImageContent";

interface SubSectionProps {
  show: boolean;
  onClick: () => void;
  subsectionContent: Maybe<SubsectionPreview> | undefined;
  colourScheme: Maybe<Colour> | undefined;
  theme: "leftAlign" | "rightAlign";
}
const SubSection: React.FC<SubSectionProps> = ({
  show,
  onClick,
  subsectionContent,
  colourScheme,
  theme,
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
  const { primary, secondary } = colourScheme;

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

  const getThemedSubSectionPreview = () => {
    switch (theme) {
      case "leftAlign":
        return (
          <PreviewLeftImageContent
            colourScheme={colourScheme}
            subsectionContent={subsectionContent}
          />
        );
      case "rightAlign":
        return (
          <PreviewRightImageContent
            colourScheme={colourScheme}
            subsectionContent={subsectionContent}
          />
        );
      default:
        return null;
    }
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
                style={{ color: secondary || "" }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            {getThemedSubSectionPreview()}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubSection;
