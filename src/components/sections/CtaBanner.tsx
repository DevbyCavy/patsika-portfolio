import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <Image
        src="/brand/patsika-icon.png"
        alt=""
        aria-hidden
        width={1075}
        height={1345}
        className="pointer-events-none absolute -left-16 -top-16 h-[120%] w-auto opacity-[0.06]"
      />
      <Container className="relative text-center">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Let&apos;s work together
        </p>
        <h2 className="font-display mx-auto mt-6 max-w-3xl text-4xl uppercase leading-[1.05] tracking-tight sm:text-6xl">
          Got a brand worth building?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
          Tell us where you&apos;re starting from and where you want to go.
          We&apos;ll take it from there.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="solid">
            Start a project
          </Button>
          <Button href={`mailto:${site.email}`} variant="ghost">
            {site.email}
          </Button>
        </div>
      </Container>
    </section>
  );
}
