"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Indicator } from "@/data/types";

interface Props {
  indicators: Indicator[];
}

export default function CaseIndicators({ indicators }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {indicators.map((ind, i) => (
        <motion.div
          key={ind.id}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-xl border border-border/50 bg-surface p-5 hover:border-gold/30 transition-all group"
        >
          <p className="text-[11px] font-medium text-text-muted tracking-wide uppercase mb-4">
            {ind.name}
          </p>

          <div className="flex items-end justify-between gap-3">
            {/* Before */}
            <div className="text-center">
              <p className="text-2xl font-bold text-text-muted font-serif opacity-60">
                {ind.valueBefore}
              </p>
              <p className="text-[10px] text-text-muted mt-1">{ind.beforeLabel}</p>
            </div>

            {/* Arrow */}
            <div className="flex-1 flex items-center gap-1 pb-3">
              <div className="h-px flex-1 bg-gradient-to-r from-border to-gold/50" />
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                className="text-gold text-sm"
              >
                {ind.trend === "up" ? "↑" : "↓"}
              </motion.span>
            </div>

            {/* After */}
            <div className="text-center">
              <p
                className="text-2xl font-bold font-serif"
                style={{ color: ind.trend === "up" ? "#34d399" : "#34d399" }}
              >
                {ind.valueAfter}
              </p>
              <p className="text-[10px] text-text-muted mt-1">{ind.afterLabel}</p>
            </div>
          </div>

          {ind.note && (
            <p className="mt-3 text-[10px] text-text-muted leading-relaxed border-t border-border/40 pt-3">
              {ind.note}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
