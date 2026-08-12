import { Body, Caption } from '../../ui/Typography';
import { Badge } from '../../ui/Badge';
import { SectionHeader } from '../SectionHeader';
import { Evidence } from '@/lib/case-study-types';

interface EvidenceSectionProps {
  evidence: Evidence[];
}

export function EvidenceSection({ evidence }: EvidenceSectionProps) {
  const typeStyles: Record<string, { border: string; bg: string; text: string; badge: string }> = {
    research: { 
      border: 'border-l-blue-600', 
      bg: 'bg-blue-50/50', 
      text: 'text-blue-900',
      badge: 'bg-blue-100 text-blue-700 border-blue-300'
    },
    data: { 
      border: 'border-l-green-600', 
      bg: 'bg-green-50/50', 
      text: 'text-green-900',
      badge: 'bg-green-100 text-green-700 border-green-300'
    },
    competitive: { 
      border: 'border-l-purple-600', 
      bg: 'bg-purple-50/50', 
      text: 'text-purple-900',
      badge: 'bg-purple-100 text-purple-700 border-purple-300'
    },
    user: { 
      border: 'border-l-accent-600', 
      bg: 'bg-accent-50/50', 
      text: 'text-accent-900',
      badge: 'bg-accent-100 text-accent-700 border-accent-300'
    },
    observation: { 
      border: 'border-l-orange-600', 
      bg: 'bg-orange-50/50', 
      text: 'text-orange-900',
      badge: 'bg-orange-100 text-orange-700 border-orange-300'
    },
    assumption: { 
      border: 'border-l-charcoal-400', 
      bg: 'bg-warmth-100/50', 
      text: 'text-charcoal-800',
      badge: 'bg-warmth-200 text-charcoal-700 border-charcoal-300'
    },
  };

  return (
    <section className="mb-16">
      <SectionHeader
        number="03"
        title="Context & Evidence"
        description="Research, data, and observations that informed the product direction"
        id="evidence"
      />

      {/* Credibility Note */}
      <div className="mb-8 p-6 bg-warmth-100 border-l-4 border-charcoal-900 rounded-r-lg">
        <Caption className="text-charcoal-700 leading-relaxed">
          <strong className="text-charcoal-900">Note on authenticity:</strong> Items marked "Real" reflect actual research or competitive data. 
          Items marked "Illustrative" show the type of analysis that would inform this decision.
        </Caption>
      </div>

      <div className="space-y-6">
        {evidence.map((item, index) => {
          const style = typeStyles[item.type] || typeStyles.assumption;
          return (
            <div 
              key={index} 
              className={`group relative bg-white ${style.bg} border-l-4 ${style.border} rounded-r-lg p-8 hover:shadow-xl transition-all duration-300`}
            >
              {/* Header with badges */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Badge 
                    variant="outline" 
                    className={`text-[10px] uppercase tracking-wider font-semibold border ${style.badge}`}
                  >
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </Badge>
                  <span className="text-charcoal-300 font-bold">·</span>
                  <Badge 
                    variant={item.isReal ? 'accent' : 'default'} 
                    className="text-[10px] uppercase tracking-wider font-semibold"
                  >
                    {item.isReal ? 'Real' : 'Illustrative'}
                  </Badge>
                </div>
              </div>

              {/* Title */}
              <div className={`text-lg font-bold mb-3 ${style.text}`}>
                {item.title}
              </div>

              {/* Details */}
              <Body size="sm" className="text-charcoal-600 leading-relaxed mb-4">
                {item.description}
              </Body>

              {/* Source footer */}
              {item.source && (
                <div className="pt-4 border-t border-charcoal-200/50">
                  <Caption className="text-charcoal-500 italic">
                    Source: {item.source}
                  </Caption>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
