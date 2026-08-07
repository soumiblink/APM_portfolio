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
    <div className="my-8 bg-neutral-900 text-neutral-100 rounded-lg p-6">
      <Caption className="uppercase tracking-wide text-neutral-400 mb-2 block">
        Builder's Note
      </Caption>
      <Body size="sm" className="text-neutral-200">
        {note}
      </Body>
    </div>
  );
}
