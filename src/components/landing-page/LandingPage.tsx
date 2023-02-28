import LandingPageSection from "./LandingPageSection";
import "./LandingPage.less";
import SubSection, { ThemeType } from "./SubSection";
import { ReactNode, useState } from "react";
import { useQuery } from "@apollo/client";
import { SUBSECTION_QUERY } from "../gql/LandingPageQuery";
import MenuBar from "../menu/MenuBar";
import { Subsection } from "../../__generated__/graphql";

export const NO_SECTION_OPEN = -1;

const LandingPage = () => {
  const [openSection, setOpenSection] = useState<number>(NO_SECTION_OPEN);
  const [fastAnimation, setFastAnimation] = useState<boolean>(false);
  const { loading, data } = useQuery(SUBSECTION_QUERY as any);

  if (loading || !data) {
    return <div>Loading</div>;
  }
  return (
    <div className="landing-page__container">
      <div className="landing-page__container-sections">
        {data &&
          data.subsectionCollection.items.map(
            (value: Subsection, index: number): ReactNode => {
              if (!value) return null;
              const { title, previewContent, width, colourScheme } = value;
              const show = openSection === index;

              const onOpen = () => {
                if (show) {
                  onClose();
                  return;
                }
                setOpenSection(index);
                setTimeout(() => {
                  setFastAnimation(true);
                }, 150);
                setTimeout(() => {
                  setFastAnimation(false);
                }, 800);
              };
              const onClose = () => {
                setOpenSection(NO_SECTION_OPEN);
              };

              const props = {
                backgroundColor: colourScheme?.primary || "",
                titleColor: colourScheme?.secondary || "",
                title: title || "",
              };
              return (
                <>
                  <LandingPageSection
                    openSection={openSection}
                    onClick={onOpen}
                    fastAnimation={fastAnimation}
                    containerWidth={width || undefined}
                    {...props}
                    index={index}
                  />
                  <SubSection
                    onClick={onClose}
                    show={show}
                    subsectionContent={previewContent}
                    colourScheme={colourScheme}
                    // TODO: make contentful
                    theme={previewContent?.contentType?.type as ThemeType}
                  />
                </>
              );
            }
          )}
      </div>
      <MenuBar />
    </div>
  );
};

export default LandingPage;
