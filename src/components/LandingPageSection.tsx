import { useEffect, useRef, useState } from "react";
import { isSafari } from "../common/isSafari";
import { getWindowDimensions, handleResize } from "../common/windowDimensions";
import "./LandingPageSection.less";

interface LandingPageSectionProps {
  onClick?: () => void;
  title: string;
  backgroundColor: string;
  titleColor: string;
  openSection: number;
  sectionKey: number;
  width?: string;
}
// This correlates to the transition time defined in .subsection__container
const DELAY = 170;

const LandingPageSection: React.FC<LandingPageSectionProps> = ({
  title,
  backgroundColor,
  titleColor,
  onClick,
  openSection,
  sectionKey,
  width,
}: LandingPageSectionProps) => {
  const oddtitle = {
    margin: "-1em",
    opacity: "10%",
    fontSize: "180%",
  };
  const textContainerRef = useRef<any>(null);
  const repeats = window.innerWidth <= 800 ? 1 : 20;
  const animationDuration = title.length > 15 ? 450 : 200;
  const isSectionOpen = sectionKey === openSection;
  const [shouldPauseAnimation, setShouldPauseAnimation] = useState(false);

  setTimeout(() => {
    setShouldPauseAnimation(openSection !== 0 && !isSectionOpen);
  }, DELAY);

  const [fontSize, setFontSize] = useState("9em");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    handleResize(setWindowDimensions);
  }, []);

  const setFontSizeHandler = () => {
    const divWidth = textContainerRef.current?.clientWidth;
    setFontSize(`${divWidth}px`);
  };
  useEffect(() => {
    setFontSizeHandler();
  // execute this immediately upon load (only once)
  }, []);

  useEffect(() => {
    if (!isSafari) {
      setTimeout(() => {
        setFontSizeHandler();
      }, DELAY);
    }
  }, [isSectionOpen, openSection, sectionKey, windowDimensions]);
  return (
    <div
      title={title}
      className="landing-page-section__container"
      style={{
        backgroundColor,
        color: titleColor,
        opacity: shouldPauseAnimation ? "40%" : "100%",
        width: width && !isSectionOpen ? width : "100%",
        fontSize,
      }}
      onClick={onClick}
    >
      <div ref={textContainerRef} className="landing-page-section__title">
        <p
          style={{
            animation: 'running bookTicker linear infinite',
            animationDuration: shouldPauseAnimation ? `${animationDuration * 5}s`: `${animationDuration}s`
          }}
        >
          {Array(repeats)
            .fill(0)
            .map((_, index) => (
              <span
                style={
                  !isSafari && sectionKey === openSection && index % 2
                    ? { ...oddtitle }
                    : {}
                }
              >
                {title}&nbsp;
              </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default LandingPageSection;
