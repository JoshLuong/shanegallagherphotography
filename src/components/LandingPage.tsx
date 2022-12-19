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
            // get rid of this check if we want to open immediately
            if (openSection !== NO_SECTION_OPEN && openSection !== sectionKey) {
              onClose();
            } else {
              setOpenSection(sectionKey);
              setPauseAnimation(true);
            }
          };
          const onClose = () => {
            setOpenSection(NO_SECTION_OPEN);
            setPauseAnimation(false);
          };
          return (
            <>
              <LandingPageSection
                text={title}
                backgroundColor={primaryColor}
                textColor={secondaryColor}
                pause={pauseAnimation && openSection !== sectionKey}
                onClick={onOpen}
              />
              <SubSection
                onClick={onClose}
                show={show}
                backgroundColor={primaryColor}
                backgroundColor2={secondaryColor}
                title={title}
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
