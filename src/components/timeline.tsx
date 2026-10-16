import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import type { EventEntry } from "@/lib/events";
import { cn } from "@/lib/utils";

export function Timeline({ entries, invert }: { entries: EventEntry[]; invert?: boolean }) {
  const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <ol className={cn("relative flex flex-col gap-0", invert ? "text-white" : "text-ink")}>
      {sorted.map((entry, i) => (
        <li key={entry.id} className="relative grid gap-6 pb-14 pl-10 last:pb-0 md:grid-cols-[220px_1fr] md:gap-10 md:pl-14">
          <span
            aria-hidden
            className={cn(
              "absolute left-[7px] top-2 bottom-0 w-px md:left-[11px]",
              i === sorted.length - 1 ? "bg-transparent" : invert ? "bg-charcoal" : "bg-line",
            )}
          />
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 md:left-1",
              invert ? "border-accent bg-night" : "border-accent bg-white",
            )}
          />
          <div className="md:pt-0">
            <p className={cn("font-heading text-lg font-bold tracking-tight", invert ? "text-white" : "text-ink")}>
              {entry.dateLabel}
            </p>
            <p className={cn("mt-1 text-[11px] font-semibold uppercase tracking-[0.2em]", invert ? "text-white/45" : "text-graphite")}>
              {entry.status === "documented" ? "Documented" : "Gallery entry"}
            </p>
          </div>
          <div
            className={cn(
              "rounded-card border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card motion-reduce:hover:translate-y-0",
              invert ? "border-charcoal bg-night" : "border-line bg-white",
            )}
          >
            <h3 className={cn("font-heading text-2xl font-bold", invert ? "text-white" : "text-ink")}>{entry.title}</h3>
            <p className={cn("mt-1 text-sm font-semibold", invert ? "text-white/55" : "text-graphite")}>{entry.venue}</p>
            <p className={cn("mt-4 max-w-xl text-[15px] leading-relaxed", invert ? "text-white/70" : "text-graphite")}>
              {entry.summary}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              {entry.source ? (
                <a
                  href={entry.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline",
                    invert ? "text-white" : "text-ink",
                  )}
                >
                  <FileText className="h-4 w-4 text-accent" />
                  {entry.source.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className={cn("text-sm", invert ? "text-white/50" : "text-graphite")}>{entry.statusNote}</span>
              )}
              <Link
                href="/events"
                className={cn(
                  "text-sm font-semibold underline-offset-4 hover:underline",
                  invert ? "text-accent" : "text-accent-deep",
                )}
              >
                Appearance details
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
