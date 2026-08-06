# APM Portfolio Design System

## Overview
This design system establishes the visual foundation for a product-minded APM portfolio. The identity sits between professional and personal — sophisticated without being corporate, modern without chasing trends.

## Design Personality
- **Editorial over decorative**: Typography and composition do the heavy lifting
- **Restrained use of color**: Neutral-first with accent color used sparingly
- **Generous whitespace**: Breathing room creates sophistication
- **Thoughtful motion**: Subtle animations that respect user preferences
- **Product-minded**: Design decisions support content, not distract from it

## Visual Foundation

### Color Palette

**Neutral Scale** (warm grays)
- Primary: `--neutral-900` (#1c1917) - Text, primary UI
- Surface: `--neutral-50` (#fafaf9) - Background
- Borders: `--neutral-200` to `--neutral-300`
- Muted text: `--neutral-600` to `--neutral-500`

**Accent Color** (warm amber)
- Primary: `--accent-600` (#d97706)
- Used for: Links, selected states, CTAs, emphasis
- **Rule**: Never dominant, always intentional

### Typography

**Font Stack**
- Sans: Inter (via Google Fonts)
- Mono: System monospace stack
- All text is antialiased for crisp rendering

**Type Scale**
- Display: 3rem - 4.5rem (hero sections)
- Headings: 1.5rem - 3rem (sections and titles)
- Body: 1rem - 1.25rem (readable content)
- Small: 0.75rem - 0.875rem (metadata, captions)

**Hierarchy**
- `Display`: Largest text for page heroes
- `Heading`: Section titles (h1-h4)
- `Body`: Readable paragraph text
- `Eyebrow`: Small uppercase labels
- `Caption`: Metadata and fine print

### Spacing System

**8px Grid**
- All spacing uses multiples of 8px
- Consistent vertical rhythm throughout
- Section spacing: 80px - 160px between major sections
- Component spacing: 16px - 48px internal padding

### Layout

**Container Widths**
- Default: 1280px max-width
- Small: 768px (for reading-focused content)
- Full: 100% (for edge-to-edge sections)

**Responsive Breakpoints**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Motion & Animation

**Principles**
- Subtle and purposeful
- Respects `prefers-reduced-motion`
- No constant animation or distraction
- Enhances hierarchy and interaction

**Timing**
- Fast: 150ms (hover states)
- Base: 250ms (most transitions)
- Slow: 350ms (complex animations)

**Effects**
- Fade-in on scroll (y: 20px)
- Gentle hover lifts (scale: 1.02)
- Smooth color transitions
- Scroll-triggered reveals

## Component Library

### Layout Components

**Container**
- Establishes content width and padding
- Variants: default, small, full
- Responsive horizontal padding

**Header**
- Fixed position with backdrop blur on scroll
- Minimal navigation
- Collapses on scroll for space efficiency

**Footer**
- Simple social links
- Minimal branding
- Subtle personality in microcopy

**Section**
- Consistent vertical spacing wrapper
- Sizes: sm, md, lg, xl
- Semantic `<section>` element

### UI Components

**Button**
- Variants: primary (filled), secondary (outlined), ghost (transparent)
- Sizes: sm, md, lg
- Clear focus states
- Can render as link or button

**Badge**
- For tags, labels, competencies
- Variants: default, accent, outline
- Small and unobtrusive

**Card**
- Used sparingly
- Optional hover effect
- Flexible padding options
- Subtle border and shadow

**Link**
- Underline on default variant
- Color shift on hover
- Handles internal/external automatically
- Accent color available for emphasis

**Typography Components**
- All text components are semantic HTML
- Responsive font sizes built-in
- Consistent color and spacing

**AnimatedSection**
- Wraps content for scroll-triggered animations
- Respects reduced motion preference
- Fade and slide variants
- Configurable delay for staggered reveals

## Accessibility

### Standards
- WCAG AA minimum (4.5:1 contrast)
- Keyboard navigation supported
- Focus visible on all interactive elements
- Skip-to-content link for screen readers
- Semantic HTML throughout

### Features
- Custom focus rings (accent color, not default blue)
- Alt text required for images
- ARIA labels where needed
- Respects `prefers-reduced-motion`
- Logical heading hierarchy

## Usage Guidelines

### Do's
✓ Use generous whitespace
✓ Let typography create hierarchy
✓ Use accent color sparingly
✓ Keep interactions subtle
✓ Maintain consistent spacing
✓ Write human microcopy

### Don'ts
✗ Overuse cards and shadows
✗ Add unnecessary animation
✗ Use accent color everywhere
✗ Create visual clutter
✗ Break spacing consistency
✗ Write corporate-speak

## File Structure

```
components/
├── layout/
│   ├── Container.tsx       # Content width wrapper
│   ├── Header.tsx          # Site navigation
│   ├── Footer.tsx          # Site footer
│   └── index.ts            # Exports
│
├── ui/
│   ├── Button.tsx          # Button component
│   ├── Badge.tsx           # Tags and labels
│   ├── Card.tsx            # Content cards
│   ├── Link.tsx            # Styled links
│   ├── Typography.tsx      # Text components
│   ├── Section.tsx         # Section wrapper
│   ├── AnimatedSection.tsx # Scroll animations
│   └── index.ts            # Exports
│
app/
├── globals.css             # Design tokens and base styles
├── layout.tsx              # Root layout with Header/Footer
└── page.tsx                # Homepage (design system demo)
```

## Next Steps

With the design system established, you can now:

1. Build homepage sections using these components
2. Create project card components for the Selected Work section
3. Build case study template pages
4. Add real content and imagery
5. Fine-tune responsive behavior
6. Optimize performance and accessibility

The foundation is set. All future components should extend this system rather than introducing new patterns.
