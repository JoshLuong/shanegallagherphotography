export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const handleResize = (
  setState: React.Dispatch<
    React.SetStateAction<{
      width: number;
      height: number;
    }>
  >
) => {
  function handleResize() {
    setState(getWindowDimensions());
  }

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
};
