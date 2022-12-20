import "./MenuBar.less";
import Instagram from "../svg/instagram.svg";
import { FC, useEffect, useReducer, useState } from "react";

interface SectionTitleProps {
    repeats: number;
    title: string;
    fontSize: string;
}
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment 👆🏻 the previous state like here 
    // is better than directly setting `value + 1`
}

const SectionTitle: FC<SectionTitleProps>= ({repeats, title, fontSize}: any) => {

    return (
        <>
        {Array(repeats)
            .fill(0)
            .map((_, index) => (
              <span
              >
                {fontSize}&nbsp;
              </span>
            ))}
            </>
    );
  };
  
  export default SectionTitle;