import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Let's Build Something Smart Together",
  description:
    "Book a free consultation or send us a message. We typically respond within 24 hours.",
  alternates: {
    canonical: "https://quantvibe.ai/contact",
  },
  openGraph: {
    title: "Contact — Let's Build Something Smart Together",
    description:
      "Book a free consultation or send us a message.",
    url: "https://quantvibe.ai/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow max-w-2xl">
        <AnimatedSection>
          <h1 className="font-heading text-center mb-4">
            Let&apos;s Build Something Smart Together
          </h1>
          <p className="text-body text-text-secondary text-center mb-12">
            Prefer email?{" "}
            <a href="mailto:hello@quantvibe.ai">hello@quantvibe.ai</a>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ContactForm />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-caption text-text-secondary text-center mt-8">
            We typically respond within 24 hours.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
