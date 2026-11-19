import { useState } from "react";
import { MapPin } from "lucide-react";
import { site } from "../data/site";

export default function ProfilePortrait({ priority = false }) {
  const [ready, setReady] = useState(false);

  return (
    <figure className="relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-none">
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_28%,rgba(154,168,255,0.2),transparent_58%)] px-6 text-center">
          <span className="font-display text-6xl font-bold tracking-tight text-paper sm:text-7xl">
            GKV
          </span>
          <span className="mt-3 text-[0.68rem] font-semibold tracking-[0.22em] text-muted uppercase">
            MERN Stack Developer
          </span>
        </div>
        <img
          src={site.profile}
          alt="Portrait of Gautham Krishna V"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setReady(true)}
          onError={() => setReady(false)}
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      <figcaption className="absolute right-4 bottom-4 left-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-ink/75 px-4 py-3 text-sm text-paper backdrop-blur-md">
        <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
        {site.location}
      </figcaption>
    </figure>
  );
}
