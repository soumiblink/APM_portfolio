import { Body } from '../ui/Typography';

interface TheDecisionProps {
  decision: string;
}

/**
 * Highlights a key product decision
 * Makes important choices stand out in the narrative
 */
export function TheDecision({ decision }: TheDecisionProps) {
  return (
    <div className="my-8 bg-accent-50 border-l-4 border-accent-600 p-6 rounded-r-lg">
      <Body className="font-medium text-accent-900">
        <span className="font-semibold">The decision:</span> {decision}
      </Body>
    </div>
  );
}
