import { FullCaseStudy } from '../case-study-types';

export const linkedInJobNavigator: FullCaseStudy = {
  slug: 'linkedin-job-navigator',
  name: 'LinkedIn Job Navigator',
  tagline: "Early-career job seekers can't filter signal from noise.",
  type: 'Consumer Product',
  status: 'Portfolio Project',
  
  caseStudy: {
    overview: {
      product: 'LinkedIn Job Navigator',
      myRole: 'Product Strategy & Design',
      projectType: 'Portfolio Project - Product Strategy',
      timeline: '3 weeks',
      skillsDemonstrated: [
        'User Research',
        'Problem Framing',
        'Product Strategy',
        'Prioritization',
        'Consumer Product Thinking'
      ],
      productThesis: 'Early-career job seekers need fewer, better-fit opportunities rather than thousands of irrelevant listings.'
    },

    problem: {
      who: 'Recent graduates and early-career professionals (0-2 years experience) actively job searching',
      what: 'LinkedIn shows thousands of job postings, but most are irrelevant, requiring hours of manual filtering',
      whyItMatters: 'Job searching is already stressful. Wasting time on irrelevant listings increases burnout and delays finding the right role',
      currentExperience: 'Users see 1000+ recommended jobs but 90%+ are not a fit. Filters are too broad. Users spend hours manually reviewing postings.'
    },

    evidence: [
      {
        type: 'observation',
        title: 'Personal Experience',
        description: 'As a recent CS grad, I spent 20+ hours per week on LinkedIn during my job search. Most of that time was filtering out irrelevant roles.',
        isReal: true
      },
      {
        type: 'research',
        title: 'Informal User Conversations',
        description: 'Talked to 8 classmates about their job search. All mentioned frustration with irrelevant LinkedIn recommendations. Common complaint: I see 500 senior roles when I have zero experience.',
        source: 'Personal network',
        isReal: true
      },
      {
        type: 'competitive',
        title: 'LinkedIn Filter Limitations',
        description: 'LinkedIn allows filtering by location, industry, and experience level, but experience level is often ignored in recommendations. No way to filter by actual job requirements.',
        source: 'LinkedIn platform analysis',
        isReal: true
      },
      {
        type: 'assumption',
        title: 'Volume vs Relevance Tradeoff',
        description: 'Hypothesis: LinkedIn optimizes for showing more jobs (engagement) rather than better jobs (fit). This benefits LinkedIn but hurts users.',
        isReal: false
      }
    ],

    insight: {
      insight: "Job seekers don't need more opportunities — they need the right opportunities.",
      impact: 'This reframes the product from discovery tool (showing everything) to relevance engine (showing what matters). Instead of competing on volume, compete on fit quality.'
    },

    goals: {
      product: 'Help early-career job seekers find relevant opportunities 10x faster',
      user: 'Spend less time filtering, more time applying to roles that actually fit',
      business: 'Higher engagement from users who find value quickly (retention over volume)',
      leadingIndicators: [
        'Time spent per application (reduce from 20min to 5min)',
        'Application-to-interview ratio (improve from 2% to 8%)',
        'Weekly active users (increase return visits)'
      ],
      guardrailMetrics: [
        "Total jobs shown (don't drop below 50 relevant options)",
        'User satisfaction score (maintain >4/5)'
      ],
      note: 'These are proposed target metrics for a portfolio project — not actual results.'
    },

    constraints: [
      { category: 'technical', description: 'No access to LinkedIn API or job posting data — would need to build relevance model from scratch' },
      { category: 'time', description: '3-week timeline limits scope to strategy and product design' },
      { category: 'resource', description: 'Solo project — no engineering team to build MVP' },
      { category: 'platform', description: 'LinkedIn owns the platform — this would need to be a browser extension or standalone tool' },
      { category: 'adoption', description: 'Users are already on LinkedIn — hard to pull them to a new tool' }
    ],

    optionsConsidered: [
      {
        name: 'Browser Extension (Relevance Filter)',
        description: 'Build a Chrome extension that filters LinkedIn job listings in real-time based on skills, keywords, and experience match',
        solves: 'Works within LinkedIn, low user friction',
        tradeoffs: ['Requires web scraping (fragile)', 'Limited by LinkedIn UI changes'],
        risks: ['LinkedIn could block it', 'Hard to scale beyond Chrome users'],
        chosen: false
      },
      {
        name: 'Standalone Job Aggregator',
        description: 'Create a separate platform that pulls jobs from multiple sources (LinkedIn, Indeed, etc.) and ranks by relevance',
        solves: 'Full control over UX and relevance model',
        tradeoffs: ['Requires users to leave LinkedIn', 'Needs job data partnerships'],
        risks: ['High user acquisition cost', 'Network effects favor LinkedIn'],
        chosen: false
      },
      {
        name: 'Smart Job Feed (Product Vision)',
        description: 'Design a product concept for LinkedIn that uses AI to show 10-20 hyper-relevant jobs per day instead of 1000+ mediocre ones',
        solves: 'Addresses root cause (LinkedIn incentive model)',
        tradeoffs: ['No ability to build it (portfolio project)', 'Requires LinkedIn buy-in'],
        risks: ["Speculative — can't validate with real users"],
        chosen: true
      }
    ],

    prioritization: {
      framework: 'Impact vs Feasibility (portfolio context)',
      explanation: 'Given the 3-week timeline and lack of engineering resources, I chose the Smart Job Feed concept. Why? The goal of this portfolio project is to demonstrate product thinking, not ship code. A browser extension would show technical execution but limit strategic depth. The product vision approach lets me explore the core product problem (relevance over volume), design solutions, and make prioritization decisions — all key PM skills. It is the highest learning impact for the time invested.'
    },

    solution: {
      description: "The Smart Job Feed reimagines LinkedIn's job recommendations as a curated daily feed. Instead of showing everything, it shows the 10-20 best-fit roles based on your skills, experience, and goals. Think Spotify Discover Weekly for jobs — algorithmic curation that gets smarter over time.",
      keyFeatures: [
        'Daily Relevance Feed: 10-20 curated jobs delivered each morning',
        'Fit Score: Each job shows a 0-100 relevance score with explanation',
        'Skills Gap Analysis: Shows what you have vs. what the job requires',
        'Application Tracking: One-click apply with context about why this job fits',
        'Feedback Loop: Not interested trains the algorithm to improve recommendations'
      ],
      userFlow: 'User opens LinkedIn to see Daily Feed (10-20 jobs), clicks job to see Fit Score breakdown, reviews Skills Gap, applies or dismisses, algorithm learns from feedback',
      visuals: [
        {
          type: 'wireframe',
          description: 'Daily Feed UI showing curated job cards with fit scores and one-sentence relevance explanations'
        },
        {
          type: 'flow',
          description: 'User flow from feed to job detail to application with feedback loop integration'
        }
      ]
    },

    mvp: {
      mvpFeatures: [
        'Daily feed of 10-20 jobs (manual curation for MVP)',
        'Fit score calculation based on skills and experience match',
        'Skills gap visualization (what you have vs. need)',
        'Simple feedback mechanism (relevant / not relevant)'
      ],
      futureIterations: [
        'AI-powered relevance ranking (learn from user behavior)',
        'Salary transparency and fit',
        'Company culture match scoring',
        'Application outcome tracking (interviews, offers)',
        'Network-based recommendations (connections at companies)'
      ],
      explicitlyRejected: [
        'Generic job board (defeats the purpose of relevance)',
        'Automated apply-to-all feature (spammy, low quality)',
        'Endless scroll feed (reduces focus on quality)'
      ]
    },

    experimentation: {
      hypothesis: 'If we show users 15 highly relevant jobs instead of 500 random ones, they will apply to more jobs and report higher satisfaction',
      experiment: 'A/B test: Control (current LinkedIn feed) vs. Treatment (curated 15-job daily feed). Measure application rate, time spent, and user satisfaction over 2 weeks.',
      successCriteria: [
        'Application rate increases by 3x (from 2% to 6%)',
        'Time per application decreases by 50%',
        'User satisfaction score >4.5/5'
      ],
      expectedBehavior: 'Users in treatment group should apply faster, report less frustration, and return daily to check their feed',
      rolloutApproach: 'Start with 5% of early-career users (0-2 years experience), monitor metrics for 1 week, then expand to 20% if successful'
    },

    learnings: {
      whatILearned: [
        'Relevance is more valuable than volume, but building a relevance model is hard without data',
        'User pain points are obvious (too many irrelevant jobs), but solutions require tradeoffs (curation reduces serendipity)',
        'Product strategy is about choosing what NOT to build as much as what to build'
      ],
      whatSurprisedMe: "How much LinkedIn's business model (engagement = ad revenue) creates misaligned incentives. Showing fewer, better jobs might hurt LinkedIn's metrics even if it helps users.",
      whatIWouldChange: 'I would have talked to more users earlier. My initial assumption was that everyone wanted fewer jobs, but some users actually like browsing — they find it inspiring even if it is inefficient.',
      nextInvestigation: 'How do users define relevance? Is it skills match, company culture, salary, location, growth potential? I assumed skills match was number one, but it might vary by person.'
    },

    pmReflection: "This project taught me that good product management isn't about having all the answers — it's about asking the right questions. I started by assuming the problem was too many jobs, but through research and reflection, I realized the real problem was too many irrelevant jobs. That shift changed everything: the product direction, the success metrics, even the prioritization framework. The hardest part was accepting that I couldn't build a working MVP in 3 weeks. But choosing to focus on strategy over execution forced me to think deeply about the problem, which is exactly what PMs need to do before writing a single line of code."
  }
};
