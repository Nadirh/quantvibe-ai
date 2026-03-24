import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog — Marketing Intelligence Insights",
  description:
    "Practical insights on marketing measurement, AI tools, vibe coding, and data-driven decision making.",
  alternates: {
    canonical: "https://quantvibe.ai/blog",
  },
};

export default function BlogPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow text-center max-w-2xl">
        <AnimatedSection>
          <h1 className="font-heading mb-6">Blog</h1>
          <p className="text-body text-text-secondary">
            Practical insights on marketing measurement, AI tools, vibe coding,
            and data-driven decision making. Content coming soon.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
