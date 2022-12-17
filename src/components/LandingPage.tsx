import LandingPageSection from "./LandingPageSection";
import "./LandingPage.less";
import MenuBar from "./MenuBar";
import { useState } from "react";

const LandingPage = () => {
    const medFontSize = "4.5em";

    const [showSubSection, setShowSubsection] = useState(false);
    const onClick = () => {
        setShowSubsection(!showSubSection);
    }

    return (
      <div className="landing-page__container">
        <div className="landing-page__container-sections">
            <LandingPageSection text="Studio" backgroundColor="#560bad" textColor="black" onClick={onClick}/>
            <LandingPageSection text="In Studio: Lucy" backgroundColor="#fdc500" textColor="black"/>
            <LandingPageSection text="Cassie Wolde" backgroundColor="#06D6A0" textColor="black"/>
            <LandingPageSection text="Lowtide Properties: Monarca" backgroundColor="#560bad" textColor="black" fontSize={medFontSize}/>
            <LandingPageSection text="For The Love of Life" fontSize={medFontSize} backgroundColor="#B5179E" textColor="black"/>
            <LandingPageSection text="Granville Island Brewing" backgroundColor="#073B4C" textColor="black" fontSize={medFontSize}/>
            <LandingPageSection text="Kold" backgroundColor="#4CC9F0" textColor="black"/>
            <LandingPageSection text="Sundays Furniture" backgroundColor="#F72585" textColor="black" fontSize={medFontSize}/>
        </div>
        <MenuBar />
      </div>
    );
  };
  
  export default LandingPage;