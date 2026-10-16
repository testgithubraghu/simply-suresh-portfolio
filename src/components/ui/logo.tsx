import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Brand glyph: an open four-point spark — a nod to the "open" geometry of the
 * Ondo mark, redrawn for an entertainer. Wordmark set in Gellix 700.
 */
export function SparkMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("h-6 w-6", className)} fill="none">
      <path
        d="M12 1.5c.9 4.9 2.3 7.6 4.2 9.1 1.6 1.3 3.6 1.9 6.3 2.4-4.9.9-7.6 2.3-9.1 4.2-1.3 1.6-1.9 3.6-2.4 6.3-.9-4.9-2.3-7.6-4.2-9.1C5.2 13.1 3.2 12.5.5 12c4.9-.9 7.6-2.3 9.1-4.2C10.9 6.2 11.5 4.2 12 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Wordmark({
  invert,
  className,
  href = "/",
}: {
  invert?: boolean;
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-btn focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        className,
      )}
      aria-label="Simply Suresh — home"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-45">
        <SparkMark className="h-4 w-4" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[17px] font-bold tracking-[0.14em]",
            invert ? "text-white" : "text-ink",
          )}
        >
          SIMPLY SURESH
        </span>
        <span className={cn("mt-1 text-[10px] font-semibold tracking-[0.28em]", invert ? "text-white/50" : "text-graphite")}>
          MAGICIAN · ENTERTAINER
        </span>
      </span>
    </Link>
  );
}
