import LandingPageSection from "./LandingPageSection";
import "./LandingPage.less";
import MenuBar from "./menu/MenuBar";
import SubSection from "./SubSection";
import { ReactNode, useState } from "react";
import { useQuery } from '@apollo/client';
import { SUBSECTION_QUERY } from "./gql/LandingPageQuery";

export const NO_SECTION_OPEN = -1;

const LandingPage = () => {
  const [openSection, setOpenSection] = useState<number>(NO_SECTION_OPEN);
  const { loading, data } = useQuery(
    SUBSECTION_QUERY as any
  );

  if (loading || !data) {
    return <div>Loading</div>
  }
  return (
    <div className="landing-page__container">
      <div className="landing-page__container-sections">
        {data && data.subsectionCollection.items.map((value: any, index: number): ReactNode => {
          if (!value) return null;
          const {
            title,
            previewsCollection,
            width,
            primaryColor,
            secondaryColor
          } = value;
          const show = openSection === index;

          const onOpen = () => {
            setOpenSection(index);
          };
          const onClose = () => {
            setOpenSection(NO_SECTION_OPEN);
          };

          const props = {
            backgroundColor: primaryColor || "",
            titleColor: secondaryColor || "",
            title: title || "",
          };
          return (
            <>
              <LandingPageSection
                openSection={openSection}
                onClick={onOpen}
                containerWidth={width || ""}
                {...props}
                index={index}
              />
              <SubSection
                onClick={onClose}
                show={show}
                {...props}
                subSectionContent={previewsCollection}
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
