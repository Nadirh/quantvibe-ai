import {
  PieChart,
  FileSpreadsheet,
  BarChart3,
  Rocket,
  Users,
  GitFork,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ServiceCardInteractions } from "./ServiceCardInteractions";

export interface ServiceData {
  icon: typeof PieChart;
  title: string;
  description: string;
  videoUrl: string;
}

const services: ServiceData[] = [
  {
    icon: PieChart,
    title: "Media Mix Modeling",
    description:
      "Fully transparent, customizable Bayesian MMM. Tune priors to your business instead of trusting a black box. Includes budget optimization.",
    videoUrl: "",
  },
  {
    icon: FileSpreadsheet,
    title: "Automated Weekly Reporting",
    description:
      "Turn your Monday 4-hour reporting grind into a 5-minute job using Claude\u2019s Excel add-in. Dashboards included.",
    videoUrl: "",
  },
  {
    icon: BarChart3,
    title: "CRO AI Agent",
    description:
      "Drop in a landing page URL and get 7+ conversion improvement recommendations grounded in behavioral science.",
    videoUrl: "",
  },
  {
    icon: Rocket,
    title: "Google Ads AI Agent",
    description:
      "From a landing page URL to a fully structured RSA campaign \u2014 keywords, ad groups, behaviorally-optimized copy with pinning. Ready in under 10 minutes.",
    videoUrl: "",
  },
  {
    icon: Users,
    title: "Customer Segmentation",
    description:
      "K-Means clustering built directly in Excel with Claude. Know who your best customers are and how to find more of them.",
    videoUrl: "",
  },
  {
    icon: GitFork,
    title: "Data-Driven Attribution",
    description:
      "Markov chain and Shapley value models that replace last-click attribution. Get closer to what\u2019s actually working.",
    videoUrl: "",
  },
];

export function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map((service, i) => (
        <AnimatedSection key={service.title} delay={i * 0.08}>
          <Card
            as="article"
            className="h-full flex flex-col transition-colors hover:border-accent-cyan/40 !p-5"
          >
            <h3 className="font-heading mb-2">{service.title}</h3>
            <p className="text-body text-text-secondary mb-3 flex-1">
              {service.description}
            </p>
            <ServiceCardInteractions
              title={service.title}
              videoUrl={service.videoUrl}
            />
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
}
