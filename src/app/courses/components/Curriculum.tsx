import { CurriculumProps } from "@/types";
import ReactMarkdown from "react-markdown";

function Curriculum({ curriculum }: CurriculumProps) {
  return (
    <div>
      <ReactMarkdown>{curriculum}</ReactMarkdown>
    </div>
  );
}

export default Curriculum;
