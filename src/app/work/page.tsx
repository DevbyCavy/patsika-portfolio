import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { WorkCard } from "@/components/WorkCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { work } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Work — Patsika Media House",
  description:
    "Selected branding, 3D, motion, product design, graphic design, and video projects from Patsika Media House.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Projects across every discipline."
        description="A selection of the briefs we've taken from idea to finished work, across branding, 3D, motion, product, print, and video."
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((item) => (
              <div key={item.slug} id={item.slug} className="scroll-mt-28">
                <WorkCard item={item} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
