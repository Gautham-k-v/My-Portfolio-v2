import { writeFileSync } from "node:fs";

function esc(value) {
  return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

const lines = [];
let y = 800;

function text(value, { size = 11, font = "F1", x = 48, gap = 16, color = "0.12 0.13 0.16" } = {}) {
  lines.push(`${color} rg BT /${font} ${size} Tf ${x} ${y} Td (${esc(value)}) Tj ET`);
  y -= gap;
}

function rule() {
  y -= 4;
  lines.push("0.75 0.77 0.82 RG 0.6 w 48 " + y + " m 547 " + y + " l S");
  y -= 18;
}

function heading(value) {
  y -= 6;
  text(value, { size: 11, font: "F2", gap: 16, color: "0.18 0.22 0.45" });
}

text("MERN STACK DEVELOPER  |  FREELANCE WEB DEVELOPER", {
  size: 9,
  font: "F2",
  gap: 22,
  color: "0.28 0.34 0.62",
});
text("Gautham Krishna V", { size: 24, font: "F2", gap: 18, color: "0.07 0.08 0.12" });
text("Full-Stack Web Developer", { size: 11, gap: 16 });
text("Kerala, India   |   +91 7907473256   |   gauthamkrishnav35814@gmail.com", { size: 10, gap: 14 });
text("https://github.com/Gautham-k-v", { size: 10, gap: 14 });
text("https://www.linkedin.com/in/gautham-krishna-v-3a1b672a5", { size: 10, gap: 12 });
rule();

heading("PROFILE");
text("Freelance web developer from Kerala, India. I build modern, responsive websites", { size: 10.5, gap: 14 });
text("and web applications, with a focus on full-stack development using the MERN stack.", { size: 10.5, gap: 16 });

heading("TECHNICAL SKILLS");
text("Frontend: HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS", { size: 10.5, gap: 14 });
text("Backend: Node.js, Express.js, MongoDB, REST APIs", { size: 10.5, gap: 14 });
text("Tools: Git, GitHub, VS Code, Postman, Hoppscotch, Axios, Figma, Cursor AI", { size: 10.5, gap: 14 });
text("Deployment: Vercel, GitHub Pages", { size: 10.5, gap: 16 });

heading("FEATURED PROJECTS");
const projects = [
  ["Restaurant Website", "A modern restaurant website with an attractive, responsive layout.", "https://restaurant-landing-flax.vercel.app/"],
  ["Gym Website", "A fitness website for services, training programs, and membership information.", "https://gym-landingpge.vercel.app/"],
  ["Real Estate Website", "A property website designed for browsing listings.", "https://real-estate-rust-nu.vercel.app/"],
  ["SAAJ Finance - Frontend Prototype", "A loan and daily collection management concept: customers, loans,", ""],
];

for (const [title, summary, url] of projects) {
  text(title, { size: 11, font: "F2", gap: 13 });
  text(summary, { size: 10.5, gap: url ? 13 : 13 });
  if (!url) {
    text("collections, payments, receipts, ledgers, agents, and reports.", { size: 10.5, gap: 13 });
    text("https://gautham-k-v.github.io/SAAJ-Financial-/", { size: 10, gap: 15, color: "0.2 0.25 0.5" });
  } else {
    text(url, { size: 10, gap: 15, color: "0.2 0.25 0.5" });
  }
}

heading("FREELANCE SERVICES");
text("Business websites, landing pages, restaurant websites, gym and fitness websites,", { size: 10.5, gap: 14 });
text("real estate websites, website redesign, and custom web applications.", { size: 10.5, gap: 18 });

text("This profile lists skills, projects, and services. It does not include employment history.", {
  size: 9,
  gap: 12,
  color: "0.4 0.43 0.48",
});

const stream = lines.join("\n");
const objects = [];

function add(body) {
  objects.push(body);
  return objects.length;
}

add("<< /Type /Catalog /Pages 2 0 R >>");
add("<< /Type /Pages /Count 1 /Kids [3 0 R] >>");
add("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 6 0 R /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> >>");
add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
add(`<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`);

let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((body, index) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
});
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
offsets.slice(1).forEach((offset) => {
  pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
});
pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;

writeFileSync(new URL("../public/resume.pdf", import.meta.url), pdf);
console.log("wrote resume.pdf", y);
