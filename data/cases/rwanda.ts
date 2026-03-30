import type { CaseStudy } from "../types";

const rwanda: CaseStudy = {
  id: "rwanda",
  slug: "rwanda",
  country: "Rwanda",
  region: "East Africa",
  flag: "🇷🇼",
  isoCode: "RWA",
  isoNumeric: "646",
  coordinates: [29.87, -1.94],
  transformationHeadline: "From genocide to one of Africa's most capable states",
  transformationSubtext:
    "In three decades, Rwanda rebuilt a shattered state, tripled life expectancy, halved extreme poverty, and became a global model of administrative capacity — all from the ruins of the worst mass killing since the Holocaust.",
  puzzle:
    "Most post-genocide or post-conflict states remain fragile and impoverished for generations. Rwanda dramatically outperformed these expectations. Why?",
  causalQuestion: "What explains Rwanda's transformation from state collapse to relative stability and strong development performance?",

  timeline: [
    {
      year: 1994,
      label: "Genocide & RPF Victory",
      description:
        "Between April and July, ~800,000 Tutsi and moderate Hutu were killed. The RPF, led by Paul Kagame, ended the genocide militarily and took power. The state was in ruins.",
      type: "crisis",
    },
    {
      year: 1994,
      label: "Government of National Unity",
      description:
        "RPF formed a transitional coalition government with a Hutu president (Bizimungu) and multi-party cabinet. Power was distributed symbolically; RPF held real control.",
      type: "transition",
    },
    {
      year: 1996,
      label: "Gacaca Courts Begin",
      description:
        "Community-based traditional courts were reformed and scaled to process ~120,000 genocide cases. This became a central tool of transitional justice and reconciliation.",
      type: "reform",
    },
    {
      year: 2000,
      label: "Vision 2020 & Kagame Presidency",
      description:
        "Kagame became president. Rwanda launched Vision 2020: an ambitious development blueprint targeting middle-income status. This became the template for state-directed development.",
      type: "reform",
    },
    {
      year: 2003,
      label: "New Constitution",
      description:
        "A new constitution established presidential elections, a bicameral parliament, and gender quotas (30% women in Parliament). Human Rights Watch noted restrictions on opposition.",
      type: "transition",
    },
    {
      year: 2008,
      label: "Women Take Parliament",
      description:
        "Rwanda became the first country in history where women hold a majority in the national legislature — 56%, rising to 61% by 2024. A model globally for gender representation.",
      type: "outcome",
    },
    {
      year: 2012,
      label: "Donor Tensions: M23 Crisis",
      description:
        "UN report implicated Rwanda in supporting M23 rebels in eastern DRC. Several major donors suspended aid. Rwanda denied involvement. This revealed limits of donor leverage.",
      type: "tension",
    },
    {
      year: 2015,
      label: "Vision 2020 Mid-Point",
      description:
        "Rwanda's poverty rate fell from 60% (2000) to 39% (2014). Life expectancy, child mortality, and governance indicators improved dramatically, drawing global attention.",
      type: "outcome",
    },
    {
      year: 2017,
      label: "Kagame Re-elected: 99%",
      description:
        "Kagame won 99% of the vote after a constitutional amendment removed term limits. Opposition critics faced legal pressure. International observers noted irregularities.",
      type: "tension",
    },
    {
      year: 2024,
      label: "Stable Middle-Income Aspirant",
      description:
        "GDP per capita ~$1,000+. Extreme poverty under 40%. Women hold 61% of parliament. Rwanda hosts African Union summits. Kagame's 30-year rule continues.",
      type: "outcome",
    },
  ],

  indicators: [
    {
      id: "poverty",
      name: "Extreme Poverty Rate",
      valueBefore: "~90%",
      valueAfter: "~38%",
      beforeLabel: "1994",
      afterLabel: "2024",
      trend: "down",
      note: "From near-total collapse to significant reduction, though pace has slowed since 2015",
    },
    {
      id: "gdp",
      name: "GDP per Capita (USD)",
      valueBefore: "~$100",
      valueAfter: "~$1,050",
      beforeLabel: "1994",
      afterLabel: "2024",
      trend: "up",
      note: "10x growth from a near-zero base; still low in absolute terms",
    },
    {
      id: "life-expectancy",
      name: "Life Expectancy",
      valueBefore: "~28 yrs",
      valueAfter: "~70 yrs",
      beforeLabel: "1994 (genocide nadir)",
      afterLabel: "2024",
      trend: "up",
      note: "The most dramatic gain in recorded history for any country over this period",
    },
    {
      id: "women-parliament",
      name: "Women in Parliament",
      valueBefore: "<10%",
      valueAfter: "61%",
      beforeLabel: "1994",
      afterLabel: "2024",
      trend: "up",
      note: "Highest share globally; driven by constitutional quotas and RPF policy",
    },
    {
      id: "child-mortality",
      name: "Under-5 Mortality (per 1,000)",
      valueBefore: "~230",
      valueAfter: "~37",
      beforeLabel: "1994",
      afterLabel: "2024",
      trend: "down",
      note: "Among the fastest reductions globally, driven by community health worker program",
    },
    {
      id: "governance",
      name: "WB Govt. Effectiveness (Percentile)",
      valueBefore: "~5th",
      valueAfter: "~65th",
      beforeLabel: "1996",
      afterLabel: "2022",
      trend: "up",
      note: "Extraordinary climb for a post-conflict state; reflects state capacity investment",
    },
  ],

  causalNodes: [
    // ── Upstream ────────────────────────────────────────────────────────────
    {
      id: "political-settlement",
      label: "RPF Political Settlement",
      shortLabel: "Political Settlement",
      nodeType: "upstream",
      conceptId: "political-settlement",
      description: "Dominant coalition established by military victory; coherent elite with shared interest in stability and legitimacy.",
      position: { x: 30, y: 120 },
    },
    {
      id: "elite-bargain",
      label: "Elite Bargain & Power Concentration",
      shortLabel: "Elite Bargain",
      nodeType: "upstream",
      conceptId: "elite-bargain",
      description: "Symbolic power-sharing with Hutu elites; real authority concentrated in RPF inner circle around Kagame.",
      position: { x: 30, y: 360 },
    },

    // ── Mechanisms ──────────────────────────────────────────────────────────
    {
      id: "security-restoration",
      label: "Security & Order Restored",
      shortLabel: "Security Restoration",
      nodeType: "mechanism",
      conceptId: "political-settlement",
      description: "RPF ended genocide and restored basic security; demobilized combatants; reformed police and military.",
      position: { x: 310, y: 40 },
    },
    {
      id: "centralized-authority",
      label: "Centralized Authority",
      shortLabel: "Centralized Authority",
      nodeType: "mechanism",
      conceptId: "authoritarian-development",
      description: "Top-down command over policy implementation; limited bureaucratic autonomy; president as CEO of the state.",
      position: { x: 310, y: 260 },
    },
    {
      id: "donor-support",
      label: "International Donor Support",
      shortLabel: "Donor Support",
      nodeType: "mechanism",
      conceptId: "political-settlement",
      description: "Post-genocide guilt drove massive aid flows from US, UK, EU. Rwanda received ~$1B+/year in ODA for much of the 2000s.",
      position: { x: 310, y: 480 },
    },
    {
      id: "state-capacity",
      label: "State Capacity Building",
      shortLabel: "State Capacity",
      nodeType: "mechanism",
      conceptId: "state-capacity",
      description: "Professionalized civil service, Imihigo performance contracts, community health workers, data systems.",
      position: { x: 590, y: 160 },
    },
    {
      id: "developmental-governance",
      label: "Developmental Governance",
      shortLabel: "Developmental Governance",
      nodeType: "mechanism",
      conceptId: "developmental-state",
      description: "Vision 2020/2050 plans, Rwanda Development Board, strategic investment in ICT and tourism.",
      position: { x: 590, y: 390 },
    },

    // ── Outcomes ────────────────────────────────────────────────────────────
    {
      id: "economic-growth",
      label: "Economic Growth",
      shortLabel: "Economic Growth",
      nodeType: "outcome",
      conceptId: "developmental-state",
      description: "Average GDP growth of 7–8% per year for two decades; diversification from subsistence agriculture.",
      position: { x: 870, y: 60 },
    },
    {
      id: "poverty-reduction",
      label: "Poverty Reduction",
      shortLabel: "Poverty Reduction",
      nodeType: "outcome",
      conceptId: "state-capacity",
      description: "Extreme poverty fell from ~90% to ~38%; strong gains in rural areas through targeted programs.",
      position: { x: 870, y: 240 },
    },
    {
      id: "health-education",
      label: "Health & Education Gains",
      shortLabel: "Health & Education",
      nodeType: "outcome",
      conceptId: "state-capacity",
      description: "Life expectancy doubled; under-5 mortality fell 85%; near-universal primary enrollment; community health workers.",
      position: { x: 870, y: 420 },
    },
    {
      id: "stability",
      label: "Order & Stability",
      shortLabel: "Stability",
      nodeType: "outcome",
      conceptId: "political-settlement",
      description: "Rwanda is one of Africa's safest countries; genocide has not recurred; low crime rates; no active civil conflict.",
      position: { x: 870, y: 600 },
    },

    // ── Critique / Shadow ────────────────────────────────────────────────────
    {
      id: "repression",
      label: "Repression & Constrained Pluralism",
      shortLabel: "Repression",
      nodeType: "critique",
      conceptId: "authoritarian-development",
      description: "Press freedom ranked 136th globally; opposition figures jailed or exiled; 99% election result; no viable succession mechanism.",
      position: { x: 310, y: 680 },
    },
  ],

  causalEdges: [
    // Upstream → Mechanisms
    { id: "e1",  source: "political-settlement", target: "security-restoration",  edgeType: "main" },
    { id: "e2",  source: "political-settlement", target: "centralized-authority",  edgeType: "main" },
    { id: "e3",  source: "elite-bargain",        target: "centralized-authority",  edgeType: "main" },
    { id: "e4",  source: "elite-bargain",        target: "donor-support",          edgeType: "main" },

    // Mechanisms → Mechanisms
    { id: "e5",  source: "centralized-authority", target: "state-capacity",         edgeType: "main" },
    { id: "e6",  source: "centralized-authority", target: "developmental-governance", edgeType: "main" },
    { id: "e7",  source: "donor-support",         target: "state-capacity",         edgeType: "main" },
    { id: "e8",  source: "donor-support",         target: "developmental-governance", edgeType: "main" },

    // Mechanisms → Outcomes
    { id: "e9",  source: "security-restoration",    target: "economic-growth",    edgeType: "main" },
    { id: "e10", source: "security-restoration",    target: "stability",          edgeType: "main" },
    { id: "e11", source: "state-capacity",          target: "economic-growth",    edgeType: "main" },
    { id: "e12", source: "state-capacity",          target: "poverty-reduction",  edgeType: "main" },
    { id: "e13", source: "state-capacity",          target: "health-education",   edgeType: "main" },
    { id: "e14", source: "developmental-governance", target: "economic-growth",   edgeType: "main" },
    { id: "e15", source: "developmental-governance", target: "poverty-reduction", edgeType: "main" },

    // Critique edges (dashed)
    { id: "e16", source: "centralized-authority", target: "repression", edgeType: "critique" },
    { id: "e17", source: "elite-bargain",          target: "repression", edgeType: "critique" },
    { id: "e18", source: "political-settlement",   target: "repression", edgeType: "critique" },
  ],

  status: "live",

  operationalTakeaways: [
    {
      id: "t1",
      heading: "Governance reforms need a political settlement",
      body: "Technical capacity-building in a political vacuum rarely sticks. Rwanda's state capacity gains were possible because the political settlement created demand for implementation and a coherent authority structure to reward performance. Teams working in post-conflict settings need to map the settlement before designing reforms.",
    },
    {
      id: "t2",
      heading: "Impressive development metrics can coexist with political repression",
      body: "Rwanda's aggregate gains (poverty, health, gender) are real. But they coexist with constraints on political freedom, press, and opposition. Standard development metrics do not capture this trade-off. World Bank measurement frameworks should explicitly engage with governance quality, not just service delivery outputs.",
    },
    {
      id: "t3",
      heading: "Donors are part of the political economy, not outside it",
      body: "Post-genocide guilt shaped donor behavior in ways that made Rwanda an unusually high-resource environment. This was part of the mechanism. Recognizing that aid flows alter elite incentives — and that donors have their own interests — is essential for honest political economy analysis.",
    },
    {
      id: "t4",
      heading: "The succession problem is the unanswered governance question",
      body: "Rwanda's development model depends heavily on Kagame's personal authority. The country has not built a political succession mechanism. This is the classic authoritarian development problem: strong performance tied to one leader creates fragility at transition. Any long-term engagement must reckon with this.",
    },
  ],
};

export default rwanda;
