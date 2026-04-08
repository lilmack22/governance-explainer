"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { caseCTAContent as c } from "@/data/landingContent";

export default function CaseCTA() {
  const fc = c.featuredCase;

  return (
    <section className="py-28 px-6 border-t border-border/30 relative overflow-hidden">

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <span className="text-xs font-medium tracking-widest uppercase text-text-muted block mb-4">
            {c.eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
            {c.headlineBefore}{" "}
            <span className="italic text-mechanism">{c.headlineEmphasis}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed mb-10">
            {c.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {/* Featured case card */}
          <div className="rounded-2xl border border-mechanism/25 bg-surface p-8 mb-6 text-left hover:border-mechanism/50 transition-all group">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{fc.flag}</span>
                <div>
                  <p className="font-serif font-bold text-xl text-text-primary">{fc.title}</p>
                  <p className="text-xs text-text-muted">{fc.subtitle}</p>
                </div>
              </div>
              <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-mechanism/10 text-mechanism border border-mechanism/20 shrink-0">
                {fc.statusBadge}
              </span>
            </div>
            <p className="text-sm text-text-secondary italic leading-relaxed mb-5">
              &ldquo;{fc.description}&rdquo;
            </p>
            <p className="text-xs text-text-muted mb-5 leading-relaxed">
              {fc.details}
            </p>
            <Link
              href={fc.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-mechanism text-ink-950 font-semibold rounded-lg hover:bg-mechanism-light transition-all text-sm shadow-md shadow-gold/20"
            >
              {fc.ctaButton}
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
            href={c.browseAllHref}
            className="text-sm text-text-muted hover:text-text-secondary transition-colors underline underline-offset-4"
          >
            {c.browseAllLabel}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
