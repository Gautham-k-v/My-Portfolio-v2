import { publicAsset } from "../utils/public-asset";

const linkedinUrl = "https://www.linkedin.com/in/gautham-krishna-v-3a1b672a5";

const whatsappText =
  "Hello Gautham, I visited your portfolio and would like to discuss a web development project.";

export const site = {
  name: "Gautham Krishna V",
  mark: "GKV",
  titles: [
    "MERN Stack Developer",
    "Full-Stack Web Developer",
    "Freelance Web Developer",
  ],
  headline: "Building Digital Experiences That Turn Ideas Into Reality.",
  location: "Kerala, India",
  phone: "+91 7907473256",
  phoneHref: "tel:+917907473256",
  email: "gauthamkrishnav35814@gmail.com",
  emailHref: "mailto:gauthamkrishnav35814@gmail.com",
  github: "https://github.com/Gautham-k-v",
  githubLabel: "github.com/Gautham-k-v",
  linkedin: linkedinUrl,
  linkedinLabel: "linkedin.com/in/gautham-krishna-v-3a1b672a5",
  whatsapp: `https://wa.me/917907473256?text=${encodeURIComponent(whatsappText)}`,
  resume: publicAsset("resume.pdf"),
  profile: publicAsset("profile.jpg"),
  tagline: "Building the Web, One Project at a Time.",
};

export const navItems = [
  { id: "home", href: "#home", label: "Home" },
  { id: "about", href: "#about", label: "About" },
  { id: "skills", href: "#skills", label: "Skills" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "services", href: "#services", label: "Services" },
  { id: "contact", href: "#contact", label: "Contact" },
];

export const navSectionIds = navItems.map((item) => item.id);

export function linkedinIsPlaceholder(url = site.linkedin) {
  return url.includes("your-linkedin");
}

export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};
