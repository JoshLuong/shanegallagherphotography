import styles from "../../styles/MenuBarContent.module.less";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid2 version 2
import { Fade } from "react-awesome-reveal";

const MenuBarContent = () => {
  const getChildLinks = (subSectionContent: any) => {
    return subSectionContent.map((child: any, index: number) => {
      const comma = index < subSectionContent.length - 1 ? ", " : "";
      return (
        <span className={styles.menuBarContent__childLinks} key={index}>
          {child.title}
          {comma}
        </span>
      );
    });
  };

  return (
    <Grid2
      xs={12}
      container
      height="100%"
      className={styles.menuBarContent__container}
    >
      <Grid2 xs={10} display="flex" flexDirection="column" alignItems="start">
        <Fade duration={900} delay={700}>
          {/*
            Array.from(sectionsMap.values()).map(({title, subSectionContent, secondaryColor}) => {
              const hasSubsectionContent = subSectionContent && subSectionContent.length > 0;
                return <div className="menuBarContent__links">
                    <span style={{opacity: hasSubsectionContent ? "70%" : "100%", color: secondaryColor}}>{title}&nbsp;</span>
                    {
                      subSectionContent && getChildLinks(subSectionContent)
                    }
                </div>
            })
            */}
        </Fade>
      </Grid2>

      <Grid2
        xs={2}
        display="flex"
        flexDirection="column"
        alignItems="start"
        margin={"auto"}
        className={styles.menuBarContent__about}
      >
        <Fade duration={900} delay={700}>
          About
        </Fade>
      </Grid2>
    </Grid2>
  );
};

export default MenuBarContent;
