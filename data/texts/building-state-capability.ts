import type { TextEntry } from "@/data/types";

const buildingStateCapability: TextEntry = {
  slug: "building-state-capability",
  title: "Building State Capability: Evidence, Analysis, Action",
  shortTitle: "Building State Capability",
  year: 2017,
  publisher: "Oxford University Press",

  authors: [
    {
      name: "Matt Andrews",
      title: "Professor of Public Policy",
      institution: "Harvard Kennedy School",
      bio:
        "Matt Andrews is a public policy scholar at Harvard Kennedy School whose work focuses on public sector reform in developing countries. He developed the Problem-Driven Iterative Adaptation (PDIA) framework with Lant Pritchett and Michael Woolcock as a practical alternative to standard 'best practice' reform transplantation. His research consistently finds that reforms adopted for external legitimacy rather than internal problem-solving fail to build real capability.",
    },
    {
      name: "Lant Pritchett",
      title: "Professor of the Practice of International Development",
      institution: "Harvard Kennedy School",
      bio:
        "Lant Pritchett is one of the most provocative development economists of his generation, known for empirical papers that challenge prevailing consensus (including 'Divergence, Big Time' and work on learning crises in education). His collaboration with Andrews and Woolcock on state capability has been influential in moving development practice away from checklist approaches toward context-sensitive problem-solving. He previously spent many years at the World Bank.",
    },
    {
      name: "Michael Woolcock",
      title: "Lead Social Scientist",
      institution: "World Bank Development Research Group / Harvard Kennedy School",
      bio:
        "Michael Woolcock is a sociologist whose work spans social capital, state capability, and development practice. His long tenure at the World Bank has given him unusual practical insight into why well-designed reforms fail in implementation. He brings a sociological perspective to state-building questions that complements Andrews's public administration focus and Pritchett's economics training.",
    },
  ],

  overview:
    "Building State Capability is both a diagnosis of why state-building aid consistently fails and a practical guide to doing it better. The central diagnosis is 'isomorphic mimicry': developing country governments adopt the forms of capable states — new laws, agencies, procedures, org charts — without the functions. They look like capable states while operating as before. This mimicry is rational: it secures donor financing and external legitimacy without requiring the painful political work of actual reform. " +
    "The book identifies a second syndrome called 'premature load-bearing': the tendency of donors to place requirements on institutions before those institutions have developed the underlying capability to meet them. Building an anti-corruption court before a functional judiciary exists, or creating a performance management system before reliable data collection exists, loads new institutional demands onto foundations that cannot support them. " +
    "The authors' alternative is Problem-Driven Iterative Adaptation (PDIA): start from an actual problem that local actors care about and have authority to solve; try small experiments; learn from what works; iterate. This approach produces solutions fitted to local context rather than imported from 'best practice' manuals, and it builds capability through doing rather than training. The book is both a theoretical account of why standard approaches fail and a hands-on guide to PDIA in practice.",

  coreArguments: [
    {
      heading: "Isomorphic mimicry: states adopt forms without functions",
      body:
        "Development aid creates incentives for recipient governments to demonstrate compliance with donor templates — public financial management systems, procurement codes, anti-corruption agencies — without actually changing underlying behavior. The adopted forms mimic capable states while the underlying systems remain unchanged. This is rational for recipients (it secures funding) and tolerable for donors (it generates reports of progress) but produces no real capability. Isomorphic mimicry is the dominant equilibrium of the current aid system.",
    },
    {
      heading: "Premature load-bearing collapses institutions before they can develop",
      body:
        "Reform programs routinely impose institutional requirements that exceed the current capability of the institutions being reformed. An accountability system that presupposes reliable data, a judicial system that presupposes professional lawyers, a decentralization program that presupposes functional local governments — all of these load demands onto foundations that collapse under them. The capability needed to meet the requirements was supposed to emerge from implementing them, but implementation requires capability first.",
    },
    {
      heading: "Capability must be built through problem-solving, not training",
      body:
        "Standard capacity-building approaches train people in formal knowledge and procedures then expect performance to follow. PDIA inverts this: identify a real problem, authorize local teams to experiment with solutions, create feedback loops so that what works spreads and what fails is abandoned. Capability emerges from doing — from teams developing practical knowledge through iterative problem-solving rather than from absorbing best practices in workshops.",
    },
    {
      heading: "Context specificity is not an obstacle — it is the point",
      body:
        "Best-practice transplants fail because institutions are not context-free technologies: they emerge from and depend upon specific social, political, and organizational contexts. What works in Singapore does not work in Zambia not because Zambia lacks 'commitment' but because the social and political foundations of Singaporean institutions do not exist there. Effective state-building starts from what exists and builds incrementally — which means rejecting the template model entirely.",
    },
  ],

  keyConcepts: [
    {
      name: "Isomorphic mimicry",
      definition:
        "The adoption by developing country governments of institutional forms that resemble capable governance without producing the functional outcomes those forms are supposed to generate. Named by analogy to biological mimicry: just as a harmless species can mimic a dangerous one's appearance without its properties, governments adopt the appearance of effective institutions without their substance.",
    },
    {
      name: "Problem-Driven Iterative Adaptation (PDIA)",
      definition:
        "A reform methodology that starts from an identified, locally-owned problem rather than a best-practice template; builds in regular feedback and adaptation; authorizes local experimentation rather than requiring fidelity to a preset design; and measures success by whether the problem is being solved rather than whether the prescribed activities were completed.",
    },
    {
      name: "Premature load-bearing",
      definition:
        "The failure mode in which reform programs place institutional demands on organizations before those organizations have developed the underlying capability to meet them. The demands collapse the institution rather than developing it, because meeting the demands presupposes the capability that was supposed to emerge from meeting them.",
    },
    {
      name: "Authorizing environment",
      definition:
        "The political, organizational, and legal context that permits or enables reform. PDIA emphasizes that change agents need sufficient authorization — from political leadership, organizational culture, and formal mandate — to experiment, fail, and iterate. Without an enabling authorizing environment, even well-designed reform processes cannot be implemented.",
    },
  ],

  casesAndExamples: [
    {
      country: "Cambodia (public financial management)",
      description:
        "Standard donor-led public financial management reform in Cambodia produced technically sophisticated systems that were not used. Officials continued parallel informal systems because the formal systems required capabilities (reliable data, IT infrastructure, professional accountants) that had not yet developed. This is isomorphic mimicry in practice: the form of a modern PFM system without the function.",
    },
    {
      country: "PDIA pilots (multiple countries)",
      description:
        "The authors describe PDIA experiments in which local teams were given a genuine problem (e.g., improving tax revenue collection in a specific district) and authorization to experiment. Unlike template-driven reforms, these produced locally-fitted solutions that worked in context — often very different from international best practice — and built real capability in the teams that developed them.",
    },
    {
      country: "South Korea and Singapore",
      description:
        "Both countries are noted as cases where capability was built gradually through problem-solving rather than imported wholesale. Their bureaucracies developed through extended periods of learning-by-doing — making mistakes, adapting, building on successes. The lesson is not that their institutions are models to copy but that their process of development (iterative, context-fitted) is what worked.",
    },
  ],

  paradigms: [
    "Public Administration",
    "Development Practice",
    "Institutional Economics",
    "State Capability",
    "Aid Effectiveness",
  ],
};

export default buildingStateCapability;
