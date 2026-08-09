import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

/**
 * Button component - Premium editorial styling
 * Primary uses accent color for sophisticated, confident CTAs
 */
export function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold
    transition-all duration-200
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600
    disabled:opacity-50 disabled:cursor-not-allowed
    no-underline
  `;

  const variants = {
    primary: `
      bg-accent-600
      hover:bg-accent-700
      active:bg-accent-800
      shadow-sm hover:shadow
    `,
    secondary: `
      bg-transparent text-charcoal-900
      border-2 border-border
      hover:bg-warmth-200 hover:border-border-strong
      active:border-charcoal-600
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} rounded-md ${className}`.trim().replace(/\s+/g, ' ');
  
  // Force white text for primary buttons
  const style = variant === 'primary' ? { color: '#ffffff' } : undefined;

  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} style={style} {...props}>
      {children}
    </button>
  );
}
