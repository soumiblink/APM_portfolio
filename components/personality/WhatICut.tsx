import { Body, Caption } from '../ui/Typography';

interface WhatICutProps {
  items: {
    what: string;
    why: string;
  }[];
}

/**
 * Shows what was deliberately NOT built and why
 * Demonstrates prioritization and saying no
 */
export function WhatICut({ items }: WhatICutProps) {
  return (
    <div className="my-8 bg-neutral-50 border border-neutral-200 rounded-lg p-6">
      <Caption className="uppercase tracking-wide text-neutral-600 mb-4 block">
        What I Cut (and why)
      </Caption>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-neutral-400 font-bold text-lg flex-shrink-0">✕</span>
            <div>
              <Body size="sm" className="font-medium text-neutral-700 mb-1">
                {item.what}
              </Body>
              <Body size="sm" className="text-neutral-600">
                {item.why}
              </Body>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
