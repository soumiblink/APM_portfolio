import { Container } from '../layout/Container';
import { Section } from '../ui/Section';

export function CurrentlyExploring() {
  return (
    <Section spacing="md">
      <Container size="text">
        {/* Lightweight editorial list */}
        <div className="max-w-[680px]">
          <div className="text-xs uppercase tracking-wider text-charcoal-500 mb-4 font-medium">
            Currently thinking about
          </div>
          
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-base text-charcoal-700">
            {[
              'AI-native workflows',
              'Product experimentation',
              'Technical product discovery',
              'Early-stage problem finding',
              'Human-AI interaction',
            ].map((topic, index) => (
              <span key={topic} className="flex items-center gap-2">
                {index > 0 && <span className="text-charcoal-300">·</span>}
                {topic}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
