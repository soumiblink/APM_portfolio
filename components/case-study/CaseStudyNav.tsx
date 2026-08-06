'use client';

import { useState, useEffect } from 'react';
import { Link } from '../ui/Link';

const sections = [
  { id: 'overview', label: '01. Overview' },
  { id: 'problem', label: '02. Problem' },
  { id: 'evidence', label: '03. Evidence' },
  { id: 'insight', label: '04. Insight' },
  { id: 'goals', label: '05. Goals' },
  { id: 'constraints', label: '06. Constraints' },
  { id: 'options', label: '07. Options' },
  { id: 'prioritization', label: '08. Prioritization' },
  { id: 'solution', label: '09. Solution' },
  { id: 'mvp', label: '10. MVP' },
  { id: 'experimentation', label: '11. Experimentation' },
  { id: 'learnings', label: '12. Learnings' },
  { id: 'reflection', label: '13. Reflection' },
];

export function CaseStudyNav() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-24 hidden lg:block">
      <div className="space-y-1">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`
              block py-2 px-4 text-sm border-l-2 transition-all
              ${
                activeSection === id
                  ? 'border-accent-600 text-accent-600 font-medium bg-accent-50'
                  : 'border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-400'
              }
            `}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
