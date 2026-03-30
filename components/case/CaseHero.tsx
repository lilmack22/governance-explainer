"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/types";

interface Props {
  caseStudy: CaseStudy;
}

export default function CaseHero({ caseStudy }: Props) {
  return (
    <section className="relative min-h-[65vh] flex items-end pb-16 pt-32 px-6 overflow-hidden">
      {/* Background ambience */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900/40 to-ink-950" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-mechanism/4 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-upstream/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs text-text-muted mb-8"
        >
          <span>Case Explorer</span>
          <span>/</span>
          <span className="text-text-secondary">{caseStudy.country}</span>
        </motion.div>

        {/* Flag + region */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-4xl">{caseStudy.flag}</span>
          <div>
            <span className="text-xs font-medium text-text-muted tracking-widest uppercase">
              {caseStudy.region}
            </span>
          </div>
        </motion.div>

        {/* Country name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl font-bold text-text-primary mb-4 leading-none"
        >
          {caseStudy.country}
        </motion.h1>

        {/* Transformation headline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-2xl text-mechanism font-medium italic mb-4 max-w-3xl"
        >
          {caseStudy.transformationHeadline}
        </motion.p>

        {/* Transformation subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-text-secondary max-w-2xl leading-relaxed"
        >
          {caseStudy.transformationSubtext}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="mt-10 h-px w-24 bg-gradient-to-r from-gold to-transparent"
        />
      </div>
    </section>
  );
}
