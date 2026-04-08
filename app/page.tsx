import { ServiceCards } from "@/components/sections/ServiceCards";
import { ContactForm } from "@/components/sections/ContactForm";
import { BookCover } from "@/components/ui/BookCover";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
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
            <h1 className="font-heading text-center mb-1">
              Performance Marketing Tools,{" "}
              <span className="text-gradient">Vibe Coded</span>
            </h1>
            <div className="flex justify-center mb-4">
              <AnimatedLogo size={120} />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-20">
            <ServiceCards />
            <aside className="lg:sticky lg:top-20 lg:self-start space-y-4">
              <AnimatedSection delay={0.15}>
                <div className="rounded-xl border border-[var(--border)] bg-bg-card p-4 text-center">
                  <Badge variant="cyan">Book Coming Soon</Badge>
                  <div className="flex justify-center mt-3">
                    <BookCover width={280} height={400} />
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <ContactForm />
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-bg-secondary">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading mb-6">About QuantVibe AI</h2>
            <p className="text-body text-text-secondary">
              Built by marketers with domain expertise and technical know-how.
              Every tool in this suite was built using AI and vibe coding by
              performance marketing practitioners who actually use these tools
              day-to-day. Now, we can build these tools for you as well,
              completely customized to your needs. Or, if you prefer, we can
              teach you to build these yourselves. No coding or machine learning
              background required.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
