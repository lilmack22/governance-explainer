"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
          Introduction
        </motion.div>

        {/* Parable opener */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-text-muted text-base italic mb-6 tracking-wide"
        >
          There is an old public health parable.
        </motion.p>

        {/* Parable body */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-2xl md:text-3xl text-text-primary leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          You are standing by a river. People are floating past, struggling.
          You jump in. You pull them out. Then more come.{" "}
          <span className="italic text-text-secondary">More and more.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="font-serif text-2xl md:text-3xl text-text-primary leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          Then someone stops — and starts running{" "}
          <span className="text-mechanism italic">upstream.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="font-serif text-xl md:text-2xl text-text-secondary italic leading-relaxed mb-14 max-w-2xl mx-auto border-l-2 border-mechanism/40 pl-5 text-left mx-auto"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          "Where are you going? We need help here!"
          <br />
          <span className="text-mechanism not-italic font-medium">"I'm going to find out who is pushing people into the river."</span>
        </motion.div>

        {/* Narrative pause */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="flex items-center justify-center gap-3 my-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-text-muted/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-text-muted/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-text-muted/40" />
        </motion.div>

        {/* The turn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 mb-14"
        >
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Most of what we call "development" happens at the riverbank.
            We filter water at the cup. We deliver vaccines. We build
            clinics. We give loans. These things matter — they save lives.
          </p>
          <p className="text-text-primary text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            But they do not change who is upstream, or why they keep pushing.
          </p>
        </motion.div>

        {/* Big thesis line */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
        >
          Most development problems
          <br />
          <span className="italic text-mechanism">have political roots.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="text-text-secondary text-base max-w-xl mx-auto mb-12 leading-relaxed"
        >
          This is an argument for going upstream — for understanding incentives,
          institutions, power, and governance as causes, not just context.
        </motion.p>

        {/* Scroll nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted tracking-widest uppercase">
            The argument
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
