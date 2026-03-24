import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Attribution & Testing — Stop Guessing, Start Testing",
  description:
    "Incrementality tests, geo-lift experiments, A/B frameworks, and attribution models that tell the truth about what moved the needle.",
  alternates: {
    canonical: "https://quantvibe.ai/services/attribution-testing",
  },
  openGraph: {
    title: "Attribution & Testing — Stop Guessing, Start Testing",
    description:
      "Incrementality tests, geo-lift experiments, and attribution models that tell the truth.",
    url: "https://quantvibe.ai/services/attribution-testing",
  },
};

export default function AttributionTestingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Attribution & Testing",
              description:
                "Incrementality tests, geo-lift experiments, and attribution models that tell the truth.",
              url: "/services/attribution-testing",
            })
          ),
        }}
      />
      <div className="container-narrow max-w-3xl pt-16 md:pt-24">
        <h1 className="font-heading text-center mb-4">Attribution & Testing</h1>
      </div>
      <ServicePageTemplate
        tagline="Stop guessing. Start testing."
        problem="Multi-touch attribution models are just math on top of bad data. They rearrange credit between touchpoints but never answer the real question: did this campaign actually cause incremental revenue? Incrementality testing does."
        steps={[
          {
            number: "1",
            title: "Measurement Audit",
            description: "We review your current attribution setup and identify where it's misleading you.",
          },
          {
            number: "2",
            title: "Test Design",
            description: "We design incrementality tests — geo-lift, holdout, or switchback — tailored to your channels.",
          },
          {
            number: "3",
            title: "Execution Support",
            description: "We guide your team through test execution, ensuring statistical validity.",
          },
          {
            number: "4",
            title: "Analysis & Reporting",
            description: "We deliver causal impact analysis with confidence intervals and actionable recommendations.",
          },
        ]}
        deliverables={[
          "Attribution model audit with identified blind spots",
          "Incrementality test design document",
          "Geo-lift or holdout test framework",
          "Statistical analysis with causal impact estimates",
          "Recommendations for ongoing measurement strategy",
        ]}
        audience="Performance marketing teams tired of attribution theater — who want to know what actually drives incremental revenue."
        example="A SaaS company was attributing 40% of conversions to branded search. A geo-holdout test on branded search revealed that 85% of those conversions would have happened anyway. Reallocating that budget to prospecting channels generated a true incremental lift of 22% in new customer acquisition."
        pricingSignal="Starting at $5,000 per test engagement"
      />
    </>
  );
}
