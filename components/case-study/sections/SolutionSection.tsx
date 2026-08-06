import { Body, Caption, Heading } from '../../ui/Typography';
import { Card } from '../../ui/Card';
import { SectionHeader } from '../SectionHeader';
import { Solution } from '@/lib/case-study-types';

interface SolutionSectionProps {
  solution: Solution;
}

export function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeader
        number="09"
        title="Product Direction & Solution"
        description="The product approach chosen and how it addresses the problem"
        id="solution"
      />

      <div className="mb-8">
        <Body className="text-neutral-800 leading-relaxed">
          {solution.description}
        </Body>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <Heading as="h4" className="mb-4">
          Key Features
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solution.keyFeatures.map((feature, index) => (
            <Card key={index} padding="md" className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <Body size="sm" className="pt-1">
                {feature}
              </Body>
            </Card>
          ))}
        </div>
      </div>

      {/* User Flow */}
      {solution.userFlow && (
        <div className="mb-8">
          <Heading as="h4" className="mb-4">
            User Flow
          </Heading>
          <Card padding="lg" className="bg-neutral-50">
            <Body size="sm" muted>
              {solution.userFlow}
            </Body>
          </Card>
        </div>
      )}

      {/* Visuals */}
      {solution.visuals && solution.visuals.length > 0 && (
        <div>
          <Heading as="h4" className="mb-4">
            Design & Architecture
          </Heading>
          <div className="space-y-4">
            {solution.visuals.map((visual, index) => (
              <Card key={index} padding="lg">
                <Caption className="uppercase tracking-wide text-neutral-600 mb-2">
                  {visual.type}
                </Caption>
                <Body size="sm">
                  {visual.description}
                </Body>
                {visual.url && (
                  <div className="mt-4 p-4 bg-neutral-100 rounded text-center">
                    <Caption className="text-neutral-500">
                      [Visual placeholder: {visual.url}]
                    </Caption>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
