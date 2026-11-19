import emailjs from "@emailjs/browser";
import { site } from "../data/site";
import {
  buildClientHtml,
  buildClientText,
  buildOwnerHtml,
  buildOwnerText,
  clientSubject,
  ownerSubject,
} from "../email/messages";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const enquiryTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;

export function isEmailConfigured() {
  return Boolean(serviceId && publicKey && enquiryTemplateId && autoReplyTemplateId);
}

function enquiryParams(values) {
  return {
    to_email: site.email,
    to_name: site.name,
    from_name: values.fullName,
    from_email: values.email,
    reply_to: values.email,
    phone: values.phone,
    company: values.company || "Not provided",
    project_type: values.projectType,
    project_description: values.description.trim(),
    budget: values.budget,
    timeline: values.timeline,
    reference_website: values.reference || "Not provided",
    additional_requirements: values.additional.trim() || "None",
    subject: ownerSubject(values),
    message: buildOwnerText(values),
    message_html: buildOwnerHtml(values),
  };
}

function autoReplyParams(values) {
  return {
    to_email: values.email,
    to_name: values.fullName,
    from_name: site.name,
    client_name: values.fullName,
    project_type: values.projectType,
    reply_to: site.email,
    subject: clientSubject(values),
    message: buildClientText(values),
    message_html: buildClientHtml(values),
  };
}

export async function sendProjectEnquiry(values) {
  if (!isEmailConfigured()) {
    const error = new Error(
      "Email delivery is not configured yet. Add the EmailJS variables from .env.example, then restart the app.",
    );
    error.code = "NOT_CONFIGURED";
    throw error;
  }

  const options = { publicKey };

  await emailjs.send(serviceId, enquiryTemplateId, enquiryParams(values), options);

  let acknowledgementSent = true;
  try {
    await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams(values), options);
  } catch {
    acknowledgementSent = false;
  }

  return { acknowledgementSent };
}

export function getEnquiryErrorMessage(error) {
  if (error?.code === "NOT_CONFIGURED") return error.message;
  const detail = typeof error?.text === "string" ? error.text : "";
  if (detail && detail.length < 180) {
    return `The enquiry could not be sent. ${detail}`;
  }
  return "The enquiry could not be sent. Please try again, or email me directly.";
}
