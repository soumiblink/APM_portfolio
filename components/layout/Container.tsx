import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'default' | 'sm' | 'full';
  className?: string;
}

/**
 * Container component for consistent page width and padding
 * Establishes the content boundaries for all sections
 */
export function Container({ 
  children, 
  size = 'default',
  className = '' 
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-[1280px]',
    sm: 'max-w-[768px]',
    full: 'w-full'
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        mx-auto 
        px-6 
        md:px-8 
        lg:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
}
