"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const levels = [
  {
    number: "01",
    label: "Point-of-use fixes",
    color: "#94a3b8",
    dimColor: "rgba(148,163,184,0.08)",
    border: "rgba(148,163,184,0.25)",
    description: "Solve the immediate problem at the moment of use.",
    intuition: "Fixing the water at the cup — not the pipes, the governance, or the financing system.",
    examples: [
      { name: "LifeStraw / chlorine tablets", org: "PSI, Pure Water for the World", note: "Filters contaminated water at household level" },
      { name: "Solar lanterns", org: "d.light, M-KOPA", note: "Off-grid light where there is no grid electricity" },
      { name: "Clean cookstoves", org: "Envirofit, Clean Cooking Alliance", note: "Reduce indoor smoke exposure at point of cooking" },
    ],
    unchanged: "Public infrastructure, state capacity for water/energy provision, political economy of service delivery",
  },
  {
    number: "02",
    label: "Direct goods transfers",
    color: "#94a3b8",
    dimColor: "rgba(148,163,184,0.08)",
    border: "rgba(148,163,184,0.25)",
    description: "Fill resource gaps by giving people what they lack.",
    intuition: "You're filling the gap — not asking why the gap exists.",
    examples: [
      { name: "Shoes & glasses", org: "TOMS, Warby Parker", note: "Give a pair, give a pair — good intentions, no systemic change" },
      { name: "Food aid", org: "WFP emergency operations", note: "Lifesaving in crisis; often creates import dependency" },
      { name: "Cash transfers", org: "GiveDirectly, conditional transfer programs", note: "Effective but bounded by structural labor market conditions" },
    ],
    unchanged: "Why the income gap exists; labor markets; industrial structure; political barriers to economic participation",
  },
  {
    number: "03",
    label: "Targeted disease programs",
    color: "#94a3b8",
    dimColor: "rgba(148,163,184,0.08)",
    border: "rgba(148,163,184,0.25)",
    description: "Attack specific diseases with effective tools at scale.",
    intuition: "Fighting the disease — not rebuilding the system that fails to prevent it.",
    examples: [
      { name: "Vaccination campaigns", org: "Gavi, the Vaccine Alliance", note: "Highly effective at specific diseases; parallel to national systems" },
      { name: "Bed nets", org: "Against Malaria Foundation", note: "Proven, cost-effective — but malaria persists where governance fails" },
      { name: "HIV/AIDS treatment", org: "The Global Fund, PEPFAR", note: "Life-saving; but relies on sustained external funding, not local system capacity" },
    ],
    unchanged: "Health system governance; public financing capacity; political accountability in health delivery; prevention infrastructure",
  },
  {
    number: "04",
    label: "NGO service delivery",
    color: "#94a3b8",
    dimColor: "rgba(148,163,184,0.08)",
    border: "rgba(148,163,184,0.25)",
    description: "Directly deliver services where the state cannot or does not.",
    intuition: "Acting as the state — not changing how the state works.",
    examples: [
      { name: "Community health & clinics", org: "Partners In Health", note: "Brilliant model — but builds a parallel system, not state capacity" },
      { name: "Multi-sector development", org: "BRAC", note: "Extraordinary at scale; has changed what's possible — but works where state is absent" },
      { name: "School networks", org: "Bridge International, various NGOs", note: "Fills education gaps — but government adoption remains the open question" },
    ],
    unchanged: "State incentives to deliver; political accountability; domestic financing; what happens when the NGO leaves",
  },
  {
    number: "05",
    label: "What's actually upstream",
    color: "#6495ED",
    dimColor: "rgba(212,168,67,0.07)",
    border: "rgba(212,168,67,0.40)",
    description: "The political and institutional conditions that determine whether anything else works — or lasts.",
    intuition: "This is where the river bends. This is where someone is pushing.",
    examples: [
      { name: "Who holds power and on what terms", org: "Political settlement", note: "Elite incentives determine whether any policy gets implemented" },
      { name: "Whether the state can actually implement", org: "State capacity", note: "Without capable institutions, good policies remain paper" },
      { name: "Whether leaders are accountable to citizens", org: "Accountability and representation", note: "Accountable governments aggregate needs and deliver at scale" },
    ],
    unchanged: null,
  },
];

export default function InterventionLadder() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/30 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="mb-6 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-text-muted block mb-3">
            A Taxonomy of Intervention
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-5">
            Much of this is good work.
            <br />
            <span className="italic text-text-secondary">None of it is upstream.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="mb-16 text-center">
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            From water filters to NGO clinics, the development sector has built
            an extraordinary range of interventions. They can be lifesaving.
            But all too often, they intervene at the level where problems
            are <em>experienced</em>, not where they are <em>generated</em>.
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {levels.map((level, i) => {
            const isUpstream = i === 4;
            const isOpen = expanded === i;

            return (
              <motion.div
                key={level.number}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full text-left rounded-xl border transition-all duration-300 overflow-hidden"
                  style={{
                    background: isOpen ? level.dimColor : "rgba(13,21,38,0.6)",
                    borderColor: isOpen ? level.border : "rgba(30,45,69,0.6)",
                  }}
                >
                  {/* Header row */}
                  <div className="flex items-center gap-5 px-5 py-4">
                    <span
                      className="font-serif text-2xl font-bold shrink-0 w-10 text-right"
                      style={{ color: `${level.color}40` }}
                    >
                      {level.number}
                    </span>
                    <div className="flex-1 flex items-center gap-4 flex-wrap">
                      <span
                        className="font-semibold text-sm"
                        style={{ color: isOpen ? level.color : "#94a3b8" }}
                      >
                        {level.label}
                      </span>
                      {!isOpen && (
                        <span className="text-xs text-text-muted italic hidden sm:block">
                          {level.description}
                        </span>
                      )}
                    </div>
                    {isUpstream && !isOpen && (
                      <span className="text-[10px] font-medium tracking-widest uppercase px-2 py-0.5 rounded-full bg-mechanism/10 text-mechanism border border-mechanism/25 shrink-0">
                        The missing layer
                      </span>
                    )}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-text-muted text-xs shrink-0"
                    >
                      ↓
                    </motion.span>
                  </div>

                  {/* Expanded content */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 pt-1"
                    >
                      <div className="ml-[58px]">
                        {/* Intuition line */}
                        <p
                          className="text-sm italic mb-5"
                          style={{ color: level.color }}
                        >
                          "{level.intuition}"
                        </p>

                        {/* Examples */}
                        <div className="space-y-2 mb-5">
                          {level.examples.map((ex) => (
                            <div
                              key={ex.name}
                              className="rounded-lg px-4 py-3 border border-border/30 bg-ink-950/40"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <p className="text-sm font-medium text-text-primary">
                                    {ex.name}
                                  </p>
                                  <p className="text-xs text-text-muted mt-0.5">
                                    {ex.note}
                                  </p>
                                </div>
                                <span className="text-[10px] text-text-muted border border-border/40 px-2 py-0.5 rounded shrink-0 mt-0.5">
                                  {ex.org}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* What it doesn't change */}
                        {level.unchanged && (
                          <div className="rounded-lg px-4 py-3 bg-ink-950/60 border border-border/20">
                            <p className="text-[10px] font-medium text-text-muted tracking-widest uppercase mb-1">
                              What it doesn't change
                            </p>
                            <p className="text-xs text-text-secondary leading-relaxed">
                              {level.unchanged}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Connector line to next section */}
        <ScrollReveal delay={0.4} className="mt-16 text-center">
          <p className="font-serif text-2xl text-text-secondary italic max-w-2xl mx-auto">
            "An intervention can work without the system working."
          </p>
          <div className="mt-6 w-px h-14 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
        </ScrollReveal>
      </div>
    </section>
  );
}
