import { notFound } from "next/navigation";
import Link from "next/link";
import { getConcept, getAllConcepts } from "@/data/concepts";
import { getText } from "@/data/texts/index";
import type { ConceptDrillDown } from "@/data/types";

export function generateStaticParams() {
  return getAllConcepts().map((c) => ({ slug: c.id }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ConceptPage({ params }: Props) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <PageLabel>Concept</PageLabel>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-3">
          {concept.name}
        </h1>
        <p className="text-base text-mechanism mb-6 font-medium">{concept.tagline}</p>
        <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">{concept.definition}</p>

        {/* Traditions */}
        <div className="mt-6 flex flex-wrap gap-2">
          {concept.traditions.map((t) => (
            <span
              key={t}
              className="text-[10px] px-3 py-1 rounded-full bg-accent text-white font-medium tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── Key scholars ─────────────────────────────────────── */}
      <section>
        <SectionHeader label="Scholars" heading="Who developed this idea?" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {concept.scholars.map((scholar) => {
            const linkedText = scholar.textSlug ? getText(scholar.textSlug) : null;
            return (
              <div key={scholar.name} className="p-5 rounded-xl border border-border/50 bg-surface space-y-1.5">
                <p className="font-serif font-semibold text-text-primary">{scholar.name}</p>
                {scholar.work && (
                  <p className="text-xs text-mechanism">
                    {scholar.work}{scholar.year ? `, ${scholar.year}` : ""}
                  </p>
                )}
                {linkedText && (
                  <Link
                    href={`/theory/texts/${scholar.textSlug}`}
                    className="inline-block mt-2 text-[11px] px-3 py-1 rounded-full border border-mechanism/30 text-mechanism hover:bg-mechanism/10 hover:border-mechanism/60 transition-all"
                  >
                    {linkedText.shortTitle} →
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Case application ─────────────────────────────────── */}
      <section>
        <SectionHeader
          label="In practice"
          heading="How this concept applies in context"
          sub="An illustrative case that shows this concept at work."
        />
        <div className="p-6 rounded-xl border border-border/50 bg-surface">
          <p className="text-sm text-text-secondary leading-relaxed">{concept.caseApplication}</p>
        </div>
      </section>

      {/* ── Critiques ────────────────────────────────────────── */}
      <section>
        <SectionHeader
          label="Critiques"
          heading="Limitations and pushback"
          sub="What the concept misses or gets wrong."
        />
        <div className="space-y-3">
          {concept.critiques.map((critique, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-xl border border-border/50 bg-surface">
              <span className="font-serif text-2xl text-mechanism/20 font-bold leading-none shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-text-secondary leading-relaxed">{critique}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related concepts ─────────────────────────────────── */}
      {concept.relatedConcepts.length > 0 && (
        <section>
          <SectionHeader label="Related" heading="Connected concepts" />
          <div className="flex flex-wrap gap-3">
            {concept.relatedConcepts.map((id) => {
              const related = getConcept(id);
              if (!related) return null;
              return (
                <Link
                  key={id}
                  href={`/theory/concepts/${id}`}
                  className="px-4 py-2 rounded-xl border border-border/50 bg-surface hover:bg-surface-raised hover:border-border transition-all group"
                >
                  <p className="text-sm font-serif font-semibold text-text-primary group-hover:text-white transition-colors">
                    {related.name}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">{related.tagline}</p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ── World Bank relevance ─────────────────────────────── */}
      {concept.worldBankRelevance && (
        <section>
          <SectionHeader label="Operational relevance" heading="Why this matters for practitioners" />
          <div className="p-6 rounded-xl border border-mechanism/20 bg-surface">
            <p className="text-sm text-text-secondary leading-relaxed">{concept.worldBankRelevance}</p>
          </div>
        </section>
      )}

      {/* Footer */}
      <div className="h-12 border-t border-border/30 flex items-center justify-center">
        <p className="text-xs text-text-muted text-center">
          Concept pages are pedagogical summaries. Refer to the original scholarship for full arguments.
        </p>
      </div>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────

function PageLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] font-medium text-text-muted tracking-widest uppercase block mb-3">
      {children}
    </span>
  );
}

function SectionHeader({
  label,
  heading,
  sub,
}: {
  label: string;
  heading: string;
  sub?: string;
}) {
  return (
    <div className="mb-6">
      <PageLabel>{label}</PageLabel>
      <h2 className="font-serif text-2xl font-bold text-text-primary mb-1">{heading}</h2>
      {sub && <p className="text-sm text-text-muted max-w-2xl">{sub}</p>}
    </div>
  );
}
