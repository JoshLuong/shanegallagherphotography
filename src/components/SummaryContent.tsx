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
      case 1:
        return (
          <Grid2 container>
            <Grid2 xs={12} md={6} padding="0.5em" margin="auto">
              {
                <FloatingImage
                  subsectionContent={subSectionContent[0]}
                />
              }
            </Grid2>
          </Grid2>
        );
      case 2:
        return (
          <Grid2 container>
            <Grid2 xs={12} md={6} padding="0.5em" margin="auto">
              {
                <FloatingImage
                  subsectionContent={subSectionContent[0]}
                />
              }
            </Grid2>
            <Grid2 xs={12} md={6} padding="0.5em">
              {
                <FloatingImage
                  hover
                  subsectionContent={subSectionContent[1]}
                />
              }
            </Grid2>
          </Grid2>
        );
        case 3:
        return (
          <Grid2 container>
            <Grid2 xs={12} md={6} padding="0.5em" margin="auto">
              {
                <FloatingImage
                  subsectionContent={subSectionContent[0]}
                />
              }
            </Grid2>
            <Grid2 xs={12} md={6} padding="0.5em">
              {
                <FloatingImage
                  hover
                  subsectionContent={subSectionContent[1]}
                />
              }
            </Grid2>
            <Grid2 xs={12} md={12} padding="0.5em">
              {
                <FloatingImage
                  hover
                  subsectionContent={subSectionContent[2]}
                />
              }
            </Grid2>
          </Grid2>
        );
        case 4:
        return (
          <Grid2 container>
            <Grid2 xs={12} md={6} padding="0.5em" margin="auto">
              {
                <FloatingImage
                  subsectionContent={subSectionContent[0]}
                />
              }
            </Grid2>
            <Grid2 xs={12} md={6} padding="0.5em">
              {
                <FloatingImage
                  hover
                  subsectionContent={subSectionContent[1]}
                />
              }
            </Grid2>
            <Grid2 xs={12} md={6} padding="0.5em">
              {
                <FloatingImage
                  hover
                  subsectionContent={subSectionContent[2]}
                />
              }
            </Grid2>
            <Grid2 xs={12} md={6} padding="0.5em">
              {
                <FloatingImage
                  hover
                  subsectionContent={subSectionContent[3]}
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
