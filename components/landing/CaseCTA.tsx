"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function CaseCTA() {
  return (
    <section className="py-28 px-6 border-t border-border/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-widest uppercase text-text-muted block mb-4">
            From argument to evidence
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
            Now see the argument{" "}
            <span className="italic text-gold">inside a real case.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed mb-10">
            The upstream logic is easier to accept in the abstract. It becomes
            unavoidable when you trace it through a specific country — through
            real events, real mechanisms, and real trade-offs.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {/* Rwanda card */}
          <div className="rounded-2xl border border-gold/25 bg-surface p-8 mb-6 text-left hover:border-gold/50 transition-all group">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🇷🇼</span>
                <div>
                  <p className="font-serif font-bold text-xl text-text-primary">Rwanda</p>
                  <p className="text-xs text-text-muted">East Africa · Authoritarian development · Post-genocide transformation</p>
                </div>
              </div>
              <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20 shrink-0">
                Live
              </span>
            </div>
            <p className="text-sm text-text-secondary italic leading-relaxed mb-5">
              "From genocide and state collapse in 1994 to one of Africa's most capable
              states by 2024. What explains this transformation — and what does it cost?"
            </p>
            <p className="text-xs text-text-muted mb-5 leading-relaxed">
              Explore an interactive causal diagram tracing political settlement, elite bargain,
              state capacity, and developmental governance — with concept drill-downs linking each
              node to key scholars, theories, and World Bank implications.
            </p>
            <Link
              href="/cases/rwanda"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-ink-950 font-semibold rounded-lg hover:bg-gold-light transition-all text-sm shadow-md shadow-gold/20"
            >
              Start the Rwanda case
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <Link
            href="/cases"
            className="text-sm text-text-muted hover:text-text-secondary transition-colors underline underline-offset-4"
          >
            Browse all case studies →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
