"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";

interface ServiceCardInteractionsProps {
  title: string;
  videoUrl: string;
}

export function ServiceCardInteractions({
  title,
  videoUrl,
}: ServiceCardInteractionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!videoUrl) {
    return (
      <span className="inline-flex items-center gap-2 text-body text-text-secondary/50">
        <Play size={18} aria-hidden="true" />
        Demo coming soon
      </span>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2 text-body text-accent-cyan font-semibold hover:bg-accent-cyan/20 hover:border-accent-cyan focus:bg-accent-cyan/20 focus:border-accent-cyan transition-all min-h-[48px]"
        aria-label={`Watch demo video for ${title}`}
      >
        <Play size={18} aria-hidden="true" />
        Watch Demo
      </button>
      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoUrl={videoUrl}
        title={title}
      />
    </>
  );
}
