import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "light";
type Size = "md" | "lg" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-semibold tracking-tight transition-all duration-200 select-none whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-deep hover:shadow-tint active:translate-y-px",
  secondary:
    "bg-white text-ink border border-line hover:border-ink hover:shadow-card active:translate-y-px",
  ghost: "bg-transparent text-ink hover:bg-mist",
  dark: "bg-night text-white hover:bg-charcoal active:translate-y-px",
  light: "bg-white text-ink hover:bg-mist active:translate-y-px",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-[15px]",
  lg: "h-14 px-9 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function ButtonLink({ href, variant = "primary", size = "md", className, children, ...rest }: LinkProps) {
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("https:");
  return (
    <Link
      href={href}
      className={buttonClasses(variant, size, className)}
      {...(external ? { target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </Link>
  );
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({ variant = "primary", size = "md", className, type = "button", ...rest }: BtnProps) {
  return <button type={type} className={buttonClasses(variant, size, className)} {...rest} />;
}
