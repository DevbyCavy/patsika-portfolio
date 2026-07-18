import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services — Patsika Media House",
  description:
    "Branding, 3D modeling, motion graphics, UI/UX & product design, graphic design, and video editing — under one studio.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything a brand needs to be seen."
        description="Six disciplines, run by one studio, so your brand stays consistent from the first sketch to the final export."
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {services.map((service) => (
              <div
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-28 gap-8 py-14 lg:grid-cols-[auto_1fr_1fr] lg:items-start lg:gap-16"
              >
                <span className="font-display text-2xl text-accent">
                  {service.number}
                </span>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                    {service.name}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>

                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="font-heading flex items-center gap-3 text-sm font-semibold text-ink"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button href="/contact" variant="solid">
              Start a project
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
