import { Container } from '../layout/Container';
import { Heading, Body, Eyebrow } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';

const topics = [
  'AI product management',
  'Product-led growth',
  'Early-stage product discovery',
  'Technical product decisions',
  'B2B SaaS products',
];

export function CurrentlyExploring() {
  return (
    <Section spacing="md" className="bg-accent-50 border-y border-accent-200">
      <Container>
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow className="mb-3 text-accent-700">Currently Exploring</Eyebrow>
            <Heading as="h3" className="mb-4">
              What I'm learning about right now
            </Heading>
            <Body muted className="mb-6">
              Product management is always evolving. Here's what I'm digging into lately.
            </Body>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {topics.map((topic, index) => (
                <AnimatedSection 
                  key={topic} 
                  animation="fade" 
                  delay={0.05 * index}
                >
                  <Badge variant="accent" className="text-sm py-2 px-4">
                    {topic}
                  </Badge>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
