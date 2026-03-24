import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, rgba(34,211,238,0.2) 0%, rgba(167,139,250,0.2) 100%)",
        }}
      />

      <div className="container-narrow relative text-center">
        <AnimatedSection>
          <h2 className="font-heading mb-6">
            Ready to measure smarter and build faster?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" fullWidth className="sm:w-auto">
              Book a Free Consultation
            </Button>
            <Button href="/blog" variant="outline" size="lg" fullWidth className="sm:w-auto">
              Read Our Insights
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
