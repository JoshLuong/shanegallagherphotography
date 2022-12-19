import "./LandingPageSection.less";

interface LandingPageSectionProps {
  onClick?: () => void;
  title: string;
  backgroundColor: string;
  titleColor: string;
  openSection: number;
  sectionKey: number;
}
const LandingPageSection: React.FC<LandingPageSectionProps> = ({
  title,
  backgroundColor,
  titleColor,
  onClick,
  openSection,
  sectionKey
}: LandingPageSectionProps) => {
    const oddtitle = {
        margin: "-1em", 
        opacity: "10%",
        fontSize: "180%"
    }
    const repeats = window.innerWidth <= 800 ? 1 : 20;
    const animationDuration = title.length > 15 ? '300s' : '100s';
    const shouldPauseAnimation = openSection !== 0 && sectionKey !== openSection;
  return (
    <div
      title={title}
      className="landing-page-section__container"
      style={{ backgroundColor, color: titleColor, opacity: shouldPauseAnimation ? "60%" : "100%"}}
      onClick={onClick}
    >
      <div className="landing-page-section__title">
        <p style={{animationPlayState: shouldPauseAnimation ? "paused": "running", animation: `${animationDuration} bookTicker linear infinite`}}>
            {
                Array(repeats).fill(0).map((_, index) => <span style={sectionKey === openSection &&index % 2 ? {...oddtitle} : {}}>{title}&nbsp;</span>)
            }
        </p>
      </div>
    </div>
  );
};

export default LandingPageSection;
