import { Container } from '../layout/Container';
import { Heading, Body, Eyebrow } from '../ui/Typography';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';

export function About() {
  return (
    <Section spacing="lg" id="about">
      <Container size="sm">
        <AnimatedSection animation="fade">
          <div className="max-w-2xl mx-auto">
            <Eyebrow className="mb-3">About</Eyebrow>
            <Heading as="h2" className="mb-6">
              Why I'm moving from engineering to product
            </Heading>
            
            <div className="space-y-4">
              <Body>
                I started out building things. I studied computer science, explored AI/ML, 
                and wrote a lot of code. But the more I built, the more I realized the 
                hardest part wasn't the implementation — it was figuring out what to build 
                in the first place.
              </Body>
              
              <Body>
                That's when I got interested in product management. I wanted to understand 
                how to identify real problems, talk to users, prioritize ruthlessly, and 
                make tradeoffs that actually matter. My technical background helps me work 
                better with engineers, but what drives me is solving problems people care about.
              </Body>
              
              <Body>
                I'm looking for APM opportunities where I can learn from experienced PMs, 
                ship real products, and grow my product instincts. I care about thoughtful 
                product work more than titles.
              </Body>
              
              <Body muted className="text-sm pt-4 border-t border-neutral-200">
                When I'm not thinking about product, I'm probably reading about startups, 
                experimenting with new AI tools, or trying to figure out why some products 
                just work better than others.
              </Body>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
