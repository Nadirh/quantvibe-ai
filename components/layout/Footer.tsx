import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-bg-secondary" role="contentinfo">
      <div className="container-narrow py-6 flex flex-col items-center gap-3 text-center">
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link
            href="/privacy"
            className="text-caption text-text-secondary hover:text-accent-cyan focus:text-accent-cyan rounded-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-caption text-text-secondary hover:text-accent-cyan focus:text-accent-cyan rounded-sm"
          >
            Terms of Service
          </Link>
        </nav>
        <p className="text-caption text-text-secondary">
          &copy; {new Date().getFullYear()} {SITE_NAME} &middot; USA
        </p>
      </div>
    </footer>
  );
}
