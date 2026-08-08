import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  className?: string;
}

/**
 * Card component for content grouping
 * Clean, minimal design with subtle elevation
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
    ? 'hover:border-border-strong hover:shadow-md transition-all' 
    : '';

  return (
    <div 
      className={`
        border border-border
        rounded-lg
        bg-warmth-100
        shadow-sm
        ${paddingClasses[padding]}
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
