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
          backgroundColor="#3bb1b8"
          textColor="black"
          onClick={() => navigate("/studio")}
        />
        <LandingPageSection
          text="In Studio: Lucy"
          backgroundColor="#e5951b"
          textColor="black"
          width="8em"
          fontFamily="'Bodoni Moda', serif"
          onClick={() => navigate("/lucy")}
        />
        <LandingPageSection
          text="Cassie Wolde"
          backgroundColor="#35c074"
          textColor="black"
        />
        <LandingPageSection
          text="Lowtide Properties: Monarca"
          backgroundColor="#c65dbd"
          textColor="black"
          fontSize={medFontSize}
        />
        <LandingPageSection
          text="For The Love of Life"
          fontSize={medFontSize}
          backgroundColor="#f2e509"
          textColor="black"
        />
        <LandingPageSection
          text="Granville Island Brewing"
          backgroundColor="#c81a17"
          textColor="black"
          fontSize={medFontSize}
        />
        <LandingPageSection
          text="Kold"
          backgroundColor="#4CC9F0"
          textColor="black"
        />
        <LandingPageSection
          text="Sundays Furniture"
          backgroundColor="#f551ab"
          textColor="black"
          fontSize={medFontSize}
        />
      </div>
      <MenuBar />
    </div>
  );
};

export default LandingPage;
