import { Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./BrandIcons";
import { externalLinkProps, linkedinIsPlaceholder, site } from "../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const actions = [
  { href: site.emailHref, label: "Email Me", icon: Mail, external: false },
  { href: site.phoneHref, label: "Call Me", icon: Phone, external: false },
  { href: site.whatsapp, label: "WhatsApp", icon: WhatsAppIcon, external: true },
  { href: site.linkedin, label: "LinkedIn", icon: LinkedInIcon, external: true },
  { href: site.github, label: "GitHub", icon: GitHubIcon, external: true },
];

export default function Contact() {
  const linkedinText = linkedinIsPlaceholder()
    ? "PLACEHOLDER – UPDATE WITH MY LINKEDIN URL"
    : site.linkedinLabel;

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            index="08"
            eyebrow="Contact"
            title="Let’s Connect and Create Something Great."
          />
          <p className="mt-6 font-display text-2xl font-semibold text-paper sm:text-3xl">{site.name}</p>
          <p className="mt-2 text-muted">MERN Stack Developer | Freelance Web Developer</p>
        </Reveal>

        <Reveal delay={0.06}>
          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <dt className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">Phone</dt>
              <dd className="mt-2">
                <a href={site.phoneHref} className="text-lg font-semibold text-paper hover:text-accent">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <dt className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">Email</dt>
              <dd className="mt-2 break-all">
                <a href={site.emailHref} className="text-lg font-semibold text-paper hover:text-accent">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <dt className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">Location</dt>
              <dd className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-paper">
                <MapPin className="size-4 text-accent" aria-hidden="true" />
                {site.location}
              </dd>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <dt className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">GitHub</dt>
              <dd className="mt-2 break-all">
                <a
                  href={site.github}
                  {...externalLinkProps}
                  className="text-lg font-semibold text-paper hover:text-accent"
                >
                  {site.githubLabel}
                </a>
              </dd>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:col-span-2">
              <dt className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">LinkedIn</dt>
              <dd className="mt-2 break-all">
                <a
                  href={site.linkedin}
                  {...externalLinkProps}
                  className="text-lg font-semibold text-paper hover:text-accent"
                >
                  {linkedinText}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
            {actions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.label}
                  href={action.href}
                  {...(action.external ? externalLinkProps : {})}
                  className="btn btn-secondary w-full min-[480px]:w-auto"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {action.label}
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
