"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Images go in public/colombia/
// e.g. public/colombia/la-violencia.jpg

interface Slide {
  src: string;
  alt: string;
  label: string;
  heading: string;
  caption: string;
}

const slides: Slide[] = [
  {
    src: "/colombia/la-violencia.jpg",
    alt: "La Violencia, Colombia, 1948",
    label: "1948–1964",
    heading: "La Violencia and the Origins of Insurgency",
    caption:
      "The assassination of liberal leader Jorge Eliécer Gaitán on April 9, 1948 in Bogotá — the 'Bogotazo' — triggered a decade of partisan political violence known as La Violencia that killed an estimated 200,000 people and displaced millions. This formative experience of mass rural violence and state failure created the ideological terrain and organizational networks from which Colombia's later insurgencies would emerge. The rural poor, repeatedly abandoned by both Liberal and Conservative elites, developed deep traditions of self-defense and resistance. When the FARC was founded in 1964 by survivors of the Marquetalia attack — peasant self-defense communities that the army had bombed on the orders of a US-advised military plan — it could draw on this long tradition of organized rural resistance. La Violencia is not simply historical background; it is the causal origin of what would become the world's longest-running insurgency.",
  },
  {
    src: "/colombia/farc-guerrilla.jpg",
    alt: "FARC guerrilla fighters in the jungle",
    label: "1964–2002",
    heading: "The FARC's Five Decades",
    caption:
      "The Fuerzas Armadas Revolucionarias de Colombia (FARC) grew from a small peasant self-defense group in 1964 into a 20,000-strong insurgency that, by the late 1990s, controlled significant territory in the Colombian south and east, taxed the drug trade, and was capable of attacking army bases and taking hundreds of hostages. Its political economy was based on coca taxation rather than ideological commitment from recruits — making it a self-sustaining armed organization that was highly resistant to military pressure and military reform. The FARC's geographic base in the Amazon foothills and llanos — areas where the Colombian state had never established significant presence — gave it natural sanctuary. Jeremy Weinstein (Inside Rebellion) identifies the FARC as a case of 'resource-rich' insurgency: organizations that attract recruits through material incentives rather than ideological commitment operate differently, and are harder to reform or demobilize, than ideologically coherent movements. Understanding this organizational character is essential to understanding why demobilization required both military pressure and credible material alternatives.",
  },
  {
    src: "/colombia/plan-colombia.jpg",
    alt: "Colombian military helicopter, Plan Colombia",
    label: "2000–2010",
    heading: "Plan Colombia and Military Transformation",
    caption:
      "Plan Colombia, launched in 2000 with $1.3 billion in initial US support, transformed the Colombian military from a demoralized, under-resourced institution into one of the most capable counterinsurgency forces in Latin America. The helicopter fleet grew from roughly 50 to over 500; intelligence fusion centers created real-time targeting capacity; the army expanded from 120,000 to over 290,000 troops. Álvaro Uribe's 'Seguridad Democrática' doctrine, launched in 2002, combined this military buildup with civilian intelligence networks (informants), a dramatic expansion of road checkpoints, and the deployment of 'soldados campesinos' — peasant soldiers stationed in their home municipalities rather than rotated. Homicide rates fell from 86 per 100,000 in 2002 to under 40 by 2009 — a dramatic improvement that gave Uribe extraordinary political support and gave Santos the credibility to negotiate without being accused of naivety.",
  },
  {
    src: "/colombia/havana-talks.jpg",
    alt: "Colombian peace negotiators in Havana, Cuba",
    label: "2012–2016",
    heading: "The Havana Peace Process",
    caption:
      "The peace talks between the Colombian government and FARC, which ran from 2012 to 2016 in Havana, were structurally different from every prior Colombian negotiation. Three design choices made the difference: first, the government maintained military pressure throughout — unlike Pastrana, who had created a demilitarized zone in which the FARC rebuilt its forces. Second, Cuba and Norway served as joint guarantors, giving each side a trusted interlocutor. Third, the agenda explicitly addressed root causes — agrarian reform, illicit crops, political participation — rather than simply asking FARC to lay down arms. The six-point framework produced a 310-page agreement — among the most detailed in Latin American history — that addressed everything from land redistribution to the Special Jurisdiction for Peace that would handle transitional accountability. Critics of the deal's length and complexity missed the point: the FARC required credible commitments, and detailed commitments are more credible than general principles.",
  },
  {
    src: "/colombia/demobilization.jpg",
    alt: "FARC combatants entering cantonment zones, 2017",
    label: "2017",
    heading: "Demobilization",
    caption:
      "Beginning in 2017, approximately 13,000 FARC combatants entered UN-monitored cantonment zones across Colombia, surrendering weapons under a joint verification mechanism. The FARC transformation to the political party Fuerza Alternativa Revolucionaria del Común (maintaining the FARC acronym) was accompanied by a guarantee of 10 congressional seats through 2026, regardless of electoral performance. The UN Verification Mission, established to monitor implementation, documented both genuine progress and alarming gaps: reintegration support was underfunded, land reform stalled, and the security situation in former FARC territory deteriorated as multiple armed groups competed for territorial control. Most significantly, the UN documented the assassination of over 360 ex-FARC combatants in the years following demobilization — a systemic failure of the state's protection commitment that represents one of the sharpest critiques of the deal's implementation.",
  },
  {
    src: "/colombia/eln-dissidents.jpg",
    alt: "ELN fighters and remaining conflict zones in Colombia",
    label: "2017–Present",
    heading: "Remaining Conflicts and the Limits of Peace",
    caption:
      "The 2016 FARC deal was not a comprehensive end to Colombian armed conflict — it was the resolution of one insurgency in a complex conflict ecosystem. The ELN (National Liberation Army), a smaller Marxist-Leninist insurgency founded in 1964 and still active with approximately 5,000 fighters, was not party to the Havana process. FARC dissident factions — particularly those led by 'Iván Márquez' who rejected the deal — reconstituted armed presence in border regions. Gulf Clan (Clan del Golfo), the dominant drug trafficking organization, filled territorial vacuums in many areas where FARC demobilized. And coca cultivation surged to record levels as farmers anticipated substitution programs that were delayed or inadequate. Gustavo Petro's 'Total Peace' policy (2022) attempts simultaneous negotiations with all armed actors — an ambitious framework that has produced some progress and significant setbacks. Colombia's is a peace that is real but incomplete, and its durability depends on implementation commitments that remain largely unfulfilled.",
  },
];

export default function ColombiaCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > active ? 1 : -1);
      setActive(index);
    },
    [active]
  );

  const prev = useCallback(() => {
    goTo((active - 1 + slides.length) % slides.length);
  }, [active, goTo]);

  const next = useCallback(() => {
    goTo((active + 1) % slides.length);
  }, [active, goTo]);

  const slide = slides[active];

  return (
    <div className="flex flex-col h-full">
      {/* Image area */}
      <div className="relative rounded-xl overflow-hidden bg-ink-900 border border-border/40" style={{ aspectRatio: "16/9" }}>
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d * 30 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d * -30 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-ink-800">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Gradient overlay for label */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4">
              <span className="text-[10px] font-medium text-white/60 tracking-widest uppercase">
                {slide.label}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors text-sm z-10"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors text-sm z-10"
        >
          ›
        </button>
      </div>

      {/* Dot navigation */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === active
                ? "w-4 h-1.5 bg-mechanism"
                : "w-1.5 h-1.5 bg-border hover:bg-text-muted"
            }`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="mt-3 flex-1 overflow-y-auto">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="font-serif font-semibold text-text-primary text-base mb-2">
              {slide.heading}
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              {slide.caption}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
