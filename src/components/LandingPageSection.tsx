import "./LandingPageSection.less";

interface LandingPageSectionProps {
    onClick?: () => void;
    text: string;
    backgroundColor: string;
    textColor: string;
    fontSize?: string;
}
const LandingPageSection: React.FC<LandingPageSectionProps> = ({text, backgroundColor, textColor, fontSize = "6em", onClick}: LandingPageSectionProps) => {
    return (
      <div title={text} className="landing-page-section__container" style={{ backgroundColor, color: textColor, fontSize }} onClick={onClick}>
        <div>
            <div className="landing-page-section__text">
                <span>{text}</span>
            </div> 

        </div>
      </div>
    );
  };
  
  export default LandingPageSection;