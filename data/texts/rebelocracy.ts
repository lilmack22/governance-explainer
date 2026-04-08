import type { TextEntry } from "@/data/types";

const rebelocracy: TextEntry = {
  slug: "rebelocracy",
  title: "Rebelocracy: Social Order in the Colombian Civil War",
  shortTitle: "Rebelocracy",
  year: 2016,
  publisher: "Cambridge University Press",

  authors: [
    {
      name: "Ana Arjona",
      title: "Associate Professor of Political Science",
      institution: "Northwestern University",
      bio:
        "Ana Arjona is a Colombian-born political scientist at Northwestern whose work focuses on civilian-rebel relations, armed group governance, and the social consequences of civil war. Rebelocracy draws on her extensive fieldwork in Colombia, including interviews with hundreds of civilians in communities that experienced different types of rebel rule. Her work challenges simplistic accounts of civil war as pure violence, showing instead the complex governance arrangements that emerge when states lose territorial control.",
    },
  ],

  overview:
    "Rebelocracy offers a systematic account of why rebel groups vary so dramatically in how they govern civilian populations. Some armed groups establish extensive, stable governance — regulating disputes, providing basic services, extracting taxes, and enforcing rules — while others engage in pure predation or remain largely absent. This variation, Arjona argues, is not random: it follows from the interaction between the organizational features of rebel groups and the institutional capacity of the communities they occupy. " +
    "The book's central theoretical contribution is the concept of 'rebelocracy': rule by rebel groups that establishes social order in communities abandoned or contested by the state. Arjona distinguishes rebelocracy (comprehensive governance across multiple domains), aliocracy (limited governance, mainly security provision), and disorder (absence of rule). The variation in these outcomes has profound consequences for civilian welfare, local institutions, and long-run post-conflict recovery. " +
    "Based on original surveys and interviews in Colombian communities affected by FARC and paramilitary groups, the book shows that rebel governance is not only common but often preferred by civilians to the disorder or predation of the alternatives. The findings challenge both romanticized accounts of rebel groups as liberators and dismissive accounts that treat rebel presence as equivalent to absence of order.",

  coreArguments: [
    {
      heading: "Rebel governance is common and varies systematically, not randomly",
      body:
        "The assumption that rebel presence equals disorder is empirically wrong as a general claim. Many armed groups establish stable governance across the territories they control. This governance varies — from comprehensive rebelocracy (covering justice, taxation, markets, family law) to minimal aliocracy (mainly security) to disorder — in patterns that can be explained by identifiable variables: rebel organizational features, community institutional history, and the military and political context of the conflict.",
    },
    {
      heading: "Community institutional strength shapes what kind of governance rebels establish",
      body:
        "Communities with strong preexisting institutions — active community organizations, local leaders with established authority, experience of collective action — are better able to negotiate with armed groups and resist purely predatory forms of governance. Rebels face a choice between governing through community institutions (lower cost, higher legitimacy) or displacing them (higher cost, lower legitimacy). Strong community institutions thus shape the governance outcome even when rebels have overwhelming military force.",
    },
    {
      heading: "Time horizon determines governance investment",
      body:
        "Rebel groups with long time horizons in a territory — those with stable control and expectation of remaining — invest in governance because it provides benefits (taxation revenue, legitimacy, civilian cooperation) that require time to materialize. Groups with short time horizons — those expecting to be displaced, transitioning through, or uncertain of control — have less incentive to build governance infrastructure and more incentive to extract what they can immediately. This mirrors Olson's stationary-bandit logic at the sub-state level.",
    },
  ],

  keyConcepts: [
    {
      name: "Rebelocracy",
      definition:
        "Comprehensive governance by rebel armed groups — encompassing justice (dispute resolution), economic regulation (taxes, market rules), family law, security provision, and civic administration — in communities where state authority is absent or contested. Rebelocracy creates social order, though often coercive and unaccountable order. Its quality varies from relatively benign to highly repressive depending on rebel organizational features and ideological orientation.",
    },
    {
      name: "Aliocracy",
      definition:
        "Limited rebel governance that focuses primarily on security provision — preventing other armed actors from entering — without comprehensive social regulation. In aliocracy, the rebel group is present and provides some protection but does not attempt to regulate markets, adjudicate disputes, or provide broader governance functions. This produces partial order: less violence but also less stable governance.",
    },
    {
      name: "Community resilience in civil war",
      definition:
        "Arjona's concept of the capacity of civilian communities to navigate armed group presence and maintain elements of their preexisting social order. Communities with strong collective institutions and leadership are more able to negotiate favorable terms with armed groups, resist purely predatory extraction, and maintain social cohesion. Community resilience is a resource that can be built or depleted by governance decisions.",
    },
  ],

  casesAndExamples: [
    {
      country: "Colombia (FARC territories)",
      description:
        "The FARC established extensive governance over large areas of Colombian territory for decades: adjudicating disputes, regulating drug cultivation through price controls, taxing commerce, and enforcing social norms. In some communities, civilians described FARC governance as more reliable and less corrupt than state governance. This is not endorsement — FARC governance was also brutal and rights-violating — but it illustrates that rebel governance can be stable and preferred to disorder.",
    },
    {
      country: "Colombia (paramilitary territories)",
      description:
        "Colombian paramilitaries (AUC) provide a contrasting case: often more predatory and less institutionalized than the FARC, they established governance mainly through terror rather than through community negotiation. The contrast between FARC and paramilitary governance — in communities at similar economic development levels, under similar military conditions — shows that organizational features of armed groups, not just context, determine governance outcomes.",
    },
  ],

  paradigms: [
    "Conflict Studies",
    "Comparative Politics",
    "Political Violence",
    "State Formation",
    "Civil War Research",
  ],
};

export default rebelocracy;
