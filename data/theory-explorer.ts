// ── Theory Explorer data ──────────────────────────────────────────────────────
// Each entry: plain-English idea statement up front; theory names + scholars in
// the mechanism description only. textSlugs/conceptSlugs drive chip links.

export interface TheoryEntry {
  id: string;
  idea: string;           // plain-English headline — no jargon
  mechanism: string;      // fuller description; names theory + key scholars
  textSlugs?: string[];   // link to /theory/texts/[slug]
  conceptSlugs?: string[]; // link to /theory/concepts/[slug]
}

export interface TheoryGroup {
  label: string;
  entries: TheoryEntry[];
}

export interface TheorySection {
  id: string;
  question: string;
  groups: TheoryGroup[];
}

// ── DEVELOPMENT ───────────────────────────────────────────────────────────────

const developmentGroups: TheoryGroup[] = [
  {
    label: "Power and incentives to invest",
    entries: [
      {
        id: "stationary-bandit",
        idea: "Leaders who expect to stay in power have reason to protect the economy rather than plunder it",
        mechanism:
          "A ruler with a long time horizon prefers stable, repeating extraction over one-time looting — which requires protecting property rights and productive capacity. The longer a ruler's expected tenure, the more their interests align with long-run growth. Mancur Olson called this the stationary bandit logic (Power and Prosperity, 2000): even a predatory ruler acting purely in self-interest will provide some public order and security if they expect to be extracting from the same population for years. The flip side: leaders who fear losing power soon prefer to loot quickly, which helps explain why political instability and poor governance travel together.",
        textSlugs: ["power-and-prosperity"],
        conceptSlugs: ["state-capacity", "political-settlement"],
      },
      {
        id: "inclusive-institutions",
        idea: "Economies flourish when powerful people cannot easily take wealth from others — and stagnate when they can",
        mechanism:
          "Inclusive economic institutions — secure property rights, rule of law, access to contracts — generate broad incentives to invest and innovate. Extractive institutions concentrate wealth and block new entrants from threatening established elites. But inclusive economic institutions only survive when backed by inclusive political institutions that limit elite power; the two reinforce each other. Daron Acemoglu and James A. Robinson trace this mechanism historically in Why Nations Fail (2012): small differences at critical historical junctures compounded over centuries, explaining why some countries ended up wealthy and others did not. The framework directly challenges both geography-based and culture-based theories of development.",
        textSlugs: ["why-nations-fail"],
        conceptSlugs: ["state-capacity", "political-settlement"],
      },
      {
        id: "coalition-size-development",
        idea: "Politicians who need broad popular support invest in public goods; those who rule with a small loyal circle invest in private payoffs to insiders",
        mechanism:
          "The size of the coalition a leader needs to stay in power shapes what kind of spending is politically rational. A leader depending on millions of voters cannot reward them individually, so public goods (health, education, infrastructure) become the cheapest loyalty strategy. One depending on a handful of generals or party insiders can buy loyalty with contracts, positions, and impunity — and has no political incentive to fund broad public services. Bruce Bueno de Mesquita and colleagues developed this as selectorate theory (The Logic of Political Survival, 2003; The Dictator's Handbook, 2011). The implication: institutional arrangements that determine coalition size — not culture, resources, or geography alone — are what drive development investment.",
        textSlugs: ["the-dictators-handbook", "the-logic-of-political-survival"],
        conceptSlugs: ["authoritarian-development", "political-settlement"],
      },
    ],
  },
  {
    label: "What the state has to be able to do",
    entries: [
      {
        id: "state-capacity-development",
        idea: "States that can actually enforce rules, collect taxes, and deliver services create the conditions for growth",
        mechanism:
          "Development requires a state capable of writing and enforcing contracts, building infrastructure, regulating markets, and delivering basic services. Where state capacity is low, private investment is deterred by uncertainty, public goods are absent, and coordination failures accumulate. Max Weber identified the state as the entity with a monopoly on legitimate force within a territory — without that, property rights and rule of law are promises without backing. Francis Fukuyama (State-Building, 2004; Political Order and Political Decay, 2014) and Peter Evans (Embedded Autonomy, 1995; Bringing the State Back In, 1985) have mapped the components of capacity and the political conditions under which it can be built.",
        textSlugs: ["state-building", "political-order-and-political-decay", "embedded-autonomy", "building-state-capability"],
        conceptSlugs: ["state-capacity", "monopoly-on-violence"],
      },
      {
        id: "developmental-state",
        idea: "Governments can accelerate industrialization by actively steering investment — not just setting rules and stepping back",
        mechanism:
          "In Japan, South Korea, and Taiwan, states did not merely enable markets — they coordinated investment, protected infant industries, and channeled credit toward strategic sectors. Japan's MITI, South Korea's POSCO, and Taiwan's industrial policy generated growth that markets alone would not have produced. Chalmers Johnson (MITI and the Japanese Miracle, 1982) and Peter Evans (Embedded Autonomy, 1995) explain the conditions: a bureaucracy insulated from narrow capture but embedded in productive relationships with firms. Thandika Mkandawire and Meles Zenawi argued the model is possible in Africa, though replication requires a political settlement that rewards developmental rather than predatory behavior.",
        textSlugs: ["miti-and-the-japanese-miracle", "embedded-autonomy"],
        conceptSlugs: ["developmental-state", "state-capacity"],
      },
    ],
  },
  {
    label: "Economic strategy and structure",
    entries: [
      {
        id: "structural-transformation",
        idea: "Countries grow by shifting workers out of low-productivity activities into higher-productivity ones",
        mechanism:
          "Most poor countries have a large share of their workforce in low-productivity agriculture. Development — as Arthur Lewis described in his dual-sector model (1954) — involves transferring surplus labor to higher-productivity sectors, which raises average incomes. Dani Rodrik (One Economics, Many Recipes, 2007) extended this: manufacturing is especially valuable because productivity gains can continue for a long time and export demand is less constrained than domestic demand. The policy implication is that countries benefit from strategic industrial policy and selective trade protection, not just deregulation and market opening.",
        textSlugs: ["one-economics-many-recipes"],
        conceptSlugs: ["developmental-state", "state-capacity"],
      },
      {
        id: "binding-constraints",
        idea: "Countries fail to grow because one or two specific bottlenecks are holding everything else back — fixing the wrong things first produces no results",
        mechanism:
          "Standard reform checklists treat all problems as equally urgent. But in practice, one or two 'binding constraints' hold everything else back — macro instability, shortage of finance, low returns to investment, bad infrastructure. Ricardo Hausmann and Dani Rodrik's growth diagnostics framework (One Economics, Many Recipes, 2007) provides a decision tree to identify which constraints are binding in a specific context. The key insight is that second-best institutions in the right place can produce first-best outcomes, while importing textbook best practices that don't address the binding constraint tends to fail — often with donor backing.",
        textSlugs: ["one-economics-many-recipes", "building-state-capability"],
        conceptSlugs: ["state-capacity", "developmental-state"],
      },
      {
        id: "resource-curse",
        idea: "Countries with large natural resource wealth often end up with weaker institutions, slower growth, and more conflict than comparable countries without it",
        mechanism:
          "Resource revenues free rulers from the need to tax their populations — which removes the bargaining dynamic that historically generated fiscal contracts, bureaucratic capacity, and accountability. They also create concentrated rents worth fighting over, making conflict more likely. Richard Auty coined 'resource curse'; Jeffrey Sachs, Andrew Warner, Paul Collier, and Michael Ross documented and debated the effect across many country settings. Whether the curse is real and generalizable remains contested — some resource-rich countries have developed well — but the proposed mechanism (resource rents weaken state-society bargaining) has substantial empirical support.",
        conceptSlugs: ["political-settlement", "elite-bargain", "state-capacity"],
      },
    ],
  },
];

// ── DEMOCRATIZATION ───────────────────────────────────────────────────────────

const democratizationGroups: TheoryGroup[] = [
  {
    label: "Structural forces",
    entries: [
      {
        id: "modernization-theory",
        idea: "As living standards rise, people tend to demand more political participation — and elites find it harder to deny",
        mechanism:
          "Seymour Martin Lipset documented in Political Man (1960) a strong cross-national correlation between economic development and democracy. The proposed mechanism: rising incomes create a larger middle class with education, organizational capacity, and less dependence on elite patronage — making them harder to control and more capable of demanding rights. This became known as modernization theory. Later scholars refined and challenged it: Adam Przeworski found that wealth is better at preventing democratic backsliding than at causing transitions in the first place. The relationship is real but contested — wealthy countries rarely backslide into autocracy, but development does not reliably cause democratization on its own.",
        textSlugs: ["political-man"],
        conceptSlugs: ["authoritarian-development", "political-settlement"],
      },
      {
        id: "redistribution-democracy",
        idea: "When inequality is extreme, wealthy elites resist democracy because they fear it will bring redistribution against them",
        mechanism:
          "If democracy gives political power to a majority poorer than the mean, a rational median voter will want redistribution from the rich. Anticipating this, wealthy elites have incentives to block democratic transitions — and, once a democracy exists, to use corruption, courts, or coups to limit its reach. Daron Acemoglu and James Robinson (Economic Origins of Dictatorship and Democracy, 2006; Why Nations Fail, 2012) formalize this: democracy is most stable at intermediate inequality levels, where elites can afford concessions without losing everything. Very high inequality is both a cause of authoritarianism and an obstacle to democratization.",
        textSlugs: ["why-nations-fail", "economic-origins-of-dictatorship-and-democracy"],
        conceptSlugs: ["political-settlement", "elite-bargain", "authoritarian-development"],
      },
    ],
  },
  {
    label: "Elite strategy and regime dynamics",
    entries: [
      {
        id: "pacted-transitions",
        idea: "Democracies are often negotiated between authoritarian incumbents and opposition — not won outright by one side overthrowing the other",
        mechanism:
          "Most Third Wave democratic transitions (1974–1990s) were not revolutions but negotiations. Outgoing authoritarian elites agreed to leave because they received credible guarantees about military immunity, property rights, or political inclusion. Guillermo O'Donnell and Philippe Schmitter (Transitions from Authoritarian Rule, 1986) showed that 'pacted transitions' tend to produce more stable democracies than those achieved through rupture, because the losing elites remain inside the system rather than organizing against it. The framework introduced a key distinction: 'liberalization' (regime softening, expanded rights) is not the same as 'democratization' (genuine transfer of sovereign power).",
        textSlugs: ["transitions-from-authoritarian-rule"],
        conceptSlugs: ["elite-bargain", "political-settlement"],
      },
      {
        id: "softliners-hardliners",
        idea: "When an authoritarian regime splits between those who want to open it up and those who want to close ranks, a democratic opening becomes possible",
        mechanism:
          "O'Donnell and Schmitter argued that authoritarian breakdowns begin not with mass pressure but with splits within the ruling coalition between 'softliners' (who calculate that controlled liberalization is sustainable) and 'hardliners' (who prefer the status quo). Softliners initiate reforms expecting to control the outcome; the reforms then generate bottom-up pressures that can escalate beyond what any elite faction intended. This shifted democratization research away from structural prerequisites toward elite strategy and contingency — explaining why similar social conditions can produce very different political outcomes depending on elite calculations at critical moments.",
        textSlugs: ["transitions-from-authoritarian-rule"],
        conceptSlugs: ["elite-bargain", "political-settlement"],
      },
      {
        id: "electoral-authoritarianism",
        idea: "Holding elections is not the same as being democratic — some rulers use elections precisely to stay in power",
        mechanism:
          "Many contemporary autocracies hold regular elections and maintain formal democratic institutions — but use them to signal strength, distribute information about opposition strength, and manage elite competition. Incumbents win not by banning opposition but by tilting the playing field: controlling media, harassing opponents, manipulating courts, and exploiting incumbency advantages. Andreas Schedler mapped this territory as 'electoral authoritarianism' (2006); Steven Levitsky and Lucan Way documented these dynamics across dozens of countries in Competitive Authoritarianism (2010). The implication is that elections alone are not evidence of democracy — the conditions under which competition occurs matter more than whether elections are held.",
        textSlugs: ["competitive-authoritarianism"],
        conceptSlugs: ["authoritarian-development", "political-settlement"],
      },
      {
        id: "selectorate-democratization",
        idea: "Political systems open up when it becomes cheaper for leaders to broaden their support base than to keep paying off a small circle of insiders",
        mechanism:
          "Selectorate theory (Bruce Bueno de Mesquita, The Dictator's Handbook; The Logic of Political Survival, 2003) explains democratization as coalition expansion driven by political survival logic — not ideological conversion or mass pressure alone. A leader widens the winning coalition when maintaining a small one becomes too expensive — after fiscal crises, external pressure, elite defections, or military defeat. Democratic transitions are thus moments when the political economy of payoffs shifts, making public goods cheaper than private goods as a loyalty strategy. This also explains why democracies can be reversed: if the coalition-maintenance calculus shifts back, leaders have incentives to reconcentrate power.",
        textSlugs: ["the-dictators-handbook", "the-logic-of-political-survival"],
        conceptSlugs: ["authoritarian-development", "political-settlement"],
      },
    ],
  },
  {
    label: "Sequencing and state-building",
    entries: [
      {
        id: "state-first-sequencing",
        idea: "You need a capable, functioning state before you can have stable democracy — holding elections in a weak state tends to produce chaos, not accountability",
        mechanism:
          "Samuel Huntington (Political Order in Changing Societies, 1968) argued that political order — not democracy — is the prerequisite for development. Without strong institutions to manage mobilization, rapid democratization produces praetorianism: instability, coups, and cycles of disorder. Francis Fukuyama (Political Order and Political Decay, 2014) updated the argument: the right institutional sequence is state capacity first, then rule of law, then democratic accountability — not the reverse. Countries that attempt competitive elections before building state capacity see elections captured by clientelism, elite predation, or armed groups. This doesn't mean democracy should wait forever — but it means electoral competition without state capacity delivers neither accountability nor development.",
        textSlugs: ["political-order-in-changing-societies", "political-order-and-political-decay"],
        conceptSlugs: ["state-capacity", "political-settlement"],
      },
    ],
  },
  {
    label: "Mass politics and organized pressure",
    entries: [
      {
        id: "mass-mobilization-democracy",
        idea: "Organized working classes, urban middle classes, and civil society groups can force political openings that elites would not choose on their own",
        mechanism:
          "Barrington Moore (Social Origins of Dictatorship and Democracy, 1966) argued that the class structure — specifically whether industrial bourgeoisie, commercial farmers, or peasants dominated politically — determined national political trajectories. Charles Tilly and Sidney Tarrow extended this toward contentious politics: organized collective action (strikes, protests, social movements) can raise the cost of authoritarianism until elites accept democratic bargains. This bottom-up strand stands in productive tension with elite-bargaining accounts. Most transitions involve both: mass pressure raises the cost of repression; elite negotiation determines the form of the opening. Neither alone is usually sufficient.",
        textSlugs: ["social-origins-of-dictatorship-and-democracy"],
        conceptSlugs: ["political-settlement", "elite-bargain"],
      },
    ],
  },
  {
    label: "Clientelism and political accountability",
    entries: [
      {
        id: "clientelism",
        idea: "When politicians win votes by distributing personal favors rather than delivering good policies, elections cannot function as accountability mechanisms",
        mechanism:
          "Clientelism is the exchange of targeted material benefits — jobs, cash, services, protection — for political support. When voters depend on these benefits, they have weaker incentives to vote based on policy performance and stronger incentives to stay loyal to whoever controls distribution networks. Susan Stokes, Herbert Kitschelt, and others document how clientelism crowds out programmatic competition: parties relying on patronage networks have little incentive to build policy credibility, and voters have limited ability to punish them for poor governance. Breaking the clientelism trap typically requires simultaneously raising incomes (reducing dependence), building civil service insulation from political interference, and organizing voters around programmatic alternatives.",
        conceptSlugs: ["political-settlement", "authoritarian-development", "elite-bargain"],
      },
    ],
  },
];

// ── CONFLICT ──────────────────────────────────────────────────────────────────

const conflictGroups: TheoryGroup[] = [
  {
    label: "State capacity and legitimacy",
    entries: [
      {
        id: "state-monopoly-violence",
        idea: "Violence declines when a single authority can credibly enforce rules and punish those who break them",
        mechanism:
          "Max Weber's canonical definition of the state is the entity with a legitimate monopoly on the use of force within a territory. Where that monopoly is contested — by rebel groups, criminal organizations, paramilitaries, or rival elites — violence becomes a routine tool of political and economic competition. State capacity (the ability to project that monopoly credibly across territory) is one of the most robust empirical predictors of peace. This is the foundation of contemporary peacebuilding frameworks and explains why efforts to reduce violence often focus on security sector reform, territorial reach, and the professionalization of armed forces.",
        conceptSlugs: ["state-capacity", "monopoly-on-violence"],
      },
      {
        id: "legitimacy-violence",
        idea: "People are less likely to support or join violence when they see the state as fair — not just when they fear its power",
        mechanism:
          "Beyond coercive capacity, what deters violence is perceived legitimacy: the belief that the rules and those enforcing them have a right to do so. Tom Tyler's procedural justice research shows people comply with authority when treated fairly, regardless of outcomes. Applied to conflict settings: states that are capable but perceived as partial, corrupt, or serving only some groups will face continued resistance even after achieving military dominance. Contemporary peacebuilding frameworks emphasize multiple sources of legitimacy — effectiveness, inclusiveness, procedural fairness — and that capacity without legitimacy produces compliance without stability.",
        conceptSlugs: ["state-capacity", "political-settlement", "monopoly-on-violence"],
      },
    ],
  },
  {
    label: "Commitment problems and elite bargains",
    entries: [
      {
        id: "commitment-problem-war",
        idea: "Wars and civil conflicts continue even when both sides would benefit from peace, because neither can trust the other to honor future agreements",
        mechanism:
          "Even rational actors with no deep hatred or irreconcilable values can get stuck in conflict. James Fearon ('Rationalist Explanations for War', 1995) showed that the core mechanism is a commitment problem: even if a negotiated settlement would leave both sides better off than continued fighting, the stronger party has incentives to exploit a ceasefire once the weaker party has disarmed. Knowing this, the weaker party refuses to disarm first. The result is self-sustaining conflict even in the absence of pure irrationality or deep grievance. The policy implication: effective peace deals require external enforcement mechanisms, international guarantors, and staged demobilization that neutralizes first-mover advantages.",
        textSlugs: ["rationalist-explanations-for-war"],
        conceptSlugs: ["elite-bargain", "political-settlement"],
      },
      {
        id: "power-sharing",
        idea: "Formally sharing power with groups that might otherwise fight for it gives them a stake in the system",
        mechanism:
          "Power-sharing arrangements — guaranteed cabinet seats, territorial autonomy, proportional representation, security force integration — reduce conflict risk by ensuring groups cannot be entirely excluded from state resources even if they lose an election. Arend Lijphart's consociational democracy model (1984) documented how these arrangements stabilize multiethnic states. Critics note they can entrench ethnic divisions, create veto players that block governance, and give elites incentives to keep ethnic tensions alive to maintain their brokerage role. Rwanda is notable for formally rejecting ethnic power-sharing while managing informal coalition inclusion through other means.",
        conceptSlugs: ["elite-bargain", "political-settlement", "ethnic-power-relations"],
      },
      {
        id: "political-settlements-peace",
        idea: "Durable peace requires not just a ceasefire but an agreement among powerful groups about who controls the state and how resources are distributed",
        mechanism:
          "Conflict is fundamentally about distributional competition — over state power, rents, and security. Ceasefires that do not address underlying distributional stakes tend to break down. Political settlements theory (Mushtaq Khan; Tim Kelsall; ODI/SOAS development research) argues that sustainable peace requires a stable arrangement giving key elites enough stake in the order to prefer it over conflict. This goes beyond formal institutions to the informal patterns of resource-sharing and power distribution that actually govern behavior. The framework is increasingly influential in fragile state programming at the World Bank and DFID/FCDO.",
        conceptSlugs: ["political-settlement", "elite-bargain", "monopoly-on-violence"],
      },
    ],
  },
  {
    label: "Economic incentives for violence",
    entries: [
      {
        id: "opportunity-cost-conflict",
        idea: "People are less likely to take up arms when they have decent economic alternatives — joining an armed group is partly a rational economic choice",
        mechanism:
          "Paul Collier and Anke Hoeffler's influential empirical work ('Greed and Grievance in Civil War', 2004) found that economic variables — low income, commodity dependence, large youth populations — predict civil war risk better than measures of grievance or political exclusion alone. The mechanism is an opportunity cost argument: when legal economic alternatives are scarce or poorly paid, the relative payoff to joining an armed group rises. This model has been criticized for downplaying genuine political grievances — most rebel groups have political programs and recruits who join for ideological reasons. The complete picture likely requires both: grievance provides motivation and identity; opportunity cost determines who acts on it.",
        conceptSlugs: ["political-settlement", "elite-bargain", "state-capacity"],
      },
      {
        id: "horizontal-inequalities",
        idea: "Conflict is more likely when some ethnic, religious, or regional groups are systematically worse off than others — not just when everyone is poor",
        mechanism:
          "Frances Stewart's horizontal inequalities framework (Horizontal Inequalities and Conflict, 2008) distinguishes between vertical inequalities (rich vs. poor individuals) and horizontal inequalities (inequalities between culturally defined groups). Group-level economic and political exclusion generates both grievance and organizational capacity for collective action simultaneously: members share an identity, a sense of injustice, and a clear target. This explains why overall poverty doesn't reliably predict conflict, but group-level exclusion does. The policy implication is that equitable inclusion of all major groups in both political institutions and economic gains is a conflict-prevention strategy — not merely a justice goal.",
        textSlugs: ["horizontal-inequalities-and-conflict"],
        conceptSlugs: ["ethnic-power-relations", "political-settlement"],
      },
    ],
  },
  {
    label: "Non-state order and armed group dynamics",
    entries: [
      {
        id: "rebel-governance",
        idea: "Armed groups that establish predictable rules and governance can actually reduce local violence — even without formal state presence",
        mechanism:
          "The assumption that rebel presence equals violence is wrong as a general rule. Ana Arjona (Rebelocracy, 2016) and Stathis Kalyvas show that many rebel groups establish stable governance over populations — delivering justice, regulating markets, and taxing residents. Whether they govern well or predatorily depends on organizational features and time horizons: groups with stable territorial control invest in governance; transient groups loot. Jeremy Weinstein (Inside Rebellion, 2007) links this to founding resources: groups with material resources attract opportunists and use violence; groups with social resources build discipline and governance. For practitioners, this means clearing out rebel governance without replacing it can increase, not reduce, civilian harm.",
        textSlugs: ["rebelocracy", "inside-rebellion"],
        conceptSlugs: ["state-capacity", "political-settlement", "monopoly-on-violence"],
      },
      {
        id: "civilian-collaboration",
        idea: "Civilians in conflict zones support whichever actor best protects them — their loyalties follow security, not ideology",
        mechanism:
          "Stathis Kalyvas (The Logic of Violence in Civil War, 2006) dismantled the idea that civil war violence follows ethnic or ideological frontlines. Instead, who controls a given area, and how securely, determines whether civilians collaborate with state forces or rebels. Areas under strong uncontested control see less violence; disputed areas see the most, as both sides try to root out collaboration with the other. This produces a counterintuitive finding: military advances into contested territory can increase civilian violence even for a side that governs well elsewhere. For practitioners, civilian protection requires territorial control and predictable governance — not just norms or military codes of conduct.",
        textSlugs: ["the-logic-of-violence-in-civil-war"],
        conceptSlugs: ["state-capacity", "monopoly-on-violence", "political-settlement"],
      },
    ],
  },
  {
    label: "International actors and peacebuilding",
    entries: [
      {
        id: "peacekeeping",
        idea: "International forces can hold peace agreements together when parties cannot trust each other enough to disarm on their own",
        mechanism:
          "Given the commitment problem at the heart of civil war, external monitoring and enforcement can enable agreements that would otherwise be impossible. UN peacekeeping missions increase the cost of ceasefire violations, provide information about compliance, and can deter spoilers. Virginia Page Fortna and Lisa Hultman's empirical work finds that large, well-resourced missions with civilian protection mandates do reduce violence and help sustain peace. The key mechanism is credible monitoring and enforcement, not mere presence — missions without enforcement capacity tend to fail. Resource levels, mandate clarity, and host state consent all substantially affect effectiveness.",
        conceptSlugs: ["political-settlement", "elite-bargain", "monopoly-on-violence"],
      },
      {
        id: "ddr",
        idea: "Reintegrating former fighters into civilian life reduces the risk that conflict restarts",
        mechanism:
          "Disarmament, Demobilization, and Reintegration (DDR) programs address a core barrier to durable peace: what do armed combatants do when the fighting stops? Without economic alternatives and social reintegration, ex-combatants become a ready pool for renewed violence, criminal organizations, or re-recruitment. Effective DDR is politically complex — it requires credible government commitments to former enemies, sustained donor financing, and community-level reconciliation. The field has evolved from 'first-generation' DDR (focused on collecting weapons and paying ex-fighters) toward 'second-generation' approaches that emphasize long-run economic reintegration and community reconciliation. Evidence on what works remains mixed and context-dependent.",
        conceptSlugs: ["political-settlement", "elite-bargain", "monopoly-on-violence"],
      },
    ],
  },
];

// ── Assembled sections ────────────────────────────────────────────────────────

const theorySections: TheorySection[] = [
  {
    id: "development",
    question: "What causes development?",
    groups: developmentGroups,
  },
  {
    id: "democratization",
    question: "What causes democratization?",
    groups: democratizationGroups,
  },
  {
    id: "conflict",
    question: "What reduces armed conflict and violence?",
    groups: conflictGroups,
  },
];

export default theorySections;
