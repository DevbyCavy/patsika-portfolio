import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

const base =
  "font-heading inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200";

const variants = {
  solid: "bg-accent text-accent-ink hover:bg-ink",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  ghost: "border border-white/30 text-white hover:border-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
