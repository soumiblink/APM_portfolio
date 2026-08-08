import { Body, Caption } from '../../ui/Typography';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { SectionHeader } from '../SectionHeader';
import { Evidence } from '@/lib/case-study-types';

interface EvidenceSectionProps {
  evidence: Evidence[];
}

export function EvidenceSection({ evidence }: EvidenceSectionProps) {
  const typeColors: Record<string, string> = {
    research: 'bg-blue-50 border-blue-200 text-blue-700',
    data: 'bg-green-50 border-green-200 text-green-700',
    competitive: 'bg-purple-50 border-purple-200 text-purple-700',
    observation: 'bg-orange-50 border-orange-200 text-orange-700',
    assumption: 'bg-warmth-200 border-border-strong text-charcoal-700',
  };

  return (
    <section className="mb-16">
      <SectionHeader
        number="03"
        title="Context & Evidence"
        description="Research, data, and observations that informed the product direction"
        id="evidence"
      />

      {/* Credibility Note */}
      <div className="mb-6 p-4 bg-warmth-200 border border-border rounded-lg">
        <Caption className="text-charcoal-600">
          <strong>Note on authenticity:</strong> Items marked "Real" reflect actual research or data. 
          Items marked "Illustrative" show the type of analysis that would inform this decision.
        </Caption>
      </div>

      <div className="space-y-4">
        {evidence.map((item, index) => (
          <Card key={index} padding="lg">
            <div className="flex items-start justify-between mb-3">
              <Badge 
                variant="outline" 
                className={`text-xs ${typeColors[item.type]}`}
              >
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </Badge>
              <Badge variant={item.isReal ? 'accent' : 'default'} className="text-xs">
                {item.isReal ? 'Real' : 'Illustrative'}
              </Badge>
            </div>

            <Body className="font-semibold mb-2">
              {item.title}
            </Body>

            <Body size="sm" muted>
              {item.description}
            </Body>

            {item.source && (
              <Caption className="mt-3 text-charcoal-500">
                Source: {item.source}
              </Caption>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
