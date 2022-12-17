import "./LandingPageSection.less";

interface LandingPageSectionProps {
    text: string;
    backgroundColor: string;
    textColor: string;
    fontSize?: string;
}
const LandingPageSection: React.FC<LandingPageSectionProps> = ({text, backgroundColor, textColor, fontSize = "6em"}: LandingPageSectionProps) => {
    return (
      <div title={text} className="landing-page-section__container" style={{ backgroundColor, color: textColor, fontSize }}>
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