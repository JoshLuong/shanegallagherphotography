import "./LandingPageSection.less";

interface LandingPageSectionProps {
  onClick?: () => void;
  text: string;
  backgroundColor: string;
  textColor: string;
  fontSize?: string;
  fontFamily?: string;
  width?: string;
}
const LandingPageSection: React.FC<LandingPageSectionProps> = ({
  text,
  backgroundColor,
  textColor,
  fontSize = "6em",
  onClick,
  fontFamily = "'Monoton', cursive",
  width,
}: LandingPageSectionProps) => {
  return (
    <div
      title={text}
      className="landing-page-section__container"
      style={{ backgroundColor, color: textColor, fontSize, fontFamily, width }}
      onClick={onClick}
    >
      <div className="landing-page-section__text">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default LandingPageSection;
