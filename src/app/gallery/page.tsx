import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { galleryCategories } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gallery — Patsika Media House",
  description:
    "The full Patsika Media House gallery 3D modeling, design & branding, graphic design, and video editing, organised by discipline.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="The full collection, by discipline."
        description="Every piece we're able to show, organised into the disciplines behind it."
      />

      {galleryCategories.map((category, i) => (
        <section
          key={category.slug}
          id={category.slug}
          className={`scroll-mt-28 py-20 sm:py-24 ${i % 2 === 1 ? "bg-line/30" : ""}`}
        >
          <Container>
            <div className="mb-10 max-w-2xl">
              <h2 className="font-display text-3xl uppercase leading-tight tracking-tight text-ink sm:text-4xl">
                {category.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {category.description}
              </p>
            </div>
            <GalleryGrid images={category.images} />
          </Container>
        </section>
      ))}

      <CtaBanner />
    </>
  );
}
