import { services } from "@/lib/site-config";

export function Marquee() {
  const items = [...services, ...services];

  return (
    <div className="overflow-hidden border-y border-line bg-paper py-5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {items.map((service, i) => (
          <span
            key={`${service.slug}-${i}`}
            className="font-heading flex items-center gap-10 text-sm font-semibold uppercase tracking-wide text-ink/70"
          >
            {service.name}
            <span className="text-accent" aria-hidden>
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
