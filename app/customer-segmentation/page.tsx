import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Customer Segmentation — ML Clustering Inside Excel",
  description:
    "AI-powered customer segmentation using machine learning clustering, built right inside Excel. Identify distinct segments and tailor marketing by group.",
  alternates: {
    canonical: "https://quantvibe.ai/customer-segmentation",
  },
  openGraph: {
    title: "Customer Segmentation — ML Clustering Inside Excel",
    description:
      "AI-powered customer segmentation using machine learning clustering, built right inside Excel.",
    url: "https://quantvibe.ai/customer-segmentation",
  },
};

export default function CustomerSegmentationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Customer Segmentation",
              description:
                "AI-powered customer segmentation using machine learning clustering, built right inside Excel. Identify distinct segments and tailor marketing by group.",
              url: "/customer-segmentation",
            })
          ),
        }}
      />

      <section className="py-12 md:py-16">
        <div className="container-narrow">
          <AnimatedSection animateOnLoad>
            <h1 className="font-heading text-center mb-10">
              Customer Segmentation
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
            {/* Left: copy + video */}
            <div className="max-w-3xl">
              <AnimatedSection delay={0.05} animateOnLoad>
                <p className="text-body text-text-secondary mb-6">
                  You&apos;ve got thousands of customers but you&apos;re
                  treating them all the same, and it&apos;s costing you.
                  Different people have different needs, budgets, and
                  buying patterns, and when your marketing averages across
                  all of them, you leave revenue on the table everywhere
                  from email to paid ads to promotions.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1} animateOnLoad>
                <p className="text-body text-text-secondary mb-10">
                  We build AI-powered customer segmentation right inside
                  Excel using machine learning clustering algorithms, so you
                  can see exactly who your customers are without expensive
                  platforms or software development. Feed in your customer
                  data, attributes like income, purchase history,
                  frequency, household size, and the model identifies
                  distinct segments described in plain English: budget
                  families, high-value retirees, suburban parents, young
                  professionals. From there you can tailor messaging by
                  segment, sharpen your audience targeting on Google and
                  Meta, personalize offers and pricing, and calculate
                  lifetime value by group so you know where to double down.
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
                    src="https://player.vimeo.com/video/1182251552"
                    title="Customer Segmentation demo video"
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
                  Fill out the short form and let&apos;s talk about
                  segmenting your customer base. Whether you need us to
                  build it for you or automate the entire pipeline, it
                  starts with a quick conversation.
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
