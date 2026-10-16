"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from "@/lib/gallery";
import { cn } from "@/lib/utils";

type Filter = "all" | GalleryCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Media" },
  ...galleryCategories,
];

export function GalleryBrowser() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const items = filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setActive((cur) => {
        if (cur === null) return cur;
        return (cur + dir + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (active !== null) closeRef.current?.focus();
  }, [active]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      <div role="group" aria-label="Filter gallery media" className="flex flex-wrap gap-3">
        {filters.map((f) => {
          const selected = filter === f.id;
          const count = f.id === "all" ? galleryItems.length : galleryItems.filter((i) => i.category === f.id).length;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFilter(f.id);
                setActive(null);
              }}
              aria-pressed={selected}
              className={cn(
                "rounded-btn border px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-200",
                selected
                  ? "border-night bg-night text-white shadow-card"
                  : "border-line bg-white text-graphite hover:border-ink hover:text-ink",
              )}
            >
              {f.label}
              <span className={cn("ml-2 text-xs", selected ? "text-white/50" : "text-graphite/60")}>{count}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout={!reduce} className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.li
              key={item.id}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, delay: reduce ? 0 : Math.min(i * 0.05, 0.3) }}
              className="mb-6 break-inside-avoid"
            >
              <GalleryTile item={item} onOpen={() => setActive(i)} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {current ? (
          <Lightbox
            item={current}
            index={(active ?? 0) + 1}
            total={items.length}
            closeRef={closeRef}
            onClose={close}
            onStep={step}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

function GalleryTile({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block w-full overflow-hidden rounded-card bg-mist text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      aria-label={`Open ${item.kind === "video" ? "video" : "photograph"}: ${item.title}`}
    >
      <Image
        src={item.src}
        alt={item.title}
        width={item.width}
        height={item.height}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          {item.kind === "video" ? <Play className="h-3 w-3 fill-current" /> : null}
          {item.kind === "video" ? "Video" : "Photograph"}
        </span>
        <span className="mt-2 block font-heading text-lg font-bold text-white">{item.title}</span>
      </span>
      {item.representative ? (
        <span className="absolute right-4 top-4 rounded-btn bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-graphite backdrop-blur">
          Representative
        </span>
      ) : null}
    </button>
  );
}

function Lightbox({
  item,
  index,
  total,
  onClose,
  onStep,
  closeRef,
}: {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
  closeRef: React.RefObject<HTMLButtonElement | null>;
}) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — media viewer`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[70] flex flex-col bg-night/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-6 py-5 text-white" onClick={(e) => e.stopPropagation()}>
        <p className="text-sm font-semibold tracking-wide text-white/60">
          {index} / {total}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onStep(-1)}
            aria-label="Previous item"
            className="grid h-11 w-11 place-items-center rounded-full border border-charcoal hover:border-white/60"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => onStep(1)}
            aria-label="Next item"
            className="grid h-11 w-11 place-items-center rounded-full border border-charcoal hover:border-white/60"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close media viewer"
            className="ml-2 grid h-11 w-11 place-items-center rounded-full bg-white text-ink hover:bg-mist"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className="flex flex-1 items-center justify-center overflow-auto px-6 pb-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-5xl">
          <div className="overflow-hidden rounded-card bg-black shadow-lift">
            {item.kind === "video" && item.youtubeId ? (
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <Image
                src={item.src}
                alt={item.title}
                width={item.width}
                height={item.height}
                sizes="100vw"
                className="max-h-[65vh] w-full object-contain"
              />
            )}
          </div>
          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="font-heading text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-white/60">{item.caption}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/40">{item.credit}</p>
            </div>
            {item.youtubeId ? (
              <a
                href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-btn border border-charcoal px-5 py-3 text-sm font-semibold text-white hover:border-white/60"
              >
                Open on YouTube <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
