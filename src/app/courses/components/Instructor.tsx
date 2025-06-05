import { InstructorProps } from "@/types";
import ReactMarkdown from "react-markdown";

function Instructor({ instructor }: InstructorProps) {
  return (
    <div>
      <ReactMarkdown>{instructor}</ReactMarkdown>
    </div>
  );
}

export default Instructor;
