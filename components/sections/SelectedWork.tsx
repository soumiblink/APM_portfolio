import { Container } from '../layout/Container';
import { Heading, Body, Eyebrow } from '../ui/Typography';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ProjectCard } from '../projects/ProjectCard';
import { projects } from '@/lib/projects';

export function SelectedWork() {
  return (
    <Section spacing="lg" id="work">
      <Container>
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3">Selected Work</Eyebrow>
            <Heading as="h2" className="mb-4">
              Product thinking in action
            </Heading>
            <Body size="lg" muted>
              Four projects that demonstrate different PM competencies — 
              from discovery to strategy to execution.
            </Body>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.slug} 
              animation="fade" 
              delay={0.1 * index}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
