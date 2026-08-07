'use client';

import { Container } from './Container';
import { Link } from '../ui/Link';
import { Button } from '../ui/Button';
import { useState, useEffect } from 'react';

/**
 * Minimal header with logo and navigation
 * Becomes more compact on scroll
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-[250ms]
        ${scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200' 
          : 'bg-transparent'
        }
      `}
    >
      <Container>
        <nav 
          className={`
            flex items-center justify-between
            transition-all duration-[250ms]
            ${scrolled ? 'py-3' : 'py-6'}
          `}
        >
          {/* Logo / Name */}
          <Link 
            href="/" 
            variant="subtle"
            className="text-lg font-semibold text-neutral-900 hover:text-neutral-700"
          >
            Your Name
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="/#work" 
              variant="subtle"
              className="text-sm font-medium hidden sm:inline"
            >
              Work
            </Link>
            <Link 
              href="/#about" 
              variant="subtle"
              className="text-sm font-medium hidden sm:inline"
            >
              About
            </Link>
            <Button
              href="/resume.pdf"
              variant="secondary"
              size="sm"
              className="font-medium"
            >
              Resume
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
