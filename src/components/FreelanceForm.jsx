import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { useEnquiry } from "../context/enquiry-context";
import {
  budgetOptions,
  emptyEnquiry,
  enquiryFieldOrder,
  projectTypeOptions,
  timelineOptions,
} from "../data/enquiry";
import { site } from "../data/site";
import { getEnquiryErrorMessage, isEmailConfigured, sendProjectEnquiry } from "../utils/email";
import { validateEnquiry } from "../utils/validation";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Field({ id, label, required = false, error, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-paper">
        {label}
        {required ? (
          <span className="text-accent"> *</span>
        ) : (
          <span className="font-medium text-faint"> (optional)</span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function describedBy(id, error) {
  return error ? `${id}-error` : undefined;
}

export default function FreelanceForm() {
  const { projectType, token } = useEnquiry();
  const [values, setValues] = useState(emptyEnquiry);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [acknowledgementSent, setAcknowledgementSent] = useState(true);
  const submittingRef = useRef(false);
  const successRef = useRef(null);
  const configured = isEmailConfigured();

  useEffect(() => {
    if (!token || !projectType) return;
    setValues((current) => ({ ...current, projectType }));
    setErrors((current) => {
      if (!current.projectType) return current;
      const next = { ...current };
      delete next.projectType;
      return next;
    });
    setStatus((current) => (current === "success" ? "idle" : current));
  }, [projectType, token]);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function update(name, value) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (submittingRef.current) return;

    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);
    const firstInvalid = enquiryFieldOrder.find((name) => nextErrors[name]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    submittingRef.current = true;
    setStatus("submitting");
    setErrorMessage("");

    try {
      const result = await sendProjectEnquiry(values);
      setAcknowledgementSent(result.acknowledgementSent);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(getEnquiryErrorMessage(error));
    } finally {
      submittingRef.current = false;
    }
  }

  function sendAnother() {
    setValues(emptyEnquiry);
    setErrors({});
    setStatus("idle");
    setErrorMessage("");
  }

  return (
    <section id="enquiry" className="section" aria-labelledby="enquiry-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="enquiry-heading"
            index="06"
            eyebrow="Enquiry"
            align="center"
            title="Have a Project in Mind?"
            description="Let’s turn your ideas into something extraordinary."
          />
        </Reveal>

        <Reveal>
          {status === "success" ? (
            <div
              className="mx-auto mt-10 max-w-3xl rounded-[1.75rem] border border-white/10 bg-panel px-6 py-10 text-center sm:px-10"
              role="status"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Enquiry sent</p>
              <h3
                ref={successRef}
                tabIndex={-1}
                className="mt-3 font-display text-3xl font-semibold text-paper outline-none"
              >
                Thank you, {values.fullName.trim()}.
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                Your {values.projectType} enquiry is with me. I will review the details and respond
                soon.
                {acknowledgementSent
                  ? ` A confirmation email is on its way to ${values.email.trim()}.`
                  : ` I could not send the confirmation email, but your enquiry was delivered. I will reply to ${values.email.trim()}.`}
              </p>
              <button type="button" className="btn btn-secondary mt-8" onClick={sendAnother}>
                Send another enquiry
              </button>
            </div>
          ) : (
            <form
              className="mx-auto mt-10 max-w-4xl rounded-[1.75rem] border border-white/10 bg-panel/80 p-5 sm:p-8 lg:p-10"
              noValidate
              onSubmit={onSubmit}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="fullName" label="Full Name" required error={errors.fullName}>
                  <input
                    id="fullName"
                    name="fullName"
                    className="field"
                    value={values.fullName}
                    onChange={(event) => update("fullName", event.target.value)}
                    autoComplete="name"
                    maxLength={80}
                    aria-required="true"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={describedBy("fullName", errors.fullName)}
                  />
                </Field>
                <Field id="email" label="Email Address" required error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="field"
                    value={values.email}
                    onChange={(event) => update("email", event.target.value)}
                    autoComplete="email"
                    inputMode="email"
                    maxLength={120}
                    spellCheck="false"
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={describedBy("email", errors.email)}
                  />
                </Field>
                <Field id="phone" label="Phone Number" required error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="field"
                    value={values.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={20}
                    aria-required="true"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={describedBy("phone", errors.phone)}
                  />
                </Field>
                <Field id="company" label="Company / Business Name" error={errors.company}>
                  <input
                    id="company"
                    name="company"
                    className="field"
                    value={values.company}
                    onChange={(event) => update("company", event.target.value)}
                    autoComplete="organization"
                    maxLength={120}
                    aria-invalid={Boolean(errors.company)}
                    aria-describedby={describedBy("company", errors.company)}
                  />
                </Field>
                <Field id="projectType" label="Project Type" required error={errors.projectType}>
                  <select
                    id="projectType"
                    name="projectType"
                    className="field field-select"
                    value={values.projectType}
                    onChange={(event) => update("projectType", event.target.value)}
                    aria-required="true"
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={describedBy("projectType", errors.projectType)}
                  >
                    <option value="">Select a project type</option>
                    {projectTypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="budget" label="Estimated Budget" required error={errors.budget}>
                  <select
                    id="budget"
                    name="budget"
                    className="field field-select"
                    value={values.budget}
                    onChange={(event) => update("budget", event.target.value)}
                    aria-required="true"
                    aria-invalid={Boolean(errors.budget)}
                    aria-describedby={describedBy("budget", errors.budget)}
                  >
                    <option value="">Select a budget</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="timeline" label="Expected Timeline" required error={errors.timeline}>
                  <select
                    id="timeline"
                    name="timeline"
                    className="field field-select"
                    value={values.timeline}
                    onChange={(event) => update("timeline", event.target.value)}
                    aria-required="true"
                    aria-invalid={Boolean(errors.timeline)}
                    aria-describedby={describedBy("timeline", errors.timeline)}
                  >
                    <option value="">Select a timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="reference" label="Reference Website" error={errors.reference}>
                  <input
                    id="reference"
                    name="reference"
                    type="url"
                    className="field"
                    placeholder="https://"
                    value={values.reference}
                    onChange={(event) => update("reference", event.target.value)}
                    inputMode="url"
                    autoComplete="url"
                    maxLength={200}
                    spellCheck="false"
                    aria-invalid={Boolean(errors.reference)}
                    aria-describedby={describedBy("reference", errors.reference)}
                  />
                </Field>
                <Field
                  id="description"
                  label="Project Description"
                  required
                  error={errors.description}
                  className="md:col-span-2"
                >
                  <textarea
                    id="description"
                    name="description"
                    className="field"
                    value={values.description}
                    onChange={(event) => update("description", event.target.value)}
                    maxLength={4000}
                    aria-required="true"
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={describedBy("description", errors.description)}
                  />
                </Field>
                <Field
                  id="additional"
                  label="Additional Requirements"
                  error={errors.additional}
                  className="md:col-span-2"
                >
                  <textarea
                    id="additional"
                    name="additional"
                    className="field"
                    value={values.additional}
                    onChange={(event) => update("additional", event.target.value)}
                    maxLength={4000}
                    aria-invalid={Boolean(errors.additional)}
                    aria-describedby={describedBy("additional", errors.additional)}
                  />
                </Field>
              </div>

              {status === "error" ? (
                <p
                  role="alert"
                  className="mt-5 rounded-2xl border border-rose-300/30 bg-rose-400/10 px-4 py-3 text-sm leading-relaxed text-rose-100"
                >
                  {errorMessage}{" "}
                  <a className="font-semibold underline" href={site.emailHref}>
                    Email me directly
                  </a>
                  .
                </p>
              ) : null}

              {!configured ? (
                <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-muted">
                  This form sends your enquiry once EmailJS is configured. Until then, email{" "}
                  <a className="font-semibold text-paper underline" href={site.emailHref}>
                    {site.email}
                  </a>
                  .
                </p>
              ) : null}

              <button
                type="submit"
                className="btn btn-primary mt-6 w-full sm:w-auto"
                disabled={status === "submitting"}
              >
                <Send className="size-4" aria-hidden="true" />
                {status === "submitting" ? "Sending…" : "Send Project Enquiry"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
