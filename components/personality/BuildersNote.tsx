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
    <div className="my-8 bg-charcoal-900 text-warmth-100 rounded-lg p-6">
      <Caption className="uppercase tracking-wide text-charcoal-400 mb-2 block">
        Builder's Note
      </Caption>
      <Body size="sm" className="text-warmth-100">
        {note}
      </Body>
    </div>
  );
}
