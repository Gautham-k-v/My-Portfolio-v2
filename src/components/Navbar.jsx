import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, navSectionIds, site } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const active = useActiveSection(navSectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };

    const previousBody = document.body.style.overflow;
    const previousHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousBody;
      document.documentElement.style.overflow = previousHtml;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="shell flex h-[4.25rem] items-center justify-between gap-3">
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight text-paper"
          aria-label="Gautham Krishna V, home"
          onClick={closeMenu}
        >
          {site.mark}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden xl:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const current = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={current ? "true" : undefined}
                    className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                      current ? "text-paper" : "text-muted hover:text-paper"
                    }`}
                  >
                    {item.label}
                    {current ? (
                      <span className="absolute right-3 bottom-1 left-3 h-px bg-accent" />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#enquiry" className="btn btn-primary hidden min-[380px]:inline-flex">
            Hire Me
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-white/10 text-paper xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <MobileMenu open={open} onNavigate={closeMenu} />
    </header>
  );
}
