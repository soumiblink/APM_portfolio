import { Body } from '../ui/Typography';

interface ProductQuestionProps {
  question: string;
}

/**
 * A thoughtful product question that prompts deeper thinking
 * Use sparingly - only where it genuinely adds value
 */
export function ProductQuestion({ question }: ProductQuestionProps) {
  return (
    <div className="my-8 pl-6 border-l-2 border-border-strong">
      <Body size="sm" className="text-charcoal-600 italic">
        <span className="font-semibold text-charcoal-700 not-italic">Product question:</span> {question}
      </Body>
    </div>
  );
}
