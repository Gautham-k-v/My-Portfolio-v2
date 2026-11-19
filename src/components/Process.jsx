import { processSteps } from "../data/process";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="section bg-raised/70" aria-labelledby="process-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="process-heading"
            index="05"
            eyebrow="Process"
            title="My Development Process"
            description="A clear path from the first conversation to a website that is tested, live, and supported."
          />
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div
            className="absolute top-2 bottom-2 left-[1.35rem] w-px bg-white/10 lg:left-1/2"
            aria-hidden="true"
          />
          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <Reveal key={step.number} delay={index * 0.04}>
                <article
                  className={
                    isLeft
                      ? "relative pb-10 pl-16 lg:w-1/2 lg:pr-14 lg:pb-12 lg:pl-0"
                      : "relative pb-10 pl-16 lg:ml-[50%] lg:w-1/2 lg:pb-12 lg:pl-14"
                  }
                >
                  <span
                    className={
                      isLeft
                        ? "absolute top-0 left-0 grid size-11 place-items-center rounded-full border border-accent/40 bg-ink font-display text-sm font-bold text-paper lg:left-auto lg:right-0 lg:translate-x-1/2"
                        : "absolute top-0 left-0 grid size-11 place-items-center rounded-full border border-accent/40 bg-ink font-display text-sm font-bold text-paper lg:-translate-x-1/2"
                    }
                  >
                    {step.number}
                  </span>
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
                    Step {step.number}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-paper">{step.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{step.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
