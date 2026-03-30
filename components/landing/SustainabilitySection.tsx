"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contrasts = [
  {
    left: "Services are provided",
    right: "Institutions deliver services without external support",
  },
  {
    left: "Outcomes improve while the intervention is active",
    right: "Outcomes persist after the intervention ends",
  },
  {
    left: "External actors fill gaps",
    right: "Incentives within the system align with implementation",
  },
  {
    left: "Progress depends on continued donor commitment",
    right: "State capacity and accountability exist within the country",
  },
];

const phrases = [
  "Relief is not the same as resolution.",
  "Delivery is not the same as sustainability.",
  "An intervention can work without the system working.",
  "Temporary success is not the same as durable change.",
];

export default function SustainabilitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 relative overflow-hidden border-t border-border/30" ref={ref}>

      <div className="max-w-4xl mx-auto">

        <ScrollReveal className="mb-5 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-text-muted block mb-3">
            The Durability Problem
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
            The central question is not only
            <br />
            <span className="italic text-mechanism">whether it works.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="text-center mb-16">
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            It is whether it continues to work once external support is withdrawn.
            Vaccines, filters, and NGO clinics can improve outcomes enormously.
            But when underlying incentives, institutions, and state capacity remain unchanged,
            those gains depend on an indefinite external commitment that is rarely guaranteed.
          </p>
          <p className="mt-4 text-text-muted text-sm max-w-xl mx-auto leading-relaxed">
            Think of USAID funding suddenly dismantled. Donor priorities
            shifting. A new global crisis redirecting resources. The intervention
            ends — and so do the gains.
          </p>
        </ScrollReveal>

        {/* Short-run vs Long-run table */}
        <ScrollReveal className="mb-16">
          <div className="rounded-2xl overflow-hidden border border-border/40">
            <div className="grid grid-cols-2">
              <div className="px-5 py-3 bg-surface border-b border-border/40">
                <p className="text-[10px] font-medium tracking-widest uppercase text-text-muted">
                  Short-run relief / delivery
                </p>
              </div>
              <div className="px-5 py-3 bg-mechanism/5 border-b border-mechanism/20">
                <p className="text-[10px] font-medium tracking-widest uppercase text-mechanism/70">
                  Long-run self-sustaining systems
                </p>
              </div>
            </div>
            {contrasts.map((row, i) => (
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
              The positive case
            </p>
            <p className="font-serif text-xl md:text-2xl text-text-primary leading-relaxed mb-4">
              Accountable, high-capacity governments are different in kind —
              not just in degree.
            </p>
            <p className="text-text-secondary leading-relaxed text-sm">
              They are structured by design to aggregate information about
              citizens' needs and deliver services at scale to meet them.
              A capable, accountable state doesn't just solve one problem —
              it can solve many, simultaneously and sustainably, because it
              channels collective will into implementation. Getting that kind of
              governance in place is a tall order. But the social returns —
              immeasurable and far more durable than any single intervention —
              are what make it a worthy endeavor.
            </p>
          </div>
        </ScrollReveal>

        {/* Rotating phrases */}
        <ScrollReveal className="text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {phrases.map((phrase, i) => (
              <motion.div
                key={phrase}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="px-5 py-4 rounded-xl border border-border/40 bg-surface"
              >
                <p className="font-serif text-base italic text-text-secondary leading-snug">
                  "{phrase}"
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
