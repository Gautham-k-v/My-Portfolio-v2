import { Download, ExternalLink } from "lucide-react";
import { externalLinkProps, site } from "../data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Resume() {
  return (
    <section id="resume" className="section bg-raised/70" aria-labelledby="resume-heading">
      <div className="shell">
        <Reveal>
          <div className="rounded-[1.75rem] border border-white/10 bg-panel px-6 py-12 sm:px-12">
            <SectionHeading
              id="resume-heading"
              index="07"
              eyebrow="Resume"
              title="Want to Know More About My Journey?"
              description="Explore my resume to learn more about my technical skills, projects and development journey."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.resume} download className="btn btn-primary w-full sm:w-auto">
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
              <a
                href={site.resume}
                {...externalLinkProps}
                className="btn btn-secondary w-full sm:w-auto"
              >
                View Resume
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
