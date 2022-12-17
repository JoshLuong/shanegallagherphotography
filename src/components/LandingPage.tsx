import LandingPageSection from "./LandingPageSection";
import "./LandingPage.less";
import MenuBar from "./MenuBar";

const LandingPage = () => {
    return (
      <div className="landing-page__container">
        <LandingPageSection text="Studio" backgroundColor="#560bad" textColor="black"/>
        <LandingPageSection text="In&nbsp;&nbsp;studio:&nbsp;&nbsp; Lucy" backgroundColor="#fdc500" textColor="black"/>
        <LandingPageSection text="Cassie Wolde" backgroundColor="#06D6A0" textColor="black"/>
        <LandingPageSection text="LOWTIDE&nbsp;PROPERTIES:&nbsp;&nbsp; MONARCA" backgroundColor="#560bad" textColor="black"/>
        <LandingPageSection text="For The Love of Life" backgroundColor="#B5179E" textColor="black"/>
        <LandingPageSection text="GRANVILLE ISLAND BREWING" backgroundColor="#073B4C" textColor="black"/>
        <LandingPageSection text="Kold" backgroundColor="#4CC9F0" textColor="black"/>
        <LandingPageSection text="Sundays Furniture" backgroundColor="#F72585" textColor="black"/>
        <MenuBar />
      </div>
    );
  };
  
  export default LandingPage;