"use client";

import { subscribeAction } from "@/data/actions";
import { SubscribeLayout } from "@/types";
import { useActionState } from "react";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  errorMessage: null,
  successMessage: null,
};

function Subscribe({
  heading,
  paragraph,
  placeholder,
  buttonText,
}: SubscribeLayout) {
  const [formState, formAction] = useActionState(
    subscribeAction,
    INITIAL_STATE
  );

  const zodErrors = formState?.zodErrors?.email;
  const strapiErrors = formState?.strapiErrors?.message;
  const errorMessage = strapiErrors || zodErrors || formState?.errorMessage;
  const successMessage = formState?.successMessage;

  return (
    <section className="content-grid margin-block-start-11">
      <div className="subscribe-section full-width bg-primary-400 text-neutral-50 padding-11">
        <div className="grid grid-columns-2">
          <div className="flow">
            <h2 className="secondary-heading text-neutral-50">{heading}</h2>
            <p>{paragraph}</p>
          </div>
          <form action={formAction}>
            <input
              name="email"
              type="text"
              placeholder={errorMessage || successMessage || placeholder}
              className={`${errorMessage ? "newsletter-email-error" : ""}`}
            />
            <button type="submit">{buttonText}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
