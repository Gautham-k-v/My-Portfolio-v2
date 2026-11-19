import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TechIcon from "./TechIcon";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            index="02"
            eyebrow="Skills"
            title="Technical Skills"
            description="The technologies I use to design, build, and ship websites and web applications."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.05} className="h-full">
              <article className="h-full rounded-[1.6rem] border border-white/10 bg-panel/80 p-5 sm:p-6">
                <h3 className="font-display text-2xl font-semibold text-paper">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{group.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3 transition duration-200 hover:border-accent/40 hover:bg-white/[0.05] motion-reduce:transition-none">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-accent">
                          <TechIcon name={skill.icon} />
                        </span>
                        <span className="text-sm font-semibold text-paper">{skill.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
