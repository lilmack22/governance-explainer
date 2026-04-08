"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { interventionLadderContent as c } from "@/data/landingContent";

export default function InterventionLadder() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/30 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="mb-6 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-text-muted block mb-3">
            {c.eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-5">
            {c.headlineBefore}
            <br />
            <span className="italic text-text-secondary">{c.headlineEmphasis}</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mb-16 text-center">
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            {c.intro}
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {c.levels.map((level, i) => {
            const isUpstream = i === 4;
            const isOpen = expanded === i;

            return (
              <motion.div
                key={level.number}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full text-left rounded-xl border transition-all duration-300 overflow-hidden"
                  style={{
                    background: isOpen ? level.dimColor : "rgba(13,21,38,0.6)",
                    borderColor: isOpen ? level.border : "rgba(30,45,69,0.6)",
                  }}
                >
                  {/* Header row */}
                  <div className="flex items-center gap-5 px-5 py-4">
                    <span
                      className="font-serif text-2xl font-bold shrink-0 w-10 text-right"
                      style={{ color: `${level.color}40` }}
                    >
                      {level.number}
                    </span>
                    <div className="flex-1 flex items-center gap-4 flex-wrap">
                      <span
                        className="font-semibold text-sm"
                        style={{ color: isOpen ? level.color : "#94a3b8" }}
                      >
                        {level.label}
                      </span>
                      {!isOpen && (
                        <span className="text-xs text-text-muted italic hidden sm:block">
                          {level.description}
                        </span>
                      )}
                    </div>
                    {isUpstream && !isOpen && (
                      <span className="text-[10px] font-medium tracking-widest uppercase px-2 py-0.5 rounded-full bg-mechanism/10 text-mechanism border border-mechanism/25 shrink-0">
                        The missing layer
                      </span>
                    )}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-text-muted text-xs shrink-0"
                    >
                      ↓
                    </motion.span>
                  </div>

                  {/* Expanded content */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 pt-1"
                    >
                      <div className="ml-[58px]">
                        {/* Intuition line */}
                        <p
                          className="text-sm italic mb-5"
                          style={{ color: level.color }}
                        >
                          &ldquo;{level.intuition}&rdquo;
                        </p>

                        {/* Examples */}
                        <div className="space-y-2 mb-5">
                          {level.examples.map((ex) => (
                            <div
                              key={ex.name}
                              className="rounded-lg px-4 py-3 border border-border/30 bg-ink-950/40"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <p className="text-sm font-medium text-text-primary">
                                    {ex.name}
                                  </p>
                                  <p className="text-xs text-text-muted mt-0.5">
                                    {ex.note}
                                  </p>
                                </div>
                                <span className="text-[10px] text-text-muted border border-border/40 px-2 py-0.5 rounded shrink-0 mt-0.5">
                                  {ex.org}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* What it doesn't change */}
                        {level.unchanged && (
                          <div className="rounded-lg px-4 py-3 bg-ink-950/60 border border-border/20">
                            <p className="text-[10px] font-medium text-text-muted tracking-widest uppercase mb-1">
                              What it doesn&apos;t change
                            </p>
                            <p className="text-xs text-text-secondary leading-relaxed">
                              {level.unchanged}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Connector line to next section */}
        <ScrollReveal delay={0.4} className="mt-16 text-center">
          <p className="font-serif text-2xl text-text-secondary italic max-w-2xl mx-auto">
            &ldquo;{c.connectorQuote}&rdquo;
          </p>
          <div className="mt-6 w-px h-14 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
        </ScrollReveal>
      </div>
    </section>
  );
}
