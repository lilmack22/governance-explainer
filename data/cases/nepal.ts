import type { CaseStudy } from "../types";

const nepal: CaseStudy = {
  id: "nepal",
  slug: "nepal",
  country: "Nepal",
  region: "South Asia",
  flag: "🇳🇵",
  isoCode: "NPL",
  isoNumeric: "524",
  coordinates: [84.124, 28.3949],
  transformationHeadline: "From Maoist insurgency and monarchy to federal democratic republic",
  transformationSubtext:
    "In 1996, a Maoist insurgency launched a 'People's War' against Nepal's constitutional monarchy in one of the world's poorest and most unequal countries. Ten years of brutal civil war, a royal massacre, and a king's political suicide through coup combined to produce something unexpected: not a Maoist revolutionary state or a military dictatorship, but a negotiated transition to a federal democratic republic with gender and ethnic inclusion mandates. By 2015 Nepal had a new constitution; by 2017 it held the first elections under it. The transformation is real, fragile, and poorly understood.",
  puzzle:
    "Nepal's Maoist insurgency, launched in 1996 under the Communist Party of Nepal (Maoist), was one of the last 20th-century-style 'People's Wars' — a Maoist military doctrine of expanding liberated zones from the rural periphery to encircle urban centers. By 2005, the Maoists controlled approximately 80% of Nepal's rural territory. Standard revolutionary war logic (Huntington, Political Order in Changing Societies) would predict either a revolutionary victory or a decisive military defeat. Instead, Nepal produced a third outcome: a negotiated peace that abolished the monarchy, restructured the state on federal lines, and integrated the Maoist People's Liberation Army into the national army. The key analytical puzzle is why this outcome emerged. Three causal factors are particularly interesting: (1) King Gyanendra's 2005 royal coup, which united the parliamentary parties and Maoists against a common enemy they had previously viewed as rivals; (2) India's decision to facilitate rather than obstruct the peace process — a reversal of its earlier support for the monarchy; and (3) the Maoists' own strategic calculation that electoral politics offered better prospects than a military endgame that was not clearly within reach. Understanding why armed groups choose elections over armed struggle — and under what conditions this choice is durable — is one of the central questions in the study of conflict termination.",
  causalQuestion:
    "Why did Nepal's Maoist insurgency end in a negotiated transition to a federal democratic republic rather than either a revolutionary takeover or a military defeat — and what made the Maoists willing to trade military power for electoral competition?",

  timeline: [
    {
      year: 1990,
      label: "Jana Andolan I",
      description:
        "The first People's Movement forces King Birendra to accept a multi-party constitutional framework, replacing Panchayat autocracy. Nepal becomes a constitutional monarchy with competitive elections. The CPN-UML (mainstream communists) and the Nepali Congress dominate; the more radical Maoists (CPN-M) participate initially but conclude that parliamentary politics cannot address Nepal's deep structural inequalities of caste, ethnicity, and class.",
      type: "transition",
    },
    {
      year: 1996,
      label: "People's War Begins",
      description:
        "CPN-M Chairman Pushpa Kamal Dahal ('Prachanda') and ideologue Baburam Bhattarai launch the People's War with an attack on police posts in Rolpa District. The insurgency follows Maoist military doctrine: guerrilla operations in rural peripheries, expansion of 'base areas,' and eventual encirclement of urban centers. Initial state response is police-based, inadequate, and often counterproductive — brutalizing civilians and driving recruits toward the Maoists.",
      type: "crisis",
    },
    {
      year: 2001,
      label: "Royal Massacre",
      description:
        "Crown Prince Dipendra shoots and kills King Birendra, Queen Aishwarya, and seven other members of the royal family at a palace gathering in June — apparently over a dispute about his choice of wife. He is then mortally self-wounded and dies three days later. His uncle Gyanendra becomes king. The massacre is traumatic for Nepal's royalist identity and removes a popular, moderate king who had maintained public trust. It is a turning point: Gyanendra lacks Birendra's legitimacy and will prove far more politically aggressive.",
      type: "crisis",
    },
    {
      year: 2002,
      label: "Army Deployed Against Maoists",
      description:
        "For the first time, the Royal Nepalese Army is deployed in counterinsurgency operations against the Maoists. The conflict intensifies dramatically: civilian casualties rise; both sides commit atrocities; the OHCHR documents abuses by the army (disappearances, extrajudicial killings) and by the Maoists (bombings, forced recruitment, killings of political opponents). The war reaches its deadliest phase.",
      type: "crisis",
    },
    {
      year: 2005,
      label: "Gyanendra's Royal Coup",
      description:
        "King Gyanendra dismisses the elected government, assumes direct executive power, suspends civil liberties, and places political leaders under house arrest — claiming the parliamentary parties had failed to address the Maoist threat. The move is widely condemned internationally and domestically. Critically, it produces an unintended strategic consequence: the parliamentary parties and the Maoists, who had been fighting each other as much as they had been fighting the monarchy, now share a common opponent. This is the decisive political moment that makes the 2006 peace process possible.",
      type: "crisis",
    },
    {
      year: 2006,
      label: "Jana Andolan II & Comprehensive Peace Agreement",
      description:
        "April protests (the second People's Movement) bring hundreds of thousands into the streets of Kathmandu and other cities. The Seven-Party Alliance (SPA) of parliamentary parties and the Maoists have signed a 12-Point Understanding; together they present an unstoppable political front. Gyanendra capitulates, restoring the parliament in April. On November 21, 2006, the Government of Nepal and CPN-M sign the Comprehensive Peace Agreement — ending the ten-year war that killed approximately 17,000 people. The Maoist People's Liberation Army enters cantonment camps under UN monitoring.",
      type: "transition",
    },
    {
      year: 2008,
      label: "Constituent Assembly Election; Monarchy Abolished",
      description:
        "Nepal holds its first Constituent Assembly election in April 2008 — a historic achievement. The Maoists win the largest share (36% of seats) — a result that surprises most analysts and demonstrates that their rural political networks translated into electoral support. The Constituent Assembly formally abolishes the 240-year-old Shah monarchy on May 28, 2008. Prachanda becomes Nepal's first Prime Minister of the federal democratic republic. He resigns within a year over a dispute with the president about army chief appointments.",
      type: "outcome",
    },
    {
      year: 2012,
      label: "Constituent Assembly Dissolved Without Constitution",
      description:
        "The first Constituent Assembly expires in May 2012 without having produced a constitution — a profound failure of the peace process. The central disputes: how to demarcate federal provinces (especially the Madhesi demand for a Madhesh province based on the Terai plains), how to allocate seats in the new parliament, and whether to adopt a parliamentary or semi-presidential system. The dissolution triggers a political crisis; a government of 'national consensus' under Chief Justice Khil Raj Regmi manages a second Constituent Assembly election.",
      type: "tension",
    },
    {
      year: 2015,
      label: "Constitution Promulgated; Earthquake",
      description:
        "Nepal's second Constituent Assembly promulgates a new federal democratic constitution on September 20, 2015 — the culmination of the nine-year peace process. The constitution divides Nepal into seven federal provinces, mandates gender quotas (33% women in parliament), and introduces proportional representation provisions. But Madhesi communities and Tharu communities in the Terai blockade the constitution, objecting to provincial boundaries they say gerrymandered them into minority positions. India backs the Madhesi concerns by allowing a fuel blockade. Separately, a devastating earthquake in April had killed nearly 9,000 people and displaced hundreds of thousands.",
      type: "outcome",
    },
    {
      year: 2017,
      label: "Federal Elections",
      description:
        "Nepal holds its first elections under the new constitution — at three levels: federal parliament, provincial assemblies, and local government — for the first time in twenty years. The left alliance of CPN-UML and CPN-M wins a dominant majority. KP Sharma Oli becomes Prime Minister. The parties subsequently merge into the Nepal Communist Party (NCP), creating a two-thirds majority. The merger collapses in 2021; the NCP splits; subsequent years feature a revolving door of coalition governments. By 2024, Nepal has had more than 30 governments since 1990.",
      type: "outcome",
    },
  ],

  indicators: [
    {
      id: "conflict-deaths",
      name: "Conflict-Related Deaths",
      valueBefore: "~17,000",
      valueAfter: "No active insurgency",
      beforeLabel: "1996–2006 (war)",
      afterLabel: "2024",
      trend: "down",
      note: "Ten-year war killed approximately 17,000 people; no return to armed conflict since 2006",
    },
    {
      id: "poverty",
      name: "Poverty Rate (below $2.15/day)",
      valueBefore: "~42%",
      valueAfter: "~20%",
      beforeLabel: "2003",
      afterLabel: "2023",
      trend: "down",
      note: "Significant poverty reduction driven largely by remittances (25%+ of GDP) rather than domestic economic transformation",
    },
    {
      id: "life-expectancy",
      name: "Life Expectancy",
      valueBefore: "~61 yrs",
      valueAfter: "~72 yrs",
      beforeLabel: "2000",
      afterLabel: "2023",
      trend: "up",
      note: "Steady improvement through health investment and improved food security; one of South Asia's stronger trends",
    },
    {
      id: "women-parliament",
      name: "Women in Federal Parliament",
      valueBefore: "~6%",
      valueAfter: "~34%",
      beforeLabel: "2000",
      afterLabel: "2022",
      trend: "up",
      note: "Constitutional 33% minimum quota is among the highest mandated female representation requirements globally",
    },
    {
      id: "child-mortality",
      name: "Under-5 Mortality (per 1,000 live births)",
      valueBefore: "~91",
      valueAfter: "~32",
      beforeLabel: "2000",
      afterLabel: "2022",
      trend: "down",
      note: "Among South Asia's fastest improvements; driven by community health programs and female community health volunteers",
    },
    {
      id: "pla-integration",
      name: "PLA Combatants Integrated/Rehabilitated",
      valueBefore: "~19,000 cantonments",
      valueAfter: "~6,500 integrated into NA",
      beforeLabel: "2006",
      afterLabel: "2013",
      trend: "up",
      note: "The remainder received rehabilitation packages; PLA integration was a key source of political tension throughout the peace process",
    },
  ],

  causalNodes: [
    // ── Upstream ───────────────────────────────────────────────────────────────
    {
      id: "agrarian-caste-grievances",
      label: "Agrarian and Caste Grievances",
      shortLabel: "Land inequality and caste hierarchy create insurgent support base",
      nodeType: "upstream",
      conceptId: "political-settlement",
      description:
        "Nepal in the 1990s combined extreme land inequality with a rigid caste hierarchy (the Bahun-Chhetri 'high caste' elite dominated government, military, and education) and geographic inequality (hill and mountain regions excluded from development). Frances Stewart's 'horizontal inequalities' framework is directly applicable: the grievances that sustain civil wars are not simply individual poverty but the perception that one's ethnic, regional, or caste group is systematically excluded from power and resources. Maoist mobilization in Nepal explicitly targeted this intersection: their ideology promised land reform, caste abolition, and regional autonomy — a program that resonated in the most marginalized communities of far-western and mid-western Nepal. The Maoists were also strategic in their recruitment: they specifically targeted Janajati (indigenous nationalities) and Dalit communities whose grievances were real and whose existing organizational capacity could be activated. Whether these groups were 'genuinely' Maoist in ideology or were pragmatically allying with the most credible agent of redistribution is analytically interesting but practically matters less than the fact that the alliance held.",
      year: "Structural",
      position: { x: 0, y: 0 },
    },
    {
      id: "maoist-strategy",
      label: "Maoist Political-Military Strategy",
      shortLabel: "CPN-M's People's War doctrine creates genuine military threat",
      nodeType: "upstream",
      conceptId: "monopoly-on-violence",
      description:
        "The CPN-M's leadership — Prachanda (Pushpa Kamal Dahal) and Baburam Bhattarai — were sophisticated strategic thinkers who combined military doctrine with political program. Their 'People's War' was not simply terrorism; it involved establishing 'base areas' with parallel governance (people's courts, taxation, dispute resolution), maintaining political discipline among combatants (unlike the RUF in Sierra Leone), and carefully calibrating violence to build political support rather than alienate potential allies. By 2005 the Maoists governed approximately 80% of rural Nepal — not as phantom administrators but as functioning authorities. This governance capacity — which Arjona, Kasfir, and Mampilly ('Rebel Governance in Civil War', 2015) would recognize as 'order without the state' — gave the Maoists the organizational infrastructure to credibly transition to electoral politics: they had voter contact networks, local cadres, and administrative experience that the parliamentary parties in rural areas did not.",
      year: "1996–2006",
      position: { x: 0, y: 130 },
    },
    {
      id: "royal-miscalculation",
      label: "Gyanendra's Royal Coup",
      shortLabel: "King's 2005 power grab unites parties and Maoists against common enemy",
      nodeType: "upstream",
      conceptId: "elite-bargain",
      description:
        "King Gyanendra's February 2005 decision to dismiss the elected government and assume direct executive power was the decisive political miscalculation of the peace process. His stated rationale — that the parliamentary parties had failed to defeat the Maoists — was not entirely wrong. But his coup destroyed the institutional legitimacy that had maintained a distinction between the monarchy and the state; demonstrated that he could not be trusted as a constitutional monarch; and, most importantly, created a common enemy for actors who had previously been divided. The parliamentary parties, which had been willing to support army operations against the Maoists, now faced their own repression. The Maoists, which had been attacking parliamentary politicians as 'feudal' collaborators, now had an interest in the restoration of parliamentary institutions. The 12-Point Understanding between the SPA and CPN-M — signed in November 2005 — was the direct product of the coup. Gyanendra's miscalculation was structural: he underestimated how much his legitimacy depended on the parliamentary system's existence, and overestimated how much either the parties or the Maoists would prefer his direct rule to their existing arrangement.",
      year: "2005",
      position: { x: 0, y: 270 },
    },

    // ── Mechanisms ────────────────────────────────────────────────────────────
    {
      id: "spa-maoist-alliance",
      label: "Seven-Party Alliance + Maoists",
      shortLabel: "United front against monarchy creates irresistible political coalition",
      nodeType: "mechanism",
      conceptId: "elite-bargain",
      description:
        "The 12-Point Understanding between the Seven-Party Alliance and the CPN-M, signed in November 2005, was politically remarkable: parliamentary democratic parties and an armed Maoist organization agreed on a common program (constituent assembly, end to royal rule, peace process) while maintaining their fundamental disagreements about long-term political arrangements. This unity was the product of Gyanendra's coup — which had made royalism the shared enemy — and of Indian facilitation. The alliance held through the April 2006 protests and the peace agreement, though cracks appeared immediately in the Constituent Assembly period as the Maoists and the parliamentary parties disagreed on virtually every constitutional question. The alliance's durability in the short run (2005–2008) demonstrates that tactical unity against a common enemy can sustain even ideologically incompatible partners; its fragility in the long run (2008–2012) demonstrates why constitutional negotiations are harder than military campaigns.",
      year: "2005–08",
      position: { x: 175, y: 0 },
    },
    {
      id: "indian-facilitation",
      label: "Indian Diplomatic Facilitation",
      shortLabel: "India withdraws support from monarchy and facilitates SPA-Maoist dialogue",
      nodeType: "mechanism",
      conceptId: "political-settlement",
      description:
        "India's role in Nepal's peace process was decisive and has been underappreciated in Western accounts. India had historically supported the constitutional monarchy as a buffer against Chinese influence and Maoist radicalism. After Gyanendra's coup, India reversed this position: it withdrew political support from the monarchy, allowed the SPA leadership to hold key meetings in New Delhi, and facilitated the contacts between the parliamentary parties and the Maoists. Indian intelligence and diplomatic channels were central to the negotiations that produced the 12-Point Understanding. India's decision to facilitate rather than obstruct reflected its calculation that a multiparty democratic Nepal — including the Maoists within the constitutional framework — was less threatening to Indian interests than a Maoist revolutionary state or a prolonged destabilization. This is a case where regional power involvement was essential to conflict termination — a pattern also visible in South Africa (US/European facilitation), Mozambique (Italian facilitation), and El Salvador (US involvement in pressuring the government).",
      year: "2005–06",
      position: { x: 175, y: 140 },
    },
    {
      id: "ohchr-monitoring",
      label: "OHCHR Human Rights Monitoring",
      shortLabel: "UN human rights presence documents abuses and constrains both parties",
      nodeType: "mechanism",
      conceptId: "monopoly-on-violence",
      description:
        "The Office of the High Commissioner for Human Rights established a significant field presence in Nepal in 2005 — unusual for a conflict that received limited international attention. OHCHR documented abuses by both the Royal Nepalese Army (disappearances, torture) and the Maoists (killings, forced recruitment, bombings). The documentation served several functions: it created accountability pressure on both sides, provided independent information about conflict dynamics to international audiences, and established an evidentiary base that would shape post-conflict transitional justice discussions. Nepal's post-conflict transitional justice process — a Truth and Reconciliation Commission — has been deeply contested and largely dysfunctional; but OHCHR's documentation preserved the evidentiary base that a functional process would need.",
      year: "2005–06",
      position: { x: 175, y: 290 },
    },
    {
      id: "cpa-cantonment",
      label: "Comprehensive Peace Agreement",
      shortLabel: "PLA cantonned under UN monitoring; arms management agreed",
      nodeType: "mechanism",
      conceptId: "political-settlement",
      description:
        "The November 2006 Comprehensive Peace Agreement (CPA) is the formal instrument of conflict termination. Its key provisions: the Maoist PLA would be confined to cantonment camps under UN monitoring (UNMIN); the RNA would be confined to barracks; weapons from both sides would be placed under UN-managed locks; and the political process would proceed to constituent assembly elections. The CPA created the United Nations Mission in Nepal (UNMIN) to verify and monitor the agreement. UNMIN's arms management role was central: by physically separating armed forces and placing weapons under joint monitoring, it reduced the risk that either side could rapidly remilitarize if negotiations broke down. The PLA integration question — whether and how Maoist fighters would be integrated into the Nepal Army — was deliberately deferred, becoming the most persistent source of political tension in the post-CPA period.",
      year: "2006–08",
      position: { x: 175, y: 440 },
    },
    {
      id: "constituent-assembly",
      label: "Constituent Assembly Process",
      shortLabel: "Elected assembly drafts constitution with inclusion provisions",
      nodeType: "mechanism",
      conceptId: "political-settlement",
      description:
        "The Constituent Assembly elections of 2008 produced a body that was, for the first time in Nepali history, representative of the country's diversity: women (33%), Janajati (indigenous nationalities), Madhesi, and Dalit members were present in numbers approaching demographic proportionality. The assembly was mandated to write a constitution — a process that ultimately took nine years (2006–2015) across two assemblies. The first assembly's failure to produce a constitution in its four-year term was a genuine crisis; the second assembly's success in promulgating one was equally genuine. The final constitution's federal provisions — seven provinces, proportional representation, gender quotas — embedded the structural changes the Maoists had demanded without requiring a Maoist revolutionary state. The constitution is contested by Madhesi and Tharu communities for its provincial boundary demarcations but represents a constitutional settlement that all major political parties formally accepted.",
      year: "2008–15",
      position: { x: 175, y: 600 },
    },

    // ── Outcomes ─────────────────────────────────────────────────────────────
    {
      id: "monarchy-abolished",
      label: "Monarchy Abolished",
      shortLabel: "240-year-old Shah monarchy ends; federal republic proclaimed",
      nodeType: "outcome",
      conceptId: "elite-bargain",
      description:
        "The Constituent Assembly's first act, on May 28, 2008, was to declare Nepal a federal democratic republic — abolishing the 240-year-old Shah dynasty without a referendum. This outcome would have seemed almost inconceivable in 2004: the monarchy retained significant public legitimacy, royalist parties held parliamentary seats, and the army officer corps was predominantly royalist in orientation. Gyanendra's coup had destroyed this legitimacy more decisively than a decade of Maoist propaganda. The abolition was nonviolent: Gyanendra accepted the decision and left the palace within days. This moment demonstrates how quickly political equilibria can shift when an actor makes a catastrophic miscalculation — and how difficult it is to restore legitimacy once lost.",
      year: "2008",
      position: { x: 350, y: 150 },
    },
    {
      id: "federal-constitution",
      label: "Federal Democratic Constitution",
      shortLabel: "New constitution federalizes state and mandates inclusion",
      nodeType: "outcome",
      conceptId: "political-settlement",
      description:
        "Nepal's 2015 constitution is a genuine structural transformation. It abolished the unitary state and created seven federal provinces; established a bicameral federal parliament with a proportional representation component; mandated that one-third of all elected representatives at every level be women; established reserved seats for Dalits, Janajati, Madhesi, Tharu, and other marginalized groups; and formally ended caste-based discrimination. The constitution's formal provisions are more progressive than those of most established democracies. Implementation has been deeply uneven: the gender quota operates, producing Nepal's 34% female parliamentary representation; caste discrimination persists despite constitutional prohibition; federalism has transferred some functions to provinces but fiscal devolution has lagged. The constitution is a floor, not a ceiling — and the distance between formal text and lived practice remains large.",
      year: "2015",
      position: { x: 350, y: 400 },
    },
    {
      id: "inclusive-representation",
      label: "Inclusive Political Representation",
      shortLabel: "Women, Dalit, Janajati represented in parliament at unprecedented levels",
      nodeType: "outcome",
      conceptId: "political-settlement",
      description:
        "Nepal's post-2015 elections have produced parliaments that are more representative of the country's diversity than any previous political body. Women hold approximately 34% of federal parliamentary seats; Janajati members hold roughly proportional shares; Madhesi and Tharu representation has improved, though remains contested. This representation is not simply symbolic: it changes which issues are raised, which budgetary priorities are debated, and which communities' concerns receive political attention. Community health programs, gender-based violence legislation, and land reform debates all look different when the people most affected by them are in the room. The durability of this representation depends on whether quota mechanisms are maintained and strengthened — or eroded by constitutional amendments under future governments.",
      year: "2017+",
      position: { x: 350, y: 650 },
    },

    // ── Critique ──────────────────────────────────────────────────────────────
    {
      id: "political-instability",
      label: "Chronic Political Instability",
      shortLabel: "30+ governments in 30 years; coalition politics paralyzes governance",
      nodeType: "critique",
      conceptId: "state-capacity",
      description:
        "Nepal has had more than 30 governments since the restoration of multi-party democracy in 1990 — a rate of governmental instability that is extraordinary even by South Asian standards. The pattern has accelerated rather than stabilized after the CPA: coalition fragmentation, personal rivalries within parties, and the institutional design of the mixed proportional system all produce governments that typically last less than a year. This instability has direct consequences for development: development plans, civil service leadership, and sectoral programs all change with governments; long-term investments in infrastructure, health, and education require continuity that frequently does not exist. The World Bank's governance assessments consistently identify political instability as the primary constraint on Nepal's development trajectory. The Maoists' transformation from military to political actors was successful in one sense — they compete in elections and govern — but the fragmentation of post-merger politics has produced exactly the elite deal-making and instability that their original insurgency claimed to oppose.",
      year: "Persistent",
      position: { x: 175, y: 800 },
    },
  ],

  causalEdges: [
    // Upstream → Mechanisms
    { id: "e1", source: "agrarian-caste-grievances", target: "maoist-strategy", edgeType: "main" },
    { id: "e2", source: "royal-miscalculation", target: "spa-maoist-alliance", edgeType: "main" },
    { id: "e3", source: "royal-miscalculation", target: "indian-facilitation", edgeType: "main" },
    { id: "e4", source: "maoist-strategy", target: "spa-maoist-alliance", edgeType: "main" },

    // Mechanisms → Mechanisms
    { id: "e5", source: "spa-maoist-alliance", target: "cpa-cantonment", edgeType: "main" },
    { id: "e6", source: "indian-facilitation", target: "cpa-cantonment", edgeType: "main" },
    { id: "e7", source: "ohchr-monitoring", target: "cpa-cantonment", edgeType: "main" },
    { id: "e8", source: "cpa-cantonment", target: "constituent-assembly", edgeType: "main" },

    // Mechanisms → Outcomes
    { id: "e9", source: "spa-maoist-alliance", target: "monarchy-abolished", edgeType: "main" },
    { id: "e10", source: "cpa-cantonment", target: "monarchy-abolished", edgeType: "main" },
    { id: "e11", source: "constituent-assembly", target: "federal-constitution", edgeType: "main" },
    { id: "e12", source: "federal-constitution", target: "inclusive-representation", edgeType: "main" },
    { id: "e13", source: "constituent-assembly", target: "inclusive-representation", edgeType: "main" },

    // Critique edges
    { id: "e14", source: "spa-maoist-alliance", target: "political-instability", edgeType: "critique" },
    { id: "e15", source: "constituent-assembly", target: "political-instability", edgeType: "critique" },
  ],

  status: "live",

  operationalTakeaways: [
    {
      id: "t1",
      heading: "A common enemy can unite incompatible actors — but unity against a common enemy doesn't survive the enemy's removal",
      body: "The SPA-Maoist alliance was forged against a common opponent (Gyanendra's monarchy) and was remarkably effective at that task. But the parliamentary parties and the Maoists disagreed about almost everything else: the structure of the federal state, the integration of PLA fighters, the design of the transitional justice process, and electoral rules. Once the monarchy was removed, these disagreements became primary. Development practitioners designing peace processes need to distinguish between tactical unity (against a common threat) and durable coalition (around a shared program). Building from the former toward the latter requires deliberate institutional design — power-sharing arrangements, resource distribution agreements, and dispute resolution mechanisms — that Nepal's peace process partly failed to provide.",
    },
    {
      id: "t2",
      heading: "Regional powers can be decisive facilitators — or spoilers — of peace processes",
      body: "India's decision to facilitate the SPA-Maoist dialogue (rather than continue backing the monarchy) was essential to the Comprehensive Peace Agreement. Nepal's geographic position — landlocked between India and China, economically dependent on Indian trade — means that Indian preferences cannot be ignored. The 2015 Madhesi fuel blockade demonstrated the same dynamic in reverse: Indian backing for Madhesi protests effectively delayed constitutional implementation for months. External actors with significant leverage over a conflict cannot be treated as bystanders; they are political economy actors with their own interests. Peace processes that fail to account for regional power preferences — or that assume external actors will be neutral — systematically underestimate a major source of both facilitation and spoiling.",
    },
    {
      id: "t3",
      heading: "Armed groups can be integrated into electoral politics — but the terms of integration determine whether it's durable",
      body: "The Maoists' transformation from armed insurgency to the largest party in the Constituent Assembly is a genuine success of the Nepali peace process. But the terms of their integration — particularly the PLA integration question — were left deliberately ambiguous and became a source of recurring political crises. Of approximately 19,000 PLA fighters in cantonment, approximately 6,500 were eventually integrated into the Nepal Army; the remainder received rehabilitation packages. The terms were contested throughout; hardline Maoist factions used the PLA issue to pressure the party leadership in ways that repeatedly destabilized governments. Durable armed group integration requires clear, time-limited mechanisms agreed in advance — not deliberate ambiguity designed to preserve bargaining chips.",
    },
    {
      id: "t4",
      heading: "Constitutional inclusion provisions are a floor, not an outcome",
      body: "Nepal's 2015 constitution mandates 33% women in all elected bodies, reserved seats for Dalit and Janajati communities, and federal devolution to provinces. These provisions are real achievements that have produced measurable changes in representation. But representation is not the same as power: women MPs face significant barriers to advancement within parties; Dalit elected officials often lack the patronage networks that determine actual influence; provincial governments have formal powers but limited fiscal transfers. Development actors working on governance should support both formal inclusion provisions AND the informal power dynamics — internal party democracy, patronage reform, fiscal decentralization — that determine whether formal inclusion translates into real influence.",
    },
  ],

  costs: [
    {
      id: "c1",
      heading: "Chronic political instability has produced 30+ governments in 30 years",
      body: "Nepal's post-1990 political history is defined by governmental instability at a level that is extraordinary even in a region known for fragile coalitions. Since 1990, Nepal has averaged roughly one government per year; several prime ministers have served multiple brief non-consecutive terms. This instability has direct development costs: infrastructure projects stall when ministers change; civil service leadership is replaced with each government; development plans are revised before implementation can begin. The World Bank's 2023 Nepal Country Partnership Framework identifies political instability as the primary governance constraint on development outcomes. The Maoist insurgency ended, but the political fragmentation it produced — a large number of parties competing through coalition politics in a mixed electoral system — has reproduced instability through democratic rather than armed means.",
    },
    {
      id: "c2",
      heading: "Transitional justice has stalled for nearly two decades",
      body: "The Comprehensive Peace Agreement committed both parties to establishing mechanisms to address war-era atrocities: approximately 17,000 killed, 1,300 disappeared, and thousands of cases of torture and sexual violence. Nepal's Truth and Reconciliation Commission was established in 2015 — nine years after the CPA. By 2024, it had made almost no progress: it lacks adequate resources, independence, and political support from parties that include both those accused of ordering abuses and those who carried them out. Conflict survivors — who were promised accountability — have received almost nothing. Nepal's transitional justice failure illustrates a broader pattern: peace agreements routinely include transitional justice provisions that neither party seriously intends to implement, because accountability threatens the same actors whose buy-in makes peace possible. The result is an unresolved wound that shapes political legitimacy and intersects with ongoing caste, ethnic, and regional grievances.",
    },
    {
      id: "c3",
      heading: "The economy runs on remittances, not development — roughly one in four Nepalis works abroad",
      body: "Nepal's poverty reduction since 2000 has been real but is driven primarily by remittances rather than domestic economic transformation. Approximately 25–30% of GDP comes from remittances; millions of Nepalis work in the Gulf, Malaysia, and India. This has reduced household poverty and improved consumption but has also produced a deeply distorted economy: labor is scarce in rural areas, land is underutilized, agriculture is declining, and the manufacturing and services sectors that typically drive structural transformation are underdeveloped. The political economy of remittances also shapes politics: households that depend on remittances are less dependent on the state for income and less sensitive to government performance. The peace dividend that supporters of the 2006 process anticipated — a political settlement unlocking investment and growth — has not materialized. GDP per capita remains below $1,500; Nepal is still classified as a least developed country.",
    },
  ],
};

export default nepal;
