import type { CaseStudy } from "../types";

const sierraLeone: CaseStudy = {
  id: "sierra-leone",
  slug: "sierra-leone",
  country: "Sierra Leone",
  region: "West Africa",
  flag: "🇸🇱",
  isoCode: "SLE",
  isoNumeric: "694",
  coordinates: [-11.7799, 8.4606],
  transformationHeadline: "From RUF atrocities and state collapse to post-war stabilization and competitive democracy",
  transformationSubtext:
    "The Revolutionary United Front's war (1991–2002) was among the most brutal of the late twentieth century — characterized by mass amputations, child soldiers, systematic rape, and the deliberate destruction of civilian infrastructure. Sierra Leone's state had effectively ceased to exist before international intervention stopped the killing. By 2018, the country had achieved two peaceful transfers of power between rival parties, launched Africa's most ambitious free education program, and built a functioning democratic architecture from the ruins of total state collapse.",
  puzzle:
    "Sierra Leone's war was extreme in its duration (eleven years), its methods (deliberate targeting of civilians with grotesque violence), and the absence of coherent political ideology in the insurgency. Jeremy Weinstein (Inside Rebellion) uses the RUF as the paradigmatic case of what he calls an 'opportunistic' rebel organization — one that attracts recruits through resource extraction rather than ideological commitment, and that therefore lacks the organizational discipline that produces politically coherent peace negotiations. If this analysis is right, ending the Sierra Leone war by negotiating with the RUF was structurally problematic: the organization had no stable leadership, no credible commitment mechanism, and no genuine political program to implement. The Lomé Peace Accord of 1999, which granted RUF leader Foday Sankoh a cabinet position and blanket amnesty, was the most visible failure of this approach — the RUF violated the ceasefire within months and took UN peacekeepers hostage. What actually ended the war was not negotiation but coercive military intervention: first by ECOMOG, then by a small but decisive British military force. This raises fundamental questions about international peacebuilding: when is military force rather than diplomacy the necessary condition for peace?",
  causalQuestion:
    "How did Sierra Leone transition from one of the most brutal civil wars of the late twentieth century to a functioning competitive democracy — and what role did international military intervention, transitional justice, and post-conflict institution-building play in that transition?",

  timeline: [
    {
      year: 1991,
      label: "RUF Insurgency Begins",
      description:
        "The Revolutionary United Front, led by Foday Sankoh and backed by Liberian warlord Charles Taylor, launches an insurgency from the Liberian border in March 1991. Taylor funds the RUF with Liberian territory and weapons in exchange for Sierra Leone diamonds. The RUF has no coherent political program; its primary operational mode is terrorizing civilians, looting, and controlling diamond-producing areas in Kono and Tongo fields.",
      type: "crisis",
    },
    {
      year: 1992,
      label: "NPRC Military Coup",
      description:
        "A group of young army officers — frustrated by conditions at the front — overthrow President Momoh in a coup. The National Provisional Ruling Council, led by 25-year-old Valentine Strasser, governs for four years. The coup demonstrates the political incapacity of the Sierra Leonean state: an army demoralized, underpaid, and often collaborating with the RUF (the 'sobel' phenomenon — soldiers by day, rebels by night) overthrows an already failing government.",
      type: "crisis",
    },
    {
      year: 1996,
      label: "Kabbah Elected; Abidjan Accord",
      description:
        "Strasser is ousted by a rival officer; Ahmad Tejan Kabbah wins elections in February 1996, becoming Sierra Leone's first elected president since the return of multi-party politics. The Abidjan Peace Accord is signed with the RUF in November but collapses within months as RUF continues fighting. This is the first demonstration of a pattern that would repeat with Lomé in 1999: peace deals with an organization that lacks either a coherent political program or enforcement capacity are not self-implementing.",
      type: "transition",
    },
    {
      year: 1997,
      label: "AFRC Coup and ECOMOG Response",
      description:
        "The Armed Forces Revolutionary Council — army officers allied with the RUF — overthrows Kabbah in May 1997. The ECOMOG force (Economic Community of West African States Monitoring Group), led by Nigeria, imposes a naval blockade and eventually uses military force to restore Kabbah in March 1998. This is the first demonstration that external military intervention, not negotiation, could reverse the RUF-AFRC gains — a lesson that would be reinforced in 2000.",
      type: "crisis",
    },
    {
      year: 1999,
      label: "Lomé Accord",
      description:
        "Under international pressure and with US and UN facilitation, Kabbah signs the Lomé Peace Accord with Foday Sankoh. The deal grants Sankoh blanket amnesty for war crimes and the chairmanship of the Strategic Mineral Resources Commission — effectively control over diamond revenues. The accord is widely criticized from the start; the US and UN noted they could not endorse the amnesty for crimes against humanity. It collapses within months as the RUF violates the ceasefire.",
      type: "tension",
    },
    {
      year: 2000,
      label: "Operation Palliser — British Intervention",
      description:
        "After RUF forces take 500 UN peacekeepers hostage and advance on Freetown, the United Kingdom deploys approximately 1,000 troops under Operation Palliser — initially to evacuate British citizens, but effectively to shore up the failing UNAMSIL mission. British forces train and support the Sierra Leone Army; Royal Marines and Parachute Regiment units engage RUF forces directly. Sankoh is captured attempting to flee. The British intervention is widely credited as the decisive turning point — demonstrating that credible military force, not diplomatic agreements with the RUF, was the necessary condition for ending the war.",
      type: "reform",
    },
    {
      year: 2002,
      label: "War Officially Ends",
      description:
        "President Kabbah declares the war officially over on January 18, 2002. The DDR process demobilizes approximately 72,000 ex-combatants. Kabbah wins a landslide presidential election (70.1%) in May — a vote that, unlike many post-conflict elections, is widely accepted as legitimate. The Special Court for Sierra Leone is established in August to try those who bear 'greatest responsibility' for atrocities committed after November 1996.",
      type: "outcome",
    },
    {
      year: 2007,
      label: "First Peaceful Opposition Transfer",
      description:
        "Ernest Bai Koroma of the All People's Congress defeats Kabbah's SLPP successor in a competitive election — the first peaceful transfer of power between rival parties since independence. This moment matters more than the 2002 election: ruling parties transferring power when they lose is the behavioral test of democratic consolidation. The Sierra Leone Electoral Commission and international observers certify the result; Kabbah concedes and leaves office.",
      type: "outcome",
    },
    {
      year: 2014,
      label: "Ebola Crisis",
      description:
        "The worst Ebola outbreak in history devastates Sierra Leone, Guinea, and Liberia. Sierra Leone records 14,000 cases and 4,000 deaths — the highest of any country in the outbreak. The crisis exposes the continuing fragility of the health system, sets back economic growth significantly, and tests the post-war state's capacity to manage a public health emergency. International response — including UK, US, and WHO engagement — is credited with eventually containing the outbreak.",
      type: "crisis",
    },
    {
      year: 2018,
      label: "Maada Bio Elected; Free Education",
      description:
        "Julius Maada Bio defeats Koroma's APC successor in a competitive election — the second peaceful transfer of power. This time SLPP wins; the pattern of alternation is established. Bio immediately launches the 'Free Quality School Education' program, abolishing school fees for all public primary and secondary students — the most ambitious education reform in post-war Sierra Leone. Enrollment increases sharply. The program is substantially funded by international donors and faces quality challenges, but represents genuine political commitment to public goods delivery.",
      type: "outcome",
    },
  ],

  indicators: [
    {
      id: "conflict",
      name: "Active Armed Conflict",
      valueBefore: "High-intensity civil war",
      valueAfter: "No active conflict",
      beforeLabel: "1991–2002",
      afterLabel: "2024",
      trend: "down",
      note: "No return to civil war since 2002; periodic political violence at elections but no armed insurgency",
    },
    {
      id: "child-mortality",
      name: "Under-5 Mortality (per 1,000 live births)",
      valueBefore: "~280",
      valueAfter: "~105",
      beforeLabel: "2000",
      afterLabel: "2023",
      trend: "down",
      note: "Still among the world's highest; improvement from a devastated baseline; Ebola temporarily reversed gains",
    },
    {
      id: "school-enrollment",
      name: "Primary School Net Enrollment",
      valueBefore: "~45%",
      valueAfter: "~85%",
      beforeLabel: "2002",
      afterLabel: "2023",
      trend: "up",
      note: "Bio's Free Quality Education program drove a sharp increase after 2018; quality remains a major challenge",
    },
    {
      id: "gdp",
      name: "GDP per Capita (USD)",
      valueBefore: "~$140",
      valueAfter: "~$530",
      beforeLabel: "2002",
      afterLabel: "2023",
      trend: "up",
      note: "Growth from extremely low base; still in bottom 10 globally; mineral revenues (iron ore, diamonds, rutile) are main drivers",
    },
    {
      id: "democratic-transfers",
      name: "Peaceful Power Transfers",
      valueBefore: "0",
      valueAfter: "2",
      beforeLabel: "Since independence (1961)",
      afterLabel: "2007 and 2018",
      trend: "up",
      note: "Two successful opposition transfers — the behavioral hallmark of democratic consolidation",
    },
    {
      id: "hdi",
      name: "Human Development Index Rank",
      valueBefore: "Last (177th of 177)",
      valueAfter: "~182nd of 193",
      beforeLabel: "2003",
      afterLabel: "2023",
      trend: "up",
      note: "Sierra Leone was literally last on the HDI in 2003; it remains near the bottom but has improved significantly",
    },
  ],

  causalNodes: [
    // ── Upstream ───────────────────────────────────────────────────────────────
    {
      id: "diamond-insurgency",
      label: "Diamond-Funded Insurgency",
      shortLabel: "Alluvial diamonds finance RUF without requiring political base",
      nodeType: "upstream",
      conceptId: "political-settlement",
      description:
        "The RUF's ability to sustain an eleven-year war without a coherent political program or significant popular support was made possible by Sierra Leone's alluvial diamond deposits. Unlike deep-shaft mining, alluvial diamonds can be extracted with basic tools by small groups — making them the perfect insurgent resource. Paul Collier and Anke Hoeffler ('Greed and Grievance in Civil War', 2004) show that lootable resources dramatically increase the probability of civil war onset and duration because they reduce the insurgency's dependence on civilian cooperation, taxation, and political legitimacy. The RUF followed exactly this pattern: it controlled diamond-producing areas in Kono and Tongo, sold stones through Liberia to international markets, and used revenues to purchase weapons and food — making it militarily self-sustaining without needing to govern or provide services. This economic base also explains the war's extreme brutality: an organization that does not need popular support has no incentive to treat civilians well, and every incentive to terrorize them into compliance.",
      year: "Structural",
      position: { x: 0, y: 0 },
    },
    {
      id: "collapsed-state",
      label: "Hollowed State Institutions",
      shortLabel: "Decades of APC patronage politics destroyed state capacity",
      nodeType: "upstream",
      conceptId: "state-capacity",
      description:
        "By 1991, Sierra Leone's state had been systematically hollowed out by 22 years of APC one-party rule under Siaka Stevens (1968–1985) and Joseph Momoh (1985–1992). Stevens's neo-patrimonial system — which Reno ('Warlord Politics and African States') calls a 'shadow state' — used state resources as personal patronage while deliberately weakening formal institutions that could constrain his power. Courts, police, and the military were starved of resources and subject to political interference. The civil service was staffed on patronage criteria. By the time the RUF launched its insurgency, the government had no capacity to mount an effective military response; the army was demoralized, unpaid, and itself engaging in looting. This state weakness is the permissive condition for the war: a functional state with a professional army would likely have suppressed the RUF in its early phase, before it established territorial control.",
      year: "Structural",
      position: { x: 0, y: 130 },
    },
    {
      id: "liberian-spillover",
      label: "Liberian Regional Spillover",
      shortLabel: "Charles Taylor finances and hosts RUF in exchange for diamonds",
      nodeType: "upstream",
      conceptId: "monopoly-on-violence",
      description:
        "Charles Taylor, Liberian warlord and later president (1997–2003), was the RUF's primary external patron. He provided the RUF with training camps on Liberian territory, weapons funneled through Liberia from regional arms markets, and political cover through his regional relationships. In exchange, the RUF delivered diamonds from Sierra Leone to Taylor's diamond trading networks. This cross-border patronage relationship — documented extensively in the UN Panel of Experts reports that eventually led to Taylor's indictment — is one of the clearest examples of what Reno calls 'warlord politics' extended across state borders. It demonstrates that regional stability is not simply a product of domestic policy: a neighboring state that deliberately destabilizes a weak state can overwhelm whatever internal stabilization efforts exist.",
      year: "1991–2002",
      position: { x: 0, y: 270 },
    },

    // ── Mechanisms ────────────────────────────────────────────────────────────
    {
      id: "ecomog",
      label: "ECOMOG Regional Intervention",
      shortLabel: "Nigerian-led West African force imposes costs on AFRC-RUF coalition",
      nodeType: "mechanism",
      conceptId: "monopoly-on-violence",
      description:
        "The Economic Community of West African States Monitoring Group (ECOMOG) was the primary external military actor in Sierra Leone from 1997 to 2000. A largely Nigerian force, ECOMOG imposed a naval blockade after the 1997 AFRC coup, conducted air strikes against Freetown, and eventually recaptured the capital in February 1998 — restoring Kabbah to the presidency. ECOMOG's intervention was messy, its troops committed human rights violations, and it was sustained by Nigeria's geopolitical ambitions as much as regional humanitarian concern. But it established the critical principle that external military force could reverse RUF-AFRC gains — something that negotiation and the failed UNAMSIL initial deployment could not. West African regional security architecture — however imperfect — was the instrument that prevented the RUF from simply taking Freetown and ruling.",
      year: "1997–2000",
      position: { x: 175, y: 0 },
    },
    {
      id: "british-intervention",
      label: "British Military Intervention",
      shortLabel: "Operation Palliser breaks RUF's final advance and saves UNAMSIL",
      nodeType: "mechanism",
      conceptId: "monopoly-on-violence",
      description:
        "When the RUF seized 500 UNAMSIL peacekeepers as hostages in May 2000 and advanced toward Freetown, Britain deployed approximately 1,000 troops under Operation Palliser. The mission was officially a non-combatant evacuation but effectively functioned as combat support for the Sierra Leone Army and UNAMSIL. British Special Forces rescued the UNAMSIL hostages; regular army units provided training, intelligence, and tactical direction to the Sierra Leone Army; and the presence of British forces raised the cost of RUF operations dramatically. Sankoh was captured attempting to flee. The British intervention is widely credited as the decisive military turning point — demonstrating that the RUF could not withstand a professional Western military force and creating the conditions for its eventual disarmament.",
      year: "2000",
      position: { x: 175, y: 140 },
    },
    {
      id: "unamsil",
      label: "UNAMSIL Peacekeeping",
      shortLabel: "Expanded UN mission provides security umbrella for DDR",
      nodeType: "mechanism",
      conceptId: "monopoly-on-violence",
      description:
        "The United Nations Mission in Sierra Leone (UNAMSIL) was authorized in October 1999 and expanded in 2000 to 17,500 troops — at the time the largest UN peacekeeping mission in the world. After its humiliating initial performance (hostage-taking, failure to protect civilians), UNAMSIL was fundamentally reorganized following the British intervention. It eventually functioned effectively: providing a security umbrella under which DDR could proceed, monitoring the ceasefire, and supporting Sierra Leone electoral processes. UNAMSIL is one of the clearest cases in UN peacekeeping history of a mission that failed in its initial form and succeeded in its reformed version — suggesting that peacekeeping mission design and mandate can be corrected mid-deployment, but requires political will and resources.",
      year: "1999–2005",
      position: { x: 175, y: 290 },
    },
    {
      id: "ddr-process",
      label: "Disarmament, Demobilization, Reintegration",
      shortLabel: "72,000 ex-combatants processed through DDR",
      nodeType: "mechanism",
      conceptId: "state-capacity",
      description:
        "Sierra Leone's DDR process — run by UNAMSIL with support from the World Bank and bilateral donors — demobilized approximately 72,000 ex-combatants between 2000 and 2004. This included RUF fighters, AFRC soldiers, Civil Defence Forces (CDF/Kamajors), and remnants of the Sierra Leone Army. The process involved weapons surrender, registration, quartering, and reintegration packages including vocational training and education stipends. The Sierra Leone DDR is studied as both a success and a cautionary tale: it processed large numbers and prevented immediate rearmament, but reintegration was underfunded, ex-combatants' economic outcomes were poor, and child soldier reintegration was particularly inadequate. Adolescent ex-combatants — drugged, traumatized, and having known no civilian life — required specialized support that the program did not consistently provide.",
      year: "2000–04",
      position: { x: 175, y: 440 },
    },
    {
      id: "special-court",
      label: "Special Court for Sierra Leone",
      shortLabel: "Hybrid court convicts Charles Taylor — first African head of state convicted for war crimes",
      nodeType: "mechanism",
      conceptId: "political-settlement",
      description:
        "The Special Court for Sierra Leone (SCSL), established in 2002 as a hybrid tribunal under joint UN-Sierra Leone authority, was mandated to try those bearing 'greatest responsibility' for atrocities committed after November 30, 1996. Its most historically significant achievement was the conviction of Charles Taylor, former President of Liberia, in 2012 — the first sitting head of state convicted by an international tribunal since Nuremberg. Taylor was sentenced to 50 years for aiding and abetting war crimes and crimes against humanity. The RUF's top leadership — Sankoh (died in custody), Sesay, Kallon, Gbao — was also convicted. The SCSL established several important precedents: that forced marriage is a crime against humanity; that recruitment of child soldiers is a war crime; and that heads of state have no immunity before international tribunals. It also demonstrated the feasibility of a hybrid national-international court model that combined international legal standards with local legitimacy.",
      year: "2002–13",
      position: { x: 175, y: 590 },
    },
    {
      id: "kimberley-process",
      label: "Kimberley Process Certification",
      shortLabel: "Diamond certification reduces conflict financing mechanism",
      nodeType: "mechanism",
      conceptId: "political-settlement",
      description:
        "The Kimberley Process Certification Scheme (KPCS), launched in 2003, requires participating countries to certify that diamond exports are conflict-free — explicitly in response to the role of 'blood diamonds' in Sierra Leone, Angola, and DRC. Sierra Leone's diamonds had financed the RUF throughout the war; cutting off this revenue stream was identified as essential to preventing future conflict. The effectiveness of the Kimberley Process is disputed: it covers rough diamonds only, does not certify against human rights violations more broadly, and enforcement varies dramatically by country. But it did make it harder for conflict diamonds to reach legitimate markets and raised the political cost of diamond trading with armed groups — reducing (though not eliminating) the financial attractiveness of diamond-based insurgency.",
      year: "2003–",
      position: { x: 175, y: 720 },
    },

    // ── Outcomes ─────────────────────────────────────────────────────────────
    {
      id: "conflict-termination",
      label: "Conflict Termination",
      shortLabel: "Eleven-year war ends; no return to insurgency",
      nodeType: "outcome",
      conceptId: "monopoly-on-violence",
      description:
        "Sierra Leone's civil war officially ended January 18, 2002. In the more than two decades since, there has been no armed insurgency — a genuine achievement for a country where the conditions that produced the war (poverty, youth unemployment, weak institutions, resource grievances) are largely still present. The absence of recurrence is not simply the absence of active fighting: it reflects a political settlement in which armed groups have not recalculated that violence offers better returns than civilian politics. This fragile peace has been sustained by a combination of security sector reform, international presence, and the establishment of competitive elections as the mechanism for power transfer.",
      year: "2002+",
      position: { x: 350, y: 150 },
    },
    {
      id: "democratic-elections",
      label: "Competitive Democratic Elections",
      shortLabel: "Two peaceful power transfers establish democratic norm",
      nodeType: "outcome",
      conceptId: "political-settlement",
      description:
        "Sierra Leone has held competitive elections in 2002, 2007, 2012, 2018, and 2023. The 2007 and 2018 elections produced peaceful transfers of power between the SLPP and APC — the two dominant parties rooted in the country's political geography (SLPP in the south and east; APC in the north and west). This pattern of alternation — however imperfect the elections themselves — has established a norm that power transfers through voting rather than violence. Sierra Leone has gone from a country where the last leader refused to leave power to one where two opposition victories have been peacefully accepted. The 2023 election was disputed by the APC, producing a political crisis, but did not result in armed conflict.",
      year: "2007+",
      position: { x: 350, y: 400 },
    },
    {
      id: "social-recovery",
      label: "Social Recovery",
      shortLabel: "Enrollment, health indicators improve from devastated baseline",
      nodeType: "outcome",
      conceptId: "state-capacity",
      description:
        "Sierra Leone's social indicators — primary enrollment, child mortality, maternal mortality, vaccination coverage — all improved substantially from the post-war baseline, though remain among the worst globally. The most significant recent policy change is Bio's 2018 Free Quality School Education program, which abolished school fees and dramatically increased enrollment. Child mortality fell from approximately 280 per 1,000 in 2000 to approximately 105 in 2023 — still very high but roughly a 60% reduction. Maternal mortality, historically among the world's highest, has also declined. These improvements reflect both dedicated government programs and sustained international health investment. The Ebola crisis (2014–16) temporarily reversed some gains and revealed the continuing fragility of health infrastructure.",
      year: "2002+",
      position: { x: 350, y: 630 },
    },

    // ── Critique ──────────────────────────────────────────────────────────────
    {
      id: "persistent-fragility",
      label: "Persistent Poverty and Institutional Fragility",
      shortLabel: "War ended but structural conditions persist",
      nodeType: "critique",
      conceptId: "state-capacity",
      description:
        "Sierra Leone remains one of the world's poorest and most fragile countries. GDP per capita of approximately $530 places it near the bottom of global rankings; the HDI ranks it 181st of 193 countries. The youth unemployment rate — estimated at 60%+ — reproduces exactly the social conditions that the RUF exploited for recruitment. Institutional capacity is shallow: the judiciary, police, and civil service are all characterized by corruption, low capacity, and political vulnerability. Security sector reform has improved the Sierra Leone Police and military, but has not transformed them into professional institutions. The International Crisis Group's fragility index consistently classifies Sierra Leone as 'at risk'; its resilience is real but thin. The structural conditions — poverty, unemployment, weak institutions, resource inequality — that produced the war in 1991 have not been transformed.",
      year: "Persistent",
      position: { x: 175, y: 890 },
    },
  ],

  causalEdges: [
    // Upstream → crisis
    { id: "e1", source: "diamond-insurgency", target: "conflict-termination", edgeType: "main" },
    { id: "e2", source: "collapsed-state", target: "ecomog", edgeType: "main" },
    { id: "e3", source: "liberian-spillover", target: "diamond-insurgency", edgeType: "main" },

    // Upstream → Mechanisms
    { id: "e4", source: "diamond-insurgency", target: "kimberley-process", edgeType: "main" },
    { id: "e5", source: "liberian-spillover", target: "special-court", edgeType: "main" },

    // Mechanisms → Mechanisms
    { id: "e6", source: "ecomog", target: "british-intervention", edgeType: "main" },
    { id: "e7", source: "british-intervention", target: "unamsil", edgeType: "main" },
    { id: "e8", source: "unamsil", target: "ddr-process", edgeType: "main" },

    // Mechanisms → Outcomes
    { id: "e9", source: "british-intervention", target: "conflict-termination", edgeType: "main" },
    { id: "e10", source: "ecomog", target: "conflict-termination", edgeType: "main" },
    { id: "e11", source: "unamsil", target: "conflict-termination", edgeType: "main" },
    { id: "e12", source: "ddr-process", target: "democratic-elections", edgeType: "main" },
    { id: "e13", source: "special-court", target: "democratic-elections", edgeType: "main" },
    { id: "e14", source: "kimberley-process", target: "conflict-termination", edgeType: "main" },
    { id: "e15", source: "ddr-process", target: "social-recovery", edgeType: "main" },
    { id: "e16", source: "conflict-termination", target: "social-recovery", edgeType: "main" },
    { id: "e17", source: "democratic-elections", target: "social-recovery", edgeType: "main" },

    // Critique edges
    { id: "e18", source: "collapsed-state", target: "persistent-fragility", edgeType: "critique" },
    { id: "e19", source: "ddr-process", target: "persistent-fragility", edgeType: "critique" },
  ],

  status: "live",

  operationalTakeaways: [
    {
      id: "t1",
      heading: "Military force, not diplomatic agreements with spoilers, ended the Sierra Leone war",
      body: "The Lomé Accord of 1999 — which granted RUF leader Sankoh a cabinet post and blanket amnesty — was a catastrophic diplomatic failure. The RUF had no incentive to honor its commitments and violated the ceasefire within months. What ended the war was the British military intervention of 2000: a credible, professional force that the RUF could not match. The policy lesson is uncomfortable but important: some armed actors lack the organizational coherence, political interests, or leadership capable of honoring negotiated commitments. Identifying which actors can be credibly integrated into peace processes — versus which require coercive containment — is the central analytical challenge in designing conflict termination strategies.",
    },
    {
      id: "t2",
      heading: "Regional peacekeeping can work, but needs professional military backup",
      body: "ECOMOG demonstrated both the potential and the limits of regional security organizations. It prevented the RUF from consolidating total control and restored Kabbah in 1998 — genuine achievements. But it also committed human rights violations, was politically influenced by Nigeria's strategic interests, and could not alone manage the situation. The UNAMSIL experience was similar: a large force with a weak mandate and insufficient resolve was humiliated by the RUF until the British intervention transformed the security environment. The lesson is that regional forces can be the instrument, but require professional military capacity, clear mandates, and if necessary external backstop forces. African Union and ECOWAS peacekeeping frameworks have developed significantly since Sierra Leone, partly because of these lessons.",
    },
    {
      id: "t3",
      heading: "Diamond certification can reduce conflict financing but is not a substitute for state control of resources",
      body: "The Kimberley Process raised the cost of conflict diamond trading but did not eliminate it. The deeper lesson is that lootable resources — alluvial diamonds, artisanal gold, coltan — remain available to armed groups wherever state presence is absent. Certification schemes operate at the export end of the supply chain; the production end requires physical state presence in mining areas. Sierra Leone's post-war diamond sector remains partially informal and is an ongoing source of political economy tensions. Durable resource governance requires physical state presence in producing areas, not just border certification mechanisms.",
    },
    {
      id: "t4",
      heading: "Specialized courts can produce both accountability and institutional precedent",
      body: "The SCSL's hybrid model — international legal standards within a nationally grounded institution — produced better outcomes than either a purely international court (ICC) or a purely national process would have. Charles Taylor's conviction established that heads of state are not immune from accountability, and the SCSL's jurisprudence on forced marriage and child soldiers has influenced international humanitarian law. The hybrid model was more expensive than national courts and slower than advocates hoped, but more legitimate than a purely external process. Post-conflict accountability institutions need to be designed with both outputs (convictions, records) and institutional inheritance (trained judges, case law, public education) in mind.",
    },
    {
      id: "t5",
      heading: "Ex-combatant reintegration requires sustained investment in economic alternatives, not just initial packages",
      body: "Sierra Leone's DDR processed 72,000 ex-combatants — a logistical achievement. But reintegration packages (vocational training, education stipends) were short-term and underfunded. A decade after the war, the majority of ex-combatants had returned to unemployment in exactly the social conditions that produced their recruitment. DDR programs routinely face this gap: the disarmament and demobilization phases are funded, politically visible, and time-limited; reintegration is long-term, expensive, and invisible. Effective reintegration requires integration with broader youth employment programming, not a separate ex-combatant track. The most durable peace dividend in Sierra Leone has not been DDR but economic growth — however modest — that provides alternatives to armed groups.",
    },
  ],

  costs: [
    {
      id: "c1",
      heading: "War victims and amputees received inadequate long-term support",
      body: "The RUF's deliberate amputation campaign — cutting off the hands, arms, and legs of tens of thousands of civilians as a terror tactic — created a large population of war-disabled survivors who required lifetime medical and rehabilitation support. The War Victims Fund, established with international support, was chronically underfunded and reached only a fraction of survivors. Many amputees remain among the most economically marginalized people in Sierra Leone, decades after the war ended — lacking prosthetics, rehabilitation services, or income support. The TRC (Truth and Reconciliation Commission) documented these needs comprehensively but lacked resources to recommend remedies. The gap between the accountability mechanisms the international community built (SCSL, TRC) and the reparative justice war victims actually needed remains one of the sharpest critiques of post-conflict peacebuilding in Sierra Leone.",
    },
    {
      id: "c2",
      heading: "Mid-level perpetrators escaped accountability",
      body: "The Special Court's mandate — trying those bearing 'greatest responsibility' — meant that thousands of mid-level commanders and direct perpetrators were never prosecuted. The TRC's restorative justice process addressed some of this gap, but the TRC was not a judicial body and could not impose accountability. Most RUF fighters who committed atrocities — amputations, murders, rapes — were either not prosecuted at all, or processed through a DDR framework that treated them as ex-combatants rather than criminals. Survivors, in communities that still live alongside perpetrators, frequently describe this as the most enduring injustice of the post-war settlement. Community-level reconciliation processes exist but are under-resourced; the TRC's recommendations for reparations have been implemented only partially.",
    },
    {
      id: "c3",
      heading: "The structural conditions that produced the war — poverty, youth unemployment, weak institutions — remain largely unchanged",
      body: "Sierra Leone's economy has grown since the war, but remains fragile, mineral-dependent, and deeply unequal. Youth unemployment is estimated at over 60%. The civil service and judiciary are understaffed, underpaid, and vulnerable to political pressure. Successive governments — both APC and SLPP — have engaged in patronage politics rather than institutional reform. The 2018 and 2023 electoral cycles were marked by ethnically polarized voting, harassment of journalists, and disputed results. None of this has yet triggered violence — but it reflects a political culture where democratic norms are present but fragile. The International Crisis Group's 2023 assessment describes Sierra Leone as 'at risk' of political instability. Whether the post-war settlement is durable depends on economic trajectories — and those trajectories are not favorable.",
    },
  ],
};

export default sierraLeone;
