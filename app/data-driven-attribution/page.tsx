import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Data-Driven Attribution — See Which Touchpoints Actually Drive Revenue",
  description:
    "Shapley value and Markov chain data-driven attribution models built right inside Excel. Feed in your raw data and see the real incremental contribution of every touchpoint.",
  alternates: {
    canonical: "https://quantvibe.ai/data-driven-attribution",
  },
  openGraph: {
    title: "Data-Driven Attribution — See Which Touchpoints Actually Drive Revenue",
    description:
      "Shapley value and Markov chain data-driven attribution models built right inside Excel.",
    url: "https://quantvibe.ai/data-driven-attribution",
  },
};

export default function DataDrivenAttributionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Data-Driven Attribution",
              description:
                "Shapley value and Markov chain data-driven attribution models built right inside Excel. Feed in your raw data and see the real incremental contribution of every touchpoint.",
              url: "/data-driven-attribution",
            })
          ),
        }}
      />

      <section className="py-12 md:py-16">
        <div className="container-narrow">
          <AnimatedSection animateOnLoad>
            <h1 className="font-heading text-center mb-10">
              Data-Driven Attribution
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
            {/* Left: copy + video */}
            <div className="max-w-3xl">
              <AnimatedSection delay={0.05} animateOnLoad>
                <p className="text-body text-text-secondary mb-6">
                  Still allocating budget based on last-click attribution?
                  You&apos;re almost certainly over-crediting some channels
                  and starving others, because rules-based models like last
                  click, first click, or time decay don&apos;t measure the
                  actual value each touchpoint adds to a customer journey.
                  Data-driven attribution while not perfect, does a much
                  better job. And until now it&apos;s been locked behind
                  expensive analytics platforms.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1} animateOnLoad>
                <p className="text-body text-text-secondary mb-10">
                  We build data-driven attribution models using Shapley
                  values (the same machine learning approach Google has
                  used) and Markov chains. We run it right inside Excel so
                  you own it completely. Feed in your raw data from
                  BigQuery or any data warehouse, and the model analyzes
                  full customer journeys to assign credit based on each
                  touchpoint&apos;s incremental contribution. The output
                  updates on a rolling window you control, comparing
                  last-click numbers side by side with data-driven results
                  so you can see exactly where your current model is
                  misleading you. Display getting ten times less credit
                  than it deserves? Paid search getting too much?
                  You&apos;ll know.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15} animateOnLoad>
                <h2 className="font-heading text-accent-cyan text-center mb-6">
                  See it in action
                </h2>
                <div
                  className="relative w-full rounded-xl overflow-hidden border border-[var(--border)] mb-3"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/ssrdD0wbiIU?vq=hd1080"
                    title="Data-Driven Attribution demo video"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-[16px] text-text-secondary/60 text-center mb-10">
                  For best quality, click the gear icon (⚙) in the video
                  player and select 1080p
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2} animateOnLoad>
                <p className="text-body text-text-secondary">
                  Fill out the short form and let&apos;s talk about what
                  data-driven attribution would look like for your
                  business. It&apos;s a quick conversation that could change
                  where every marketing dollar goes.
                </p>
              </AnimatedSection>
            </div>

            {/* Right: sticky contact form */}
            <aside
              className="lg:sticky lg:top-20 lg:self-start"
              aria-label="Contact form"
            >
              <AnimatedSection delay={0.25} animateOnLoad>
                <ContactForm />
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
