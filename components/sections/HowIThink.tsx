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
    <Section spacing="lg" className="bg-neutral-900 text-white">
      <Container>
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Eyebrow className="mb-3 text-neutral-400">How I Think</Eyebrow>
            <Heading as="h2" className="mb-4 text-white">
              My product process
            </Heading>
            <Body className="text-neutral-300">
              Product management is about making good decisions with incomplete information. 
              Here's how I approach it.
            </Body>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          {process.map((item, index) => (
            <AnimatedSection 
              key={item.step} 
              animation="fade" 
              delay={0.1 * index}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 last:mb-0">
                {/* Step Number & Name */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-4 md:flex-col md:items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-500 text-neutral-900 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <Heading as="h3" className="text-xl text-white mb-1">
                        {item.step}
                      </Heading>
                      <Body size="sm" className="text-accent-400 font-medium">
                        {item.focus}
                      </Body>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-9">
                  <div className="border-l-2 border-neutral-700 pl-6 py-2">
                    <Body className="text-neutral-300">
                      {item.description}
                    </Body>
                  </div>
                </div>

                {/* Connector for non-last items */}
                {index < process.length - 1 && (
                  <div className="md:col-span-3 flex justify-start md:justify-center">
                    <div className="w-0.5 h-8 bg-neutral-700 ml-5 md:ml-0"></div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
