import { Heading, Eyebrow, Body } from '../ui/Typography';

interface SectionHeaderProps {
  number: string;
  title: string;
  description?: string;
  id: string;
}

export function SectionHeader({ number, title, description, id }: SectionHeaderProps) {
  return (
    <div className="mb-8" id={id}>
      <Eyebrow className="mb-2 text-accent-600">{number}</Eyebrow>
      <Heading as="h2" className="mb-3">
        {title}
      </Heading>
      {description && (
        <Body muted className="max-w-2xl">
          {description}
        </Body>
      )}
    </div>
  );
}
