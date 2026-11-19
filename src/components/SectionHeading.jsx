export default function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        {index} <span className="text-faint">/</span> {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 font-display text-[clamp(2rem,4.4vw,3.45rem)] leading-[1.05] font-bold tracking-tight text-paper"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
