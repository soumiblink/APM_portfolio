import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'default' | 'text' | 'narrow' | 'full';
  className?: string;
}

/**
 * Container component - Editorial Product Studio design
 * Strong central grid with consistent content widths
 */
export function Container({ 
  children, 
  size = 'default',
  className = '' 
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-[1200px]',
    text: 'max-w-[720px]',
    narrow: 'max-w-[600px]',
    full: 'w-full'
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        mx-auto 
        px-6 
        md:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}
