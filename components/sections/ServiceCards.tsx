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
  learnMoreUrl?: string;
}

const measurementApps: ServiceData[] = [
  {
    icon: PieChart,
    title: "Media Mix Modeling",
    description:
      "Fully transparent, customizable MMM that you can even own. Include any priors that you may have. Budget Optimization and Forecasting included.",
    videoUrl: "https://player.vimeo.com/video/1182245811",
    learnMoreUrl: "/media-mix-model",
  },
  {
    icon: GitFork,
    title: "Data-Driven Attribution",
    description:
      "Markov chain and Shapley value models that replace last click attribution. Get closer to what\u2019s actually working.",
    videoUrl: "https://player.vimeo.com/video/1182249125",
    learnMoreUrl: "/data-driven-attribution",
  },
  {
    icon: Users,
    title: "Customer Segmentation",
    description:
      "K-Means clustering built directly in Excel with Claude. Know who your best customers are and how to find more of them.",
    videoUrl: "https://player.vimeo.com/video/1182251552",
    learnMoreUrl: "/customer-segmentation",
  },
];

const growthApps: ServiceData[] = [
  {
    icon: FileSpreadsheet,
    title: "Automated Weekly Reporting",
    description:
      "Turn your Monday 5 hour reporting grind into a 5 minute job using Claude\u2019s Excel add-in. Dashboards included.",
    videoUrl: "https://player.vimeo.com/video/1182250004",
    learnMoreUrl: "/automated-weekly-reporting",
  },
  {
    icon: Rocket,
    title: "Google Ads AI Agent",
    description:
      "From a landing page URL to a fully structured RSA campaign: keywords, ad groups, behaviorally optimized copy with pinning. Ready in under 10 minutes.",
    videoUrl: "https://player.vimeo.com/video/1182253365",
    learnMoreUrl: "/google-ads-launcher",
  },
  {
    icon: BarChart3,
    title: "Conversion Rate Optimization (CRO) Agent",
    description:
      "Drop in a landing page URL and get 7+ conversion improvement recommendations grounded in behavioral science.",
    videoUrl: "https://player.vimeo.com/video/1182252135",
    learnMoreUrl: "/cro-ai-agent",
  },
];

function ServiceCard({ service, delay }: { service: ServiceData; delay: number }) {
  return (
    <AnimatedSection delay={delay} animateOnLoad className="flex-1 flex">
      <Card
        as="article"
        className="w-full flex flex-col transition-colors hover:border-accent-cyan/40 !p-5"
      >
        <h3 className="font-heading mb-2">{service.title}</h3>
        <p className="text-body text-text-secondary mb-12 flex-1">
          {service.description}
        </p>
        <ServiceCardInteractions
          title={service.title}
          videoUrl={service.videoUrl}
          learnMoreUrl={service.learnMoreUrl}
        />
      </Card>
    </AnimatedSection>
  );
}

export function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
      <div className="grid gap-4" style={{ gridTemplateRows: "auto 1fr 1fr 1fr" }}>
        <AnimatedSection animateOnLoad>
          <h2 className="font-heading text-center text-accent-cyan">Marketing Measurement Apps</h2>
        </AnimatedSection>
        {measurementApps.map((service, i) => (
          <ServiceCard
            key={service.title}
            service={service}
            delay={0.05 + i * 0.08}
          />
        ))}
      </div>
      <div className="grid gap-4" style={{ gridTemplateRows: "auto 1fr 1fr 1fr" }}>
        <AnimatedSection animateOnLoad>
          <h2 className="font-heading text-center text-accent-cyan">Growth and Efficiency Apps</h2>
        </AnimatedSection>
        {growthApps.map((service, i) => (
          <ServiceCard
            key={service.title}
            service={service}
            delay={0.05 + i * 0.08}
          />
        ))}
      </div>
    </div>
  );
}
