import { Blocks, Building, Check, LayoutTemplate, RefreshCw } from "lucide-react";

const icons = {
  building: Building,
  landing: LayoutTemplate,
  redesign: RefreshCw,
  custom: Blocks,
};

export default function ServiceCard({ service, onEnquire }) {
  const Icon = icons[service.icon] ?? Blocks;

  return (
    <article className="flex h-full flex-col rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 sm:p-6 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-ink text-accent">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-2xl leading-tight font-semibold text-paper">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
      <ul className="mt-5 space-y-2.5">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-2.5 text-sm leading-relaxed text-muted">
            <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-secondary mt-6 w-full"
        onClick={() => onEnquire(service.projectType)}
      >
        Enquire Now
      </button>
    </article>
  );
}
