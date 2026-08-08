import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

/**
 * Badge component for tags, labels, and metadata
 * Redesigned with proper contrast and cohesive color system
 */
export function Badge({ 
  children, 
  variant = 'default',
  className = '' 
}: BadgeProps) {
  const variants = {
    default: `
      bg-warmth-200 text-charcoal-700
      border border-border
    `,
    accent: `
      bg-accent-50 text-accent-800
      border border-accent-200
    `,
    outline: `
      bg-warmth-100 text-charcoal-700
      border border-border
    `,
  };

  return (
    <span 
      className={`
        inline-flex items-center
        px-2.5 py-1
        text-xs font-medium
        rounded-md
        transition-colors
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
