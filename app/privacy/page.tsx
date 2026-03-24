import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "QuantVibe AI privacy policy.",
  alternates: {
    canonical: "https://quantvibe.ai/privacy",
  },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading mb-8">Privacy Policy</h1>
        <div className="prose-custom space-y-6 text-body text-text-secondary">
          <p>
            QuantVibe AI, LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            respects your privacy. This policy explains how we collect, use, and
            protect your information when you use our website at quantvibe.ai.
          </p>
          <h2 className="font-heading text-text-primary">Information We Collect</h2>
          <p>
            We collect information you voluntarily provide through our contact
            form, including your name, email address, company name, and message
            content. We also collect standard analytics data such as page views
            and referral sources through privacy-friendly analytics tools.
          </p>
          <h2 className="font-heading text-text-primary">How We Use Your Information</h2>
          <p>
            We use your information to respond to your inquiries, provide our
            services, and improve our website. We do not sell your personal
            information to third parties.
          </p>
          <h2 className="font-heading text-text-primary">Contact</h2>
          <p>
            Questions about this policy? Reach us at{" "}
            <a href="mailto:hello@quantvibe.ai">hello@quantvibe.ai</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
