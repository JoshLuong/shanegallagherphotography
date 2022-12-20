import { useEffect, useRef, useState } from "react";
import { getWindowDimensions, handleResize } from "../common/windowDimensions";
import "./LandingPageSection.less";
import SectionTitle from "./SectionTitle";

interface LandingPageSectionProps {
  onClick?: () => void;
  title: string;
  backgroundColor: string;
  titleColor: string;
  openSection: number;
  sectionKey: number;
  width?: string;
}
//@ts-ignore
const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

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
  const animationDuration = title.length > 15 ? "450s" : "200s";
  const isSectionOpen = sectionKey === openSection;
  const shouldPauseAnimation = openSection !== 0 && !isSectionOpen;

  const [fontSize, setFontSize] = useState("9em");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function reset_animation() {
    var el = document.getElementById(`animated-${sectionKey}`) as any;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetHeight; /* trigger reflow */
  }

  useEffect(() => {
    handleResize(setWindowDimensions);
  }, []);

  useEffect(() => {
    console.log("rests")

        const divWidth = textContainerRef.current?.clientWidth;
        setFontSize(`${divWidth}px`);
        reset_animation();
  }, [isSectionOpen, openSection, sectionKey, windowDimensions]);
  return (
    <div
      title={title}
      className="landing-page-section__container"
      style={{
        backgroundColor,
        color: titleColor,
        opacity: shouldPauseAnimation ? "60%" : "100%",
        width: width && !isSectionOpen ? width : "100%",
        fontSize,
      }}
      onClick={onClick}
    >
      <div ref={textContainerRef} className="landing-page-section__title">
        <p
          id={`animated-${sectionKey}`}
          style={{
            animationPlayState: shouldPauseAnimation ? "paused" : "running",
            animation: `${animationDuration} bookTicker linear infinite`,
          }}
        >
          {Array(repeats)
            .fill(0)
            .map((_, index) => (
              <span
                style={
                    !isSafari && sectionKey === openSection && index % 2 ? { ...oddtitle } : {}
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