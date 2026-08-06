import { Body, Heading, Caption } from '../../ui/Typography';
import { Card } from '../../ui/Card';
import { SectionHeader } from '../SectionHeader';
import { Prioritization } from '@/lib/case-study-types';

interface PrioritizationSectionProps {
  prioritization: Prioritization;
}

export function PrioritizationSection({ prioritization }: PrioritizationSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeader
        number="08"
        title="Prioritization"
        description="How decisions were made about what to build and when"
        id="prioritization"
      />

      <Card padding="lg" className="mb-6 bg-accent-50 border-accent-200">
        <Caption className="uppercase tracking-wide text-accent-700 mb-2">
          Framework Used
        </Caption>
        <Heading as="h4" className="text-accent-900">
          {prioritization.framework}
        </Heading>
      </Card>

      <div className="prose prose-sm max-w-none">
        <Body>
          {prioritization.explanation}
        </Body>
      </div>

      {prioritization.visualization && (
        <div className="mt-6 p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
          <Caption className="uppercase tracking-wide text-neutral-600 mb-3">
            Prioritization Visualization
          </Caption>
          <Body size="sm" muted>
            {prioritization.visualization.type === 'matrix' && 'Impact/Effort Matrix'}
            {prioritization.visualization.type === 'table' && 'Scoring Table'}
            {prioritization.visualization.type === 'score' && 'Priority Scores'}
          </Body>
          {/* Visualization would be rendered here based on data */}
        </div>
      )}
    </section>
  );
}
