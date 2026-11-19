import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";
import { externalLinkProps } from "../data/site";

export default function ProjectCard({ project }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-panel/80 transition duration-300 hover:-translate-y-1 hover:border-accent/35 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        {failed ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_50%_30%,rgba(154,168,255,0.16),transparent_60%)] px-6 text-center">
            <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              Screenshot
            </span>
            <p className="font-display text-2xl font-semibold text-paper">{project.title}</p>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
        {project.label ? (
          <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-ink/80 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] text-paper uppercase backdrop-blur">
            {project.label}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-2xl font-semibold text-paper">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        {project.features?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted"
              >
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-white/[0.05] px-2.5 py-1 text-xs font-semibold text-paper"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          <a href={project.url} {...externalLinkProps} className="btn btn-primary">
            Live Project
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
          {project.github ? (
            <a href={project.github} {...externalLinkProps} className="btn btn-secondary">
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
