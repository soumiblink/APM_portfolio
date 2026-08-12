import { FullCaseStudy } from '../case-study-types';

export const linkedInJobNavigator: FullCaseStudy = {
  slug: 'linkedin-job-navigator',
  name: 'Redesigning LinkedIn Jobs for Early-Career Professionals',
  tagline: 'Early-career professionals are churning off LinkedIn Jobs before its identity graph has enough data about them to work',
  type: 'Product Management Case Study',
  status: 'Portfolio Project',
  
  caseStudy: {
    overview: {
      product: 'LinkedIn Jobs - LinkedIn Signal',
      myRole: 'Product Strategy & Design',
      projectType: 'Independent Case Study',
      timeline: 'July 2026',
      skillsDemonstrated: [
        'Problem Framing',
        'Market Research',
        'User Personas',
        'Journey Mapping',
        'RICE Prioritization',
        'PRD Writing',
        'Wireframing',
        'MVP Definition',
        'Experiment Design',
        'Business Impact Analysis'
      ],
      productThesis: 'LinkedIn Jobs matches listings to identity, not just resumes. Its real asset is the graph of connections, endorsements, and signals. That asset breaks down for early-career professionals who structurally haven\'t had time to build it.'
    },

    problem: {
      who: 'Early-career professionals (recent graduates and 0-2 years experience) actively job searching',
      what: 'Users churn off LinkedIn Jobs before the identity graph has enough data to work: 96% of 19-24 year-olds with LinkedIn accounts rarely or never use them, while entry-level postings are down 35% since 2023 and recent-grad unemployment sits at 5.7%',
      whyItMatters: 'Three linked failures: cold-start matching (thin profiles get thin matches), access problem (features that would help most sit behind a paywall this segment can least afford), and feedback problem (applications vanish into silence)',
      currentExperience: 'Users apply through LinkedIn Apply, get matches that skew senior or generic, hear nothing back, and eventually abandon the platform - giving LinkedIn no data to improve their experience'
    },

    evidence: [
      {
        type: 'data',
        title: '96% of 19-24 year-olds with LinkedIn accounts rarely or never use them',
        description: 'Over half of 19-24 year-olds have LinkedIn accounts, but 96% rarely or never use them - many created accounts only because a parent, university, or career center told them to. Source: Bixa Research / B2Linked study.',
        source: 'Bixa Research / B2Linked study',
        isReal: true
      },
      {
        type: 'data',
        title: 'Recent-grad unemployment at 5.7%, well above overall rate',
        description: 'Unemployment among recent college graduates aged 22-27 climbed to 5.7% in late 2025, well above the 4.2% rate for all workers, with nearly 43% of new grads underemployed.',
        source: 'Federal Reserve Bank of New York Labor Market dashboard, Q4 2025',
        isReal: true
      },
      {
        type: 'data',
        title: 'Entry-level postings down 35% since 2023',
        description: 'Entry-level postings in the US are down 35% since early 2023 as AI tools absorb tasks that used to be the career launchpad for new hires. LinkedIn\'s own Grad\'s Guide 2026 shows entry-level hiring down roughly 7% year-over-year.',
        source: 'Labor-market tracking data, LinkedIn Grad\'s Guide 2026',
        isReal: true
      },
      {
        type: 'observation',
        title: 'Applications vanish into silence',
        description: 'Users who do apply report being ghosted, with no status updates and no reliable way to filter out fake or spammy postings. This is synthesized from secondary research rather than primary interviews.',
        source: 'Secondary research synthesis',
        isReal: false
      },
      {
        type: 'competitive',
        title: 'Handshake solves cold-start by design',
        description: 'Handshake uses verified institutional identity (your university) as its trust mechanism with 1,600+ institutions, but that trust signal expires at graduation.',
        source: 'Handshake/VEDP partnership materials',
        isReal: true
      },
      {
        type: 'competitive',
        title: 'Indeed and Glassdoor solve pre-apply trust, not post-apply',
        description: 'Company reviews and salary transparency help candidates decide whether to apply, but do nothing for the silence that follows an application.',
        source: 'Competitive product analysis',
        isReal: true
      }
    ],

    insight: {
      insight: 'LinkedIn is the only player with the raw ingredients to solve all three problems at once: the identity graph Handshake has to bootstrap, the reach Internshala doesn\'t have past year one, and enough data density to close the loop Naukri can\'t',
      impact: 'This doesn\'t require a new product, just a new mode of the existing one - the way LinkedIn already treats Creator Mode as distinct with its own surfaces and incentives. The platform\'s core matching logic and monetization both quietly penalize early-career users when they should be supporting them.'
    },

    goals: {
      product: 'Move median time-to-status from effectively unmeasured to 14 days or less',
      user: 'Every application reaches one of four defined states (Viewed, Under consideration, Not moving forward with reason, Interview requested) within 14 days instead of disappearing into silence',
      business: 'Retain 1M+ additional early-career users annually who would otherwise churn, generating $10.8-14.4M incremental Premium revenue plus data-flywheel value for Talent Solutions',
      leadingIndicators: [
        'Match relevance rate (% of matches not immediately dismissed): +15pp vs control',
        'Free-tier feature adoption among early-career users: 25% within 90 days',
        'Median time-to-status: 14 days (from unmeasured)',
        '90-day retention of early-career cohort: +20pp vs current'
      ],
      guardrailMetrics: [
        'Premium conversion rate (all users): no more than 2% dip',
        'Recruiter-reported applicant-quality score: should not decline',
        'Time-to-fill for entry-level requisitions: should not increase',
        'Support sentiment on rejection flow: monitored for backfire'
      ],
      note: 'North star metric: Early-Career Activation Rate (ECAR) - % of early-career users completing full application-to-response cycle within 30 days'
    },

    constraints: [
      { category: 'business', description: 'LinkedIn\'s core matching and monetization both implicitly reward experience early-career users haven\'t had time to accumulate' },
      { category: 'technical', description: 'Thin profiles produce thin matches - cold-start problem requires new matching signals beyond traditional experience' },
      { category: 'platform', description: 'Two-sided marketplace: changes that help seekers must not damage recruiter experience or Talent Solutions revenue' },
      { category: 'resource', description: 'No primary user interviews conducted - personas synthesized from secondary research (flagged limitation)' },
      { category: 'adoption', description: 'Must work within existing LinkedIn Jobs surface - can\'t require users to learn entirely new product' }
    ],

    optionsConsidered: [
      {
        name: 'Solution #1: Closed-loop application status (LinkedIn Signal)',
        description: 'Every application resolves to one of four states within 14 days: Viewed, Under consideration, Not moving forward (with reason), Interview requested',
        solves: 'Feedback problem - applications no longer vanish into silence',
        tradeoffs: ['Requires recruiter-side bulk-triage tool', 'Fixed rejection reasons may feel impersonal'],
        risks: ['Recruiters might ignore the tool', 'Legal exposure in disclosure-regulated markets'],
        chosen: true
      },
      {
        name: 'Solution #2: Recruiter bulk-triage queue',
        description: 'Multi-select panel allowing recruiters to apply status + reason template to hundreds of entry-level applications at once',
        solves: 'Enables #1 without crushing recruiters with manual work',
        tradeoffs: ['New workflow recruiters must learn', 'Risk of mass-rejection to clear queues'],
        risks: ['Recruiter time-per-req might increase beyond +5% tolerance'],
        chosen: true
      },
      {
        name: 'Solution #3: Unbundled free visibility tier',
        description: 'Give early-career users free access to currently-paywalled features (Featured Applicant, low-competition filter)',
        solves: 'Access problem - features that help most no longer behind unaffordable paywall',
        tradeoffs: ['Premium cannibalization risk', 'Sets precedent that paywall is negotiable'],
        risks: ['Other segments may demand similar unbundling'],
        chosen: false
      },
      {
        name: 'Solution #4: Recency-weighted matching mode',
        description: 'Reweight matching signals to favor trajectory and recency over absolute tenure',
        solves: 'Cold-start problem - thin profiles get better matches',
        tradeoffs: ['Touches core ranking infrastructure', 'High effort, uncertain outcome'],
        risks: ['Could degrade match quality for other segments'],
        chosen: false
      },
      {
        name: 'Solution #5: Verified Early Talent badge',
        description: 'Partnership-based trust signal similar to Handshake\'s institutional verification',
        solves: 'Cold-start credibility',
        tradeoffs: ['Depends on external partnerships LinkedIn doesn\'t fully control'],
        risks: ['Long timeline, uncertain adoption'],
        chosen: false
      }
    ],

    prioritization: {
      framework: 'RICE (Reach × Impact × Confidence / Effort)',
      explanation: 'Scored five candidate solutions where Reach is 1-10 relative scale (internal data not available), Impact is 1-3, Confidence is percentage, and Effort is person-months. Solution #1 (closed-loop status) + #2 (recruiter triage) scored highest at 2.70 and 1.68 RICE respectively, chosen as Release 1 because they have the best confidence-to-effort ratio and generate labeled data that more ambitious fixes (#4 matching) would eventually need. #3 (unbundled visibility) deprioritized to Release 2 due to Premium cannibalization risk requiring careful monitoring. #4 (recency matching) deferred to Release 3 as it\'s highest-effort with uncertain outcome - better sequenced after Release 1 generates training data. #5 (verified badge) moved to backlog as partnership-dependent with unclear timeline.',
      visualization: {
        type: 'table',
        data: {
          headers: ['Solution', 'Reach', 'Impact', 'Confidence', 'Effort', 'RICE', 'Priority'],
          rows: [
            ['Closed-loop status', '9', '3', '80%', '8', '2.70', 'P0'],
            ['Recruiter triage queue', '6', '2', '70%', '5', '1.68', 'P0'],
            ['Unbundled visibility', '7', '2', '70%', '4', '2.45', 'P1'],
            ['Recency-weighted matching', '8', '2', '55%', '10', '0.88', 'P2'],
            ['Verified badge', '5', '1', '50%', '6', '0.42', 'Backlog']
          ]
        }
      }
    },

    solution: {
      description: 'LinkedIn Signal - a closed-loop application-status system paired with a recruiter-side bulk-triage tool, so every application resolves to one of four defined states within 14 days instead of disappearing into silence. Named to reflect the core idea: early-career applicants should get a signal back, not silence.',
      keyFeatures: [
        'Four-state status field visible in Job Tracker: Viewed, Under consideration, Not moving forward (with reason), Interview requested',
        'Recruiter bulk-action panel: multi-select applicants, apply status + reason template in one action',
        'Auto-transition to Viewed when Hiring Assistant opens or scores an application',
        '21-day auto-close default for untouched applications with disclosed reason',
        'In-app and optional email notification on status change',
        'Org-editable rejection-reason template library'
      ],
      userFlow: 'User applies via LinkedIn Apply, application appears in Job Tracker, recruiter triages using bulk panel or Hiring Assistant auto-marks as Viewed, status updates within 14 days with reason if rejected, user can take action based on clear signal instead of wondering',
      visuals: [
        {
          type: 'wireframe',
          description: 'Job Tracker page showing four status pills and reason line for rejections'
        },
        {
          type: 'wireframe',
          description: 'Recruiter requisition triage page with bulk-selection toolbar and status column'
        }
      ]
    },

    mvp: {
      mvpFeatures: [
        'FR1: Four-state application status field in Job Tracker',
        'FR2: Recruiter bulk-action panel with multi-select',
        'FR3: Auto-transition to Viewed via Hiring Assistant',
        'Fixed rejection-reason list (5-6 options instead of editable templates)'
      ],
      futureIterations: [
        'FR4: 21-day auto-close default (legal review required)',
        'FR5: In-app and email notifications',
        'FR6: Org-editable rejection-reason templates',
        'Application Readiness nudge (pre-apply profile-completeness prompt)',
        'Match Explanation feature (fold into Release 3 with recency matching)'
      ],
      explicitlyRejected: [
        'Explainable Job Fit Score as standalone release - explaining a bad match exposes weakness rather than building trust; better bundled with improved matching in Release 3',
        'Applicant-level A/B testing - creates contaminated results; requisition-level cluster randomization required despite higher sample-size need',
        'Platform-wide launch - scoped to entry-level requisitions and early-career applicants initially'
      ]
    },

    experimentation: {
      hypothesis: 'If entry-level requisitions get closed-loop status instead of current silent default, applicants will show higher 30-day platform re-engagement and self-reported trust, without measurable increase in recruiter time-per-requisition',
      experiment: 'Cluster-randomized controlled trial where randomization unit is the entry-level requisition (not applicant). Treatment: full FR1+2+3+MVP reason list. Control: current experience. Duration: 8 weeks minimum. Sample: 800-1,200 requisitions per arm, stratified by employer size and industry.',
      successCriteria: [
        'Median time-to-status moves to 14 days',
        '30-day Early-Career Activation Rate (ECAR) increases',
        'Applicant trust survey scores improve',
        'Recruiter time-per-req stays within +5% tolerance'
      ],
      expectedBehavior: 'Early-career applicants to treatment requisitions receive status within 14 days, show higher return-to-platform rates at 30 days, and report higher trust scores versus control group still experiencing silence',
      rolloutApproach: 'Phase 0: Employer opt-out with default-on for Hiring Assistant users. Phase 1: Post-experiment ramp from 25% to 60% to 100% over 3 weeks if guardrails hold. Phase 2: US/English markets first, EU second (legal review required), India/high-volume markets third.'
    },

    learnings: {
      whatILearned: [
        'The highest-confidence fix isn\'t always the flashiest - closing a feedback loop scored better than AI matching overhaul',
        'Two-sided marketplace constraints are real: every change helping seekers had to be stress-tested against recruiter impact',
        'Data gaps should be flagged honestly: the 96% dormancy baseline needs internal validation before treating as ground truth',
        'RICE discipline catches feature bloat: both Job Fit Score and Application Readiness nudge had to earn their place through scoring, not assumption'
      ],
      whatSurprisedMe: 'How much of LinkedIn\'s early-career problem traces to structural incentives (experience-weighted matching, Premium paywalls) rather than missing features. The fix isn\'t adding more, it\'s reweighting what already exists.',
      whatIWouldChange: 'Run 8-10 structured interviews with early-career job seekers before writing the PRD. The personas are synthesized from secondary research, which is directionally useful but not a substitute for hearing real users describe the problem in their own words.',
      nextInvestigation: 'What\'s the actual baseline ECAR from LinkedIn\'s internal data? The 96% dormancy figure suggests low single digits, but that\'s a back-calculation, not a measured number. Also: does explaining a match help or hurt before the underlying match quality improves? That assumption sits underneath the decision to defer Match Explanation to Release 3.'
    },

    pmReflection: 'This case study demonstrates the full PM process from problem framing through business impact, built entirely from public secondary research. The biggest limitation, flagged throughout, is the lack of primary user interviews - the personas synthesize research patterns rather than quoting real people. What this version proves is the reasoning process: how a problem gets scoped, prioritized, and sequenced into a shippable release. The trade-offs section names five choices that closed off real alternatives, argued honestly in both directions. The hardest one: choosing to fix feedback (silence) before fixing matching (relevance), even though better matches feel more exciting, because closed-loop status has higher confidence and generates the data better matching would need. Every decision traces back to one core bet: LinkedIn is the only platform with the graph, reach, and data to solve early-career problems completely - it just hasn\'t pointed that machinery at this segment on purpose yet.'
  }
};
