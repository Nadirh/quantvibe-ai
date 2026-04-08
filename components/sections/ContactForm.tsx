"use client";

import { useState, type FormEvent } from "react";
import { Card } from "@/components/ui/Card";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Card>
      <h2 className="font-heading mb-4">Contact Us</h2>

      {status === "sent" ? (
        <p className="text-body text-accent-cyan" role="status">
          Thanks! We&apos;ll be in touch within 24 hours.
        </p>
      ) : status === "error" ? (
        <div role="alert">
          <p className="text-body text-warning mb-3">
            Something went wrong. Please try again.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-body text-accent-cyan font-semibold hover:text-text-primary focus:text-text-primary transition-colors min-h-[48px]"
          >
            Try again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="contact-name" className="block text-body text-text-secondary mb-1">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-[var(--border)] bg-bg-primary px-4 py-2 text-body text-text-primary placeholder:text-text-secondary/50 transition-colors focus:border-accent-cyan min-h-[48px]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-body text-text-secondary mb-1">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-[var(--border)] bg-bg-primary px-4 py-2 text-body text-text-primary placeholder:text-text-secondary/50 transition-colors focus:border-accent-cyan min-h-[48px]"
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-body text-text-secondary mb-1">
              Phone <span className="text-text-secondary/50">(optional)</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="w-full rounded-lg border border-[var(--border)] bg-bg-primary px-4 py-2 text-body text-text-primary placeholder:text-text-secondary/50 transition-colors focus:border-accent-cyan min-h-[48px]"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-body text-text-secondary mb-1">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={3}
              className="w-full rounded-lg border border-[var(--border)] bg-bg-primary px-4 py-2 text-body text-text-primary placeholder:text-text-secondary/50 transition-colors focus:border-accent-cyan resize-y"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-accent-cyan text-bg-primary font-semibold px-6 py-3 text-body transition-all hover:brightness-110 focus:brightness-110 min-h-[48px] disabled:opacity-60"
          >
            {status === "sending" ? "Sending\u2026" : "Send Message"}
          </button>
        </form>
      )}
    </Card>
  );
}
