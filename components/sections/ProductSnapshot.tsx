import { Container } from '../layout/Container';
import { Heading, Body } from '../ui/Typography';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';

const themes = [
  {
    title: 'Product Strategy',
    description: 'Finding the right problem to solve before building the solution',
  },
  {
    title: 'AI Products',
    description: 'Knowing when AI earns its place in a workflow and when it\'s the wrong tool for the job.',
  },
  {
    title: 'User Discovery',
    description: 'What people actually do tells you more than what they say they want',
  },
  {
    title: 'Experimentation',
    description: 'Letting data settle arguments opinions can\'t.',
  },
  {
    title: 'Technical PM',
    description: 'Understanding engineering constraints to make better product decisions',
  },
  {
    title: 'Trust & Responsible AI',
    description: 'Earning autonomy with data, not assuming it.',
  },
];

export function ProductSnapshot() {
  return (
    <Section spacing="lg" className="bg-warmth-200">
      <Container>
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Heading as="h2" className="mb-4">
              What I care about
            </Heading>
            <Body muted>
              The product work that gets me excited
            </Body>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {themes.map((theme, index) => (
              <AnimatedSection 
                key={theme.title} 
                animation="fade" 
                delay={0.1 * index}
              >
                <div className="group">
                  <div className="mb-3 flex items-start">
                    <div className="w-1 h-8 bg-accent-600 mr-3 group-hover:h-12 transition-all duration-300"></div>
                    <Heading as="h3" className="text-xl">
                      {theme.title}
                    </Heading>
                  </div>
                  <Body size="sm" muted>
                    {theme.description}
                  </Body>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
