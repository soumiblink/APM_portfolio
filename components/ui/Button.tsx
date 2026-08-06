import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

/**
 * Button component with consistent styling
 * Supports primary (accent), secondary (outlined), and ghost variants
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
    font-medium transition-all duration-[250ms]
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500
    disabled:opacity-50 disabled:pointer-events-none
  `;

  const variants = {
    primary: `
      bg-neutral-900 text-neutral-50
      hover:bg-neutral-800
      border border-neutral-900
    `,
    secondary: `
      bg-transparent text-neutral-900
      border border-neutral-300
      hover:border-neutral-400 hover:bg-neutral-100
    `,
    ghost: `
      bg-transparent text-neutral-700
      hover:text-neutral-900 hover:bg-neutral-100
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-2.5 text-base rounded-md',
    lg: 'px-8 py-3 text-lg rounded-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim().replace(/\s+/g, ' ');

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
