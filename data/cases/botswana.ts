import type { CaseStudy } from "../types";

const botswana: CaseStudy = {
  id: "botswana",
  slug: "botswana",
  country: "Botswana",
  region: "Southern Africa",
  flag: "🇧🇼",
  isoCode: "BWA",
  isoNumeric: "72",
  coordinates: [24.6849, -22.3285],
  transformationHeadline: "Avoiding the resource curse through elite cohesion and institutional inheritance",
  transformationSubtext:
    "At independence in 1966, Botswana was among the five poorest countries in the world — landlocked, drought-prone, with a per capita income of roughly $70, more than 40% of its men working in South African mines, and no functioning civil service. By 2024, it is an upper-middle income country with a per capita income exceeding $8,000, a functional democracy that has held competitive elections for six consecutive decades, and one of Africa's most capable states. The transformation happened on top of diamonds — but diamonds have destroyed states across Africa. Why did they not destroy Botswana?",
  puzzle:
    "The resource curse is one of the most robust findings in comparative political economy: countries that discover significant natural resources tend to develop weaker institutions, higher levels of corruption, more authoritarian politics, and worse long-run economic outcomes than resource-poor counterparts. Nigeria, Angola, DRC, Equatorial Guinea — the African cases follow this pattern with depressing regularity. Botswana is the conspicuous exception. Diamonds were discovered in 1967, one year after independence; they began generating significant revenues in the early 1970s. But instead of the classic Dutch disease, rentier state pathologies, and elite predation that theory predicts, Botswana built functioning institutions, negotiated an unusually favorable deal with De Beers, and channeled revenues into public investment. Acemoglu, Johnson, and Robinson ('An African Success Story', 2001) attribute this to pre-colonial institutional inheritance — the kgotla tradition of community deliberation that constrained chiefly power — and to a relatively cohesive founding elite that faced no immediate security threat from neighbors. The deeper puzzle is whether Botswana's success was replicable or was contingent on a particular historical configuration that other resource-rich states simply cannot access.",
  causalQuestion:
    "Why did Botswana escape the resource curse that devastated so many other African states — and what does its experience tell us about the conditions under which natural resource revenues can support rather than undermine development and democracy?",

  timeline: [
    {
      year: 1966,
      label: "Independence",
      description:
        "Botswana gains independence from Britain on September 30, 1966, under Seretse Khama and the Botswana Democratic Party. It is among the world's five poorest countries: GDP per capita approximately $70, few paved roads, no university, and heavy dependence on South African migrant labor remittances. The civil service is almost entirely British expatriates; Khama's first challenge is building a state from scratch.",
      type: "transition",
    },
    {
      year: 1967,
      label: "Diamond Discovery",
      description:
        "Anglo American prospectors discover diamond pipes at Orapa, one of the world's largest kimberlite deposits. Smaller discoveries follow at Letlhakane (1970) and Jwaneng (1973) — Jwaneng becoming the world's richest diamond mine by value. The timing is critical: diamonds are discovered after independence, so Botswana's institutions predate resource revenues. Unlike many petrostates, the state was not built on resource rents.",
      type: "outcome",
    },
    {
      year: 1969,
      label: "Debswana Joint Venture",
      description:
        "Botswana negotiates a 50/50 joint venture with De Beers, creating Debswana Diamond Company. The state retains half the equity, appoints board members, and participates in management — while De Beers provides capital, technology, and marketing access. This deal is renegotiated upward over the years; by the 1990s Botswana is receiving approximately 75% of diamond revenues through taxes, royalties, and dividends. It represents a fundamentally different approach to resource extraction than the enclave models common elsewhere in Africa.",
      type: "reform",
    },
    {
      year: 1980,
      label: "Khama Dies; Masire Succeeds",
      description:
        "Seretse Khama dies in office; Quett Ketumile Masire succeeds him without disorder, beginning a pattern of peaceful presidential succession within the BDP that would hold for six decades. Masire continues Khama's fiscal conservatism, establishing the Pula Fund (sovereign wealth) and maintaining the Development Plan framework. The BDP's internal succession norm — a critical element of political stability — is established early.",
      type: "transition",
    },
    {
      year: 1994,
      label: "First Competitive Election",
      description:
        "The Botswana National Front (BNF) wins 13 of 40 parliamentary seats — the first time the BDP has faced serious electoral competition. Though the BDP retains power, the result demonstrates that elections are genuinely competitive and that peaceful transfer of power is institutionally possible. This contrasts sharply with most of Botswana's neighbors during this period.",
      type: "outcome",
    },
    {
      year: 1997,
      label: "HIV/AIDS Crisis",
      description:
        "Botswana's HIV prevalence reaches approximately 38% among adults aged 15–49 — the highest in the world. The epidemic decimates the working-age population, reverses life expectancy gains, and threatens both the labor force and the fiscal model. The government's response under Festus Mogae is eventually exemplary: the 'Masa' program (2002) provides universal free antiretroviral treatment, becoming one of Africa's most successful public health interventions. But the crisis cost Botswana nearly a decade of demographic progress.",
      type: "crisis",
    },
    {
      year: 2008,
      label: "Ian Khama Presidency",
      description:
        "Ian Khama, son of independence president Seretse Khama, becomes president. His decade in office is marked by genuine democratic backsliding: media restrictions, use of the Directorate of Intelligence and Security against opponents, and an increasingly presidential style. Botswana's press freedom rankings fall. His presidency demonstrates that institutions are only as strong as the people who govern within them — and that even functioning democracies can backslide without external pressure.",
      type: "tension",
    },
    {
      year: 2019,
      label: "Masisi Wins Post-Khama Election",
      description:
        "Mokgweetsi Masisi wins the first election after Ian Khama's term, despite an unusual public rupture with his predecessor. Khama endorses the main opposition candidate — an extraordinary event in Botswana's politics. Masisi wins; democratic continuity is maintained, but the Khama-Masisi split reveals factional tensions within the BDP that decades of prosperity had concealed.",
      type: "transition",
    },
    {
      year: 2024,
      label: "Historic Opposition Victory",
      description:
        "Duma Boko and the Umbrella for Democratic Change win the general election — the first opposition presidential victory in Botswana's history. After 58 years of BDP rule, power transfers peacefully to the opposition. This moment completes the democratic consolidation process: not just competitive elections, but actual alternation of power. The transition is widely praised as a model for African democratic governance.",
      type: "outcome",
    },
  ],

  indicators: [
    {
      id: "gdp",
      name: "GDP per Capita (USD)",
      valueBefore: "~$70",
      valueAfter: "~$8,100",
      beforeLabel: "1966 (independence)",
      afterLabel: "2024",
      trend: "up",
      note: "A 115x increase in real terms — one of the fastest long-run growth trajectories anywhere in the post-colonial world",
    },
    {
      id: "poverty",
      name: "Poverty Rate (below $5.50/day)",
      valueBefore: "~70%",
      valueAfter: "~30%",
      beforeLabel: "1970s",
      afterLabel: "2023",
      trend: "down",
      note: "Substantial reduction, though Botswana's inequality (GINI ~53) means gains have been concentrated — extreme poverty is low but relative poverty is high",
    },
    {
      id: "life-expectancy",
      name: "Life Expectancy",
      valueBefore: "~52 yrs",
      valueAfter: "~70 yrs",
      beforeLabel: "1966",
      afterLabel: "2024",
      trend: "up",
      note: "Life expectancy collapsed to ~47 during the HIV/AIDS crisis (late 1990s); the Masa ARV program drove recovery from ~2002 onward",
    },
    {
      id: "governance",
      name: "WB Govt. Effectiveness (Percentile)",
      valueBefore: "~20th",
      valueAfter: "~70th",
      beforeLabel: "1996",
      afterLabel: "2022",
      trend: "up",
      note: "Consistently among the top 2–3 performers in sub-Saharan Africa, well above regional average and comparable to some OECD countries",
    },
    {
      id: "polity",
      name: "Polity Democracy Score",
      valueBefore: "+6",
      valueAfter: "+8",
      beforeLabel: "1980",
      afterLabel: "2022",
      trend: "up",
      note: "Classified as democracy throughout its post-independence history; 2024 peaceful opposition transfer is the culmination of democratic consolidation",
    },
    {
      id: "gini",
      name: "Income GINI Coefficient",
      valueBefore: "~63",
      valueAfter: "~53",
      beforeLabel: "1993",
      afterLabel: "2015",
      trend: "down",
      note: "Still among the world's highest inequality levels; diamond revenues have funded services but have not produced distributional equality",
    },
  ],

  causalNodes: [
    // ── Upstream ───────────────────────────────────────────────────────────────
    {
      id: "kgotla-institutions",
      label: "Pre-Colonial Kgotla Tradition",
      shortLabel: "Community deliberation constrains chiefly and state power",
      nodeType: "upstream",
      conceptId: "political-settlement",
      description:
        "The kgotla is a traditional Tswana community assembly — a public forum in which the chief hears disputes, gathers opinions before major decisions, and is formally obligated to explain his reasoning to community members. Unlike the authority structures in many neighboring societies (including the hierarchical chieftaincies of Zulu and Ndebele systems), kgotla practice embedded a norm of consultation and constrained unilateral chiefly action. Acemoglu, Johnson, and Robinson (2001) argue that this pre-colonial institutional inheritance was the critical differentiating factor: when colonial rule and then independence layered European administrative institutions on top of existing social structures, Botswana's kgotla tradition provided a culturally legitimate foundation for accountable governance. The argument draws on their broader framework in Why Nations Fail: historical institutions shape the range of political equilibria available to a society, and path dependency is real. Critics note this argument can verge on cultural essentialism — but the kgotla's documented role in constraining chiefly extraction during the colonial period does provide empirical support for the institutional persistence claim.",
      year: "Pre-colonial",
      position: { x: 0, y: 0 },
    },
    {
      id: "seretse-khama-leadership",
      label: "Seretse Khama's Leadership",
      shortLabel: "Founding president builds inclusive BDP coalition and fiscal norms",
      nodeType: "upstream",
      conceptId: "elite-bargain",
      description:
        "Seretse Khama, Botswana's founding president, brought together several unusual characteristics. He had been expelled from Bechuanaland by the British in 1950 for marrying a white English woman (Ruth Williams) — an act that made him genuinely popular with ordinary Batswana and internationally symbolically significant. His BDP was a cross-class coalition that included traditional chiefs, the emerging educated elite, and rural voters. Crucially, Khama established fiscal norms early: when diamond revenues began arriving, he insisted on saving them rather than distributing them as patronage. His government created the Botswana Development Corporation and the National Development Planning framework before significant revenues arrived. Leith (2005) and Samatar (1999) both emphasize that Khama's personal orientation — and his ability to recruit a small cohort of technically competent civil servants — was contingent on his particular biography and cannot be straightforwardly replicated by policy design.",
      year: "1966–80",
      position: { x: 0, y: 130 },
    },
    {
      id: "diamond-timing",
      label: "Diamond Discovery Timing",
      shortLabel: "Diamonds found after independence — institutions predated resource rents",
      nodeType: "upstream",
      conceptId: "developmental-state",
      description:
        "One of the most analytically important features of Botswana's case is the sequencing: diamonds were discovered in 1967, one year after independence. This meant that Botswana's constitutional framework, ruling party, bureaucratic norms, and fiscal institutions all predated the resource revenues. This contrasts sharply with colonial-era resource economies (like Nigeria's oil or DRC's cobalt) where extraction shaped the state from the beginning, creating institutions built around resource capture rather than around governance. The literature on the resource curse (Sachs and Warner, 1995; Ross, 2001) consistently finds that early resource discovery — before institutions are established — produces worse outcomes. Botswana effectively had a window between independence and significant diamond revenues in which to establish institutional norms. Whether leaders used that window wisely was contingent, but the window existed.",
      year: "1967",
      position: { x: 0, y: 270 },
    },

    // ── Mechanisms ────────────────────────────────────────────────────────────
    {
      id: "debswana-deal",
      label: "Debswana Joint Venture",
      shortLabel: "50/50 state-De Beers structure gives Botswana sovereignty over diamonds",
      nodeType: "mechanism",
      conceptId: "developmental-state",
      description:
        "The Debswana arrangement — a 50/50 joint venture between the Government of Botswana and De Beers — was unusual in Africa in that it gave the state genuine equity and management participation rather than simply a royalty stream. This mattered in several ways: the government sat on the board and had visibility into operations; equity participation meant revenues grew with diamond prices rather than being fixed; and the arrangement gave Botswana leverage to renegotiate terms over time. By the 1990s, through a combination of royalties, taxes, and dividends, Botswana was capturing approximately 75% of diamond revenues — far higher than the extractive arrangements in most African resource states. Crucially, Khama negotiated this deal early (1969), before the scale of Botswana's diamond wealth was fully known, giving him bargaining power that later governments would not have had. The arrangement has been repeatedly criticized for De Beers's global diamond pricing power and the cartel structure of the international diamond market — but within those constraints, Botswana captured more of its resource rents than almost any comparable case.",
      year: "1969–",
      position: { x: 175, y: 0 },
    },
    {
      id: "pula-fund",
      label: "Pula Fund & Fiscal Conservatism",
      shortLabel: "Diamond revenues saved in sovereign wealth fund rather than consumed",
      nodeType: "mechanism",
      conceptId: "state-capacity",
      description:
        "The Pula Fund, established in the 1990s and managed by the Bank of Botswana, is a sovereign wealth fund that saves diamond revenues above current expenditure needs. This represents an explicit institutionalization of Khama's informal fiscal conservatism: rather than spending all resource revenues in the present, Botswana invested them for future generations and as a buffer against commodity price volatility. By the mid-2000s, Botswana held foreign exchange reserves exceeding 18 months of import cover — among the highest in Africa. This fiscal architecture insulated Botswana from the classic Dutch disease (exchange rate appreciation that undermines non-resource exports) and from the boom-bust cycles that damaged oil-dependent states in the 1980s. The Long Run Marginal Cost pricing principle — spending only what sustainable long-run diamond revenues would support — embedded macroeconomic discipline into the fiscal framework.",
      year: "1990s–",
      position: { x: 175, y: 140 },
    },
    {
      id: "bdp-hegemony",
      label: "BDP Dominant Party System",
      shortLabel: "BDP governs for 58 years but within competitive electoral rules",
      nodeType: "mechanism",
      conceptId: "elite-bargain",
      description:
        "The Botswana Democratic Party ruled continuously from independence in 1966 until 2024 — 58 years. But unlike dominant-party systems that hollow out democratic institutions (Zimbabwe's ZANU-PF, Tanzania's CCM), the BDP governed within rules that permitted genuine opposition, free press, and an independent judiciary. Elections were held on schedule; results were counted publicly; opposition parties contested and sometimes won significant seats. This combination — one-party dominance within democratic institutions — is what Bogaards (2004) calls a 'dominant party democracy.' The key distinction is between dominance that emerges from structural advantages (incumbency, resource distribution, rural voter networks) versus dominance enforced through coercion. Botswana's was largely the former, which explains why, when the structural advantages eroded and the opposition unified in 2024, power transferred peacefully.",
      year: "1966–2024",
      position: { x: 175, y: 290 },
    },
    {
      id: "meritocratic-civil-service",
      label: "Meritocratic Civil Service",
      shortLabel: "Government invests in educated bureaucracy rather than patronage hiring",
      nodeType: "mechanism",
      conceptId: "state-capacity",
      description:
        "Botswana faced a paradox at independence: it had almost no educated citizens to staff a civil service (the colonial administration had done almost nothing to develop local human capital). Khama's response was to: (1) retain British expatriates temporarily under clearly time-limited contracts with knowledge-transfer obligations; (2) invest heavily in education, making primary schooling free and expanding secondary and university enrollment rapidly; and (3) establish civil service norms that rewarded performance rather than BDP patronage. By the 1990s, Botswana had one of Africa's most capable bureaucracies relative to its income level. Andrews, Pritchett, and Woolcock (Building State Capability) would recognize this as genuine capability development rather than the 'isomorphic mimicry' — adopting forms without function — that characterizes many post-colonial bureaucracies. The civil service's technical quality was central to the successful management of diamond revenues and the implementation of development plans.",
      year: "1970s–",
      position: { x: 175, y: 440 },
    },
    {
      id: "masa-program",
      label: "Masa ARV Program",
      shortLabel: "Universal free antiretrovirals reverse HIV/AIDS demographic collapse",
      nodeType: "mechanism",
      conceptId: "state-capacity",
      description:
        "Botswana's HIV/AIDS crisis in the late 1990s was the most severe in the world: 38% adult prevalence, life expectancy collapsing toward 47 years, and projections suggesting the epidemic could hollow out the working-age population. President Festus Mogae's government responded in 2002 with 'Masa' (Setswana for 'new dawn'): universal, free antiretroviral treatment for all Batswana regardless of ability to pay. This was funded by diamond revenues, supported by the Gates Foundation and Merck, and implemented through a rapidly expanded health system. By 2010, approximately 90% of eligible HIV patients were on treatment — one of the highest coverage rates in sub-Saharan Africa. Life expectancy recovered to above 65 by 2015 and continues to climb. The Masa program is a direct demonstration of how state capacity and fiscal resources — produced by well-managed diamond revenues — can respond to an existential crisis that would have overwhelmed a weaker state.",
      year: "2002–",
      position: { x: 175, y: 590 },
    },

    // ── Outcomes ─────────────────────────────────────────────────────────────
    {
      id: "gdp-growth-outcome",
      label: "Sustained Economic Growth",
      shortLabel: "GDP grows 7%+/year for three decades",
      nodeType: "outcome",
      conceptId: "developmental-state",
      description:
        "Botswana averaged approximately 7–8% real GDP growth per year from independence through the 1990s — one of the fastest sustained growth rates in the world over that period. This growth was directly fueled by diamond revenues channeled into infrastructure, education, and health investment. GDP per capita rose from $70 to over $8,000 — a 115x nominal increase. Upper-middle income classification was achieved in the early 1990s. However, this growth was highly diamond-dependent; attempts to diversify into beef, tourism, and financial services have had limited success, and Botswana remains vulnerable to diamond price and demand shocks.",
      year: "1970+",
      position: { x: 350, y: 150 },
    },
    {
      id: "democratic-consolidation",
      label: "Democratic Consolidation",
      shortLabel: "58 years of elections culminate in peaceful opposition transfer",
      nodeType: "outcome",
      conceptId: "political-settlement",
      description:
        "Botswana held competitive elections in 1969, 1974, 1979, 1984, 1989, 1994, 1999, 2004, 2009, 2014, 2019, and 2024 — every five years without interruption. Each election was held on schedule, with results accepted by all parties. The 2024 transfer of power to the opposition Umbrella for Democratic Change under Duma Boko completed democratic consolidation in Linz and Stepan's terms: the game of democracy became 'the only game in town.' This makes Botswana one of only a handful of sub-Saharan African states to have achieved full democratic consolidation — a status it shares, arguably, only with Mauritius.",
      year: "1969–2024",
      position: { x: 350, y: 380 },
    },
    {
      id: "service-delivery",
      label: "Public Service Expansion",
      shortLabel: "Roads, schools, clinics reach rural communities across Botswana",
      nodeType: "outcome",
      conceptId: "state-capacity",
      description:
        "Diamond revenues funded a systematic expansion of public services that reached genuinely remote rural communities. From a base of almost no paved roads at independence, Botswana built a network connecting most settlements. Primary school enrollment became near-universal; secondary enrollment expanded dramatically; the University of Botswana was established in 1982. Clinics were extended to remote areas; water infrastructure improved. This public goods investment — rather than elite capture of resource rents — is the clearest behavioral distinction between Botswana and other resource-rich African states.",
      year: "1970s+",
      position: { x: 350, y: 600 },
    },

    // ── Critique ──────────────────────────────────────────────────────────────
    {
      id: "diamond-dependency",
      label: "Diamond Dependency and Inequality",
      shortLabel: "Economy remains dangerously concentrated; inequality is high",
      nodeType: "critique",
      conceptId: "developmental-state",
      description:
        "Botswana's 'success' contains a fundamental structural vulnerability: diamonds account for approximately 70–80% of export earnings and 30–35% of GDP. Decades of diversification efforts — into beef, tourism, financial services, diamonds processing — have had limited success. When global diamond demand fell sharply after COVID-19 lockdowns and the rise of lab-grown diamonds (which may structurally reduce natural diamond demand), Botswana's fiscal position deteriorated rapidly. Income inequality — GINI of approximately 53 — remains among the world's highest; diamond revenues have funded services but have not produced distributional equity. The San (Basarwa) communities, Botswana's indigenous people, were forcibly relocated from the Central Kalahari Game Reserve and have benefited least from the diamond economy. Botswana's development story is real; its distributional story is much less flattering.",
      year: "Persistent",
      position: { x: 175, y: 780 },
    },
  ],

  causalEdges: [
    // Upstream → Mechanisms
    { id: "e1", source: "kgotla-institutions", target: "bdp-hegemony", edgeType: "main" },
    { id: "e2", source: "kgotla-institutions", target: "meritocratic-civil-service", edgeType: "main" },
    { id: "e3", source: "seretse-khama-leadership", target: "debswana-deal", edgeType: "main" },
    { id: "e4", source: "seretse-khama-leadership", target: "pula-fund", edgeType: "main" },
    { id: "e5", source: "seretse-khama-leadership", target: "bdp-hegemony", edgeType: "main" },
    { id: "e6", source: "diamond-timing", target: "debswana-deal", edgeType: "main" },
    { id: "e7", source: "diamond-timing", target: "pula-fund", edgeType: "main" },

    // Mechanisms → Mechanisms
    { id: "e8", source: "debswana-deal", target: "pula-fund", edgeType: "main" },
    { id: "e9", source: "pula-fund", target: "meritocratic-civil-service", edgeType: "main" },
    { id: "e10", source: "pula-fund", target: "masa-program", edgeType: "main" },
    { id: "e11", source: "meritocratic-civil-service", target: "masa-program", edgeType: "main" },

    // Mechanisms → Outcomes
    { id: "e12", source: "debswana-deal", target: "gdp-growth-outcome", edgeType: "main" },
    { id: "e13", source: "pula-fund", target: "gdp-growth-outcome", edgeType: "main" },
    { id: "e14", source: "bdp-hegemony", target: "democratic-consolidation", edgeType: "main" },
    { id: "e15", source: "kgotla-institutions", target: "democratic-consolidation", edgeType: "main" },
    { id: "e16", source: "meritocratic-civil-service", target: "service-delivery", edgeType: "main" },
    { id: "e17", source: "pula-fund", target: "service-delivery", edgeType: "main" },
    { id: "e18", source: "masa-program", target: "service-delivery", edgeType: "main" },

    // Critique edges
    { id: "e19", source: "debswana-deal", target: "diamond-dependency", edgeType: "critique" },
    { id: "e20", source: "bdp-hegemony", target: "diamond-dependency", edgeType: "critique" },
  ],

  status: "live",

  operationalTakeaways: [
    {
      id: "t1",
      heading: "Resource revenues can support development if captured before elites are formed around capturing them",
      body: "The standard resource curse narrative focuses on what resource revenues do to politics. Botswana suggests the causal direction matters enormously: when institutions and governing coalitions are established before large revenues arrive, the rent-seeking equilibrium is harder to establish. Leaders who inherited an existing patronage machine have different incentives than those who built the state before the money arrived. This has direct implications for new resource discoveries: the window between discovery and production is the critical period for institutional design, and external partners should use it to support revenue management frameworks, transparency mechanisms, and fiscal rules before extraction begins.",
    },
    {
      id: "t2",
      heading: "The Debswana model offers lessons for renegotiating extractive deals",
      body: "Botswana's 50/50 equity structure — combined with board participation and transparent royalty and dividend flows — gave the state genuine visibility into operations and a revenue stream that grew with prices. Many African countries signed extraction agreements under duress or with limited negotiating capacity that left them with royalty-only arrangements capturing 15–25% of resource value. Botswana's experience suggests that state equity participation, board seats, and profit-sharing above minimum royalties significantly change the government's revenue position. Development partners and legal assistance providers should support renegotiation where contracts were signed on unfavorable terms.",
    },
    {
      id: "t3",
      heading: "Dominant parties can be democratic — but institutional safeguards determine whether dominance is structural or coercive",
      body: "The BDP's 58-year dominance was structurally produced — by rural voter networks, incumbency advantages, and organizational capacity — rather than by systematic coercion. The institutions that permitted this also permitted the opposition to organize, contest, and eventually win. The distinction matters for development practitioners: supporting 'electoral integrity' is not the same as supporting competitive outcomes. What matters is whether the rules permit exit from dominance when citizens demand it. Ian Khama's partial backsliding during 2008–2018 — media restrictions, DIS surveillance — was real but ultimately reversible because it had not destroyed the institutional architecture.",
    },
    {
      id: "t4",
      heading: "State capacity must be built before a crisis arrives, not during it",
      body: "Botswana's Masa HIV/AIDS program succeeded because the state had already built health infrastructure, a capable civil service, and fiscal reserves. The government had the institutional and financial capacity to mount a universal treatment program in 2002 because 36 years of diamond-funded investment had created that capacity. States that confront similar epidemics or shocks without comparable institutional depth — South Africa, Zimbabwe — have had far worse outcomes from HIV despite similar prevalence rates. The lesson for development investment is that state capacity is an insurance policy: its value is revealed precisely when things go wrong.",
    },
  ],

  costs: [
    {
      id: "c1",
      heading: "The San (Basarwa) were forcibly displaced from their ancestral land",
      body: "The Central Kalahari Game Reserve (CKGR) was established in 1961 partly to protect the San (Basarwa), Botswana's indigenous hunter-gatherer communities. In 2002 and 2005, the Botswana government forcibly evicted approximately 3,000 San from the CKGR, cutting off water access, bulldozing settlements, and relocating residents to 'relocation camps' outside the reserve. The stated justification was wildlife conservation and development needs; critics (and courts) argued it was motivated by diamond prospecting rights beneath the reserve. In 2006, the High Court of Botswana ruled the evictions were unlawful. The government largely failed to implement the ruling. The San remain among the most marginalized and poorest communities in Botswana — largely excluded from the diamond economy that transformed the rest of the country.",
    },
    {
      id: "c2",
      heading: "Diamond dependency has not produced diversification despite decades of effort",
      body: "Botswana's development plans have included economic diversification goals since the 1970s. Fifty years later, diamonds still account for approximately 75–80% of export revenues. The tourism sector is significant but small in employment terms; the beef sector is constrained by periodic Foot and Mouth disease outbreaks and market access issues; financial services have grown but remain shallow. Lab-grown diamonds — which cost 10–20% of natural diamonds and are becoming mainstream — represent an existential long-term threat to Botswana's economic model that no diversification strategy has yet credibly addressed. A country whose development model depends on one commodity facing permanent structural demand decline is in a precarious long-term position.",
    },
    {
      id: "c3",
      heading: "Inequality is high despite growth — the diamond economy has not been broadly inclusive",
      body: "Botswana's GINI coefficient of approximately 53 is among the world's 10 highest — comparable to South Africa and significantly higher than most other upper-middle income countries. Diamond revenues funded public services, but they did not produce labor-intensive employment or distributional equity. The extractive sector employs relatively few people directly; indirect linkages are limited; and land distribution remains concentrated among traditional elites. Universal access to health and education has reduced the most severe deprivation — but the pattern of growth has been bimodal: a formal economy connected to the diamond sector and the state, and an informal rural economy that has benefited more modestly. Botswana is not poor; it is unequal — which is a different governance challenge.",
    },
  ],
};

export default botswana;
