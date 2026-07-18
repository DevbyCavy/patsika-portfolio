import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site-config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 py-4">
      <Container>
        <div className="flex items-center justify-between rounded-full bg-ink px-5 py-3 text-white shadow-lg shadow-black/10">
          <Logo variant="icon" className="h-8" />

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="font-heading rounded-full bg-accent px-5 py-2 text-sm font-semibold uppercase tracking-wide text-accent-ink transition-colors hover:bg-white hover:text-ink"
          >
            Start a project
          </Link>
        </div>
      </Container>
    </header>
  );
}
