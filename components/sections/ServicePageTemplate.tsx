import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  tagline: string;
  problem: string;
  steps: Step[];
  deliverables: string[];
  audience: string;
  example: string;
  pricingSignal: string;
}

export function ServicePageTemplate({
  tagline,
  problem,
  steps,
  deliverables,
  audience,
  example,
  pricingSignal,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.1) 0%, transparent 60%)",
          }}
        />
        <div className="container-narrow relative text-center max-w-3xl">
          <AnimatedSection>
            <p className="text-body text-accent-cyan mb-4 font-medium">
              {tagline}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading mb-6">The Problem</h2>
            <p className="text-body text-text-secondary">{problem}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="font-heading text-center mb-12">How It Works</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <Card className="h-full text-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-cyan/10 text-accent-cyan font-heading font-bold text-h4 mb-4">
                    {step.number}
                  </span>
                  <h3 className="font-heading mb-2">{step.title}</h3>
                  <p className="text-body text-text-secondary">
                    {step.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading mb-8">What You Get</h2>
            <ul className="space-y-4">
              {deliverables.map((item) => (
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

      {/* Who It's For */}
      <section className="py-16 md:py-24">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading mb-6">Who It&apos;s For</h2>
            <p className="text-body text-text-secondary">{audience}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Example */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading mb-6">What This Looks Like in Practice</h2>
            <p className="text-body text-text-secondary">{example}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Signal + CTA */}
      <section className="py-16 md:py-24">
        <div className="container-narrow text-center max-w-2xl">
          <AnimatedSection>
            <Badge variant="violet" className="mb-6">
              {pricingSignal}
            </Badge>
            <h2 className="font-heading mb-8">
              Ready to get started?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" fullWidth className="sm:w-auto">
                Book a Call
              </Button>
              <Button href="/services" variant="outline" size="lg" fullWidth className="sm:w-auto">
                See Other Services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
