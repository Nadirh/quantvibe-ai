import { ServiceCards } from "@/components/sections/ServiceCards";
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
      <ServiceCards />
      <CTASection />
    </>
  );
}
