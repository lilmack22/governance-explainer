"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import CaseHero from "@/components/case/CaseHero";
import CaseTimeline from "@/components/case/CaseTimeline";
import CaseIndicators from "@/components/case/CaseIndicators";
import CausalQuestion from "@/components/case/CausalQuestion";
import ConceptPanel from "@/components/case/ConceptPanel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import rwanda from "@/data/cases/rwanda";

// Client-only components (use browser APIs)
const CountryMap = dynamic(() => import("@/components/case/CountryMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 rounded-xl bg-ink-900 border border-border/40 animate-pulse" />
  ),
});

const CausalDiagram = dynamic(() => import("@/components/case/CausalDiagram"), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-xl bg-ink-900 border border-border/40 animate-pulse" style={{ height: 580 }} />
  ),
});

export default function RwandaPage() {
  const [diagramRevealed, setDiagramRevealed] = useState(false);
  const [selectedConceptId, setSelectedConceptId] = useState<string | null>(null);

  const handleConceptSelect = (conceptId: string) => {
    setSelectedConceptId((prev) => (prev === conceptId ? null : conceptId));
  };

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <CaseHero caseStudy={rwanda} />

      {/* ── Map + Timeline ────────────────────────────────── */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <ScrollReveal direction="left">
            <div>
              <SectionLabel>Location</SectionLabel>
              <CountryMap
                coordinates={rwanda.coordinates}
                country={rwanda.country}
              />
              <p className="text-xs text-text-muted mt-3 leading-relaxed">
                Rwanda sits at the heart of the Great Lakes region, bordered by
                DRC, Uganda, Tanzania, and Burundi — a historically volatile
                neighbourhood.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal direction="right">
            <div>
              <SectionLabel>Timeline of transformation</SectionLabel>
              <CaseTimeline events={rwanda.timeline} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Indicators ────────────────────────────────────── */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionLabel>Key indicators</SectionLabel>
          <h2 className="font-serif text-2xl font-bold text-text-primary mb-8">
            The transformation in numbers
          </h2>
        </ScrollReveal>
        <CaseIndicators indicators={rwanda.indicators} />
      </section>

      {/* ── Causal Question ───────────────────────────────── */}
      <div className="border-t border-border/30 border-b border-border/30 bg-gradient-to-b from-ink-900/20 to-transparent">
        <CausalQuestion
          puzzle={rwanda.puzzle}
          causalQuestion={rwanda.causalQuestion}
          onReveal={() => setDiagramRevealed(true)}
          revealed={diagramRevealed}
        />
      </div>

      {/* ── Causal Diagram ────────────────────────────────── */}
      <AnimatePresence>
        {diagramRevealed && (
          <motion.section
            key="diagram"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="px-6 py-12 max-w-7xl mx-auto"
          >
            <ScrollReveal>
              <SectionLabel>Causal mechanism</SectionLabel>
              <h2 className="font-serif text-2xl font-bold text-text-primary mb-2">
                What drove what
              </h2>
              <p className="text-sm text-text-secondary mb-8 max-w-2xl">
                This diagram shows the causal chain from upstream political
                factors through mechanisms to observed outcomes. The dashed
                amber lines show shadow effects — trade-offs and costs.{" "}
                <span className="text-mechanism">Click any node</span> to open a
                concept drill-down.
              </p>
            </ScrollReveal>

            <CausalDiagram
              causalNodes={rwanda.causalNodes}
              causalEdges={rwanda.causalEdges}
              onConceptSelect={handleConceptSelect}
              selectedConceptId={selectedConceptId}
            />
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── Operational Takeaways ─────────────────────────── */}
      {diagramRevealed && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="px-6 py-16 max-w-7xl mx-auto"
        >
          <ScrollReveal>
            <SectionLabel>Operational implications</SectionLabel>
            <h2 className="font-serif text-2xl font-bold text-text-primary mb-8">
              What this means for practitioners
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rwanda.operationalTakeaways.map((t, i) => (
              <ScrollReveal key={t.id} delay={0.08 * i}>
                <div className="p-6 rounded-xl border border-border/50 bg-surface hover:border-mechanism/30 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="font-serif text-3xl text-mechanism/25 font-bold leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif font-semibold text-text-primary leading-tight mt-1">
                      {t.heading}
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed pl-10">
                    {t.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </motion.section>
      )}

      {/* ── Concept Panel overlay ─────────────────────────── */}
      <ConceptPanel
        conceptId={selectedConceptId}
        onClose={() => setSelectedConceptId(null)}
      />

      {/* ── Footer spacer ─────────────────────────────────── */}
      <div className="h-24 border-t border-border/30 mt-8 flex items-center justify-center px-6">
        <p className="text-xs text-text-muted text-center max-w-2xl">
          This analysis is pedagogical. Rwanda's development experience is
          actively debated among scholars, policymakers, and Rwandans
          themselves. The goal is analytical clarity, not advocacy.
        </p>
      </div>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] font-medium text-text-muted tracking-widest uppercase block mb-2">
      {children}
    </span>
  );
}
