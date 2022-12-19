import "./LandingPageSection.less";

interface LandingPageSectionProps {
  onClick?: () => void;
  text: string;
  backgroundColor: string;
  textColor: string;
  fontSize?: string;
  width?: string;
  pause?: boolean;
}
const LandingPageSection: React.FC<LandingPageSectionProps> = ({
  text,
  backgroundColor,
  textColor,
  fontSize = "7.5em",
  onClick,
  width,
  pause = false
}: LandingPageSectionProps) => {
    const oddText = {
        margin: "-1em", 
        opacity: "20%",
        fontSize: "150%"
    }
    const repeats = window.innerWidth <= 800 ? 1 : 10;
  return (
    <div
      title={text}
      className="landing-page-section__container"
      style={{ backgroundColor, color: textColor, fontSize, width, opacity: pause ? "45%" : "100%" }}
      onClick={onClick}
    >
      <div className="landing-page-section__text">
        <p style={{animationPlayState: pause ? "paused": "running"}}>
            {
                Array(repeats).fill(0).map((_, index) => <span style={index % 2 ? {...oddText} : {}}>{text}</span>)
            }
        </p>
      </div>
    </div>
  );
};

export default LandingPageSection;
