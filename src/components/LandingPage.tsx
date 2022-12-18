import LandingPageSection from "./LandingPageSection";
import "./LandingPage.less";
import MenuBar from "./MenuBar";
import { useNavigate } from "react-router-dom";
import SubSection from "./SubSection";
import { useState } from "react";

const LandingPage = () => {
  const medFontSize = "4.5em";

  const [openSubsection1, setOpenSubsection1] = useState(false);
  const [openSubsection2, setOpenSubsection2] = useState(false);
  const [openSubsection3, setOpenSubsection3] = useState(false);
  const [openSubsection4, setOpenSubsection4] = useState(false);
  const [openSubsection5, setOpenSubsection5] = useState(false);
  const [openSubsection6, setOpenSubsection6] = useState(false);
  const [openSubsection7, setOpenSubsection7] = useState(false);
  const [openSubsection8, setOpenSubsection8] = useState(false);


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
          onClick={() => {
            setOpenSubsection1(!openSubsection1)
            setPauseAnimation(!pauseAnimation)
            setclickedSection(1);
          }}
        />
        <SubSection show={openSubsection1} backgroundColor="#00522a" backgroundColor2="#7ddf64"/>

        {/** Section 2 */}
        <LandingPageSection
          text="In Studio: Lucy"
          backgroundColor="#212121"
          textColor="#ff7f11"
          width="8em"
          fontFamily="'Bodoni Moda', serif"
          pause={pauseAnimation && clickedSection !== 2}
          onClick={() => {
            setOpenSubsection2(!openSubsection2)
            setPauseAnimation(!pauseAnimation)
            setclickedSection(2);
          }}
        />
         <SubSection show={openSubsection2} backgroundColor="#212121" backgroundColor2="#ff7f11"/>

         {/** Section 3 */}
        <LandingPageSection
          text="Cassie Wolde"
          backgroundColor="#990000"
          textColor="#f92a82"
          pause={pauseAnimation && clickedSection !== 3}
          onClick={() => {
            setOpenSubsection3(!openSubsection3)
            setPauseAnimation(!pauseAnimation)
            setclickedSection(3);
          }}
        />
         <SubSection show={openSubsection3} backgroundColor="#990000" backgroundColor2="#f92a82"/>

          {/** Section 4 */}
        <LandingPageSection
          text="Lowtide Properties: Monarca"
          backgroundColor="#f7f3e3"
          textColor="#6f58c9"
          fontSize={medFontSize}
          pause={pauseAnimation && clickedSection !== 4}
          onClick={() => {
            setOpenSubsection4(!openSubsection4)
            setPauseAnimation(!pauseAnimation)
            setclickedSection(4);
          }}
        />
         <SubSection show={openSubsection4} backgroundColor="#f7f3e3" backgroundColor2="#6f58c9"/>
           {/** Section 5 */}
        <LandingPageSection
          text="For The Love of Life"
          fontSize={medFontSize}
          backgroundColor="#0a2463"
          textColor="#00a5cf"
          pause={pauseAnimation && clickedSection !== 5}
          onClick={() => {
            setOpenSubsection5(!openSubsection5)
            setPauseAnimation(!pauseAnimation)
            setclickedSection(5);
          }}
        />
         <SubSection show={openSubsection5} backgroundColor="#0a2463" backgroundColor2="#00a5cf"/>
          {/** Section 6*/}
        <LandingPageSection
          text="Granville Island Brewing"
          backgroundColor="#00522a"
          textColor="#7ddf64"
          fontSize={medFontSize}
          pause={pauseAnimation && clickedSection !== 6}
          onClick={() => {
            setOpenSubsection6(!openSubsection6)
            setPauseAnimation(!pauseAnimation)
            setclickedSection(6);
          }}
        />
         <SubSection show={openSubsection6} backgroundColor="#00522a" backgroundColor2="#7ddf64"/>
          {/** Section 7 */}
        <LandingPageSection
          text="Kold"
          width="8em"
          fontFamily="'Bodoni Moda', serif"
          backgroundColor="#212121"
          textColor="#ff7f11"
          pause={pauseAnimation && clickedSection !== 7}
          onClick={() => {
            setOpenSubsection7(!openSubsection7)
            setPauseAnimation(!pauseAnimation)
            setclickedSection(7);
          }}
        />
         <SubSection show={openSubsection7} backgroundColor="#212121" backgroundColor2="#ff7f11"/>
        {/** Section 8 */}
        <LandingPageSection
          text="Sundays Furniture"
          backgroundColor="#f7f3e3"
          textColor="#6f58c9"
          fontSize={medFontSize}
          pause={pauseAnimation && clickedSection !== 8}
          onClick={() => {
            setOpenSubsection8(!openSubsection8)
            setPauseAnimation(!pauseAnimation)
            setclickedSection(8);
          }}
        />
         <SubSection show={openSubsection8} backgroundColor="#f7f3e3" backgroundColor2="#6f58c9"/>
      </div>
      <MenuBar />
    </div>
  );
};

export default LandingPage;
