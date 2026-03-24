import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Media Mix Model — Know Which Channels Drive Revenue",
  description:
    "Bayesian media mix modeling with adstock modeling, marginal ROI curves, and budget optimization. Finally know which channels actually drive revenue.",
  alternates: {
    canonical: "https://quantvibe.ai/services/media-mix-model",
  },
  openGraph: {
    title: "Media Mix Model — Know Which Channels Drive Revenue",
    description:
      "Bayesian media mix modeling that tells you which channels actually drive revenue.",
    url: "https://quantvibe.ai/services/media-mix-model",
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
              name: "Media Mix Model",
              description:
                "Bayesian media mix modeling with adstock modeling, marginal ROI curves, and budget optimization.",
              url: "/services/media-mix-model",
            })
          ),
        }}
      />
      <div className="container-narrow max-w-3xl pt-16 md:pt-24">
        <h1 className="font-heading text-center mb-4">Media Mix Model</h1>
      </div>
      <ServicePageTemplate
        tagline="Finally know which channels actually drive revenue."
        problem="Last-click attribution lies. Your CFO wants proof that marketing spend is working. A media mix model delivers it — decomposing revenue into the true contribution of each channel, accounting for adstock effects, diminishing returns, and cross-channel interaction."
        steps={[
          {
            number: "1",
            title: "Data Integration",
            description: "We connect your media spend, revenue, and contextual data into a unified dataset.",
          },
          {
            number: "2",
            title: "Bayesian Modeling",
            description: "We fit a Bayesian MMM with adstock transforms, saturation curves, and informative priors.",
          },
          {
            number: "3",
            title: "Budget Optimization",
            description: "We generate optimal budget allocations across channels based on marginal ROI curves.",
          },
          {
            number: "4",
            title: "Calibration",
            description: "We calibrate model outputs against holdout tests and provide an ongoing refresh framework.",
          },
        ]}
        deliverables={[
          "Channel-level ROI estimates with confidence intervals",
          "Optimized budget allocation recommendations",
          "Scenario planner for what-if budget analysis",
          "Calibration framework using holdout or incrementality tests",
          "Executive summary for stakeholder communication",
        ]}
        audience="Brands spending $50K+/month on paid media across 3+ channels who need to justify and optimize their marketing budget."
        example="A multi-channel retailer spending $400K/month across Meta, Google, TikTok, and TV couldn't agree on which channels deserved more budget. Our MMM revealed that TV had 3x the attributed ROI of what last-click showed, while Meta was hitting steep diminishing returns. Reallocating 15% of Meta budget to TV generated an estimated $180K in incremental quarterly revenue."
        pricingSignal="Starting at $10,000 for initial model build"
      />
    </>
  );
}
