import Image from "next/image";
import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src="/brand/patsika-icon.png"
        alt=""
        aria-hidden
        width={1075}
        height={1345}
        className="pointer-events-none absolute -right-24 top-1/2 h-[130%] w-auto -translate-y-1/2 opacity-[0.06] sm:-right-10"
      />
      <Container className="relative py-20 sm:py-28">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
        <h1 className="font-display mt-6 max-w-3xl text-4xl uppercase leading-[1.05] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
