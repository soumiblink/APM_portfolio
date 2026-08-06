import { SectionHeader } from '../SectionHeader';
import { ComparisonTable } from '../ComparisonTable';
import { Option } from '@/lib/case-study-types';

interface OptionsSectionProps {
  options: Option[];
}

export function OptionsSection({ options }: OptionsSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeader
        number="07"
        title="Options Considered"
        description="Different approaches evaluated before deciding on the product direction"
        id="options"
      />

      <ComparisonTable options={options} />
    </section>
  );
}
