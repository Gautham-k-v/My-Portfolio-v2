import { motion, useReducedMotion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import ProfilePortrait from "./ProfilePortrait";
import { externalLinkProps, site } from "../data/site";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 right-[-8%] h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-32 left-[-12%] h-72 w-72 rounded-full bg-violet/10 blur-3xl" />
      </div>

      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-16">
        <motion.div
          className="@container min-w-0"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p
            variants={reduce ? undefined : fade}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.16em] text-accent uppercase"
          >
            <span className="pulse-dot size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Available for freelance projects
          </motion.p>

          <motion.h1
            variants={reduce ? undefined : fade}
            custom={0.05}
            className="mt-6 max-w-full font-display text-[clamp(1.6rem,9.2cqi,4.25rem)] leading-[0.92] font-extrabold tracking-[-0.05em] text-paper uppercase"
          >
            <span className="block whitespace-nowrap">Gautham</span>
            <span className="block whitespace-nowrap">Krishna V</span>
          </motion.h1>

          <motion.ul
            variants={reduce ? undefined : fade}
            custom={0.1}
            className="mt-6 space-y-1.5 border-l border-accent/50 pl-4"
          >
            {site.titles.map((title) => (
              <li
                key={title}
                className="text-[0.72rem] font-semibold tracking-[0.16em] text-muted uppercase sm:text-xs"
              >
                {title}
              </li>
            ))}
          </motion.ul>

          <motion.blockquote variants={reduce ? undefined : fade} custom={0.16} className="mt-7 max-w-xl">
            <p className="font-display text-[clamp(1.3rem,2.5vw,2rem)] leading-snug font-semibold text-paper">
              “{site.headline}”
            </p>
          </motion.blockquote>

          <motion.p
            variants={reduce ? undefined : fade}
            custom={0.22}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted"
          >
            I’m a web developer from Kerala, India, passionate about building modern, responsive
            and functional websites and web applications. I enjoy transforming ideas into digital
            experiences using modern frontend and backend technologies.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : fade}
            custom={0.28}
            className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap"
          >
            <a href="#projects" className="btn btn-primary w-full min-[480px]:w-auto">
              Explore My Work
            </a>
            <a href="#enquiry" className="btn btn-secondary w-full min-[480px]:w-auto">
              Hire Me
            </a>
            <a href={site.resume} download className="btn btn-secondary w-full min-[480px]:w-auto">
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>

          <motion.ul
            variants={reduce ? undefined : fade}
            custom={0.34}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted"
          >
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              {site.location}
            </li>
            <li>
              <a
                href={site.github}
                {...externalLinkProps}
                className="inline-flex items-center gap-2 transition-colors hover:text-paper"
              >
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                {...externalLinkProps}
                className="inline-flex items-center gap-2 transition-colors hover:text-paper"
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-paper"
              >
                <Mail className="size-4 text-accent" aria-hidden="true" />
                Email
              </a>
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProfilePortrait priority />
        </motion.div>
      </div>
    </section>
  );
}
