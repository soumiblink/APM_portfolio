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
    target: 'bg-neutral-50 border-neutral-200',
    actual: 'bg-accent-50 border-accent-200',
    guardrail: 'bg-neutral-100 border-neutral-300',
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
        <Caption className="uppercase tracking-wide text-neutral-600">
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
        <Caption className="text-neutral-600">
          {description}
        </Caption>
      )}
    </div>
  );
}
