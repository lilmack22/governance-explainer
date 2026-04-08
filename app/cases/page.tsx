import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Status = "live" | "coming-soon";

interface Case {
  slug: string;
  country: string;
  flag: string;
  region: string;
  headline: string;
  question: string;
  status: Status;
  dev: boolean;
  dem: boolean;
  conflict: boolean;
}

const cases: Case[] = [
  // Development cases
  {
    slug: "south-korea",
    country: "South Korea",
    flag: "🇰🇷",
    region: "East Asia",
    headline: "State-directed industrialization and democratic transition",
    question: "How did a war-torn agrarian economy become a tech giant in one generation?",
    status: "coming-soon",
    dev: true, dem: true, conflict: false,
  },
  {
    slug: "taiwan",
    country: "Taiwan",
    flag: "🇹🇼",
    region: "East Asia",
    headline: "Land reform, export manufacturing, and managed democratization",
    question: "How did the KMT build prosperity before ceding power?",
    status: "coming-soon",
    dev: true, dem: true, conflict: false,
  },
  {
    slug: "singapore",
    country: "Singapore",
    flag: "🇸🇬",
    region: "Southeast Asia",
    headline: "FDI, meritocracy, and durable single-party rule",
    question: "How does a city-state with no natural resources sustain world-class living standards?",
    status: "coming-soon",
    dev: true, dem: false, conflict: false,
  },
  {
    slug: "botswana",
    country: "Botswana",
    flag: "🇧🇼",
    region: "Southern Africa",
    headline: "Avoiding the resource curse through elite cohesion",
    question: "Why did Botswana succeed where others failed?",
    status: "live",
    dev: true, dem: false, conflict: true,
  },
  {
    slug: "rwanda",
    country: "Rwanda",
    flag: "🇷🇼",
    region: "East Africa",
    headline: "From genocide to one of Africa's most capable states",
    question: "What explains this transformation?",
    status: "live",
    dev: true, dem: false, conflict: true,
  },
  {
    slug: "chile",
    country: "Chile",
    flag: "🇨🇱",
    region: "South America",
    headline: "The neoliberal experiment and its democratic aftermath",
    question: "Did Pinochet's economic model survive the return of democracy?",
    status: "coming-soon",
    dev: true, dem: true, conflict: false,
  },
  {
    slug: "brazil",
    country: "Brazil",
    flag: "🇧🇷",
    region: "South America",
    headline: "ISI, hyperinflation, and the rise and fall of the PT model",
    question: "Why have Brazil's development gains not produced lasting stability?",
    status: "coming-soon",
    dev: true, dem: true, conflict: false,
  },
  {
    slug: "south-africa",
    country: "South Africa",
    flag: "🇿🇦",
    region: "Southern Africa",
    headline: "Liberation movement governance and the limits of negotiated transition",
    question: "Why has post-apartheid South Africa failed to close its inequality gap?",
    status: "coming-soon",
    dev: true, dem: true, conflict: true,
  },
  {
    slug: "mexico",
    country: "Mexico",
    flag: "🇲🇽",
    region: "North America",
    headline: "Hegemonic party rule, NAFTA, and gradual democratization",
    question: "How did 71 years of PRI dominance unravel without rupture?",
    status: "coming-soon",
    dev: true, dem: true, conflict: false,
  },
  {
    slug: "russia",
    country: "Russia",
    flag: "🇷🇺",
    region: "Eastern Europe",
    headline: "Oil rents, oligarchs, and authoritarian retrenchment",
    question: "Why did Russia's post-Soviet democratic opening reverse into consolidated authoritarianism?",
    status: "coming-soon",
    dev: true, dem: false, conflict: false,
  },
  {
    slug: "colombia",
    country: "Colombia",
    flag: "🇨🇴",
    region: "South America",
    headline: "Insurgency, coca, and a half-century path to negotiated peace",
    question: "How did Colombia move toward ending one of the world's longest-running conflicts?",
    status: "live",
    dev: true, dem: true, conflict: true,
  },
  {
    slug: "peru",
    country: "Peru",
    flag: "🇵🇪",
    region: "South America",
    headline: "Shining Path and the authoritarian bargain",
    question: "How did Fujimori defeat the insurgency — and what did it cost?",
    status: "coming-soon",
    dev: true, dem: false, conflict: true,
  },
  {
    slug: "indonesia",
    country: "Indonesia (Aceh)",
    flag: "🇮🇩",
    region: "Southeast Asia",
    headline: "Tsunami, autonomy, and post-conflict reconstruction",
    question: "How did a natural disaster create a window for peace?",
    status: "coming-soon",
    dev: true, dem: true, conflict: true,
  },
  {
    slug: "philippines-mindanao",
    country: "Philippines (Mindanao)",
    flag: "🇵🇭",
    region: "Southeast Asia",
    headline: "Autonomy arrangements and uneven conflict reduction",
    question: "Can political accommodation substitute for military victory?",
    status: "coming-soon",
    dev: true, dem: true, conflict: true,
  },
  // Democratization-only cases
  {
    slug: "spain",
    country: "Spain",
    flag: "🇪🇸",
    region: "Southern Europe",
    headline: "Elite pacts and the paradigm case of negotiated transition",
    question: "How did Spain dismantle Francoism from within its own institutions?",
    status: "coming-soon",
    dev: false, dem: true, conflict: true,
  },
  {
    slug: "poland",
    country: "Poland",
    flag: "🇵🇱",
    region: "Eastern Europe",
    headline: "Solidarity and mass mobilization against communism",
    question: "How did a trade union help bring down a communist regime?",
    status: "coming-soon",
    dev: false, dem: true, conflict: true,
  },
  {
    slug: "tunisia",
    country: "Tunisia",
    flag: "🇹🇳",
    region: "North Africa",
    headline: "The Arab Spring's only success — and its reversal",
    question: "Why did Tunisia democratize when others didn't — and why is it backsliding?",
    status: "coming-soon",
    dev: false, dem: true, conflict: true,
  },
  {
    slug: "el-salvador",
    country: "El Salvador",
    flag: "🇸🇻",
    region: "Central America",
    headline: "Civil war settlement and the guerrillas' conversion to politics",
    question: "How did the FMLN transform from insurgency to governing party?",
    status: "coming-soon",
    dev: false, dem: true, conflict: true,
  },
  {
    slug: "sierra-leone",
    country: "Sierra Leone",
    flag: "🇸🇱",
    region: "West Africa",
    headline: "RUF atrocities and the path to post-war stabilization",
    question: "How did international intervention help end one of the world's most brutal conflicts?",
    status: "live",
    dev: false, dem: true, conflict: true,
  },
  {
    slug: "nepal",
    country: "Nepal",
    flag: "🇳🇵",
    region: "South Asia",
    headline: "Maoist insurgency to federal democratic republic",
    question: "How did a People's War end in a constituent assembly rather than revolution?",
    status: "live",
    dev: false, dem: true, conflict: true,
  },
  {
    slug: "bosnia",
    country: "Bosnia & Herzegovina",
    flag: "🇧🇦",
    region: "Southeast Europe",
    headline: "Dayton's frozen democracy",
    question: "Can externally-imposed power-sharing agreements produce genuine peace?",
    status: "coming-soon",
    dev: false, dem: true, conflict: true,
  },
  {
    slug: "liberia",
    country: "Liberia",
    flag: "🇱🇷",
    region: "West Africa",
    headline: "The limits of post-conflict state-building",
    question: "Why did reconstruction stall?",
    status: "coming-soon",
    dev: false, dem: true, conflict: true,
  },
  // Conflict-only cases
  {
    slug: "sri-lanka",
    country: "Sri Lanka",
    flag: "🇱🇰",
    region: "South Asia",
    headline: "Military victory without political reconciliation",
    question: "Can a war be won without addressing the grievances that caused it?",
    status: "coming-soon",
    dev: false, dem: false, conflict: true,
  },
  {
    slug: "rio-de-janeiro",
    country: "Rio de Janeiro",
    flag: "🇧🇷",
    region: "South America",
    headline: "Urban pacification and its collapse",
    question: "Why did Rio's favela security program fail to produce lasting peace?",
    status: "coming-soon",
    dev: false, dem: false, conflict: true,
  },
];

const sections = [
  {
    question: "What causes development?",
    description: "Cases that illuminate why some countries industrialize, grow, and expand human capability — while others stagnate.",
    filter: (c: Case) => c.dev,
  },
  {
    question: "What causes democratization?",
    description: "Cases that explore how authoritarian regimes give way to competitive politics — and why some transitions consolidate while others reverse.",
    filter: (c: Case) => c.dem,
  },
  {
    question: "What reduces armed conflict and violence?",
    description: "Cases that examine how civil wars end, insurgencies are defeated or negotiated away, and post-conflict order is — or isn't — built.",
    filter: (c: Case) => c.conflict,
  },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="mb-16">
          <span className="text-xs font-medium text-mechanism tracking-widest uppercase block mb-3">
            Case Explorer
          </span>
          <h1 className="font-serif text-5xl font-bold text-text-primary mb-4">
            Country transformations
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Each case study starts with a puzzle — a transformation or failure
            that demands explanation. Click any live case to explore its causal
            mechanisms and the theories behind them.
          </p>
        </ScrollReveal>

        <div className="space-y-20">
          {sections.map((section, si) => {
            const sectionCases = cases.filter(section.filter);
            return (
              <ScrollReveal key={section.question} delay={0.05 * si}>
                <div className="mb-6">
                  <h2 className="font-serif text-2xl font-bold text-text-primary mb-2">
                    {section.question}
                  </h2>
                  <p className="text-text-muted text-sm max-w-2xl">
                    {section.description}
                  </p>
                </div>
                <div className="space-y-3">
                  {sectionCases.map((c, i) => (
                    <ScrollReveal key={`${section.question}-${c.slug}`} delay={0.05 * i}>
                      <div
                        className={`group rounded-xl border bg-surface transition-all duration-300 ${
                          c.status === "live"
                            ? "border-mechanism/25 hover:border-mechanism/60 cursor-pointer"
                            : "border-border/30 opacity-50 cursor-default"
                        }`}
                      >
                        {c.status === "live" ? (
                          <Link href={`/cases/${c.slug}`} className="block p-5 md:p-6">
                            <CaseRow c={c} />
                          </Link>
                        ) : (
                          <div className="p-5 md:p-6">
                            <CaseRow c={c} comingSoon />
                          </div>
                        )}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3} className="mt-20 p-8 rounded-xl border border-border/40 bg-surface-raised text-center">
          <p className="font-serif text-xl text-text-secondary italic mb-2">
            More cases in development
          </p>
          <p className="text-sm text-text-muted">
            Future additions: DR Congo · Afghanistan · Egypt · Bangladesh · Mozambique
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}

function CaseRow({
  c,
  comingSoon,
}: {
  c: Case;
  comingSoon?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div className="flex items-start gap-4">
        <span className="text-3xl mt-0.5">{c.flag}</span>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="font-serif font-bold text-lg text-text-primary">
              {c.country}
            </p>
            <span className="text-[10px] text-text-muted">{c.region}</span>
          </div>
          <p className="text-text-secondary text-sm mb-1">{c.headline}</p>
          <p className="text-text-muted text-sm italic">"{c.question}"</p>
        </div>
      </div>
      <div className="shrink-0 mt-1">
        {comingSoon ? (
          <span className="text-[10px] text-text-muted border border-border/40 rounded-full px-2.5 py-1">
            Coming soon
          </span>
        ) : (
          <span className="text-xs text-mechanism group-hover:translate-x-1 transition-transform inline-block">
            Explore →
          </span>
        )}
      </div>
    </div>
  );
}
