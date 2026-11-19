import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section bg-raised/70" aria-labelledby="projects-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            index="03"
            eyebrow="Projects"
            title="Things I’ve Built."
            description="A selection of live websites and a frontend prototype. Every card opens the real project."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
