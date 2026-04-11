import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Automated Weekly Reporting — Turn 4 Hours Into 5 Minutes",
  description:
    "Automated weekly reporting pipelines in Excel that pull directly from your data warehouse. Week over week comparisons, multi-model attribution, and auto-generated decks.",
  alternates: {
    canonical: "https://quantvibe.ai/automated-weekly-reporting",
  },
  openGraph: {
    title: "Automated Weekly Reporting — Turn 4 Hours Into 5 Minutes",
    description:
      "Automated weekly reporting pipelines in Excel that pull directly from your data warehouse.",
    url: "https://quantvibe.ai/automated-weekly-reporting",
  },
};

export default function AutomatedWeeklyReportingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Automated Weekly Reporting",
              description:
                "Automated weekly reporting pipelines in Excel that pull directly from your data warehouse. Week over week comparisons, multi-model attribution, and auto-generated decks.",
              url: "/automated-weekly-reporting",
            })
          ),
        }}
      />

      <section className="py-12 md:py-16">
        <div className="container-narrow">
          <AnimatedSection animateOnLoad>
            <h1 className="font-heading text-center mb-10">
              Automated Weekly Reporting
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
            {/* Left: copy + video */}
            <div className="max-w-3xl">
              <AnimatedSection delay={0.05} animateOnLoad>
                <p className="text-body text-text-secondary mb-6">
                  If you or your team still spends half your Monday
                  building weekly reports, we can fully automate that.
                  Four hours pulling data, formatting tables, comparing
                  week over week, and you haven&apos;t even started
                  thinking about what the numbers mean.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1} animateOnLoad>
                <p className="text-body text-text-secondary mb-10">
                  We build automated weekly reporting pipelines in Excel
                  that pull directly from your data warehouse, whether
                  it&apos;s BigQuery, Snowflake, or anything else, and
                  generate finished reports without you touching a thing.
                  Need last-click attribution by channel? Done. Want to
                  compare first click, last click, and even-weight models
                  side by side with week-over-week changes across
                  conversions and revenue? Built once, updated
                  automatically. And if you need a deck from those
                  numbers, that can be automated too. The goal is to turn
                  your Monday morning from four hours of report building
                  into five minutes of report reading.
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
                    src="https://player.vimeo.com/video/1182250004"
                    title="Automated Weekly Reporting demo video"
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
                  Fill out the short form and let&apos;s talk about what
                  your Monday mornings could look like. Three required
                  fields, one optional, and we&apos;ll get back to you
                  with a plan to automate the reports that are eating
                  your week.
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
