"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Images go in public/sierra-leone/
// e.g. public/sierra-leone/ruf-war.jpg

interface Slide {
  src: string;
  alt: string;
  label: string;
  heading: string;
  caption: string;
}

const slides: Slide[] = [
  {
    src: "/sierra-leone/ruf-atrocities.jpg",
    alt: "Sierra Leone civil war, RUF amputee victims",
    label: "1991–2002",
    heading: "The RUF War",
    caption:
      "The Revolutionary United Front's eleven-year war (1991–2002) was distinguished by its deliberate targeting of civilians with grotesque and systematic violence. The RUF's signature tactic — amputating the hands, arms, and legs of civilians, including children — was not random; it was a calculated terror strategy designed to demonstrate state impotence and create a population incapable of working or voting. Child soldiers — abducted, drugged, and forced to kill family members to prevent return home — were the RUF's primary fighting force. Jeremy Weinstein (Inside Rebellion) identifies the RUF as the paradigmatic case of an 'opportunistic' rebel organization: one financed by resource extraction (alluvial diamonds) rather than ideological commitment, which produces fighters motivated by loot rather than political program, and which therefore lacks both the organizational discipline and the political vision necessary for meaningful peace negotiations. This organizational character explains both the war's brutality and why the Lomé Peace Accord of 1999 — which treated the RUF as a legitimate political actor — was doomed to fail.",
  },
  {
    src: "/sierra-leone/ecomog.jpg",
    alt: "ECOMOG Nigerian peacekeeping troops, Sierra Leone",
    label: "1997–2000",
    heading: "ECOMOG: Regional Military Intervention",
    caption:
      "The Economic Community of West African States Monitoring Group (ECOMOG), led primarily by Nigeria under General Sani Abacha, was the primary external military actor in Sierra Leone through most of the conflict. After the 1997 AFRC-RUF coup that overthrew President Kabbah, ECOMOG imposed a naval blockade, conducted air operations against Freetown, and eventually re-took the capital in February 1998 — restoring the elected government. ECOMOG's intervention was imperfect: Nigerian troops committed human rights violations, logistics were chaotic, and the mission was sustained by Nigeria's geopolitical ambitions as much as humanitarian concern. But it established a critical precedent: external military force could reverse the RUF-AFRC gains, something that international negotiations could not achieve. West African regional security — whatever its flaws — was more effective than the international community's diplomatic approaches. Without ECOMOG, Sierra Leone would likely have remained under RUF-AFRC control.",
  },
  {
    src: "/sierra-leone/operation-palliser.jpg",
    alt: "British soldiers, Operation Palliser, Sierra Leone 2000",
    label: "May 2000",
    heading: "Operation Palliser — The British Intervention",
    caption:
      "When the RUF seized 500 UNAMSIL peacekeepers as hostages in May 2000 and advanced toward Freetown, Britain deployed approximately 1,000 troops under Operation Palliser — ostensibly to evacuate British nationals, but effectively to shore up the failing UNAMSIL mission and prevent a humanitarian catastrophe. The deployment was small by conventional military standards but decisive in its effect. British Special Forces (22 SAS) rescued most of the UNAMSIL hostages; Parachute Regiment and Royal Marines units trained and supported the Sierra Leone Army in direct operations against the RUF. The West Side Boys — a splinter armed faction that captured British soldiers — were destroyed in Operation Barras, a textbook hostage rescue. Foday Sankoh was captured attempting to flee Freetown. The British intervention demonstrated something the diplomatic community found uncomfortable: the RUF could not withstand a professional Western military force, and no amount of negotiation could substitute for credible military coercion in dealing with an organization that had no genuine interest in a negotiated outcome.",
  },
  {
    src: "/sierra-leone/ddr.jpg",
    alt: "Disarmament and demobilization of Sierra Leone ex-combatants",
    label: "2000–2004",
    heading: "Disarmament, Demobilization, and Reintegration",
    caption:
      "Sierra Leone's DDR process — managed by UNAMSIL with World Bank and bilateral donor support — demobilized approximately 72,000 ex-combatants between 2000 and 2004. The process involved four phases: disarmament (weapons surrender at collection points), demobilization (registration and administrative discharge), reinsertion (immediate short-term support), and reintegration (longer-term vocational training, education, and economic support). Sierra Leone's DDR is studied in the academic literature as both an achievement and a cautionary tale. The sheer number of ex-combatants processed was logistically remarkable. But reintegration was chronically underfunded — vocational training lasted weeks rather than months; education stipends were inadequate; child soldier reintegration was particularly poorly designed, with inadequate psychosocial support for adolescents who had spent years as fighters. Most ex-combatants returned to unemployment in exactly the social conditions that had enabled their recruitment — a problem the program did not solve.",
  },
  {
    src: "/sierra-leone/special-court.jpg",
    alt: "Special Court for Sierra Leone, Charles Taylor trial",
    label: "2002–2013",
    heading: "The Special Court and Charles Taylor's Conviction",
    caption:
      "The Special Court for Sierra Leone (SCSL), established in 2002 as a hybrid UN-Sierra Leone tribunal, tried those bearing 'greatest responsibility' for atrocities committed after November 1996. Its most historically significant achievement was the conviction of Charles Taylor, former President of Liberia, in April 2012 — the first sitting or former head of state convicted by an international tribunal since Nuremberg. Taylor received a 50-year sentence for aiding and abetting RUF war crimes and crimes against humanity, including terrorizing the civilian population, murder, rape, sexual slavery, and the use of child soldiers. The SCSL also convicted the RUF's senior military leadership — Issa Sesay, Morris Kallon, and Augustine Gbao. The Court made landmark legal contributions: it established that forced marriage is a crime against humanity; that recruitment of child soldiers is a war crime; and that heads of state have no immunity before international criminal tribunals. Its hybrid model — international law applied through an institution with national participation — has influenced subsequent post-conflict accountability design.",
  },
  {
    src: "/sierra-leone/free-education.jpg",
    alt: "Sierra Leone school children, Free Quality Education program",
    label: "2018–Present",
    heading: "Julius Maada Bio and Free Quality Education",
    caption:
      "Julius Maada Bio won the 2018 presidential election — the second peaceful transfer of power in Sierra Leone's post-war history — and immediately launched the 'Free Quality School Education' (FQSE) program: abolishing school fees for all public primary and secondary school students, with accompanying government provision of textbooks, uniforms, and school meals. Enrollment increased sharply — from approximately 1.8 million to over 2 million students — within the first year. The program is the most ambitious education initiative in post-war Sierra Leone and has received significant international donor support. Its weaknesses are real and acknowledged: teacher training is inadequate, school infrastructure is insufficient for the expanded enrollment, and quality — measured by learning outcomes — lags far behind quantity. But the policy direction is clear: unlike the fragmented, fee-based education system that excluded the poorest families, FQSE represents a genuine commitment to treating education as a universal public good rather than a private purchase. Its long-term success will depend on sustained investment in quality alongside the enrollment gains.",
  },
];

export default function SierraLeoneCarousel() {
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4">
              <span className="text-[10px] font-medium text-white/60 tracking-widest uppercase">
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
