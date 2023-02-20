import Grid2 from "@mui/material/Unstable_Grid2"; // Grid2 version 2
import { Maybe } from "graphql/jsutils/Maybe";
import { SubsectionPreviewsCollection } from "../__generated__/graphql";
//@ts-ignore
import FloatingImage from "./FloatingImage";
// @ts-ignore
import { SubSectionContent } from "./sections";

interface SummaryContentProps {
  subSectionContent: Maybe<SubsectionPreviewsCollection> | undefined;
}
const SummaryContent: React.FC<SummaryContentProps> = ({
  subSectionContent,
}) => {
  if (!subSectionContent || !subSectionContent.items) {
    return null;
  }
  const renderContent = (count: number) => {
    switch (count) {
      case 1:
        return (
          <Grid2 container>
            <Grid2 xs={12} md={6} padding="0.5em" margin="auto">
              {<FloatingImage subsectionContent={subSectionContent.items[0]} />}
            </Grid2>
          </Grid2>
        );
      case 2:
        return (
          <Grid2 container>
            <Grid2 xs={12} md={6} padding="0.5em" margin="auto">
              {<FloatingImage subsectionContent={subSectionContent.items[0]} />}
            </Grid2>
            <Grid2 xs={12} md={6} padding="0.5em">
              {<FloatingImage subsectionContent={subSectionContent.items[1]} />}
            </Grid2>
          </Grid2>
        );
      default:
        return null;
    }
  };
  return renderContent(subSectionContent.items.length);
};

export default SummaryContent;
