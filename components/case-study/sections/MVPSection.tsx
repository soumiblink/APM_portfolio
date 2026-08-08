import { Body, Caption } from '../../ui/Typography';
import { Card } from '../../ui/Card';
import { SectionHeader } from '../SectionHeader';
import { MVP } from '@/lib/case-study-types';

interface MVPSectionProps {
  mvp: MVP;
}

export function MVPSection({ mvp }: MVPSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeader
        number="10"
        title="MVP & Roadmap"
        description="What ships first, what comes later, and what we deliberately won't build"
        id="mvp"
      />

      <div className="space-y-6">
        {/* MVP Features */}
        <Card padding="lg" className="border-accent-600 bg-accent-50">
          <Caption className="uppercase tracking-wide text-accent-700 mb-3">
            MVP — Ship First
          </Caption>
          <ul className="space-y-2">
            {mvp.mvpFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-accent-600 font-bold">✓</span>
                <Body size="sm">{feature}</Body>
              </li>
            ))}
          </ul>
        </Card>

        {/* Future Iterations */}
        <Card padding="lg">
          <Caption className="uppercase tracking-wide text-charcoal-600 mb-3">
            Future Iterations
          </Caption>
          <ul className="space-y-2">
            {mvp.futureIterations.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-neutral-400">→</span>
                <Body size="sm" muted>{feature}</Body>
              </li>
            ))}
          </ul>
        </Card>

        {/* Explicitly Rejected */}
        <Card padding="lg" className="bg-warmth-200">
          <Caption className="uppercase tracking-wide text-charcoal-600 mb-3">
            Explicitly Rejected
          </Caption>
          <ul className="space-y-2">
            {mvp.explicitlyRejected.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-neutral-400">✕</span>
                <Body size="sm" muted>{feature}</Body>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
