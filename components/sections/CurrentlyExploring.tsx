import { Container } from '../layout/Container';
import { Section } from '../ui/Section';
import { Heading, Body } from '../ui/Typography';

export function CurrentlyExploring() {
  const topics = [
    {
      title: 'AI-native workflows',
      description: 'How products should be designed differently when AI is the foundation, not a feature'
    },
    {
      title: 'Product experimentation',
      description: 'Balancing speed with rigor when testing assumptions'
    },
    {
      title: 'Technical product discovery',
      description: 'Using engineering knowledge to shape product direction early'
    },
    {
      title: 'Early-stage problem finding',
      description: 'Identifying the right problems before jumping to solutions'
    },
    {
      title: 'Human-AI interaction',
      description: 'Designing interfaces where AI augments rather than replaces human judgment'
    },
    {
      title: 'Building for developers',
      description: 'What makes developer tools successful and how to prioritize for technical users'
    },
  ];

  return (
    <Section spacing="xl" className="bg-warmth-200 border-y-2 border-accent-600">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-accent-600 text-warmth-100 text-xs font-bold uppercase tracking-widest rounded-full">
                Currently Exploring
              </span>
            </div>
            <Heading as="h2" className="text-3xl md:text-4xl mb-4">
              What I'm thinking about
            </Heading>
            <Body size="lg" className="text-charcoal-700 max-w-2xl mx-auto">
              The problems and domains I'm actively exploring as an aspiring PM
            </Body>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div 
                key={topic.title}
                className="bg-warmth-100 border-2 border-border rounded-lg p-6 hover:border-accent-600 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Number indicator */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-accent-50 text-accent-700 flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-accent-600 group-hover:text-warmth-100 transition-colors">
                    {index + 1}
                  </div>
                  <div>
                    <Heading as="h3" className="text-lg mb-2 group-hover:text-accent-700 transition-colors">
                      {topic.title}
                    </Heading>
                    <Body size="sm" className="text-charcoal-700 leading-relaxed">
                      {topic.description}
                    </Body>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action note */}
          <div className="mt-10 text-center">
            <Body size="sm" className="text-charcoal-600 italic">
              These aren't just buzzwords — they're real questions I'm working through in my projects and thinking
            </Body>
          </div>
        </div>
      </Container>
    </Section>
  );
}
