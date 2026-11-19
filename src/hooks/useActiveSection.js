import { useEffect, useState } from "react";

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return undefined;

    const visibility = new Map(ids.map((id) => [id, 0]));

    const choose = () => {
      const atTop = window.scrollY < 80;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }
      if (atTop) {
        setActive(ids[0]);
        return;
      }

      const next = [...visibility.entries()].sort((a, b) => b[1] - a[1])[0];
      if (next && next[1] > 0) setActive(next[0]);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        choose();
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((element) => observer.observe(element));
    window.addEventListener("scroll", choose, { passive: true });
    choose();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", choose);
    };
  }, [ids]);

  return active;
}
