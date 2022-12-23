import "./MenuBarContent.less";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid2 version 2
import sectionsMap, { SubSectionContent } from "../sections";
//@ts-ignore
import Fade from "react-reveal/Fade";


const MenuBarContent = () => {

  const getChildLinks = (subSectionContent: SubSectionContent[]) => {
    return subSectionContent.map((child, index) => {
      const comma = index < subSectionContent.length -1 ? ", " : ""
      return (
        <span className="menu-bar-content__child-links">{child.title}{comma}</span>
      )
    })
  }

  return (
    <Grid2 xs={12} container height="100%" className="menu-bar-content__container"> 
    <Grid2
      xs={10}
      display="flex"
      flexDirection="column"
      alignItems="start"
      
    >
       <Fade duration={900} delay={700} >
        {
            Array.from(sectionsMap.values()).map(({title, subSectionContent, secondaryColor}) => {
              const hasSubsectionContent = subSectionContent && subSectionContent.length > 0;
                return <div className="menu-bar-content__links">
                    <span style={{opacity: hasSubsectionContent ? "70%" : "100%", color: secondaryColor}}>{title}&nbsp;</span>
                    {
                      subSectionContent && getChildLinks(subSectionContent)
                    }
                </div>
            })
        }
      </Fade>
    </Grid2>

    <Grid2
      xs={2}
      display="flex"
      flexDirection="column"
      alignItems="start"
      margin={"auto"}
      className="menu-bar-content__about"
    >
    <Fade duration={900} delay={700} >

        About
    </Fade>

      
    </Grid2>
  </Grid2>
  );
};

export default MenuBarContent;
