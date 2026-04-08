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
    "Most post-genocide or post-conflict states remain fragile and impoverished for generations. Rwanda dramatically outperformed these expectations. But the deeper puzzle is why an authoritarian leader would invest in broad-based public goods at all. The standard political survival logic — what Bueno de Mesquita & Smith (The Dictator's Handbook) call selectorate theory — predicts that leaders distribute private goods to a narrow winning coalition, not public goods to the population. Rwanda's ethnic arithmetic may be the key: as a Tutsi minority (≈14% of the population) ruling a Hutu majority country, Kagame cannot sustain power through ethnic patronage. His co-ethnic base is too small. This structural constraint may have been a productive one — compelling a public-goods development strategy that typical authoritarian leaders have no incentive to pursue.",
  causalQuestion: "What explains Rwanda's transformation from state collapse to strong development performance — and why did an authoritarian leader choose broad public investment over the standard patronage playbook?",

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
      id: "minority-rule",
      label: "Tutsi Minority Leadership",
      shortLabel: "Minority rule limits patronage options",
      nodeType: "upstream",
      conceptId: "elite-bargain",
      description:
        "Tutsi represent approximately 14% of Rwanda's population. This demographic reality structurally constrains Kagame's political options in ways that distinguish Rwanda from typical authoritarian cases. Selectorate theory (Bueno de Mesquita & Smith, The Dictator's Handbook) predicts leaders maintain power by distributing private goods to a minimum winning coalition. But building that coalition through ethnic patronage is not viable when your ethnic group is a small minority — the numbers simply don't add up. Post-genocide, visible Tutsi favoritism would also risk triggering exactly the majority backlash the regime fears most. Daniel Posner (Institutions and Ethnic Politics in Africa, 2005) shows how ethnic group size relative to the political unit determines which identities become politically salient and how coalitions form. For Kagame, the minority constraint is structural and permanent.",
      year: "Structural",
      position: { x: 0, y: 0 },
    },
    {
      id: "political-settlement",
      label: "RPF Political Settlement",
      shortLabel: "RPF military victory forms dominant coalition",
      nodeType: "upstream",
      conceptId: "political-settlement",
      description: "Dominant coalition established by military victory; coherent elite with shared interest in stability and legitimacy.",
      year: "1994",
      position: { x: 0, y: 110 },
    },
    {
      id: "elite-bargain",
      label: "Elite Bargain & Power Concentration",
      shortLabel: "Hutu elites co-opted; real power centralized",
      nodeType: "upstream",
      conceptId: "elite-bargain",
      description: "Symbolic power-sharing with Hutu elites; real authority concentrated in RPF inner circle around Kagame. The coalition is cross-ethnic by necessity — Tutsi numerical minority means Kagame must co-opt Hutu elites rather than simply rely on co-ethnic loyalty networks.",
      year: "1994",
      position: { x: 0, y: 250 },
    },

    // ── Mechanisms ──────────────────────────────────────────────────────────
    {
      id: "performance-legitimation",
      label: "Performance-Based Legitimation",
      shortLabel: "Growth chosen as substitute for patronage",
      nodeType: "mechanism",
      conceptId: "authoritarian-development",
      description:
        "Unable to rely on ethnic patronage as the primary glue of political survival, the RPF turned to performance: delivering measurable development results as the basis of legitimacy. This creates different incentives than typical authoritarian governance — the regime must invest in public goods (health, education, infrastructure, growth) not from benevolence but from political necessity. It echoes what Evans (Bringing the State Back In) called 'embedded autonomy' in developmental states, and what Andrews, Pritchett & Woolcock (Building State Capability) identify as the rare condition where leaders have genuine demand for functional institutions rather than just their form. Critics including Philip Reyntjens (Rwanda: Progress or Powder Keg?, 2015) and Susan Thomson (Rwanda: From Genocide to Precarious Peace, 2018) note that performance legitimacy appeals primarily to external donors and may not substitute for political freedom among Rwandans living under repression. But as a political logic, it explains why Kagame's Rwanda diverges from the standard authoritarian model of public goods neglect.",
      year: "2000–",
      position: { x: 175, y: 0 },
    },
    {
      id: "security-restoration",
      label: "Security & Order Restored",
      shortLabel: "Genocide ended; factions disarmed; order restored",
      nodeType: "mechanism",
      conceptId: "political-settlement",
      description: "RPF ended genocide and restored basic security; demobilized combatants; reformed police and military.",
      year: "1994–96",
      position: { x: 175, y: 165 },
    },
    {
      id: "centralized-authority",
      label: "Centralized Authority",
      shortLabel: "President governs state as chief executive",
      nodeType: "mechanism",
      conceptId: "authoritarian-development",
      description: "Top-down command over policy implementation; limited bureaucratic autonomy; president as CEO of the state.",
      year: "2000",
      position: { x: 175, y: 375 },
    },
    {
      id: "donor-support",
      label: "International Donor Support",
      shortLabel: "Post-genocide guilt unlocks sustained aid flows",
      nodeType: "mechanism",
      conceptId: "political-settlement",
      description: "Post-genocide guilt drove massive aid flows from US, UK, EU. Rwanda received ~$1B+/year in ODA for much of the 2000s.",
      year: "2000–12",
      position: { x: 175, y: 485 },
    },
    {
      id: "state-capacity",
      label: "State Capacity Building",
      shortLabel: "Bureaucracy professionalized via performance contracts",
      nodeType: "mechanism",
      conceptId: "state-capacity",
      description: "Professionalized civil service, Imihigo performance contracts, community health workers, data systems.",
      year: "2000–15",
      position: { x: 175, y: 695 },
    },
    {
      id: "developmental-governance",
      label: "Developmental Governance",
      shortLabel: "Vision 2020 directs investment into growth sectors",
      nodeType: "mechanism",
      conceptId: "developmental-state",
      description: "Vision 2020/2050 plans, Rwanda Development Board, strategic investment in ICT and tourism.",
      year: "2000–",
      position: { x: 175, y: 595 },
    },

    // ── Outcomes ────────────────────────────────────────────────────────────
    {
      id: "economic-growth",
      label: "Economic Growth",
      shortLabel: "Economy grows 7–8%/year for two decades",
      nodeType: "outcome",
      conceptId: "developmental-state",
      description: "Average GDP growth of 7–8% per year for two decades; diversification from subsistence agriculture.",
      year: "2015+",
      position: { x: 350, y: 790 },
    },
    {
      id: "poverty-reduction",
      label: "Poverty Reduction",
      shortLabel: "Extreme poverty halved through targeted programs",
      nodeType: "outcome",
      conceptId: "state-capacity",
      description: "Extreme poverty fell from ~90% to ~38%; strong gains in rural areas through targeted programs.",
      year: "2015+",
      position: { x: 350, y: 920 },
    },
    {
      id: "health-education",
      label: "Health & Education Gains",
      shortLabel: "Life expectancy doubles; child mortality falls 85%",
      nodeType: "outcome",
      conceptId: "state-capacity",
      description: "Life expectancy doubled; under-5 mortality fell 85%; near-universal primary enrollment; community health workers.",
      year: "2008+",
      position: { x: 350, y: 625 },
    },
    {
      id: "stability",
      label: "Order & Stability",
      shortLabel: "Durable peace and public safety achieved",
      nodeType: "outcome",
      conceptId: "political-settlement",
      description: "Rwanda is one of Africa's safest countries; genocide has not recurred; low crime rates; no active civil conflict.",
      year: "1994+",
      position: { x: 350, y: 190 },
    },

    // ── Critique / Shadow ────────────────────────────────────────────────────
    {
      id: "repression",
      label: "Repression & Constrained Pluralism",
      shortLabel: "Opposition suppressed; elections controlled",
      nodeType: "critique",
      conceptId: "authoritarian-development",
      description: "Press freedom ranked 136th globally; opposition figures jailed or exiled; 99% election result; no viable succession mechanism.",
      year: "2003+",
      position: { x: 175, y: 870 },
    },
  ],

  causalEdges: [
    // Minority rule → mechanisms
    { id: "e0a", source: "minority-rule",         target: "performance-legitimation", edgeType: "main" },
    { id: "e0b", source: "minority-rule",         target: "elite-bargain",            edgeType: "main" },
    { id: "e0c", source: "performance-legitimation", target: "developmental-governance", edgeType: "main" },
    { id: "e0d", source: "performance-legitimation", target: "state-capacity",           edgeType: "main" },

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
    {
      id: "t5",
      heading: "Ethnic minority rule may invert the standard authoritarian incentive structure",
      body: "Selectorate theory (Bueno de Mesquita & Smith) predicts authoritarian leaders invest in private goods for a narrow coalition, not public goods for the population. But this logic assumes leaders can build a sustainable coalition through co-ethnic patronage. Where the ruling group is a demographic minority — as Tutsi are in Rwanda — ethnic patronage alone cannot produce a stable winning coalition. This may flip the incentive: to hold power without triggering majority backlash, the leader must demonstrate cross-ethnic legitimacy through development performance. Rwanda may be less a story of Kagame's unusual benevolence than of a structural constraint that made public-goods investment the rational political strategy. This has implications for how analysts diagnose governance trajectories in minority-led states elsewhere.",
    },
  ],

  costs: [
    {
      id: "c1",
      heading: "Rwanda is not a democratization case",
      body: "Rwanda's development transformation has not been accompanied by political liberalization — and should not be read as one. Freedom House rates Rwanda as 'Not Free,' scoring 24/100. Kagame has won every presidential election since 2000 with margins exceeding 93%; in 2017 he received 98.8% of the vote, and in 2024, 99.2%. In 2015, a referendum amended the constitution to remove presidential term limits, enabling Kagame to remain in office until at least 2034. Standard transitology frameworks (O'Donnell & Schmitter) would not classify Rwanda as undergoing even partial liberalization. Rwanda is a case where development metrics and democratization trajectories have moved in opposite directions — a combination Sen's capabilities approach would flag as fundamentally incomplete, since political freedom is both a constitutive component and an enabling condition of genuine human development.",
    },
    {
      id: "c2",
      heading: "Political participation is tightly constrained",
      body: "Opposition political activity in Rwanda is suppressed through both legal and extralegal mechanisms. The Penal Code criminalizes 'genocide ideology' and 'divisionism' in terms broad enough to encompass political dissent. Victoire Ingabire (FDU-Inkingi) returned from exile to contest the 2010 presidential election, was charged with genocide ideology and collaboration with terrorist groups, convicted, and sentenced to 15 years. Diane Rwigara, who attempted to contest the 2017 election, was arrested on charges of forgery and inciting insurrection before being acquitted. Paul Rusesabagina — the figure who inspired Hotel Rwanda and a prominent Kagame critic — was lured onto a private charter flight in 2020 and sentenced to 25 years on terrorism charges, before being released in 2023 under US diplomatic pressure. The only functioning opposition party, Frank Habineza's Democratic Green Party, has never posed a credible electoral challenge and appears to serve as a legitimating presence rather than genuine competition.",
    },
    {
      id: "c3",
      heading: "Domestic and diaspora surveillance is extensive",
      body: "Rwanda maintains one of the most comprehensive surveillance systems in sub-Saharan Africa. The community governance structure — running from national government through province, district, sector, cell (akagari), and village (umudugudu) — provides near-total administrative visibility into citizens' movements and living arrangements. Originally designed for service delivery and post-genocide reconciliation tracking, this architecture functions simultaneously as a dense information network reaching every household. Beyond domestic surveillance, Citizen Lab documented in 2022 that Rwanda deployed NSO Group's Pegasus spyware to target dissidents and critics in Canada, France, India, and the United Kingdom — including phones belonging to associates of Paul Rusesabagina. The Rwandan government denies these findings. Reporters Without Borders ranks Rwanda around 130th globally for press freedom; investigative journalists report that self-censorship is the dominant operating mode inside the country.",
    },
    {
      id: "c4",
      heading: "Kagame is credibly accused of backing M23 in eastern DRC",
      body: "Multiple UN Group of Experts reports on the DRC have documented Rwandan state support for the M23 rebel group in eastern Congo. The first M23 crisis (2012) prompted the UK, US, Germany, and the Netherlands to suspend bilateral aid after a UN report implicated Rwanda directly; donors resumed funding after Rwanda denied involvement. The current M23 resurgence (2022–present) has produced substantially stronger evidence: the UN Group of Experts, the United States, the European Union, Belgium, and France have each publicly stated that Rwanda Defence Force units are operating inside eastern DRC in support of M23. M23 — reportedly with direct RDF backing — captured Goma, capital of North Kivu province (population ~2 million), in January 2025. The strategic logic likely involves elimination of FDLR remnants (Hutu ex-génocidaires operating from eastern DRC), control over mineral flows from the Kivu region (coltan, gold, cassiterite), and domestic political uses of external security framing. This raises a troubling question about Rwanda's development model: whether state capacity and fiscal stability at home have been partly underwritten by extractive influence over a neighbour that ranks among the world's most impoverished and conflict-affected countries.",
    },
  ],
};

export default rwanda;
