import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Wrench, Eye } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BookCover } from "@/components/ui/BookCover";

export const metadata: Metadata = {
  title: "About QuantVibe AI",
  description:
    "We sit at the intersection of behavioral science and data science, building transparent, customizable AI-powered tools for marketers.",
  alternates: {
    canonical: "https://quantvibe.ai/about",
  },
  openGraph: {
    title: "About QuantVibe AI",
    description:
      "We sit at the intersection of behavioral science and data science, building transparent, customizable AI-powered tools for marketers.",
    url: "https://quantvibe.ai/about",
  },
};

const principles = [
  {
    icon: Brain,
    title: "Behavioral Science Meets Data Science",
    description:
      "We sit at the intersection of behavioral science and data science, which means we build tools that understand why people do what they do and measure whether it's working.",
  },
  {
    icon: Wrench,
    title: "Tools That Drive Real Decisions",
    description:
      "AI-powered tools for marketers and builders: media mix models that show where your next dollar should go, attribution systems that move beyond last click, a CRO agent grounded in behavioral psychology, automated reporting that gives you back your Monday mornings, and more.",
  },
  {
    icon: Eye,
    title: "Transparent and Owned by You",
    description:
      "Everything we build is transparent, customizable, and designed to be owned by you, not locked behind a platform you can't see inside.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="font-heading text-center mb-12">
              About QuantVibe AI
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.03}>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-body text-text-secondary mb-4">
                Built by marketers with domain expertise and technical know-how.
                Every tool in this suite was built using AI and vibe coding by
                performance marketing practitioners who actually use these tools
                day to day.
              </p>
              <p className="text-body text-text-secondary">
                Now, we can build these tools for you as well,
                completely customized to your needs. Or, if you prefer, we can
                teach you to build these yourselves. No coding or machine learning
                background required.
              </p>
            </div>
          </AnimatedSection>

          {/* Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
            {principles.map((principle, i) => (
              <AnimatedSection key={principle.title} delay={0.05 + i * 0.08}>
                <Card className="h-full text-center">
                  <principle.icon
                    size={36}
                    className="text-accent-cyan mx-auto mb-4"
                    aria-hidden="true"
                  />
                  <h2 className="font-heading mb-3">{principle.title}</h2>
                  <p className="text-body text-text-secondary">
                    {principle.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Book */}
          <AnimatedSection delay={0.3}>
            <div className="max-w-4xl mx-auto">
              <p className="text-body text-text-secondary text-center mb-8">
                We also wrote the book on it, literally.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 md:gap-10 items-start">
                <div className="rounded-xl border border-[var(--border)] bg-bg-card p-4 text-center">
                  <Badge variant="cyan">Coming Soon: Kindle &amp; Paperback</Badge>
                  <div className="flex justify-center mt-3">
                    <BookCover width={280} height={400} />
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-accent-cyan mb-3">
                    The New Marketing Measurement Playbook
                  </h2>
                  <p className="text-body text-text-secondary italic mb-6">
                    How Attribution, Incrementality Testing, and MMMs Drive
                    Smarter Budgeting and Maximize Profits
                  </p>
                  <p className="text-body text-text-secondary mb-6">
                    It covers the full spectrum of marketing measurement,
                    from attribution to incrementality testing to media mix
                    modeling, and reflects the same philosophy we bring to
                    every client engagement: practical, actionable, and
                    grounded in what the data actually says.
                  </p>
                  <p className="text-body text-text-secondary">
                    Already available in Google Doc and PDF formats.
                  </p>
                  <p className="text-body mt-2">
                    <Link
                      href="/contact"
                      className="text-accent-cyan font-semibold hover:text-text-primary focus:text-text-primary transition-colors"
                    >
                      Contact us for a free copy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="font-heading mb-8">Ready to work together?</h2>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              fullWidth
              className="sm:w-auto"
            >
              Work With Us
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
