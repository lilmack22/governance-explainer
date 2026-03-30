import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const cases = [
  {
    slug: "rwanda",
    country: "Rwanda",
    flag: "🇷🇼",
    region: "East Africa",
    headline: "From genocide to one of Africa's most capable states",
    question: "What explains this transformation?",
    status: "live" as const,
  },
  {
    slug: "botswana",
    country: "Botswana",
    flag: "🇧🇼",
    region: "Southern Africa",
    headline: "Avoiding the resource curse through elite cohesion",
    question: "Why did Botswana succeed where others failed?",
    status: "coming-soon" as const,
  },
  {
    slug: "liberia",
    country: "Liberia",
    flag: "🇱🇷",
    region: "West Africa",
    headline: "The limits of post-conflict state-building",
    question: "Why did reconstruction stall?",
    status: "coming-soon" as const,
  },
  {
    slug: "indonesia",
    country: "Indonesia",
    flag: "🇮🇩",
    region: "Southeast Asia",
    headline: "Managing democratic transition without collapse",
    question: "What made post-Suharto Indonesia survivable?",
    status: "coming-soon" as const,
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

        <div className="space-y-4">
          {cases.map((c, i) => (
            <ScrollReveal key={c.slug} delay={0.07 * i}>
              <div
                className={`group rounded-xl border bg-surface transition-all duration-300 ${
                  c.status === "live"
                    ? "border-mechanism/25 hover:border-mechanism/60 cursor-pointer"
                    : "border-border/30 opacity-50 cursor-default"
                }`}
              >
                {c.status === "live" ? (
                  <Link href={`/cases/${c.slug}`} className="block p-6 md:p-8">
                    <CaseRow c={c} />
                  </Link>
                ) : (
                  <div className="p-6 md:p-8">
                    <CaseRow c={c} comingSoon />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-16 p-8 rounded-xl border border-border/40 bg-surface-raised text-center">
          <p className="font-serif text-xl text-text-secondary italic mb-2">
            More cases in development
          </p>
          <p className="text-sm text-text-muted">
            Future additions: Colombia · Sierra Leone · South Korea · Mozambique · Bangladesh
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
  c: (typeof cases)[0];
  comingSoon?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div className="flex items-start gap-4">
        <span className="text-4xl mt-1">{c.flag}</span>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="font-serif font-bold text-xl text-text-primary">
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
