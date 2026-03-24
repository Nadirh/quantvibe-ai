import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "CRO Agent — Behavioral Science Meets AI Optimization",
  description:
    "AI-powered conversion rate optimization grounded in behavioral science. Kahneman, Cialdini, and Fogg — applied systematically to your landing pages.",
  alternates: {
    canonical: "https://quantvibe.ai/services/cro-agent",
  },
  openGraph: {
    title: "CRO Agent — Behavioral Science Meets AI Optimization",
    description:
      "AI-powered conversion rate optimization grounded in behavioral science.",
    url: "https://quantvibe.ai/services/cro-agent",
  },
};

export default function CROAgentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "CRO Agent",
              description:
                "AI-powered conversion rate optimization grounded in behavioral science.",
              url: "/services/cro-agent",
            })
          ),
        }}
      />
      <div className="container-narrow max-w-3xl pt-16 md:pt-24">
        <h1 className="font-heading text-center mb-4">CRO Agent</h1>
      </div>
      <ServicePageTemplate
        tagline="Behavioral science meets AI. Your landing pages, optimized."
        problem='Most CRO is guesswork dressed up as "best practices." Our agent applies Kahneman, Cialdini, and Fogg — systematically. It analyzes your pages through the lens of proven psychological frameworks and delivers prioritized, actionable recommendations.'
        steps={[
          {
            number: "1",
            title: "URL Analysis",
            description: "Submit your landing page URL. Our agent crawls and captures the full user experience.",
          },
          {
            number: "2",
            title: "Behavioral Audit",
            description: "The agent scores your page against 30+ behavioral science principles.",
          },
          {
            number: "3",
            title: "Recommendations",
            description: "You get a prioritized list of changes ranked by expected impact and effort.",
          },
          {
            number: "4",
            title: "Visualization",
            description: "Before/after mockups show exactly what the optimized page looks like.",
          },
        ]}
        deliverables={[
          "Scored behavioral audit report (PDF)",
          "Prioritized opportunity list with expected impact",
          "Behavioral framework mapping (which principles apply where)",
          "Implementation guidance with wireframe suggestions",
        ]}
        audience="B2C ecommerce brands — especially those with under $80 AOV where small conversion lifts have outsized impact on profitability."
        example="An ecommerce brand selling wellness supplements had a 1.8% landing page conversion rate. Our CRO agent identified 12 behavioral friction points including loss aversion gaps, missing social proof anchoring, and cognitive overload in the product grid. After implementing the top 5 recommendations, conversion rose to 2.7% — a 50% lift."
        pricingSignal="Starting at $2,500 per audit"
      />
    </>
  );
}
