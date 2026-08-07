import { Caption } from './Typography';

interface CompetencyIndicatorProps {
  competency: string;
  subtle?: boolean;
}

/**
 * Subtle visual indicator for PM competencies
 * Not a badge or tag - just a small signal for hiring managers
 */
export function CompetencyIndicator({ competency, subtle = false }: CompetencyIndicatorProps) {
  if (subtle) {
    return (
      <span className="text-xs text-neutral-500 font-mono">
        {competency}
      </span>
    );
  }

  return (
    <Caption className="text-neutral-500">
      {competency}
    </Caption>
  );
}
