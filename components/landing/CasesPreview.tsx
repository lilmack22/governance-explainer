"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const cases = [
  {
    slug: "rwanda",
    country: "Rwanda",
    flag: "🇷🇼",
    region: "East Africa",
    question: "What explains the transformation from genocide to a capable state?",
    concepts: ["Political Settlement", "State Capacity", "Elite Bargain", "Developmental State"],
    status: "live" as const,
    accent: "#6495ED",
  },
  {
    slug: "botswana",
    country: "Botswana",
    flag: "🇧🇼",
    region: "Southern Africa",
    question: "How did Botswana avoid the resource curse when so many others didn't?",
    concepts: ["Institutions", "Resource Governance", "Elite Cohesion"],
    status: "coming-soon" as const,
    accent: "#6495ED",
  },
  {
    slug: "liberia",
    country: "Liberia",
    flag: "🇱🇷",
    region: "West Africa",
    question: "What explains the limits of post-conflict state-building in Liberia?",
    concepts: ["Elite Bargain", "Statebuilding", "Donor Dependency"],
    status: "coming-soon" as const,
    accent: "#4372C8",
  },
  {
    slug: "indonesia",
    country: "Indonesia",
    flag: "🇮🇩",
    region: "Southeast Asia",
    question: "How did Indonesia manage democratic transition after Suharto without collapse?",
    concepts: ["Political Transition", "Decentralization", "Patronage Networks"],
    status: "coming-soon" as const,
    accent: "#8CB3F4",
  },
];

export default function CasesPreview() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-16 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-text-muted mb-3 block">
            Case Library
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Start with a puzzle.
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Each case begins with a transformation or failure that demands
            explanation. Theory follows the question — not the other way around.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cases.map((c, i) => (
            <ScrollReveal key={c.slug} delay={0.08 * i}>
              <div className={`group relative rounded-xl border bg-surface overflow-hidden transition-all duration-300 ${
                c.status === "live"
                  ? "border-mechanism/30 hover:border-mechanism/60 cursor-pointer"
                  : "border-border/40 opacity-60 cursor-default"
              }`}>
                {c.status === "live" ? (
                  <Link href={`/cases/${c.slug}`} className="block p-6">
                    <CaseCardContent case_={c} />
                    <div className="mt-4 text-xs font-medium text-mechanism group-hover:gap-2 flex items-center gap-1 transition-all">
                      Explore case <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                  </Link>
                ) : (
                  <div className="p-6">
                    <CaseCardContent case_={c} />
                    <div className="mt-4 text-xs text-text-muted flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-text-muted" />
                      Coming soon
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Approach explainer */}
        <ScrollReveal delay={0.2} className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Country Puzzle",
                body: "We start with a transformation or failure that demands explanation — something concrete and real.",
              },
              {
                step: "02",
                title: "Causal Mechanism",
                body: "An interactive diagram shows the causal chain: what drove what. Click any node to understand it.",
              },
              {
                step: "03",
                title: "Theory, Rooted in Case",
                body: "Concepts like 'state capacity' or 'elite bargain' are explained in the context of the case you're exploring.",
              },
            ].map((step, i) => (
              <div key={step.step} className="p-6 rounded-xl border border-border/40 bg-surface-raised">
                <span className="font-serif text-4xl font-bold text-mechanism/20 block mb-3">
                  {step.step}
                </span>
                <h3 className="font-serif text-lg font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CaseCardContent({ case_: c }: { case_: typeof cases[0] }) {
  return (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{c.flag}</span>
          <div>
            <p className="font-serif font-semibold text-text-primary">{c.country}</p>
            <p className="text-xs text-text-muted">{c.region}</p>
          </div>
        </div>
        {c.status === "live" && (
          <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-mechanism/10 text-mechanism border border-mechanism/20">
            Live
          </span>
        )}
      </div>
      <p className="text-sm text-text-secondary leading-relaxed italic mb-4">
        "{c.question}"
      </p>
      <div className="flex flex-wrap gap-1.5">
        {c.concepts.map((concept) => (
          <span
            key={concept}
            className="text-[10px] px-2 py-0.5 rounded-full border border-border/60 text-text-muted"
          >
            {concept}
          </span>
        ))}
      </div>
    </>
  );
}
