import "./LandingPageSection.less";

interface LandingPageSectionProps {
  onClick?: () => void;
  title: string;
  backgroundColor: string;
  titleColor: string;
  pause?: boolean;
}
const LandingPageSection: React.FC<LandingPageSectionProps> = ({
  title,
  backgroundColor,
  titleColor,
  onClick,
  pause = false
}: LandingPageSectionProps) => {
    const oddtitle = {
        margin: "-1em", 
        opacity: "20%",
        fontSize: "150%"
    }
    const repeats = window.innerWidth <= 800 ? 1 : 10;
  return (
    <div
      title={title}
      className="landing-page-section__container"
      style={{ backgroundColor, color: titleColor, opacity: pause ? "60%" : "100%"}}
      onClick={onClick}
    >
      <div className="landing-page-section__title">
        <p style={{animationPlayState: pause ? "paused": "running"}}>
            {
                Array(repeats).fill(0).map((_, index) => <span style={index % 2 ? {...oddtitle} : {}}>{title}</span>)
            }
        </p>
      </div>
    </div>
  );
};

export default LandingPageSection;
