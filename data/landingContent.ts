// ============================================================
// LANDING PAGE CONTENT
// ============================================================
// This file contains all the text displayed on the home page.
// Edit here to change any wording — no need to touch the
// component files. Each export maps to one section.
// ============================================================

// ── Navigation ──────────────────────────────────────────────

export const navContent = {
  siteName: "Governance Matters",
  links: [
    { href: "/", label: "Home" },
    { href: "/cases", label: "Case Explorer" },
  ],
  ctaButton: { href: "/cases/rwanda", label: "Explore Rwanda →" },
};

// ── Hero (opening section) ───────────────────────────────────

export const heroContent = {
  eyebrow: "Introduction",

  // Opening parable
  parableOpener: "There is an old public health parable where...",
  parableBody1: "You are standing by a river. People are floating past, struggling. You jump in. You pull them out. Then more come.",
  parableBody1Emphasis: "More and more.",
  parableBody2Before: "Then someone stops — and starts running",
  parableBody2Emphasis: "upstream.",
  parableDialogue: "Others shout, \u201cWhere are you going? We need help here!\u201d",
  parableResponse: "They say, \u201cI\u2019m going to find out who is pushing people into the river.\u201d",

  // Main argument
  argument1:
    "Much of what we call \u201cdevelopment\u201d happens at the riverbank. Especially in the nonprofit sector, problems are often tackled downstream, close to where they manifest visibly. Organizations provide school supplies, deliver vaccines, build clinics, give loans. These things matter \u2014 they save lives.",
  argument2:
    "But they do not change who is upstream, or why they keep pushing people into a perilous fate.",

  // Big thesis
  thesisBefore: "When we keep going upstream, we see that",
  thesisEmphasis: "most development problems have political roots.",

  // Subheading
  subheading:
    "This is an argument for going upstream \u2014 for understanding incentives, institutions, power, and governance as causes, not just context.",

  // Scroll nudge label
  scrollNudge: "The argument",
};

// ── Intervention Ladder ──────────────────────────────────────

export const interventionLadderContent = {
  eyebrow: "A Taxonomy of Intervention",
  headlineBefore: "Much of this is good work.",
  headlineEmphasis: "None of it is upstream.",
  intro:
    "From water filters to NGO clinics, the development sector has built an extraordinary range of interventions. They can be lifesaving. But all too often, they intervene at the level where problems are experienced, not where they are generated.",

  // Connector quote at the bottom of the section
  connectorQuote: "An intervention can work without the system working.",

  // The five expandable levels
  // Colors are kept here because they are purely visual labels tied to content identity.
  levels: [
    {
      number: "01",
      label: "Point-of-use fixes",
      color: "#94a3b8",
      dimColor: "rgba(148,163,184,0.08)",
      border: "rgba(148,163,184,0.25)",
      description: "Solve the immediate problem at the moment of use.",
      intuition:
        "Fixing the water at the cup \u2014 not the pipes, the governance, or the financing system.",
      examples: [
        {
          name: "LifeStraw / chlorine tablets",
          org: "PSI, Pure Water for the World",
          note: "Filters contaminated water at household level",
        },
        {
          name: "Solar lanterns",
          org: "d.light, M-KOPA",
          note: "Off-grid light where there is no grid electricity",
        },
        {
          name: "Clean cookstoves",
          org: "Envirofit, Clean Cooking Alliance",
          note: "Reduce indoor smoke exposure at point of cooking",
        },
      ],
      unchanged:
        "Public infrastructure, state capacity for water/energy provision, political economy of service delivery",
    },
    {
      number: "02",
      label: "Direct goods transfers",
      color: "#94a3b8",
      dimColor: "rgba(148,163,184,0.08)",
      border: "rgba(148,163,184,0.25)",
      description: "Fill resource gaps by giving people what they lack.",
      intuition: "You\u2019re filling the gap \u2014 not asking why the gap exists.",
      examples: [
        {
          name: "Shoes & glasses",
          org: "TOMS, Warby Parker",
          note: "Give a pair, give a pair \u2014 good intentions, no systemic change",
        },
        {
          name: "Food aid",
          org: "WFP emergency operations",
          note: "Lifesaving in crisis; often creates import dependency",
        },
        {
          name: "Cash transfers",
          org: "GiveDirectly, conditional transfer programs",
          note: "Effective but bounded by structural labor market conditions",
        },
      ],
      unchanged:
        "Why the income gap exists; labor markets; industrial structure; political barriers to economic participation",
    },
    {
      number: "03",
      label: "Targeted disease programs",
      color: "#94a3b8",
      dimColor: "rgba(148,163,184,0.08)",
      border: "rgba(148,163,184,0.25)",
      description: "Attack specific diseases with effective tools at scale.",
      intuition:
        "Fighting the disease \u2014 not rebuilding the system that fails to prevent it.",
      examples: [
        {
          name: "Vaccination campaigns",
          org: "Gavi, the Vaccine Alliance",
          note: "Highly effective at specific diseases; parallel to national systems",
        },
        {
          name: "Bed nets",
          org: "Against Malaria Foundation",
          note: "Proven, cost-effective \u2014 but malaria persists where governance fails",
        },
        {
          name: "HIV/AIDS treatment",
          org: "The Global Fund, PEPFAR",
          note: "Life-saving; but relies on sustained external funding, not local system capacity",
        },
      ],
      unchanged:
        "Health system governance; public financing capacity; political accountability in health delivery; prevention infrastructure",
    },
    {
      number: "04",
      label: "NGO service delivery",
      color: "#94a3b8",
      dimColor: "rgba(148,163,184,0.08)",
      border: "rgba(148,163,184,0.25)",
      description: "Directly deliver services where the state cannot or does not.",
      intuition: "Acting as the state \u2014 not changing how the state works.",
      examples: [
        {
          name: "Community health & clinics",
          org: "Partners In Health",
          note: "Brilliant model \u2014 but builds a parallel system, not state capacity",
        },
        {
          name: "Multi-sector development",
          org: "BRAC",
          note: "Extraordinary at scale; has changed what\u2019s possible \u2014 but works where state is absent",
        },
        {
          name: "School networks",
          org: "Bridge International, various NGOs",
          note: "Fills education gaps \u2014 but government adoption remains the open question",
        },
      ],
      unchanged:
        "State incentives to deliver; political accountability; domestic financing; what happens when the NGO leaves",
    },
    {
      number: "05",
      label: "What\u2019s actually upstream",
      color: "#6495ED",
      dimColor: "rgba(212,168,67,0.07)",
      border: "rgba(212,168,67,0.40)",
      description:
        "The political and institutional conditions that determine whether anything else works \u2014 or lasts.",
      intuition: "This is where the river bends. This is where someone is pushing.",
      examples: [
        {
          name: "Who holds power and on what terms",
          org: "Political settlement",
          note: "Elite incentives determine whether any policy gets implemented",
        },
        {
          name: "Whether the state can actually implement",
          org: "State capacity",
          note: "Without capable institutions, good policies remain paper",
        },
        {
          name: "Whether leaders are accountable to citizens",
          org: "Accountability and representation",
          note: "Accountable governments aggregate needs and deliver at scale",
        },
      ],
      unchanged: null,
    },
  ],
};

// ── Bandaid Section ("Symptom vs. System") ──────────────────

export const bandaidContent = {
  eyebrow: "Symptom vs. System",
  headlineBefore: "Most development failures",
  headlineEmphasis: "have two faces.",
  intro:
    "One is visible \u2014 the broken clinic, the absent teacher, the empty legal promise. The other is hidden upstream: the incentive, the institution, the power arrangement sustaining the failure.",

  // Column headers for the symptom/cause table
  tableHeaders: {
    left: "What we see",
    right: "What sustains it",
  },

  // Symptom / root-cause pairs
  downstream: [
    {
      symptom: "Clinics without medicine or accountable staff",
      cause:
        "Health worker incentives not aligned with delivery; no political accountability for outcomes",
    },
    {
      symptom: "Schools where teachers don\u2019t show up",
      cause:
        "Teacher attendance monitored by no one with power to act; local elite capture of payroll",
    },
    {
      symptom: "Anti-poverty programs captured by local leaders",
      cause:
        "Patronage systems route benefits to allies; beneficiary lists are political tools",
    },
    {
      symptom: "Anti-deforestation rules without enforcement",
      cause:
        "Timber rents benefit powerful actors who control enforcement institutions",
    },
    {
      symptom: "Anti-trafficking laws with no prosecutions",
      cause:
        "Trafficking networks pay or coerce police and prosecutors; impunity is structural",
    },
    {
      symptom: "Police reform that doesn\u2019t change behavior",
      cause:
        "Political control of coercive actors remains unchanged; reform is cosmetic",
    },
  ],

  // Sub-header and body for the upstream questions block
  upstreamHeadline: "The upstream layer asks different questions.",
  upstreamSubhead:
    "Not \u201cwhy is the clinic broken?\u201d but \u201cwhat political arrangement makes a functioning clinic impossible?\u201d",

  // Upstream question cards
  upstream: [
    {
      icon: "\uD83C\uDFAF",
      label: "What incentives does the leader face?",
      sub: "Accountability to citizens, or to a narrow coalition?",
    },
    {
      icon: "\uD83C\uDFDB\uFE0F",
      label: "Who holds power, and on what terms?",
      sub: "The political settlement \u2014 who wins, who is bought off, who is excluded",
    },
    {
      icon: "\u2699\uFE0F",
      label: "Do those with power have any incentives to implement welfare-promoting policies?",
      sub: "State capacity: bureaucracy, finances, reach, competence",
    },
    {
      icon: "\uD83D\uDD17",
      label: "What informal rules govern behavior?",
      sub: "Patronage networks, coercion, customary norms that override formal law",
    },
    {
      icon: "\uD83D\uDCB0",
      label: "Who profits from the status quo?",
      sub: "Rents from land, resources, illicit flows \u2014 and how they shape politics",
    },
    {
      icon: "\u2696\uFE0F",
      label: "Is violence politically useful?",
      sub: "Where conflict is a tool for resource extraction or power maintenance",
    },
  ],

  // Pull quote at the bottom of the section
  pullQuote:
    "Political science matters for development work because many outcomes that look like sector problems are actually governance problems. Governance structures whether policy is implemented, who benefits, whether violence is contained, and whether development gains last.",
};

// ── Sustainability Section ("The Durability Problem") ────────

export const sustainabilityContent = {
  eyebrow: "The Durability Problem",
  headlineBefore: "The central question is not only",
  headlineEmphasis: "whether it works.", 

  intro:
    "It is whether it continues to work once external support is withdrawn. Vaccines, filters, and NGO clinics can improve outcomes enormously. But when underlying incentives, institutions, and state capacity remain unchanged, those gains depend on an indefinite external commitment that is rarely guaranteed.",
  introNote:
    "Think of USAID funding suddenly dismantled. Donor priorities shifting. A new global crisis redirecting resources. The intervention ends \u2014 and so do the gains.",

  // Table column headers
  tableHeaders: {
    left: "Short-run relief / delivery",
    right: "Long-run self-sustaining systems",
  },

  // Short-run vs. long-run contrast rows
  contrasts: [
    {
      left: "Services are provided",
      right: "Institutions deliver services without external support",
    },
    {
      left: "Outcomes improve while the intervention is active",
      right: "Outcomes persist after the intervention ends",
    },
    {
      left: "External actors fill gaps",
      right: "Incentives within the system align with implementation",
    },
    {
      left: "Progress depends on continued donor commitment",
      right: "State capacity and accountability exist within the country",
    },
  ],

  // "The positive case" box
  positiveCaseLabel: "The positive case",
  positiveCaseHeadline:
    "Accountable, high-capacity governments are different in kind \u2014 not just in degree.",
  positiveCaseBody:
    "They are structured by design to aggregate information about citizens\u2019 needs and deliver services at scale to meet them. A capable, accountable state doesn\u2019t just solve one problem \u2014 it can solve many, simultaneously and sustainably, because it channels collective will into implementation. Getting that kind of governance in place is a tall order. But the social returns \u2014 immeasurable and far more durable than any single intervention \u2014 are what make it a worthy endeavor.",

  // Closing quote cards — edit or add/remove items freely
  phrases: [
    "Governance is not a sector. It is the environment in which every sector operates.",
    "The question is not just whether it works \u2014 but whether it lasts without us.",
    "A capable state is not a precondition for development. It is development.",
    "External support can fill a gap. Only accountability can close it.",
  ],
};

// ── Core Thesis ──────────────────────────────────────────────

export const coreThesisContent = {
  eyebrow: "The Core Argument",
  headlineBefore: "Downstream problems are often",
  headlineEmphasis: "sustained by upstream causes.",
  intro:
    "Poverty, weak services, conflict, environmental destruction, trafficking \u2014 these are not random. They are produced and sustained by specific political and institutional arrangements. Understand those arrangements and you understand the problem differently. Intervene in them, and the change is more likely to last.",

  // Table column headers
  tableHeaders: [
    "Development problem",
    "Surface cause",
    "Upstream political/governance cause",
  ],

  // Development problem rows
  mechanisms: [
    {
      domain: "Poverty & inequality",
      surface: "Insufficient income, unequal distribution",
      root: "Elite capture of redistributive mechanisms; labor markets shaped by patronage; land rights distorted by political power",
    },
    {
      domain: "Weak service delivery",
      surface: "Clinics and schools that don\u2019t function",
      root: "No political incentive for leaders to deliver to broad populations; accountability to elites, not citizens",
    },
    {
      domain: "Conflict & fragility",
      surface: "Violence, displacement, instability",
      root: "Unstable elite bargains; groups excluded from power; violence as rational political strategy; resource rents funding armed actors",
    },
    {
      domain: "Environmental destruction",
      surface: "Deforestation, illegal mining, pollution",
      root: "Resource rents captured by politically connected actors; enforcement impossible against those who own the enforcers",
    },
    {
      domain: "Low learning outcomes",
      surface: "Children who complete school without learning",
      root: "Teacher unions protecting attendance without accountability; curriculum decisions serving political symbols, not skills",
    },
    {
      domain: "Trafficking & rights abuses",
      surface: "Exploitation, impunity, lack of prosecution",
      root: "Networks maintain access to political protection; prosecutors and police have no incentive \u2014 or face risks \u2014 for accountability",
    },
  ],

  // "What political science gives us" block
  polsciSectionHeadline: "What political science gives us",
  polsciConcepts: [
    {
      concept: "Incentive analysis",
      body: "Leaders do what they are rewarded for. Political science maps those reward structures \u2014 who gives power, who can take it away, and what behavior that produces.",
      color: "#8CB3F4",
    },
    {
      concept: "Institutional analysis",
      body: "Rules, formal and informal, shape what is possible. Institutions determine whether a capable person in a broken system can succeed \u2014 and whether change outlasts individuals.",
      color: "#6495ED",
    },
    {
      concept: "Power and settlement analysis",
      body: "Development outcomes are often the by-products of elite bargains. Understanding who holds power, on what terms, and with what stability, explains much of what sector analysis leaves obscure.",
      color: "#4372C8",
    },
  ],

  // Final thesis statement
  finalThesisBefore:
    "To understand development, you have to understand politics. Not as background noise \u2014 as a",
  finalThesisEmphasis: "causal mechanism.",
};

// ── Case CTA ─────────────────────────────────────────────────

export const caseCTAContent = {
  eyebrow: "From argument to evidence",
  headlineBefore: "Now see the argument",
  headlineEmphasis: "inside a real case.",
  intro:
    "The upstream logic is easier to accept in the abstract. It becomes unavoidable when you trace it through a specific country \u2014 through real events, real mechanisms, and real trade-offs.",

  // Featured case card
  featuredCase: {
    flag: "\uD83C\uDDF7\uD83C\uDDFC",
    title: "Rwanda",
    subtitle: "East Africa \u00B7 Authoritarian development \u00B7 Post-genocide transformation",
    statusBadge: "Live",
    description:
      "From genocide and state collapse in 1994 to one of Africa\u2019s most capable states by 2024. What explains this transformation \u2014 and what does it cost?",
    details:
      "Explore an interactive causal diagram tracing political settlement, elite bargain, state capacity, and developmental governance \u2014 with concept drill-downs linking each node to key scholars, theories, and World Bank implications.",
    ctaButton: "Start the Rwanda case",
    href: "/cases/rwanda",
  },

  browseAllLabel: "Browse all case studies \u2192",
  browseAllHref: "/cases",
};

// ── Footer ───────────────────────────────────────────────────

export const footerContent = {
  text: "Built as an educational resource for development practitioners, World Bank staff, and students of political economy. Analysis is pedagogical, not prescriptive.",
};
