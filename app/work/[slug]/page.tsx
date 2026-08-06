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
import { linkedInJobNavigator } from '@/lib/case-studies/linkedin-job-navigator';

// This would be expanded to include all case studies
const caseStudies = [linkedInJobNavigator];

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);

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
      <EvidenceSection evidence={content.evidence} />
      <InsightSection insight={content.insight} />
      <GoalsSection goals={content.goals} />
      <ConstraintsSection constraints={content.constraints} />
      <OptionsSection options={content.optionsConsidered} />
      <PrioritizationSection prioritization={content.prioritization} />
      <SolutionSection solution={content.solution} />
      <MVPSection mvp={content.mvp} />
      <ExperimentationSection experimentation={content.experimentation} />
      <LearningsSection learnings={content.learnings} />
      <ReflectionSection reflection={content.pmReflection} />
    </CaseStudyLayout>
  );
}
