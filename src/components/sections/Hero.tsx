import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src="/brand/patsika-icon.png"
        alt=""
        aria-hidden
        width={1075}
        height={1345}
        className="pointer-events-none absolute -right-24 top-1/2 h-[140%] w-auto -translate-y-1/2 opacity-[0.06] sm:-right-10"
      />

      <Container className="relative py-24 sm:py-32">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {site.fullName} — {site.location}
        </p>

        <h1 className="font-display mt-6 max-w-4xl text-5xl uppercase leading-[1.05] tracking-tight sm:text-7xl">
          We build brands that move.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
          A design agency working across branding, 3D, motion, product
          design, graphic design, and video — for founders building
          something worth noticing.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/work" variant="solid">
            View our work
          </Button>
          <Button href="/services" variant="ghost">
            Our services
          </Button>
        </div>
      </Container>
    </section>
  );
}
