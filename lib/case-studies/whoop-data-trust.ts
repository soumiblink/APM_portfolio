import { FullCaseStudy } from '../case-study-types';

export const whoopDataTrust: FullCaseStudy = {
  slug: 'whoop-data-trust',
  name: 'WHOOP: Users Hacking Their Own Bodies Back',
  tagline: "A strategy case study on the collision between subscription retention and data trust",
  type: 'Product Strategy Case Study',
  status: 'Portfolio Project',
  notionLink: 'https://app.notion.com/p/WHOOP-The-Company-Whose-Users-Are-Hacking-Their-Own-Bodies-Back-3c3d02fd354f805eba32e889666fa969?source=copy_link',
  
  caseStudy: {
    overview: {
      product: 'WHOOP Health & Fitness Tracker',
      myRole: 'Product Strategy Analysis',
      projectType: 'Independent Case Study',
      timeline: 'June 2026',
      skillsDemonstrated: [
        'Strategic Problem Diagnosis',
        'Business Model Analysis',
        'Trust & Retention Strategy',
        'Root Cause Analysis',
        'Trade-off Evaluation',
        'Success Metrics Design'
      ],
      productThesis: "WHOOP's subscription model assumes data access can be a retention lever. Its brand promise assumes it won't be treated as one. That contradiction was survivable when WHOOP was a fast-growing upstart. It isn't now."
    },

    problem: {
      who: 'WHOOP users, especially technically capable members who value data ownership',
      what: 'By June 2026, technically capable users released Goose, an open-source tool that intercepts Bluetooth signals to pull raw biometric data off WHOOP trackers, bypassing the subscription paywall entirely. Three separate trust failures (2023 feature paywall, 2025 hardware upgrade policy, 2025 data-sharing lawsuit) drove users to reverse-engineer their own hardware rather than trust the company.',
      whyItMatters: "This isn't about one bad policy decision. When your most loyal users (the kind who wear a $300 device every night) decide reverse-engineering their own hardware is more trustworthy than your company, that's a structural problem, not a PR problem. The business model needs subscription lock-in. The brand promise needs data ownership to feel unconditional. Those two forces fight by default.",
      currentExperience: 'Users pay $199-$359/year for a WHOOP membership. If they cancel, they lose access to their own biometric history. Hardware upgrades are tied to subscription tenure. Data sharing policies are unclear. Users feel their own body data is being held hostage.'
    },

    evidence: [
      {
        type: 'observation',
        title: 'Goose: Open-source workaround released June 2026',
        description: 'Developers released a tool that intercepts Bluetooth signals to pull raw data directly off WHOOP 5.0, skipping servers and subscription entirely. Pre-alpha, iOS-only, but functional.',
        source: 'Public GitHub repository, user reports',
        isReal: true
      },
      {
        type: 'data',
        title: '2023 paywall backlash',
        description: 'WHOOP paywalled features users considered part of their existing plan, triggering backlash over "renting access" to their own biometrics.',
        source: 'User complaints, Reddit threads, tech press coverage',
        isReal: true
      },
      {
        type: 'data',
        title: '2025 hardware upgrade reversal',
        description: 'Promised free WHOOP 5.0 upgrade only applied to members with 12+ months left on subscription. WHOOP reversed policy under pressure, but only after public damage.',
        source: 'Company policy announcements, user backlash',
        isReal: true
      },
      {
        type: 'data',
        title: '2025 class-action lawsuit',
        description: 'Lawsuit alleging WHOOP shared health data with third party despite promising it never sells data.',
        source: 'Legal filings',
        isReal: true
      },
      {
        type: 'research',
        title: 'Privacy risk ranking',
        description: 'Peer-reviewed study ranked WHOOP among the highest privacy-risk wearable brands in its category.',
        source: 'Academic research',
        isReal: true
      }
    ],

    insight: {
      insight: 'Three separate trust failures across three teams (product, hardware, security) in three years isn\'t coincidence. It\'s what happens when a company\'s business model and brand promise are pulling in opposite directions. No one owns the question: "Does this decision preserve the feeling that the user\'s data is unconditionally theirs?"',
      impact: 'Every strategic lever WHOOP has to grow revenue (raising prices, gating features, timing hardware upgrades to renewal cycles) pulls in the same direction: make the subscription harder to leave. But the core promise only holds if data access feels permanent, not contingent on payment status. This isn\'t a PR problem. It\'s a missing structural checkpoint.'
    },

    goals: {
      product: 'Install a structural checkpoint that forces the question "does this make data access feel conditional?" before any pricing, hardware, or data decision ships',
      user: 'Users should feel their biometric data is unconditionally theirs, whether they\'re currently paying or not',
      business: 'Build a retention engine based on insight value, not data hostage-taking. Reduce recurring trust crises that compound every 12-18 months.',
      leadingIndicators: [
        'Seasonal cancel-and-return rate holds steady or falls',
        'Attach rate to paid insight tier among users with free raw data access',
        'Sentiment around data ownership improves in reviews and support threads',
        'Workaround tools like Goose lose their reason to exist'
      ],
      note: 'Success isn\'t just policy change, it\'s whether the root-cause gap closes in observable user behavior'
    },

    constraints: [
      {
        category: 'business',
        description: 'WHOOP doesn\'t sell hardware profitably. It gives it away or prices near cost. The $199-$359/year membership is the entire business. Removing data as a retention lever removes one of the only levers WHOOP has.'
      },
      {
        category: 'business',
        description: 'Near-term revenue hit is real: 3-5% of members shifting to seasonal use at $199/year floor = $15-25M at-risk annual revenue (based on 2.5M+ members and $1.1B run rate). That\'s plannable but material.'
      },
      {
        category: 'adoption',
        description: 'The new retention engine (coaching and insight) has to actually work. If WHOOP\'s coaching product is mediocre, the company has removed its safety net and not replaced it with a compelling lever.'
      },
      {
        category: 'business',
        description: 'Competitors can copy the "data is always yours" policy overnight without copying the discipline. Oura could announce the same commitment in a press release.'
      }
    ],

    optionsConsidered: [
      {
        name: 'Option A: Keep data tied to subscription (status quo)',
        description: 'Continue current model where data access is contingent on active subscription',
        solves: 'Protects immediate revenue. Keeps existing retention lever intact. No structural change needed.',
        tradeoffs: [
          'Each renewal cycle gets more adversarial as company needs losing access to feel painful',
          'Three incidents in three years suggest the gap isn\'t closing, it\'s widening',
          'Workaround tools like Goose will continue to emerge and gain users',
          'Trust erosion compounds over time, costs are deferred but recurring'
        ],
        risks: ['Fourth trust crisis within 18 months', 'More sophisticated workarounds', 'Class-action lawsuit precedent'],
        chosen: false
      },
      {
        name: 'Option B: Decouple data from subscription (CHOSEN)',
        description: 'All biometric data generated stays accessible forever, regardless of subscription status. Move retention lever to coaching and insight.',
        solves: 'Fixes the trust problem directly by removing the exact mechanism (data as leverage) behind all three incidents. Aligns business model with brand promise.',
        tradeoffs: [
          'Real near-term revenue hit: $15-25M at-risk from seasonal users',
          'Requires WHOOP\'s coaching product to actually be good enough to justify subscription on its own',
          'Removes safety-net retention lever with no immediate fallback',
          'Internal friction: slows decisions, kills some legitimate revenue ideas'
        ],
        risks: ['Insight tier adoption lower than expected', 'Seasonal churn higher than modeled', 'Competitive pressure on pricing'],
        chosen: true
      }
    ],

    prioritization: {
      framework: 'Strategic Alignment Analysis',
      explanation: 'Evaluated options against three criteria: (1) Does it close the root-cause gap identified (missing checkpoint)? (2) Are the costs controlled and one-time vs. deferred and recurring? (3) Can success be measured in observable user behavior, not just sentiment? Option B passes all three. Option A fails the first and second.',
      visualization: {
        type: 'table',
        data: {
          comparison: [
            { criterion: 'Closes root cause', optionA: 'No', optionB: 'Yes' },
            { criterion: 'Cost structure', optionA: 'Deferred, recurring', optionB: 'Visible, one-time' },
            { criterion: 'Measurable', optionA: 'Next crisis timing unknown', optionB: 'Clear metrics in 12-18 months' }
          ]
        }
      }
    },

    solution: {
      description: 'Four-part fix that replaces the retention lever without abandoning monetization: (1) Make data ownership permanent, (2) Move retention to insight layer, (3) Decouple hardware policy from subscription, (4) Install the missing checkpoint.',
      keyFeatures: [
        'All biometric data stays accessible forever, regardless of payment status (standing policy, not post-backlash concession)',
        'Subscription sells interpretation: multi-season overtraining models, comparative benchmarking, proactive coaching based on pattern shifts',
        'Hardware upgrade policy set on public schedule, completely separate from subscription tenure',
        'Structural checkpoint before shipping: every pricing/hardware/data decision must answer "does this make data access feel conditional?"'
      ],
      visuals: [
        {
          type: 'flow',
          description: 'Old retention model: Keep users by making leaving expensive (data hostage). New retention model: Keep users by making staying worth it (insight value).'
        }
      ]
    },

    mvp: {
      mvpFeatures: [
        'Permanent data access policy, stated explicitly in ToS and marketing',
        'Free tier: raw metrics forever. Paid tier: coaching, trends, benchmarking',
        'Hardware upgrade schedule published and decoupled from subscription status',
        'Decision checkpoint owner assigned (reports to CPO, reviews all pricing/data/hardware decisions)'
      ],
      futureIterations: [
        'Advanced AI coaching models (beyond MVP insight tier)',
        'Team/coach integration features',
        'Third-party data export APIs for users who want to leave WHOOP entirely'
      ],
      explicitlyRejected: [
        'Status quo (Option A) - costs are recurring and compounding, not one-time',
        'Half-measures like "grandfathering" only after backlash - doesn\'t fix root cause',
        'Pure PR response without structural change - users already learned this doesn\'t work'
      ]
    },

    experimentation: {
      hypothesis: 'If we decouple data from subscription and build retention on insight value instead, seasonal churn will stay flat or fall (not spike), and paid insight attach rate will validate that coaching is a strong enough lever to replace access',
      experiment: 'Phase 1: Announce permanent data policy and launch paid insight tier. Track for 12-18 months (same cadence as previous crises).',
      successCriteria: [
        'Seasonal cancel-and-return rate holds steady or decreases (validates new retention lever works)',
        'Attach rate to paid insight tier among free-data users >40% (validates insight is compelling)',
        'Sentiment around data ownership improves measurably in reviews and support threads',
        'Workaround ecosystem (Goose, etc.) shrinks or stops growing'
      ],
      expectedBehavior: 'Some seasonal churn is rational and expected. The bet is that it\'s bounded ($15-25M) and offset by better retention and upsell among users who trust the model.',
      rolloutApproach: 'Announce all four changes simultaneously (not piecemeal) to signal structural shift, not tactical concession. Track metrics monthly, review at 6-month and 12-month marks.'
    },

    learnings: {
      whatILearned: [
        'Trust erosion isn\'t always loud. The clearest signal isn\'t Reddit backlash, it\'s when users build workarounds instead of complaining.',
        'Business model tension with brand promise isn\'t always obvious until you map the recurring pattern across incidents.',
        'A "missing checkpoint" isn\'t abstract, it\'s literal: no one owned the question that would have stopped all three incidents.',
        'Controlled, visible costs (Option B) beat deferred, recurring costs (Option A) even when the upfront number is scary.'
      ],
      whatSurprisedMe: 'That WHOOP\'s hardware-near-cost model actually makes the problem worse, not better. Because hardware isn\'t profitable, data becomes one of the only levers left, which is why it keeps getting pulled despite the brand damage.',
      whatIWouldChange: 'Would have quantified the seasonal churn risk more precisely earlier. The $15-25M estimate is defensible but rough; a real PM would model cohort behavior and LTV impact before recommending Option B to a board.',
      nextInvestigation: 'How does WHOOP\'s insight tier need to evolve to genuinely justify $199-359/year on its own? What does "coaching" need to look like for this bet to work?'
    },

    pmReflection: "This case study taught me that recurring crises aren't always execution failures, they're often architectural ones. Three incidents across three teams in three years is a pattern, not bad luck. The real PM skill here wasn't diagnosing any single incident. It was stepping back and asking: what structural thing is missing that would have prevented all three? The answer (a checkpoint forcing the 'does this feel conditional?' question) wasn't obvious from any individual event, but it became obvious when you laid them side by side. That's the value of pattern recognition over firefighting."
  }
};
