import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/site-config";

export function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Six disciplines, one studio."
          description="From the first mark to the final cut — we cover the full range of what a growing brand needs, under one roof."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group flex flex-col justify-between gap-8 bg-paper p-8 transition-colors hover:bg-ink"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-xs text-muted group-hover:text-white/40">
                  {service.number}
                </span>
                <span className="font-heading text-xs font-semibold uppercase tracking-wide text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  View →
                </span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-ink group-hover:text-white">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted group-hover:text-white/60">
                  {service.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
