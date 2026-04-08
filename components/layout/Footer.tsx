import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-bg-secondary" role="contentinfo">
      <div className="container-narrow py-6 text-center">
        <p className="text-caption text-text-secondary">
          &copy; {new Date().getFullYear()} {SITE_NAME}, LLC &middot; Washington, DC
        </p>
      </div>
    </footer>
  );
}
