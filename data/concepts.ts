import type { ConceptDrillDown } from "./types";

const concepts: Record<string, ConceptDrillDown> = {
  "political-settlement": {
    id: "political-settlement",
    name: "Political Settlement",
    tagline: "Who holds power, and on what terms?",
    definition:
      "A political settlement is an agreement — often implicit and contested — among a society's most powerful actors about the distribution of power, resources, and status. It defines the basic rules of the game that make an order sustainable or unstable.",
    scholars: [
      { name: "Mushtaq Khan", work: "Political Settlements and the Governance of Growth-Enhancing Institutions", year: 2010 },
      { name: "Alina Rocha Menocal", work: "Understanding State-Building from a Political Economy Perspective", year: 2011 },
      { name: "Tim Kelsall", work: "Developmental Patrimonialism", year: 2013 },
      { name: "Lant Pritchett, Michael Woolcock & Matt Andrews", work: "Looking Like a State", year: 2013 },
    ],
    traditions: ["New Institutional Economics", "Political Economy of Development", "Comparative Politics"],
    caseApplication:
      "Rwanda's post-genocide order rests on a settlement forged by the RPF's military victory in 1994. The ruling coalition — dominated by Kagame and a tight group of returning Tutsi refugees — established clear dominance, incorporated symbolic Hutu representation, and oriented state resources toward development delivery. Unlike many post-conflict settlements, this one was not negotiated between equals: it was imposed by a victorious armed group. Its strength lies in its coherence and the elite's shared interest in legitimacy through visible results. Its fragility lies in the absence of a successor mechanism and the exclusion of genuine opposition.",
    critiques: [
      "The framework says little about who gets left out — it centers elite interests by design.",
      "It can normalize repressive stability: a 'strong settlement' may simply mean strong repression.",
      "It is often post-hoc: identified after the fact rather than useful for prediction.",
      "It underspecifies the role of ideology, ideas, and historical memory in shaping settlements.",
    ],
    relatedConcepts: ["elite-bargain", "state-capacity", "authoritarian-development"],
    worldBankRelevance:
      "World Bank teams often encounter settlement dynamics when reforms are blocked or adopted selectively. Understanding who benefits from the status quo helps explain why technically sound reforms fail.",
  },

  "state-capacity": {
    id: "state-capacity",
    name: "State Capacity",
    tagline: "Can the state actually do what it says it will do?",
    definition:
      "State capacity refers to the ability of state institutions to make and implement decisions, extract revenue, maintain a monopoly on force, and deliver services. It encompasses bureaucratic competence, territorial reach, fiscal strength, and legal-administrative coherence.",
    scholars: [
      { name: "Max Weber", work: "Economy and Society", year: 1922 },
      { name: "Theda Skocpol", work: "Bringing the State Back In", year: 1985 },
      { name: "Peter Evans", work: "Embedded Autonomy", year: 1995 },
      { name: "Francis Fukuyama", work: "State-Building", year: 2004 },
      { name: "Tim Besley & Torsten Persson", work: "Pillars of Prosperity", year: 2011 },
    ],
    traditions: ["Historical Institutionalism", "Comparative Political Economy", "Development Economics"],
    caseApplication:
      "Rwanda made deliberate investments in state capacity after 1994: restoring the civil service, professionalizing the police and military, decentralizing administration with strong accountability (the Imihigo performance contracting system), and building data systems that track service delivery. The result is a state unusually capable by sub-Saharan standards — able to collect taxes, vaccinate children, and track development targets. This capacity was built from near-zero after genocide destroyed the previous civil service. Crucially, it was built in a politically closed environment, raising questions about whether capacity and accountability can develop independently.",
    critiques: [
      "Capacity without accountability enables authoritarian control, not just service delivery.",
      "Top-down administrative capacity can crowd out local institutions and informal governance.",
      "Donors often fund capacity in ways that create donor-dependent systems rather than self-sustaining ones.",
      "Measurement bias: capacity is often measured by outputs (vaccines delivered) rather than responsiveness to citizens.",
    ],
    relatedConcepts: ["political-settlement", "developmental-state", "elite-bargain"],
    worldBankRelevance:
      "The Bank's Public Sector work directly tries to build state capacity — but without attention to political settlement, technical capacity reforms often fail to stick or get captured.",
  },

  "elite-bargain": {
    id: "elite-bargain",
    name: "Elite Bargain",
    tagline: "Development is often the by-product of elite deals.",
    definition:
      "An elite bargain is a negotiated arrangement among a society's most powerful actors — politicians, military figures, business elites, ethnic or regional leaders — about how power and resources will be shared. These bargains determine who cooperates, who is bought off, and who is excluded.",
    scholars: [
      { name: "Douglass North, John Wallis & Barry Weingast", work: "Violence and Social Orders", year: 2009 },
      { name: "Stefan Lindemann", work: "Inclusive Elite Bargains and the Dilemma of Unproductive Peace", year: 2008 },
      { name: "Alina Rocha Menocal", work: "State Building for Peace", year: 2011 },
      { name: "Mushtaq Khan", work: "Political Settlements and the Governance of Growth-Enhancing Institutions", year: 2010 },
    ],
    traditions: ["New Institutional Economics", "Peace and Conflict Studies", "Comparative Politics"],
    caseApplication:
      "The RPF's post-genocide bargain was asymmetric: military victors offered symbolic power-sharing — a Hutu president (Pasteur Bizimungu until 2000), a multi-ethnic facade cabinet — while maintaining actual control of security, intelligence, and economic policy within the Tutsi-dominated RPF inner circle. This arrangement bought domestic stability and signaled reconciliation to donors without genuinely diffusing power. The bargain worked because the RPF had overwhelming coercive advantage and because donor inflows gave all elites positive-sum gains from peace.",
    critiques: [
      "Focuses too narrowly on elites and ignores mass politics, civil society, and popular legitimacy.",
      "Treats violence and exclusion as instruments rather than as moral concerns.",
      "The concept of 'elite' is poorly defined — who counts?",
      "Elite bargains that exclude key groups often produce short-term peace and long-term instability.",
    ],
    relatedConcepts: ["political-settlement", "ethnic-power-relations", "authoritarian-development"],
  },

  "developmental-state": {
    id: "developmental-state",
    name: "Developmental State",
    tagline: "When the state leads economic transformation, not just enables it.",
    definition:
      "The developmental state is a state that actively and strategically directs economic transformation through industrial policy, public investment, coordination of private actors, and protection of emerging industries — backed by a competent, insulated bureaucracy with a mandate to promote growth.",
    scholars: [
      { name: "Chalmers Johnson", work: "MITI and the Japanese Miracle", year: 1982 },
      { name: "Alice Amsden", work: "Asia's Next Giant: South Korea", year: 1989 },
      { name: "Peter Evans", work: "Embedded Autonomy", year: 1995 },
      { name: "Meles Zenawi", work: "African Development: Dead Ends and New Beginnings", year: 2012 },
      { name: "Thandika Mkandawire", work: "Thinking About Developmental States in Africa", year: 2001 },
    ],
    traditions: ["Comparative Political Economy", "Development Economics", "East Asian Studies"],
    caseApplication:
      "Rwanda explicitly modeled itself on East Asian developmental states. Kagame read about Singapore, Korea, and Japan and modeled Vision 2020/2050 on their planning approaches. The government invested in strategic sectors: ICT (Kigali Innovation City), tourism (Gorilla permits, Conference Center), regional trade (joining EAC, building logistics infrastructure). The Rwanda Development Board served as the single-window investment facilitation agency. The state did not merely regulate — it promoted, invested, and sometimes competed. Whether this constitutes a genuine developmental state or a 'developmental authoritarian' hybrid is debated.",
    critiques: [
      "Most attempts to build developmental states fail — the East Asian examples may be exceptional, not replicable.",
      "The model may presuppose levels of institutional quality that African states do not yet have.",
      "Industrial policy requires accurate information and freedom from capture — both rare in most contexts.",
      "Developmental states may require authoritarianism to insulate bureaucrats from political pressure.",
    ],
    relatedConcepts: ["state-capacity", "political-settlement", "authoritarian-development"],
    worldBankRelevance:
      "The Bank has historically been skeptical of industrial policy but increasingly engages with strategic public investment. The developmental state literature challenges the view that states should only 'enable' markets.",
  },

  "authoritarian-development": {
    id: "authoritarian-development",
    name: "Authoritarian Development",
    tagline: "Growth without democracy: the uncomfortable question.",
    definition:
      "Authoritarian development refers to the empirical phenomenon where autocratic or semi-autocratic regimes achieve rapid economic and social development. It challenges the assumption that democracy is a precondition for development — while also raising fundamental questions about what 'development' means.",
    scholars: [
      { name: "Daron Acemoglu & James Robinson", work: "Economic Origins of Dictatorship and Democracy", year: 2006 },
      { name: "Bruce Bueno de Mesquita et al.", work: "The Logic of Political Survival", year: 2003 },
      { name: "Adam Przeworski et al.", work: "Democracy and Development", year: 2000 },
      { name: "Dan Slater", work: "Ordering Power", year: 2010 },
    ],
    traditions: ["Comparative Politics", "Political Economy", "Development Studies"],
    caseApplication:
      "Rwanda's development record under Kagame is the central puzzle of authoritarian development in Africa. GDP per capita has grown roughly 10x since 1994. Life expectancy has doubled. Maternal mortality has plummeted. Women hold 61% of parliamentary seats. Yet Rwanda ranks poorly on press freedom, political pluralism, and civil liberties. Opposition figures have been jailed or exiled. Kagame won re-election with 99% of votes. This raises hard questions: Are the development gains sustainable without political liberalization? Who is excluded from the growth story? What happens after Kagame?",
    critiques: [
      "Most autocracies don't develop — Rwanda may be an exceptional case, not a model.",
      "Authoritarian development statistics may obscure inequality, exclusion, and measurement manipulation.",
      "The model is not replicable: it depends on specific leaders, coalitions, and historical moments.",
      "Long-run sustainability requires political transition — which Rwanda has not demonstrated.",
    ],
    relatedConcepts: ["political-settlement", "developmental-state", "elite-bargain"],
    worldBankRelevance:
      "The Bank works with governments of all regime types. Understanding authoritarian development helps teams calibrate what is achievable under different political conditions — and what risks accompany apparently successful partnerships.",
  },

  "ethnic-power-relations": {
    id: "ethnic-power-relations",
    name: "Ethnic Power Relations",
    tagline: "Who's in, who's out — and how does that shape the state?",
    definition:
      "Ethnic Power Relations (EPR) theory examines how ethnic group membership shapes access to state power, patronage, and security. It argues that whether ethnic groups are included in or excluded from executive power strongly predicts conflict risk and state stability.",
    scholars: [
      { name: "Lars-Erik Cederman, Kristian Gleditsch & Halvard Buhaug", work: "Inequality, Grievances, and Civil War", year: 2013 },
      { name: "Andreas Wimmer", work: "Waves of War", year: 2013 },
      { name: "Donald Horowitz", work: "Ethnic Groups in Conflict", year: 1985 },
      { name: "Arend Lijphart", work: "Democracy in Plural Societies", year: 1977 },
    ],
    traditions: ["Comparative Politics", "Conflict Studies", "Ethnicity and Nationalism"],
    caseApplication:
      "Post-genocide Rwanda presents a paradox: the government officially abolished ethnic classification — ID cards no longer list ethnicity; 'Tutsi' and 'Hutu' cannot be used in political discourse. Yet the RPF core leadership is predominantly from a specific ethnic background, the security apparatus reflects particular group loyalties, and informal ethnic awareness remains pervasive. Rwanda has attempted a top-down de-ethnicization of politics while managing informal ethnic power dynamics carefully. Whether this represents genuine transformation or managed exclusion is deeply contested — particularly among Rwandan diaspora communities and critics.",
    critiques: [
      "De-ethnicization from above can suppress legitimate grievances rather than resolve them.",
      "Formal ethnic inclusion may mask informal exclusion from real power.",
      "The approach may not transfer to societies with different historical ethnic configurations.",
      "Suppressing ethnic identity as a political category can criminalize legitimate cultural expression.",
    ],
    relatedConcepts: ["elite-bargain", "political-settlement", "authoritarian-development"],
    worldBankRelevance:
      "The Bank's Fragility, Conflict, and Violence (FCV) teams increasingly engage with ethnic dimensions of exclusion. Understanding how ethnic composition shapes political settlements helps predict where reforms will face resistance.",
  },
};

export default concepts;

export function getConcept(id: string): ConceptDrillDown | undefined {
  return concepts[id];
}

export function getAllConcepts(): ConceptDrillDown[] {
  return Object.values(concepts);
}
