import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "violet" | "default";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-caption font-medium",
        variant === "cyan" && "bg-accent-cyan/10 text-accent-cyan",
        variant === "violet" && "bg-accent-violet/10 text-accent-violet",
        variant === "default" && "bg-white/10 text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
