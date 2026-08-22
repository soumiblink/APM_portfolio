import { FullCaseStudy } from '../case-study-types';

export const coinbaseRestrictionTransparency: FullCaseStudy = {
  slug: 'coinbase-restriction-transparency',
  name: 'Faster, Not Clearer: Fixing Coinbase\'s Account Restriction Transparency Gap',
  tagline: "Coinbase cut restriction review times by 90% but users still don't know why their accounts are locked",
  type: 'Product Strategy Case Study',
  status: 'Portfolio Project',
  liveLink: 'https://coinbase-prototype.vercel.app/',
  notionLink: 'https://app.notion.com/p/Faster-Not-Clearer-Fixing-Coinbase-s-Account-Restriction-Transparency-Gap-3c4d02fd354f80e18570f218d4fb0266?source=copy_link',
  
  caseStudy: {
    overview: {
      product: 'Coinbase Account Restriction System',
      myRole: 'Product Strategy Analysis',
      projectType: 'Independent Case Study',
      timeline: 'August 2026',
      skillsDemonstrated: [
        'Problem Diagnosis',
        'Root Cause Analysis',
        'RICE Prioritization',
        'Roadmap Planning',
        'Product Strategy',
        'Compliance Product Thinking',
        'Metrics Design',
        'Risk Assessment'
      ],
      productThesis: 'Coinbase invested in processing speed when the documented failure was communication: users are never told which review queue they are in, how long that queue realistically takes, or what specific action would move their case forward. Coinbase already computes all of this internally. None of it reaches the user.'
    },

    problem: {
      who: 'Coinbase users whose accounts get restricted for compliance review',
      what: 'In May 2026, Coinbase announced it cut account restriction resolution times by 90% with AI. But complaints filed afterward show the user experience unchanged: accounts locked with no explanation, unlock attempts that silently fail, support interactions that start from zero each time. Users see a single "under review" screen whether they\'re 2 hours or 8 months from resolution.',
      whyItMatters: 'This attacks Coinbase\'s core moat: trust and beginner-friendliness. Kraken is already rated higher for support and positioned to take the "best for beginners" title. A class action lawsuit is in progress for wrongful account locks. 16% of CFPB complaints result in compensation, meaning regulators validate these as legitimate. Crypto\'s volatility makes this worse: a locked account during a price swing is a forced, involuntary bet against your own interests.',
      currentExperience: 'User deposits money, tries to withdraw, account locks with no explanation. They try the unlock process repeatedly; each attempt fails silently. They contact support 5+ times over 5+ hours, each agent starts fresh with no context. No one can tell them which queue they\'re in, how long it takes, or what\'s blocking them. Internally, Coinbase knows all of this. None of it reaches the user.'
    },

    evidence: [
      {
        type: 'observation',
        title: 'Nate\'s case (June 2026): 5+ agents, 5+ hours, no resolution',
        description: 'User deposited $250, converted to crypto, tried to withdraw. Account locked. Unlock attempts failed silently. Five support agents over five-plus hours, no resolution, no confidence he\'d ever get his money back.',
        source: 'BBB consumer complaint filings, June-July 2026',
        isReal: true
      },
      {
        type: 'observation',
        title: 'Kyle Brehm (December 2024): Months locked, shifting documentation requests',
        description: 'Account locked for months over a single VPN use. Each time he supplied requested documentation, Coinbase came back asking for something new, with no end in sight.',
        source: 'BBB consumer complaint filings',
        isReal: true
      },
      {
        type: 'data',
        title: 'Class action lawsuit: $30K frozen during volatile market',
        description: 'User deposited $30,000 to buy XRP, locked out for several months during period when crypto prices moved 10-20% per day. Watching your own money sit frozen while the market moves without you.',
        source: 'Class action litigation filings, 2021',
        isReal: true
      },
      {
        type: 'data',
        title: 'Real processing times: 2 to 8 months for complex cases',
        description: 'Consumer complaint data shows cases ranging from 2 to 8 months. Coinbase officially states 10 business days, with simple cases clearing in 24-72 hours. Gap between stated SLA and lived reality shows users stuck in slow, human queue have no way to know they\'re even in a different queue.',
        source: 'CFPB complaint database, BBB filings',
        isReal: true
      },
      {
        type: 'data',
        title: '16% of CFPB complaints result in compensation',
        description: 'Regulators are already validating a meaningful share of these complaints as legitimate, not user error. Every case that escalates to CFPB or BBB is one the opacity problem pushed there.',
        source: 'CFPB complaint database',
        isReal: true
      },
      {
        type: 'competitive',
        title: 'Kraken rated higher for customer support',
        description: 'Kraken offers 24/7 chat and phone support for verified users. NerdWallet\'s 2026 review still names Coinbase best for beginners but flags inconsistent customer support as a negative trend, explicitly calling Kraken the closest competitor positioned to take that title away.',
        source: 'NerdWallet Best Crypto Exchanges 2026, Messari Coinbase vs Kraken comparison',
        isReal: true
      }
    ],

    insight: {
      insight: 'Coinbase has the internal data needed to give users a real answer: queue type, expected duration, exact blocking requirement. It simply isn\'t surfaced. The company built a faster engine (90% faster AI processing) and bolted it onto the same opaque dashboard. A user with a 2-hour automated resolution and a user with a 6-month compliance investigation see the identical "under review" screen.',
      impact: 'This is costing Coinbase on three fronts simultaneously: (1) Competitive position as Kraken closes the support gap and threatens the "best for beginners" moat, (2) Legal and regulatory exposure as complaints route externally to CFPB/BBB, generating a class action lawsuit and regulatory validation, (3) Pure operating cost as unresolved cases burn support hours (5+ agents, 5+ hours per case like Nate\'s) in a quarter where Coinbase posted a $394M GAAP net loss.'
    },

    goals: {
      product: 'Expose information Coinbase already has: instant, queue-specific timeframe at moment of lock, followed by visible status tracker that replaces the current single "under review" screen',
      user: 'Users should know which queue they\'re in, how long that queue realistically takes, and exactly what action would move their case forward',
      business: 'Reduce support cost multiplier from unbounded repeat contacts, reduce CFPB/BBB complaint volume (legal exposure), defend "best for beginners" positioning against Kraken',
      leadingIndicators: [
        'Reduction in support tickets containing "how long" or "when will this be resolved" (target: -30%)',
        'Drop in average time to first agent contact for locked accounts',
        'Reduction in repeat contact rate per case (from 5+ toward 2 or fewer average touches)',
        'Customer satisfaction on "I understood what was happening with my account" (net new metric)',
        'Reduction in BBB/CFPB complaints tagged "no explanation" or "no communication"'
      ],
      guardrailMetrics: [
        'Actual resolution time should not increase (this is communication fix, not processing change)',
        'Legal/compliance sign-off on queue type language disclosure',
        'AI-predicted ETA (Phase 4) must clear defined confidence bar before wider rollout'
      ],
      note: 'Success is measured in closed information asymmetry, not faster case resolution (that was the May 2026 AI investment). This plan changes what users are told about a restriction, not the compliance rules that trigger or resolve one.'
    },

    constraints: [
      {
        category: 'business',
        description: 'Coinbase cannot simply remove friction. As a regulated exchange under Bank Secrecy Act obligations, OFAC sanctions screening, and state money transmitter licensing, certain triggers (unusual patterns, high-risk jurisdictions, mismatched identity, large unexplained deposits) legally must pause an account until reviewed. This is a non-negotiable regulatory floor.'
      },
      {
        category: 'technical',
        description: 'Building the Restriction Tracker requires compliance case management backend to expose stage data to frontend. This is an internal data access project as much as a UI build.'
      },
      {
        category: 'business',
        description: 'Some triggers (e.g., sanctions screening) may be sensitive to reveal even at a category level. Mitigation: use general queue labels like "standard review" or "extended review" rather than naming actual regulatory trigger.'
      },
      {
        category: 'adoption',
        description: 'AI-predicted personalized ETA (Phase 4) requires enough historical case resolution data from Phases 1-2 to train something trustworthy. This belongs in later phase, not first release.'
      }
    ],

    optionsConsidered: [
      {
        name: 'Option 1: Restriction Tracker (CHOSEN - Phase 2)',
        description: 'Visible status bar showing queue type, stage (Received → Under Review → Action Needed → Resolved), and next action. Replaces current single "under review" screen.',
        solves: 'Turns the entire "under review" black box into a legible process. Users like Kyle see one clear "action needed" state with specific ask, instead of shifting documentation requests each time they contact support.',
        tradeoffs: [
          'Requires backend to expose stage data to frontend (data access project)',
          'More complete fix than Option 2 but takes 10 weeks vs 6 weeks',
          'This is the flagship feature users actually feel solved, not just informed'
        ],
        risks: ['Requires compliance case management collaboration', 'Backend data access may have regulatory constraints'],
        chosen: true
      },
      {
        name: 'Option 2: Instant SLA Disclosure at lock time (CHOSEN - Phase 1)',
        description: 'Moment account locks, user sees which queue they\'re in (automated security hold vs human compliance review) and realistic time range for that specific queue, not blanket 10 business day estimate.',
        solves: 'Kills the worst part of experience: total silence. Fast win (6 weeks) that immediately reverses the "I have no idea how long this takes" complaint.',
        tradeoffs: [
          'Cheapest option (essentially copy and API change)',
          'Doesn\'t show progress or next action, just initial timeframe',
          'Best first phase, not complete solution alone'
        ],
        risks: ['Legal/compliance sign-off on disclosing queue type language'],
        chosen: true
      },
      {
        name: 'Option 3: Unified Case Thread',
        description: 'One persistent case record every agent sees, so repeat interactions don\'t start cold. Addresses Nate\'s five disconnected agent interactions.',
        solves: 'Case continuity across support touchpoints',
        tradeoffs: [
          'Scores lowest on RICE (2,800)',
          'Addresses documented failure but less impactful than Options 1-2',
          'Reasonable Phase 5 candidate after higher-RICE items ship'
        ],
        risks: ['Requires support tooling overhaul', 'Does not address user-facing transparency gap directly'],
        chosen: false
      },
      {
        name: 'Option 4: AI-Predicted Personalized ETA (CHOSEN - Phase 4)',
        description: 'Once Phases 1-2 generate enough tracked case data, model gives each user continuously updating, case-specific ETA instead of static queue-level range.',
        solves: 'Most personalized, continuously adapting estimate. Makes this genuinely AI-focused product pitch long-term.',
        tradeoffs: [
          'Most expensive and lowest confidence (60%)',
          'Requires historical case data that doesn\'t exist yet',
          'Only ships if demonstrably more transparent than static range',
          'Explicit guardrail: model must explain its own uncertainty to user'
        ],
        risks: ['Prediction accuracy must clear defined confidence bar', 'Could become another opaque black box if not done right'],
        chosen: true
      },
      {
        name: 'Option 5: Self-Serve Escalation Trigger (CHOSEN - Phase 3)',
        description: 'If case sits without status change past its estimated window, user automatically gets visible escalation option instead of relying on user to notice.',
        solves: 'No case can silently exceed its window without proactive notification. Kills cases that sit forever with no one noticing.',
        tradeoffs: [
          'Depends on Phase 1-2 data for "estimated window" baseline',
          'Reactive safety net rather than proactive transparency'
        ],
        risks: ['Could increase escalation volume if windows are set too tight'],
        chosen: true
      }
    ],

    prioritization: {
      framework: 'RICE (Reach × Impact × Confidence / Effort)',
      explanation: 'Reach held constant at 8,000 (all locked account users). Impact scored 1-3 on how completely it closes communication gap. Confidence reflects technical/data-readiness risk. Effort in person-months. Option 2 (Instant SLA) scores highest at 12,000: cheapest (1.5mo), highest confidence (90%), immediate silence-killer. Option 1 (Restriction Tracker) close behind at 6,400: more complete fix (Impact=3), flagship feature users feel solved. Option 4 (AI ETA) interesting long-term but lowest confidence (60%), requires data foundation from Phases 1-2 first.',
      visualization: {
        type: 'table',
        data: {
          headers: ['Solution', 'Reach', 'Impact', 'Confidence', 'Effort (mo)', 'RICE', 'Phase'],
          rows: [
            ['Instant SLA Disclosure', '8,000', '2.5', '90%', '1.5', '12,000', 'Phase 1'],
            ['Restriction Tracker', '8,000', '3', '80%', '3', '6,400', 'Phase 2'],
            ['Unified Case Thread', '8,000', '2', '70%', '4', '2,800', 'Deferred'],
            ['AI-Predicted ETA', '8,000', '3', '60%', '6', '2,400', 'Phase 4'],
            ['Self-Serve Escalation', '8,000', '2', '75%', '2', '6,000', 'Phase 3']
          ]
        }
      }
    },

    solution: {
      description: 'Four-phase roadmap that front-loads cheap, high-confidence wins reversing specific documented complaints, saves flashier AI personalization for once there\'s data foundation. Does not touch regulated compliance engine. Exposes information Coinbase already has.',
      keyFeatures: [
        'Phase 1 (Q1, 6wks): Instant queue-specific timeframe at lock moment, killing total silence',
        'Phase 2 (Q1-Q2, 10wks): Restriction Tracker with visible stages (Received → Under Review → Action Needed → Resolved)',
        'Phase 3 (Q2, 4wks): Auto-escalation if case exceeds estimated window without status change',
        'Phase 4 (Q3+, pilot): AI-predicted personalized ETA, only if it clears transparency bar and explains its own uncertainty'
      ],
      visuals: [
        {
          type: 'flow',
          description: 'Before: Single "under review" screen for all cases (2 hours to 8 months, identical UI). After: Queue-specific timeframe → Staged tracker → Auto-escalation if stuck → Personalized ETA (once data exists)'
        }
      ]
    },

    mvp: {
      mvpFeatures: [
        'Instant SLA Disclosure: Every new restriction returns queue-specific ETA, not generic default',
        'Read from existing internal field (which queue), surface for first time',
        'General queue labels ("standard review" vs "extended review") to avoid regulatory trigger exposure',
        'Success metric: -30% in "how long" support tickets'
      ],
      futureIterations: [
        'Phase 2: Full Restriction Tracker with staged progress',
        'Phase 3: Auto-escalation trigger for stuck cases',
        'Phase 4: AI-predicted personalized ETA (pilot first, must clear confidence bar)',
        'Phase 5: Unified Case Thread for support continuity (deferred, lowest RICE)'
      ],
      explicitlyRejected: [
        'Touching the compliance engine itself - this is communication layer only',
        'Reducing actual case resolution time - that was May 2026 AI investment',
        'Shipping AI-predicted ETA before data foundation exists - would be another opaque black box',
        'Unified Case Thread in early phases - addresses real failure but lowest RICE, belongs in Phase 5 after higher-impact wins ship'
      ]
    },

    experimentation: {
      hypothesis: 'If we surface the queue type and timeframe Coinbase already knows internally, users will contact support less ("how long" tickets drop), feel more informed (new satisfaction metric), and route fewer complaints externally (CFPB/BBB volume drops)',
      experiment: 'Phase 1: Ship Instant SLA Disclosure to all new restriction events for 8 weeks. Track support ticket language, time-to-first-contact, CFPB/BBB complaint volume.',
      successCriteria: [
        '"How long" support ticket volume drops 30% or more',
        'Average time to first agent contact drops (users self-serve timing question)',
        'No material change in actual resolution time (expected - this is communication fix)',
        'Legal/compliance validates queue label language passes regulatory review'
      ],
      expectedBehavior: 'Users who see "Your account is in standard review, typically resolved in 24-72 hours" stop opening support tickets asking when it will be done. Cases that take longer than estimated window surface in Phase 3 auto-escalation data.',
      rolloutApproach: 'Phase 1: Instant to all new restrictions (low risk, read-only change). Phase 2: Restriction Tracker rolled out progressively by case complexity (automated queue first, then human queue). Phase 4: AI-predicted ETA piloted with defined cohort, prediction accuracy measured as MAE against actual resolution time before broader rollout.'
    },

    learnings: {
      whatILearned: [
        'Speed without visibility just relocates frustration, doesn\'t remove it. Coinbase cut processing time 90% but users still felt abandoned.',
        'The most expensive fix isn\'t always the right first move. AI-predicted ETA is flashy but belongs in Phase 4 after data foundation exists.',
        'Information asymmetry is a product gap. Coinbase has the data (queue type, duration, blocker) but doesn\'t surface it. That\'s a UX problem dressed as a compliance constraint.',
        'RICE scoring forces honesty about confidence vs ambition. Option 4 is the most interesting but scored lowest because data doesn\'t exist yet. Sequencing matters.'
      ],
      whatSurprisedMe: 'That the AI investment announcement (May 2026) didn\'t include any user-facing transparency features. It was entirely backend processing speed. The communication layer gap was already documented in complaints before that investment, and it shipped untouched.',
      whatIWouldChange: 'Would have mapped the actual tiered queue system earlier to validate the "Coinbase already knows this internally" claim with more precision. The case study assumes that structure exists based on documented complaint patterns, but a real PM would get backend confirmation before pitching solutions.',
      nextInvestigation: 'What does the legal/compliance review actually look like for queue label disclosure? Is "standard review" vs "extended review" safe, or does even that expose too much? Would need to sit with legal counsel and walk through actual regulatory constraint language, not assume it.'
    },

    pmReflection: "This case study taught me that diagnosis matters more than solutions. The May 2026 AI investment solved processing speed, which wasn't the documented problem. Users weren't complaining that cases took too long in absolute terms; they were complaining they had no idea how long it would take, what was blocking them, or whether anyone was even looking. That's an information gap, not a speed gap. The recommended fix (Phases 1-4) is deliberately scoped to close that gap without touching the compliance engine, because the constraint is real but the communication layer sits on top of it. The hardest part of this case wasn't prioritization or roadmapping. It was resisting the urge to pitch the flashy AI feature first. Option 4 (AI-predicted ETA) is the most product-exciting direction, but it scores lowest on RICE and belongs in Phase 4, not Phase 1, because it requires a data foundation that doesn't exist yet. A real PM has to sequence for confidence and impact, not just narrative appeal. That discipline is what separates a shippable roadmap from a pitch deck."
  }
};
