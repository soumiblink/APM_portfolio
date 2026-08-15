import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export function Contact() {
  return (
    <Section spacing="xl" id="contact">
      <Container size="text">
        {/* Strong typographic CTA */}
        <div className="max-w-[680px]">
          <div className="section-label mb-6">
            Open to APM opportunities
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-charcoal-900 leading-tight mb-8">
            Have a product problem worth thinking about?
          </h2>
          
          <p className="text-lg text-charcoal-700 leading-relaxed mb-10">
           I'd genuinely like to hear it, whether that's a role, a hard problem you're stuck on, or just a conversation about how you're thinking through something.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="mailto:soumi4717@gmail.com"
              variant="primary"
              size="lg"
            >
              Email me
            </Button>
            
            <Button
              href="https://www.linkedin.com/in/soumi-ghosh-sep"
              variant="secondary"
              size="lg"
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
