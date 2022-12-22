import LandingPageSection from "./LandingPageSection";
import "./LandingPage.less";
import MenuBar from "./MenuBar";
import SubSection from "./SubSection";
import { ReactNode, useState } from "react";
import sectionsMap from "./sections";

const NO_SECTION_OPEN = 0;

const LandingPage = () => {
  const [openSection, setOpenSection] = useState<number>(NO_SECTION_OPEN);

  return (
    <div className="landing-page__container">
      <div className="landing-page__container-sections">
        {Array.from(sectionsMap.entries()).map((value): ReactNode => {
          const {
            title,
            primaryColor,
            secondaryColor,
            width,
            subSectionContent,
          } = value[1];
          const sectionKey = value[0];
          const show = openSection === sectionKey;

          const onOpen = () => {
            setOpenSection(sectionKey);
          };
          const onClose = () => {
            setOpenSection(NO_SECTION_OPEN);
          };

          const props = {
            backgroundColor: primaryColor,
            titleColor: secondaryColor,
            title: title,
          };
          return (
            <>
              <LandingPageSection
                openSection={openSection}
                sectionKey={sectionKey}
                onClick={onOpen}
                width={width}
                {...props}
              />
              <SubSection
                onClick={onClose}
                show={show}
                {...props}
                subSectionContent={subSectionContent}
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
