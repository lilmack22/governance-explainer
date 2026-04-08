import type { TextEntry } from "@/data/types";

const powerAndProsperity: TextEntry = {
  slug: "power-and-prosperity",
  title: "Power and Prosperity: Outgrowing Communist and Capitalist Dictatorships",
  shortTitle: "Power and Prosperity",
  year: 2000,
  publisher: "Basic Books",

  authors: [
    {
      name: "Mancur Olson",
      title: "Distinguished Professor of Economics",
      institution: "University of Maryland",
      bio:
        "Mancur Olson was one of the most original economic theorists of the twentieth century, best known for The Logic of Collective Action (1965), which showed why large groups systematically fail to provide public goods. Power and Prosperity, published posthumously in 2000 after his death in 1998, extended his lifelong interest in the relationship between political power and economic performance into a sweeping account of why some states develop and others do not. His framework of the 'stationary bandit' has become standard in the political economy of development.",
    },
  ],

  overview:
    "Power and Prosperity begins from a simple puzzle: if predatory rulers are bad for economic growth, why do so many of them exist — and why do some of them eventually provide public goods rather than simply looting? Olson's answer introduces the distinction between the 'roving bandit' and the 'stationary bandit.' A roving bandit — a warlord or migrating raider — has every incentive to loot as much as possible and move on; there is no tomorrow for them in this location. A stationary bandit — a ruler who expects to control a territory over a long time horizon — has an incentive to invest in that territory's productivity, because they will capture a share of whatever is produced. " +
    "This insight explains why autocrats who are secure in power often provide some public goods — roads, property rights, basic order — even in the absence of democratic accountability. The autocrat's 'encompassing interest' in the productive capacity of their territory aligns, partially and imperfectly, with the interests of the population. The longer the time horizon, the stronger this alignment. " +
    "Olson then extends the framework to explain institutional development, collective action failures in post-communist transitions, and the conditions under which pluralistic democracy emerges as a self-reinforcing equilibrium. The book synthesizes decades of Olson's thinking into a unified theory of political economy, connecting the micro-logic of individual incentives to macro-level patterns of state formation and economic development.",

  coreArguments: [
    {
      heading: "The stationary bandit provides public goods out of self-interest, not virtue",
      body:
        "A ruler with a long time horizon and secure power has an 'encompassing interest' in the productivity of their territory — they will capture a predictable share of whatever is produced. This creates incentives to provide property rights, enforce contracts, build infrastructure, and maintain order, even without democratic pressure. The degree of public goods provision depends on the 'encompassing-ness' of the ruler's interest: the larger the share of national income the ruler captures, the more their interests align with growth.",
    },
    {
      heading: "Short time horizons produce looting; long time horizons produce governance",
      body:
        "Political instability — civil war, coup risk, contested succession — shortens the effective time horizon of rulers. A leader who expects to be deposed has incentives to loot quickly rather than invest in long-run productivity. This explains why political instability and poor governance travel together: it is not that corrupt rulers cause instability, but that instability causes rational rulers to adopt predatory strategies. Security of tenure is a prerequisite for developmental governance.",
    },
    {
      heading: "Democracy emerges when no single actor can dominate — and sustains itself through mutual veto",
      body:
        "Olson argues that pluralistic democracy arises not from ideological conversion or mass pressure alone, but when the balance of power prevents any single actor from establishing a monopoly. A stalemate among powerful groups creates incentives for all of them to accept rules that protect their interests against whoever happens to win elections. This 'contract among the powerful' generalizes into constitutional democracy when encompassing enough coalitions are involved.",
    },
    {
      heading: "Post-communist transitions failed where stationary bandit logic broke down",
      body:
        "The book's final section examines post-Soviet transition failures. Where the state collapsed entirely, roving-bandit logic prevailed — criminal organizations and warlords looted rather than invested. Where nomenklatura elites captured state assets without accountability, they privatized gains and socialized losses. Successful transitions required establishing new stationary actors with encompassing interests — a task that proved much harder than simply abolishing central planning.",
    },
  ],

  keyConcepts: [
    {
      name: "Roving bandit vs. stationary bandit",
      definition:
        "A roving bandit has no stake in a territory's long-run productivity and will loot as much as possible before moving on. A stationary bandit expects to extract from the same population indefinitely and therefore has an incentive to protect their productive capacity. The distinction explains why even predatory states often provide some public goods — order and property rights — that pure roving bandits do not.",
    },
    {
      name: "Encompassing interest",
      definition:
        "A ruler or group has an 'encompassing interest' in an economy to the degree that they capture a large and fixed share of national income. The more encompassing the interest, the stronger the incentive to support policies that grow the overall economy rather than redistribute it. Large-stake actors (monopoly rulers, majority shareholders) have more encompassing interests than small-stake actors.",
    },
    {
      name: "Time horizon and governance quality",
      definition:
        "The quality of governance provided by any political actor depends critically on their time horizon — how long they expect to remain in power. Long-horizon actors have incentives to invest in productive institutions; short-horizon actors have incentives to extract. Political stability is therefore a precondition for developmental governance, even under authoritarianism.",
    },
  ],

  casesAndExamples: [
    {
      country: "Post-Soviet Russia",
      description:
        "The collapse of the Soviet state created roving-bandit conditions: existing rulers had no secure tenure, and organized crime filled the vacuum with protection rackets. The oligarch privatizations of the 1990s combined looting (asset-stripping) with some state-building (creating private property rights), but the resulting order was extractive rather than productive. Putin's consolidation can be read through Olson's lens as re-establishing a stationary bandit arrangement — at significant cost to pluralism.",
    },
    {
      country: "Medieval European kingdoms",
      description:
        "Olson traces the origins of secure property rights and economic growth to the relative stability of feudal territorial arrangements in Europe. As lords became stationary rather than roving, they developed incentives to protect rather than loot their serfs' productive capacity. Parliamentary constraints on rulers — Magna Carta, constitutional monarchies — further aligned rulers' interests with subjects' by requiring consent for taxation.",
    },
  ],

  paradigms: [
    "Political Economy",
    "Rational Choice",
    "State Formation",
    "Collective Action Theory",
    "Development Economics",
  ],
};

export default powerAndProsperity;
