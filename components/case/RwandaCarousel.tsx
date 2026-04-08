"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  src: string;
  alt: string;
  label: string;
  heading: string;
  caption: string;
}

const slides: Slide[] = [
  {
    src: "/rwanda/genocide.png",
    alt: "Genocide survivor, Rwanda 1994",
    label: "April–July 1994",
    heading: "The Genocide",
    caption:
      "Between April and July 1994, an estimated 800,000 to 1,000,000 people — primarily Tutsi and moderate Hutu — were killed in approximately 100 days. The genocide was not spontaneous: it was planned and coordinated by the Hutu Power extremist government, with kill lists prepared in advance, Interahamwe militias armed and trained for months beforehand, and Radio Mille Collines broadcasting names and locations of Tutsi civilians in real time. Administrative networks that Rwanda inherited from Belgian colonialism — which had institutionalized ethnic ID cards beginning in 1933 — were weaponized to organize mass killing at the village level. The RPF, led by Paul Kagame, halted the genocide by seizing Kigali in July 1994 and establishing military control. The UN mission (UNAMIR) was already present but had been denied authorization to intervene. The genocide's scale and the international community's failure to stop it are the context against which everything that followed must be understood.",
  },
  {
    src: "/rwanda/gov-national-unity.jpg",
    alt: "Government of National Unity, Rwanda 1994",
    label: "1994–2003",
    heading: "Government of National Unity and RPF Consolidation",
    caption:
      "When the RPF seized Kigali in July 1994, it inherited a country whose state had been almost entirely destroyed — the civil service gutted, courts non-functional, roughly two million Hutus fled to camps in Zaire. Rather than declare outright RPF rule, Kagame constructed a Government of National Unity: a Hutu, Pasteur Bizimungu, was installed as president; cabinet posts were distributed across parties; the prime ministership went to Faustin Twagiramungu of the MDR. Kagame served as Vice President and Minister of Defence — formally subordinate, actually in command. This arrangement was partly tactical (it signalled reconciliation to donors and forestalled international isolation) and partly structural (the RPF lacked the numbers to govern through pure ethnic majority rule). Over the following years the façade was progressively stripped away. Twagiramungu resigned in 1995 citing RPF interference. Bizimungu was eased out in 2000 and later arrested on charges of inciting ethnic division, sentenced to 15 years in prison. By the time Rwanda's 2003 constitution was adopted — banning ethnically-based political parties, enshrining gender quotas, and introducing a seven-year presidential term — the RPF's political dominance was complete and legal. The GNU period matters because it shows how the post-genocide political settlement was assembled: real power concentrated, opposition co-opted or eliminated, and a unitary national identity enforced from above.",
  },
  {
    src: "/rwanda/gacaca-courts.jpg",
    alt: "Gacaca community court session, Rwanda",
    label: "2001–2012",
    heading: "Gacaca: Community Justice at Scale",
    caption:
      "At the end of the genocide, Rwandan prisons held approximately 130,000 suspects — roughly one in ten adult males. The formal court system had been destroyed; prosecuting cases individually at the rate of a few hundred per year would have taken centuries. Rwanda's answer was Gacaca (pronounced ga-CHA-cha): a revival and massive scaling of a traditional community dispute-resolution practice, formalized into law in 2001 and operational from 2005. At its peak, approximately 12,000 Gacaca tribunals operated simultaneously across the country, each presided over by elected community judges (inyangamugayo — 'persons of integrity') with no formal legal training. Over the system's decade of operation, nearly two million cases were heard. Perpetrators who confessed received reduced sentences; survivors testified in public; communities were confronted with the full accounting of what had happened among neighbors. The system's proponents argue it was the only realistic mechanism for transitional justice at this scale, and that it produced a degree of truth-telling and local accountability that formal courts could not have achieved. Critics — including Human Rights Watch — documented serious due-process concerns: the absence of trained legal counsel, intimidation of witnesses, and the use of Gacaca to settle personal scores. The courts were also barred from prosecuting RPF crimes committed during and after the genocide, creating what critics called a victor's justice structure. Gacaca closed in 2012, having processed more cases of mass atrocity than any legal process in history.",
  },
  {
    src: "/rwanda/umuganda-1.webp",
    alt: "Rwandans participating in Umuganda community labor",
    label: "Monthly Community Labor",
    heading: "Umuganda",
    caption:
      "Umuganda has pre-colonial roots as a traditional Rwandan practice of communal labor — neighbors gathering to build a home, clear land, or repair a path. Habyarimana's government formalized it as a mandatory national program in 1974, requiring citizens to contribute regular labor to state-directed projects. It lapsed during the political crisis and genocide of the early 1990s, then was revived by the RPF and codified into law in 2007. On the last Saturday of every month, virtually all Rwandans between the ages of 18 and 65 are now required to spend the morning on community work — clearing drainage ditches, building schools, terracing hillsides, or repairing roads. Absentees can be fined or questioned by local officials. After 1994 the practice was systematically redesigned as both a reconstruction tool and a mechanism for social reengineering: its explicit purpose is to bring Hutus and Tutsis to work side-by-side, replacing ethnic identity with a shared civic identity as Rwandans. The program generates significant public infrastructure at minimal cost to the state. Critics note that compulsory participation reinforces the broader culture of visible compliance the government cultivates — and that its local administration can be used to monitor and report on political attitudes.",
  },
  {
    src: "/rwanda/kigali-street.jpg",
    alt: "Kigali city street, 2018",
    label: "Post-1994 Transformation",
    heading: "Kigali's Reconstruction",
    caption:
      "From a city in ruins in 1994, Kigali has become one of the most orderly and rapidly developing capitals in sub-Saharan Africa. Plastic bags were banned in 2008 — before most European cities had considered such measures. Streets are swept and litter-free; the city routinely tops lists of Africa's cleanest and most livable capitals. GDP per capita grew from roughly $100 in 1994 to over $1,000 by 2024 — a tenfold increase. Foreign direct investment has grown steadily, with the Kigali Convention Centre and Kigali Innovation City serving as flagship projects signaling Rwanda's ambitions as a regional hub for business and ICT. Life expectancy — which fell to roughly 28 years at the genocide's nadir — has climbed to approximately 70 years. These gains are real, measurable, and recognized even by Rwanda's sharpest critics. They are also inseparable from the political architecture that produced them.",
  },
  {
    src: "/rwanda/kagame.png",
    alt: "President Paul Kagame",
    label: "President since 2000",
    heading: "Kagame's Three-Decade Rule",
    caption:
      "Paul Kagame has been Rwanda's dominant political figure since the RPF seized power in July 1994 — first as Vice President and de facto leader under President Bizimungu, then as President since 2000. He is Tutsi, a member of a group that constituted roughly 14% of the population before the genocide. His government has responded to the demographic vulnerability of minority rule with a distinctive strategy: ethnic identity has been formally erased from political life. The 2003 constitution prohibits political parties based on ethnicity, religion, or region. Ethnic labels — Hutu, Tutsi, Twa — cannot be used in public political discourse and no longer appear on national identity cards. In 2015, Kagame organized a constitutional referendum that lifted presidential term limits, clearing the way for him to remain in power until 2034. He won the 2017 election with 99% of the vote; the 2003 and 2010 elections showed similar figures. His defenders argue this stability has been the precondition for development. His critics — including several former RPF insiders who have fled the country — describe a system of concentrated power with no credible succession mechanism.",
  },
  {
    src: "/rwanda/repression.jpg",
    alt: "Rwandan opposition figure under arrest, escorted by police",
    label: "Repression & Political Control",
    heading: "Surveillance, Repression, and Exclusion",
    caption:
      "Rwanda's development record coexists with a political system that Freedom House consistently rates 'Not Free.' Opposition parties exist on paper but operate under severe constraints. Victoire Ingabire, who returned from exile in 2010 to run for president, was arrested, tried on genocide ideology charges, and sentenced to 15 years in prison (later reduced and commuted). Journalist and government critic Jean-Léonard Rugambage was shot outside his home in 2010. Bernard Ntaganda, founder of the PS-Imberakuri party, was imprisoned in 2010. Human Rights Watch and Amnesty International have documented a pattern in which criticism of the government — including questions about ethnic power distribution — is prosecuted as 'genocide ideology' or 'divisionism' under laws whose vagueness allows broad application. The state's surveillance capacity extends into the diaspora: the 2022 report 'Rwanda: A Case Study in Transnational Repression' documents Rwandan intelligence monitoring, threatening, and in some cases forcibly returning critics living abroad. This is not an incidental feature of Kagame's Rwanda — it is structural.",
  },
  {
    src: "/rwanda/m23-fighters.jpg",
    alt: "M23 rebel fighters in eastern DRC",
    label: "Regional Conflict",
    heading: "M23 and Rwanda's Role in the DRC",
    caption:
      "The M23 rebel group — named for the March 23, 2009 peace agreement it claims was violated — has been fighting in eastern DRC since 2012, with a major resurgence beginning in 2021. The group is predominantly Tutsi and draws fighters largely from the Congolese Tutsi community (Banyamulenge). The UN Group of Experts has published multiple reports — in 2012, 2022, 2023, and 2024 — documenting Rwandan Defence Force troops embedded with M23, Rwandan territory used as a logistics base, and Rwandan officers commanding M23 operations. The United States, European Union, United Kingdom, and Belgium have all formally accused Rwanda of supporting M23. Several donors, including the U.S. and some European countries, suspended or redirected aid to Rwanda in 2023–2024 in response. Rwanda denies direct involvement, citing security threats from the FDLR — a militia composed partly of Hutu perpetrators of the 1994 genocide who fled to the DRC — as justification for its interest in eastern Congo. M23 seized Goma, the DRC's largest eastern city, in January 2025, deepening the humanitarian crisis. The conflict illustrates how Rwanda's security logic — shaped by the genocide and the vulnerability of minority rule — extends its reach far beyond its borders.",
  },
];

export default function RwandaCarousel() {
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
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
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
