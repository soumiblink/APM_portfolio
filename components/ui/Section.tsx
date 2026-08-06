import { ReactNode, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Section component for consistent vertical spacing
 * Creates breathing room between major page sections
 */
export function Section({ 
  children, 
  spacing = 'lg',
  className = '',
  ...props 
}: SectionProps) {
  const spacingClasses = {
    sm: 'py-12',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-24 lg:py-32',
    xl: 'py-24 md:py-32 lg:py-40',
  };

  return (
    <section 
      className={`
        ${spacingClasses[spacing]}
        ${className}
      `}
      {...props}
    >
      {children}
    </section>
  );
}
