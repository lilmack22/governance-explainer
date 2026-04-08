"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Users, MapPin, AlertTriangle, ArrowRight } from "lucide-react";
import { getConcept } from "@/data/concepts";
import type { ConceptDrillDown } from "@/data/types";
import Link from "next/link";

interface Props {
  conceptId: string | null;
  onClose: () => void;
}

export default function ConceptPanel({ conceptId, onClose }: Props) {
  const concept = conceptId ? getConcept(conceptId) : null;

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {concept && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-ink-950/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.aside
            key="panel"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xl bg-ink-900 border-l border-border overflow-y-auto flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 bg-ink-900/95 backdrop-blur-md border-b border-border/50 px-6 py-5 flex items-start justify-between gap-4 z-10">
              <div className="flex-1">
                <span className="text-[10px] font-medium text-mechanism tracking-widest uppercase block mb-1.5">
                  Concept
                </span>
                <h2 className="font-serif text-xl font-bold text-text-primary leading-tight">
                  {concept.name}
                </h2>
                <p className="text-sm text-text-muted italic mt-1">{concept.tagline}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close panel"
                className="mt-1 w-8 h-8 rounded-lg border border-border/60 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-border transition-all shrink-0"
              >
                <X size={14} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 px-6 py-6 space-y-8">
              {/* Definition */}
              <Section icon={<BookOpen size={14} />} title="What it means">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {concept.definition}
                </p>
              </Section>

              {/* Scholars */}
              <Section icon={<Users size={14} />} title="Key scholars & works">
                <div className="space-y-2.5">
                  {concept.scholars.map((s) => (
                    <div
                      key={s.name}
                      className="rounded-lg bg-surface border border-border/40 px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-text-primary">{s.name}</p>
                      {s.work && (
                        s.textSlug ? (
                          <Link
                            href={`/theory/texts/${s.textSlug}`}
                            className="text-xs text-mechanism/80 hover:text-mechanism mt-0.5 italic underline underline-offset-2 decoration-mechanism/30 hover:decoration-mechanism transition-colors block"
                          >
                            {s.work}
                            {s.year ? ` (${s.year})` : ""}
                          </Link>
                        ) : (
                          <p className="text-xs text-text-muted mt-0.5 italic">
                            {s.work}
                            {s.year ? ` (${s.year})` : ""}
                          </p>
                        )
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {concept.traditions.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-mechanism/10 text-mechanism border border-mechanism/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Section>

              {/* Case application */}
              <Section
                icon={<MapPin size={14} />}
                title="In the Rwanda case"
                accent
              >
                <p className="text-sm text-text-secondary leading-relaxed">
                  {concept.caseApplication}
                </p>
              </Section>

              {/* Critiques */}
              <Section icon={<AlertTriangle size={14} />} title="Critiques & what it misses">
                <ul className="space-y-2.5">
                  {concept.critiques.map((c, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-text-secondary"
                    >
                      <span className="text-critique mt-0.5 shrink-0">◆</span>
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* World Bank relevance */}
              {concept.worldBankRelevance && (
                <Section icon={<ArrowRight size={14} />} title="World Bank relevance">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {concept.worldBankRelevance}
                  </p>
                </Section>
              )}

              {/* Related concepts */}
              {concept.relatedConcepts.length > 0 && (
                <div>
                  <p className="text-[10px] font-medium text-text-muted tracking-widest uppercase mb-3">
                    Related concepts
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {concept.relatedConcepts.map((rc) => {
                      const related = getConcept(rc);
                      return (
                        <button
                          key={rc}
                          className="text-xs px-3 py-1.5 rounded-lg border border-border/50 text-text-secondary hover:text-text-primary hover:border-mechanism/30 transition-all"
                        >
                          {related?.name ?? rc}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border/40 bg-surface/50">
              <p className="text-[10px] text-text-muted text-center">
                Press{" "}
                <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border/60 text-[10px] font-mono">
                  Esc
                </kbd>{" "}
                to close · Click another node to navigate
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Section({
  icon,
  title,
  children,
  accent = false,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className={accent ? "text-mechanism" : "text-text-muted"}>{icon}</span>
        <p
          className={`text-[11px] font-semibold tracking-widest uppercase ${
            accent ? "text-mechanism" : "text-text-muted"
          }`}
        >
          {title}
        </p>
      </div>
      {accent ? (
        <div className="border-l-2 border-mechanism/40 pl-4">{children}</div>
      ) : (
        children
      )}
    </div>
  );
}
