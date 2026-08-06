import { Container } from '../layout/Container';
import { Display, Body, Eyebrow } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Hero() {
  return (
    <Section spacing="xl" className="pt-32 md:pt-40">
      <Container size="default">
        <AnimatedSection animation="fade">
          <div className="max-w-4xl">
            <Eyebrow className="mb-4">Associate Product Manager</Eyebrow>
            
            <Display className="mb-6">
              Building products that solve real problems
            </Display>
            
            <Body size="lg" className="mb-8 max-w-2xl">
              I'm a CS/AI grad transitioning into product management. 
              I care about understanding users, making smart tradeoffs, 
              and building things people actually need.
              <span className="block mt-4 text-neutral-600 text-base">
                Currently exploring early-career PM opportunities where technical depth meets product thinking.
              </span>
            </Body>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg"
                href="#work"
              >
                See my work
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                href="/resume.pdf"
              >
                Resume
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
