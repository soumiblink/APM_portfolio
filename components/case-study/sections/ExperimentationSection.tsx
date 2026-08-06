import { Body, Caption } from '../../ui/Typography';
import { Card } from '../../ui/Card';
import { SectionHeader } from '../SectionHeader';
import { Experimentation } from '@/lib/case-study-types';

interface ExperimentationSectionProps {
  experimentation?: Experimentation;
}

export function ExperimentationSection({ experimentation }: ExperimentationSectionProps) {
  if (!experimentation) {
    return (
      <section className="mb-16">
        <SectionHeader
          number="11"
          title="Measurement & Experimentation"
          id="experimentation"
        />
        <Card padding="lg" className="bg-neutral-50">
          <Body size="sm" muted>
            This project did not include a formal experimentation phase.
          </Body>
        </Card>
      </section>
    );
  }

  return (
    <section className="mb-16">
      <SectionHeader
        number="11"
        title="Measurement & Experimentation"
        description="How we validate the product decisions and measure impact"
        id="experimentation"
      />

      <div className="space-y-6">
        {/* Hypothesis */}
        <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-r-lg">
          <Caption className="uppercase tracking-wide text-accent-700 mb-2">
            Hypothesis
          </Caption>
          <Body className="font-medium text-accent-900">
            {experimentation.hypothesis}
          </Body>
        </div>

        {/* Experiment Design */}
        <Card padding="lg">
          <Caption className="uppercase tracking-wide text-neutral-600 mb-2">
            Experiment
          </Caption>
          <Body size="sm">
            {experimentation.experiment}
          </Body>
        </Card>

        {/* Success Criteria */}
        <Card padding="lg">
          <Caption className="uppercase tracking-wide text-neutral-600 mb-3">
            Success Criteria
          </Caption>
          <ul className="space-y-2">
            {experimentation.successCriteria.map((criterion, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-accent-600 font-bold">✓</span>
                <Body size="sm">{criterion}</Body>
              </li>
            ))}
          </ul>
        </Card>

        {/* Expected Behavior */}
        <Card padding="lg" className="bg-neutral-50">
          <Caption className="uppercase tracking-wide text-neutral-600 mb-2">
            Expected Behavior
          </Caption>
          <Body size="sm">
            {experimentation.expectedBehavior}
          </Body>
        </Card>

        {/* Rollout Approach */}
        <Card padding="lg">
          <Caption className="uppercase tracking-wide text-neutral-600 mb-2">
            Rollout Approach
          </Caption>
          <Body size="sm">
            {experimentation.rolloutApproach}
          </Body>
        </Card>
      </div>
    </section>
  );
}
