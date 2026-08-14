import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export function Hero() {
  return (
    <Section spacing="xl" className="pt-32 md:pt-40">
      <Container>
        {/* Editorial hero - clean, sophisticated, readable */}
        <div className="max-w-[900px]">
          {/* Small editorial label */}
          <div className="section-label mb-6">
            Product Manager
          </div>
          
          {/* Large editorial headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-charcoal-900 mb-16 md:mb-20 pb-[15px]">
            Product Manager with a builder's background.
          </h1>
          
          {/* Supporting text - comfortable reading width */}
          <p className="text-lg md:text-xl text-charcoal-700 leading-relaxed mb-16 md:mb-20 max-w-[680px] pb-[15px]">
            Before product, I built software. Now I use that to ask sharper questions, make faster tradeoffs, 
            and turn ambiguous problems into decisions worth shipping.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-[15px]">
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
              Download resume
            </Button>
          </div>
          
          {/* Competency markers - subtle editorial detail */}
          <div className="pt-8 border-t border-border">
            <div className="text-xs uppercase tracking-wider text-charcoal-500 mb-3 font-medium">
              PM Competencies
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                'Product Discovery',
                'Product Strategy', 
                'Prioritization',
                'Experimentation',
                'AI Product Thinking'
              ].map((comp) => (
                <div key={comp} className="flex items-center gap-2 text-sm text-charcoal-700">
                  <span className="w-1 h-1 rounded-full bg-accent-600"></span>
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
