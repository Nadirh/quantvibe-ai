import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { personSchema } from "@/lib/schema";
import { BarChart3, Wrench, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About QuantVibe AI",
  description:
    "We believe every marketer should be able to measure what works and build what's next — without waiting for engineering or trusting black-box vendors.",
  alternates: {
    canonical: "https://quantvibe.ai/about",
  },
  openGraph: {
    title: "About QuantVibe AI",
    description:
      "We believe every marketer should be able to measure what works and build what's next.",
    url: "https://quantvibe.ai/about",
  },
};

const values = [
  {
    icon: BarChart3,
    title: "Measurement over opinion",
    description:
      "Every recommendation backed by data. Every decision informed by evidence.",
  },
  {
    icon: Wrench,
    title: "Building over buying",
    description:
      "Custom tools built for your specific needs beat generic SaaS every time.",
  },
  {
    icon: Eye,
    title: "Clarity over complexity",
    description:
      "If we can't explain it simply, we don't understand it well enough.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema()),
        }}
      />

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h1 className="font-heading text-center mb-8">About QuantVibe AI</h1>
            <p className="text-body text-text-secondary text-center max-w-prose mx-auto">
              We believe every marketer should be able to measure what works and
              build what&apos;s next — without waiting for engineering, without
              trusting black-box vendors, and without a PhD in statistics.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading mb-6">The Founder</h2>
            <p className="text-body text-text-secondary mb-4">
              Nadir brings a background in data science and behavioral economics
              to the marketing intelligence space. After years building media mix
              models, CRO systems, and AI agents in-house, QuantVibe AI was
              founded to bring those same tools and techniques to teams that
              need them most.
            </p>
            <p className="text-body text-text-secondary">
              This isn&apos;t theory repackaged as consulting. It&apos;s working
              tools and transferable knowledge, built by a practitioner who uses
              them every day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="font-heading text-center mb-12">Our Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <Card className="h-full text-center">
                  <value.icon
                    size={32}
                    className="text-accent-cyan mx-auto mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading mb-2">{value.title}</h3>
                  <p className="text-body text-text-secondary">
                    {value.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="font-heading mb-8">
              Ready to work together?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" fullWidth className="sm:w-auto">
                Work With Us
              </Button>
              <Button
                href="https://linkedin.com/company/quantvibe-ai"
                variant="outline"
                size="lg"
                external
                fullWidth
                className="sm:w-auto"
              >
                Follow on LinkedIn
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
