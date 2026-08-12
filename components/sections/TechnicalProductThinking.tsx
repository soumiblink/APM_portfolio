import { Container } from '../layout/Container';
import { Heading, Body, Eyebrow, Caption } from '../ui/Typography';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';

const capabilities = [
  {
    icon: '⚙️',
    capability: 'Understand technical constraints',
    why: "I know when an idea is technically hard vs. technically impossible. That changes prioritization."
  },
  {
    icon: '🔨',
    capability: 'Prototype product ideas',
    why: 'I can build quick prototypes to test assumptions instead of waiting for eng resources.'
  },
  {
    icon: '🤖',
    capability: 'Evaluate AI capabilities',
    why: "I've built with AI/ML enough to know what it can and can't do. That prevents overcommitting."
  },
  {
    icon: '🎯',
    capability: 'Make realistic MVP decisions',
    why: "I know what's hard to build and what's not. That makes MVP scoping more accurate."
  },
];

export function TechnicalProductThinking() {
  return (
    <Section spacing="xl" className="bg-warmth-50">
      <Container>
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mx-auto mb-12">
            <Eyebrow className="mb-3">Technical Product Thinking</Eyebrow>
            <Heading as="h2" className="mb-4">
              Why my engineering background matters
            </Heading>
            <Body size="lg" muted>
              My engineering background isn't about writing production code — 
              it's about understanding what's possible, what's hard, and what's worth building.
            </Body>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {capabilities.map((item, index) => (
            <AnimatedSection key={item.capability} animation="fade" delay={0.1 * index}>
              <div className="group bg-white border-l-4 border-charcoal-900 rounded-r-lg p-6 hover:border-accent-600 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-5">
                  {/* Icon circle */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-2xl group-hover:bg-accent-600 group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <Heading as="h4" className="mb-2 text-lg text-charcoal-900">
                      {item.capability}
                    </Heading>
                    
                    <Body size="sm" className="text-charcoal-700 leading-relaxed">
                      {item.why}
                    </Body>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade" delay={0.5}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-accent-50 border-l-4 border-accent-600 rounded-r-md p-6">
              <Body className="text-charcoal-800 mb-3 leading-relaxed">
                <span className="font-semibold text-charcoal-900">The advantage:</span> I can speak product, 
                user, and engineering. When a designer proposes something impossible, I know. When 
                an engineer says something will take 6 months, I can ask why. When we need to test 
                an idea quickly, I can prototype it myself.
              </Body>
              
              <Body size="sm" className="text-charcoal-600">
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
