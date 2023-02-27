import { Grid } from "@mui/material";
import { Maybe } from "graphql/jsutils/Maybe";
import { SubsectionPreview, Colour } from "../../__generated__/graphql";
//@ts-ignore
import FloatingImage from "./FloatingImage";
import "./SummaryContent.less";

interface SummaryContentProps {
  subSectionContent: Maybe<SubsectionPreview> | undefined;
  colourScheme:  Colour;
}
const SummaryContent: React.FC<SummaryContentProps> = ({
  subSectionContent,
  colourScheme
}) => {
  if (!subSectionContent) {
    return null;
  }
  const {tertiary} = colourScheme;

  const renderContent = (count: number) => {
    switch (count) {
      case 1:
        return (
          <Grid container className="summary-content__subsection-images">
            <FloatingImage subsectionContent={subSectionContent} />
            <div className="summary-content__subsection-date summary-content__subsection-date-right">May 2020</div>
            <div className="summary-content__subsection-text-container">
              <p className="summary-content__subsection-title summary-content__subsection-title-right" style={{color: tertiary || ""}}>{subSectionContent?.title}</p>
              <div className="summary-content__subsection-desc">{subSectionContent?.previewDescription}</div>
            </div>
          </Grid>
        );
      case 2:
        return (
          <Grid container className="summary-content__subsection-images">
            <div className="summary-content__subsection-date summary-content__subsection-date-left">May 2020</div>
            <div className="summary-content__subsection-text-container">
              <p className="summary-content__subsection-title summary-content__subsection-title-left">{subSectionContent?.title}</p>
              <div className="summary-content__subsection-desc">{subSectionContent?.previewDescription}</div>
            </div>
            <FloatingImage subsectionContent={subSectionContent} />
          </Grid>
        );
      default:
        return null;
    }
  };
  return renderContent(1);
};

export default SummaryContent;
