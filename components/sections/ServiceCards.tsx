import Link from "next/link";
import { Cpu, BarChart3, PieChart, FlaskConical } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Cpu,
    title: "AI Consulting",
    description:
      "Custom AI strategy for your marketing stack. From agent design to deployment.",
    href: "/services/ai-consulting",
  },
  {
    icon: BarChart3,
    title: "CRO Agent",
    description:
      "AI-powered conversion rate optimization grounded in behavioral science.",
    href: "/services/cro-agent",
  },
  {
    icon: PieChart,
    title: "Media Mix Model",
    description:
      "Know exactly which channels drive revenue. Bayesian MMM without the consultancy price tag.",
    href: "/services/media-mix-model",
  },
  {
    icon: FlaskConical,
    title: "Attribution & Testing",
    description:
      "Incrementality tests, A/B frameworks, and attribution models that tell the truth.",
    href: "/services/attribution-testing",
  },
];

export function ServiceCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.href} delay={i * 0.1}>
              <Link
                href={service.href}
                className="block no-underline group h-full"
              >
                <Card className="h-full transition-colors hover:border-accent-cyan/40 focus-within:border-accent-cyan/40">
                  <service.icon
                    size={32}
                    className="text-accent-cyan mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading mb-2 group-hover:text-accent-cyan group-focus-within:text-accent-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-body text-text-secondary">
                    {service.description}
                  </p>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
