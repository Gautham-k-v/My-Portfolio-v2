const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidReference(value) {
  const trimmed = value.trim();
  if (!trimmed) return true;
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(withProtocol);
    return (url.protocol === "http:" || url.protocol === "https:") && url.hostname.includes(".");
  } catch {
    return false;
  }
}

export function validateEnquiry(values) {
  const errors = {};
  const name = values.fullName.trim();
  const email = values.email.trim();
  const phoneDigits = values.phone.replace(/\D/g, "");
  const description = values.description.trim();
  const additional = values.additional.trim();

  if (name.length < 2) errors.fullName = "Enter your full name.";
  else if (name.length > 80) errors.fullName = "Name must be 80 characters or fewer.";

  if (!emailPattern.test(email)) errors.email = "Enter a valid email address.";
  else if (email.length > 120) errors.email = "Email must be 120 characters or fewer.";

  if (/[a-z]/i.test(values.phone) || phoneDigits.length < 10 || phoneDigits.length > 15) {
    errors.phone = "Enter a valid phone number with 10 to 15 digits.";
  }

  if (values.company.trim().length > 120) {
    errors.company = "Company name must be 120 characters or fewer.";
  }

  if (!values.projectType) errors.projectType = "Select a project type.";
  if (description.length < 20) {
    errors.description = "Describe the project in at least 20 characters.";
  } else if (description.length > 4000) {
    errors.description = "Keep the description under 4000 characters.";
  }

  if (!values.budget) errors.budget = "Select an estimated budget.";
  if (!values.timeline) errors.timeline = "Select an expected timeline.";

  if (!isValidReference(values.reference)) {
    errors.reference = "Enter a valid website URL, or leave this blank.";
  } else if (values.reference.trim().length > 200) {
    errors.reference = "Reference URL must be 200 characters or fewer.";
  }

  if (additional.length > 4000) {
    errors.additional = "Keep additional requirements under 4000 characters.";
  }

  return errors;
}
