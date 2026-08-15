import { Container } from '../layout/Container';
import { Heading, Body, Eyebrow, Caption } from '../ui/Typography';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';

const capabilities = [
  {
    icon: '⚙️',
    capability: 'Understand technical constraints',
    why: "I can tell the difference between technically hard and technically impossible, and that distinction changes what even makes it onto a roadmap."
  },
  {
    icon: '🔨',
    capability: 'Prototype product ideas',
    why: 'I can mock up or build a working prototype myself to test an assumption, instead of waiting on engineering time to find out if an idea holds up.'
  },
  {
    icon: '🤖',
    capability: 'Evaluate AI capabilities',
    why: "I've built with AI/ML directly, so I know where it's genuinely useful and where it quietly fails, which keeps roadmaps from overpromising what a model can actually do."
  },
  {
    icon: '🎯',
    capability: 'Make realistic MVP decisions',
    why: "Scoping an MVP isn't just deciding what matters most — it's knowing what each piece actually costs to build, so the cut line is realistic instead of aspirational."
  },
];

export function TechnicalProductThinking() {
  return (
    <Section spacing="xl" className="bg-warmth-50">
      <Container>
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mx-auto mb-12">
            <Eyebrow className="mb-3 text-base">Technical Product Thinking</Eyebrow>
            <Heading as="h2" className="mb-4">
              Why my engineering background matters
            </Heading>
            <Body size="lg" muted>
              I don't outsource my technical judgment. When feasibility comes up, I can usually see the reasoning myself, which means I push back on the right things, and don't waste a fight on the wrong ones.
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
                <span className="font-semibold text-charcoal-900">The advantage:</span> The advantage isn't fluency in one language, it's being able to move between product, design, and engineering without losing anything in translation. A designer's proposal the data model can't actually support, an estimate that assumes more complexity than the problem has, I catch these before they cost a sprint.


              </Body>
              
             
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
