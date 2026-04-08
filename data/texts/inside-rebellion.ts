import type { TextEntry } from "@/data/types";

const insideRebellion: TextEntry = {
  slug: "inside-rebellion",
  title: "Inside Rebellion: The Politics of Insurgent Violence",
  shortTitle: "Inside Rebellion",
  year: 2007,
  publisher: "Cambridge University Press",

  authors: [
    {
      name: "Jeremy Weinstein",
      title: "Deputy Director and Chief Operating Officer",
      institution: "USAID (former; currently at Stanford University)",
      bio:
        "Jeremy Weinstein is a political scientist whose academic work at Stanford was interrupted by stints in government — including as Executive Secretary of the National Security Council and Deputy Director at USAID under the Obama administration. Inside Rebellion, developed from his PhD dissertation, remains his most influential scholarly work. It established a framework for understanding variation in rebel group behavior that has been widely applied in conflict research and has influenced programming by development and humanitarian organizations.",
    },
  ],

  overview:
    "Inside Rebellion asks why armed groups vary so dramatically in how they treat civilians: some engage in systematic, targeted violence against non-combatants while others maintain discipline and avoid civilian harm. Weinstein's answer focuses on the resources available to rebel groups at their founding — not their ideology or grievances, but the material and social resources that determine who joins and how. " +
    "The book's central argument is that founding resources shape organizational endowments that persist through a conflict. Rebel groups that form with material wealth — lootable resources like diamonds, timber, or drug revenues — attract 'opportunistic' recruits who join for material gain rather than ideological commitment. These groups have weak discipline, poor internal monitoring, and high civilian abuse because opportunists respond to incentives (the immediate payoff from looting and rape) rather than norms. Groups that form with social resources — embedded in communities, relying on shared identity, recruits who join for ideological reasons — develop strong norms, internal discipline, and restraint toward civilians even without external enforcement. " +
    "The empirical analysis compares rebel movements in Uganda, Mozambique, and Peru, with substantial evidence from original fieldwork. The policy implications are significant: DDR programs that focus on weapons collection miss the organizational roots of violence; the quality of rebel governance is endogenous to founding conditions that external actors rarely influence.",

  coreArguments: [
    {
      heading: "Founding resources determine rebel organizational endowments",
      body:
        "The resources available to a movement at its founding shape its organizational structure, membership composition, and internal norms in ways that persist throughout the conflict. Material resources (lootable wealth) attract opportunists and create organizations without disciplinary capacity. Social resources (community embeddedness, ideological networks) attract committed recruits and create organizations with strong norms and monitoring. These founding endowments are path-dependent — early organizational patterns become institutionalized and hard to change.",
    },
    {
      heading: "Material endowment → opportunistic recruits → abuse",
      body:
        "Groups with material wealth attract members whose primary motivation is personal gain. Because these recruits respond to material incentives rather than normative commitments, leadership cannot rely on internalized norms to prevent civilian abuse. Monitoring and discipline would require costly hierarchical control that material-endowed groups typically lack. The result is systematic civilian abuse — not as a deliberate strategy but as the predictable behavior of poorly disciplined opportunists responding to immediate incentives.",
    },
    {
      heading: "Social endowment → committed recruits → restraint",
      body:
        "Groups that form embedded in communities and rely on ideological appeals attract recruits who join for non-material reasons. These committed members internalize the movement's norms and are more willing to bear costs (including restraining their own behavior) for the collective goal. Leadership can rely on normative compliance rather than costly monitoring. The result is organizational discipline and restraint toward civilians — not from external pressure but from internal norms.",
    },
  ],

  keyConcepts: [
    {
      name: "Organizational endowment",
      definition:
        "The set of organizational capabilities, norms, and structures that a rebel group develops based on its founding resources and early experiences. Endowments include: membership composition (committed vs. opportunistic recruits), internal monitoring and discipline capacity, command and control structures, and norms about civilian treatment. Endowments are path-dependent — early patterns shape organizational culture throughout the conflict.",
    },
    {
      name: "Opportunistic vs. activist recruits",
      definition:
        "Weinstein's distinction between recruits who join rebel movements for material benefit (opportunists) and those who join for ideological or community reasons (activists). The proportion of each type shapes organizational discipline: activist-heavy organizations can rely on normative compliance; opportunist-heavy organizations cannot and therefore exhibit higher rates of civilian abuse.",
    },
    {
      name: "Lootable resources and conflict quality",
      definition:
        "Natural resources that can be easily extracted by individuals or small groups — alluvial diamonds, timber, drug crops — attract opportunistic recruits to armed groups and degrade organizational discipline. The 'resource curse' applies not just to states but to rebel organizations: material wealth enables and attracts opportunism, while social embeddedness enables and attracts commitment.",
    },
  ],

  casesAndExamples: [
    {
      country: "Uganda (NRM vs. UNRF II)",
      description:
        "Weinstein contrasts the National Resistance Movement (NRM), which formed with social resources and had strong community embeddedness in the Luwero Triangle, with the more materially-endowed UNRF II. The NRM maintained discipline and limited civilian abuse, building a governance reputation that contributed to its eventual military success. The contrast illustrates the organizational endowment mechanism in a single country context.",
    },
    {
      country: "Mozambique (FRELIMO vs. RENAMO)",
      description:
        "FRELIMO's social-resource origins — in exile networks, ujamaa ideology, and cross-ethnic mobilization — produced organizational discipline and limited civilian abuse. RENAMO, originally created with South African material support and lacking ideological coherence, was characterized by opportunistic recruitment and systematic civilian violence. The contrast fits the material-vs.-social endowment prediction.",
    },
    {
      country: "Peru (Sendero Luminoso vs. MRTA)",
      description:
        "Both Peruvian insurgent groups had ideological origins, but Sendero Luminoso's systematic use of violence against civilians violated the committed-recruits-mean-restraint pattern. Weinstein explains this through the movement's internal ideology: Sendero's violence was strategic and norm-governed, not opportunistic — illustrating that committed recruits produce discipline toward the group's own norms, which may or may not include civilian restraint.",
    },
  ],

  paradigms: [
    "Conflict Studies",
    "Comparative Politics",
    "Political Violence",
    "Civil War Research",
    "Organization Theory",
  ],
};

export default insideRebellion;
