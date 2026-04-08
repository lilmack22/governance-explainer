import type { TextEntry } from "@/data/types";

const theLogicOfViolenceInCivilWar: TextEntry = {
  slug: "the-logic-of-violence-in-civil-war",
  title: "The Logic of Violence in Civil War",
  shortTitle: "The Logic of Violence in Civil War",
  year: 2006,
  publisher: "Cambridge University Press",

  authors: [
    {
      name: "Stathis N. Kalyvas",
      title: "Arnold Wolfers Professor of Political Science",
      institution: "Yale University",
      bio:
        "Stathis Kalyvas is a Greek-born political scientist at Yale whose work on civil war violence has fundamentally transformed the field. The Logic of Violence in Civil War (2006) is his magnum opus, drawing on his fieldwork in Greece's civil war, the Vendée, and multiple other conflict settings. His approach — treating civil war violence as a subject amenable to social-scientific explanation rather than as exceptional atrocity — has been both influential and controversial. His subsequent work has extended the framework to jihadist violence, urban conflict, and order-building in conflict zones.",
    },
  ],

  overview:
    "The Logic of Violence in Civil War is a systematic theory of when, where, and by whom violence against civilians is used in civil wars. Kalyvas's central argument overturns the conventional wisdom that civil war violence follows ideological, ethnic, or military frontlines. Instead, he argues that violence is shaped primarily by the territorial control of armed actors: the degree to which each side controls a given area determines the level and character of civilian violence. " +
    "The book begins from an observation: the dominant accounts of civil war violence — ethnic hatreds, ideological extremism, military opportunity — cannot explain the enormous variation in violence levels across space and time within the same conflict. The same ethnic groups, the same armies, and the same ideologies produce very different levels of violence in different areas of the same country. This variation demands explanation. " +
    "Kalyvas's answer is the 'control theory of defection and violence': in areas firmly controlled by one side, civilians have clear incentives to collaborate with the controlling party (or face punishment if they don't), and that party has little need to use indiscriminate violence since it knows who is loyal and who is not. In contested areas — where control is uncertain and switching sides is possible — both parties use indiscriminate violence because they cannot distinguish supporters from opponents. Violence is highest not where ideological commitment is greatest but where territorial control is most contested.",

  coreArguments: [
    {
      heading: "Violence against civilians is highest in zones of contested control, not ideological extremism",
      body:
        "Counterintuitively, areas of strong, uncontested armed group control tend to have lower rates of violence against civilians than contested zones. Where one side controls territory clearly, it can distinguish collaborators from opponents and use selective rather than indiscriminate violence. In contested zones, both sides face an adversarial information problem — they cannot reliably identify who supports whom — and resort to indiscriminate violence as a substitute for intelligence. Military advances into contested areas therefore often increase civilian harm even when the advancing party has a strong governance record elsewhere.",
    },
    {
      heading: "Civilian denunciations drive selective violence — making civil war a local affair",
      body:
        "Much violence in civil wars is not ordered from above by ideological commitment but is driven by local denunciations. Civilians who have local grievances — land disputes, economic competition, personal feuds — can use the presence of armed actors to settle scores by informing on neighbors. Armed groups process this information asymmetrically: they depend on informants but cannot fully verify whether denounced individuals are actually supporters of the enemy. The result is that civil war violence is often less about ideology than about local politics of collaboration and denunciation.",
    },
    {
      heading: "The 'zone' theory: violence patterns across five levels of control",
      body:
        "Kalyvas maps conflicts onto a spectrum from total incumbent control to total insurgent control, with three intermediate zones. Violence patterns differ systematically across zones: incumbent-controlled areas see primarily insurgent violence against collaborators; insurgent-controlled areas see primarily incumbent violence; contested zones see highest levels from both sides. This framework produces testable predictions about where violence will be highest and what type of violence each party will use.",
    },
  ],

  keyConcepts: [
    {
      name: "The control theory of violence",
      definition:
        "Kalyvas's central theoretical claim: patterns of civilian violence in civil war are determined primarily by the territorial control of armed actors, not by ideology, ethnicity, or opportunity. Armed groups in fully controlled areas use selective, information-based violence; in contested areas, they use indiscriminate violence as a substitute for intelligence. The theory predicts violence will be highest in zones of contested control.",
    },
    {
      name: "Selective vs. indiscriminate violence",
      definition:
        "The distinction between targeted violence against specific individuals identified as opponents (selective) and violence against groups or populations based on category membership (indiscriminate). Kalyvas argues that selective violence requires information (who is really the enemy?) that is only available in controlled areas. In contested areas, armed groups fall back on indiscriminate violence because they cannot reliably identify individual opponents.",
    },
    {
      name: "The principal-agent problem in armed organizations",
      definition:
        "Kalyvas notes that the 'logic' of civil war violence often reflects the incentives of local armed actors (agents) rather than the strategic preferences of organizational leadership (principals). Local commanders may use violence to settle personal scores, intimidate communities for economic benefit, or respond to local dynamics that leadership does not know about or cannot control. Violence attributed to ideological directives may actually reflect agency problems within armed organizations.",
    },
    {
      name: "Collaboration and denunciation",
      definition:
        "The local-level political dynamics that determine who gets denounced and who gets protected in conflict zones. Civilians collaborate with whichever armed actor controls their area — for protection, economic access, or legal standing — and use the opportunity to provide information about opponents, neighbors, or rivals. The 'logic of violence' is partly the logic of local political scores being settled under cover of ideological conflict.",
    },
  ],

  casesAndExamples: [
    {
      country: "Greek Civil War (1946–1949)",
      description:
        "Kalyvas's deepest case study, based on archival research in a single Greek municipality. He traces how violence patterns — who was killed, by whom, when, and in which villages — reflect territorial control and local denunciations rather than ideological frontlines. Villages that changed hands multiple times experienced the highest violence; stable areas of either side were relatively calm. Local feuds played out under the cover of national ideological conflict.",
    },
    {
      country: "Vendée, France (1793–1796)",
      description:
        "The Vendée counter-revolutionary uprising is analyzed to show that violence levels correlated with contested control, not with religious or political extremism per se. Republican forces used most intense violence in areas of active insurgency (contested zones); areas of strong Republican control saw low rates of anti-civilian violence. The pattern matches the control theory predictions across a very different historical and geographic context.",
    },
    {
      country: "Algeria (1992–2000)",
      description:
        "The Algerian civil war between the military government and Islamist insurgents produced extreme civilian violence including mass massacres. Kalyvas's analysis emphasizes that the worst massacres occurred in areas of contested control — particularly in the rural zones around Algiers — where the government could not distinguish supporters from opponents and where both sides used indiscriminate violence to establish dominance.",
    },
  ],

  paradigms: [
    "Conflict Studies",
    "Political Violence",
    "Comparative Politics",
    "Civil War Research",
    "Formal Theory Applied to Conflict",
  ],
};

export default theLogicOfViolenceInCivilWar;
