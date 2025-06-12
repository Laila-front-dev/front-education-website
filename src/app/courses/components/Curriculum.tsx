import { CurriculumProps } from "@/types";
import ReactMarkdown from "react-markdown";

function Curriculum({ curriculum }: CurriculumProps): React.JSX.Element {
  return (
    <div>
      <ReactMarkdown>{curriculum}</ReactMarkdown>
    </div>
  );
}

export default Curriculum;
