"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Click-to-load YouTube player: nothing from youtube.com is requested until
 * the visitor presses play (privacy-friendly + fast first paint).
 */
export function VideoEmbed({
  youtubeId,
  title,
  poster,
  className,
  rounded = "rounded-card",
}: {
  youtubeId: string;
  title: string;
  poster: { src: string; width: number; height: number; alt: string };
  className?: string;
  rounded?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("group relative overflow-hidden bg-night", rounded, className)}>
      <div className="relative aspect-video w-full">
        {loaded ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={poster.src}
              alt={poster.alt}
              width={poster.width}
              height={poster.height}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="absolute inset-0 flex items-center justify-center bg-night/25 transition-colors hover:bg-night/40"
              aria-label={`Play video: ${title}`}
            >
              <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 text-ink shadow-lift transition-transform duration-300 group-hover:scale-105">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </span>
            </button>
            <span className="absolute bottom-4 left-4 rounded-btn bg-night/70 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur">
              Watch the performance
            </span>
          </>
        )}
      </div>
    </div>
  );
}
