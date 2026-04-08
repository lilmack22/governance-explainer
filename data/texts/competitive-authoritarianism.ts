import type { TextEntry } from "@/data/types";

const competitiveAuthoritarianism: TextEntry = {
  slug: "competitive-authoritarianism",
  title: "Competitive Authoritarianism: Hybrid Regimes After the Cold War",
  shortTitle: "Competitive Authoritarianism",
  year: 2010,
  publisher: "Cambridge University Press",

  authors: [
    {
      name: "Steven Levitsky",
      title: "David Rockefeller Professor of Latin American Studies",
      institution: "Harvard University",
      bio:
        "Steven Levitsky is a comparative political scientist at Harvard whose work spans Latin American politics, party systems, and democratic stability. Competitive Authoritarianism (2010) established him as a leading voice on hybrid regimes, and his subsequent co-authored work — including How Democracies Die (2018, with Daniel Ziblatt) — has brought transitology insights to a broad audience. His deep knowledge of Latin American cases grounds his comparative frameworks in rich empirical detail.",
    },
    {
      name: "Lucan Way",
      title: "Professor of Political Science",
      institution: "University of Toronto",
      bio:
        "Lucan Way is a comparative political scientist specializing in post-Soviet politics and hybrid regimes. His research on competitive authoritarianism draws on extensive fieldwork in Eastern Europe, the former Soviet Union, and sub-Saharan Africa. His collaboration with Levitsky produced both the hybrid regime typology and a systematic comparative analysis of why some hybrid regimes democratized and others did not after the Cold War.",
    },
  ],

  overview:
    "Competitive Authoritarianism maps and explains a regime type that proliferated after the Cold War's end: regimes that hold regular, multiparty elections but systematically violate the democratic norms that make those elections genuinely competitive. The authors call this type 'competitive authoritarianism' — neither full democracy nor fully closed authoritarianism, but a hybrid in which incumbents use state resources, media control, harassment, and institutional manipulation to tilt playing fields heavily in their favor while maintaining enough democratic legitimacy to avoid international isolation. " +
    "The book compares thirty-five cases across Eastern Europe, the former Soviet Union, sub-Saharan Africa, and Latin America to identify why some competitive authoritarian regimes democratized (Ukraine, Slovakia, Peru) while others remained stable hybrids (Russia, Belarus) or shifted to full authoritarianism (Zimbabwe). The key variable is the strength of Western linkage: countries deeply embedded in Western economic, political, and social networks faced greater pressure and incentives to democratize, while those without strong Western ties could resist or ignore that pressure. " +
    "The theoretical contribution extends beyond area studies: Levitsky and Way establish that elections are not sufficient evidence of democracy, that hybrid regimes are a stable equilibrium rather than a transitional moment, and that international factors powerfully shape regime trajectories in ways that purely domestic accounts miss.",

  coreArguments: [
    {
      heading: "Competitive authoritarianism is a stable regime type, not a transition moment",
      body:
        "The standard transitology assumption held that hybrid regimes were unstable — they would either consolidate into democracy or collapse into full authoritarianism. Levitsky and Way show this is wrong: competitive authoritarian regimes can persist for decades, as in Russia, Zimbabwe, and Malaysia. The combination of formal democratic institutions and systematic violation of their substance is an equilibrium, not a passing phase.",
    },
    {
      heading: "Incumbents win not by banning opposition but by tilting the field",
      body:
        "Competitive authoritarian regimes maintain formal multiparty competition while skewing conditions so dramatically that opposition cannot realistically win. Tools include: controlling broadcast media while formally allowing press freedom; using state resources for incumbents while denying them to opposition; manipulating courts to disqualify opponents; selectively applying harassment and legal proceedings; and exploiting incumbency advantages in ways that exceed normal democratic unfairness.",
    },
    {
      heading: "Western linkage determines democratization outcomes",
      body:
        "The most powerful predictor of whether competitive authoritarian regimes democratized was the depth of their linkage to the West: trade ties, EU membership aspirations, diaspora connections, civil society funding, and media exposure. Countries like Slovakia, Romania, and Ukraine had dense Western ties that raised the costs of sustained authoritarianism and provided resources and models for democratic opposition. Countries like Russia, Belarus, and Cambodia had weaker Western linkage and maintained hybrid or full authoritarian systems.",
    },
  ],

  keyConcepts: [
    {
      name: "Competitive authoritarianism",
      definition:
        "A hybrid regime type in which formal democratic institutions — regular multiparty elections, formal civil liberties, independent judiciaries on paper — coexist with systematic violations of democratic norms. Elections are real in that incumbents can lose, but are unfair in that the playing field is systematically tilted through control of media, state resources, and legal proceedings. Distinguished from electoral authoritarianism (where elections are purely façade) and from flawed democracies (where violations are limited).",
    },
    {
      name: "Linkage vs. leverage",
      definition:
        "Two distinct external mechanisms shaping regime outcomes. Leverage is the vulnerability of a government to Western pressure (diplomatic, economic, financial). Linkage is the density of a country's ties to the West — trade, investment, civil society, diaspora, tourism, media. Levitsky and Way argue that linkage is more powerful than leverage: deep embeddedness in Western networks raises the societal and elite costs of authoritarianism even when governments are formally resistant to pressure.",
    },
    {
      name: "The organizational power of incumbents",
      definition:
        "The capacity of ruling parties or leaders to deploy state resources, party organization, and clientelistic networks against opposition. High organizational power allows incumbents to overwhelm even well-organized oppositions through resource advantages. Low organizational power — typical of personalistic or patrimonial regimes — means incumbents depend more on coercion and electoral fraud, which are costlier and less reliable.",
    },
  ],

  casesAndExamples: [
    {
      country: "Russia (Yeltsin era, 1991–1999)",
      description:
        "Post-Soviet Russia began as a competitive authoritarian regime under Yeltsin: elections were held, opposition was tolerated, but state media, oligarch financing, and administrative resources were deployed heavily for incumbents. The 1996 election — in which a deeply unpopular Yeltsin won through media saturation and oligarch support — is the paradigm case. Putin subsequently consolidated the regime toward full authoritarianism by eliminating the competitive elements.",
    },
    {
      country: "Ukraine (1994–2004)",
      description:
        "Ukraine under Kuchma is the authors' paradigm case of competitive authoritarianism that eventually democratized. Despite systematic manipulation, opposition survived and organized; Western linkage provided resources and pressure; and the Orange Revolution of 2004 produced a democratic transition. Ukraine illustrates the mechanism by which high Western linkage can enable democratization even against determined authoritarian incumbents.",
    },
    {
      country: "Zimbabwe",
      description:
        "Zimbabwe under Mugabe began as competitive authoritarian (elections were held, ZANU-PF manipulated but did not fully close the field) and shifted toward full authoritarianism in the 2000s as economic crisis, land redistribution, and opposition strength pushed the regime toward more extreme repression. Low Western linkage meant external pressure was limited; the regime survived by narrowing the coalition and intensifying coercion.",
    },
  ],

  paradigms: [
    "Comparative Politics",
    "Hybrid Regimes",
    "Democratic Theory",
    "Authoritarianism Studies",
    "International Influences on Democracy",
  ],
};

export default competitiveAuthoritarianism;
