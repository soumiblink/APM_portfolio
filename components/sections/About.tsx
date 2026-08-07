import { Container } from '../layout/Container';
import { Section } from '../ui/Section';

export function About() {
  return (
    <Section spacing="lg" id="about" className="bg-warmth-100 border-y border-border">
      <Container size="text">
        {/* Editorial about section */}
        <div className="max-w-[680px] mx-auto">
          <div className="section-label mb-6">
            About
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-charcoal-900 mb-8 leading-snug">
            Why I'm moving from engineering to product
          </h2>
          
          <div className="space-y-5 text-base text-charcoal-700 leading-relaxed">
            <p>
              I started out building things. I studied computer science, explored AI/ML, 
              and wrote a lot of code. But the more I built, the more I realized the 
              hardest part wasn't the implementation — it was figuring out what to build 
              in the first place.
            </p>
            
            <p>
              That's when I got interested in product management. I wanted to understand 
              how to identify real problems, talk to users, prioritize ruthlessly, and 
              make tradeoffs that actually matter. My technical background helps me work 
              better with engineers, but what drives me is solving problems people care about.
            </p>
            
            <p>
              I'm looking for APM opportunities where I can learn from experienced PMs, 
              ship real products, and grow my product instincts. I care about thoughtful 
              product work more than titles.
            </p>
            
            <div className="mt-8 pt-6 border-t border-border-strong">
              <p className="text-sm text-charcoal-600 leading-relaxed">
                <span className="font-semibold text-charcoal-900">A note on this portfolio:</span> Everything 
                here reflects real thinking and honest constraints. Where I don't have data, I say so. 
                Where projects are speculative, they're labeled as such. I'd rather show clear thinking 
                with honest limitations than fabricate impressive metrics.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
