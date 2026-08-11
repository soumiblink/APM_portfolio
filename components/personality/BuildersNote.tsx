import { Body, Caption } from '../ui/Typography';

interface BuildersNoteProps {
  note: string;
}

/**
 * Connects technical background to product decisions
 * Use sparingly - only when technical context genuinely matters
 */
export function BuildersNote({ note }: BuildersNoteProps) {
  return (
    <div className="my-8 bg-charcoal-900 text-white rounded-lg p-6">
      <Caption className="uppercase tracking-wide mb-2 block" style={{ color: '#ffffff' }}>
        Builder's Note
      </Caption>
      <Body size="sm" className="leading-relaxed" style={{ color: '#ffffff' }}>
        {note}
      </Body>
    </div>
  );
}
