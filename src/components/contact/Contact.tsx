"use client";
import { useActionState } from "react";
import { SubmitButton } from "../ui/SubmitButton";
import { eventsSubscribeAction } from "@/data/actions";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  errorMessage: null,
  successMessage: null,
  formData: null,
};

interface TextInputProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  error?: string;
  defaultValue?: string;
}

interface TextAreaProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  error?: string;
  defaultValue?: string;
}

function TextArea({
  id,
  label,
  name,
  placeholder,
  error,
  defaultValue,
}: TextAreaProps) {
  return (
    <div className="grid margin-block-end-4">
      <label htmlFor={id}>{label}</label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
}

function TextInput({
  id,
  label,
  name,
  placeholder,
  type = "text",
  error,
  defaultValue,
}: TextInputProps) {
  return (
    <div className="grid margin-block-end-4">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
}

export function Contact({}) {
  const [formState, formAction] = useActionState(
    eventsSubscribeAction,
    INITIAL_STATE
  );

  const zodErrors = formState?.zodErrors;
  const strapiErrors = formState?.strapiErrors?.message;
  const successMessage = formState?.successMessage;

  return (
    <div className="contact-form">
      <form action={formAction}>
        <TextInput
          id="firstName"
          label="First Name"
          name="firstName"
          placeholder="First Name"
          error={zodErrors?.firstName}
          defaultValue={formState?.formData?.firstName ?? ""}
        />
        <TextInput
          id="lastName"
          label="Last Name"
          name="lastName"
          placeholder="Last Name"
          error={zodErrors?.lastName}
          defaultValue={formState?.formData?.lastName ?? ""}
        />
        <TextInput
          id="email"
          label="Email"
          name="email"
          placeholder="Email"
          type="email"
          error={zodErrors?.email}
          defaultValue={formState?.formData?.email ?? ""}
        />
        <TextInput
          id="phone"
          label="Phone"
          name="telephone"
          placeholder="Phone"
          type="text"
          error={zodErrors?.telephone}
          defaultValue={formState?.formData?.telephone ?? ""}
        />
        <TextInput
          id="subject"
          label="Subject"
          name="subject"
          placeholder="Subject"
          type="text"
          error={zodErrors?.subject}
          defaultValue={formState?.formData?.subject ?? ""}
        />
        <TextArea
          id="message"
          label="Message"
          name="message"
          placeholder="Message"
          error={zodErrors?.message}
          defaultValue={formState?.formData?.message ?? ""}
        />
        <SubmitButton text="Send Message" className="btn" />
        {strapiErrors && <p className="signup-form-error">{strapiErrors}</p>}
        {successMessage && (
          <p className="signup-form-success">{successMessage}</p>
        )}
      </form>
    </div>
  );
}
