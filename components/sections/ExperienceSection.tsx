import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface Brand {
  name: string;
  url: string;
}

const ECOMMERCE_BRANDS: Brand[] = [
  { name: "Shutterfly", url: "https://www.shutterfly.com/" },
  { name: "The RealReal", url: "https://www.therealreal.com/" },
  { name: "Stitch Fix", url: "https://www.stitchfix.com/" },
];

const FINTECH_BRANDS: Brand[] = [
  { name: "Wealthfront", url: "https://www.wealthfront.com/" },
  { name: "Achieve", url: "https://www.achieve.com/" },
  { name: "Green Dot", url: "https://www.greendot.com/" },
];

function BrandTile({ name, url }: Brand) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} (opens in new tab)`}
      className="flex min-h-[88px] items-center justify-center rounded-xl border border-[var(--border)] bg-bg-card px-6 py-5 font-heading text-xl md:text-2xl text-text-primary no-underline transition-all hover:border-accent-cyan/60 hover:text-accent-cyan hover:-translate-y-0.5 focus:border-accent-cyan/60 focus:text-accent-cyan"
    >
      {name}
    </a>
  );
}

function BrandGroup({
  label,
  brands,
}: {
  label: string;
  brands: Brand[];
}) {
  return (
    <div>
      <h3 className="font-heading text-center text-accent-cyan mb-4">
        {label}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {brands.map((b) => (
          <BrandTile key={b.name} {...b} />
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section
      className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-[var(--border)]"
      aria-labelledby="experience-heading"
    >
      <AnimatedSection>
        <h2
          id="experience-heading"
          className="font-heading text-center mb-8"
        >
          Collective Marketing Measurement Experience at:
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="space-y-8">
          <BrandGroup label="Ecommerce" brands={ECOMMERCE_BRANDS} />
          <BrandGroup label="Fintech" brands={FINTECH_BRANDS} />
        </div>
      </AnimatedSection>
    </section>
  );
}
