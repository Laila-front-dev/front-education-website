import { InstructorProps } from "@/types";
import ReactMarkdown from "react-markdown";

function Instructor({ instructor }: InstructorProps): React.JSX.Element {
  return (
    <div>
      <ReactMarkdown>{instructor}</ReactMarkdown>
    </div>
  );
}

export default Instructor;
