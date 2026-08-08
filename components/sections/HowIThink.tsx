import { Container } from '../layout/Container';
import { Heading, Body, Eyebrow } from '../ui/Typography';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';

const process = [
  {
    step: 'Discovery',
    description: 'Start with the problem, not the solution. Talk to users, examine data, understand the context.',
    focus: 'Understanding',
  },
  {
    step: 'Define',
    description: 'Frame the right problem. What are we really solving? Who are we solving it for? Why now?',
    focus: 'Clarity',
  },
  {
    step: 'Prioritize',
    description: 'Make tradeoffs explicit. What matters most? What can wait? What should we not build?',
    focus: 'Tradeoffs',
  },
  {
    step: 'Build',
    description: 'Work with engineering to ship iteratively. Start small, learn fast, refine as we go.',
    focus: 'Execution',
  },
  {
    step: 'Measure',
    description: 'Define success criteria upfront. Track what matters. Use data to inform the next decision.',
    focus: 'Learning',
  },
];

export function HowIThink() {
  return (
    <Section spacing="xl" className="bg-warmth-50">
      <Container>
        {/* Header */}
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Eyebrow className="mb-4">How I Think</Eyebrow>
            <Heading as="h2" className="mb-6 text-3xl md:text-4xl">
              My product process
            </Heading>
            <Body size="lg" className="text-charcoal-700 leading-relaxed">
              Product management is about making good decisions with incomplete information. 
              Here's how I approach it.
            </Body>
          </div>
        </AnimatedSection>

        {/* Vertical cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {process.map((item, index) => (
            <AnimatedSection 
              key={item.step} 
              animation="fade" 
              delay={0.1 * index}
            >
              <div className="bg-warmth-100 border border-border rounded-lg p-8 hover:border-accent-600 hover:shadow-md transition-all duration-300">
                {/* Top row: Number and Focus badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-600 text-warmth-100 flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="inline-block px-3 py-1 bg-warmth-200 text-charcoal-600 text-xs font-semibold uppercase tracking-wider rounded-full">
                      {item.focus}
                    </span>
                  </div>
                </div>

                {/* Step name */}
                <Heading as="h3" className="mb-3 text-2xl">
                  {item.step}
                </Heading>

                {/* Description */}
                <Body className="text-charcoal-700 leading-relaxed">
                  {item.description}
                </Body>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection animation="fade" delay={0.6}>
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border text-center">
            <Body size="sm" className="text-charcoal-600 italic">
              This isn't a rigid framework — it's how I think about moving from ambiguity to action. 
              Real product work is messier, and that's okay.
            </Body>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
