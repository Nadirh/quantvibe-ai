import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, BarChart3, PieChart, FlaskConical } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Services — AI-Powered Marketing Intelligence",
  description:
    "From measurement to automation — tools and consulting to make your marketing truly data-driven.",
  alternates: {
    canonical: "https://quantvibe.ai/services",
  },
  openGraph: {
    title: "Services — AI-Powered Marketing Intelligence",
    description:
      "From measurement to automation — tools and consulting to make your marketing truly data-driven.",
    url: "https://quantvibe.ai/services",
  },
};

const services = [
  {
    icon: Cpu,
    title: "AI Consulting",
    description:
      "Custom AI strategy for your marketing stack. From agent design to deployment.",
    bullets: [
      "AI roadmap and strategy development",
      "Custom agent prototypes",
      "Implementation support and team training",
      "Marketing workflow automation",
    ],
    bestFor: "Marketing leaders and growth teams at mid-market companies",
    href: "/services/ai-consulting",
  },
  {
    icon: BarChart3,
    title: "CRO Agent",
    description:
      "AI-powered conversion rate optimization grounded in behavioral science. Kahneman, Cialdini, and Fogg — applied systematically.",
    bullets: [
      "Behavioral science-based page audits",
      "Prioritized optimization recommendations",
      "Before/after visualization",
      "Framework mapping to proven psychological principles",
    ],
    bestFor: "B2C ecommerce brands, especially under $80 AOV",
    href: "/services/cro-agent",
  },
  {
    icon: PieChart,
    title: "Media Mix Model",
    description:
      "Know exactly which channels drive revenue. Bayesian MMM with adstock modeling, marginal ROI curves, and budget optimization.",
    bullets: [
      "Channel-level ROI estimates",
      "Optimized budget allocation",
      "Scenario planner for what-if analysis",
      "Ongoing calibration framework",
    ],
    bestFor: "Brands spending $50K+/month on paid media across 3+ channels",
    href: "/services/media-mix-model",
  },
  {
    icon: FlaskConical,
    title: "Attribution & Testing",
    description:
      "Incrementality tests, geo-lift experiments, and attribution models that tell the truth about what moved the needle.",
    bullets: [
      "Attribution model audit",
      "Incrementality test design",
      "Geo-lift and holdout frameworks",
      "Statistical analysis and reporting",
    ],
    bestFor: "Performance marketing teams tired of attribution theater",
    href: "/services/attribution-testing",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-narrow text-center max-w-3xl">
          <AnimatedSection>
            <h1 className="font-heading mb-6">
              AI-Powered Marketing Intelligence
            </h1>
            <p className="text-body text-text-secondary">
              From measurement to automation — tools and consulting to make your
              marketing truly data-driven.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service cards */}
      <section className="pb-16 md:pb-24">
        <div className="container-narrow space-y-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.href} delay={i * 0.1}>
              <Card className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <service.icon
                        size={28}
                        className="text-accent-cyan"
                        aria-hidden="true"
                      />
                      <h2 className="font-heading">{service.title}</h2>
                    </div>
                    <p className="text-body text-text-secondary mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-body text-text-secondary"
                        >
                          <span
                            className="mt-2 block h-2 w-2 rounded-full bg-accent-cyan flex-shrink-0"
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <Badge variant="violet">{service.bestFor}</Badge>
                  </div>
                  <div className="lg:self-center flex-shrink-0">
                    <Button href={service.href} variant="outline">
                      Explore {service.title}
                    </Button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="font-heading mb-6">
              Not sure which service fits?
            </h2>
            <p className="text-body text-text-secondary mb-8">
              Let&apos;s talk through your goals and find the right approach.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Book a Call
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
