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
import { linkedInJobNavigator } from '@/lib/case-studies/linkedin-job-navigator';

// This would be expanded to include all case studies
const caseStudies = [linkedInJobNavigator];

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

  const { name, tagline, caseStudy: content } = caseStudy;

  return (
    <CaseStudyLayout
      name={name}
      tagline={tagline}
      overview={content.overview}
    >
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
