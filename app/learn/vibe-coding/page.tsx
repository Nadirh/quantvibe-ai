import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Code2, Rocket, Database, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Vibe Coding Courses — Build AI Tools Without a CS Degree",
  description:
    "Vibe coding lets you describe what you want in plain English and let AI write the code. Learn to go from idea to deployed product.",
  alternates: {
    canonical: "https://quantvibe.ai/learn/vibe-coding",
  },
};

const modules = [
  {
    icon: Bot,
    title: "Your First AI Agent in 2 Hours",
    description: "Build a working AI agent from scratch using plain English prompts.",
  },
  {
    icon: Rocket,
    title: "From Claude Code to Production",
    description: "Deploy your AI tool on Vercel with CI/CD — no DevOps background needed.",
  },
  {
    icon: Code2,
    title: "Building a CRO Tool with AI",
    description: "Create a conversion optimization analyzer powered by behavioral science.",
  },
  {
    icon: Database,
    title: "Data Pipelines Without Data Engineering",
    description: "Connect APIs, transform data, and build dashboards — all with AI assistance.",
  },
];

export default function VibeCodingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-narrow text-center max-w-3xl">
          <AnimatedSection>
            <h1 className="font-heading mb-6">
              Build AI-Powered Tools — No CS Degree Required
            </h1>
            <p className="text-body text-text-secondary mb-8">
              Vibe coding lets you describe what you want in plain English and
              let AI write the code. We teach you how to go from idea to
              deployed product.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is Vibe Coding */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading mb-6">What Is Vibe Coding?</h2>
            <p className="text-body text-text-secondary">
              You bring the domain expertise and the product vision. AI handles
              the syntax. Vibe coding is a new paradigm where non-engineers use
              AI tools like Claude Code to build real, production-grade
              applications by describing what they want in natural language.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="font-heading text-center mb-12">Course Modules</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((mod, i) => (
              <AnimatedSection key={mod.title} delay={i * 0.1}>
                <Card className="h-full">
                  <mod.icon
                    size={28}
                    className="text-accent-violet mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading mb-2">{mod.title}</h3>
                  <p className="text-body text-text-secondary">
                    {mod.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading mb-6">Who This Is For</h2>
            <ul className="space-y-4">
              {[
                "Marketers who want to build their own tools instead of waiting for engineering",
                "Founders who want to prototype without hiring developers",
                "Analysts who want to go from insight to working application",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-body text-text-secondary"
                >
                  <span
                    className="mt-2 block h-2 w-2 rounded-full bg-accent-violet flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-narrow text-center max-w-2xl">
          <AnimatedSection>
            <h2 className="font-heading mb-6">Join the Waitlist</h2>
            <p className="text-body text-text-secondary mb-8">
              Be the first to know when courses launch.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Notified
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
