import { site } from "../data/site";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function row(label, value) {
  return `<tr>
    <td style="padding:7px 16px 7px 0;color:#5c6570;vertical-align:top;white-space:nowrap">${label}</td>
    <td style="padding:7px 0;color:#161616">${escapeHtml(value || "Not provided")}</td>
  </tr>`;
}

export function ownerSubject(values) {
  return `New project enquiry: ${values.projectType} — ${values.fullName}`;
}

export function clientSubject(values) {
  return `Your ${values.projectType} enquiry has been received`;
}

export function buildOwnerHtml(values) {
  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#161616;font-size:15px;line-height:1.55;max-width:640px">
    <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#5c6570">Portfolio enquiry</p>
    <h1 style="margin:0 0 12px;font-size:22px;line-height:1.3">New project enquiry</h1>
    <p style="margin:0 0 18px">${escapeHtml(values.fullName)} sent a ${escapeHtml(values.projectType)} enquiry.</p>
    <table style="border-collapse:collapse;width:100%;margin:0 0 18px">
      ${row("Name", values.fullName)}
      ${row("Email", values.email)}
      ${row("Phone", values.phone)}
      ${row("Company", values.company)}
      ${row("Project type", values.projectType)}
      ${row("Budget", values.budget)}
      ${row("Timeline", values.timeline)}
      ${row("Reference", values.reference)}
    </table>
    <h2 style="margin:0 0 8px;font-size:16px">Project description</h2>
    <p style="margin:0 0 18px;white-space:pre-wrap">${escapeHtml(values.description.trim())}</p>
    <h2 style="margin:0 0 8px;font-size:16px">Additional requirements</h2>
    <p style="margin:0;white-space:pre-wrap">${escapeHtml(values.additional.trim() || "None")}</p>
  </div>`;
}

export function buildClientHtml(values) {
  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#161616;font-size:15px;line-height:1.6;max-width:560px">
    <p style="margin:0 0 14px">Hi ${escapeHtml(values.fullName)},</p>
    <p style="margin:0 0 14px">Thank you for contacting me about your <strong>${escapeHtml(values.projectType)}</strong> project.</p>
    <p style="margin:0 0 14px">Your enquiry has been received. I will review the project details and respond after looking through your requirements, timeline, and budget.</p>
    <p style="margin:0 0 14px">If you would like to add anything, reply to this email.</p>
    <p style="margin:28px 0 0">
      Gautham Krishna V<br />
      MERN Stack Developer | Freelance Web Developer<br />
      Kerala, India<br />
      +91 7907473256<br />
      <a href="mailto:${site.email}" style="color:#24306e">${site.email}</a>
    </p>
  </div>`;
}

export function buildOwnerText(values) {
  return [
    `New project enquiry from ${values.fullName}`,
    "",
    `Name: ${values.fullName}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Company / Business: ${values.company || "Not provided"}`,
    `Project type: ${values.projectType}`,
    `Estimated budget: ${values.budget}`,
    `Expected timeline: ${values.timeline}`,
    `Reference website: ${values.reference || "Not provided"}`,
    "",
    "Project description:",
    values.description.trim(),
    "",
    "Additional requirements:",
    values.additional.trim() || "None",
  ].join("\n");
}

export function buildClientText(values) {
  return [
    `Hi ${values.fullName},`,
    "",
    `Thank you for contacting me about your ${values.projectType} project.`,
    "",
    "Your enquiry has been received. I will review the project details and respond after looking through your requirements, timeline, and budget.",
    "",
    "If you would like to add anything, reply to this email.",
    "",
    "Gautham Krishna V",
    "MERN Stack Developer | Freelance Web Developer",
    "Kerala, India",
    "+91 7907473256",
    site.email,
  ].join("\n");
}
