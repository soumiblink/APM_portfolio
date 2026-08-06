import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

/**
 * Badge component for tags, labels, and metadata
 * Used for project tags, competencies, and status indicators
 */
export function Badge({ 
  children, 
  variant = 'default',
  className = '' 
}: BadgeProps) {
  const variants = {
    default: `
      bg-neutral-100 text-neutral-700
      border border-neutral-200
    `,
    accent: `
      bg-accent-100 text-accent-800
      border border-accent-200
    `,
    outline: `
      bg-transparent text-neutral-600
      border border-neutral-300
    `,
  };

  return (
    <span 
      className={`
        inline-flex items-center
        px-2.5 py-1
        text-xs font-medium
        rounded-md
        transition-colors duration-[150ms]
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
