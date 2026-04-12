import Link from "next/link";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { ContactForm } from "@/components/sections/ContactForm";
import { BookCover } from "@/components/ui/BookCover";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { organizationSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />

      <section className="py-4 md:py-6" id="services">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="font-heading text-center mb-4">
              Master Your Measurement and{" "}
              <span className="text-gradient">Automate Your Growth</span>
            </h1>
            <div className="flex justify-center mb-4">
              <AnimatedLogo size={120} />
            </div>
            <p className="text-body text-text-secondary max-w-3xl mx-auto mb-2">
              From transparent Bayesian MMM and profitable customer segmentation
              to automated reporting and CRO (Conversion Rate Optimization) AI agents.
            </p>
            <p className="text-body text-text-secondary max-w-3xl mx-auto mb-6">
              QuantVibe AI gives DTC (Direct to Consumer) teams the advanced quantitative growth
              stack to scale profitably.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] lg:items-start gap-20">
            <ServiceCards />
            <aside className="lg:sticky lg:top-20 lg:self-start space-y-4">
              <AnimatedSection delay={0.15}>
                <ContactForm />
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="rounded-xl border border-[var(--border)] bg-bg-card p-4 text-center">
                  <Badge variant="cyan">Coming Soon: Kindle &amp; Paperback</Badge>
                  <div className="flex justify-center mt-3 mb-3">
                    <BookCover width={280} height={400} />
                  </div>
                  <p className="text-[16px] text-text-secondary">
                    Already available in Google Doc and PDF formats.
                  </p>
                  <p className="text-[16px] mt-2">
                    <Link
                      href="/contact"
                      className="text-accent-cyan font-semibold hover:text-text-primary focus:text-text-primary transition-colors"
                    >
                      Contact us for a free copy
                    </Link>
                  </p>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
