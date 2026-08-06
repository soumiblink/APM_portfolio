import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  className?: string;
}

/**
 * Card component for content grouping
 * Used sparingly - editorial layout over floating cards everywhere
 */
export function Card({ 
  children, 
  hover = false,
  padding = 'md',
  className = '' 
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover 
    ? 'hover:border-neutral-300 hover:shadow-sm transition-all duration-[250ms]' 
    : '';

  return (
    <div 
      className={`
        border border-neutral-200
        rounded-lg
        bg-white
        ${paddingClasses[padding]}
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
