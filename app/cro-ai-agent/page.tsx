import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "CRO AI Agent — Behavioral Science Recommendations for Your Landing Page",
  description:
    "Drop in a landing page URL and get prioritized, behaviorally-grounded conversion recommendations. Anchoring, loss aversion, social proof, and more.",
  alternates: {
    canonical: "https://quantvibe.ai/cro-ai-agent",
  },
  openGraph: {
    title: "CRO AI Agent — Behavioral Science Recommendations for Your Landing Page",
    description:
      "Drop in a landing page URL and get prioritized, behaviorally-grounded conversion recommendations.",
    url: "https://quantvibe.ai/cro-ai-agent",
  },
};

export default function CroAiAgentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "CRO AI Agent",
              description:
                "Drop in a landing page URL and get prioritized, behaviorally-grounded conversion recommendations using anchoring, loss aversion, social proof, and more.",
              url: "/cro-ai-agent",
            })
          ),
        }}
      />

      <section className="py-12 md:py-16">
        <div className="container-narrow">
          <AnimatedSection animateOnLoad>
            <h1 className="font-heading text-center mb-10">
              Conversion Rate Optimization (CRO) AI Agent
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
            {/* Left: copy + video */}
            <div className="max-w-3xl">
              <AnimatedSection delay={0.05} animateOnLoad>
                <p className="text-body text-text-secondary mb-6">
                  Your landing page is leaving money on the table, and you
                  probably already suspect it. The trick is knowing which
                  changes will actually increase conversions. Generic best
                  practices only get you so far, and gut instinct is
                  expensive to be wrong about.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1} animateOnLoad>
                <p className="text-body text-text-secondary mb-10">
                  Our CRO AI Agent takes your landing page URL, asks a few
                  targeted questions about your audience and goals, and
                  delivers specific, prioritized recommendations grounded in
                  behavioral science: anchoring, loss aversion, psychological
                  ownership, social proof, and more. Every suggestion comes
                  with the before, the recommendation, and the why behind
                  it, so you&apos;re not guessing. Some will be quick wins
                  you implement tomorrow; others become your next A/B test
                  backlog. Either way, you walk away with a concrete
                  playbook for improving conversion rates.
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
                    src="https://player.vimeo.com/video/1182252135"
                    title="CRO AI Agent demo video"
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
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
                  Fill out the short form and let&apos;s run the agent on
                  your landing page. It takes minutes, costs you nothing to
                  explore, and the conversation alone will surface
                  opportunities you haven&apos;t considered.
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
