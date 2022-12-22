import Grid2 from "@mui/material/Unstable_Grid2"; // Grid2 version 2
//@ts-ignore
import FloatingImage from "./FloatingImage";
// @ts-ignore
import { SubSectionContent } from "./sections";

interface SummaryContentProps {
  subSectionContent: SubSectionContent[];
}
const SummaryContent: React.FC<SummaryContentProps> = ({ subSectionContent }) => {
  const renderContent = (count: number) => {
    switch (count) {
      case 2:
        return (
          <Grid2 container>
            <Grid2 xs={12} md={6} padding="0.5em" margin="auto">
              {
                <FloatingImage
                  src={subSectionContent[0].href}
                  description={subSectionContent[0].description}
                />
              }
            </Grid2>
            <Grid2 xs={12} md={6} padding="0.5em">
              {
                <FloatingImage
                  hover
                  src={subSectionContent[1].href}
                  description={subSectionContent[1].description}
                />
              }
            </Grid2>
          </Grid2>
        );
      default:
        return null;
    }
  };
  return renderContent(subSectionContent.length)
};

export default SummaryContent;
