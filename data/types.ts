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
  status: "live" | "coming-soon";
}
