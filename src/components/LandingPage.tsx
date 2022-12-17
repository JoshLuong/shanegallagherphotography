import LandingPageSection from "./LandingPageSection";
import "./LandingPage.less";
import MenuBar from "./MenuBar";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const medFontSize = "4.5em";

  const navigate = useNavigate();

  return (
    <div className="landing-page__container">
      <div className="landing-page__container-sections">
        <LandingPageSection
          text="Studio"
          backgroundColor="#e91e63"
          textColor="black"
          onClick={() => navigate("/studio")}
        />
        <LandingPageSection
          text="In Studio: Lucy"
          backgroundColor="#fdc500"
          textColor="black"
          width="8em"
          fontFamily="'Bodoni Moda', serif"
          onClick={() => navigate("/lucy")}
        />
        <LandingPageSection
          text="Cassie Wolde"
          backgroundColor="#06D6A0"
          textColor="black"
        />
        <LandingPageSection
          text="Lowtide Properties: Monarca"
          backgroundColor="#560bad"
          textColor="black"
          fontSize={medFontSize}
        />
        <LandingPageSection
          text="For The Love of Life"
          fontSize={medFontSize}
          backgroundColor="#B5179E"
          textColor="black"
        />
        <LandingPageSection
          text="Granville Island Brewing"
          backgroundColor="#073B4C"
          textColor="black"
          fontSize={medFontSize}
        />
        <LandingPageSection
          text="Kold"
          backgroundColor="#4CC9F0"
          width="8em"
          fontFamily="'Bodoni Moda', serif"
          textColor="black"
        />
        <LandingPageSection
          text="Sundays Furniture"
          backgroundColor="#F72585"
          textColor="black"
          fontSize={medFontSize}
        />
      </div>
      <MenuBar />
    </div>
  );
};

export default LandingPage;
