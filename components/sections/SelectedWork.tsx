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
              Product case studies
            </Heading>
            <Body size="lg" muted>
              Four projects demonstrating discovery, strategy, prioritization, and execution. 
              Each shows different PM competencies applied to real problems.
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
        
        {/* SEO-friendly summary for crawlers */}
        <div className="sr-only">
          <p>
            Product management portfolio showcasing user research, product strategy, 
            prioritization frameworks, MVP development, experimentation, and AI product thinking.
          </p>
        </div>
      </Container>
    </Section>
  );
}
