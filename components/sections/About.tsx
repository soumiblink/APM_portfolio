import { Container } from '../layout/Container';
import { Section } from '../ui/Section';
import { Heading, Body } from '../ui/Typography';

export function About() {
  return (
    <Section spacing="xl" id="about" className="bg-warmth-50 relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600 opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <Container>
        <div className="max-w-6xl mx-auto relative">
          {/* Editorial header with large typography */}
          <div className="mb-16">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px flex-1 bg-border"></div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-charcoal-500">About Me</span>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <Heading as="h2" className="text-5xl md:text-6xl mb-6 leading-[1.1] font-semibold">
                Why I'm moving from<br />
                <span className="text-accent-600">engineering to product</span>
              </Heading>
            </div>
          </div>

          {/* Three-column responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="text-6xl font-bold text-accent-600 opacity-20">01</div>
              <Heading as="h3" className="text-2xl mb-4">
                I started as a builder
              </Heading>
              <Body className="text-charcoal-700 leading-relaxed">
                I studied computer science with AI/ML, and wrote a lot of code. 
                But the more I built, the more I realized the hardest part wasn't the 
                implementation, it was figuring out what to build in the first place.
              </Body>
            </div>

            {/* Column 2 */}
            <div className="space-y-4 md:pt-12">
              <div className="text-6xl font-bold text-accent-600 opacity-20">02</div>
              <Heading as="h3" className="text-2xl mb-4">
                I discovered product thinking
              </Heading>
              <Body className="text-charcoal-700 leading-relaxed">
                That question — what's actually worth building, turned out to be the more interesting one. It's what pulled me toward product: understanding a problem well enough to know it's the right one, before writing a single line of code to solve it. My technical background hasn't gone away, it just moved from something I do to something I bring to the decisions I make.
              </Body>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div className="text-6xl font-bold text-accent-600 opacity-20">03</div>
              <Heading as="h3" className="text-2xl mb-4">
                Now I'm seeking opportunity
              </Heading>
              <Body className="text-charcoal-700 leading-relaxed">
                I'm looking for a product role where I can learn from PMs who've done this longer than I have, ship things that reach real users, and build the instincts that only come from doing the work not just studying it.
              </Body>
            </div>
          </div>

          {/* Integrity statement - sophisticated pull quote style */}
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent-600"></div>
            <div className="pl-12 pr-8 py-8 bg-warmth-100 rounded-r-lg">
              <svg className="w-8 h-8 text-accent-600 opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <Body className="text-xl text-charcoal-800 leading-relaxed mb-4 font-light italic">
                Everything here reflects real thinking and honest constraints. Where I don't have data, 
                I say so. Where projects are speculative, they're labeled as such.
              </Body>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-border"></div>
                <Body size="sm" className="text-charcoal-600 font-medium">
                  On honesty and evidence
                </Body>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
