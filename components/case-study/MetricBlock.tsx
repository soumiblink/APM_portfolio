import { Body, Caption } from '../ui/Typography';
import { Badge } from '../ui/Badge';

interface MetricBlockProps {
  label: string;
  value: string;
  description?: string;
  type?: 'target' | 'actual' | 'guardrail';
}

export function MetricBlock({ label, value, description, type = 'target' }: MetricBlockProps) {
  const bgColors = {
    target: 'bg-warmth-200 border-border',
    actual: 'bg-accent-50 border-accent-200',
    guardrail: 'bg-warmth-200 border-border-strong',
  };

  const badgeVariants = {
    target: 'outline' as const,
    actual: 'accent' as const,
    guardrail: 'default' as const,
  };

  const badgeLabels = {
    target: 'Target',
    actual: 'Actual',
    guardrail: 'Guardrail',
  };

  return (
    <div className={`border rounded-lg p-4 ${bgColors[type]}`}>
      <div className="flex items-start justify-between mb-2">
        <Caption className="uppercase tracking-wide text-charcoal-600">
          {label}
        </Caption>
        <Badge variant={badgeVariants[type]} className="text-xs">
          {badgeLabels[type]}
        </Badge>
      </div>
      <Body className="font-semibold text-lg mb-1">
        {value}
      </Body>
      {description && (
        <Caption className="text-charcoal-600">
          {description}
        </Caption>
      )}
    </div>
  );
}
