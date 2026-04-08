import type { TextEntry } from "@/data/types";

const whyNationsFail: TextEntry = {
  slug: "why-nations-fail",
  title: "Why Nations Fail: The Origins of Power, Prosperity, and Poverty",
  shortTitle: "Why Nations Fail",
  year: 2012,
  publisher: "Crown Business",
  coverImage: "/book-covers/why-nations-fail.jpg",

  authors: [
    {
      name: "Daron Acemoglu",
      title: "Institute Professor of Economics",
      institution: "Massachusetts Institute of Technology",
      bio:
        "Daron Acemoglu is one of the world's most cited economists, working at the intersection of political economy, economic growth, and institutional theory. Born in Istanbul, he has spent his career at MIT building formal models of how political institutions shape economic incentives. He received the Nobel Prize in Economics in 2024, jointly with James Robinson and Simon Johnson, for work on institutions and prosperity. His earlier technical work established the empirical and theoretical foundations that Why Nations Fail synthesizes for a general audience.",
    },
    {
      name: "James A. Robinson",
      title: "Reverend Dr. Richard L. Pearson Professor of Global Conflict Studies",
      institution: "University of Chicago",
      bio:
        "James Robinson is a political scientist and economist whose career has focused on the long-run political economy of development, particularly in Latin America and sub-Saharan Africa. He collaborated with Acemoglu over two decades to build the inclusive/extractive institutions framework, and his fieldwork in Colombia, Sierra Leone, and the DRC grounds the comparative historical analysis in Why Nations Fail. He shared the 2024 Nobel Prize in Economics with Acemoglu and Simon Johnson.",
    },
  ],

  overview:
    "Why Nations Fail asks a deceptively simple question: why are some countries rich and others poor? The book's answer rejects geography (poor countries are not poor because of bad soil or tropical disease), culture (Confucian or Protestant values do not explain the variation), and ignorance (governments generally know what good policies look like). The real answer is institutions — specifically, whether a country's political and economic institutions are inclusive or extractive. " +
    "Inclusive institutions disperse power, protect property rights for a broad population, and allow new entrants to challenge established interests. Extractive institutions concentrate power in elite hands, restrict access to markets and capital, and are designed to transfer wealth from the many to the few. The key insight is that these two types of institutions reinforce each other in self-sustaining loops: inclusive political institutions tend to generate inclusive economic institutions, and vice versa. Extractive ones do the same in reverse. " +
    "The book traces this logic across five centuries of history — the divergence of North and South America from identical colonial starting points, the different paths of England and Spain after 1688, the poverty of sub-Saharan Africa despite resource wealth, and the dramatic growth of South Korea versus the stagnation of North Korea. The central mechanism is that elites governing extractive institutions have strong incentives to prevent the creative destruction that broad-based growth requires, because that same growth would undermine their political dominance. Breaking this cycle requires political upheaval that shifts the distribution of power toward broader coalitions.",

  coreArguments: [
    {
      heading: "Inclusive vs. extractive institutions determine whether countries grow",
      body:
        "Inclusive economic institutions — property rights, rule of law, competitive markets, access to education and finance for broad populations — create incentives for investment and innovation across society. Extractive economic institutions concentrate rents among elites, discourage investment outside the favored circle, and prevent the entry of competitors. The authors show this distinction explains more cross-country variation in income than geography, culture, or leader quality.",
    },
    {
      heading: "Political institutions determine whether economic institutions can stay inclusive",
      body:
        "Inclusive economic institutions can only survive when backed by inclusive political institutions — a pluralistic distribution of power with constraints on any single actor. Elites with concentrated political power will redesign economic institutions to serve their interests. The 1688 Glorious Revolution in England is the book's central illustration: parliamentary constraints on royal power created secure property rights that enabled the Industrial Revolution.",
    },
    {
      heading: "Critical junctures and small historical differences compound over centuries",
      body:
        "Institutions are path-dependent: small differences at critical historical junctures — a plague that reshuffled labor markets, a colonial settlement pattern, a constitutional moment — can set countries on divergent paths that widen over time. The Black Death strengthened labor in Western Europe but allowed Eastern European lords to re-impose serfdom, producing an institutional divergence that lasted centuries. Randomness and contingency matter: there is no deterministic law that dooms some countries to poverty.",
    },
    {
      heading: "Elites resist growth-enhancing change because growth threatens their power",
      body:
        "The creative destruction that drives growth — new firms displacing old, new technologies making existing skills obsolete — is also politically threatening to incumbent elites. Elites in extractive systems block the technologies, institutions, and policies that would generate broad growth precisely because those changes would erode their political dominance. This explains why authoritarian growth miracles tend to be unsustainable: they depend on imported technologies until the growth runs into the frontier that requires genuine innovation, which requires inclusive institutions.",
    },
    {
      heading: "Foreign aid and policy advice cannot substitute for institutional change",
      body:
        "The book is bluntly skeptical of conventional development assistance. Aid directed at governments with extractive institutions improves those governments' fiscal position without changing the underlying incentives — and can entrench incumbents. The authors argue that institutional change requires political transformation, not technical fixes. External actors can support institutional reformers but cannot engineer institutional change from outside.",
    },
  ],

  keyConcepts: [
    {
      name: "Inclusive institutions",
      definition:
        "Political and economic institutions that enforce broad property rights, constrain elites, allow entry and competition, and distribute power pluralistically. They create incentives for investment and innovation across wide swaths of society, not just favored insiders.",
    },
    {
      name: "Extractive institutions",
      definition:
        "Institutions designed to transfer wealth and power from the many to the few. They concentrate political power in a narrow coalition, restrict economic participation to insiders, and block the creative destruction that broad-based growth requires.",
    },
    {
      name: "Creative destruction",
      definition:
        "Joseph Schumpeter's concept: economic growth driven by new technologies, firms, and industries displacing old ones. Why Nations Fail argues this process is politically threatening to incumbent elites and that blocking it is the key mechanism through which extractive institutions prevent development.",
    },
    {
      name: "Critical junctures",
      definition:
        "Historical moments where contingent events — epidemics, conquests, constitutional moments, technology shocks — disrupt existing institutional arrangements and create windows for divergent path-dependent outcomes. Small differences at critical junctures can compound into large income gaps over centuries.",
    },
    {
      name: "Virtuous and vicious cycles",
      definition:
        "Inclusive institutions tend to reinforce each other: pluralistic political power generates broad property rights, which generate investment, which creates stakeholders in inclusive rules. Extractive institutions do the reverse, creating self-reinforcing loops that trap countries in poverty. Breaking the vicious cycle requires political upheaval, not incremental reform.",
    },
  ],

  casesAndExamples: [
    {
      country: "Nogales, Arizona vs. Nogales, Sonora",
      description:
        "The book opens with two cities sharing a name, climate, and geography — divided only by the US–Mexico border. The American side is wealthy; the Mexican side is poor. The difference is institutions, not geography or culture, since both cities share the same physical and demographic environment.",
    },
    {
      country: "England",
      description:
        "The Glorious Revolution of 1688 is the book's central case. Parliamentary constraints on royal power created secure, broad property rights and an independent judiciary — the institutional foundation that enabled the Industrial Revolution decades later. England industrialized first not because of its geography or culture but because it resolved a political struggle over the distribution of power.",
    },
    {
      country: "North Korea vs. South Korea",
      description:
        "Korea was divided arbitrarily at the 38th parallel in 1945, splitting a culturally and historically unified society into two institutional experiments. South Korea developed inclusive institutions (with significant historical messiness and authoritarianism); North Korea developed maximally extractive ones. The income gap today is one of the starkest natural experiments available to economists studying institutions.",
    },
    {
      country: "Latin America",
      description:
        "Spanish colonialism created extractive institutions designed to transfer wealth to Spain and to colonial elites — forced labor, land concentration, restrictions on commerce. British colonialism in North America and Australia, by contrast, created settler colonies with broader property rights. The authors trace this institutional divergence in the colonial period as the explanation for persistent income differences between the Americas.",
    },
    {
      country: "Sub-Saharan Africa",
      description:
        "Africa's poverty is explained not by geography or tropical disease but by the institutional legacies of the slave trade (which destroyed social trust and institutional capacity), colonialism (which created extractive states designed to exploit rather than develop), and post-independence leaders who inherited and maintained those extractive structures. Resource wealth in particular has often reinforced extractive institutions rather than generating development.",
    },
  ],

  paradigms: [
    "Institutional Economics",
    "Comparative Historical Analysis",
    "Political Economy of Development",
    "New Institutional Economics",
  ],
};

export default whyNationsFail;
