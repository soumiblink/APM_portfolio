import { Body, Caption } from '../../ui/Typography';
import { Card } from '../../ui/Card';
import { SectionHeader } from '../SectionHeader';
import { Constraint } from '@/lib/case-study-types';

interface ConstraintsSectionProps {
  constraints: Constraint[];
}

export function ConstraintsSection({ constraints }: ConstraintsSectionProps) {
  const icons: Record<string, string> = {
    technical: '⚙️',
    time: '⏱️',
    resource: '👥',
    platform: '📱',
    adoption: '📊',
    business: '💼',
  };

  return (
    <section className="mb-16">
      <SectionHeader
        number="06"
        title="Constraints"
        description="Realistic limitations that shaped the product decisions"
        id="constraints"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {constraints.map((constraint, index) => (
          <Card key={index} padding="md" className="flex items-start gap-3">
            <span className="text-2xl">{icons[constraint.category]}</span>
            <div>
              <Caption className="uppercase tracking-wide text-charcoal-600 mb-1">
                {constraint.category}
              </Caption>
              <Body size="sm">
                {constraint.description}
              </Body>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
