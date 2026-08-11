export type ProjectType = 
  | 'Product Strategy'
  | 'AI Product'
  | 'Consumer Product'
  | '0→1 Product'
  | 'Experimentation'
  | 'Technical PM';

export type PMCompetency =
  | 'User Research'
  | 'Problem Framing'
  | 'Prioritization'
  | 'Product Strategy'
  | 'AI Product Thinking'
  | 'Experiment Design'
  | 'Metrics & Analytics'
  | 'Roadmapping'
  | 'Technical Execution'
  | 'Customer Discovery'
  | 'Jobs To Be Done'
  | 'Product Vision'
  | 'Competitive Analysis'
  | 'Feature Prioritization';

export type ProjectStatus = 
  | 'Portfolio Project'
  | 'Speculative Case Study'
  | 'Coded Product'
  | 'Concept';

export interface ProjectData {
  // Basic Info
  slug: string;
  name: string;
  tagline: string; // One-line product problem
  
  // PM Classification
  type: ProjectType;
  status: ProjectStatus;
  
  // PM Competencies Demonstrated
  competencies: PMCompetency[];
  
  // Case Study Preview
  keyInsight: string; // "What I decided" or "The interesting part"
  
  // Technical Context (optional)
  technicalContext?: string; // How technical background helped
  
  // Visual Data (for card differentiation)
  visual?: {
    type: 'metric' | 'strategy' | 'insight' | 'experiment';
    data?: any; // Flexible for different visualizations
  };
  
  // Navigation
  cta: string;
  
  // Metadata for case study pages
  metadata?: {
    timeline?: string;
    team?: string;
    industry?: string;
    featured?: boolean;
  };
}

export const projects: ProjectData[] = [
  {
    slug: 'linkedin-job-navigator',
    name: 'LinkedIn Job Navigator',
    tagline: "Early-career job seekers can't filter signal from noise.",
    type: 'Consumer Product',
    status: 'Portfolio Project',
    competencies: [
      'User Research',
      'Problem Framing',
      'Product Strategy',
      'Prioritization',
    ],
    keyInsight: "Decided to focus on relevance over volume — helping users see fewer, better-fit roles instead of thousands of irrelevant listings.",
    technicalContext: 'Evaluated recommendation system feasibility and MVP complexity',
    visual: {
      type: 'strategy',
      data: {
        label: 'Strategic Tradeoff',
        choice: 'Relevance over Volume'
      }
    },
    cta: 'Read the case study →',
    metadata: {
      timeline: '3 weeks',
      industry: 'Consumer Tech',
      featured: true,
    }
  },
  {
    slug: 'notion-ai-foresight',
    name: 'Notion AI Foresight',
    tagline: 'Notion AI helps you write about work, but cannot tell if it is on track.',
    type: 'AI Product',
    status: 'Speculative Case Study',
    competencies: [
      'Product Strategy',
      'AI Product Thinking',
      'Competitive Analysis',
      'Prioritization',
    ],
    keyInsight: "Notion's advantage isn't out-integrating competitors—it's reasoning over content it already owns to surface delivery risk before it becomes a crisis.",
    technicalContext: 'Designed cross-object reasoning architecture; understood when AI should assist vs. act autonomously',
    visual: {
      type: 'strategy',
      data: {
        label: 'Strategic Bet',
        from: 'Writing Assistant',
        to: 'Delivery Foresight'
      }
    },
    cta: 'Read the case study →',
    metadata: {
      timeline: 'Full PRD & rollout strategy',
      industry: 'Enterprise SaaS / AI',
      featured: true,
    }
  },
  {
    slug: 'notion-ai',
    name: 'Notion AI — AI Operating System',
    tagline: 'Current AI tools feel like features, not a coherent system.',
    type: 'AI Product',
    status: 'Speculative Case Study',
    competencies: [
      'Product Vision',
      'AI Product Thinking',
      'Competitive Analysis',
      'Product Strategy',
    ],
    keyInsight: "Explored what Notion's AI could become if it prioritized connecting knowledge over generating text.",
    technicalContext: 'Applied AI/ML understanding to differentiate RAG from completion models',
    visual: {
      type: 'strategy',
      data: {
        label: 'Vision Shift',
        from: 'AI Writer',
        to: 'AI Operating System'
      }
    },
    cta: 'Explore the product thinking →',
    metadata: {
      timeline: '2 weeks',
      industry: 'Productivity / AI',
    }
  },
  {
    slug: 'feedbacklens',
    name: 'FeedbackLens',
    tagline: "Product teams drown in feedback but can't find patterns.",
    type: 'Technical PM',
    status: 'Coded Product',
    competencies: [
      'Customer Discovery',
      'Technical Execution',
      'Problem Framing',
      'AI Product Thinking',
    ],
    keyInsight: "Built an NLP-powered tool that groups feedback by theme instead of forcing PMs to read everything manually.",
    technicalContext: 'Prototyped NLP pipeline to validate product value before full build',
    visual: {
      type: 'insight',
      data: {
        label: 'User Feedback',
        stat: '500+ pieces → 12 themes',
        description: 'Pattern detection at scale'
      }
    },
    cta: 'See the product decisions →',
    metadata: {
      timeline: '6 weeks',
      industry: 'B2B SaaS',
    }
  },
  {
    slug: 'ai-experiment-hub',
    name: 'AI Experiment Hub',
    tagline: "Teams run A/B tests but don't understand what actually moved metrics.",
    type: 'Experimentation',
    status: 'Concept',
    competencies: [
      'Experiment Design',
      'Metrics & Analytics',
      'Product Strategy',
      'Technical Execution',
    ],
    keyInsight: "Designed an experimentation framework that connects test results to product decisions, not just statistical significance.",
    technicalContext: 'Scoped MVP to ship in weeks by understanding what is technically simple vs. complex',
    visual: {
      type: 'experiment',
      data: {
        label: 'Test Structure',
        stat: 'Hypothesis → Metric → Decision',
        description: 'Product-led experimentation'
      }
    },
    cta: 'Read the case study →',
    metadata: {
      timeline: '4 weeks',
      industry: 'Analytics / Growth',
    }
  },
];
