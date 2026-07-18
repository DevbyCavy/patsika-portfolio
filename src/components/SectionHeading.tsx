export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  const eyebrowColor = tone === "dark" ? "text-accent" : "text-accent";
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const descColor = tone === "dark" ? "text-white/70" : "text-muted";

  return (
    <div className="max-w-2xl">
      <p
        className={`font-heading text-xs font-semibold uppercase tracking-[0.3em] ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display mt-4 text-3xl uppercase leading-tight tracking-tight sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
