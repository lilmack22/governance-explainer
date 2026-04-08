import { notFound } from "next/navigation";
import Image from "next/image";
import { getText, getAllTexts } from "@/data/texts/index";
import type { CoreArgument, KeyConceptEntry, CaseExample, TextAuthor } from "@/data/types";

export function generateStaticParams() {
  return getAllTexts().map((t) => ({ slug: t.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function TextTheoryPage({ params }: Props) {
  const { slug } = await params;
  const text = getText(slug);
  if (!text) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
      {/* ── Hero: cover + overview ────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-start">
        <div className="shrink-0">
          <div className="rounded-xl overflow-hidden border border-border/40 shadow-2xl shadow-black/40">
            {text.coverImage ? (
              <Image
                src={text.coverImage}
                alt={`${text.shortTitle} book cover`}
                width={220}
                height={330}
                className="w-full object-cover"
                priority
              />
            ) : (
              <div className="w-[220px] h-[330px] bg-surface-raised flex flex-col items-center justify-center p-4 text-center gap-3">
                <span className="text-[10px] font-medium text-text-muted tracking-widest uppercase">Text</span>
                <p className="font-serif text-sm font-semibold text-text-primary leading-snug">{text.shortTitle}</p>
                <p className="text-xs text-text-muted">{text.authors.map((a) => a.name).join(" & ")}</p>
              </div>
            )}
          </div>
          <div className="mt-4 space-y-1.5">
            <p className="text-xs text-text-muted">
              {text.authors.map((a) => a.name).join(" & ")}
            </p>
            <p className="text-xs text-text-muted">{text.publisher}, {text.year}</p>
          </div>
          {/* Paradigm tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {text.paradigms.map((p) => (
              <span
                key={p}
                className="text-[10px] px-3 py-1 rounded-full bg-accent text-white font-medium tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div>
          <PageLabel>Text</PageLabel>
          <h1 className="font-serif text-3xl font-bold text-text-primary leading-tight mb-6">
            {text.title}
          </h1>
          {text.overview.split("\n").filter(Boolean).map((para, i) => (
            <p key={i} className="text-sm text-text-secondary leading-relaxed mb-4">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ── Who's writing this? ───────────────────────────── */}
      <section>
        <SectionHeader label="Authors" heading="Who's writing this?" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {text.authors.map((author) => (
            <AuthorCard key={author.name} author={author} />
          ))}
        </div>
      </section>

      {/* ── Core arguments ────────────────────────────────── */}
      <section>
        <SectionHeader label="Core arguments" heading="What the book argues" />
        <div className="space-y-4">
          {text.coreArguments.map((arg, i) => (
            <ArgumentCard key={i} index={i + 1} arg={arg} />
          ))}
        </div>
      </section>

      {/* ── Key concepts ──────────────────────────────────── */}
      <section>
        <SectionHeader
          label="Key concepts"
          heading="Paradigms and frameworks introduced"
          sub="The conceptual vocabulary the book introduces or depends on."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {text.keyConcepts.map((kc) => (
            <ConceptCard key={kc.name} concept={kc} />
          ))}
        </div>
      </section>

      {/* ── Cases and examples ────────────────────────────── */}
      <section>
        <SectionHeader
          label="Cases & examples"
          heading="Countries and episodes that illustrate the argument"
          sub="How the theory plays out in specific empirical contexts."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {text.casesAndExamples.map((c) => (
            <CaseCard key={c.country} example={c} />
          ))}
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-12 border-t border-border/30 flex items-center justify-center">
        <p className="text-xs text-text-muted text-center">
          Theory pages are pedagogical summaries. Refer to the original text for full arguments and citations.
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

function AuthorCard({ author }: { author: TextAuthor }) {
  return (
    <div className="p-5 rounded-xl border border-border/50 bg-surface space-y-2">
      <p className="font-serif font-semibold text-text-primary">{author.name}</p>
      <p className="text-xs text-mechanism">
        {author.title} · {author.institution}
      </p>
      <p className="text-sm text-text-secondary leading-relaxed">{author.bio}</p>
    </div>
  );
}

function ArgumentCard({ index, arg }: { index: number; arg: CoreArgument }) {
  return (
    <div className="p-6 rounded-xl border border-border/50 bg-surface hover:border-mechanism/30 transition-all">
      <div className="flex items-start gap-3 mb-3">
        <span className="font-serif text-3xl text-mechanism/20 font-bold leading-none shrink-0">
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="font-serif font-semibold text-text-primary leading-tight mt-1">
          {arg.heading}
        </h3>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed pl-10">{arg.body}</p>
    </div>
  );
}

function ConceptCard({ concept }: { concept: KeyConceptEntry }) {
  return (
    <div className="p-5 rounded-xl border border-border/50 bg-surface hover:border-mechanism/25 transition-all">
      <p className="font-serif font-semibold text-text-primary mb-2">{concept.name}</p>
      <p className="text-sm text-text-secondary leading-relaxed">{concept.definition}</p>
    </div>
  );
}

function CaseCard({ example }: { example: CaseExample }) {
  return (
    <div className="p-5 rounded-xl border border-border/50 bg-surface hover:border-mechanism/25 transition-all">
      <p className="font-serif font-semibold text-text-primary mb-2">{example.country}</p>
      <p className="text-sm text-text-secondary leading-relaxed">{example.description}</p>
    </div>
  );
}
