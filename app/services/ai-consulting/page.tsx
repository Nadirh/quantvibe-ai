import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Consulting — Custom AI Strategy That Ships",
  description:
    "Custom AI strategy for your marketing stack. From agent design to deployment — not slides, but working systems.",
  alternates: {
    canonical: "https://quantvibe.ai/services/ai-consulting",
  },
  openGraph: {
    title: "AI Consulting — Custom AI Strategy That Ships",
    description:
      "Custom AI strategy for your marketing stack. From agent design to deployment.",
    url: "https://quantvibe.ai/services/ai-consulting",
  },
};

export default function AIConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "AI Consulting",
              description:
                "Custom AI strategy for your marketing stack. From agent design to deployment.",
              url: "/services/ai-consulting",
            })
          ),
        }}
      />
      <div className="container-narrow max-w-3xl pt-16 md:pt-24">
        <h1 className="font-heading text-center mb-4">AI Consulting</h1>
      </div>
      <ServicePageTemplate
        tagline="Custom AI strategy that ships, not slides."
        problem="You know AI could transform your marketing ops, but you don't know where to start — or who to trust. Most consultants hand you a deck and disappear. We build alongside you."
        steps={[
          {
            number: "1",
            title: "Discovery",
            description: "We audit your current stack, workflows, and data to find the highest-impact AI opportunities.",
          },
          {
            number: "2",
            title: "Architecture",
            description: "We design an AI roadmap scoped to your team, budget, and technical maturity.",
          },
          {
            number: "3",
            title: "Build",
            description: "We prototype custom agents and automations — tested against your real data.",
          },
          {
            number: "4",
            title: "Deploy",
            description: "We ship to production, train your team, and provide ongoing support.",
          },
        ]}
        deliverables={[
          "AI roadmap tailored to your marketing operations",
          "Custom agent prototypes (tested with your data)",
          "Implementation and deployment support",
          "Team training and documentation",
        ]}
        audience="Marketing leaders, ops teams, and growth teams at mid-market companies who want to move from AI curiosity to AI capability."
        example="A DTC brand spending $200K/month on paid media wanted to automate creative testing. We built a custom agent that generates ad variations, runs them through a scoring model based on historical performance, and queues top performers for launch — cutting their creative production cycle from 2 weeks to 2 days."
        pricingSignal="Custom scoping — starts with a discovery call"
      />
    </>
  );
}
