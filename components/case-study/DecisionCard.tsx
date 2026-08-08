import { ReactNode } from 'react';
import { Heading, Body, Caption } from '../ui/Typography';
import { Card } from '../ui/Card';

interface DecisionCardProps {
  title: string;
  children: ReactNode;
  highlight?: boolean;
  label?: string;
}

export function DecisionCard({ title, children, highlight = false, label }: DecisionCardProps) {
  return (
    <Card 
      padding="lg" 
      className={highlight ? 'border-accent-600 bg-accent-50' : ''}
    >
      {label && (
        <Caption className="uppercase tracking-wide text-charcoal-500 mb-2">
          {label}
        </Caption>
      )}
      <Heading as="h4" className="mb-3">
        {title}
      </Heading>
      <div className="space-y-2">
        {children}
      </div>
    </Card>
  );
}
