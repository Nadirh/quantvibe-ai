import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ProblemStatement() {
  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="font-heading text-center mb-12">
            Marketing measurement is broken. Building software is gatekept.{" "}
            <span className="text-accent-cyan">We fix both.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatedSection delay={0.1}>
            <p className="text-body text-text-secondary max-w-prose">
              Most marketing teams fly blind — vanity metrics, broken
              attribution, guesswork budgets. We bring the quant rigor.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-body text-text-secondary max-w-prose">
              Most marketers can&apos;t build their own tools. With vibe coding +
              AI, that changes. You bring the domain expertise; AI handles the
              code.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
