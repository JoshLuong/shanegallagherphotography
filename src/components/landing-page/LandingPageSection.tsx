import { Tooltip, styled, tooltipClasses, TooltipProps } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { isSafari } from "../../common/isSafari";
import {
  getWindowDimensions,
  handleResize,
} from "../../common/windowDimensions";
import { NO_SECTION_OPEN } from "./LandingPage";
import "./LandingPageSection.less";

interface LandingPageSectionProps {
  onClick?: () => void;
  title: string;
  backgroundColor: string;
  titleColor: string;
  openSection: number;
  containerWidth?: number;
  fastAnimation: boolean;
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
  fastAnimation,
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
    const width =
      containerWidth && !isSectionOpen ? `${containerWidth}px` : "100%";
    let styles: any = {
      width,
      ...fontStyles,
    };
    if (!isHovering && !isSectionOpen && !showInitialBackgroundColor) {
      return styles;
    }
    if (showInitialBackgroundColor) {
      styles = {
        pointerEvents: "none",
        ...styles,
      };
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
    showInitialBackgroundColor,
    titleColor,
  ]);

  useEffect(() => {
    var elem: any = document.getElementById("idtest");
    console.log(elem);
    var style = window.getComputedStyle(elem, null);
    var frame = style.getPropertyValue("z-index");
    var delay = -frame / 36;
    elem.style["-webkit-animation-delay"] = delay + "s !important";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fastAnimation]);

  return (
    <BlackTooltip title={title} followCursor>
      <div
        className="landing-page-section__container"
        style={{ ...styles }}
        onClick={onClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div ref={textContainerRef} className="landing-page-section__title">
          <p
            id="idtest"
            style={{
              transition: "animation 180s",
              animation: "running bookTicker linear infinite",
              animationDuration:
                fastAnimation || showInitialBackgroundColor
                  ? `${animationDuration / 30}s`
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
                    style={index % 2 && title.length < 8 ? { ...oddtitle } : {}}
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
