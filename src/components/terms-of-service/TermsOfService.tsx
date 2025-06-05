import { TermsOfServiceLayout } from "@/types";
import ReactMarkdown from "react-markdown";

function TermsOfService({ text }: TermsOfServiceLayout) {
  return (
    <section className="content-grid padding-block-start-11">
      <div className="legal-page ">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </section>
  );
}

export default TermsOfService;
