import { Body, Caption, Heading } from '../../ui/Typography';
import { Card } from '../../ui/Card';
import { SectionHeader } from '../SectionHeader';
import { Learnings } from '@/lib/case-study-types';

interface LearningsSectionProps {
  learnings: Learnings;
}

export function LearningsSection({ learnings }: LearningsSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeader
        number="12"
        title="Learnings"
        description="What I learned, what surprised me, and what I'd do differently"
        id="learnings"
      />

      <div className="space-y-6">
        {/* What I Learned */}
        <div>
          <Heading as="h4" className="mb-3">
            What I Learned
          </Heading>
          <ul className="space-y-3">
            {learnings.whatILearned.map((learning, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-accent-600 font-bold mt-1">•</span>
                <Body size="sm">{learning}</Body>
              </li>
            ))}
          </ul>
        </div>

        {/* What Surprised Me */}
        <Card padding="lg" className="bg-neutral-50">
          <Heading as="h4" className="mb-3">
            What Surprised Me
          </Heading>
          <Body size="sm">
            {learnings.whatSurprisedMe}
          </Body>
        </Card>

        {/* What I Would Change */}
        <Card padding="lg" className="border-accent-200">
          <Heading as="h4" className="mb-3">
            What I Would Change
          </Heading>
          <Body size="sm">
            {learnings.whatIWouldChange}
          </Body>
        </Card>

        {/* Next Investigation */}
        <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-r-lg">
          <Caption className="uppercase tracking-wide text-accent-700 mb-2">
            What I'd Investigate Next
          </Caption>
          <Body size="sm" className="text-accent-900">
            {learnings.nextInvestigation}
          </Body>
        </div>
      </div>
    </section>
  );
}
