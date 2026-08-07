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
      bg-neutral-100 text-neutral-700
      border border-neutral-200
    `,
    accent: `
      bg-accent-50 text-accent-800
      border border-accent-200
    `,
    outline: `
      bg-white text-neutral-600
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
        transition-colors
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
