import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Google Ads Launcher — From Landing Page to Live Campaign in Minutes",
  description:
    "AI-powered Google Ads campaign builder. Turn a landing page URL into keywords, behaviorally optimized ad copy, and a ready-to-run campaign in 15 minutes.",
  alternates: {
    canonical: "https://quantvibe.ai/google-ads-launcher",
  },
  openGraph: {
    title: "Google Ads Launcher — From Landing Page to Live Campaign in Minutes",
    description:
      "AI-powered Google Ads campaign builder. Turn a landing page URL into a ready-to-run campaign in 15 minutes.",
    url: "https://quantvibe.ai/google-ads-launcher",
  },
};

export default function GoogleAdsLauncherPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Google Ads Launcher",
              description:
                "AI-powered Google Ads campaign builder. Turn a landing page URL into keywords, behaviorally optimized ad copy, and a ready-to-run campaign in 15 minutes.",
              url: "/google-ads-launcher",
            })
          ),
        }}
      />

      <section className="py-12 md:py-16">
        <div className="container-narrow">
          <AnimatedSection animateOnLoad>
            <h1 className="font-heading text-center mb-10">
              Google Ads Launcher
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
            {/* Left: copy + video */}
            <div className="max-w-3xl">
              <AnimatedSection delay={0.05} animateOnLoad>
                <p className="text-body text-text-secondary mb-6">
                  What if you could go from a landing page URL to a live
                  Google Ads campaign in minutes instead of days? No more
                  hours buried in keyword research, writing dozens of
                  headlines, or manually wiring up ad groups inside the
                  Google Ads interface. Just paste your URL and let the AI
                  agent do the heavy lifting.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1} animateOnLoad>
                <p className="text-body text-text-secondary mb-10">
                  Our Google Ads Launcher analyzes your landing page,
                  generates relevant keywords across match types, and writes
                  ad copy grounded in behavioral science, with headlines
                  pinned strategically and organized into proper ad groups.
                  Everything is exported to Excel for your review, because
                  there&apos;s always a human in the loop. Once you approve,
                  one click generates a ready-to-paste Google Ads script; log
                  in, paste, authorize, run, and your campaign is live. The
                  whole process takes 15 minutes.
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
                    src="https://player.vimeo.com/video/1182253365"
                    title="Google Ads Launcher demo video"
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
                  Fill out the short form to see how we can build this for
                  your business, whether you&apos;re running Google or Meta
                  ads. It&apos;s three required fields, one optional, and
                  we&apos;ll get back to you fast.
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
