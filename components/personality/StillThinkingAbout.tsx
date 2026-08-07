import { Body, Caption } from '../ui/Typography';

interface StillThinkingAboutProps {
  questions: string[];
}

/**
 * Shows unresolved product questions
 * Demonstrates intellectual honesty and curiosity
 */
export function StillThinkingAbout({ questions }: StillThinkingAboutProps) {
  return (
    <div className="my-8 border-2 border-dashed border-neutral-300 rounded-lg p-6 bg-white">
      <Caption className="uppercase tracking-wide text-neutral-600 mb-3 block">
        Still Thinking About
      </Caption>
      
      <ul className="space-y-2">
        {questions.map((question, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-neutral-400 flex-shrink-0">?</span>
            <Body size="sm" className="text-neutral-700">
              {question}
            </Body>
          </li>
        ))}
      </ul>
    </div>
  );
}
