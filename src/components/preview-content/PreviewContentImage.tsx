import "./PreviewContentImage.less";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import Fade from "react-reveal/Fade";

interface PreviewContentImageProps {
  previewImageURL: string;
  ref: any;
  loaded: boolean;
  onLoad: () => any;
}
const PreviewContentImage: React.FC<PreviewContentImageProps> = ({
  previewImageURL,
  ref,
  onLoad,
  loaded,
}) => {
  return (
    <Fade delay={500} duration={1200} when={loaded}>
      <img
        ref={ref}
        className="preview-content__image"
        onLoad={onLoad}
        src={previewImageURL}
        alt=""
        loading="lazy"
        width="50%"
        height="100%"
      ></img>
    </Fade>
  );
};

export default PreviewContentImage;
