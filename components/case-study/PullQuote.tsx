import { Body } from '../ui/Typography';

interface PullQuoteProps {
  quote: string;
  context?: string;
}

export function PullQuote({ quote, context }: PullQuoteProps) {
  return (
    <div className="my-12 py-8 border-l-4 border-accent-600 pl-6 bg-accent-50">
      <Body size="lg" className="font-medium text-charcoal-900 mb-2 italic">
        "{quote}"
      </Body>
      {context && (
        <Body size="sm" muted>
          {context}
        </Body>
      )}
    </div>
  );
}
