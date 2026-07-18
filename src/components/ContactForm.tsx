"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site-config";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const project = String(data.get("project") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(
      `New project inquiry from ${name || "the website"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  const inputClasses =
    "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="font-heading text-xs font-semibold uppercase tracking-wide text-muted"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={`${inputClasses} mt-2`}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-heading text-xs font-semibold uppercase tracking-wide text-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`${inputClasses} mt-2`}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="project"
          className="font-heading text-xs font-semibold uppercase tracking-wide text-muted"
        >
          Project type
        </label>
        <input
          id="project"
          name="project"
          type="text"
          className={`${inputClasses} mt-2`}
          placeholder="e.g. Brand identity, product design, launch video"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-heading text-xs font-semibold uppercase tracking-wide text-muted"
        >
          Tell us about it
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClasses} mt-2 resize-none`}
          placeholder="What are you building, and what do you need from us?"
        />
      </div>

      <button
        type="submit"
        className="font-heading inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent"
      >
        Send message
      </button>

      {status === "sent" && (
        <p className="text-sm text-muted">
          Opening your email client — if nothing happened, write to us
          directly at{" "}
          <a href={`mailto:${site.email}`} className="text-accent underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
