import { Container } from '../layout/Container';
import { Heading, Body, Eyebrow, Caption } from '../ui/Typography';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';

const process = [
  {
    number: '01',
    step: 'Discovery',
    description: 'Before a solution, I want the real problem not the one that is easiest to assume. That means talking to users directly, checking what the data actually shows, and resisting the urge to skip straight to building.',
    focus: 'Understanding'
  },
  {
    number: '02',
    step: 'Define',
    description: 'A vague problem gets you a confident answer to the wrong question. What are we actually solving, for whom, and why now? Get this wrong, and no amount of good execution saves you later.',
    focus: 'Clarity'
  },
  {
    number: '03',
    step: 'Prioritize',
    description: 'Prioritization is not picking what to do it is committing to what you wont. The things I chose not to build say as much about my judgment as the things I shipped.',
    focus: 'Tradeoffs'
  },
  {
    number: '04',
    step: 'Build',
    description: 'I would rather ship something small and find out I was wrong in a week than spend a quarter building something polished and wrong. Working with engineering means finding the smallest version that actually teaches us something.',
    focus: 'Execution'
  },
  {
    number: '05',
    step: 'Measure',
    description: 'Define success criteria upfront. Track what matters. Use data to inform the next decision, not just to justify what we already did.',
    focus: 'Learning'
  },
  {
    number: '06',
    step: 'Iterate',
    description: 'Use what you learned to improve. Double down on what works, cut what doesn\'t, and stay open to changing direction when the data says so.',
    focus: 'Adaptation'
  }
];

export function HowIThink() {
  return (
    <Section spacing="xl" id="how-i-think" className="bg-warmth-50">
      <Container>
        {/* Header */}
        <AnimatedSection animation="fade">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Eyebrow className="mb-3">How I Think</Eyebrow>
            <Heading as="h2" className="mb-4 text-3xl md:text-4xl">
              My product process
            </Heading>
            <Body size="lg" className="text-charcoal-700">
              Product management is about making good decisions with incomplete information. Here's how I approach it.
            </Body>
          </div>
        </AnimatedSection>

        {/* 3-column grid for perfect symmetry */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((item, index) => (
            <AnimatedSection 
              key={item.step} 
              animation="fade" 
              delay={0.05 * index}
            >
              <div className="group relative bg-warmth-100 rounded-lg p-6 hover:bg-white hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-accent-600">
                {/* Number watermark */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-charcoal-100 group-hover:text-accent-100 transition-colors">
                  {item.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Focus badge */}
                  <Caption className="inline-block mb-3 px-3 py-1 bg-charcoal-900 text-warmth-100 text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {item.focus}
                  </Caption>

                  {/* Step name */}
                  <Heading as="h3" className="text-xl mb-3 text-charcoal-900">
                    {item.step}
                  </Heading>

                  {/* Description */}
                  <Body size="sm" className="text-charcoal-700 leading-relaxed">
                    {item.description}
                  </Body>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection animation="fade" delay={0.3}>
          <div className="max-w-4xl mx-auto mt-10 pt-6 border-t border-border text-center">
            <Body size="sm" className="text-charcoal-600 italic">
              This isn't a rigid framework - it's how I think about moving from ambiguity to action. Real product work is messier, and that's okay.
            </Body>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
