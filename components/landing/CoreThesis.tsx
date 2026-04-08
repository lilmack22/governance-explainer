"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { coreThesisContent as c } from "@/data/landingContent";

export default function CoreThesis() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 px-6 relative border-t border-border/30" ref={ref}>

      <div className="max-w-5xl mx-auto relative z-10">

        <ScrollReveal className="text-center mb-6">
          <span className="text-xs font-medium tracking-widest uppercase text-text-muted block mb-3">
            {c.eyebrow}
          </span>
        </ScrollReveal>

        {/* Big statement */}
        <ScrollReveal delay={0.05} className="text-center mb-8">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight">
            {c.headlineBefore}
            <br />
            <span className="italic text-mechanism">{c.headlineEmphasis}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="text-center mb-20">
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            {c.intro}
          </p>
        </ScrollReveal>

        {/* Mechanism table */}
        <div className="space-y-3 mb-20">
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-2 pb-2">
              {c.tableHeaders.map((h, i) => (
                <p key={h} className={`text-[10px] font-medium tracking-widest uppercase px-3 ${i === 2 ? "text-mechanism/70" : "text-text-muted"}`}>
                  {h}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {c.mechanisms.map((row, i) => (
            <motion.div
              key={row.domain}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden"
            >
              <div className="px-4 py-4 bg-surface border border-border/40 flex items-center">
                <p className="text-sm font-semibold text-text-primary">{row.domain}</p>
              </div>
              <div className="px-4 py-4 bg-surface border border-border/30 flex items-center">
                <p className="text-xs text-text-secondary leading-relaxed">{row.surface}</p>
              </div>
              <div className="px-4 py-4 bg-mechanism/4 border border-mechanism/15 flex items-center">
                <p className="text-xs text-text-secondary leading-relaxed italic">{row.root}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What political science offers */}
        <ScrollReveal className="mb-20">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary text-center mb-10">
            {c.polsciSectionHeadline}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.polsciConcepts.map((item, i) => (
              <motion.div
                key={item.concept}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                className="rounded-xl border p-6"
                style={{ borderColor: `${item.color}30`, background: `${item.color}06` }}
              >
                <p className="font-serif font-bold text-base mb-3" style={{ color: item.color }}>
                  {item.concept}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Final thesis */}
        <ScrollReveal>
          <div className="text-center">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/50 mx-auto mb-8" />
            <p className="font-serif text-2xl md:text-3xl text-text-primary italic leading-relaxed max-w-3xl mx-auto">
              {c.finalThesisBefore}{" "}
              <span className="text-mechanism not-italic font-bold">{c.finalThesisEmphasis}</span>
            </p>
            <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent mx-auto mt-8" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
