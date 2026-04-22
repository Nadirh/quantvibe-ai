"use client";

import { useState, useRef, type FormEvent } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Card } from "@/components/ui/Card";
import { BookCover } from "@/components/ui/BookCover";
import { Badge } from "@/components/ui/Badge";
import { gtmEvent } from "@/lib/gtm";

export function GuideDownloadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!turnstileToken) {
      setErrorMessage("Please complete the verification check.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      turnstileToken,
    };

    try {
      const res = await fetch("/api/guide-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Failed to send guide.");
      }
      gtmEvent({
        event: "guide_download",
        guide_name: "when-not-to-build-an-mmm",
        form_location: typeof window !== "undefined" ? window.location.pathname : undefined,
      });
      setStatus("sent");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Failed to send guide.");
      setStatus("error");
    }
  };

  return (
    <Card>
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0">
          <BookCover width={60} height={86} />
        </div>
        <div>
          <Badge variant="violet" className="mb-2">Free Guide</Badge>
          <h2 className="font-heading text-[18px] leading-tight">
            When NOT to Build a Media Mix Model
          </h2>
        </div>
      </div>
      <p className="text-body text-text-secondary mb-4">
        Seven scenarios where an MMM will mislead you, and what to do instead.
      </p>

      {status === "sent" ? (
        <div role="status" className="text-body">
          <p className="text-accent-cyan font-semibold mb-2">
            ✓ Check your inbox!
          </p>
          <p className="text-text-secondary">
            The guide is on its way. If you don&apos;t see it in a few
            minutes, please check your spam folder.
          </p>
        </div>
      ) : status === "error" ? (
        <div role="alert">
          <p className="text-body text-warning mb-3">
            {errorMessage || "Something went wrong. Please try again."}
          </p>
          <button
            onClick={() => { setStatus("idle"); setTurnstileToken(""); turnstileRef.current?.reset(); }}
            className="text-body text-accent-cyan font-semibold hover:text-text-primary focus:text-text-primary transition-colors min-h-[48px]"
          >
            Try again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="guide-name" className="block text-body text-text-secondary mb-1">
              Full Name
            </label>
            <input
              id="guide-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-[var(--border)] bg-bg-primary px-4 py-2 text-body text-text-primary placeholder:text-text-secondary/50 transition-colors focus:border-accent-cyan min-h-[48px]"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="guide-email" className="block text-body text-text-secondary mb-1">
              Work Email
            </label>
            <input
              id="guide-email"
              name="email"
              type="email"
              required
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="Please enter a valid email address (e.g. name@example.com)"
              autoComplete="email"
              className="w-full rounded-lg border border-[var(--border)] bg-bg-primary px-4 py-2 text-body text-text-primary placeholder:text-text-secondary/50 transition-colors focus:border-accent-cyan min-h-[48px]"
              placeholder="Your work email"
            />
          </div>

          <Turnstile
            ref={turnstileRef}
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onSuccess={setTurnstileToken}
            onError={() => setTurnstileToken("")}
            onExpire={() => setTurnstileToken("")}
            options={{ theme: "dark", size: "flexible" }}
          />

          <button
            type="submit"
            disabled={status === "sending" || !turnstileToken}
            className="w-full rounded-lg bg-accent-violet text-bg-primary font-semibold px-6 py-3 text-body transition-all hover:brightness-110 focus:brightness-110 min-h-[48px] disabled:opacity-60"
          >
            {status === "sending" ? "Sending\u2026" : "Send Me the Guide"}
          </button>

          <p className="text-[16px] text-text-secondary/70 text-center mt-1">
            Your information is never shared.
          </p>
        </form>
      )}
    </Card>
  );
}
