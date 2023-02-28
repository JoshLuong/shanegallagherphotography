import { useState, useRef, useEffect } from "react";

export const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>();

  const onLoad: any = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return [ref, loaded, onLoad];
};
