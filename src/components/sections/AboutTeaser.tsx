import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

const stats = [
  { value: "6", label: "Disciplines under one roof" },
  { value: "Remote", label: "Worldwide, from day one" },
  { value: "100%", label: "Founder-led projects" },
];

export function AboutTeaser() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionHeading
          eyebrow="About Patsika"
          title="A young studio, built to move fast."
          description="Patsika Media House started as a small collective of designers, animators, and editors who wanted to work across the full spectrum of brand-building not just one slice of it. We partner closely with founders and teams who need a studio that can carry an idea from a name on a page to a finished film."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line p-6"
            >
              <p className="font-display text-3xl text-ink">{stat.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {stat.label}
              </p>
            </div>
          ))}
          <div className="col-span-full">
            <Button href="/about" variant="outline">
              More about us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
