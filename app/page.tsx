import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { LearnSection } from "@/components/sections/LearnSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTASection } from "@/components/sections/CTASection";
import { organizationSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />
      <Hero />
      <ProblemStatement />
      <ServiceCards />
      <LearnSection />
      <FounderSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
