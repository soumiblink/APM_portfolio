export interface ProductProject {
  slug: string;
  name: string;
  tagline: string;
  type: string;
  status: string;
  githubLink: string;
  liveLink?: string;
  
  product: {
    overview: {
      product: string;
      myRole: string;
      projectType: string;
      timeline: string;
      skillsDemonstrated: string[];
      productThesis: string;
    };
    
    problem: {
      context: string;
      painPoints: string[];
      currentSolution: string;
      costOfInaction: string;
    };
    
    solution: {
      vision: string;
      coreCapabilities: string[];
      workflow: {
        stage: string;
        description: string;
        output: string;
      }[];
      differentiators: string[];
    };
    
    productDecisions: {
      decision: string;
      rationale: string;
      tradeoff?: string;
    }[];
    
    technicalHighlights: {
      category: string;
      details: string[];
    }[];
    
    prdHighlights: {
      section: string;
      keyPoints: string[];
    }[];
    
    metrics: {
      northStar: string;
      supporting: string[];
    };
    
    learnings: {
      productLearning: string[];
      technicalLearning: string[];
      whatIWouldDoDifferently: string;
    };
  };
}

export const feedbackLens: ProductProject = {
  slug: 'feedbacklens',
  name: 'FeedbackLens',
  tagline: 'Turning scattered customer feedback into decisions you can defend',
  type: 'Technical PM / Coded Product',
  status: 'Built & Documented',
  githubLink: 'https://github.com/soumiblink/FeedbackLens',
  liveLink: undefined, // Will be added later
  
  product: {
    overview: {
      product: 'FeedbackLens',
      myRole: 'Product Manager & Technical Lead',
      projectType: 'End-to-End Product Build (0 to 1)',
      timeline: 'August 2026 (12-week roadmap planned)',
      skillsDemonstrated: [
        'Product Requirements Documentation',
        'User Research & Persona Development',
        'Prioritization Framework Design (Custom Scoring Model)',
        'Technical Product Thinking',
        'Metrics & Success Criteria Definition',
        'Competitive Analysis',
        'Scope Management',
        'Full-Stack Development'
      ],
      productThesis: 'Product teams don\'t need a smarter feedback dashboard; they need less manual synthesis work between "customers said X" and "we\'re building Y, and here\'s why." FeedbackLens closes exactly that gap.'
    },
    
    problem: {
      context: 'Mid-sized B2B SaaS teams (50-500 employees) receive 200+ feedback items weekly across support tickets, reviews, interviews, and surveys. The evidence exists, but synthesizing it into defensible priorities takes 4-6 hours per week of manual work.',
      painPoints: [
        'PMs spend hours copy-pasting feedback from Zendesk, App Store, Slack into spreadsheets before any prioritization can start',
        'No shared, visible scoring method means two PMs rank the same backlog differently with no way to audit why',
        'Decision rationale lives in meeting notes or memory and is lost within two quarters',
        'Teams ship fixes but rarely validate whether complaints actually declined',
        'When a PM leaves, so does tribal knowledge of why priorities were set'
      ],
      currentSolution: 'Export from 3-4 tools → paste into spreadsheet → manually spot themes → estimate impact by gut feel → prioritize → hope you remember why in 6 months',
      costOfInaction: 'Teams default to gut-feel prioritization not because evidence doesn\'t exist, but because gathering it is slower than trusting instinct. That friction compounds: slower decisions, inconsistent prioritization, undocumented rationale, and zero feedback loop on whether shipped work actually helped.'
    },
    
    solution: {
      vision: 'FeedbackLens becomes the system of record for "why we built what we built", where the connection between customer evidence and product decisions is never more than one click away.',
      coreCapabilities: [
        'Centralized feedback repository with AI-assisted tagging (sentiment, topic, complaint/request detection)',
        'Automatic clustering of related feedback into named opportunities',
        'Transparent, formula-based opportunity scoring (no black-box ranking)',
        'Structured decision records permanently linked to evidence',
        'Roadmap planning with every item traceable to its originating decision',
        'Release validation: before/after sentiment comparison to check if shipped work helped',
        'Product health dashboard showing sentiment trends, open opportunities, and release outcomes'
      ],
      workflow: [
        {
          stage: '1. Collect',
          description: 'Import feedback from CSV/API; PII redacted before AI processing',
          output: 'Centralized feedback repository'
        },
        {
          stage: '2. Analyze',
          description: 'AI tags sentiment, topic, complaint type, confidence score',
          output: 'Structured tags on every item'
        },
        {
          stage: '3. Discover',
          description: 'Related items cluster into opportunities, ranked by transparent scoring model',
          output: 'Ranked opportunity board'
        },
        {
          stage: '4. Investigate',
          description: 'PM drills into evidence behind each score',
          output: 'Evidence review per opportunity'
        },
        {
          stage: '5. Decide',
          description: 'Log decision: status, rationale, owner, permanently linked to evidence',
          output: 'Decision record'
        },
        {
          stage: '6. Plan',
          description: 'Approved opportunities become roadmap items',
          output: 'Roadmap board entry'
        },
        {
          stage: '7. Validate',
          description: 'Compare sentiment/complaints before vs. after release',
          output: 'Release validation record'
        },
        {
          stage: '8. Monitor',
          description: 'Aggregated dashboard: sentiment trend, decisions, outcomes',
          output: 'Product health dashboard'
        }
      ],
      differentiators: [
        'Only tool that connects feedback → scoring → decision → roadmap → validation in one closed loop',
        'Transparent scoring formula (visible arithmetic, not "AI-powered insights" black box)',
        'Built-in release validation (checks if shipped work actually reduced complaints)',
        'PII redaction by default before any third-party AI processing',
        'Decision records are append-only (full history, nothing overwritten)',
        'Read-only share links for showing rationale to stakeholders without requiring login'
      ]
    },
    
    productDecisions: [
      {
        decision: 'Built a transparent, formula-based scoring model instead of pure ML ranking',
        rationale: 'Score = 0.35×Frequency + 0.30×Complaint Rate + 0.20×Sentiment + 0.15×Confidence. Simple enough to compute on a whiteboard, which means PMs can defend it in stakeholder meetings. A learned model would be marginally more accurate but impossible to explain.',
        tradeoff: 'Sacrificed some ranking precision to gain complete explainability'
      },
      {
        decision: 'Capped frequency input at 90th percentile before normalizing',
        rationale: 'Without a cap, one opportunity with 1,000 mentions would compress every other score toward zero, even if those opportunities affect real customer segments. Same principle RICE uses (Impact capped at 5).',
        tradeoff: 'Outliers still score highest (they should), but they don\'t silently erase the rest of the board'
      },
      {
        decision: 'Made PII redaction automatic, not optional',
        rationale: 'Privacy is a default, not a feature request. Every feedback item gets scrubbed before reaching the AI tagging API. Regex + NER for names, emails, phone numbers.',
        tradeoff: 'Adds processing overhead, but non-negotiable for trust'
      },
      {
        decision: 'Paired speed metric with quality counterweight',
        rationale: 'North Star is "time-to-decision," but tracking speed alone would reward fast bad decisions. Added Decision Reversal Rate (% of decisions overridden within 90 days) to prevent gaming.',
        tradeoff: 'More complex measurement, but prevents optimizing for the wrong thing'
      },
      {
        decision: 'Batch import, not real-time sync (for MVP)',
        rationale: 'Scheduled pull every 6 hours proves the core workflow without the engineering cost of webhooks and sync conflict handling. Real-time can come later if validated.',
        tradeoff: 'Not instant, but sufficient to test the hypothesis'
      },
      {
        decision: 'Manual edits survive re-clustering',
        rationale: 'When PM renames or merges opportunities, those edits live in a separate override layer. New feedback matches against existing (renamed) opportunities first before creating new clusters.',
        tradeoff: 'More complex data model, but required so manual cleanup isn\'t lost on next import'
      },
      {
        decision: 'Cut full collaboration (comments, @mentions) from MVP',
        rationale: 'Added lightweight read-only share link instead. Solves actual failure mode (showing a decision to someone without login) without the build cost of notifications and threading.',
        tradeoff: 'No async discussion in-tool, but share link covers 80% of the need'
      }
    ],
    
    technicalHighlights: [
      {
        category: 'AI/ML Integration',
        details: [
          'LLM API integration for sentiment analysis and topic extraction',
          'Confidence scoring on every AI-generated tag (flags items <50% for review)',
          'Custom clustering algorithm for grouping feedback into opportunities',
          'PII detection pipeline (regex + NER) before external API calls'
        ]
      },
      {
        category: 'Data Architecture',
        details: [
          'Separate override layer for manual edits (renames, merges, splits)',
          'Append-only decision records (full history preserved)',
          'Reversible token map for PII redaction (sanitized for API, real values shown internally)',
          'Centroid-based matching for incoming feedback against existing opportunities'
        ]
      },
      {
        category: 'Scoring Engine',
        details: [
          'Composite scoring formula with outlier protection',
          'Real-time score recalculation when new evidence added',
          'Visible calculation breakdown (each input\'s contribution)',
          'Manual rank override with required rationale'
        ]
      },
      {
        category: 'Product Features',
        details: [
          'CSV/API ingestion with schema mapping',
          'Searchable, paginated evidence views',
          'Drag-and-drop roadmap board (Backlog → Planned → In Progress → Released)',
          'Before/after sentiment comparison with minimum volume thresholds',
          'Read-only share links with revocation support'
        ]
      }
    ],
    
    prdHighlights: [
      {
        section: 'External Review Process',
        keyPoints: [
          'PRD reviewed by product mentor; every piece of feedback traced to specific changes in v3.0',
          'Caught scope contradiction between sections, missing PII handling, speed-without-quality metric trap',
          'Added documentation of how manual edits survive re-ingestion (wasn\'t originally specified)'
        ]
      },
      {
        section: 'Success Metrics',
        keyPoints: [
          'North Star: Median time from feedback received to decision logged (baseline 12 days → target <3 days)',
          'Paired with Decision Reversal Rate to prevent optimizing for speed alone',
          'All baselines labeled as estimates with validation plan, not fake precision'
        ]
      },
      {
        section: 'Functional Requirements',
        keyPoints: [
          '23 requirements across 8 epics, MoSCoW prioritized',
          'Acceptance criteria written for engineering (specific, testable)',
          'Three requirements added/revised in v3.0 from external review'
        ]
      },
      {
        section: 'Competitive Analysis',
        keyPoints: [
          'Benchmarked against Productboard, Canny, Zendesk, BI tools, spreadsheets',
          'Identified gap: no tool connects evidence → scoring → decision → validation in one chain',
          'Honest risk assessment: incumbent could add decision log feature and close gap'
        ]
      },
      {
        section: 'Product Principles',
        keyPoints: [
          '9 principles used to break ties on scope/design decisions',
          'Examples: "Evidence before opinion," "AI assists, humans decide," "Prioritization should be transparent"',
          'Privacy principle added in v3.0 after review caught missing PII handling'
        ]
      }
    ],
    
    metrics: {
      northStar: 'Median time from feedback received to prioritization decision logged (target: <3 days, down from ~12-day baseline)',
      supporting: [
        'Decision Reversal Rate <10% (quality counterweight to speed)',
        '≥90% of roadmap items with linked evidence',
        '<1.5 hours/week manual triage time per PM (down from 4-6 hours)',
        '≥75% of releases get before/after validation',
        'User-reported confidence in prioritization ≥4.0/5.0'
      ]
    },
    
    learnings: {
      productLearning: [
        'Transparent beats accurate: PMs need to defend scores in meetings, so explainability matters more than marginal ranking precision',
        'Speed without quality is a trap: pairing time-to-decision with reversal rate prevents gaming the metric',
        'External review is invaluable: mentor caught scope contradictions, missing PII handling, and outlier math gaps I wouldn\'t have seen',
        'Users don\'t need full collaboration if share links solve the actual pain point (showing decisions to stakeholders)',
        'Manual work should compound, not restart: edit survival across re-ingestion was critical but not in initial spec'
      ],
      technicalLearning: [
        'PII redaction must run before third-party APIs, not as an optional feature',
        'Outlier protection in composite scores prevents one data point from dominating the entire distribution',
        'Append-only data models preserve history better than update-in-place for audit trails',
        'Off-the-shelf LLMs are good enough for MVP; custom training is a scaling problem, not a day-one problem',
        'Confidence scores on AI tags turn uncertainty into a UX feature instead of hiding it'
      ],
      whatIWouldDoDifferently: 'Would have run a two-week shadow period with real PMs before finalizing the scoring model weights. The current weights (0.35/0.30/0.20/0.15) are principled but not validated against actual PM judgment. A shadow period would give real baseline data instead of estimated baselines, and surface edge cases in workflow the spec might be missing.'
    }
  }
};
