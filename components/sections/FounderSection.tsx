import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FounderSection() {
  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container-narrow max-w-3xl">
        <AnimatedSection>
          <h2 className="font-heading text-center mb-8">
            Built by a <span className="text-accent-violet">practitioner</span>,
            not a pitch deck
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="text-center">
            <p className="text-body text-text-secondary mb-4 max-w-prose mx-auto">
              With a background in data science and behavioral economics, Nadir
              has built media mix models, CRO systems, and AI agents from
              scratch — not as proof-of-concepts, but as production tools that
              drive real decisions.
            </p>
            <p className="text-body text-text-secondary max-w-prose mx-auto">
              QuantVibe AI isn&apos;t selling theory. It&apos;s selling working
              tools and transferable knowledge, built by someone who uses them
              every day.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
