'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade' | 'slide' | 'none';
  delay?: number;
  className?: string;
}

/**
 * Wrapper component for scroll-triggered animations
 * Respects prefers-reduced-motion
 */
export function AnimatedSection({ 
  children, 
  animation = 'fade',
  delay = 0,
  className = '' 
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;
    
    // Only animate if no reduced motion preference and animation is not 'none'
    if (!prefersReducedMotion && animation !== 'none') {
      setShouldAnimate(true);
    }

    const handleChange = () => {
      setShouldAnimate(!mediaQuery.matches && animation !== 'none');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [animation]);

  // Always use motion.div for consistent hydration
  const variants: Variants = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5, 
          delay,
          ease: [0.25, 0.1, 0.25, 1] 
        }
      }
    },
    slide: {
      hidden: { opacity: 0, x: -30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.4, 
          delay,
          ease: [0.25, 0.1, 0.25, 1] 
        }
      }
    }
  };

  // If animations are disabled, use instant transition
  if (!shouldAnimate) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 1, y: 0, x: 0 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
