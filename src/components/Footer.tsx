import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo variant="lockup" className="h-24" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
          </div>

          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-white/40">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-heading text-sm font-semibold text-white/80 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-heading text-sm font-semibold text-white/80 hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-sm text-white/50">{site.location}</li>
              <li className="flex gap-4 pt-2">
                {site.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-xs font-semibold uppercase tracking-wide text-white/60 hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p>Designed &amp; built for founders who want to be noticed.</p>
        </div>
      </Container>
    </footer>
  );
}
