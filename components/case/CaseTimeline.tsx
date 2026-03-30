"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { TimelineEvent } from "@/data/types";

const typeConfig: Record<TimelineEvent["type"], { color: string; bg: string; dot: string }> = {
  crisis:     { color: "#ef4444", bg: "rgba(239,68,68,0.08)",   dot: "bg-red-500" },
  transition: { color: "#38bdf8", bg: "rgba(56,189,248,0.08)", dot: "bg-sky-400" },
  reform:     { color: "#8b5cf6", bg: "rgba(139,92,246,0.08)", dot: "bg-violet-500" },
  outcome:    { color: "#34d399", bg: "rgba(52,211,153,0.08)", dot: "bg-emerald-400" },
  tension:    { color: "#f59e0b", bg: "rgba(245,158,11,0.08)", dot: "bg-amber-500" },
};

interface Props {
  events: TimelineEvent[];
}

export default function CaseTimeline({ events }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative">
      {/* Vertical line */}
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/40 via-border to-transparent" />

      <div className="space-y-8 pl-8">
        {events.map((event, i) => {
          const cfg = typeConfig[event.type];
          return (
            <motion.div
              key={`${event.year}-${i}`}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{
                duration: 0.5,
                delay: inView ? i * 0.07 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Dot */}
              <div
                className={`absolute -left-8 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-ink-950 ${cfg.dot} ring-2 ring-ink-950`}
              />

              {/* Card */}
              <div
                className="rounded-lg p-4 border transition-all hover:scale-[1.01]"
                style={{
                  background: cfg.bg,
                  borderColor: `${cfg.color}33`,
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-1.5">
                  <p
                    className="font-serif font-semibold text-sm"
                    style={{ color: cfg.color }}
                  >
                    {event.label}
                  </p>
                  <span className="text-xs font-mono text-text-muted shrink-0 mt-0.5">
                    {event.year}
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 pl-8 flex flex-wrap gap-3">
        {Object.entries(typeConfig).map(([type, cfg]) => (
          <div key={type} className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${cfg.dot}`} />
            <span className="text-[10px] text-text-muted capitalize">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
