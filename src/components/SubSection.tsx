import { useState, useEffect } from "react";
import "./SubSection.less";
import LeftArrow from '../left-arrow.svg';

interface SubSectionProps {
    show: boolean;
    backgroundColor: string;
    backgroundColor2: string;
}
const SubSection: React.FC<SubSectionProps> = ({show, backgroundColor, backgroundColor2}) => {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        console.log(getWindowDimensions())
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mobileView = windowDimensions.width <= 800;
    const size = show ? "65%" : "0";
    const background = `linear-gradient(${mobileView ? '' : 'to right,'}${backgroundColor}, ${backgroundColor2})`;

    const styles = mobileView ? {
        height: size
    } : {
        width: size
    }
    return (
      <div className="subsection__container" style={{backgroundImage: background, ...styles }}>
        <div className="subsection__inner-container" style={{display: show ? "block" : "none"}}>
            <div className="subsection__close-button">
                <img src={LeftArrow} alt="Close" />
            </div>
        </div>
      </div>
    );
  };
  
  export default SubSection;