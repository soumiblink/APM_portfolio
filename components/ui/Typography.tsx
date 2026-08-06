import { ReactNode, HTMLAttributes } from 'react';

// Eyebrow Label - small uppercase text above headings
interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = '', ...props }: EyebrowProps) {
  return (
    <span 
      className={`
        text-xs font-semibold tracking-wide uppercase
        text-neutral-500
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}

// Display - largest heading for page titles
interface DisplayProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

export function Display({ children, className = '', ...props }: DisplayProps) {
  return (
    <h1 
      className={`
        text-5xl md:text-6xl lg:text-7xl
        font-semibold tracking-tight
        text-neutral-900
        ${className}
      `}
      {...props}
    >
      {children}
    </h1>
  );
}

// Heading - section headings
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: ReactNode;
  className?: string;
}

export function Heading({ 
  as = 'h2', 
  children, 
  className = '', 
  ...props 
}: HeadingProps) {
  const Component = as;
  
  const sizeClasses = {
    h1: 'text-4xl md:text-5xl',
    h2: 'text-3xl md:text-4xl',
    h3: 'text-2xl md:text-3xl',
    h4: 'text-xl md:text-2xl',
  };

  return (
    <Component 
      className={`
        ${sizeClasses[as]}
        font-semibold tracking-tight
        text-neutral-900
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}

// Body - standard paragraph text
interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'base' | 'lg';
  muted?: boolean;
  children: ReactNode;
  className?: string;
}

export function Body({ 
  size = 'base',
  muted = false,
  children, 
  className = '', 
  ...props 
}: BodyProps) {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl',
  };

  const colorClass = muted ? 'text-neutral-600' : 'text-neutral-700';

  return (
    <p 
      className={`
        ${sizeClasses[size]}
        ${colorClass}
        leading-relaxed
        ${className}
      `}
      {...props}
    >
      {children}
    </p>
  );
}

// Caption - small metadata text
interface CaptionProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

export function Caption({ children, className = '', ...props }: CaptionProps) {
  return (
    <span 
      className={`
        text-sm
        text-neutral-500
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}
