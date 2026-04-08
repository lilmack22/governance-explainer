"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Images go in public/botswana/
// e.g. public/botswana/seretse-khama.jpg

interface Slide {
  src: string;
  alt: string;
  label: string;
  heading: string;
  caption: string;
}

const slides: Slide[] = [
  {
    src: "/botswana/independence.jpg",
    alt: "Botswana independence celebration, September 30, 1966",
    label: "September 30, 1966",
    heading: "Independence — Starting from Zero",
    caption:
      "When Botswana gained independence on September 30, 1966, it was among the five poorest countries in the world. GDP per capita was approximately $70. The country had 12 kilometers of paved road. There were fewer than 100 Batswana with university degrees. More than 40% of Batswana men worked as migrant laborers in South Africa. The colonial administration had invested almost nothing in local human capital or infrastructure: Bechuanaland was administered cheaply as a labor reserve. Seretse Khama, the founding president, faced an almost impossible task — building a functioning state from scratch, in a landlocked country surrounded by apartheid South Africa to the south, Ian Smith's Rhodesia to the east, and Portuguese colonial Mozambique to the northeast. What he had was a cohesive political party (the BDP), a legitimate authority derived from his position as hereditary chief of the Bangwato, and a set of pre-colonial institutional norms — particularly the kgotla tradition of community deliberation — that would prove more durable than most analysts expected.",
  },
  {
    src: "/botswana/diamonds.jpg",
    alt: "Diamond mine at Orapa, Botswana",
    label: "1967–1971",
    heading: "The Diamond Discovery",
    caption:
      "Diamonds were discovered at Orapa in 1967, one year after independence — one of history's most consequential accidents of timing. The sequencing mattered enormously: Botswana's constitutional framework, political norms, and governing coalition all predated the resource revenues. Seretse Khama negotiated the Debswana joint venture with De Beers in 1969 — a 50/50 equity partnership that gave the state board seats, profit participation, and visibility into operations. When Jwaneng was discovered in 1973 (it would become the world's richest diamond mine by value), Botswana was already positioned to capture a large share of the revenues rather than simply receiving a royalty stream. By the 1990s, Botswana was capturing approximately 75% of diamond revenues through taxes, royalties, and dividends — a fundamentally different fiscal position than most African resource states, which typically captured 15–25%. The Debswana deal is studied in natural resource economics as a model of how state equity participation changes the distributional outcome of resource extraction.",
  },
  {
    src: "/botswana/seretse-khama.jpg",
    alt: "President Seretse Khama of Botswana",
    label: "1966–1980",
    heading: "Seretse Khama's Founding Leadership",
    caption:
      "Seretse Khama combined unusual personal characteristics: he was simultaneously a hereditary chief (kgosi) of the Bangwato — the largest Tswana group — and a Western-educated lawyer who had married a white English woman (Ruth Williams) in 1948, for which he had been exiled from Bechuanaland by the British, who feared upsetting South Africa. His exile made him a symbol of anti-apartheid resistance; his chieftaincy gave him traditional authority; his education gave him facility in both British institutions and African politics. Crucially, Khama established fiscal norms early. When diamond revenues began arriving, he insisted on saving them rather than distributing them as patronage. He created the Botswana Development Corporation, established performance-oriented civil service norms, and retained British expatriates on time-limited contracts with explicit knowledge transfer obligations while aggressively expanding university education. Khama governed for 14 years until his death in 1980; his successor, Ketumile Masire, continued his approach without interruption — establishing the precedent of peaceful intra-party succession that would hold for nearly six decades.",
  },
  {
    src: "/botswana/hiv-aids.jpg",
    alt: "HIV/AIDS clinic and treatment program in Botswana",
    label: "1997–2010",
    heading: "The HIV/AIDS Crisis and the Masa Response",
    caption:
      "By the late 1990s, Botswana's HIV adult prevalence had reached approximately 38% — the highest in the world. The epidemic was not simply a public health crisis; it was an economic and demographic emergency that threatened to hollow out the working-age population that managed the diamond economy and provided the civil service. Life expectancy fell from a peak of approximately 65 to roughly 47 years by 2000. President Festus Mogae's government responded in 2002 with the 'Masa' program ('new dawn' in Setswana) — universal, free antiretroviral treatment for all Batswana, regardless of income. The program was funded by diamond revenues (the Pula Fund), supported by the Gates Foundation and Merck, and implemented through a rapidly expanded clinic network. By 2010, approximately 90% of eligible HIV patients were on treatment — one of the highest coverage rates anywhere in sub-Saharan Africa. Life expectancy recovered toward 65 by 2015 and continues to climb. Masa demonstrates that state capacity built over decades — funded by well-managed diamond revenues — can respond to an existential public health crisis in ways that weaker states cannot.",
  },
  {
    src: "/botswana/elections.jpg",
    alt: "Botswana election, voters at polling stations",
    label: "Every 5 Years, 1969–2024",
    heading: "Six Decades of Competitive Elections",
    caption:
      "Botswana has held competitive national elections in 1969, 1974, 1979, 1984, 1989, 1994, 1999, 2004, 2009, 2014, 2019, and 2024 — every five years without interruption, under the same constitutional framework established at independence. The BDP won every election from 1966 until 2024 — 58 years of continuous rule — but within rules that permitted genuine opposition organizing, a free press, and an independent judiciary. This pattern of dominant party democracy within competitive institutions is analytically distinct from authoritarian single-party states: what made the BDP dominant was structural advantages (rural voter networks, incumbency, organizational capacity) rather than coercive exclusion of rivals. When those structural advantages eroded — as Botswana's economy slowed, diamond dependency became more visible, and the opposition unified under Duma Boko's Umbrella for Democratic Change — power transferred peacefully in 2024. The 2024 election completed democratic consolidation in the sense that Linz and Stepan (Problems of Democratic Transition and Consolidation) would recognize: competitive politics became 'the only game in town.'",
  },
  {
    src: "/botswana/gaborone.jpg",
    alt: "Gaborone city skyline, Botswana's capital",
    label: "The Transformation in Context",
    heading: "Gaborone and the Botswana Exception",
    caption:
      "Gaborone — the capital established at independence because the colonial administrative center (Mafikeng) was across the border in South Africa — has grown from a small planned town into a functioning modern city with international conference facilities, a university, and a growing financial sector. GDP per capita grew from approximately $70 at independence to over $8,000 today — a 115-fold increase that makes Botswana one of the fastest sustained growth stories in post-colonial development history. But Gaborone's prosperity also reflects the limits of Botswana's development model: the capital concentrates economic activity while large parts of the country remain poor; the formal economy is largely diamond-dependent; and the San (Basarwa) communities — historically displaced and excluded from the diamond economy — remain among the most marginalized people in Africa. Botswana's story is not a simple success story; it is a story about what well-managed resource revenues can buy, and what they cannot. They can buy infrastructure, health services, education, and a functioning state. They cannot automatically produce equality, diversification, or inclusive participation in the formal economy.",
  },
];

export default function BotswanaCarousel() {
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
