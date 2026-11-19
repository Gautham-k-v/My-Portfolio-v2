import { CodeXml, Handshake, Layers, Server } from "lucide-react";
import ProfilePortrait from "./ProfilePortrait";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const interests = [
  {
    title: "Frontend development",
    description: "Interfaces, layout, and interaction built with modern web technologies.",
    icon: CodeXml,
  },
  {
    title: "Backend development",
    description: "APIs, data, and server logic with Node.js, Express, and MongoDB.",
    icon: Server,
  },
  {
    title: "Web application development",
    description: "Functional products that do more than a static page.",
    icon: Layers,
  },
  {
    title: "Freelance development",
    description: "Websites and applications shaped around a client’s goals.",
    icon: Handshake,
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-raised/70" aria-labelledby="about-heading">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <ProfilePortrait />
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={0.08}>
            <SectionHeading id="about-heading" index="01" eyebrow="About" title="More Than Just Code." />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>I’m Gautham Krishna V, a freelance web developer from Kerala, India.</p>
              <p>
                I’m passionate about developing modern websites and web applications that combine
                beautiful interfaces with practical functionality.
              </p>
              <p>
                My primary focus is full-stack web development using the MERN stack. I enjoy working
                on real-world projects, exploring new technologies and continuously improving my
                development skills.
              </p>
              <p>My goal is to create digital solutions that help businesses and individuals grow online.</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Reveal key={interest.title} delay={index * 0.05} className="h-full">
                <article className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="grid size-11 place-items-center rounded-2xl border border-white/10 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-paper">{interest.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{interest.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
