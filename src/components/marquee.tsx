"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SparkMark } from "@/components/ui/logo";

const phrases = [
  "Live Magic",
  "Balloon Modelling",
  "Mind Reading",
  "Stage Shows",
  "Birthday Parties",
  "School Programmes",
  "Community Events",
  "Moments of Wonder",
];

export function Marquee() {
  const reduce = useReducedMotion();
  const track = [...phrases, ...phrases];

  return (
    <div className="overflow-hidden border-y border-line bg-mist py-5" aria-hidden="true">
      {reduce ? (
        <div className="container-site flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {phrases.map((p) => (
            <span key={p} className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.22em] text-graphite">
              {p} <SparkMark className="h-3 w-3 text-accent" />
            </span>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex w-max items-center gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        >
          {track.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.22em] text-graphite"
            >
              {p}
              <SparkMark className="h-3.5 w-3.5 text-accent" />
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
