import type { TextEntry } from "@/data/types";

const socialOriginsOfDictatorshipAndDemocracy: TextEntry = {
  slug: "social-origins-of-dictatorship-and-democracy",
  title: "Social Origins of Dictatorship and Democracy: Lord and Peasant in the Making of the Modern World",
  shortTitle: "Social Origins of Dictatorship and Democracy",
  year: 1966,
  publisher: "Beacon Press",

  authors: [
    {
      name: "Barrington Moore Jr.",
      title: "Professor of Sociology",
      institution: "Harvard University",
      bio:
        "Barrington Moore Jr. was a historical sociologist at Harvard whose career combined rigorous comparative history with political engagement. Social Origins of Dictatorship and Democracy (1966) is his masterwork: a comparative historical sociology of modernization in England, France, the United States, China, Japan, and India that explains divergent political trajectories through class structure. The book influenced an entire generation of comparative historical sociologists, including Theda Skocpol, Charles Tilly, and many others who built on his methods while sometimes challenging his conclusions.",
    },
  ],

  overview:
    "Social Origins of Dictatorship and Democracy is a landmark of comparative historical sociology that explains why some countries became liberal democracies, others fascist dictatorships, and others communist peasant states. Moore's answer is rooted in class structure — specifically in the relationship between the landed upper class, the commercial bourgeoisie, and the peasantry during the transition to modern capitalism. " +
    "Moore traces three routes to modernity: the 'bourgeois democratic' route (England, France, United States), in which a commercially oriented bourgeoisie successfully challenged landed aristocracy and forged alliances with other classes to create representative government; the 'fascist' route (Germany, Japan), in which a weak bourgeoisie allied with landed elites against workers and peasants, producing authoritarian modernization from above; and the 'communist' route (China, Russia), in which a strong but exploited peasantry, combined with a weak and dependent bourgeoisie, produced revolutionary upheaval from below. " +
    "The book's most famous claim is encapsulated in its epigraph's spirit: 'No bourgeoisie, no democracy.' The commercial middle class is the social actor most likely to demand the legal protections and limitations on arbitrary power that underpin democratic governance. Where the bourgeoisie was weak, dependent on the state, or allied with reaction, democracy did not emerge. This structural argument has been refined and contested but remains foundational to comparative historical sociology.",

  coreArguments: [
    {
      heading: "Class structure, not culture or geography, determines political trajectories",
      body:
        "Moore argues that the relative strength of the landed aristocracy, commercial bourgeoisie, and peasantry — and the alliances formed among them during the transition to capitalism — determine whether countries develop democratic, fascist, or communist political systems. These structural factors operate through critical historical junctures (revolutions, modernization drives, agrarian transformations) that set countries on divergent paths.",
    },
    {
      heading: "The bourgeoisie is democracy's historical class",
      body:
        "Democratic institutions — rule of law, limitations on executive power, property rights protections — primarily served bourgeois interests in limiting arbitrary aristocratic power and securing commercial property. Where a strong, commercially independent bourgeoisie existed, it pushed for constitutional constraints on government. Where the bourgeoisie was weak or dependent on the state (Germany, Japan, China), it allied with authoritarian forces rather than pushing for democracy.",
    },
    {
      heading: "The peasantry determines the communist or fascist path",
      body:
        "The treatment of the peasantry during agricultural transformation is the key variable distinguishing the fascist and communist routes. Where peasants were violently uprooted or exploited by landlords backed by state power (Japan, Germany), potential revolutionary pressure was contained through repression and nationalist mobilization into fascism. Where peasants were exploited without sufficient repression and had a revolutionary tradition (China, Russia), peasant revolution produced communist transformation.",
    },
    {
      heading: "Violence and coercion are constitutive of political development",
      body:
        "Moore is unsentimental about the role of violence in creating political order. The English Civil War, the French Revolution, and the American Civil War each cleared away the political obstacles to bourgeois democracy through military force. The 'peaceful' democracies had their violence early, in their foundational transformations. Countries without such foundational violence often lacked the class restructuring that made democratic stability possible.",
    },
  ],

  keyConcepts: [
    {
      name: "Three routes to modernity",
      definition:
        "Moore's comparative framework: the 'bourgeois democratic' route (England, France, US), the 'fascist' route from above (Germany, Japan), and the 'communist' peasant revolution route (China, Russia). Each route is determined by the balance of class forces during agricultural transformation and industrialization. The routes diverge at critical historical junctures when class alliances are forged.",
    },
    {
      name: "Labor repressive agriculture",
      definition:
        "A mode of agrarian production in which landlords depend on coercion rather than market wages to secure agricultural labor. Moore argues that labor repressive agriculture — prevalent in Prussia, Japan, and the American South — produces political reaction: landlords require a strong state to maintain the coercive labor regime, making them natural allies of authoritarian politics against democratic mobilization.",
    },
    {
      name: "The agrarian transformation",
      definition:
        "The transition from feudal or peasant agriculture to commercial farming that accompanies industrialization. Moore argues this transformation is the crucial juncture: how it happens (peacefully or through violence; through capitalist markets or through landlord coercion) determines the class structure that shapes subsequent political development for generations.",
    },
  ],

  casesAndExamples: [
    {
      country: "England",
      description:
        "Moore's paradigm case of the bourgeois democratic route. The English Civil War and the Glorious Revolution cleared away the monarchical obstacles to bourgeois property rights; the enclosures completed the commercial transformation of agriculture without creating labor-repressive landed power. The resulting class structure — a commercially oriented aristocracy allied with the bourgeoisie against Crown absolutism — produced parliamentary democracy.",
    },
    {
      country: "Germany",
      description:
        "The fascist route: a weak bourgeoisie dependent on Junker landlords and the Prussian state; labor repressive agriculture that required authoritarian maintenance; and industrialization from above that created a working class without creating bourgeois democratic institutions to manage it. The result was the 'marriage of iron and rye' — the alliance of industrialists and agrarian elites against labor and democracy — that culminated in National Socialism.",
    },
    {
      country: "China",
      description:
        "The communist route: a landlord class that extracted from peasants through labor repression without a commercial transformation that could have generated a capable bourgeoisie or a market economy. The peasantry, exploited and lacking legal protection, provided the revolutionary base for communist mobilization once the Kuomintang state collapsed. Moore's account of China emphasizes the landlord-peasant relation rather than the role of the Communist Party.",
    },
  ],

  paradigms: [
    "Historical Sociology",
    "Comparative Historical Analysis",
    "Class Analysis",
    "Political Development",
    "Revolution Studies",
  ],
};

export default socialOriginsOfDictatorshipAndDemocracy;
