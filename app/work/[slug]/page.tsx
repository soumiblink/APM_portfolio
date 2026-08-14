import { notFound } from 'next/navigation';
import {
  CaseStudyLayout,
  ProblemSection,
  EvidenceSection,
  InsightSection,
  GoalsSection,
  ConstraintsSection,
  OptionsSection,
  PrioritizationSection,
  SolutionSection,
  MVPSection,
  ExperimentationSection,
  LearningsSection,
  ReflectionSection,
} from '@/components/case-study';
import {
  ProductQuestion,
  TheTradeoff,
  TheDecision,
  WhatICut,
  StillThinkingAbout,
  BuildersNote,
} from '@/components/personality';
import { Body, Caption } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { linkedInJobNavigator } from '@/lib/case-studies/linkedin-job-navigator';
import { notionAiForesight } from '@/lib/case-studies/notion-ai-foresight';

// All case studies
const caseStudies = [linkedInJobNavigator, notionAiForesight];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.name} | Case Study`,
    description: caseStudy.tagline,
    openGraph: {
      title: caseStudy.name,
      description: caseStudy.tagline,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  // Render Notion AI Foresight case study
  if (slug === 'notion-ai-foresight') {
    // Create overview object for CaseStudyLayout
    const overview = {
      product: caseStudy.title || '',
      myRole: caseStudy.role || '',
      projectType: caseStudy.type || '',
      timeline: caseStudy.timeline || '',
      skillsDemonstrated: caseStudy.competencies || [],
      productThesis: caseStudy.executiveSummary?.overview || ''
    };
    
    // Transform goals to match the expected structure
    const transformedGoals = {
      product: caseStudy.goals?.product?.join('; ') || '',
      user: caseStudy.goals?.user?.join('; ') || '',
      business: caseStudy.goals?.business?.join('; ') || '',
      leadingIndicators: caseStudy.goals?.metrics?.leading || [],
      guardrailMetrics: caseStudy.goals?.guardrails || []
    };
    
    // Transform MVP to match expected structure
    const transformedMVP = {
      mvpFeatures: caseStudy.mvp?.scope?.included || [],
      futureIterations: caseStudy.mvp?.futureIterations || [],
      explicitlyRejected: caseStudy.mvp?.explicitlyRejected || []
    };
    
    // Transform experimentation to match expected structure
    const firstExperiment = caseStudy.experimentation?.experiments?.[0];
    const transformedExperimentation = firstExperiment ? {
      hypothesis: caseStudy.experimentation?.hypothesis || '',
      experiment: caseStudy.experimentation?.approach || '',
      successCriteria: [firstExperiment.successCriteria].filter(Boolean),
      expectedBehavior: firstExperiment.learnings || '',
      rolloutApproach: caseStudy.experimentation?.experiments?.map((e: any) => e.name).join(' → ') || ''
    } : undefined;
    
    // Transform learnings to match expected structure
    const transformedLearnings = {
      whatILearned: caseStudy.learnings?.whatWentWell || [],
      whatSurprisedMe: caseStudy.learnings?.whatSurprisedMe?.[0] || '',
      whatIWouldChange: caseStudy.learnings?.whatWasHard?.[0] || '',
      nextInvestigation: caseStudy.learnings?.["whatI'dDoNextTime"]?.[0] || ''
    };
    
    // Transform solution to match expected structure
    const transformedSolution = {
      description: caseStudy.solution?.overview || '',
      keyFeatures: caseStudy.solution?.keyFeatures?.map((f: any) => `${f.name}: ${f.description}`) || [],
      userFlow: caseStudy.solution?.vision || ''
    };
    
    return (
      <CaseStudyLayout
        name={caseStudy.title}
        tagline={caseStudy.subtitle}
        overview={overview}
      >
        {/* Notion Link Banner */}
        {caseStudy.notionLink && (
          <div className="mb-12 p-6 bg-gradient-to-r from-accent-50 to-warmth-100 border-l-4 border-accent-600 rounded-r-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <Caption className="text-accent-700 uppercase tracking-wider text-xs font-semibold mb-1">
                  Full Case Study
                </Caption>
                <Body size="sm" className="text-charcoal-700">
                  Read the complete case study with all details in Notion
                </Body>
              </div>
              <Button 
                href={caseStudy.notionLink}
                variant="primary"
                size="sm"
                className="flex items-center gap-2"
              >
                <span>View in Notion</span>
                <span>→</span>
              </Button>
            </div>
          </div>
        )}
        
        <ProblemSection problem={caseStudy.problem} />
        
        <ProductQuestion question="What would need to be true for Notion to win the AI OS category without out-integrating Glean?" />
        
        <EvidenceSection evidence={caseStudy.problem.evidence} />
        
        <TheDecision decision="Notion's advantage is reasoning over content it already owns, not out-integrating competitors or out-executing ClickUp on task management." />
        
        <GoalsSection goals={transformedGoals} />
        
        <ConstraintsSection constraints={caseStudy.constraints} />
        
        <BuildersNote note="Having built with LLMs, I know the hardest part isn't the model; it's the reasoning scaffold. Notion's databases already store structured fields alongside unstructured content in one graph. Most competitors have one or the other, rarely both natively linked. That's the architectural advantage." />
        
        <OptionsSection options={caseStudy.prioritization?.options || []} />
        
        <TheTradeoff 
          chose="Trust before autonomy: explainable signals first"
          overThis="Autonomous Re-plan Agent (the exciting feature)"
          because="The most exciting feature scored lowest in RICE by design. Foresight signals are worthless if users don't trust them. F4 (Explainable Signal Trace) had to come before F10 (Autonomous Actions)."
        />
        
        <PrioritizationSection prioritization={caseStudy.prioritization} />
        
        <SolutionSection solution={transformedSolution} />
        
        <MVPSection mvp={transformedMVP} />
        
        <WhatICut items={[
          {
            what: "Schedule-conflict detection in MVP",
            why: "Ship one signal type (status-language) well with airtight explainability before adding a second. Precision over breadth."
          },
          {
            what: "All autonomous actions (F10)",
            why: "Autonomous re-planning is the most exciting feature to imagine and the worst one to build first. Trust must be earned."
          },
          {
            what: "Cross-app integrations (Slack, GitHub)",
            why: "Compete on owned-content advantage first. Don't race Glean's connector breadth in v1."
          }
        ]} />
        
        <ExperimentationSection experimentation={transformedExperimentation} />
        
        <LearningsSection learnings={transformedLearnings} />
        
        <StillThinkingAbout questions={[
          "What's the right false-positive tolerance before team leads start ignoring badges entirely?",
          "How should Foresight behave in sparse workspaces—degrade gracefully or suppress signals?",
          "Could 'risk flagging' be perceived as workplace surveillance even when unintended?",
          "Would the unit economics (scan cost vs. Business tier pricing) actually work at scale?"
        ]} />
        
        <ReflectionSection reflection={caseStudy.reflection?.statement || ''} />
      </CaseStudyLayout>
    );
  }

  // Render LinkedIn Job Navigator case study (original)
  const { name, tagline, caseStudy: content } = caseStudy;

  return (
    <CaseStudyLayout
      name={name}
      tagline={tagline}
      overview={content.overview}
    >
      {/* Notion Link Banner */}
      {caseStudy.notionLink && (
        <div className="mb-12 p-6 bg-gradient-to-r from-accent-50 to-warmth-100 border-l-4 border-accent-600 rounded-r-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <Caption className="text-accent-700 uppercase tracking-wider text-xs font-semibold mb-1">
                Full Case Study
              </Caption>
              <Body size="sm" className="text-charcoal-700">
                Read the complete case study with all details in Notion
              </Body>
            </div>
            <Button 
              href={caseStudy.notionLink}
              variant="primary"
              size="sm"
              className="flex items-center gap-2"
            >
              <span>View in Notion</span>
              <span>→</span>
            </Button>
          </div>
        </div>
      )}
      
      <ProblemSection problem={content.problem} />
      
      <ProductQuestion question="What would need to be true for this to work at LinkedIn scale?" />
      
      <EvidenceSection evidence={content.evidence} />
      
      <InsightSection insight={content.insight} />
      
      <TheDecision decision="Focus on relevance over volume — show fewer jobs, but make sure they actually fit." />
      
      <GoalsSection goals={content.goals} />
      
      <ConstraintsSection constraints={content.constraints} />
      
      <BuildersNote note="As someone who has built recommendation systems, I know relevance is harder than it looks. You need training data, user behavior signals, and constant tuning. LinkedIn has all of this. The question isn't technical feasibility — it's whether their business model allows it." />
      
      <OptionsSection options={content.optionsConsidered} />
      
      <TheTradeoff 
        chose="Strategic depth over working code"
        overThis="Browser extension I could ship"
        because="The goal was to demonstrate product thinking, not engineering execution. A working extension would be impressive but wouldn't show the depth of PM skills recruiters look for."
      />
      
      <PrioritizationSection prioritization={content.prioritization} />
      
      <SolutionSection solution={content.solution} />
      
      <MVPSection mvp={content.mvp} />
      
      <WhatICut items={[
        {
          what: "Automated apply-to-all feature",
          why: "Would increase application volume but decrease quality. Goes against the core insight of relevance over volume."
        },
        {
          what: "Endless scroll feed",
          why: "Infinite scroll optimizes for engagement, not outcomes. Wanted to respect user time with a defined daily set."
        }
      ]} />
      
      <ExperimentationSection experimentation={content.experimentation} />
      
      <LearningsSection learnings={content.learnings} />
      
      <StillThinkingAbout questions={[
        "How would users react to seeing only 15 jobs when they're used to hundreds? Would it feel limiting or liberating?",
        "What if the algorithm gets it wrong? How do you build trust when you're filtering out 95% of options?",
        "Could this work for senior roles where there are naturally fewer openings anyway?"
      ]} />
      
      <ReflectionSection reflection={content.pmReflection} />
    </CaseStudyLayout>
  );
}
