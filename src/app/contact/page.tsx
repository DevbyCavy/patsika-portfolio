import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact — Patsika Media House",
  description: "Start a project with Patsika Media House.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a project."
        description="Tell us a little about what you're building. We usually reply within one business day."
      />

      <section className="py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-heading text-lg font-bold text-ink">
              Reach us directly
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-muted">
              <li>
                <span className="font-heading block text-xs font-semibold uppercase tracking-wide text-muted">
                  Email
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <span className="font-heading block text-xs font-semibold uppercase tracking-wide text-muted">
                  Location
                </span>
                {site.location}
              </li>
              <li>
                <span className="font-heading block text-xs font-semibold uppercase tracking-wide text-muted">
                  Elsewhere
                </span>
                <div className="mt-1 flex gap-4">
                  {site.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink hover:text-accent"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
