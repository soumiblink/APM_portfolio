import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

/**
 * Button component - Editorial Product Studio design
 * Strong hierarchy, excellent contrast, restrained styling
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
    transition-all
    focus-visible:outline-2 focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    no-underline
  `;

  const variants = {
    primary: `
      bg-charcoal-900 text-white
      hover:bg-charcoal-800
      active:bg-charcoal-900
      focus-visible:outline-accent-600
    `,
    secondary: `
      bg-background-elevated text-charcoal-900
      border-2 border-border-strong
      hover:bg-warmth-100 hover:border-charcoal-400
      active:border-charcoal-600
      focus-visible:outline-accent-600
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} rounded-md ${className}`.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
