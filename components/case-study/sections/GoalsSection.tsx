import { Body, Caption } from '../../ui/Typography';
import { SectionHeader } from '../SectionHeader';
import { MetricBlock } from '../MetricBlock';
import { Goals } from '@/lib/case-study-types';

interface GoalsSectionProps {
  goals: Goals;
}

export function GoalsSection({ goals }: GoalsSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeader
        number="05"
        title="Goals & Success Metrics"
        description="How we define success for users, the product, and the business"
        id="goals"
      />

      {goals.note && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <Caption className="text-amber-800">
            <strong>Note:</strong> {goals.note}
          </Caption>
        </div>
      )}

      <div className="space-y-6 mb-8">
        <div className="bg-neutral-50 border-l-4 border-accent-500 p-6 rounded-r-lg">
          <Caption className="uppercase tracking-wide text-neutral-600 mb-2">
            Product Goal
          </Caption>
          <Body className="font-medium">
            {goals.product}
          </Body>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-lg">
            <Caption className="uppercase tracking-wide text-neutral-600 mb-2">
              User Outcome
            </Caption>
            <Body size="sm">
              {goals.user}
            </Body>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-lg">
            <Caption className="uppercase tracking-wide text-neutral-600 mb-2">
              Business Outcome
            </Caption>
            <Body size="sm">
              {goals.business}
            </Body>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <Caption className="uppercase tracking-wide text-neutral-600 mb-3 block">
          Leading Indicators
        </Caption>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.leadingIndicators.map((indicator, index) => (
            <MetricBlock
              key={index}
              label={`Indicator ${index + 1}`}
              value={indicator}
              type="target"
            />
          ))}
        </div>
      </div>

      {goals.guardrailMetrics && goals.guardrailMetrics.length > 0 && (
        <div>
          <Caption className="uppercase tracking-wide text-neutral-600 mb-3 block">
            Guardrail Metrics
          </Caption>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goals.guardrailMetrics.map((metric, index) => (
              <MetricBlock
                key={index}
                label={`Guardrail ${index + 1}`}
                value={metric}
                type="guardrail"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
