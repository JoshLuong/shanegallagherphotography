import { Tooltip, styled, tooltipClasses, TooltipProps } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { isSafari } from "../common/isSafari";
import { getWindowDimensions, handleResize } from "../common/windowDimensions";
import { NO_SECTION_OPEN } from "./LandingPage";
import "./LandingPageSection.less";

interface LandingPageSectionProps {
  onClick?: () => void;
  title: string;
  backgroundColor: string;
  titleColor: string;
  openSection: number;
  containerWidth?: string;
  index: number;
}
const BlackTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));


// This correlates to the transition time defined in .subsection__container
const DELAY = 380;
const REPEATS = window.innerWidth <= 800 ? 1 : 20;

const LandingPageSection: React.FC<LandingPageSectionProps> = ({
  title,
  backgroundColor,
  titleColor,
  onClick,
  openSection,
  containerWidth,
  index,
}: LandingPageSectionProps) => {
  const textContainerRef = useRef<any>(null);
  const animationDuration = title.length * REPEATS * 0.75;
  const isSectionOpen = index === openSection;
  const [shouldPauseAnimation, setShouldPauseAnimation] = useState(false);
  const [showInitialBackgroundColor, setShowInitialBackgroundColor] =
    useState(true);
  const [isHovering, setIsHovering] = useState(false);

  setTimeout(() => {
    setShouldPauseAnimation(openSection !== NO_SECTION_OPEN && !isSectionOpen);
  }, DELAY);

  const [fontSize, setFontSize] = useState("9em");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setFontSizeHandler = () => {
    if (windowDimensions.width > 800) {
      const divWidth = textContainerRef.current?.clientWidth;
      setFontSize(`${divWidth}px`);
    } else {
      const divHeight = textContainerRef.current?.clientHeight;
      setFontSize(`${divHeight}px`);
    }
  };

  useEffect(() => {
    handleResize(setWindowDimensions);
    // execute this immediately upon load (only once)
    setFontSizeHandler();

    // set a timer
    const timer = setTimeout(() => {
      setShowInitialBackgroundColor(false); // set class to none
    }, 450 + index * 75);

    // don't forget to clear in cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [index, setFontSizeHandler]);

  useEffect(() => {
    if (!isSafari) {
      setTimeout(() => {
        setFontSizeHandler();
      }, DELAY);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowDimensions, isSectionOpen]);

  const styles = useMemo((): any => {
    const fontStyles = isSafari ? {} : { fontSize };
    const opacity = shouldPauseAnimation ? "85%" : "100%";
    const width = containerWidth && !isSectionOpen ? containerWidth : "100%";
    const styles = {
      opacity,
      width,
      ...fontStyles,
    };
    if (!isHovering && !isSectionOpen && !showInitialBackgroundColor) {
      return styles;
    }
    return {
      ...styles,
      backgroundColor,
      color: titleColor,
    };
  }, [
    backgroundColor,
    containerWidth,
    fontSize,
    isHovering,
    isSectionOpen,
    shouldPauseAnimation,
    showInitialBackgroundColor,
    titleColor,
  ]);

  return (
      <BlackTooltip  title={title}
      followCursor>
      <div
        className="landing-page-section__container"
        style={{ ...styles }}
        onClick={onClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div ref={textContainerRef} className="landing-page-section__title">
          <p
            style={{
              animation: "running bookTicker linear infinite",
              animationDuration: shouldPauseAnimation
                ? `${animationDuration * 5}s`
                : `${animationDuration}s`,
            }}
          >
            {Array(REPEATS)
              .fill(0)
              .map((_, index) => {
                const oddtitle = {
                  margin: "-1em",
                  opacity: "10%",
                  fontSize: "180%",
                };
                return (
                  <span
                    style={
                      !isSafari && index === openSection && index % 2
                        ? { ...oddtitle }
                        : {}
                    }
                  >
                    {title}&nbsp;
                  </span>
                );
              })}
          </p>
        </div>
      </div>
      </BlackTooltip>
  );
};

export default LandingPageSection;
