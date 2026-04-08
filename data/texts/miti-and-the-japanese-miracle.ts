import type { TextEntry } from "@/data/types";

const mitiAndTheJapaneseMiracle: TextEntry = {
  slug: "miti-and-the-japanese-miracle",
  title: "MITI and the Japanese Miracle: The Growth of Industrial Policy, 1925–1975",
  shortTitle: "MITI and the Japanese Miracle",
  year: 1982,
  publisher: "Stanford University Press",

  authors: [
    {
      name: "Chalmers Johnson",
      title: "Professor Emeritus of Pacific International Relations",
      institution: "University of California, San Diego",
      bio:
        "Chalmers Johnson was a political scientist at UC San Diego whose career focused on Japanese politics, East Asian development, and US foreign policy in Asia. MITI and the Japanese Miracle (1982) is his most influential work and is widely credited with founding the 'developmental state' literature. Johnson argued that Japan's postwar economic miracle was not a product of free markets but of sophisticated state-led industrial policy administered by a capable, insulated bureaucracy. His later work became increasingly critical of US militarism in Asia.",
    },
  ],

  overview:
    "MITI and the Japanese Miracle is the founding text of developmental state theory. Written at a moment when Japan's rapid industrialization was transforming the global economy and puzzling Western economists who expected market-conforming policies to explain it, Johnson argued that Japan's success was the product of deliberate, sustained industrial policy administered by the Ministry of International Trade and Industry (MITI). " +
    "Johnson's MITI was not a command economy bureaucracy directing firms by fiat. It was a 'pilot agency' that set strategic industrial priorities, allocated credit toward targeted sectors, protected infant industries behind tariff walls, facilitated technology transfer, and managed the process of market competition to prevent destructive excess. MITI worked through 'administrative guidance' — informal consultation and coordination with firms rather than legal mandates — made effective by MITI's control over licensing, credit, and foreign exchange. " +
    "The book distinguishes between the 'plan rational' East Asian state and the 'market rational' Anglo-American state. Market rational states set the rules of the game and let markets allocate; plan rational states actively shape industrial structure. Johnson argues that Japan's plan rational state produced the 'miracle' growth rates of 1950–1975, and that Western economists who attributed Japanese growth to market conformity were misreading the evidence. The book launched a generation of comparative political economy research on the conditions under which industrial policy succeeds.",

  coreArguments: [
    {
      heading: "Japan's growth was state-led, not market-driven",
      body:
        "MITI actively shaped Japan's industrial structure through credit allocation, import protection, technology licensing, and administrative guidance. The postwar industrial champions — steel, shipbuilding, electronics, automobiles — were not spontaneous market outcomes but the product of deliberate nurturing by a capable bureaucracy. Western accounts that attributed Japanese success to comparative advantage or free markets misread the causal mechanism.",
    },
    {
      heading: "The 'plan rational' state is categorically different from a command economy",
      body:
        "Johnson distinguishes plan rational states from socialist command economies: MITI did not own firms or dictate production targets. It worked through markets, using credit, licensing, and information to shape the investment decisions of private firms. The state set strategic objectives (move up the value chain, develop heavy industry, then electronics) and used market mechanisms to achieve them. This is neither laissez-faire nor central planning — it is a third type.",
    },
    {
      heading: "The 'pilot agency' requires insulation, competence, and authority",
      body:
        "MITI worked because it had three things: meritocratically recruited bureaucrats with long careers and genuine expertise; political insulation from business capture (the iron triangle that plagued other agencies); and authority over instruments (credit, foreign exchange, licenses) that firms needed. Remove any of these and the model fails. Most attempts to replicate MITI fail not because the idea is wrong but because these conditions are not reproduced.",
    },
  ],

  keyConcepts: [
    {
      name: "The developmental state",
      definition:
        "A state that places economic development at the top of its political agenda and deploys industrial policy to achieve it. Johnson's developmental state is characterized by: a plan rational orientation (shaping markets toward developmental objectives); a pilot agency with genuine authority; meritocratic bureaucracy with developmental mission; and collaboration rather than command in its relationship with the private sector.",
    },
    {
      name: "Administrative guidance (gyosei shido)",
      definition:
        "Japan's primary industrial policy instrument: informal, non-binding direction by MITI to firms about investment levels, capacity, technology choices, and pricing. Firms complied not because they were legally required to but because MITI controlled resources they needed (licenses, foreign exchange, subsidized credit). This informal but effective coordination was the operational core of Japanese industrial policy.",
    },
    {
      name: "The pilot agency",
      definition:
        "Johnson's term for the central coordinating agency of the developmental state. The pilot agency is distinct from regulatory agencies (which set rules) and sectoral ministries (which serve constituent industries). It sets national industrial priorities, coordinates across sectors, and manages the long-run trajectory of industrial development. MITI is the archetype; South Korea's Economic Planning Board and EPB are close equivalents.",
    },
  ],

  casesAndExamples: [
    {
      country: "Japan, 1950–1975",
      description:
        "MITI coordinated Japan's sequential industrial upgrading: first heavy industry (steel, chemicals), then intermediate goods (machine tools, electronics components), then consumer durables (automobiles, consumer electronics). Each sector was supported through its infant period with credit, protection, and technology licensing, then exposed to competition once competitive. The result was the world's fastest sustained growth over a twenty-five year period.",
    },
    {
      country: "South Korea",
      description:
        "South Korea's Economic Planning Board and the heavy-chemical industrialization drive of the 1970s are the closest approximation to the MITI model outside Japan. Korea went further than Japan in direct state ownership (POSCO, KEPCO) and more openly coercive guidance, but the basic logic — a capable pilot agency directing credit toward strategic sectors — closely parallels Johnson's account.",
    },
  ],

  paradigms: [
    "Developmental State Theory",
    "Comparative Political Economy",
    "East Asian Development",
    "Industrial Policy",
    "Political Economy of Growth",
  ],
};

export default mitiAndTheJapaneseMiracle;
