import "./PreviewContentImage.less";
//@ts-ignore
import Fade from "react-reveal/Fade";

interface PreviewContentImageProps {
  previewImageURL: string;
  ref: any;
  loaded: boolean;
  onLoad: () => any;
  className?: string;
  width?: string;
  fadeLeft?: boolean;
  delay?: number;
  duration?: number;
}
const PreviewContentImage: React.FC<PreviewContentImageProps> = ({
  previewImageURL,
  ref,
  onLoad,
  loaded,
  className,
  width,
  fadeLeft,
  delay,
  duration
}) => {
  return (
    <Fade left={fadeLeft} delay={delay ?? 500} duration={duration ?? 1200} when={loaded}>
      <img
        ref={ref}
        className={`preview-content__image " ${className}`}
        onLoad={onLoad}
        src={previewImageURL}
        alt=""
        loading="lazy"
        width={width || "50%"}
        height="100%"
      ></img>
    </Fade>
  );
};

export default PreviewContentImage;
