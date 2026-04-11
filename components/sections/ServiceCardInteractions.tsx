"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";

interface ServiceCardInteractionsProps {
  title: string;
  videoUrl: string;
  learnMoreUrl?: string;
}

export function ServiceCardInteractions({
  title,
  videoUrl,
  learnMoreUrl,
}: ServiceCardInteractionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const watchDemoButton = videoUrl ? (
    <button
      onClick={() => setIsOpen(true)}
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2 text-body text-accent-cyan font-semibold hover:bg-accent-cyan/20 hover:border-accent-cyan focus:bg-accent-cyan/20 focus:border-accent-cyan transition-all min-h-[48px]"
      aria-label={`Watch demo video for ${title}`}
    >
      <Play size={18} aria-hidden="true" />
      Watch Demo
    </button>
  ) : (
    <span className="inline-flex items-center gap-2 text-body text-text-secondary/50">
      <Play size={18} aria-hidden="true" />
      Demo coming soon
    </span>
  );

  const learnMoreLink = learnMoreUrl ? (
    <Link
      href={learnMoreUrl}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-cyan text-bg-primary px-4 py-2 text-body font-semibold hover:brightness-110 focus:brightness-110 transition-all min-h-[48px]"
      aria-label={`Learn more about ${title}`}
    >
      Learn More
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  ) : null;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {watchDemoButton}
        {learnMoreLink}
      </div>
      {videoUrl && (
        <VideoModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          videoUrl={videoUrl}
          title={title}
        />
      )}
    </>
  );
}
