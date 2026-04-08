import type { TextEntry } from "@/data/types";

const rationalistExplanationsForWar: TextEntry = {
  slug: "rationalist-explanations-for-war",
  title: "Rationalist Explanations for War",
  shortTitle: "Rationalist Explanations for War",
  year: 1995,
  publisher: "International Organization, Vol. 49, No. 3",
  coverImage: "/book-covers/rationalist-explanations-for-war.jpg",

  authors: [
    {
      name: "James D. Fearon",
      title: "Theodore and Frances Geballe Professor in the School of Humanities and Sciences",
      institution: "Stanford University",
      bio:
        "James Fearon is one of the most influential scholars in international relations and conflict studies. His career at Stanford has focused on the formal logic of conflict — why rational actors fight, why civil wars last so long, and what determines post-conflict outcomes. This 1995 paper in International Organization is his most cited work and is widely considered one of the foundational texts of modern international relations theory. He has since extended the framework to civil wars, ethnic conflict, and post-conflict reconstruction.",
    },
  ],

  overview:
    "This 1995 journal article in International Organization poses a puzzle that sounds simple but has profound implications: if war is costly for both sides — people die, economies are disrupted, resources are consumed — why don't parties always negotiate a settlement that leaves them both better off than fighting? The paper's answer identifies three fundamental reasons why rational actors fail to reach negotiated settlements: private information with incentives to misrepresent it, commitment problems, and issue indivisibilities. " +
    "The paper is methodologically significant for introducing a rigorous rationalist framework into the study of war at a time when much conflict research relied on psychological, cultural, or constructivist explanations. Fearon's argument is not that wars are caused by rationality — rather, war represents a failure of rationality, and identifying the specific mechanisms behind that failure points toward what interventions might help. " +
    "The commitment problem argument has been especially influential. It explains why wars can continue even when both parties know the eventual outcome, why peace agreements are hard to sustain, and why states cannot simply sign treaties and trust them. This insight applies directly to civil war termination, ethnic conflict management, and international dispute resolution — and has shaped decades of subsequent research and policy thinking.",

  coreArguments: [
    {
      heading: "War is inefficient — there is almost always a negotiated settlement both sides would prefer to fighting",
      body:
        "The paper starts from an axiomatic point: war is costly and risky for both parties. Given any outcome that could be achieved by fighting, there exists some negotiated deal that both parties would prefer — because negotiation avoids the costs and risks of combat. This means pure rationality predicts no war. So when wars happen, something must be preventing parties from reaching those mutually beneficial deals. The paper identifies three main mechanisms behind that failure.",
    },
    {
      heading: "Private information creates incentives to bluff, preventing credible negotiation",
      body:
        "States and armed groups have private information about their military capacity, resolve, and costs. But they have strong incentives to exaggerate their strength during bargaining to extract better terms. Because both sides know the other will bluff, statements about strength are not credible. This generates a bargaining range that parties cannot reliably identify from outside, increasing the risk that negotiations collapse even when a deal is objectively available. Wars fought under these conditions are, in this sense, costly mistakes — but predictable ones given the information structure.",
    },
    {
      heading: "Commitment problems make peace impossible even when both sides prefer it",
      body:
        "The second mechanism is the commitment problem: even if both parties would prefer a negotiated settlement to continued fighting, they may be unable to credibly commit to honoring that settlement. The classic case is a rising power: if one side is gaining strength over time, the other side knows that a deal signed today will be renegotiated by force tomorrow once the rising power is strong enough. Anticipating this, the declining side may prefer to fight now rather than accept a deal it cannot trust. This is why states sometimes attack 'preventively' — not because they want war, but because they cannot credibly commit to peaceful coexistence.",
    },
    {
      heading: "Some issues are genuinely indivisible, making compromise logically impossible",
      body:
        "The third mechanism is issue indivisibility: some things cannot be split. Capital cities, sacred sites, single rivers — these cannot be shared the way money can. When the disputed issue is indivisible and both sides insist on it, no compromise exists that both parties prefer to war. This mechanism is less important than the first two in Fearon's framework, but it explains a class of conflicts (especially involving territory with symbolic significance) that the other two mechanisms do not fully capture.",
    },
    {
      heading: "Understanding why wars happen requires understanding which mechanism is at work",
      body:
        "The paper's policy contribution is to frame war prevention as a problem of identifying and addressing the specific mechanism at work in any given conflict. Commitment problems call for international guarantors and enforcement mechanisms. Information problems call for monitoring, transparency, and face-saving mechanisms. Issue indivisibilities call for either creative compromise (shared sovereignty, functional division) or externally imposed division. Generic 'negotiation' or 'dialogue' advice without diagnosis of the underlying mechanism tends to fail.",
    },
  ],

  keyConcepts: [
    {
      name: "The bargaining model of war",
      definition:
        "The theoretical framework underpinning the paper: war occurs when two parties fail to reach a negotiated settlement they would both prefer to fighting. The model treats war as a costly failure of bargaining, not an expression of irrational passions or irreducible interests. This reframing makes the causes of war tractable — they are specific, identifiable failures of information or commitment.",
    },
    {
      name: "Commitment problem",
      definition:
        "A situation in which parties cannot credibly promise to honor a future agreement. Even if peace would benefit both sides today, one or both cannot commit not to renege once their relative position changes. Commitment problems arise whenever the future balance of power is expected to shift and enforcement mechanisms are absent. This is the most influential concept in the paper and has been extended to civil war termination, alliance formation, and post-conflict reconstruction.",
    },
    {
      name: "Private information and incentives to misrepresent",
      definition:
        "States and armed groups hold private information about their capabilities and resolve that they have strong incentives to exaggerate during bargaining. Because bluffing is rational, the other side cannot take strength claims at face value. This information asymmetry prevents parties from reliably identifying mutually beneficial settlements, increasing the risk of war.",
    },
    {
      name: "Issue indivisibility",
      definition:
        "Some issues — physical territory, symbolic sovereignty, leadership — cannot be meaningfully divided. When the object of dispute is indivisible and both parties demand it, standard bargaining compromises are unavailable. Fearon treats this as a less common mechanism than information or commitment problems, but it shapes how some conflicts are managed.",
    },
    {
      name: "Preventive war",
      definition:
        "Armed attack motivated not by current threat but by anticipated future disadvantage. If a state knows its relative power will decline, it may prefer to fight now rather than accept a deal it cannot trust the rising power to honor when conditions shift. The commitment problem makes preventive war a rational strategy even when both parties nominally prefer peace.",
    },
  ],

  casesAndExamples: [
    {
      country: "World War I",
      description:
        "Fearon's framework helps explain why the July 1914 crisis escalated to world war despite the catastrophic costs all major powers knew were coming. Germany's commitment problem (the declining position of its Austrian ally, the rising power of Russia) made a preventive war logic compelling. Private information about mobilization timelines and resolve compounded the bargaining failure.",
    },
    {
      country: "Civil war termination generally",
      description:
        "The commitment problem is especially severe in civil wars. When a rebel group signs a ceasefire and demobilizes, it becomes vulnerable to government retaliation — and vice versa. Without a credible enforcement mechanism, both sides know this and may refuse to stop fighting even when they are exhausted. This explains why civil wars last much longer than interstate wars on average, and why UN peacekeeping (providing third-party enforcement) can make ceasefires more durable.",
    },
    {
      country: "Israeli-Palestinian conflict",
      description:
        "The commitment problem framework applies directly: both sides face credibility crises. Israeli governments cannot credibly commit that any territorial concession is final and irreversible across electoral cycles; Palestinian factions cannot credibly commit to suppressing armed groups after a deal. The result is that deals technically preferred by both majorities cannot be reached because neither side can verify or enforce the other's future behavior.",
    },
    {
      country: "Korean Peninsula",
      description:
        "The armistice of 1953 ended fighting but did not resolve the commitment problem. Neither side could trust the other to honor a final settlement, and the US military presence serves partly as a commitment device — making South Korean security guarantees credible by raising the cost of North Korean attack. The conflict remains technically unresolved because no enforcement mechanism for a final settlement has been constructed.",
    },
  ],

  paradigms: [
    "Rationalist / Formal Political Theory",
    "Bargaining Theory of War",
    "International Relations Theory",
    "Conflict Studies",
  ],
};

export default rationalistExplanationsForWar;
