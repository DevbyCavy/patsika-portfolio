import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About — Patsika Media House",
  description:
    "Patsika Media House is a design agency working across branding, 3D, motion, product design, graphic design, and video.",
};

const values = [
  {
    title: "Range, without dilution",
    body: "Six disciplines under one roof means fewer handoffs, and a brand that looks and feels the same whether it's on a screen or in print.",
  },
  {
    title: "Built for founders",
    body: "We work best with teams who are close to the decision so ideas move fast, and the work stays sharp.",
  },
  {
    title: "Craft over templates",
    body: "Every project starts from the brief, not a preset. We'd rather do six projects well than sixty projects the same way.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Patsika"
        title="A studio built to carry an idea all the way through."
        description="We started Patsika Media House because good brands kept getting split across too many vendors. We wanted one studio that could hold the whole picture."
      />

      <section className="py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Our story"
            title="From one discipline to six."
            description="Patsika began as a small design and motion practice, and grew into a full studio as clients kept asking for the next piece of the puzzle a 3D render, a product interface, a launch video. Rather than hand that work off, we built the team to do it ourselves. Today Patsika Media House covers branding, 3D modeling, motion graphics, UI/UX and product design, graphic design, and video editing, for clients working across markets and time zones."
          />

          <div className="space-y-10">
            {values.map((value) => (
              <div key={value.title} className="border-l-2 border-accent pl-6">
                <h3 className="font-heading text-lg font-bold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
