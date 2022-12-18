import "./LandingPageSection.less";

interface LandingPageSectionProps {
  onClick?: () => void;
  text: string;
  backgroundColor: string;
  textColor: string;
  fontSize?: string;
  fontFamily?: string;
  width?: string;
  pause: boolean;
}
const LandingPageSection: React.FC<LandingPageSectionProps> = ({
  text,
  backgroundColor,
  textColor,
  fontSize = "6em",
  onClick,
  fontFamily = "'Monoton', cursive",
  width,
  pause
}: LandingPageSectionProps) => {
  return (
    <div
      title={text}
      className="landing-page-section__container"
      style={{ backgroundColor, color: textColor, fontSize, fontFamily, width, opacity: pause ? "80%" : "100%", pointerEvents: pause ? "none" : "auto" }}
      onClick={onClick}
    >
      <div className="landing-page-section__text">
        <span style={{animationPlayState: pause ? "paused": "running"}}>{text}</span>
      </div>
    </div>
  );
};

export default LandingPageSection;
