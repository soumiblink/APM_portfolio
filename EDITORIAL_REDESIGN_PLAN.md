# Editorial Product Studio - Complete Redesign Plan

## Design System Established ✅

### Color Palette
- **Warm paper backgrounds**: warmth-50 (#fdfcfb), warmth-100, warmth-200
- **Charcoal text**: charcoal-900 (#1a1816) → charcoal-400
- **Burnt sienna accent**: accent-600 (#a05d3a) - sophisticated, editorial, warm
- **Not using**: Bright cyan/teal removed

### Typography System
- Base: Editorial sans-serif stack
- Hierarchy: h1 (2.5-3rem), h2 (2-2.25rem), h3 (1.5rem)
- Line heights: tight (1.15), snug (1.35), normal (1.5), relaxed (1.65)
- Letter spacing: Tight for headlines (-0.02em), wide for labels (0.1em)

### Spacing
- 4px base grid
- Consistent rhythm: xs(8px), sm(12px), md(16px), lg(24px), xl(32px), 2xl(48px), 3xl(64px), 4xl(96px)

### Container Widths
- default: 1200px
- text: 720px (readable content)
- narrow: 600px
- full: 100%

## Components Rebuilt

### ✅ Button
- Primary: Charcoal-900 bg, white text
- Secondary: White bg, charcoal text, strong border
- Removed: Accent variant (not needed)
- Excellent contrast on all variants

### ✅ Container
- Sizes: default, text, narrow, full
- Consistent padding: 24px mobile, 32px desktop

### ✅ Hero
- Removed Typography components
- Direct HTML for control
- Editorial label system
- Comfortable reading width (900px max)
- Competency markers with accent dots

## Sections To Rebuild

### 1. ProductSnapshot
**Current Problem**: Generic 3-column grid with accent bars
**New Direction**:
- Numbered list (01-05)
- No cards
- Border separators
- Accent marks subtle

### 2. SelectedWork  
**Current Problem**: Too editorial/varied, hard to scan
**New Direction**:
- Consistent card treatment
- Not identical, but related
- Clear hierarchy
- Better spacing
- Featured gets subtle distinction

### 3. HowIThink
**Current Problem**: Was dark section (removed), now light but needs better design
**New Direction**:
- Light editorial layout
- Numbered principles
- No process circles
- Clean typography
- Border details for structure

### 4. TechnicalProductThinking
**Current Problem**: Was dark, now light but composition weak
**New Direction**:
- Two-column editorial layout
- Left: intro/positioning
- Right: capabilities list
- Border separators
- No cards

### 5. Experience
**Current Problem**: Timeline okay but could be cleaner
**New Direction**:
- Refined timeline
- Better spacing
- Accent marks for dates
- Clean typography

### 6. About
**Current Problem**: Text-heavy, no visual interest
**New Direction**:
- Asymmetric layout possible
- Pull quote treatment
- Better reading experience
- Comfortable line length

### 7. CurrentlyExploring
**Current Problem**: Generic pill badges
**New Direction**:
- Inline comma-separated list
- Or small editorial treatment
- Very lightweight
- Not prominent

### 8. Contact
**Current Problem**: Too much empty space, weak CTA
**New Direction**:
- Strong headline
- Clear CTAs
- Accent border-top
- Confident close

### 9. Footer
**Current Problem**: Generic template footer
**New Direction**:
- Minimal horizontal layout
- Single line
- Essential links only
- Quiet ending

## Critical Fixes Needed

1. **Remove all dark sections** ✅ (in progress)
2. **Fix contrast everywhere** ✅ (new palette has excellent contrast)
3. **Reduce card usage** (in progress)
4. **Strengthen hierarchy** (in progress)
5. **Editorial details** (section labels, accent marks, borders)
6. **Consistent spacing** ✅ (design tokens established)
7. **Better typography** ✅ (system established)
8. **Sophisticated accent** ✅ (burnt sienna)
9. **Light-first design** ✅ (warm paper backgrounds)
10. **Strong CTAs** (in progress)

## Implementation Status

### ✅ Complete
- Design system (globals.css)
- Color palette
- Typography system
- Spacing scale
- Button component
- Container component  
- Hero section

### 🔄 In Progress
- Other sections need updating for new design system
- Typography component usage (may need to bypass)
- AnimatedSection (keep but simplify)
- Section component (update)

### ⏳ Todo
- Update all sections to new visual system
- Remove/update old color references
- Ensure WCAG compliance everywhere
- Test responsive behavior
- Final polish

## Next Steps

1. Update remaining sections systematically
2. Remove Typography component dependencies where needed
3. Apply new color palette throughout
4. Add editorial details (section labels, marks)
5. Test and refine
6. Final quality check

## Design Principles Applied

✅ Light-first design
✅ Warm paper backgrounds
✅ Sophisticated accent
✅ Strong hierarchy
✅ Editorial typography
✅ Consistent spacing
✅ No dark sections
✅ Excellent contrast
✅ Restrained styling
✅ Strong central grid

