"use client";

import { useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      // Focus the close button after mount
      setTimeout(() => closeButtonRef.current?.focus(), 0);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, handleKeyDown]);

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
      };

  const panelAnimation = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.2 },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Video demo: ${title}`}
          {...animationProps}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            className={cn(
              "relative w-full max-w-4xl rounded-xl bg-bg-card border border-[var(--border)] overflow-hidden"
            )}
            {...panelAnimation}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
              <h3 className="font-heading text-h3-mobile lg:text-h3 text-text-primary">
                {title}
              </h3>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="flex items-center justify-center min-h-[48px] min-w-[48px] rounded-lg text-text-secondary hover:text-text-primary focus:text-text-primary transition-colors"
                aria-label="Close video"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            {/* Video */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={videoUrl}
                title={`Demo video: ${title}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
