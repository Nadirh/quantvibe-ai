"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Focus trap and escape key
  useEffect(() => {
    if (!isOpen) return;

    // Focus the close button when opened
    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Focus trap
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    // Prevent body scroll
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-bg-primary border-l border-[var(--border)] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-end p-4 border-b border-[var(--border)]">
          <button
            ref={closeRef}
            onClick={onClose}
            className="flex items-center justify-center w-12 h-12 rounded-lg text-text-secondary hover:text-text-primary focus:text-text-primary transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const hasChildren = "children" in item && item.children;
              const isExpanded = expandedItem === item.label;

              if (hasChildren) {
                return (
                  <li key={item.label}>
                    <button
                      onClick={() =>
                        setExpandedItem(isExpanded ? null : item.label)
                      }
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-4 py-3 text-body font-medium transition-colors min-h-[56px]",
                        "text-text-secondary hover:text-text-primary focus:text-text-primary hover:bg-white/5 focus:bg-white/5"
                      )}
                      aria-expanded={isExpanded}
                    >
                      {item.label}
                      <ChevronDown
                        size={20}
                        className={cn(
                          "transition-transform",
                          isExpanded && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {isExpanded && (
                      <ul className="ml-4 space-y-1 border-l border-[var(--border)] pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                "block rounded-lg px-4 py-3 text-body no-underline transition-colors min-h-[56px] flex items-center",
                                pathname === child.href
                                  ? "text-accent-cyan"
                                  : "text-text-secondary hover:text-text-primary focus:text-text-primary"
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-body font-medium no-underline transition-colors min-h-[56px] flex items-center",
                      pathname === item.href
                        ? "text-accent-cyan"
                        : "text-text-secondary hover:text-text-primary focus:text-text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA in drawer */}
          <div className="mt-6 pt-6 border-t border-[var(--border)]">
            <Button href="/contact" variant="primary" fullWidth>
              Book a Call
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
