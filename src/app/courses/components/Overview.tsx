import { OverviewProps } from "@/types";
import ReactMarkdown from "react-markdown";

function Overview({ overview }: OverviewProps) {
  return (
    <div>
      <ReactMarkdown>{overview}</ReactMarkdown>
    </div>
  );
}

export default Overview;
