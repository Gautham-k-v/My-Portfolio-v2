import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { externalLinkProps, navItems, site } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <a href="#home" className="font-display text-2xl font-bold tracking-tight text-paper">
              {site.mark}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-3 text-lg font-semibold text-paper">{site.name}</p>
            <p className="mt-1 text-sm text-muted">MERN Stack Developer | Freelance Web Developer</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">“{site.tagline}”</p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navItems
                .filter((item) => ["about", "projects", "services", "contact"].includes(item.id))
                .map((item) => (
                  <li key={item.id}>
                    <a href={item.href} className="text-sm text-muted transition-colors hover:text-paper">
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-faint uppercase">Connect</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.github}
                  {...externalLinkProps}
                  className="inline-flex items-center gap-2 text-muted hover:text-paper"
                >
                  <GitHubIcon className="size-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  {...externalLinkProps}
                  className="inline-flex items-center gap-2 text-muted hover:text-paper"
                >
                  <LinkedInIcon className="size-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="inline-flex items-center gap-2 break-all text-muted hover:text-paper">
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="inline-flex items-center gap-2 text-muted hover:text-paper">
                  <Phone className="size-4" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
