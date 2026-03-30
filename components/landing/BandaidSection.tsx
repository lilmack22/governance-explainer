"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const downstream = [
  {
    symptom: "Clinics without medicine or accountable staff",
    cause: "Health worker incentives not aligned with delivery; no political accountability for outcomes",
  },
  {
    symptom: "Schools where teachers don't show up",
    cause: "Teacher attendance monitored by no one with power to act; local elite capture of payroll",
  },
  {
    symptom: "Anti-poverty programs captured by local leaders",
    cause: "Patronage systems route benefits to allies; beneficiary lists are political tools",
  },
  {
    symptom: "Anti-deforestation rules without enforcement",
    cause: "Timber rents benefit powerful actors who control enforcement institutions",
  },
  {
    symptom: "Anti-trafficking laws with no prosecutions",
    cause: "Trafficking networks pay or coerce police and prosecutors; impunity is structural",
  },
  {
    symptom: "Police reform that doesn't change behavior",
    cause: "Political control of coercive actors remains unchanged; reform is cosmetic",
  },
];

const upstream = [
  { icon: "🎯", label: "What incentives does the leader face?", sub: "Accountability to citizens, or to a narrow coalition?" },
  { icon: "🏛️", label: "Who holds power, and on what terms?", sub: "The political settlement — who wins, who is bought off, who is excluded" },
  { icon: "⚙️", label: "Can the state actually implement policy?", sub: "State capacity: bureaucracy, finances, reach, competence" },
  { icon: "🔗", label: "What informal rules govern behavior?", sub: "Patronage networks, coercion, customary norms that override formal law" },
  { icon: "💰", label: "Who profits from the status quo?", sub: "Rents from land, resources, illicit flows — and how they shape politics" },
  { icon: "⚖️", label: "Is violence politically useful?", sub: "Where conflict is a tool for resource extraction or power maintenance" },
];

export default function BandaidSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-800/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto">

        {/* Section intro */}
        <ScrollReveal className="mb-20 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-text-muted block mb-3">
            Symptom vs. System
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
            The problem isn't that we're ignorant.
            <br />
            <span className="italic text-gold">The problem is where we look.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Most development failures have two faces. One is visible — the broken clinic,
            the absent teacher, the empty legal promise. The other is hidden upstream:
            the incentive, the institution, the power arrangement sustaining the failure.
          </p>
        </ScrollReveal>

        {/* Paired symptom/cause rows */}
        <div className="space-y-4 mb-24">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center pb-3">
                <span className="text-[10px] font-medium tracking-widest uppercase text-text-muted">
                  What we see
                </span>
              </div>
              <div className="text-center pb-3">
                <span className="text-[10px] font-medium tracking-widest uppercase text-gold/70">
                  What sustains it
                </span>
              </div>
            </div>
          </ScrollReveal>

          {downstream.map((row, i) => (
            <motion.div
              key={row.symptom}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-2"
            >
              {/* Symptom */}
              <div className="rounded-lg p-4 bg-surface border border-border/40 flex items-start gap-3">
                <span className="text-text-muted text-lg mt-0.5 shrink-0">→</span>
                <p className="text-sm text-text-secondary leading-snug">{row.symptom}</p>
              </div>
              {/* Root cause */}
              <div className="rounded-lg p-4 bg-gold/5 border border-gold/20 flex items-start gap-3">
                <span className="text-gold text-lg mt-0.5 shrink-0">↑</span>
                <p className="text-sm text-text-secondary leading-snug italic">{row.cause}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The upstream layer */}
        <ScrollReveal className="mb-10 text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">
            The upstream layer asks different questions.
          </h3>
          <p className="text-text-secondary max-w-xl mx-auto">
            Not "why is the clinic broken?" but "what political arrangement
            makes a functioning clinic impossible?"
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-20">
          {upstream.map((item, i) => (
            <ScrollReveal key={item.label} delay={0.06 * i}>
              <div className="p-5 rounded-xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent h-full">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <p className="text-sm font-semibold text-gold leading-snug mb-1.5">{item.label}</p>
                <p className="text-xs text-text-muted leading-relaxed">{item.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pull quote */}
        <ScrollReveal>
          <div className="relative border border-gold/20 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-gold/4 to-transparent text-center">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 bg-ink-950 text-gold/30 text-6xl font-serif leading-none">"</span>
            <p className="font-serif text-xl md:text-2xl text-text-primary italic leading-snug max-w-3xl mx-auto">
              Political science matters for development work because many outcomes
              that look like sector problems are actually governance problems.
              Governance structures whether policy is implemented, who benefits,
              whether violence is contained, and whether development gains last.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
