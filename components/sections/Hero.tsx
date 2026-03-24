import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Gradient mesh background */}
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(167,139,250,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(34,211,238,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="container-narrow relative text-center">
        <AnimatedSection>
          <h1 className="font-heading font-bold mb-6">
            Human Intelligence, <span className="text-gradient">Vibe Coded</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-body text-text-secondary max-w-prose mx-auto mb-10">
            AI-powered tools and training for marketers who want to measure what
            matters — and build what&apos;s next.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/services" variant="primary" size="lg" fullWidth className="sm:w-auto">
              Explore Services
            </Button>
            <Button href="/learn/vibe-coding" variant="outline" size="lg" fullWidth className="sm:w-auto">
              Start Learning
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-12 flex justify-center">
          <AnimatedLogo size={280} />
        </AnimatedSection>
      </div>
    </section>
  );
}
