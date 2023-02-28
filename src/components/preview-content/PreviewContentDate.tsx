import "./PreviewContent.less";
import "./PreviewContentDate.less";

interface PreviewContentDateProps {
  date: string
  className?: string;
}
const PreviewContentDate: React.FC<PreviewContentDateProps> = ({
    date,
    className
}) => {

  return (
        <div className={`preview-content__subsection-date ${className}`}>
          <span className="preview-content__rotate">{date}</span>
        </div>
  );
};

export default PreviewContentDate;
