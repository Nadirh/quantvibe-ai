import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-xl border border-[var(--border)] bg-bg-card p-6 md:p-8",
        className
      )}
    >
      {children}
    </Tag>
  );
}
