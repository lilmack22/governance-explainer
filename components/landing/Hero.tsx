"use client";

import { motion } from "framer-motion";
import { heroContent as c } from "@/data/landingContent";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle top separator line only */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-surface text-text-muted text-xs font-medium tracking-widest uppercase mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-mechanism opacity-70" />
          {c.eyebrow}
        </motion.div>

        {/* Parable opener */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-text-muted text-base italic mb-6 tracking-wide"
        >
          {c.parableOpener}
        </motion.p>

        {/* Parable body */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-2xl md:text-3xl text-text-primary leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          {c.parableBody1}{" "}
          <span className="italic text-text-secondary">{c.parableBody1Emphasis}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="font-serif text-2xl md:text-3xl text-text-primary leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          {c.parableBody2Before}{" "}
          <span className="text-mechanism italic">{c.parableBody2Emphasis}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="font-serif text-xl md:text-2xl text-text-secondary italic leading-relaxed mb-14 max-w-2xl mx-auto text-center"
        >
          {c.parableDialogue}
          <br /><br />
          <span className="text-mechanism not-italic font-medium">{c.parableResponse}</span>
        </motion.div>

        {/* Scroll transition */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center my-10 origin-top"
        >
          <div className="w-px h-10 bg-gradient-to-b from-border/60 to-transparent" />
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut", delay: 1.2 }}
            className="text-text-muted/50 text-xs mt-1 select-none"
          >
            ↓
          </motion.div>
        </motion.div>

        {/* The turn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5 mb-14"
        >
          <p className="font-sans text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            {c.argument1}
          </p>
          <p className="font-serif text-2xl md:text-3xl text-text-primary font-semibold leading-relaxed max-w-2xl mx-auto">
            {c.argument2}
          </p>
        </motion.div>

        {/* Big thesis line */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
        >
          {c.thesisBefore}
          <br />
          <span className="italic text-mechanism">{c.thesisEmphasis}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="text-text-secondary text-base max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {c.subheading}
        </motion.p>

        {/* Scroll nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted tracking-widest uppercase">
            {c.scrollNudge}
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-text-muted to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
