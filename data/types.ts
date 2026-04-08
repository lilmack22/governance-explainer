// ─── Core data types ──────────────────────────────────────────────────────────

export type NodeType = "upstream" | "mechanism" | "outcome" | "critique";

export interface CausalNode {
  id: string;
  label: string;
  shortLabel?: string;
  nodeType: NodeType;
  conceptId: string;
  description: string;
  position: { x: number; y: number };
  year?: string;
}

export interface CausalEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  edgeType?: "main" | "critique";
}

export interface Scholar {
  name: string;
  work?: string;
  year?: number;
  textSlug?: string;  // links to /theory/texts/[slug]
}

export interface TextAuthor {
  name: string;
  title: string;           // academic position / affiliation
  institution: string;
  bio: string;             // 2–3 sentence intellectual bio
  photoAlt?: string;
}

export interface CoreArgument {
  heading: string;
  body: string;
}

export interface KeyConceptEntry {
  name: string;
  definition: string;
}

export interface CaseExample {
  country: string;
  description: string;
}

export interface TextEntry {
  slug: string;
  title: string;
  shortTitle: string;
  authors: TextAuthor[];
  year: number;
  publisher: string;
  coverImage?: string;     // path relative to /public, e.g. /book-covers/foo.jpg
  overview: string;        // 2–3 paragraph summary
  coreArguments: CoreArgument[];
  keyConcepts: KeyConceptEntry[];
  casesAndExamples: CaseExample[];
  paradigms: string[];     // e.g. ["Selectorate Theory", "Political Economy"]
}

export interface ConceptDrillDown {
  id: string;
  name: string;
  tagline: string;
  definition: string;
  scholars: Scholar[];
  traditions: string[];
  caseApplication: string;
  critiques: string[];
  relatedConcepts: string[];
  worldBankRelevance?: string;
}

export interface TimelineEvent {
  year: number;
  label: string;
  description: string;
  type: "crisis" | "transition" | "reform" | "outcome" | "tension";
}

export interface Indicator {
  id: string;
  name: string;
  valueBefore: string;
  valueAfter: string;
  beforeLabel: string;
  afterLabel: string;
  trend: "up" | "down";
  note?: string;
}

export interface OperationalTakeaway {
  id: string;
  heading: string;
  body: string;
}

export interface CostItem {
  id: string;
  heading: string;
  body: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  country: string;
  region: string;
  flag: string;
  isoCode: string;          // ISO 3166-1 alpha-3
  isoNumeric: string;       // for map matching
  coordinates: [number, number]; // [lng, lat] for map centering
  transformationHeadline: string;
  transformationSubtext: string;
  puzzle: string;
  causalQuestion: string;
  timeline: TimelineEvent[];
  indicators: Indicator[];
  causalNodes: CausalNode[];
  causalEdges: CausalEdge[];
  operationalTakeaways: OperationalTakeaway[];
  costs?: CostItem[];
  status: "live" | "coming-soon";
}
