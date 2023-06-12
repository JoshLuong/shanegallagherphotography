import { useState, useEffect } from "react";

const MOBILE_DIMENSION = 800;
const useWindowDimensions = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [isMobile, setIsMobile] = useState(false);
  
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      setIsMobile(window.innerWidth <= MOBILE_DIMENSION);
    }
  
    useEffect(() => {
      // component is mounted and window is available
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      setIsMobile(window.innerWidth <= MOBILE_DIMENSION);
      // unsubscribe from the event on component unmount
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
  
    return {width, height, isMobile}
  
  }
  
  export default useWindowDimensions 