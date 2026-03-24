import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";

// Placeholder posts for launch — will be replaced with real MDX content
const previewPosts = [
  {
    title: "What Is Vibe Coding? A Marketer\u2019s Guide",
    excerpt:
      "You bring the domain expertise and the product vision. AI handles the syntax. Here\u2019s how to get started.",
    date: "2026-03-20",
    category: "Vibe Coding",
    slug: "what-is-vibe-coding",
  },
  {
    title: "Why Last-Click Attribution Is Lying to You",
    excerpt:
      "Your attribution model is giving full credit to the last ad someone clicked. Here\u2019s why that\u2019s a problem.",
    date: "2026-03-17",
    category: "Measurement",
    slug: "last-click-attribution-lying",
  },
  {
    title: "Media Mix Models Explained: No PhD Required",
    excerpt:
      "Bayesian media mix modeling lets you see which channels actually drive revenue. We break it down.",
    date: "2026-03-14",
    category: "MMM",
    slug: "media-mix-models-explained",
  },
];

export function BlogPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="font-heading text-center mb-12">Latest Thinking</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewPosts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="block no-underline group h-full"
              >
                <Card as="article" className="h-full flex flex-col transition-colors hover:border-accent-cyan/40 focus-within:border-accent-cyan/40">
                  <Badge variant="cyan" className="self-start mb-4">
                    {post.category}
                  </Badge>
                  <h3 className="font-heading mb-2 group-hover:text-accent-cyan group-focus-within:text-accent-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-body text-text-secondary flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <time
                    dateTime={post.date}
                    className="text-caption text-text-secondary"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
