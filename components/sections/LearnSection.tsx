import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Code2, BookOpen } from "lucide-react";

export function LearnSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="font-heading text-center mb-12">
            Learn to Build with <span className="text-accent-cyan">AI</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection delay={0.1}>
            <Card className="h-full flex flex-col">
              <Code2
                size={32}
                className="text-accent-violet mb-4"
                aria-hidden="true"
              />
              <h3 className="font-heading mb-3">Vibe Coding Courses</h3>
              <p className="text-body text-text-secondary mb-6 flex-1">
                Go from idea to deployed AI tool — no CS degree required. Built
                for marketers and operators.
              </p>
              <Button href="/learn/vibe-coding" variant="outline">
                View Courses
              </Button>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="h-full flex flex-col">
              <BookOpen
                size={32}
                className="text-accent-violet mb-4"
                aria-hidden="true"
              />
              <h3 className="font-heading mb-3">Know What Works</h3>
              <p className="text-body text-text-secondary mb-6 flex-1">
                The definitive guide to marketing measurement. Attribution,
                incrementality, MMM — explained for practitioners.
              </p>
              <Button href="/learn/know-what-works" variant="outline">
                Learn About the Book
              </Button>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
