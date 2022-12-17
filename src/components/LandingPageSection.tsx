import "./LandingPageSection.less";

interface LandingPageSectionProps {
    text: string;
    backgroundColor: string;
    textColor: string;
}
const LandingPageSection: React.FC<LandingPageSectionProps> = ({text, backgroundColor, textColor}: LandingPageSectionProps) => {
    return (
      <div className="landing-page-section__container" style={{ backgroundColor, color: textColor }}>
        <a href="/works/invokingworlds/">
        <div>
            <div className="landing-page-section__text">
                <span>{text}</span>
            </div> 

        </div>
        </a>
      </div>
    );
  };
  
  export default LandingPageSection;