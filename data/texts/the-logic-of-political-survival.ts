import type { TextEntry } from "@/data/types";

const theLogicOfPoliticalSurvival: TextEntry = {
  slug: "the-logic-of-political-survival",
  title: "The Logic of Political Survival",
  shortTitle: "The Logic of Political Survival",
  year: 2003,
  publisher: "MIT Press",
  coverImage: "/book-covers/the-logic-of-political-survival.jpg",

  authors: [
    {
      name: "Bruce Bueno de Mesquita",
      title: "Professor of Politics",
      institution: "New York University",
      bio:
        "Bruce Bueno de Mesquita is a game theorist at NYU who has spent his career applying rational-choice and formal models to international relations and domestic politics. He developed selectorate theory over decades of collaborative work, first presenting its core ideas in earlier papers with Siverson and Morrow in the 1990s. This 2003 volume — the formal academic statement of the theory — draws on hundreds of country-years of data to test predictions about leader survival, policy choices, and institutional performance. He later co-authored The Dictator's Handbook (2011) to make the same argument accessible to a general audience.",
    },
    {
      name: "Alastair Smith",
      title: "Professor of Politics",
      institution: "New York University",
      bio:
        "Alastair Smith is a political economist whose work applies formal models to political accountability, foreign aid, and trade. He collaborated with Bueno de Mesquita on multiple studies testing selectorate theory's predictions across large cross-national datasets. His contributions to the project were particularly important for the empirical chapters, bridging the formal model and the statistical evidence.",
    },
    {
      name: "Randolph M. Siverson",
      title: "Professor of Political Science",
      institution: "University of California, Davis",
      bio:
        "Siverson is a scholar of international conflict and political survival whose earlier work with Bueno de Mesquita laid theoretical groundwork for selectorate theory. His expertise in the empirical study of war and leader tenure contributed substantially to the statistical testing program in the book.",
    },
    {
      name: "James D. Morrow",
      title: "Professor of Political Science",
      institution: "University of Michigan",
      bio:
        "Morrow is a leading formal theorist of international relations whose contributions to selectorate theory focused on its game-theoretic foundations and extensions to international conflict. He helped formalize the model's core predictions about how coalition size shapes war initiation and military effectiveness.",
    },
  ],

  overview:
    "The Logic of Political Survival is the formal academic foundation of selectorate theory — the framework that asks why leaders make the policy choices they do and answers with a single structural variable: the size of the winning coalition they depend on to stay in power. Where The Dictator's Handbook (2011) makes this argument for a popular audience, this book builds it from the ground up as a formal model tested against systematic cross-national data. " +
    "The core model distinguishes three groups: the selectorate (everyone with a nominal role in selecting the leader), the winning coalition (the minimum subset whose support is sufficient to keep the leader in power), and the excluded remainder. Leaders allocate scarce resources — public goods or private goods — to maintain the loyalty of their coalition. The smaller the coalition relative to the selectorate, the more cost-effective private goods are, and the less public goods investment a rational leader will make. " +
    "The book tests this model's predictions across a wide range of outcomes: economic policy, public goods provision, military spending, war initiation, and leader tenure. It finds that regime type (democracy vs. autocracy) is largely captured by coalition size, and that the mechanism explains patterns in foreign aid allocation, economic performance, and political stability that standard regime-type comparisons cannot. The result is one of the most ambitious formal-empirical projects in comparative politics.",

  coreArguments: [
    {
      heading: "Political survival requires maintaining a winning coalition — everything else follows from that",
      body:
        "Leaders are modeled as primarily motivated by staying in office. All policy choices — taxation, public goods, repression levels, foreign policy — are solutions to the coalition-maintenance problem. The key variable is W (winning coalition size): how many people must actively support you to survive? A larger W makes public goods cheaper than private goods as a loyalty strategy; a smaller W makes private payoffs more efficient. This simple structural variable, the book argues, explains most of the systematic variation in governance quality across regime types.",
    },
    {
      heading: "Large-coalition systems outperform small-coalition systems on nearly every welfare dimension",
      body:
        "The book documents empirically that large-W systems (democracies) produce more public goods, higher economic growth, more political freedom, better health outcomes, and longer peace. The mechanism is not that democratic leaders are more virtuous — it is that their political survival depends on delivering broad benefits. Small-W systems produce worse outcomes not because of culture or leader quality but because the political incentive structure rewards private payoffs over public goods investment.",
    },
    {
      heading: "Foreign aid is systematically diverted by small-coalition governments",
      body:
        "Because aid enters through governments, small-coalition leaders can use it to supplement private goods for their coalition rather than fund public services. The book predicts — and documents — that aid to autocracies improves leader survival odds without proportionally improving population welfare. This is not primarily a corruption story but a structural one: aid is fungible, and rational leaders in small-W systems allocate fungible resources to coalition maintenance.",
    },
    {
      heading: "Military performance is worse in small-coalition systems",
      body:
        "An underappreciated prediction of selectorate theory is that autocratic armies fight poorly relative to democratic ones. The reason: autocratic leaders need weak militaries. A militarily capable officer corps is a coup threat. So autocratic leaders deliberately underpay, under-equip, and divide their military forces — accepting worse battlefield performance in exchange for reduced coup risk. Democratic leaders face a different calculus: their coalition is too large for a coup to easily reconstitute, so they can safely field effective militaries.",
    },
    {
      heading: "Democratic institutions generate policy performance through incentive alignment, not culture or values",
      body:
        "The book is deliberately amoral: it explains democratic performance advantages not through civic culture, enlightenment values, or the inherent wisdom of voters, but through the structural incentives created by large coalition requirements. This has important implications: it means democratic institutions can in principle be designed to work anywhere, but it also means that formal democratic institutions without the underlying coalition structure will not produce democratic policy performance.",
    },
  ],

  keyConcepts: [
    {
      name: "The Selectorate (S)",
      definition:
        "Everyone with a nominal role in selecting the leadership — voters in a democracy, party members in a one-party state, military officers in a junta. The selectorate defines the pool from which the winning coalition is drawn and determines how replaceable any given coalition member is.",
    },
    {
      name: "The Winning Coalition (W)",
      definition:
        "The minimum subset of the selectorate whose active support is sufficient to keep the leader in power. In democracies, W is large (millions of voters); in autocracies, it may be dozens of key officials, generals, or family members. W is the key variable that determines everything else in the model.",
    },
    {
      name: "The W/S ratio and interchangeability",
      definition:
        "When W is small relative to S, any given coalition member has low bargaining power — there are many potential replacements. This makes coalition members loyal and cheap to maintain, stabilizing small-coalition regimes. When W/S is high (democracy), each supporter is harder to replace, shifting bargaining power toward supporters and raising the cost of private goods.",
    },
    {
      name: "Public goods vs. private goods",
      definition:
        "Public goods benefit all citizens (infrastructure, rule of law, health systems); private goods benefit only the recipients (positions, contracts, impunity). The model shows that when W is large, public goods are more efficient than private goods for maintaining coalition loyalty. When W is small, private goods dominate. This explains the systematic relationship between regime type and development investment.",
    },
    {
      name: "Selectorate theory as a unified framework",
      definition:
        "The book's ambition is to explain a wide range of political phenomena — economic policy, war, aid, leader tenure, civil liberties — with a single formal model. Rather than treating each outcome as a distinct literature, selectorate theory derives predictions about all of them from the same coalition-maintenance logic.",
    },
  ],

  casesAndExamples: [
    {
      country: "North Korea",
      description:
        "Maximally small-coalition system. Kim Il-sung and his successors maintained power through private goods to a tiny circle of military and party loyalists while delivering almost no public goods to the population. Agricultural collectivization destroyed productivity; famine followed. The regime survived because the winning coalition was small enough to maintain with private goods even as the economy collapsed.",
    },
    {
      country: "Sweden",
      description:
        "Large-coalition democracy. Swedish governments provide high levels of public goods — health, education, infrastructure, social insurance — because their coalition maintenance requires serving broad swaths of the population. The Nordic model is explained not by Scandinavian culture but by the structural incentives created by large winning coalition requirements.",
    },
    {
      country: "Democratic Republic of Congo",
      description:
        "Mineral wealth allows successive DRC leaders to fund small coalitions of military commanders and provincial elites without building state capacity. The model predicts this: resources allow private goods provision without taxation, removing the need for productive institutions. State weakness is the equilibrium, not a failure — it serves the survival interests of leaders with small coalitions.",
    },
    {
      country: "Foreign aid recipients generally",
      description:
        "The book's most provocative empirical finding is that aid to non-democratic governments reliably improves leader survival odds without proportionally improving development outcomes. The mechanism: aid supplements private goods for the winning coalition, stabilizing the regime. This is a structural prediction, not a claim about corrupt individuals — even well-intentioned aid gets allocated by rational leaders to coalition maintenance.",
    },
  ],

  paradigms: [
    "Selectorate Theory",
    "Rational Choice / Formal Political Theory",
    "Political Economy",
    "Comparative Authoritarianism",
  ],
};

export default theLogicOfPoliticalSurvival;
