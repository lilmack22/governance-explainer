"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const mechanisms = [
  {
    domain: "Poverty & inequality",
    surface: "Insufficient income, unequal distribution",
    root: "Elite capture of redistributive mechanisms; labor markets shaped by patronage; land rights distorted by political power",
  },
  {
    domain: "Weak service delivery",
    surface: "Clinics and schools that don't function",
    root: "No political incentive for leaders to deliver to broad populations; accountability to elites, not citizens",
  },
  {
    domain: "Conflict & fragility",
    surface: "Violence, displacement, instability",
    root: "Unstable elite bargains; groups excluded from power; violence as rational political strategy; resource rents funding armed actors",
  },
  {
    domain: "Environmental destruction",
    surface: "Deforestation, illegal mining, pollution",
    root: "Resource rents captured by politically connected actors; enforcement impossible against those who own the enforcers",
  },
  {
    domain: "Low learning outcomes",
    surface: "Children who complete school without learning",
    root: "Teacher unions protecting attendance without accountability; curriculum decisions serving political symbols, not skills",
  },
  {
    domain: "Trafficking & rights abuses",
    surface: "Exploitation, impunity, lack of prosecution",
    root: "Networks maintain access to political protection; prosecutors and police have no incentive — or face risks — for accountability",
  },
];

export default function CoreThesis() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 px-6 relative border-t border-border/30" ref={ref}>

      <div className="max-w-5xl mx-auto relative z-10">

        <ScrollReveal className="text-center mb-6">
          <span className="text-xs font-medium tracking-widest uppercase text-text-muted block mb-3">
            The Core Argument
          </span>
        </ScrollReveal>

        {/* Big statement */}
        <ScrollReveal delay={0.05} className="text-center mb-8">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight">
            Downstream problems are often
            <br />
            <span className="italic text-mechanism">sustained by upstream causes.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="text-center mb-20">
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Poverty, weak services, conflict, environmental destruction, trafficking —
            these are not random. They are produced and sustained by specific
            political and institutional arrangements. Understand those arrangements
            and you understand the problem differently. Intervene in them, and
            the change is more likely to last.
          </p>
        </ScrollReveal>

        {/* Mechanism table */}
        <div className="space-y-3 mb-20">
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-2 pb-2">
              {["Development problem", "Surface cause", "Upstream political/governance cause"].map((h, i) => (
                <p key={h} className={`text-[10px] font-medium tracking-widest uppercase px-3 ${i === 2 ? "text-mechanism/70" : "text-text-muted"}`}>
                  {h}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {mechanisms.map((row, i) => (
            <motion.div
              key={row.domain}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden"
            >
              <div className="px-4 py-4 bg-surface border border-border/40 flex items-center">
                <p className="text-sm font-semibold text-text-primary">{row.domain}</p>
              </div>
              <div className="px-4 py-4 bg-surface border border-border/30 flex items-center">
                <p className="text-xs text-text-secondary leading-relaxed">{row.surface}</p>
              </div>
              <div className="px-4 py-4 bg-mechanism/4 border border-mechanism/15 flex items-center">
                <p className="text-xs text-text-secondary leading-relaxed italic">{row.root}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What political science offers */}
        <ScrollReveal className="mb-20">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary text-center mb-10">
            What political science gives us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                concept: "Incentive analysis",
                body: "Leaders do what they are rewarded for. Political science maps those reward structures — who gives power, who can take it away, and what behavior that produces.",
                color: "#8CB3F4",
              },
              {
                concept: "Institutional analysis",
                body: "Rules, formal and informal, shape what is possible. Institutions determine whether a capable person in a broken system can succeed — and whether change outlasts individuals.",
                color: "#6495ED",
              },
              {
                concept: "Power and settlement analysis",
                body: "Development outcomes are often the by-products of elite bargains. Understanding who holds power, on what terms, and with what stability, explains much of what sector analysis leaves obscure.",
                color: "#4372C8",
              },
            ].map((item, i) => (
              <motion.div
                key={item.concept}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                className="rounded-xl border p-6"
                style={{ borderColor: `${item.color}30`, background: `${item.color}06` }}
              >
                <p className="font-serif font-bold text-base mb-3" style={{ color: item.color }}>
                  {item.concept}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Final thesis */}
        <ScrollReveal>
          <div className="text-center">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/50 mx-auto mb-8" />
            <p className="font-serif text-2xl md:text-3xl text-text-primary italic leading-relaxed max-w-3xl mx-auto">
              To understand development, you have to understand politics.
              Not as background noise — as a{" "}
              <span className="text-mechanism not-italic font-bold">causal mechanism.</span>
            </p>
            <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent mx-auto mt-8" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
