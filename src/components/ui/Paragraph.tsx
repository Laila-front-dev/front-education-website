import { ParagraphProps } from "@/types";
import ReactMarkdown from "react-markdown";

function Paragraph({ content }: ParagraphProps) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default Paragraph;
