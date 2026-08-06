import { Body, Caption } from '../ui/Typography';

interface ProjectVisualProps {
  type: 'metric' | 'strategy' | 'insight' | 'experiment';
  data?: any;
}

export function ProjectVisual({ type, data }: ProjectVisualProps) {
  if (!data) return null;

  switch (type) {
    case 'strategy':
      return <StrategyVisual data={data} />;
    case 'insight':
      return <InsightVisual data={data} />;
    case 'experiment':
      return <ExperimentVisual data={data} />;
    case 'metric':
      return <MetricVisual data={data} />;
    default:
      return null;
  }
}

function StrategyVisual({ data }: { data: any }) {
  if (data.choice) {
    // Single choice display
    return (
      <div className="bg-accent-50 border border-accent-200 rounded-lg p-4">
        <Caption className="text-accent-700 uppercase tracking-wide mb-2">
          {data.label}
        </Caption>
        <Body size="sm" className="font-semibold text-accent-900">
          {data.choice}
        </Body>
      </div>
    );
  }

  if (data.from && data.to) {
    // Before/after display
    return (
      <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-4">
        <Caption className="text-neutral-600 uppercase tracking-wide mb-3">
          {data.label}
        </Caption>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <Body size="sm" className="text-neutral-500 line-through">
              {data.from}
            </Body>
          </div>
          <div className="text-accent-600 font-bold">→</div>
          <div className="flex-1">
            <Body size="sm" className="font-semibold text-neutral-900">
              {data.to}
            </Body>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function InsightVisual({ data }: { data: any }) {
  return (
    <div className="bg-neutral-50 border-l-4 border-accent-500 rounded-r-lg p-4">
      <Caption className="text-neutral-600 uppercase tracking-wide mb-2">
        {data.label}
      </Caption>
      <Body size="sm" className="font-bold text-neutral-900 mb-1">
        {data.stat}
      </Body>
      <Caption className="text-neutral-500">
        {data.description}
      </Caption>
    </div>
  );
}

function ExperimentVisual({ data }: { data: any }) {
  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
      <Caption className="text-neutral-600 uppercase tracking-wide mb-2">
        {data.label}
      </Caption>
      <Body size="sm" className="font-mono text-neutral-900 mb-1">
        {data.stat}
      </Body>
      <Caption className="text-neutral-500">
        {data.description}
      </Caption>
    </div>
  );
}

function MetricVisual({ data }: { data: any }) {
  return (
    <div className="bg-accent-50 border border-accent-200 rounded-lg p-4">
      <Caption className="text-accent-700 uppercase tracking-wide mb-2">
        {data.label}
      </Caption>
      <Body className="font-bold text-2xl text-accent-900 mb-1">
        {data.value}
      </Body>
      <Caption className="text-accent-700">
        {data.description}
      </Caption>
    </div>
  );
}
