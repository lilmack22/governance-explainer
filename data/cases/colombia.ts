import type { CaseStudy } from "../types";

const colombia: CaseStudy = {
  id: "colombia",
  slug: "colombia",
  country: "Colombia",
  region: "South America",
  flag: "🇨🇴",
  isoCode: "COL",
  isoNumeric: "170",
  coordinates: [-74.2973, 4.5709],
  transformationHeadline: "From pariah state and 50-year insurgency to negotiated peace",
  transformationSubtext:
    "By the late 1990s, Colombia was losing territory to FARC, ELN, and AUC paramilitaries simultaneously, coca production was surging, and political scientists were debating whether the state was failing. By 2016, the government had signed the most comprehensive peace agreement in Latin American history with the FARC — ending a 52-year insurgency that killed at least 220,000 people and displaced nearly 8 million.",
  puzzle:
    "The FARC had survived for 52 years — through the Cold War, through US-backed counterinsurgency, through the collapse of every previous negotiation. Standard insurgency theory (Fearon, 'Rationalist Explanations for War') predicts that negotiations succeed only when both sides believe fighting will not improve their position. By the 2010s, US-backed military pressure had genuinely degraded the FARC: its troop strength fell from roughly 20,000 to under 8,000, its top commanders were killed or captured, and its territorial control was shrinking. But this creates a deeper puzzle — if the Colombian state was winning militarily, why negotiate at all? And if FARC was losing, why did it agree to terms that required demobilization and disarmament rather than simply fighting until it could? The Havana process succeeded where previous talks (1984, 1991, 1999–2002) failed. The key may lie in Santos's unusual political position: as Uribe's own Defense Minister who had authorized the strikes that killed top FARC commanders, he possessed the nationalist credibility to negotiate without being denounced as soft — the same credibility that doomed earlier civilian governments' peace overtures.",
  causalQuestion:
    "What explains Colombia's partial transition from armed conflict to negotiated peace — and why did the FARC, after five decades of war, conclude that a negotiated settlement offered better prospects than continued insurgency?",

  timeline: [
    {
      year: 1948,
      label: "La Violencia",
      description:
        "The assassination of liberal leader Jorge Eliécer Gaitán in Bogotá triggers a decade of political violence (La Violencia) between Liberal and Conservative factions that kills an estimated 200,000 people. This formative experience of mass rural violence and state failure shapes the ideological terrain from which the FARC would later emerge.",
      type: "crisis",
    },
    {
      year: 1964,
      label: "FARC Founded",
      description:
        "Communist-aligned peasant self-defense communities in Marquetalia are attacked by the Colombian army. Survivors, led by Manuel Marulanda ('Tirofijo'), regroup as the Revolutionary Armed Forces of Colombia (FARC). The insurgency is rooted in agrarian grievances: land inequality, landlessness, and state absence from the rural periphery.",
      type: "crisis",
    },
    {
      year: 1991,
      label: "New Constitution",
      description:
        "Colombia's 1991 constitution — drafted with participation from M-19 guerrillas who had recently demobilized — establishes a new democratic framework, a constitutional court, and expanded rights. It proves that demobilized insurgents can transition to civilian politics, but fails to resolve the structural conditions sustaining the FARC.",
      type: "reform",
    },
    {
      year: 2000,
      label: "Plan Colombia Launched",
      description:
        "The US commits $1.3 billion to Plan Colombia — a counter-narcotics and counterinsurgency program. Helicopter fleets, intelligence systems, and special forces training transform the Colombian military's capacity. Critics note it also enables human rights abuses by the army and paramilitaries, but the military effect on FARC capacity is real and durable.",
      type: "reform",
    },
    {
      year: 2002,
      label: "Uribe's Seguridad Democrática",
      description:
        "Álvaro Uribe wins the presidency on a hardline security platform after the collapse of the Pastrana-era 'despeje' peace zone experiment. His 'Democratic Security' policy dramatically expands army presence, offers rewards for informants, and funds paramilitary demobilization. Homicide rates fall sharply. FARC loses major urban presence.",
      type: "reform",
    },
    {
      year: 2008,
      label: "FARC's Black Year",
      description:
        "Defense Minister Juan Manuel Santos coordinates a series of blows: Operation Jaque rescues Ingrid Betancourt and 14 other hostages without a shot fired; a cross-border strike kills FARC's No. 2, Raúl Reyes; founder Manuel Marulanda dies of a heart attack. FARC's strategic position is dramatically weakened. Santos's reputation is made.",
      type: "outcome",
    },
    {
      year: 2012,
      label: "Havana Peace Talks Begin",
      description:
        "President Santos (elected 2010, now distanced from Uribe) opens secret talks in Cuba with Cuban and Norwegian mediation. The talks address six agenda items: agrarian reform, political participation, illicit crops, victims' rights, end of conflict, and implementation. Crucially, Santos keeps the military pressure on while talking — unlike Pastrana, who created a demilitarized zone.",
      type: "reform",
    },
    {
      year: 2016,
      label: "Peace Deal Signed — and Rejected",
      description:
        "A peace deal is signed in Cartagena. In a narrow referendum, Colombians vote 50.2% to 49.8% to reject it — largely due to turnout collapse in FARC-affected regions and an effective 'No' campaign led by Uribe. Santos wins the Nobel Peace Prize. A revised deal is passed through Congress without a second referendum. Implementation begins.",
      type: "tension",
    },
    {
      year: 2017,
      label: "FARC Demobilizes",
      description:
        "Approximately 13,000 FARC combatants enter UN-monitored cantonment zones and hand over weapons. The FARC transforms into a political party (Fuerza Alternativa Revolucionaria del Común). The Special Jurisdiction for Peace (JEP) opens to handle transitional justice. A significant FARC dissident faction, led by 'Iván Márquez,' refuses the deal and returns to arms.",
      type: "outcome",
    },
    {
      year: 2022,
      label: "Petro Elected — Total Peace",
      description:
        "Gustavo Petro — a former M-19 guerrilla — becomes Colombia's first left-wing president. He launches 'Total Peace,' seeking simultaneous negotiations with ELN, FARC dissidents, and Gulf Clan. Progress is mixed: ELN talks stall; coca production remains at record levels; implementation of the 2016 FARC deal continues to lag.",
      type: "transition",
    },
  ],

  indicators: [
    {
      id: "homicides",
      name: "Homicide Rate (per 100,000)",
      valueBefore: "86",
      valueAfter: "~23",
      beforeLabel: "2002 (peak)",
      afterLabel: "2023",
      trend: "down",
      note: "The sharpest sustained decline in Latin America over this period, driven by both the peace deal and earlier military pressure",
    },
    {
      id: "displaced",
      name: "Internally Displaced Persons",
      valueBefore: "~8 million",
      valueAfter: "Still the world's largest IDP population",
      beforeLabel: "Cumulative by 2016",
      afterLabel: "2024",
      trend: "down",
      note: "New displacements have declined but the accumulated stock of displaced persons remains the world's largest, larger even than Syria",
    },
    {
      id: "farc-strength",
      name: "FARC Active Combatants",
      valueBefore: "~20,000",
      valueAfter: "~13,000 demobilized",
      beforeLabel: "2000 (peak)",
      afterLabel: "2017",
      trend: "down",
      note: "Troop strength had already fallen to ~7,000 by the time of the deal due to military pressure",
    },
    {
      id: "coca",
      name: "Coca Cultivation (hectares)",
      valueBefore: "~68,000",
      valueAfter: "~230,000",
      beforeLabel: "2002",
      afterLabel: "2022",
      trend: "up",
      note: "The peace deal's paradox: coca cultivation surged as coca farmers anticipated the substitution programs that never fully materialized",
    },
    {
      id: "gdp-growth",
      name: "GDP per Capita (USD)",
      valueBefore: "~$2,000",
      valueAfter: "~$6,500",
      beforeLabel: "2000",
      afterLabel: "2023",
      trend: "up",
      note: "Colombia achieved upper-middle income status; growth was driven by resource exports and services, not peace dividends per se",
    },
    {
      id: "state-presence",
      name: "Municipalities with Active State Presence",
      valueBefore: "~600 (of 1,122)",
      valueAfter: "~950+",
      beforeLabel: "2002",
      afterLabel: "2023",
      trend: "up",
      note: "Expansion of police, courts, and civil administration into previously FARC-controlled areas — though many remain under-served",
    },
  ],

  causalNodes: [
    // ── Upstream ───────────────────────────────────────────────────────────────
    {
      id: "agrarian-grievances",
      label: "Agrarian Inequality and Landlessness",
      shortLabel: "Extreme land concentration creates insurgent support base",
      nodeType: "upstream",
      conceptId: "political-settlement",
      description:
        "Colombia's land tenure structure — the latifundio system inherited from the colonial period — produced some of the highest land inequality in the world. The Gini coefficient for land ownership exceeded 0.85 in rural areas; millions of smallholders were landless or near-landless tenants. The FARC explicitly emerged from this context: its founding communities in Marquetalia and Riochiquito were peasant self-defense groups organized against hacienda owners and their hired gunmen. Stathis Kalyvas (The Logic of Violence in Civil War) argues that civil wars are sustained not by ideology but by local collaboration networks — and Colombia's rural poor provided the FARC with exactly that: food, recruits, information, and safe passage in exchange for protection from both the state and landed elites. This structural foundation is why the conflict lasted 52 years despite massive counterinsurgency pressure: addressing FARC militarily did not address the conditions that reproduced recruitment. The Havana agreement's first agenda item — agrarian reform — was not coincidental; it was the original demand.",
      year: "Structural",
      position: { x: 0, y: 0 },
    },
    {
      id: "state-fragmentation",
      label: "Fragmented Sovereignty",
      shortLabel: "Peripheral state absence creates FARC-governed territories",
      nodeType: "upstream",
      conceptId: "monopoly-on-violence",
      description:
        "Political scientists have described Colombia as having a 'weak' or 'limited' state — but this understates the spatial pattern. In major cities, Colombia had functioning courts, police, and services. In vast rural peripheries — the Llanos, Chocó, Caquetá, Putumayo — the state was effectively absent for decades. Scholars like Ana María Bejarano and Eduardo Pizarro describe a 'partial collapse': strong institutions in urban cores coexisting with state absence in the margins. The FARC filled this void: it taxed coca growers, adjudicated disputes, regulated local markets, and provided order where the Colombian state did not reach. This is what Jeremy Weinstein (Inside Rebellion) calls 'governance without the state.' Crucially, this geographic arrangement sustained the insurgency: FARC had territorial sanctuary where it could train, resupply, and recover from military setbacks. Plan Colombia's strategy was, at its core, about penetrating these ungoverned spaces — but state penetration without service delivery simply handed the FARC a grievance narrative.",
      year: "Structural",
      position: { x: 0, y: 130 },
    },
    {
      id: "us-plan-colombia",
      label: "US Strategic Interest & Plan Colombia",
      shortLabel: "Drug war funding transforms Colombian military capacity",
      nodeType: "upstream",
      conceptId: "state-capacity",
      description:
        "The United States' interest in Colombia was initially framed as counter-narcotics but evolved into a full counterinsurgency partnership after 9/11. Plan Colombia (2000) and its successors injected over $10 billion in US military and civilian assistance over 20 years. The practical effects were transformative: Colombia's helicopter fleet grew from about 50 to over 500; intelligence fusion centers were established; special operations units were trained in US tactics; and the army grew from 120,000 to over 290,000 troops. Without Plan Colombia, the Colombian military could not have sustained the pressure on FARC that made negotiation attractive to the insurgency. But the US role also created dependencies and distortions: coca eradication was often counterproductive (pushing cultivation rather than eliminating it), aerial fumigation damaged food crops and drove small farmers toward the FARC, and paramilitaries aligned with the state committed mass atrocities. The standard tension between effectiveness and legitimacy in counterinsurgency was acutely present throughout.",
      year: "2000–",
      position: { x: 0, y: 270 },
    },

    // ── Mechanisms ────────────────────────────────────────────────────────────
    {
      id: "military-modernization",
      label: "Military Modernization",
      shortLabel: "Colombian army rebuilt as modern fighting force",
      nodeType: "mechanism",
      conceptId: "monopoly-on-violence",
      description:
        "Uribe's 'Democratic Security' policy (2002–2010) combined US-funded equipment with a strategic doctrine focused on reclaiming territorial control. Key innovations included: a network of 'soldados campesinos' (peasant soldiers) stationed in their home municipalities rather than rotated; Carabineros (mobile rural police) extending state presence into previously abandoned areas; and a dramatic expansion of intelligence-sharing with the US. The results were significant: kidnappings fell from over 3,000/year in 2002 to under 200 by 2010; highway travel — impossible in many regions in the 1990s — became safe; FARC was pushed out of urban areas and key corridors. Crucially, this pressure degraded FARC's strategic capacity without eliminating it — creating exactly the military stalemate that rationalist war termination theory (Fearon) identifies as conducive to negotiation.",
      year: "2002–10",
      position: { x: 175, y: 0 },
    },
    {
      id: "auc-demobilization",
      label: "Paramilitary Demobilization (AUC)",
      shortLabel: "30,000 AUC paramilitaries demobilize under Justice and Peace",
      nodeType: "mechanism",
      conceptId: "elite-bargain",
      description:
        "The United Self-Defense Forces of Colombia (AUC) had grown into a 30,000-strong paramilitary network that functioned simultaneously as a state-aligned counterinsurgency force, a drug trafficking organization, and a land-grab machine. Uribe's Justice and Peace Law (2005) offered AUC commanders reduced sentences (maximum 8 years) in exchange for confession, reparations, and demobilization. The process was deeply imperfect: many 'demobilized' fighters rebranded as criminal organizations (BACRIM), commanders continued drug operations from prison, and victims received limited reparations. But the demobilization did remove a major destabilizing actor from the conflict and created a template — credible reduced sentences in exchange for truth-telling — that would later inform the FARC transitional justice architecture in the Havana deal.",
      year: "2003–07",
      position: { x: 175, y: 140 },
    },
    {
      id: "farc-military-attrition",
      label: "FARC Military Attrition",
      shortLabel: "FARC troop strength falls from 20,000 to under 8,000",
      nodeType: "mechanism",
      conceptId: "monopoly-on-violence",
      description:
        "Between 2002 and 2012, the Colombian military killed or captured approximately 50 senior FARC commanders. In 2008 alone: Raúl Reyes (FARC Secretariat, killed in a cross-border strike into Ecuador); Iván Ríos (Secretariat, killed by his own bodyguard); Manuel Marulanda 'Tirofijo' (founder, died of a heart attack). Operation Jaque in 2008 freed Ingrid Betancourt and 14 other hostages through an intelligence operation — a profound propaganda blow to the FARC's claim of military competence. By the time peace talks opened in 2012, FARC's active combatant strength had fallen from a peak of ~20,000 to fewer than 8,000. This degradation did not mean FARC could not continue fighting — it demonstrably could — but it reduced FARC's expected utility from continuing the war and made the costs of demobilization comparatively more acceptable.",
      year: "2002–12",
      position: { x: 175, y: 290 },
    },
    {
      id: "santos-credibility",
      label: "Santos's Political Credibility",
      shortLabel: "Defense Minister turned president can negotiate without appearing soft",
      nodeType: "mechanism",
      conceptId: "elite-bargain",
      description:
        "Juan Manuel Santos's ability to negotiate was inseparable from his prior record as Uribe's Defense Minister. It was Santos who personally authorized Operation Jaque, Operation Phoenix (which killed Raúl Reyes), and the intelligence architecture that killed multiple FARC commanders. When Santos, as president, opened talks in Havana, the FARC could not claim — and Colombian nationalists could not credibly argue — that they were negotiating from weakness or naivety. This dynamic has parallels in democratic peace-making more broadly: Nixon going to China, de Klerk negotiating with the ANC. Leaders with established credentials on one side of a political divide can make concessions that would destroy a less credentialed counterpart. Conversely, Santos's decision to negotiate was what destroyed his relationship with Uribe — transforming his former patron into his most effective opponent in the referendum campaign.",
      year: "2012–16",
      position: { x: 175, y: 440 },
    },
    {
      id: "havana-process",
      label: "Havana Peace Process",
      shortLabel: "Cuba and Norway mediate six-point comprehensive agreement",
      nodeType: "mechanism",
      conceptId: "political-settlement",
      description:
        "The Havana process (2012–2016) was structurally different from every prior Colombian peace negotiation. Key design features: talks were held abroad (eliminating domestic spoiler disruption); Cuba and Norway provided guarantors with different relationships to each party (Cuba trusted by FARC; Norway trusted by Colombia); the government kept military pressure on throughout (unlike Pastrana's failed 'despeje' experiment); and the agenda explicitly addressed root causes — land reform, illicit crops, political participation — rather than simply asking FARC to lay down arms. The six-point agenda structure meant FARC could credibly tell its base it had extracted real political commitments, not just amnesty. The transitional justice mechanism (JEP — Special Jurisdiction for Peace) offered a way to acknowledge crimes without the maximum penalties that would have made demobilization politically impossible for FARC commanders. This framework drew explicitly on lessons from South Africa, El Salvador, and Northern Ireland.",
      year: "2012–16",
      position: { x: 175, y: 580 },
    },

    // ── Outcomes ─────────────────────────────────────────────────────────────
    {
      id: "farc-demobilization",
      label: "FARC Demobilization",
      shortLabel: "13,000 combatants disarm and enter civilian life",
      nodeType: "outcome",
      conceptId: "monopoly-on-violence",
      description:
        "Approximately 13,000 FARC combatants entered UN-monitored cantonment zones in 2017 and handed over weapons. The FARC transformed into the political party Fuerza Alternativa Revolucionaria del Común, guaranteed 10 congressional seats through 2026 regardless of electoral performance. The Special Jurisdiction for Peace opened to process crimes committed by all conflict actors. But implementation was deeply uneven: reintegration programs were underfunded under Duque; land reform provisions were stalled; coca substitution programs reached fewer than 40% of their targets; and 'false positives' (extrajudicial killings by the army, dressed as combat deaths) began to be systematically documented — confronting the army with its own accountability.",
      year: "2017+",
      position: { x: 350, y: 150 },
    },
    {
      id: "violence-reduction",
      label: "Violence Reduction",
      shortLabel: "Homicide rate falls from 86 to ~23 per 100,000",
      nodeType: "outcome",
      conceptId: "monopoly-on-violence",
      description:
        "Colombia's homicide rate fell from 86 per 100,000 in 2002 (among the world's highest) to approximately 23 per 100,000 by 2023 — a 73% reduction. This is one of the largest sustained violence reductions anywhere in the world over this period. Kidnappings, once over 3,000/year, fell below 200. Forced displacement declined significantly after the deal. However, violence has not disappeared: ELN, FARC dissident groups, and Gulf Clan still kill social leaders (especially in coca-growing regions), activists, and ex-combatants at alarming rates. The UN Verification Mission documented over 360 assassinations of ex-FARC combatants between 2016 and 2023.",
      year: "2002+",
      position: { x: 350, y: 380 },
    },
    {
      id: "territorial-state",
      label: "Territorial State Recovery",
      shortLabel: "State institutions expand into previously ungoverned areas",
      nodeType: "outcome",
      conceptId: "state-capacity",
      description:
        "The peace deal included a 'comprehensive rural reform' that committed the government to extending state institutions — police, courts, health, education — into previously FARC-governed territories. By 2023, over 950 of Colombia's 1,122 municipalities had a permanent police presence, up from roughly 600 in 2002. The PDETs (Territorial Development Programs) identified 170 municipalities for prioritized investment. But this territorial expansion remains fragile: where armed groups fill the security vacuum faster than the state arrives, the pattern of ungoverned periphery reproduced itself — just with different armed actors.",
      year: "2017+",
      position: { x: 350, y: 580 },
    },

    // ── Critique ──────────────────────────────────────────────────────────────
    {
      id: "implementation-failures",
      label: "Implementation Failures",
      shortLabel: "Land reform, crop substitution, and reintegration stall",
      nodeType: "critique",
      conceptId: "political-settlement",
      description:
        "The Havana agreement's ambitious provisions — rural reform, coca substitution, reintegration support — have been systematically under-implemented. The Duque government (2018–2022) was openly hostile to the deal and slowed implementation; the Petro government (2022–) is supportive but faces institutional constraints. As of 2023, fewer than 10% of land redistribution commitments had been fulfilled; voluntary crop substitution reached less than 40% of target communities; and coca cultivation reached record highs (over 230,000 hectares in 2022). This gap between what was promised and what was delivered feeds the FARC dissident movements and undermines ex-combatant reintegration. The literature on peace implementation (Page Fortna, 'Does Peacekeeping Work?') suggests implementation quality is more predictive of durable peace than agreement design.",
      year: "2017+",
      position: { x: 175, y: 750 },
    },
  ],

  causalEdges: [
    // Upstream → Mechanisms
    { id: "e1", source: "agrarian-grievances", target: "military-modernization", edgeType: "main" },
    { id: "e2", source: "state-fragmentation", target: "military-modernization", edgeType: "main" },
    { id: "e3", source: "us-plan-colombia", target: "military-modernization", edgeType: "main" },
    { id: "e4", source: "us-plan-colombia", target: "farc-military-attrition", edgeType: "main" },
    { id: "e5", source: "state-fragmentation", target: "auc-demobilization", edgeType: "main" },

    // Mechanisms → Mechanisms
    { id: "e6", source: "military-modernization", target: "farc-military-attrition", edgeType: "main" },
    { id: "e7", source: "farc-military-attrition", target: "havana-process", edgeType: "main" },
    { id: "e8", source: "auc-demobilization", target: "havana-process", edgeType: "main" },
    { id: "e9", source: "santos-credibility", target: "havana-process", edgeType: "main" },

    // Mechanisms → Outcomes
    { id: "e10", source: "havana-process", target: "farc-demobilization", edgeType: "main" },
    { id: "e11", source: "military-modernization", target: "violence-reduction", edgeType: "main" },
    { id: "e12", source: "farc-demobilization", target: "violence-reduction", edgeType: "main" },
    { id: "e13", source: "havana-process", target: "territorial-state", edgeType: "main" },
    { id: "e14", source: "military-modernization", target: "territorial-state", edgeType: "main" },

    // Critique edges
    { id: "e15", source: "havana-process", target: "implementation-failures", edgeType: "critique" },
    { id: "e16", source: "agrarian-grievances", target: "implementation-failures", edgeType: "critique" },
  ],

  status: "live",

  operationalTakeaways: [
    {
      id: "t1",
      heading: "Military pressure and negotiation are complements, not substitutes",
      body: "The conventional debate frames military action and diplomacy as alternatives: you either fight or you talk. Colombia's case challenges this. Santos maintained military pressure throughout the Havana process — continuing airstrikes and operations even as negotiators met in Havana. This was not hypocrisy but strategy: FARC needed to believe that the military trajectory was unfavorable to make negotiation worthwhile. Practitioners in conflict settings should resist pressure to unilaterally halt military operations as a 'confidence-building measure' before negotiations have produced credible commitments.",
    },
    {
      id: "t2",
      heading: "Transitional justice design determines who can afford to make peace",
      body: "The Havana deal's Special Jurisdiction for Peace (JEP) reduced maximum sentences for FARC commanders who confessed to 5–8 years of 'restricted liberty' — far below what international criminal law norms would prescribe. This was not impunity; it was a deliberate trade-off between accountability and achievability. FARC commanders who faced certain prosecution for war crimes at international standards had no rational incentive to demobilize. The JEP's architecture — confession required, victims' participation mandated, some punishment guaranteed — represents a genuine institutional innovation in the trade-off between peace and justice. Development practitioners working on conflict resolution need to engage honestly with this trade-off rather than demanding full accountability as a precondition.",
    },
    {
      id: "t3",
      heading: "Root causes must be addressed in the agreement, not deferred",
      body: "Every previous Colombian peace negotiation failed partly because FARC had no assurance that underlying grievances — land, political inclusion, economic exclusion from the periphery — would be addressed. The Havana agreement's comprehensive structure (six substantive agenda items, not just a ceasefire) addressed this directly. The downside is that comprehensive agreements are harder to implement: they create more obligations, more veto players, more implementation bottlenecks. Colombia's post-deal experience shows that a comprehensive agreement with weak implementation can be worse than a narrow agreement with strong implementation — creating expectations that breed disillusionment.",
    },
    {
      id: "t4",
      heading: "Political credibility is as important as negotiating skill",
      body: "Santos could negotiate because he had shot his way to the table. Leaders who attempt peace negotiations without demonstrable hardline credentials face a spoiler problem from their own constituency — Pastrana's 'despeje' experiment (which gave FARC a Switzerland-sized demilitarized zone) was attacked as naive and destroyed his political career. This suggests that who negotiates matters as much as how. Development partners supporting peace processes should assess whether the negotiating government has the domestic political space to sustain a process through inevitable setbacks.",
    },
    {
      id: "t5",
      heading: "Implementation quality is the real test — and the hardest part",
      body: "The Havana agreement is analytically a near-model peace accord: comprehensive, inclusive of victims, internationally supported, with sequenced implementation mechanisms. Its implementation has been deeply disappointing. Rural reform, crop substitution, and reintegration programs all significantly underperformed their targets. This reflects a fundamental asymmetry: negotiating a peace deal requires political will from a small number of actors over a defined period; implementing it requires sustained political will, institutional capacity, and fiscal resources across multiple administrations and over decades. The lesson is not that Colombia's peace deal was poorly designed — it is that peace deal design and implementation planning are two different problems, and the second is harder.",
    },
  ],

  costs: [
    {
      id: "c1",
      heading: "Coca production reached record highs after the peace deal",
      body: "In one of the agreement's sharpest ironies, coca cultivation in Colombia surged after the 2016 deal — from 146,000 hectares in 2016 to over 230,000 hectares by 2022, the highest ever recorded. The mechanism is partially perverse: coca farmers anticipated the voluntary substitution programs promised in the agreement and expanded cultivation to qualify for payments that were then delayed or never arrived. FARC dissidents and ELN filled territorial vacuums left by FARC demobilization and organized coca cultivation. The Petro government's 'Total Peace' approach — simultaneous negotiations with all armed groups — has struggled to break this dynamic. Colombia remains the world's largest cocaine producer by a substantial margin, and coca revenues fund the very armed groups the peace deal was meant to eliminate.",
    },
    {
      id: "c2",
      heading: "Ex-combatants and social leaders are being systematically killed",
      body: "The UN Verification Mission documented more than 360 assassinations of demobilized FARC ex-combatants between 2016 and 2023. Social leaders — community organizers, land rights advocates, coca substitution promoters — were killed at rates averaging 100–150 per year through this period. The killings are concentrated in former FARC territories where armed groups now compete for territorial control. This pattern suggests the state failed to fill the security vacuum left by FARC demobilization. It also represents a profound breach of the deal's promise: ex-combatants who surrendered weapons were promised protection and reintegration support; instead, many were killed with impunity. Without security guarantees, future demobilization processes become harder to negotiate.",
    },
    {
      id: "c3",
      heading: "The 'false positives' scandal revealed systematic army atrocities",
      body: "The JEP's investigations revealed that the Colombian army killed at least 6,402 civilians between 2002 and 2008 — dressing their bodies in guerrilla clothing to be counted as combat kills, a practice known as 'falsos positivos' or 'false positives.' Soldiers received promotions, bonuses, and leave based on body counts; units in remote areas killed civilians — often recruited with promises of work — to meet quotas. This is one of the largest documented cases of state atrocity in Latin America since the Southern Cone dictatorships. It complicates the narrative of Colombia's security transformation: the military successes of the Uribe era were partly built on crimes that the state is only now beginning to officially acknowledge.",
    },
  ],
};

export default colombia;
