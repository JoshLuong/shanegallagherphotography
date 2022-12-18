import LandingPageSection from "./LandingPageSection";
import "./LandingPage.less";
import MenuBar from "./MenuBar";
import SubSection from "./SubSection";
import { useState } from "react";

const LandingPage = () => {
  const medFontSize = "4.5em";

  const [openSubsection1, setOpenSubsection1] = useState(false);
  const section1OnClick = () => {
    setOpenSubsection1(!openSubsection1);
    setPauseAnimation(!pauseAnimation);
    setclickedSection(1);
  };
  const [openSubsection2, setOpenSubsection2] = useState(false);
  const section2OnClick = () => {
    setOpenSubsection2(!openSubsection2);
    setPauseAnimation(!pauseAnimation);
    setclickedSection(2);
  };
  const [openSubsection3, setOpenSubsection3] = useState(false);
  const section3OnClick = () => {
    setOpenSubsection3(!openSubsection3);
    setPauseAnimation(!pauseAnimation);
    setclickedSection(3);
  };
  const [openSubsection4, setOpenSubsection4] = useState(false);
  const section4OnClick = () => {
    setOpenSubsection4(!openSubsection4);
    setPauseAnimation(!pauseAnimation);
    setclickedSection(4);
  };
  const [openSubsection5, setOpenSubsection5] = useState(false);
  const section5OnClick = () => {
    setOpenSubsection5(!openSubsection5);
    setPauseAnimation(!pauseAnimation);
    setclickedSection(5);
  };
  const [openSubsection6, setOpenSubsection6] = useState(false);
  const section6OnClick = () => {
    setOpenSubsection6(!openSubsection6);
    setPauseAnimation(!pauseAnimation);
    setclickedSection(6);
  };
  const [openSubsection7, setOpenSubsection7] = useState(false);
  const section7OnClick = () => {
    setOpenSubsection7(!openSubsection7);
    setPauseAnimation(!pauseAnimation);
    setclickedSection(7);
  };
  const [openSubsection8, setOpenSubsection8] = useState(false);
  const section8OnClick = () => {
    setOpenSubsection8(!openSubsection8);
    setPauseAnimation(!pauseAnimation);
    setclickedSection(8);
  };

  const [pauseAnimation, setPauseAnimation] = useState(false);
  const [clickedSection, setclickedSection] = useState(0);

  return (
    <div className="landing-page__container">
      <div className="landing-page__container-sections">
        {/** Section 1 */}
        <LandingPageSection
          text="Studio"
          backgroundColor="#00522a"
          textColor="#7ddf64"
          pause={pauseAnimation && clickedSection !== 1}
          onClick={section1OnClick}
        />
        <SubSection
          onClick={section1OnClick}
          show={openSubsection1}
          backgroundColor="#00522a"
          backgroundColor2="#7ddf64"
          title="Studio"
        />

        {/** Section 2 */}
        <LandingPageSection
          text="In Studio: Lucy"
          backgroundColor="#212121"
          textColor="#ff7f11"
          width="8em"
          fontFamily="'Bodoni Moda', serif"
          pause={pauseAnimation && clickedSection !== 2}
          onClick={section2OnClick}
        />
        <SubSection
          onClick={section2OnClick}
          show={openSubsection2}
          backgroundColor="#212121"
          backgroundColor2="#ff7f11"
          title="In Studio: Lucy"
        />

        {/** Section 3 */}
        <LandingPageSection
          text="Cassie Wolde"
          backgroundColor="#990000"
          textColor="#f92a82"
          pause={pauseAnimation && clickedSection !== 3}
          onClick={section3OnClick}
        />
        <SubSection
          onClick={section3OnClick}
          show={openSubsection3}
          backgroundColor="#990000"
          backgroundColor2="#f92a82"
          title="Cassie Wolde"
        />

        {/** Section 4 */}
        <LandingPageSection
          text="Lowtide Properties: Monarca"
          backgroundColor="#f7f3e3"
          textColor="#6f58c9"
          fontSize={medFontSize}
          pause={pauseAnimation && clickedSection !== 4}
          onClick={section4OnClick}
        />
        <SubSection
          onClick={section4OnClick}
          show={openSubsection4}
          backgroundColor="#f7f3e3"
          backgroundColor2="#6f58c9"
          title="Lowtide Properties: Monarca"
        />
        {/** Section 5 */}
        <LandingPageSection
          text="For The Love of Life"
          fontSize={medFontSize}
          backgroundColor="#0a2463"
          textColor="#00a5cf"
          pause={pauseAnimation && clickedSection !== 5}
          onClick={section5OnClick}
        />
        <SubSection
          onClick={section5OnClick}
          show={openSubsection5}
          backgroundColor="#0a2463"
          backgroundColor2="#00a5cf"
          title="For The Love of Life"
        />

        {/** Section 6*/}
        <LandingPageSection
          text="Granville Island Brewing"
          backgroundColor="#00522a"
          textColor="#7ddf64"
          fontSize={medFontSize}
          pause={pauseAnimation && clickedSection !== 6}
          onClick={section6OnClick}
        />
        <SubSection
          onClick={section6OnClick}
          show={openSubsection6}
          backgroundColor="#00522a"
          backgroundColor2="#7ddf64"
          title="Granville Island Brewing"
        />
        {/** Section 7 */}
        <LandingPageSection
          text="Kold"
          width="8em"
          fontFamily="'Bodoni Moda', serif"
          backgroundColor="#212121"
          textColor="#ff7f11"
          pause={pauseAnimation && clickedSection !== 7}
          onClick={section7OnClick}
        />
        <SubSection
          onClick={section7OnClick}
          show={openSubsection7}
          backgroundColor="#212121"
          backgroundColor2="#ff7f11"
          title="Kold"
        />
        {/** Section 8 */}
        <LandingPageSection
          text="Sundays Furniture"
          backgroundColor="#f7f3e3"
          textColor="#6f58c9"
          fontSize={medFontSize}
          pause={pauseAnimation && clickedSection !== 8}
          onClick={section8OnClick}
        />
        <SubSection
          onClick={section8OnClick}
          show={openSubsection8}
          backgroundColor="#f7f3e3"
          backgroundColor2="#6f58c9"
          title="Sundays Furniture"
        />
      </div>
      <MenuBar />
    </div>
  );
};

export default LandingPage;
