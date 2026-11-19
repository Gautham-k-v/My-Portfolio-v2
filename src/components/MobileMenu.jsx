import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navItems } from "../data/site";

export default function MobileMenu({ open, onNavigate }) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          className="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto bg-ink/96 backdrop-blur-xl xl:hidden"
          initial={reduce ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav className="shell flex min-h-full flex-col py-6" aria-label="Mobile">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="block border-b border-white/10 py-4 font-display text-[clamp(1.8rem,6vw,2.4rem)] font-semibold tracking-tight text-paper"
                    onClick={onNavigate}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#enquiry" className="btn btn-primary mt-8 w-full" onClick={onNavigate}>
              Hire Me
            </a>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
