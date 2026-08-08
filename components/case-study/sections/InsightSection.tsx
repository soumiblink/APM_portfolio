import { Heading, Body } from '../../ui/Typography';
import { SectionHeader } from '../SectionHeader';
import { PullQuote } from '../PullQuote';
import { ProductInsight } from '@/lib/case-study-types';

interface InsightSectionProps {
  insight: ProductInsight;
}

export function InsightSection({ insight }: InsightSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeader
        number="04"
        title="Product Insight"
        description="The key realization that shaped the product direction"
        id="insight"
      />

      <div className="bg-accent-100 border-2 border-accent-600 rounded-lg p-8">
        <Heading as="h3" className="mb-4 text-accent-900">
          {insight.insight}
        </Heading>
        <Body className="text-accent-800">
          <strong>Impact:</strong> {insight.impact}
        </Body>
      </div>
    </section>
  );
}
