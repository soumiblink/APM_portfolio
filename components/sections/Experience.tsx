import { Container } from '../layout/Container';
import { Heading, Body, Eyebrow, Caption } from '../ui/Typography';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Tech Company',
    period: 'Summer 2025',
    description: 'Built features for internal tools, learned how engineering teams prioritize work, and saw firsthand how product decisions impact implementation.',
    learnings: 'Technical feasibility matters. Good PMs understand engineering constraints.',
  },
  {
    role: 'AI/ML Research Assistant',
    company: 'University Lab',
    period: '2024 - 2025',
    description: 'Worked on NLP projects, explored AI model behavior, and contributed to research on feedback classification systems.',
    learnings: 'AI is powerful but not magic. Real impact comes from solving the right problem.',
  },
  {
    role: 'CS/AI Student',
    company: 'University',
    period: '2022 - 2026',
    description: 'Studied computer science with a focus on AI/ML, took product design and HCI courses, and built side projects to explore product thinking.',
    learnings: 'Technical depth is an advantage in PM. Building things teaches you what matters.',
  },
];

export function Experience() {
  return (
    <Section spacing="lg" id="experience">
      <Container>
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Experience</Eyebrow>
            <Heading as="h2" className="mb-4">
              Experience
            </Heading>
            <Body size="lg" muted>
              Engineering experience that shaped how I think about product
            </Body>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <AnimatedSection 
              key={exp.role + exp.company} 
              animation="fade" 
              delay={0.1 * index}
            >
              <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border-strong">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-accent-600 border-4 border-warmth-50"></div>
                </div>

                <Caption className="mb-2 text-charcoal-500">{exp.period}</Caption>
                
                <Heading as="h3" className="mb-1">
                  {exp.role}
                </Heading>
                
                <Body size="sm" className="font-medium text-charcoal-600 mb-3">
                  {exp.company}
                </Body>
                
                <Body size="sm" className="mb-3 text-charcoal-700">
                  {exp.description}
                </Body>
                
                <div className="bg-accent-50 border-l-2 border-accent-600 pl-4 py-2">
                  <Body size="sm" className="text-charcoal-700">
                    → {exp.learnings}
                  </Body>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
