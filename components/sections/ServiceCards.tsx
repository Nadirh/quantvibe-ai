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
      "Fully transparent, customizable Bayesian MMM. Tune priors to your business instead of trusting a black box. Includes budget optimization.",
    videoUrl: "https://www.youtube.com/embed/mj7F4Fmj14s?vq=hd1080",
    learnMoreUrl: "/media-mix-model",
  },
  {
    icon: GitFork,
    title: "Data-Driven Attribution",
    description:
      "Markov chain and Shapley value models that replace last click attribution. Get closer to what\u2019s actually working.",
    videoUrl: "https://www.youtube.com/embed/ssrdD0wbiIU?vq=hd1080",
  },
  {
    icon: Users,
    title: "Customer Segmentation",
    description:
      "K-Means clustering built directly in Excel with Claude. Know who your best customers are and how to find more of them.",
    videoUrl: "https://www.youtube.com/embed/HhT9w27ijxg?vq=hd1080",
  },
];

const growthApps: ServiceData[] = [
  {
    icon: FileSpreadsheet,
    title: "Automated Weekly Reporting",
    description:
      "Turn your Monday 4 hour reporting grind into a 5 minute job using Claude\u2019s Excel add-in. Dashboards included.",
    videoUrl: "https://www.youtube.com/embed/epHfx2VqEj8?vq=hd1080",
  },
  {
    icon: Rocket,
    title: "Google Ads AI Agent",
    description:
      "From a landing page URL to a fully structured RSA campaign: keywords, ad groups, behaviorally optimized copy with pinning. Ready in under 10 minutes.",
    videoUrl: "https://www.youtube.com/embed/xvVBgd_dEGE?vq=hd1080",
    learnMoreUrl: "/google-ads-launcher",
  },
  {
    icon: BarChart3,
    title: "CRO AI Agent",
    description:
      "Drop in a landing page URL and get 7+ conversion improvement recommendations grounded in behavioral science.",
    videoUrl: "https://www.youtube.com/embed/mbE2sBnt488?vq=hd1080",
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
        <p className="text-body text-text-secondary mb-3 flex-1">
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
      <div className="flex flex-col gap-4">
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
      <div className="flex flex-col gap-4">
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
