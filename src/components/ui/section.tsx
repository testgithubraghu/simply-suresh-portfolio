import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** surface treatment following the Ondo palette */
  surface?: "paper" | "mist" | "night" | "wash";
  tight?: boolean;
};

const surfaces: Record<NonNullable<SectionProps["surface"]>, string> = {
  paper: "bg-white text-ink",
  mist: "bg-mist text-ink",
  night: "bg-night text-white",
  wash: "bg-accent-wash text-ink",
};

export function Section({ id, children, className, surface = "paper", tight }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(surfaces[surface], tight ? "py-16 md:py-24" : "py-24 md:py-32", className)}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", className)}>
      <span aria-hidden className="inline-block h-[6px] w-[6px] rounded-full bg-accent" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  invert,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "max-w-3xl text-4xl leading-[1.05] md:text-5xl lg:text-[56px]",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p className={cn("max-w-2xl text-lg leading-relaxed", invert ? "text-white/70" : "text-graphite")}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
