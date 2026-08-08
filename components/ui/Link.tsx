import { ReactNode, AnchorHTMLAttributes } from 'react';
import NextLink from 'next/link';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: 'default' | 'accent' | 'subtle';
  external?: boolean;
  className?: string;
}

/**
 * Link component with consistent styling
 * Handles both internal (Next.js) and external links
 */
export function Link({ 
  children, 
  href,
  variant = 'default',
  external = false,
  className = '',
  ...props 
}: LinkProps) {
  const variants = {
    default: `
      text-charcoal-900
      hover:text-accent-700
      underline decoration-1 underline-offset-2
      decoration-border hover:decoration-accent-700
    `,
    accent: `
      text-accent-600
      hover:text-accent-700
      transition-colors duration-[150ms]
    `,
    subtle: `
      text-charcoal-700
      hover:text-charcoal-900
      transition-colors duration-[150ms]
    `,
  };

  const classes = `
    ${variants[variant]}
    transition-all duration-[150ms]
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (external || href.startsWith('http')) {
    return (
      <a 
        href={href} 
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} {...props}>
      {children}
    </NextLink>
  );
}
