import { Body } from '../../ui/Typography';
import { DecisionCard } from '../DecisionCard';
import { SectionHeader } from '../SectionHeader';
import { Problem } from '@/lib/case-study-types';

interface ProblemSectionProps {
  problem: Problem;
}

export function ProblemSection({ problem }: ProblemSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeader
        number="02"
        title="The Problem"
        description="Understanding who we're building for and why it matters"
        id="problem"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DecisionCard title="Who" label="Target User">
          <Body size="sm">{problem.who}</Body>
        </DecisionCard>

        <DecisionCard title="What" label="Core Problem">
          <Body size="sm">{problem.what}</Body>
        </DecisionCard>

        <DecisionCard title="Why It Matters" label="Impact">
          <Body size="sm">{problem.whyItMatters}</Body>
        </DecisionCard>

        <DecisionCard title="Current Experience" label="Status Quo">
          <Body size="sm">{problem.currentExperience}</Body>
        </DecisionCard>
      </div>
    </section>
  );
}
