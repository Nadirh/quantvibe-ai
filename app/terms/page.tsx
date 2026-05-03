import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "QuantVibe AI terms of service.",
  alternates: {
    canonical: "https://quantvibe.ai/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading mb-8">Terms of Service</h1>
        <div className="prose-custom space-y-6 text-body text-text-secondary">
          <p>
            These terms govern your use of the QuantVibe AI website and services.
            By using our site, you agree to these terms.
          </p>
          <h2 className="font-heading text-text-primary">Services</h2>
          <p>
            QuantVibe AI provides marketing intelligence consulting, AI-powered
            tools, and educational content. Specific service agreements are
            established separately for each engagement.
          </p>
          <h2 className="font-heading text-text-primary">Intellectual Property</h2>
          <p>
            All content on this website — including text, code, and visual
            elements — is the property of QuantVibe AI, LLC unless otherwise
            noted.
          </p>
          <h2 className="font-heading text-text-primary">Contact</h2>
          <p>
            Questions about these terms? Reach us at{" "}
            <a href="mailto:hello@quantvibe.ai">hello@quantvibe.ai</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
