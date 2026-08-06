import { Container } from './Container';
import { Link } from '../ui/Link';

/**
 * Minimal footer with contact links and subtle personality
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="py-12 md:py-16">
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <Link 
              href="mailto:your.email@example.com" 
              variant="subtle"
              className="hover:text-accent-600 text-sm font-medium"
            >
              Email
            </Link>
            <Link 
              href="https://linkedin.com/in/yourprofile" 
              variant="subtle"
              className="hover:text-accent-600 text-sm font-medium"
              external
            >
              LinkedIn
            </Link>
            <Link 
              href="https://github.com/yourusername" 
              variant="subtle"
              className="hover:text-accent-600 text-sm font-medium"
              external
            >
              GitHub
            </Link>
          </div>

          {/* Footer Text */}
          <div className="text-center text-sm text-neutral-500">
            <p className="mb-2">
              Built with care by Your Name
            </p>
            <p>
              © {currentYear} · All rights reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
