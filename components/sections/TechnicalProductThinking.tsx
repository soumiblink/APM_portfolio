import { Container } from '../layout/Container';
import { Heading, Body, Eyebrow, Caption } from '../ui/Typography';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';

const capabilities = [
  {
    capability: 'Understand technical constraints',
    why: "I know when an idea is technically hard vs. technically impossible. That changes prioritization.",
    example: 'LinkedIn Job Navigator',
    connection: 'Evaluated whether relevance ranking was feasible vs. building from scratch'
  },
  {
    capability: 'Prototype product ideas',
    why: 'I can build quick prototypes to test assumptions instead of waiting for eng resources.',
    example: 'FeedbackLens',
    connection: 'Built a working NLP pipeline to validate that feedback clustering actually helped PMs'
  },
  {
    capability: 'Evaluate AI capabilities',
    why: "I've built with AI/ML enough to know what it can and can't do. That prevents overcommitting.",
    example: 'Notion AI',
    connection: 'Understood the difference between retrieval-augmented generation and pure completion'
  },
  {
    capability: 'Make realistic MVP decisions',
    why: "I know what's hard to build and what's not. That makes MVP scoping more accurate.",
    example: 'AI Experiment Hub',
    connection: 'Designed an experimentation framework that could ship in weeks, not quarters'
  },
];

export function TechnicalProductThinking() {
  return (
    <Section spacing="xl" className="bg-neutral-900 text-white">
      <Container>
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Eyebrow className="mb-3 text-neutral-400">Technical Product Thinking</Eyebrow>
            <Heading as="h2" className="mb-4 text-white">
              Why I build
            </Heading>
            <Body size="lg" className="text-neutral-300">
              My engineering background isn't about writing production code — 
              it's about understanding what's possible, what's hard, and what's worth building.
            </Body>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {capabilities.map((item, index) => (
            <AnimatedSection key={item.capability} animation="fade" delay={0.1 * index}>
              <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 h-full hover:border-neutral-600 transition-colors">
                <Heading as="h4" className="text-white mb-3 text-lg">
                  {item.capability}
                </Heading>
                
                <Body size="sm" className="text-neutral-300 mb-4 leading-relaxed">
                  {item.why}
                </Body>
                
                <div className="pt-4 border-t border-neutral-700">
                  <Caption className="text-neutral-500 mb-1 text-xs">
                    Applied in:
                  </Caption>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <Body size="sm" className="text-accent-400 font-medium">
                      {item.example}
                    </Body>
                    <span className="text-neutral-600 hidden sm:inline">→</span>
                    <Body size="sm" className="text-neutral-400">
                      {item.connection}
                    </Body>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade" delay={0.5}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-neutral-800 border-l-4 border-accent-600 rounded-r-lg p-6">
              <Body className="text-neutral-100 mb-4 leading-relaxed">
                <span className="font-semibold text-white">The advantage:</span> I can speak product, 
                user, and engineering. When a designer proposes something impossible, I know. When 
                an engineer says something will take 6 months, I can ask why. When we need to test 
                an idea quickly, I can prototype it myself.
              </Body>
              
              <Body size="sm" className="text-neutral-400">
                Technical fluency makes me a faster, more effective PM. But I'm building products, 
                not infrastructure.
              </Body>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
