import LandingPageSection from "./LandingPageSection";
import "./LandingPage.less";
import MenuBar from "./MenuBar";
import SubSection from "./SubSection";
import { ReactNode, useState } from "react";
import sectionsMap from "./sections";

const NO_SECTION_OPEN = 0;

const LandingPage = () => {
  const [openSection, setOpenSection] = useState<number>(NO_SECTION_OPEN);
  const [pauseAnimation, setPauseAnimation] = useState(false);

  return (
    <div className="landing-page__container">
      <div className="landing-page__container-sections">
        {Array.from(sectionsMap.entries()).map((value): ReactNode => {
          const { title, primaryColor, secondaryColor } = value[1];
          const sectionKey = value[0];
          const show = openSection === sectionKey;

          const onOpen = () => {
            setOpenSection(sectionKey);
            setPauseAnimation(true);
          };
          const onClose = () => {
            setOpenSection(NO_SECTION_OPEN);
            setPauseAnimation(false);
          };

          const props = {
            backgroundColor:primaryColor,
            titleColor:secondaryColor,
            title:title
          }
          return (
            <>
              <LandingPageSection
                pause={pauseAnimation && openSection !== sectionKey}
                onClick={onOpen}
                {...props}
              />
              <SubSection
                onClick={onClose}
                show={show}
                {...props}
              />
            </>
          );
        })}
      </div>
      <MenuBar />
    </div>
  );
};

export default LandingPage;
