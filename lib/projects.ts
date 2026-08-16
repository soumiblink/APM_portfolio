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
  
  // Links for coded products
  githubLink?: string;
  liveLink?: string;
  
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
    slug: 'feedbacklens',
    name: 'FeedbackLens',
    tagline: "Product teams drown in feedback but can't find patterns.",
    type: 'Technical PM',
    status: 'Coded Product',
    githubLink: 'https://github.com/soumiblink/FeedbackLens',
    liveLink: 'https://feedbacklens-theta.vercel.app/',
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
    slug: 'replit-pricing-diagnostic',
    name: 'Pricing in the Dark',
    tagline: "Replit's AI Agent billed users $1K/week with no way to predict costs before tasks ran.",
    type: 'Product Strategy',
    status: 'Portfolio Project',
    competencies: [
      'Problem Framing',
      'Product Strategy',
      'Competitive Analysis',
      'Prioritization',
      'Metrics & Analytics',
    ],
    keyInsight: "Diagnosed that Replit didn't lose users because AI is expensive — they lost trust because cost was unknowable in advance and disconnected from whether tasks succeeded.",
    technicalContext: 'Understood the engineering constraint: Agent 3\'s sub-agent fan-out makes pre-task estimation genuinely harder than competitors\' simpler token counts',
    visual: {
      type: 'metric',
      data: {
        label: 'Cost Spike',
        stat: '5-20x overnight',
        description: 'From $180/mo → $1K/week'
      }
    },
    cta: 'Read the diagnostic →',
    metadata: {
      timeline: 'Growth & Retention Case Study',
      industry: 'Developer Tools / SaaS',
      featured: true,
    }
  },
];
