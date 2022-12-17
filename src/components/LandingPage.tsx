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
          backgroundColor="#00522a"
          textColor="#7ddf64"
          onClick={() => navigate("/studio")}
        />
        <LandingPageSection
          text="In Studio: Lucy"
          backgroundColor="#212121"
          textColor="#ff7f11"
          width="8em"
          fontFamily="'Bodoni Moda', serif"
          onClick={() => navigate("/lucy")}
        />
        <LandingPageSection
          text="Cassie Wolde"
          backgroundColor="#990000"
          textColor="#f92a82"
        />
        <LandingPageSection
          text="Lowtide Properties: Monarca"
          backgroundColor="#f7f3e3"
          textColor="#6f58c9"
          fontSize={medFontSize}
        />
        <LandingPageSection
          text="For The Love of Life"
          fontSize={medFontSize}
          backgroundColor="#0a2463"
          textColor="#00a5cf"
        />
        <LandingPageSection
          text="Granville Island Brewing"
          backgroundColor="#00522a"
          textColor="#7ddf64"
          fontSize={medFontSize}
        />
        <LandingPageSection
          text="Kold"
          width="8em"
          fontFamily="'Bodoni Moda', serif"
          backgroundColor="#212121"
          textColor="#ff7f11"
        />
        <LandingPageSection
          text="Sundays Furniture"
          backgroundColor="#f7f3e3"
          textColor="#6f58c9"
          fontSize={medFontSize}
        />
      </div>
      <MenuBar />
    </div>
  );
};

export default LandingPage;
