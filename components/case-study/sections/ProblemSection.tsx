import { Body, Caption } from '../../ui/Typography';
import { SectionHeader } from '../SectionHeader';
import { Problem } from '@/lib/case-study-types';

interface ProblemSectionProps {
  problem: Problem;
}

export function ProblemSection({ problem }: ProblemSectionProps) {
  return (
    <section className="mb-16">
      <SectionHeader
        number="02"
        title="The Problem"
        description="Understanding who we're building for and why it matters"
        id="problem"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Who Card */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-warmth-100 to-warmth-200 rounded-lg opacity-50"></div>
          <div className="relative bg-warmth-50 border-l-4 border-charcoal-900 rounded-lg p-8 hover:border-accent-600 transition-all duration-300">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl font-bold text-charcoal-900 opacity-20">01</span>
              <div>
                <Caption className="text-charcoal-500 uppercase tracking-wider text-[10px] font-semibold mb-1">Target User</Caption>
                <div className="text-xl font-bold text-charcoal-900">Who</div>
              </div>
            </div>
            <Body size="sm" className="text-charcoal-700 leading-relaxed">{problem.who}</Body>
          </div>
        </div>

        {/* What Card */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-warmth-100 rounded-lg opacity-50"></div>
          <div className="relative bg-white border-l-4 border-accent-600 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl font-bold text-accent-600 opacity-20">02</span>
              <div>
                <Caption className="text-accent-700 uppercase tracking-wider text-[10px] font-semibold mb-1">Core Problem</Caption>
                <div className="text-xl font-bold text-charcoal-900">What</div>
              </div>
            </div>
            <Body size="sm" className="text-charcoal-700 leading-relaxed">{problem.what}</Body>
          </div>
        </div>

        {/* Why It Matters Card */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-sand-50 to-warmth-100 rounded-lg opacity-50"></div>
          <div className="relative bg-warmth-50 border-l-4 border-charcoal-900 rounded-lg p-8 hover:border-accent-600 transition-all duration-300">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl font-bold text-charcoal-900 opacity-20">03</span>
              <div>
                <Caption className="text-charcoal-500 uppercase tracking-wider text-[10px] font-semibold mb-1">Impact</Caption>
                <div className="text-xl font-bold text-charcoal-900">Why It Matters</div>
              </div>
            </div>
            <Body size="sm" className="text-charcoal-700 leading-relaxed">{problem.whyItMatters}</Body>
          </div>
        </div>

        {/* Current Experience Card */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-warmth-100 to-sand-100 rounded-lg opacity-50"></div>
          <div className="relative bg-white border-l-4 border-charcoal-400 rounded-lg p-8 hover:border-charcoal-900 hover:shadow-xl transition-all duration-300">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl font-bold text-charcoal-400 opacity-30">04</span>
              <div>
                <Caption className="text-charcoal-500 uppercase tracking-wider text-[10px] font-semibold mb-1">Status Quo</Caption>
                <div className="text-xl font-bold text-charcoal-900">Current Experience</div>
              </div>
            </div>
            <Body size="sm" className="text-charcoal-700 leading-relaxed">{problem.currentExperience}</Body>
          </div>
        </div>
      </div>
    </section>
  );
}

