import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "QuantVibe AI privacy policy.",
  alternates: {
    canonical: "https://quantvibe.ai/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow max-w-3xl">
        <h1 className="font-heading mb-8">Privacy Policy</h1>
        <div className="prose-custom space-y-6 text-body text-text-secondary">
          <p>
            QuantVibe AI, LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            respects your privacy. This policy explains what information we
            collect when you use our website at quantvibe.ai, how we use it, and
            the third-party services we rely on. By using the site, you agree to
            the practices described here.
          </p>

          <h2 className="font-heading text-text-primary">Information We Collect</h2>
          <p>
            <strong className="text-text-primary">Contact form.</strong> When
            you submit our contact form, we collect your name, email address,
            company name (if provided), and the contents of your message.
          </p>
          <p>
            <strong className="text-text-primary">Guide download form.</strong>{" "}
            When you request a downloadable guide (such as our lead magnet on
            media mix modeling), we collect your name, email address, and
            company name so we can deliver the guide and follow up about related
            content.
          </p>
          <p>
            <strong className="text-text-primary">
              Automatically collected data.
            </strong>{" "}
            When you visit the site, our hosting and analytics providers record
            standard technical data such as IP address, browser type, device
            type, referring URL, pages visited, and timestamps. This data helps
            us operate the site, prevent abuse, and understand how visitors use
            our content.
          </p>

          <h2 className="font-heading text-text-primary">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries and deliver requested content.</li>
            <li>
              Send follow-up emails about our services, content, or products you
              have shown interest in.
            </li>
            <li>
              Operate, secure, and improve the website, including measuring
              performance and the effectiveness of our marketing.
            </li>
            <li>Comply with legal obligations.</li>
          </ul>
          <p>
            We do not sell your personal information to third parties. We do
            share limited information with the service providers listed below
            so they can perform functions on our behalf.
          </p>

          <h2 className="font-heading text-text-primary">Service Providers</h2>
          <p>
            We use the following third-party services to operate this website.
            Each operates under its own privacy policy.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text-primary">Vercel</strong> hosts the
              website and may collect server logs and basic request metadata.
            </li>
            <li>
              <strong className="text-text-primary">Resend</strong> processes
              and delivers transactional emails sent from our forms (for
              example, contact form submissions and guide deliveries).
            </li>
            <li>
              <strong className="text-text-primary">Cloudflare Turnstile</strong>{" "}
              protects our forms from automated abuse. Turnstile may receive a
              limited set of technical signals from your browser to verify that
              you are not a bot.
            </li>
            <li>
              <strong className="text-text-primary">Google Tag Manager and Google Ads</strong>{" "}
              are used to measure conversions from our advertising. When you
              submit a form, we send a conversion event (without your message
              content) so we can attribute leads to advertising sources.
            </li>
          </ul>

          <h2 className="font-heading text-text-primary">Cookies and Tracking</h2>
          <p>
            We and our analytics and advertising providers may set cookies or
            similar technologies in your browser to remember your session,
            measure site usage, and attribute conversions. You can control
            cookies through your browser settings. Disabling cookies may affect
            some site functionality.
          </p>

          <h2 className="font-heading text-text-primary">Data Retention</h2>
          <p>
            We retain form submissions and related correspondence for as long as
            necessary to respond to your inquiry, provide our services, and
            comply with our legal and record-keeping obligations. Aggregated or
            de-identified analytics data may be retained for longer periods.
          </p>

          <h2 className="font-heading text-text-primary">Your Rights</h2>
          <p>
            Depending on where you live, you may have the right to access,
            correct, delete, or restrict the processing of your personal
            information, and to opt out of certain marketing communications.
            Every marketing email we send includes an unsubscribe link. To make
            any other request, email us using the address below and we will
            respond within a reasonable time.
          </p>

          <h2 className="font-heading text-text-primary">Children&rsquo;s Privacy</h2>
          <p>
            Our site is intended for business audiences and is not directed to
            children under 13. We do not knowingly collect personal information
            from children.
          </p>

          <h2 className="font-heading text-text-primary">Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The most current
            version will always be posted on this page with a revised effective
            date.
          </p>

          <h2 className="font-heading text-text-primary">Contact</h2>
          <p>
            Questions about this policy or requests about your data? Reach us at{" "}
            <a href="mailto:nadir@quantvibe.ai">nadir@quantvibe.ai</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
