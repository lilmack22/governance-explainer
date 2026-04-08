"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { bandaidContent as c } from "@/data/landingContent";

export default function BandaidSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 relative overflow-hidden border-t border-border/30" ref={ref}>

      <div className="max-w-5xl mx-auto">

        {/* Section intro */}
        <ScrollReveal className="mb-20 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-text-muted block mb-3">
            {c.eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
            {c.headlineBefore}
            <br />
            <span className="italic text-mechanism">{c.headlineEmphasis}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            {c.intro}
          </p>
        </ScrollReveal>

        {/* Paired symptom/cause rows */}
        <div className="space-y-4 mb-24">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center pb-3">
                <span className="text-[10px] font-medium tracking-widest uppercase text-text-muted">
                  {c.tableHeaders.left}
                </span>
              </div>
              <div className="text-center pb-3">
                <span className="text-[10px] font-medium tracking-widest uppercase text-mechanism/70">
                  {c.tableHeaders.right}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {c.downstream.map((row, i) => (
            <motion.div
              key={row.symptom}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-2"
            >
              {/* Symptom */}
              <div className="rounded-lg p-4 bg-surface border border-border/40 flex items-center gap-3">
                <span className="text-text-muted text-lg shrink-0">→</span>
                <p className="text-sm text-text-secondary leading-snug">{row.symptom}</p>
              </div>
              {/* Root cause */}
              <div className="rounded-lg p-4 bg-surface border border-border/50 flex items-start gap-3">
                <span className="text-accent text-lg mt-0.5 shrink-0">↑</span>
                <p className="text-sm text-text-primary leading-snug">{row.cause}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The upstream layer */}
        <ScrollReveal className="mb-10 text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {c.upstreamHeadline}
          </h3>
          <p className="text-text-secondary max-w-xl mx-auto">
            {c.upstreamSubhead}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-20">
          {c.upstream.map((item, i) => (
            <ScrollReveal key={item.label} delay={0.06 * i}>
              <div className="p-5 rounded-xl border border-mechanism/20 bg-gradient-to-br from-gold/5 to-transparent h-full">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <p className="text-sm font-semibold text-mechanism leading-snug mb-1.5">{item.label}</p>
                <p className="text-xs text-text-muted leading-relaxed">{item.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pull quote */}
        <ScrollReveal>
          <div className="relative border border-mechanism/20 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-gold/4 to-transparent text-center">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 bg-ink-950 text-mechanism/30 text-6xl font-serif leading-none">&ldquo;</span>
            <p className="font-serif text-xl md:text-2xl text-text-primary italic leading-snug max-w-3xl mx-auto">
              {c.pullQuote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
