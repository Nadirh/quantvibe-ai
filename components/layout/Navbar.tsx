"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { Wordmark } from "@/components/ui/Wordmark";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent, label: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenDropdown(openDropdown === label ? null : label);
    }
    if (e.key === "Escape") {
      setOpenDropdown(null);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-bg-primary/95 backdrop-blur-sm">
      <nav
        ref={navRef}
        className="container-narrow flex h-14 items-center justify-between lg:h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="no-underline flex items-center gap-2 min-h-[48px] min-w-[48px]"
          aria-label="QuantVibe AI home"
        >
          <Wordmark size="sm" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            const hasChildren = "children" in item && item.children;
            const isOpen = openDropdown === item.label;

            if (hasChildren) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-4 py-2 text-body no-underline transition-colors min-h-[48px]",
                      isActive
                        ? "text-accent-cyan"
                        : "text-text-secondary hover:text-text-primary focus:text-text-primary"
                    )}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onKeyDown={(e) => handleKeyDown(e, item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      className="absolute left-0 top-full pt-1"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="rounded-lg border border-[var(--border)] bg-bg-card p-2 shadow-xl min-w-[220px]">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className={cn(
                              "block rounded-md px-4 py-3 text-body no-underline transition-colors min-h-[48px]",
                              pathname === child.href
                                ? "text-accent-cyan bg-white/5"
                                : "text-text-secondary hover:text-text-primary hover:bg-white/5 focus:text-text-primary focus:bg-white/5"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-lg px-4 py-2 text-body no-underline transition-colors min-h-[48px] flex items-center",
                  isActive
                    ? "text-accent-cyan"
                    : "text-text-secondary hover:text-text-primary focus:text-text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right side: hamburger */}
        <div className="flex items-center gap-2">
          {/* Hamburger button - mobile/tablet only */}
          <button
            className="lg:hidden flex items-center justify-center w-12 h-12 rounded-lg text-text-secondary hover:text-text-primary focus:text-text-primary transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
      </header>

      {/* Mobile menu — must be outside <header> because backdrop-blur creates a
          containing block that would constrain position: fixed descendants. */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
