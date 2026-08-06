import { Container } from '../layout/Container';
import { Heading, Body } from '../ui/Typography';
import { Link } from '../ui/Link';
import { Section } from '../ui/Section';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Contact() {
  return (
    <Section spacing="xl" className="bg-neutral-50">
      <Container size="sm">
        <AnimatedSection animation="fade">
          <div className="text-center max-w-2xl mx-auto">
            <Heading as="h2" className="mb-4">
              Have a product problem worth thinking about?
            </Heading>
            
            <Body size="lg" muted className="mb-8">
              I'd love to hear about it. Whether it's an APM opportunity, a product 
              challenge, or just a conversation about building things people need.
            </Body>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
              <Link 
                href="mailto:your.email@example.com"
                variant="accent"
                className="font-medium"
              >
                your.email@example.com
              </Link>
              
              <span className="text-neutral-300 hidden sm:inline">•</span>
              
              <Link 
                href="https://linkedin.com/in/yourprofile"
                variant="accent"
                className="font-medium"
                external
              >
                LinkedIn
              </Link>
              
              <span className="text-neutral-300 hidden sm:inline">•</span>
              
              <Link 
                href="https://github.com/yourusername"
                variant="accent"
                className="font-medium"
                external
              >
                GitHub
              </Link>
              
              <span className="text-neutral-300 hidden sm:inline">•</span>
              
              <Link 
                href="/resume.pdf"
                variant="accent"
                className="font-medium"
                external
              >
                Resume
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
