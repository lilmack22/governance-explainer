"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { sustainabilityContent as c } from "@/data/landingContent";

export default function SustainabilitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 relative overflow-hidden border-t border-border/30" ref={ref}>

      <div className="max-w-4xl mx-auto">

        <ScrollReveal className="mb-5 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-text-muted block mb-3">
            {c.eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
            {c.headlineBefore}
            <br />
            <span className="italic text-mechanism">{c.headlineEmphasis}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="text-center mb-16">
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            {c.intro}
          </p>
          <p className="mt-4 text-text-muted text-sm max-w-xl mx-auto leading-relaxed">
            {c.introNote}
          </p>
        </ScrollReveal>

        {/* Short-run vs Long-run table */}
        <ScrollReveal className="mb-16">
          <div className="rounded-2xl overflow-hidden border border-border/40">
            <div className="grid grid-cols-2">
              <div className="px-5 py-3 bg-surface border-b border-border/40">
                <p className="text-[10px] font-medium tracking-widest uppercase text-text-muted">
                  {c.tableHeaders.left}
                </p>
              </div>
              <div className="px-5 py-3 bg-mechanism/5 border-b border-mechanism/20">
                <p className="text-[10px] font-medium tracking-widest uppercase text-mechanism/70">
                  {c.tableHeaders.right}
                </p>
              </div>
            </div>
            {c.contrasts.map((row, i) => (
              <motion.div
                key={row.left}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="grid grid-cols-2 border-b border-border/20 last:border-0"
              >
                <div className="px-5 py-4 bg-surface/50 flex items-center gap-3">
                  <span className="text-text-muted text-lg shrink-0">◦</span>
                  <p className="text-sm text-text-secondary">{row.left}</p>
                </div>
                <div className="px-5 py-4 bg-mechanism/3 flex items-center gap-3">
                  <span className="text-mechanism text-lg shrink-0">✦</span>
                  <p className="text-sm text-text-primary">{row.right}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* The positive case for governance */}
        <ScrollReveal className="mb-16">
          <div className="rounded-2xl border border-outcome/20 bg-outcome/5 p-8 md:p-10">
            <p className="text-[10px] font-medium tracking-widest uppercase text-outcome/70 mb-4">
              {c.positiveCaseLabel}
            </p>
            <p className="font-serif text-xl md:text-2xl text-text-primary leading-relaxed mb-4">
              {c.positiveCaseHeadline}
            </p>
            <p className="text-text-secondary leading-relaxed text-sm">
              {c.positiveCaseBody}
            </p>
          </div>
        </ScrollReveal>

        {/* Closing quote cards */}
        <ScrollReveal className="text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.phrases.map((phrase, i) => (
              <motion.div
                key={phrase}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="px-5 py-4 rounded-xl border border-border/40 bg-surface"
              >
                <p className="font-serif text-base italic text-text-secondary leading-snug">
                  &ldquo;{phrase}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
