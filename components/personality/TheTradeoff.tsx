import { Body, Caption } from '../ui/Typography';

interface TheTradeoffProps {
  chose: string;
  overThis: string;
  because: string;
}

/**
 * Highlights an important product tradeoff decision
 * Shows what was chosen and what was sacrificed
 */
export function TheTradeoff({ chose, overThis, because }: TheTradeoffProps) {
  return (
    <div className="my-8 bg-warmth-200 border border-border rounded-lg p-6">
      <Caption className="uppercase tracking-wide text-charcoal-600 mb-3 block">
        The Tradeoff
      </Caption>
      
      <div className="flex items-center gap-4 mb-3">
        <div className="flex-1">
          <Body size="sm" className="font-semibold text-charcoal-900">
            {chose}
          </Body>
        </div>
        
        <div className="text-charcoal-400 font-bold text-lg">→</div>
        
        <div className="flex-1">
          <Body size="sm" className="text-charcoal-500 line-through">
            {overThis}
          </Body>
        </div>
      </div>
      
      <Body size="sm" className="text-charcoal-600">
        {because}
      </Body>
    </div>
  );
}
