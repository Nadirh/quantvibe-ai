import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "text-body",
  md: "text-h3-mobile lg:text-h3",
  lg: "text-h2-mobile lg:text-h2",
};

export function Wordmark({ className, size = "md" }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-heading font-bold tracking-[0.02em] whitespace-nowrap",
        sizeClasses[size],
        className
      )}
    >
      <span className="text-text-primary">Quant</span>
      <span className="text-accent-cyan">Vibe</span>
      <span className="text-text-secondary tracking-[0.15em] ml-1 text-[0.7em]">
        AI
      </span>
    </span>
  );
}
