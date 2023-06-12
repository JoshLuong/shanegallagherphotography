import { useEffect, useState } from "react";

const useIsSafari = () => {

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
       setIsSafari( /^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);
  
    return [isSafari]
  
  }
  
  export default useIsSafari 