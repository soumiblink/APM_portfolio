import { FullCaseStudy } from '../case-study-types';

export const replitPricingDiagnostic: FullCaseStudy = {
  slug: 'replit-pricing-diagnostic',
  name: 'Pricing in the Dark',
  tagline: "Diagnosing a Predictability Failure in Replit's Agent Billing Model",
  type: 'Growth & Retention Diagnostic Case Study',
  status: 'Portfolio Project',
  notionLink: 'https://app.notion.com/p/Diagnosing-a-Predictability-Failure-in-Replit-s-Agent-Billing-Model-3bdd02fd354f80bd92f5efe5e0c97de2?source=copy_link',
  
  caseStudy: {
    overview: {
      product: 'Replit AI Agent Billing',
      myRole: 'Product Strategy & Growth Diagnostic',
      projectType: 'Independent Case Study',
      timeline: 'August 2026',
      skillsDemonstrated: [
        'Problem Diagnosis',
        'Competitive Benchmarking',
        'Pricing Strategy',
        'Prioritization (ICE Framework)',
        'Retention Analysis',
        'Success Metrics Design',
        'Hypothesis Tree Building',
        'Segment Analysis'
      ],
      productThesis: "Replit didn't lose users because AI is expensive. They lost trust because the cost of any single action was unknowable in advance and disconnected from whether that action actually worked, and that gap is fixable without abandoning usage-based pricing."
    },

    problem: {
      who: 'Solo developers, students, freelancers, and teams using Replit\'s AI Agent',
      what: 'Weekly bills jumped from ~$180-200/month to ~$1,000/week within days of Agent 3\'s September 10, 2025 launch, a 5-20x spike. Individual prompts cost as much as $20-79 each. Users were billed even when the Agent\'s work failed, errored, or looped.',
      whyItMatters: 'Predictability is the load-bearing wall of any usage-based pricing model. Remove it, and users stop trusting the meter, regardless of whether the average price is fair. This wasn\'t just a PR crisis, it was a structural trust failure that could recur at any future Agent upgrade.',
      currentExperience: 'Users submit a task to the AI Agent, have no visibility into what it will cost, watch the Agent work (sometimes failing or looping), and only see the bill afterward. Spending limits exist but are opt-in, not default. No competitor has this gap.'
    },

    evidence: [
      {
        type: 'data',
        title: 'Documented cost spikes post-Agent 3 launch',
        description: 'Users reported bills jumping from $180-200/month to $1,000/week, with individual prompts costing $20-79. One BBB complaint cited $760 over three months tied to unusable application.',
        source: 'The Register, InfoWorld, BBB complaints',
        isReal: true
      },
      {
        type: 'research',
        title: 'Billing on failure pattern',
        description: 'Users charged $1.15 for Agent suggesting a method that doesn\'t exist. Billing occurs per checkpoint whether task succeeded, errored, or looped.',
        source: 'Public user complaints, forum posts',
        isReal: true
      },
      {
        type: 'competitive',
        title: 'Cursor and Claude Code provide visible ceilings',
        description: 'Cursor: Live balance dashboard showing remaining budget. Claude Code: Flat $100-200 Max tiers with hard monthly ceiling. Both give users a number they can see and act on before running out.',
        source: 'Product documentation, pricing pages',
        isReal: true
      },
      {
        type: 'observation',
        title: 'Spending limits are opt-in, not default',
        description: 'Hard caps exist in Replit but are disabled unless user proactively configures them. This means the safety net only works for users who knew to turn it on.',
        source: 'Replit product documentation',
        isReal: true
      },
      {
        type: 'data',
        title: 'Agent 3 multi-agent fan-out',
        description: 'Single user action spawns 6-8 billable sub-operations invisibly (planning, review, security, fixes). Users see one request, get charged for eight.',
        source: 'Replit technical documentation',
        isReal: true
      }
    ],

    insight: {
      insight: 'The failure is structural, not just a bad rollout. Three mechanics compound the problem: (1) No pre-task cost visibility, (2) Billing on failure, (3) Opt-in spending limits. Even if Replit fixed the average price, the next Agent upgrade could repeat this exact failure.',
      impact: 'This reframes the problem from "fix a billing complaint" to "win a category-defining trust position." Whichever agentic coding tool solves predictability first earns a durable advantage, the kind that\'s hard for competitors to copy quickly, unlike a feature.'
    },

    goals: {
      product: 'Make cost predictable before commitment, not just fair on average',
      user: 'Users can confidently use the Agent without fear of surprise bills or billing on Agent failures',
      business: 'Reduce churn from solo/hobbyist segment, prevent enterprise procurement blocks, repair trust before competitors position around it',
      leadingIndicators: [
        '% of active Agent sessions with spending limit enabled (target: 100%)',
        '% of Agent tasks showing pre-run cost estimate (target: 100%)',
        'Support tickets tagged "billing surprise" (decrease)',
        '% of checkpoints billed on failed task (target: 0%)',
        '30-day retention of new Core-tier signups (increase)'
      ],
      note: 'Proposed metrics for a growth/platform PM to track weekly'
    },

    constraints: [
      {
        category: 'technical',
        description: 'Agent 3\'s sub-agent fan-out makes true pre-task cost estimation genuinely harder than competitors\' simple token counts. Even Cursor and Claude Code only show live balance or usage windows, not exact pre-task pricing.'
      },
      {
        category: 'business',
        description: 'Default-on spending limits may cap some legitimate high-intent spend from power users, potentially suppressing expansion revenue. Mitigated by frictionless one-tap increase.'
      },
      {
        category: 'business',
        description: 'Capping billing on failed checkpoints reduces near-term Agent revenue directly. Likely small hit per incident, but requires internal data to confirm exact size.'
      },
      {
        category: 'adoption',
        description: 'Solo developers and students (highest churn risk) have lowest budgets but highest visibility in public complaints. Enterprise accounts absorb variance longer but represent disproportionate revenue.'
      }
    ],

    optionsConsidered: [
      {
        name: 'Switch to flat-rate pricing entirely',
        description: 'Solves predictability instantly by giving users one fixed monthly price',
        solves: 'Eliminates all surprise billing and makes cost 100% predictable',
        tradeoffs: [
          'Breaks the reason effort-based pricing existed: agentic tasks vary 10-100x in compute cost',
          'Either overcharges light users to subsidize heavy ones, or underprices until margin erodes',
          'Neither Cursor nor Claude Code went fully flat for this reason'
        ],
        risks: ['Margin erosion on heavy users', 'Light users churn on overpricing'],
        chosen: false
      },
      {
        name: 'Hybrid flat-tier + overage (Claude Code Max-style)',
        description: 'Combine flat tiers with usage-based overages for power users',
        solves: 'Gives most users predictable ceiling while allowing heavy users to pay more',
        tradeoffs: [
          'Full tier redesign is much bigger lift than the actual problem requires',
          'Users aren\'t complaining that the pricing model is wrong — they\'re saying cost is unpredictable'
        ],
        risks: ['Over-engineering the solution', 'Delays trust repair'],
        chosen: false
      },
      {
        name: 'Treat as one-time rollout PR issue',
        description: 'Issue apology and goodwill credits, assume problem is solved',
        solves: 'Addresses rollout tone and immediate user anger',
        tradeoffs: [
          'Doesn\'t fix structural causes (no pre-task visibility, billing on failure, opt-in limits)',
          'Same failure can recur at next major Agent version with no protocol to prevent it'
        ],
        risks: ['Trust erosion compounds', 'Competitive disadvantage hardens'],
        chosen: false
      },
      {
        name: 'Fix effort-based pricing without replacing it (CHOSEN)',
        description: 'Keep usage-based model but add visibility, caps, and failure-billing fixes',
        solves: 'Closes the specific predictability gap Replit has vs. competitors without abandoning the pricing model',
        tradeoffs: [
          'Doesn\'t give perfect pre-task precision (which no competitor has either)',
          'Requires phased rollout to sequence easy wins before hard technical problems'
        ],
        risks: ['Execution complexity across 3 phases', 'Requires sustained PM ownership'],
        chosen: true
      }
    ],

    prioritization: {
      framework: 'ICE (Impact, Confidence, Ease)',
      explanation: 'Experiments scored 1-10 on Impact, Confidence, and Ease. Sum (not average) gives ICE score for ranking. Highest-scoring items (default-on limits, spend dashboard) are largely UI/policy changes. Highest-impact item (pre-task estimation) ranks lower once Ease factored in due to genuine technical constraint.',
      visualization: {
        type: 'table',
        data: {
          experiments: [
            { rank: 1, name: 'Default-on spending limits', impact: 7, confidence: 9, ease: 8, ice: 24 },
            { rank: 2, name: 'Real-time spend dashboard', impact: 8, confidence: 8, ease: 7, ice: 23 },
            { rank: 3, name: 'Cap billing on failed checkpoints', impact: 8, confidence: 8, ease: 6, ice: 22 },
            { rank: 4, name: 'Pre-task cost estimate', impact: 9, confidence: 7, ease: 5, ice: 21 },
            { rank: 5, name: 'Grandfathering protocol', impact: 6, confidence: 6, ease: 4, ice: 16 },
            { rank: 6, name: 'Separate real-time pricing', impact: 5, confidence: 5, ease: 5, ice: 15 }
          ]
        }
      }
    },

    solution: {
      description: 'Three-phase roadmap that front-loads achievable trust-repair moves before solving the hardest technical problem (pre-task estimation). Sequenced so Phase 1 stops immediate bleeding with policy changes, Phase 2 adds visibility as engineering allows, Phase 3 prevents recurrence.',
      keyFeatures: [
        'Phase 1 (0-30 days): Make hard spending limits default-on for all accounts; cap/refund billing on failed checkpoints',
        'Phase 2 (30-90 days): Ship real-time spend dashboard (Cursor-style); begin instrumenting sub-agent fan-out for rough pre-task cost range',
        'Phase 3 (90+ days): Formalize pricing-change protocol for future Agent versions; separate pricing track for persistent workloads'
      ],
      visuals: [
        {
          type: 'flow',
          description: 'Sequencing logic: Phase 1 uses policy changes (cheap, fast, reversible). Phase 2 tackles visibility in order engineering constraint allows (dashboard first, estimation second). Phase 3 is process to prevent recurrence.'
        }
      ]
    },

    mvp: {
      mvpFeatures: [
        'Default-on spending limits with one-tap adjustment',
        'Cap or refund billing when Agent task fails/errors/loops',
        'Real-time spend dashboard showing running balance',
        'Rough pre-task cost range (not exact, matching competitor bar)'
      ],
      futureIterations: [
        'Exact pre-task cost prediction (if technically feasible)',
        'Separate pricing track for infrastructure vs. agent effort',
        'Advanced spend forecasting based on usage patterns'
      ],
      explicitlyRejected: [
        'Flat-rate pricing entirely',
        'Full tier redesign before validating if visibility alone closes trust gap',
        'Treating as one-time PR issue without structural fixes'
      ]
    },

    experimentation: {
      hypothesis: 'If we make cost visible and capped before commitment, users will trust the Agent enough to increase usage, even if the average price stays the same',
      experiment: 'Phase 1 rollout with default-on limits + failed-checkpoint caps',
      successCriteria: [
        'Support tickets tagged "billing surprise" decrease by 40%+ within 30 days',
        '% of sessions with spending limit enabled reaches 85%+',
        '30-day retention of Core-tier signups increases 10%+',
        'NPS delta (usage-based vs flat-tier cohorts) narrows by 15+ points'
      ],
      expectedBehavior: 'Users should feel safe experimenting with Agent again. Power users should still be able to increase limits frictionlessly.',
      rolloutApproach: 'Phase 1 to 100% of users immediately (policy change, low risk). Phase 2 beta to 10% of users, expand based on dashboard engagement. Phase 3 protocol applies to all future releases.'
    },

    learnings: {
      whatILearned: [
        'Predictability is more valuable than average fairness in usage-based pricing',
        'Technical constraints are real: Agent 3\'s fan-out architecture makes exact pre-task estimation genuinely harder than competitors\' token counts',
        'Segment exposure varies: solo devs churn fastest, enterprise churns slowest but represents most revenue',
        'Competitive benchmarking reveals "nobody has perfect predictability", which means the goal is closing Replit\'s gap to proven achievable, not inventing perfection'
      ],
      whatSurprisedMe: 'That even the best competitors (Cursor, Claude Code) only give partial cost visibility: live balance or usage windows, not exact pre-task pricing. This reframes the recommendation: the honest goal isn\'t perfect prediction, but closing the specific gap Replit has relative to what\'s already proven.',
      whatIWouldChange: 'Would have prioritized getting Replit\'s internal usage data earlier to validate segment assumptions (especially enterprise behavior) and size the revenue impact of capping failed-checkpoint billing more precisely.',
      nextInvestigation: 'How does the persistent-connection cohort (gaming, real-time apps) actually overlap with the Agent-billing cohort? Are they the same users or distinct? This determines whether Experiment #6 (separate pricing track) is a genuine fix or a distraction.'
    },

    pmReflection: "This case study taught me that diagnosing a problem well is more valuable than prescribing a perfect solution. Replit's actual response (apology + $10 credit) treated the symptom. What users needed wasn't an apology — they needed to know it wouldn't happen again. The roadmap I proposed isn't revolutionary; it's just structured, sequenced, and honest about what's technically hard vs. what's a policy choice. The real PM skill here wasn't creativity — it was building a hypothesis tree rigorous enough that someone at Replit could pick it up and execute it without me."
  }
};
