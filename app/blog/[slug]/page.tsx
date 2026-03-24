import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

// Placeholder page until MDX blog engine is wired up in Phase 2
export default function BlogPostPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow max-w-3xl text-center">
        <AnimatedSection>
          <h1 className="font-heading mb-6">Coming Soon</h1>
          <p className="text-body text-text-secondary mb-8">
            This blog post is on its way. Check back soon for the full article.
          </p>
          <Button href="/blog" variant="outline">
            Back to Blog
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
