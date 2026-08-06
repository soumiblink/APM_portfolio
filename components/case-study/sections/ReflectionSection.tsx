import { Body } from '../../ui/Typography';
import { SectionHeader } from '../SectionHeader';

interface ReflectionSectionProps {
  reflection: string;
}

export function ReflectionSection({ reflection }: ReflectionSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeader
        number="13"
        title="PM Reflection"
        description="Personal thoughts on the product decisions and process"
        id="reflection"
      />

      <div className="bg-neutral-50 border-l-4 border-neutral-900 p-8 rounded-r-lg">
        <Body className="text-neutral-800 leading-relaxed italic">
          {reflection}
        </Body>
      </div>
    </section>
  );
}
