import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { Button } from "@/components/Button";
import { work } from "@/lib/site-config";

const featuredSlugs = ["mutapa-investment-fund", "vic-falls", "curtains-and-blinds-boulevard"];

export function FeaturedWork() {
  const featured = featuredSlugs
    .map((slug) => work.find((item) => item.slug === slug))
    .filter((item): item is (typeof work)[number] => Boolean(item));

  return (
    <section className="bg-line/30 py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Selected work"
            title="Recent projects."
            description="A handful of the briefs we've shaped from idea to finished work."
          />
          <Button href="/work" variant="outline">
            View all work
          </Button>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
