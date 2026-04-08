"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

interface ReferencedText {
  title: string;
  slug: string;
}

interface Props {
  puzzle: string;
  causalQuestion: string;
  onReveal: () => void;
  revealed: boolean;
  referencedTexts?: ReferencedText[];
}

export default function CausalQuestion({ puzzle, causalQuestion, onReveal, revealed, referencedTexts }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="py-20 px-6 text-center">
      {/* Puzzle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-12"
      >
        <span className="text-xs font-medium text-text-muted tracking-widest uppercase block mb-4">
          The Puzzle
        </span>
        <p className="font-serif text-xl md:text-2xl text-text-secondary italic leading-relaxed">
          {puzzle}
        </p>
        {referencedTexts && referencedTexts.length > 0 && (
          <div className="mt-5 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-[10px] text-text-muted tracking-widest uppercase">Theoretical basis</span>
            {referencedTexts.map((t) => (
              <Link
                key={t.slug}
                href={`/theory/texts/${t.slug}`}
                className="text-[11px] px-3 py-1 rounded-full border border-mechanism/30 text-mechanism hover:bg-mechanism/10 hover:border-mechanism/60 transition-all"
              >
                {t.title} →
              </Link>
            ))}
          </div>
        )}
      </motion.div>

      {/* Divider with icon */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={inView ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex flex-col items-center gap-2 my-8"
      >
        <div className="w-px h-10 bg-gradient-to-b from-border to-gold/40" />
        <div className="w-8 h-8 rounded-full border border-mechanism/40 flex items-center justify-center">
          <span className="text-mechanism text-sm">?</span>
        </div>
        <div className="w-px h-10 bg-gradient-to-t from-border to-gold/40" />
      </motion.div>

      {/* The big causal question */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto mb-12"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary leading-tight">
          {causalQuestion}
        </h2>
      </motion.div>

      {/* CTA to reveal diagram */}
      {!revealed && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          onClick={onReveal}
          className="group inline-flex items-center gap-3 px-7 py-3.5 bg-surface border border-mechanism/30 rounded-lg hover:border-mechanism/70 hover:bg-mechanism/5 transition-all text-sm text-text-primary"
        >
          <span>Show the causal mechanism</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-mechanism"
          >
            ↓
          </motion.span>
        </motion.button>
      )}

      {revealed && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-text-muted"
        >
          Click any node to explore the concept behind it →
        </motion.p>
      )}
    </div>
  );
}
