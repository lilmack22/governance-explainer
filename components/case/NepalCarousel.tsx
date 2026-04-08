"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images to be added to public/nepal/ — placeholder slides shown until then.
// Each slide below has a `placeholder` label shown in the image area.

interface Slide {
  placeholder: string;  // label shown in the placeholder box
  label: string;
  heading: string;
  caption: string;
}

const slides: Slide[] = [
  {
    placeholder: "People's War / Rural Nepal (1996–2006)",
    label: "1996–2006",
    heading: "The People's War",
    caption:
      "The Communist Party of Nepal (Maoist), led by Pushpa Kamal Dahal ('Prachanda') and Baburam Bhattarai, launched their 'People's War' in February 1996 with attacks on police posts in Rolpa District. The insurgency followed Maoist military doctrine: beginning in the remote western hills among Nepal's most marginalized communities, expanding by establishing parallel governance structures ('base areas'), and progressively encircling urban centers. By 2005, the Maoists governed approximately 80% of Nepal's rural territory. The civil war killed approximately 17,000 people over ten years. Unlike the RUF in Sierra Leone, the CPN-M maintained significant organizational discipline and a coherent political program — land reform, caste abolition, federal restructuring — that gave them genuine popular support among Janajati, Dalit, and landless communities. This organizational capacity would later enable them to transition from military force to electoral party.",
  },
  {
    placeholder: "Royal Palace / King Gyanendra (2001–2006)",
    label: "2001–2006",
    heading: "Royal Massacre and Gyanendra's Coup",
    caption:
      "In June 2001, Crown Prince Dipendra shot and killed King Birendra, Queen Aishwarya, and seven other members of the royal family at a palace gathering — apparently over a dispute about his choice of wife — then fatally wounded himself. The massacre traumatized Nepal's royalist identity and removed a popular, moderate king who had maintained public trust during the insurgency. His uncle Gyanendra became king. In February 2005, Gyanendra dismissed the elected government, assumed direct executive power, suspended civil liberties, and placed political leaders under house arrest — claiming the parliamentary parties had failed to defeat the Maoists. This coup was a decisive political miscalculation: instead of weakening the anti-monarchy forces, it united them. The parliamentary parties and the Maoists, previously hostile to each other, now shared a common enemy. The 12-Point Understanding between the Seven-Party Alliance and CPN-M, signed in November 2005, was the direct product of Gyanendra's overreach.",
  },
  {
    placeholder: "Jana Andolan II / April 2006 Protests",
    label: "April 2006",
    heading: "Jana Andolan II — The April Revolution",
    caption:
      "The second People's Movement (Jana Andolan II) erupted in April 2006 as hundreds of thousands of Nepalis took to the streets of Kathmandu and other cities in an extraordinary display of civic mobilization. The protests were led by the Seven-Party Alliance with implicit Maoist backing — a coalition that united the parliamentary center and the armed left against the monarchy. Gyanendra, faced with a population-wide rejection and under intense Indian diplomatic pressure, capitulated on April 24, 2006, restoring the parliament he had dissolved the previous year. The parliament's first act was to strip the monarchy of most of its powers. The April movement was peaceful — remarkable given the decade of brutal civil war that preceded it — and demonstrated that the Maoists had made a genuine strategic calculation: a mass urban uprising was more likely to end the monarchy than continued rural insurgency, and electoral politics offered more durable power than military control of remote territories.",
  },
  {
    placeholder: "Comprehensive Peace Agreement / November 2006",
    label: "November 21, 2006",
    heading: "The Comprehensive Peace Agreement",
    caption:
      "On November 21, 2006, the Government of Nepal and the CPN-M signed the Comprehensive Peace Agreement — ending a ten-year civil war. The agreement required the Maoist People's Liberation Army to enter UN-monitored cantonment camps; placed weapons from both the PLA and the Royal Nepal Army under joint UN-Nepal monitoring; and committed the parties to a Constituent Assembly election to draft a new constitution. The UN Mission in Nepal (UNMIN) was established to verify the agreement, particularly the arms management provisions. The CPA was a genuine institutional achievement — it created a framework for managing the transition that both sides had incentives to respect. But it deliberately deferred the hardest questions: PLA integration into the Nepal Army, the structure of federal provinces, and the design of transitional justice mechanisms were all left for the Constituent Assembly process. This deferral enabled peace in the short run and produced political crisis in the medium run.",
  },
  {
    placeholder: "Constituent Assembly Election / April 2008",
    label: "April 2008",
    heading: "Maoists Win the Constituent Assembly",
    caption:
      "Nepal's first Constituent Assembly election on April 10, 2008 produced a result that surprised virtually all analysts: the Maoists won the largest share of seats — approximately 36% — transforming the country's largest armed group into its largest political party in a single vote. The election was held under a mixed system combining first-past-the-post constituencies with proportional representation, and produced a body that was — for the first time in Nepali history — broadly representative of the country's ethnic, caste, gender, and geographic diversity. The assembly's first act was to abolish the 240-year-old Shah monarchy; Gyanendra accepted and vacated the palace within days. Prachanda became Nepal's first Prime Minister of the federal democratic republic. His government lasted less than a year — ending over a dispute about the army chief — but the institutional moment of democratic transformation was real.",
  },
  {
    placeholder: "2015 Constitution / Federal Nepal",
    label: "September 20, 2015",
    heading: "The Federal Democratic Constitution",
    caption:
      "Nepal's second Constituent Assembly promulgated a new constitution on September 20, 2015 — the culmination of a nine-year peace process. The constitution formally established Nepal as a federal democratic republic, divided into seven provinces; mandated that one-third of all elected representatives be women; established proportional representation provisions for Dalit, Janajati, Madhesi, Tharu, and Muslim communities; and formally prohibited caste discrimination. The constitution's promulgation was immediately contested by Madhesi and Tharu communities in the Terai plains, who objected to provincial boundary demarcations that they said gerrymandered them into demographic minorities within their home regions. India — backing the Madhesi concerns — allowed a fuel blockade that lasted several months, causing significant economic disruption. The 2015 earthquake, which had killed nearly 9,000 people six months earlier, added to the political and humanitarian pressure. Nepal's constitution is a genuine achievement and a contested document simultaneously.",
  },
];

export default function NepalCarousel() {
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
      {/* Placeholder image area */}
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
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            {/* Placeholder box */}
            <div className="absolute inset-0 bg-ink-800/60 border-2 border-dashed border-border/30 flex flex-col items-center justify-center gap-3 px-6">
              <svg
                className="w-8 h-8 text-text-muted/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 9.75h.008v.008H3V9.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>
              <p className="text-text-muted text-[11px] text-center max-w-[200px] leading-relaxed">
                {slide.placeholder}
              </p>
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4">
              <span className="text-[10px] font-medium text-white/50 tracking-widest uppercase">
                {slide.label}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

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
