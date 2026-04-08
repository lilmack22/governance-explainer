import type { TextEntry } from "@/data/types";

const oneEconomicsManyRecipes: TextEntry = {
  slug: "one-economics-many-recipes",
  title: "One Economics, Many Recipes: Globalization, Institutions, and Economic Growth",
  shortTitle: "One Economics, Many Recipes",
  year: 2007,
  publisher: "Princeton University Press",

  authors: [
    {
      name: "Dani Rodrik",
      title: "Ford Foundation Professor of International Political Economy",
      institution: "Harvard Kennedy School",
      bio:
        "Dani Rodrik is one of the most influential development economists of his generation, known for empirically rigorous challenges to orthodox trade and growth prescriptions. His career at Harvard Kennedy School has spanned trade policy, industrial policy, institutional economics, and global governance. One Economics, Many Recipes synthesizes his two decades of research into a coherent framework: universal economic principles apply everywhere, but the policy implications are highly context-dependent. His later work has extended these themes to globalization's political discontents.",
    },
  ],

  overview:
    "One Economics, Many Recipes is Dani Rodrik's most systematic statement of his heterodox development economics. The title captures the core thesis: there is only one economics — the principles of incentives, scarcity, and market coordination apply universally — but the specific policies that implement those principles are highly context-dependent. The same principle (property rights matter) may require very different institutional arrangements in China versus Chile versus Côte d'Ivoire. The mistake of the Washington Consensus was conflating universal principles with specific institutional templates. " +
    "The book develops two methodological frameworks. First, 'growth diagnostics': rather than applying a generic reform checklist, policymakers should identify the binding constraints on growth in a specific context — the one or two bottlenecks whose removal would unlock the most investment and activity. Second, 'second-best institutions': because first-best institutions (perfect property rights, perfect courts, perfect contracts) are rarely achievable in developing country contexts, the relevant question is which second-best arrangements produce reasonable economic performance given available political and institutional capacity. " +
    "Rodrik also defends industrial policy — strategically supporting specific industries or activities — as a legitimate and empirically validated development tool, contra mainstream economics orthodoxy. His defense is conditional: the information problems that plague industrial policy can be managed if the right institutional conditions are in place, including embedded autonomy (Evans) and mechanisms for feedback and self-discovery.",

  coreArguments: [
    {
      heading: "Universal economic principles do not imply universal policies",
      body:
        "Economic theory establishes that incentives matter, markets can fail in predictable ways, and institutions affect economic performance. But these universal principles do not specify a unique set of policies or institutions. Property rights matter — but they can be secured through many different legal and informal arrangements. Competition matters — but optimal levels of protection, regulation, and public provision vary with context. The Washington Consensus erred in treating particular institutional forms as universal requirements.",
    },
    {
      heading: "Growth diagnostics: find the binding constraint, not the longest checklist",
      body:
        "Standard reform packages treat all governance and policy failures as equally urgent. But growth is driven by investment at the margin, and investment is constrained by the most binding bottleneck — not the average level of all problems. Countries with macro instability need fiscal reform; countries with good macro but missing finance need financial sector development; countries with finance but low returns need infrastructure or human capital. Fixing non-binding constraints while leaving the binding one in place produces no growth.",
    },
    {
      heading: "Industrial policy is necessary and defensible",
      body:
        "The standard objection to industrial policy — that governments cannot pick winners and are corrupted by the attempt — is empirically unsupported as a general claim. Many successful developers used active industrial policy. The relevant question is not whether to have industrial policy but what institutional conditions make it effective. Rodrik identifies three: a capable, insulated bureaucracy; mechanisms for firms to signal where interventions are needed; and sunset clauses so failed interventions can be abandoned.",
    },
    {
      heading: "Institutions must be tailored to local context, not imported wholesale",
      body:
        "Successful institutional development is a process of 'local institutional experimentation' — identifying the forms of property rights, contract enforcement, and market regulation that function in a given social and political context. China's township-village enterprises, India's software sector's informal intellectual property regime, and South Korea's export discipline mechanisms all worked without resembling textbook institutions. The evidence supports heterodox forms if they serve the underlying economic functions.",
    },
  ],

  keyConcepts: [
    {
      name: "Growth diagnostics",
      definition:
        "A framework for identifying the most binding constraint on economic growth in a specific country context. Rather than applying a reform checklist, growth diagnostics asks: what is holding back investment right now? Is it macro instability, lack of finance, inadequate infrastructure, low human capital, poor governance, or something else? The policy prescription follows from the diagnosis — not from general reform recipes.",
    },
    {
      name: "Second-best institutions",
      definition:
        "Institutional arrangements that are not textbook-optimal but produce reasonable economic performance given constraints of political capacity, social norms, and administrative capability. Because first-best institutions often cannot be created in short order, effective development policy works with second-best arrangements that fit the available context. Examples: China's dual-track pricing, informal property rights in African cities, performance-based subsidies for exporters.",
    },
    {
      name: "The augmented Washington Consensus",
      definition:
        "Rodrik's critical label for the expanded reform agenda that added institutional requirements (property rights, anti-corruption, governance) to the original macroeconomic Washington Consensus. While the original was too narrow, the augmented version is too long — a comprehensive list of required institutional reforms that no country can implement simultaneously and that fails to prioritize the binding constraints.",
    },
  ],

  casesAndExamples: [
    {
      country: "China",
      description:
        "China is Rodrik's central case of heterodox institutional development. Its township-village enterprises created property rights without full private ownership. Its dual-track pricing liberalized markets without eliminating planning. Its special economic zones created pockets of policy experimentation without requiring nationwide reform. None of these fit textbook templates, but they produced the fastest sustained growth in history.",
    },
    {
      country: "Mauritius",
      description:
        "Rodrik uses Mauritius as a case where growth diagnostics reveals the binding constraint logic. Mauritius had poor institutions, high population density, and mono-crop agriculture — all of which predicted failure. But it grew rapidly because a well-designed export processing zone removed the binding constraint on its manufacturing sector, even while other problems remained. Solving the binding constraint, not all constraints, was sufficient.",
    },
    {
      country: "Latin America (1990s)",
      description:
        "Rodrik's sharpest critique of the Washington Consensus: Latin American countries that implemented the full reform package in the 1990s experienced crises (Mexico 1994, Asia 1997, Argentina 2001) that countries with more heterodox policies avoided. Fiscal discipline and trade liberalization did not produce sustained growth because the binding constraints in those countries were not the ones the Washington Consensus targeted.",
    },
  ],

  paradigms: [
    "Development Economics",
    "Industrial Policy",
    "Institutional Economics",
    "Heterodox Economics",
    "Political Economy of Development",
  ],
};

export default oneEconomicsManyRecipes;
