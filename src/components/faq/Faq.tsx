"use client";

import { FaqLayout } from "@/types";
import { useState } from "react";

function Faq({ questions }: FaqLayout) {
  const [openFaq, setOpenFaq] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleToggle = (id: any) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section className="content-grid padding-block-start-11">
      <ul role="list" className="faq-list">
        {questions.map((faq) => (
          <li
            key={faq.id}
            className={`faq-item ${openFaq === faq.id ? "open" : ""}`}
          >
            <h3 className="faq-question">
              <button
                onClick={() => handleToggle(faq.id)}
                aria-expanded={openFaq === faq.id}
                className="faq-toggle"
              >
                {faq.question}
                <span className="faq-icon">
                  {openFaq === faq.id ? "-" : "+"}
                </span>
              </button>
            </h3>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Faq;
