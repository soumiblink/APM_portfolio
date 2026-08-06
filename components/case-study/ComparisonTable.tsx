import { Heading, Body, Caption } from '../ui/Typography';
import { Option } from '@/lib/case-study-types';

interface ComparisonTableProps {
  options: Option[];
}

export function ComparisonTable({ options }: ComparisonTableProps) {
  return (
    <div className="space-y-6">
      {options.map((option, index) => (
        <div
          key={index}
          className={`
            border-2 rounded-lg p-6
            ${option.chosen 
              ? 'border-accent-500 bg-accent-50' 
              : 'border-neutral-200 bg-white'
            }
          `}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <Heading as="h4" className="mb-2">
                {option.name}
              </Heading>
              <Body size="sm" className="text-neutral-700">
                {option.description}
              </Body>
            </div>
            {option.chosen && (
              <div className="bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Chosen
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-neutral-200">
            <div>
              <Caption className="uppercase tracking-wide text-neutral-600 mb-2">
                Solves
              </Caption>
              <Body size="sm">{option.solves}</Body>
            </div>

            <div>
              <Caption className="uppercase tracking-wide text-neutral-600 mb-2">
                Tradeoffs
              </Caption>
              <ul className="space-y-1">
                {option.tradeoffs.map((tradeoff, i) => (
                  <li key={i}>
                    <Body size="sm" className="text-neutral-700">
                      • {tradeoff}
                    </Body>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Caption className="uppercase tracking-wide text-neutral-600 mb-2">
                Risks
              </Caption>
              <ul className="space-y-1">
                {option.risks.map((risk, i) => (
                  <li key={i}>
                    <Body size="sm" className="text-neutral-700">
                      • {risk}
                    </Body>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
