import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Media Mix Modeling — See What's Really Driving Your Revenue",
  description:
    "Fully customized, transparent Bayesian media mix modeling. See the true contribution of every channel, including TV, podcast, and out-of-home. Response curves, marginal ROI, and budget optimization included.",
  alternates: {
    canonical: "https://quantvibe.ai/media-mix-model",
  },
  openGraph: {
    title: "Media Mix Modeling — See What's Really Driving Your Revenue",
    description:
      "Fully customized, transparent Bayesian media mix modeling with response curves, marginal ROI, and budget optimization.",
    url: "https://quantvibe.ai/media-mix-model",
  },
};

export default function MediaMixModelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Media Mix Modeling",
              description:
                "Fully customized, transparent Bayesian media mix modeling with response curves, marginal ROI, and budget optimization.",
              url: "/media-mix-model",
            })
          ),
        }}
      />

      <section className="py-12 md:py-16">
        <div className="container-narrow">
          <AnimatedSection animateOnLoad>
            <h1 className="font-heading text-center mb-10">
              Media Mix Modeling
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
            {/* Left: copy + video */}
            <div className="max-w-3xl">
              <AnimatedSection delay={0.05} animateOnLoad>
                <p className="text-body text-text-secondary mb-6">
                  Are your TV, podcast, or out-of-home channels invisible to
                  your attribution system? If you&apos;re only measuring
                  clicks, you&apos;re flying blind on the channels that might
                  be driving, or draining, your bottom line. A media mix
                  model is usually the best way to see the full picture, and
                  most companies either don&apos;t have one or are stuck with
                  a black box they can&apos;t explain.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1} animateOnLoad>
                <p className="text-body text-text-secondary mb-6">
                  Our media mix model takes your daily spend by channel and
                  your overall profit data, then teases apart exactly how much
                  value each channel is generating, including the delayed
                  impact and diminishing returns. You&apos;ll see response
                  curves, marginal ROI by channel, and a budget optimization
                  tool with guardrails so you can reallocate spend with
                  confidence.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15} animateOnLoad>
                <ul className="text-body text-text-secondary mb-10 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 block h-2 w-2 rounded-full bg-accent-cyan flex-shrink-0" aria-hidden="true" />
                    <span>
                      The model is fully <strong>customized to your business:</strong>{" "}
                      promotions, seasonality, pricing changes, competitor
                      activity, even prior holdout test results.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 block h-2 w-2 rounded-full bg-accent-cyan flex-shrink-0" aria-hidden="true" />
                    <span>
                      We are <strong>completely transparent</strong>;
                      you&apos;ll see every equation, every parameter, nothing
                      hidden.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 block h-2 w-2 rounded-full bg-accent-cyan flex-shrink-0" aria-hidden="true" />
                    <span>
                      <strong>You can even own the MMM yourself</strong> (if
                      you&apos;d like), so just a one time fee for app
                      development.
                    </span>
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2} animateOnLoad>
                <h2 className="font-heading text-accent-cyan text-center mb-6">
                  See it in action
                </h2>
                <div
                  className="relative w-full rounded-xl overflow-hidden border border-[var(--border)] mb-3"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src="https://player.vimeo.com/video/1182245811"
                    title="Media Mix Modeling demo video"
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

              <AnimatedSection delay={0.25} animateOnLoad>
                <p className="text-body text-text-secondary">
                  Fill out the short form to start a conversation about
                  building your custom media mix model. We&apos;ll walk
                  through your channels, your data, and show you exactly
                  where your next dollar should go.
                </p>
              </AnimatedSection>
            </div>

            {/* Right: sticky contact form */}
            <aside
              className="lg:sticky lg:top-20 lg:self-start"
              aria-label="Contact form"
            >
              <AnimatedSection delay={0.3} animateOnLoad>
                <ContactForm />
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
