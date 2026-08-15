export interface CaseStudyOverview {
  product: string;
  myRole: string;
  projectType: string;
  timeline: string;
  skillsDemonstrated: string[];
  productThesis: string;
}

export interface Problem {
  who: string;
  what: string;
  whyItMatters: string;
  currentExperience: string;
}

export interface Evidence {
  type: 'research' | 'data' | 'competitive' | 'observation' | 'assumption';
  title: string;
  description: string;
  source?: string;
  isReal: boolean; // Flag to indicate if this is real data
}

export interface ProductInsight {
  insight: string;
  impact: string;
}

export interface Goals {
  product: string;
  user: string;
  business: string;
  leadingIndicators: string[];
  guardrailMetrics?: string[];
  note?: string; // e.g., "Proposed metrics - not actual results"
}

export interface Constraint {
  category: 'technical' | 'time' | 'resource' | 'platform' | 'adoption' | 'business';
  description: string;
}

export interface Option {
  name: string;
  description: string;
  solves: string;
  tradeoffs: string[];
  risks: string[];
  chosen?: boolean;
}

export interface Prioritization {
  framework: string; // e.g., "RICE", "Impact/Effort"
  explanation: string;
  visualization?: {
    type: 'matrix' | 'table' | 'score';
    data: any;
  };
}

export interface Solution {
  description: string;
  keyFeatures: string[];
  userFlow?: string;
  visuals?: {
    type: 'wireframe' | 'prototype' | 'architecture' | 'flow';
    description: string;
    url?: string;
  }[];
}

export interface MVP {
  mvpFeatures: string[];
  futureIterations: string[];
  explicitlyRejected: string[];
}

export interface Experimentation {
  hypothesis: string;
  experiment: string;
  successCriteria: string[];
  expectedBehavior: string;
  rolloutApproach: string;
}

export interface Learnings {
  whatILearned: string[];
  whatSurprisedMe: string;
  whatIWouldChange: string;
  nextInvestigation: string;
}

export interface CaseStudyContent {
  overview: CaseStudyOverview;
  problem: Problem;
  evidence: Evidence[];
  insight: ProductInsight;
  goals: Goals;
  constraints: Constraint[];
  optionsConsidered: Option[];
  prioritization: Prioritization;
  solution: Solution;
  mvp: MVP;
  experimentation?: Experimentation;
  learnings: Learnings;
  pmReflection: string;
}

export interface FullCaseStudy {
  // Basic project info (from projects.ts)
  slug: string;
  name: string;
  tagline: string;
  type: string;
  status: string;
  notionLink?: string; // Optional link to full case study in Notion
  
  // Full case study content
  caseStudy: CaseStudyContent;
}
