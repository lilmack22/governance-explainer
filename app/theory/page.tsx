"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import theorySections from "@/data/theory-explorer";
import type { TheorySection, TheoryEntry } from "@/data/theory-explorer";
import { getText } from "@/data/texts/index";
import { getConcept } from "@/data/concepts";

const SECTION_IDS = ["development", "democratization", "conflict"] as const;

export default function TheoryExplorerPage() {
  const [activeSection, setActiveSection] = useState<string>("development");

  const current = theorySections.find((s) => s.id === activeSection)!;

  return (
    <div className="min-h-screen">
      {/* ── Page header ───────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <span className="text-[10px] font-medium text-text-muted tracking-widest uppercase block mb-3">
          Theory Explorer
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-3 leading-tight">
          Ideas that explain political outcomes
        </h1>
        <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
          Each entry below names a core idea in plain language first. The theoretical framework,
          associated scholars, and technical vocabulary appear in the description — so you can start
          with the concept, not the jargon.
        </p>
      </div>

      {/* ── Tab bar ───────────────────────────────────────── */}
      <div className="sticky top-14 z-30 border-b border-border/40 bg-ink-950/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-0">
            {theorySections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`relative py-4 pr-8 text-xs font-medium tracking-wide uppercase transition-colors ${
                  activeSection === s.id
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {s.question}
                {activeSection === s.id && (
                  <motion.span
                    layoutId="theory-tab-indicator"
                    className="absolute bottom-0 left-0 right-8 h-[2px] bg-mechanism"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            {current.groups.map((group) => (
              <div key={group.label}>
                {/* Group header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] font-medium text-text-muted tracking-widest uppercase">
                    {group.label}
                  </span>
                  <div className="flex-1 h-px bg-border/40" />
                </div>

                <div className="space-y-4">
                  {group.entries.map((entry, i) => (
                    <TheoryCard key={entry.id} entry={entry} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function TheoryCard({ entry, index }: { entry: TheoryEntry; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const linkedTexts = (entry.textSlugs ?? [])
    .map((slug) => ({ slug, text: getText(slug) }))
    .filter((t) => t.text != null);

  const linkedConcepts = (entry.conceptSlugs ?? [])
    .map((slug) => ({ slug, concept: getConcept(slug) }))
    .filter((c) => c.concept != null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl border border-border/50 bg-surface overflow-hidden"
    >
      {/* Card header — always visible */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left px-6 py-5 hover:bg-surface-raised transition-colors group"
      >
        <div className="flex items-start justify-between gap-4">
          <p className="font-serif text-base font-semibold text-text-primary leading-snug group-hover:text-white transition-colors">
            {entry.idea}
          </p>
          <span
            className={`shrink-0 mt-0.5 text-text-muted text-xs transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </div>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 border-t border-border/30 pt-4 space-y-4">
              <p className="text-sm text-text-secondary leading-relaxed">
                {entry.mechanism}
              </p>

              {/* Chips: concepts + texts */}
              {(linkedConcepts.length > 0 || linkedTexts.length > 0) && (
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-[10px] text-text-muted self-center tracking-widest uppercase mr-1">
                    Explore
                  </span>
                  {linkedConcepts.map(({ slug, concept }) => (
                    <Link
                      key={slug}
                      href={`/theory/concepts/${slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11px] px-3 py-1 rounded-full border border-border/60 text-text-secondary hover:bg-surface-raised hover:border-border hover:text-text-primary transition-all"
                    >
                      {concept!.name}
                    </Link>
                  ))}
                  {linkedTexts.map(({ slug, text }) => (
                    <Link
                      key={slug}
                      href={`/theory/texts/${slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11px] px-3 py-1 rounded-full border border-mechanism/30 text-mechanism hover:bg-mechanism/10 hover:border-mechanism/60 transition-all"
                    >
                      {text!.shortTitle} →
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
