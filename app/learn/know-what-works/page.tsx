import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Know What Works — The Practitioner's Guide to Marketing Measurement",
  description:
    "The definitive guide to marketing measurement. Attribution, incrementality, MMM — explained for practitioners, not academics.",
  alternates: {
    canonical: "https://quantvibe.ai/learn/know-what-works",
  },
};

export default function KnowWhatWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-narrow text-center max-w-3xl">
          <AnimatedSection>
            <h1 className="font-heading mb-4">Know What Works</h1>
            <p className="text-h3-mobile lg:text-h3 text-text-secondary font-heading mb-2">
              The Practitioner&apos;s Guide to Marketing Measurement
            </p>
            <p className="text-body text-text-secondary mb-8">
              By Nadir
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get the Book
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading mb-6">What&apos;s Inside</h2>
            <p className="text-body text-text-secondary mb-6">
              Written for marketers and operators, not academics. This book
              covers the measurement techniques that actually matter:
            </p>
            <ul className="space-y-3">
              {[
                "Attribution models — what works, what doesn't, and why most are broken",
                "Incrementality testing — the gold standard for causal measurement",
                "Marginal analysis — understanding diminishing returns across channels",
                "Media mix modeling — Bayesian approaches explained from first principles",
                "Building a measurement culture — getting buy-in from leadership",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-body text-text-secondary"
                >
                  <span
                    className="mt-2 block h-2 w-2 rounded-full bg-accent-cyan flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Who Should Read This */}
      <section className="py-16 md:py-24">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading mb-6">Who Should Read This</h2>
            <ul className="space-y-3">
              {[
                "CMOs and VPs of Marketing who need to justify spend",
                "Growth marketers building measurement frameworks",
                "Data scientists entering marketing analytics",
                "Anyone tired of vanity metrics and attribution theater",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-body text-text-secondary"
                >
                  <span
                    className="mt-2 block h-2 w-2 rounded-full bg-accent-violet flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-narrow text-center max-w-2xl">
          <AnimatedSection>
            <h2 className="font-heading mb-8">Get the Book</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" fullWidth className="sm:w-auto">
                Pre-Order Now
              </Button>
              <Button href="/contact" variant="outline" size="lg" fullWidth className="sm:w-auto">
                Get a Free Chapter
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
