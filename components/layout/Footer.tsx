import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";
import { Wordmark } from "@/components/ui/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-bg-secondary" role="contentinfo">
      <div className="container-narrow py-12 lg:py-16">
        {/* Top: Logo + tagline */}
        <div className="mb-10">
          <Wordmark size="md" />
          <p className="mt-3 text-text-secondary max-w-prose">
            Human Intelligence, Vibe Coded
          </p>
        </div>

        {/* Link columns: stacked on mobile, 2x2 tablet, 4-col desktop */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Services */}
          <div>
            <h3 className="text-caption font-semibold text-text-primary mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-text-secondary no-underline hover:text-accent-cyan focus:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-caption font-semibold text-text-primary mb-4">
              Learn
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-text-secondary no-underline hover:text-accent-cyan focus:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-caption font-semibold text-text-primary mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-text-secondary no-underline hover:text-accent-cyan focus:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-caption font-semibold text-text-primary mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-text-secondary no-underline hover:text-accent-cyan focus:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--border)] text-center">
          <p className="text-caption text-text-secondary">
            &copy; {new Date().getFullYear()} {SITE_NAME}, LLC &middot; Washington, DC
          </p>
        </div>
      </div>
    </footer>
  );
}
