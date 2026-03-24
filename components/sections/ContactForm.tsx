"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const serviceOptions = [
  "AI Consulting",
  "CRO Agent",
  "Media Mix Model",
  "Attribution & Testing",
  "Vibe Coding Courses",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Backend integration will be wired up later
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-[var(--border)] bg-bg-card p-8 text-center" role="status">
        <p className="text-body text-accent-cyan font-medium mb-2">
          Thanks for reaching out!
        </p>
        <p className="text-body text-text-secondary">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-body font-medium text-text-primary mb-2"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-[var(--border)] bg-bg-card px-4 py-3 text-body text-text-primary placeholder:text-text-secondary/50 min-h-[48px] transition-colors focus:border-accent-cyan"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-body font-medium text-text-primary mb-2"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-[var(--border)] bg-bg-card px-4 py-3 text-body text-text-primary placeholder:text-text-secondary/50 min-h-[48px] transition-colors focus:border-accent-cyan"
          placeholder="you@company.com"
        />
      </div>

      {/* Company (optional) */}
      <div>
        <label
          htmlFor="contact-company"
          className="block text-body font-medium text-text-primary mb-2"
        >
          Company{" "}
          <span className="text-text-secondary font-normal">(optional)</span>
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          className="w-full rounded-lg border border-[var(--border)] bg-bg-card px-4 py-3 text-body text-text-primary placeholder:text-text-secondary/50 min-h-[48px] transition-colors focus:border-accent-cyan"
          placeholder="Your company"
        />
      </div>

      {/* Service interest */}
      <div>
        <label
          htmlFor="contact-service"
          className="block text-body font-medium text-text-primary mb-2"
        >
          Service Interest
        </label>
        <select
          id="contact-service"
          name="service"
          required
          className="w-full rounded-lg border border-[var(--border)] bg-bg-card px-4 py-3 text-body text-text-primary min-h-[48px] transition-colors focus:border-accent-cyan appearance-none"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-body font-medium text-text-primary mb-2"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-[var(--border)] bg-bg-card px-4 py-3 text-body text-text-primary placeholder:text-text-secondary/50 min-h-[120px] transition-colors focus:border-accent-cyan resize-y"
          placeholder="Tell us about your project or question..."
        />
      </div>

      <Button type="submit" variant="primary" size="lg" fullWidth>
        Send Message
      </Button>
    </form>
  );
}
