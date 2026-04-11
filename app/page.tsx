import Link from "next/link";
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

          <AnimatedSection delay={0.05}>
            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="font-heading mb-6">About QuantVibe AI</h2>
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

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-20">
            <ServiceCards />
            <aside className="lg:sticky lg:top-20 lg:self-start space-y-4">
              <AnimatedSection delay={0.15}>
                <div className="rounded-xl border border-[var(--border)] bg-bg-card p-4 text-center">
                  <Badge variant="cyan">Coming Soon: Kindle &amp; Paperback</Badge>
                  <div className="flex justify-center mt-3 mb-3">
                    <BookCover width={280} height={400} />
                  </div>
                  <p className="text-[16px] text-text-secondary">
                    Already available in Google Doc and PDF formats.
                  </p>
                  <p className="text-[16px] mt-2">
                    <Link
                      href="/contact"
                      className="text-accent-cyan font-semibold hover:text-text-primary focus:text-text-primary transition-colors"
                    >
                      Contact us for a free copy
                    </Link>
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <ContactForm />
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
