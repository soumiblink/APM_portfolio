import { Container } from './Container';
import { Link } from '../ui/Link';

/**
 * Minimal, elegant footer
 * Clean ending to the portfolio with essential links
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="py-12 md:py-16">
          {/* Name and positioning */}
          <div className="text-center mb-8">
            <div className="text-base font-semibold text-neutral-900 mb-1">
              Your Name
            </div>
            <div className="text-sm text-neutral-600">
              Associate Product Manager
            </div>
          </div>

          {/* Contact links - horizontal on all sizes */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <Link 
              href="mailto:your.email@example.com" 
              variant="subtle"
              className="text-sm text-neutral-700 hover:text-accent-600 transition-colors"
              aria-label="Email"
            >
              Email
            </Link>
            <Link 
              href="https://linkedin.com/in/yourprofile" 
              variant="subtle"
              className="text-sm text-neutral-700 hover:text-accent-600 transition-colors"
              external
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://github.com/yourusername" 
              variant="subtle"
              className="text-sm text-neutral-700 hover:text-accent-600 transition-colors"
              external
              aria-label="GitHub profile"
            >
              GitHub
            </Link>
            <Link 
              href="/resume.pdf" 
              variant="subtle"
              className="text-sm text-neutral-700 hover:text-accent-600 transition-colors"
              aria-label="Resume"
            >
              Resume
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-neutral-500">
            © {currentYear} · Built with thought
          </div>
        </div>
      </Container>
    </footer>
  );
}
