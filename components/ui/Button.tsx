"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonBaseProps {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    external?: never;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent-cyan text-bg-primary font-semibold hover:brightness-110 focus:brightness-110",
  secondary:
    "bg-accent-violet text-bg-primary font-semibold hover:brightness-110 focus:brightness-110",
  outline:
    "border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-bg-primary focus:bg-accent-cyan focus:text-bg-primary",
  ghost:
    "text-text-secondary hover:text-text-primary focus:text-text-primary hover:bg-white/5 focus:bg-white/5",
};

const sizeStyles = {
  sm: "px-4 py-2 text-caption",
  md: "px-6 py-3 text-body",
  lg: "px-8 py-4 text-body",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg no-underline transition-all duration-200 min-h-[48px] min-w-[48px] font-body",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className
  );

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props as ButtonAsLink;

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
