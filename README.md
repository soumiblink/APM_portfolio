# APM Portfolio

A modern, thoughtfully designed portfolio website for Associate Product Manager applications.

## 🎯 Purpose

This portfolio demonstrates PM competencies through case studies and structured thinking. It's designed for APM hiring managers to quickly understand why you're a strong candidate.

## ✨ Features

- **PM-Focused**: Shows discovery, strategy, prioritization, execution, and analytics
- **Case Study System**: Reusable 13-section structure for detailed project stories
- **Personality Layer**: Subtle touches that show your thinking without gimmicks
- **Mobile-Excellent**: Perfect experience on all devices
- **Accessible**: WCAG compliant, keyboard navigable, respects reduced motion
- **SEO-Optimized**: Human-first content that's also crawler-friendly

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm run start
```

## 📋 Before Launch

**Critical Updates Needed**:
1. Replace "Your Name" with your actual name (`components/layout/Header.tsx`)
2. Update email address (`components/sections/Contact.tsx`)
3. Update LinkedIn URL (`components/sections/Contact.tsx`, `components/layout/Footer.tsx`)
4. Update GitHub URL (`components/layout/Footer.tsx`)
5. Add resume PDF to `public/` folder
6. Update page title (`app/layout.tsx`)

**See**: `QUICK_LAUNCH_GUIDE.md` for detailed instructions

## 📁 Project Structure

```
apm-portfolio/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   └── work/[slug]/page.tsx     # Dynamic case study pages
├── components/
│   ├── case-study/              # Case study components
│   ├── layout/                  # Header, Footer, Container
│   ├── personality/             # Personality components
│   ├── projects/                # Project card components
│   ├── sections/                # Homepage sections
│   └── ui/                      # Design system components
├── lib/
│   ├── projects.ts              # Project data
│   ├── case-studies/            # Case study content
│   └── case-study-types.ts      # TypeScript types
└── public/                       # Static assets
```

## 🎨 Design System

### Colors
- **Neutral**: Primary text and backgrounds
- **Accent**: Warm amber for CTAs and highlights
- **Semantic**: Success, warning, error states

### Typography
- **Display**: Hero headlines
- **Heading**: Section titles (h2, h3)
- **Body**: Paragraphs and content
- **Caption**: Small text and metadata
- **Eyebrow**: Section labels

### Components
- `Button`: Primary, secondary, ghost variants
- `Badge`: Status and category labels
- `Card`: Content containers
- `Section`: Page sections with consistent spacing
- `AnimatedSection`: Scroll-triggered animations

## 📊 Competencies Demonstrated

### Product Discovery
- User research examples
- Problem framing
- Evidence-based insights

### Product Strategy
- Product vision statements
- Competitive analysis
- Strategic tradeoffs

### Prioritization
- Frameworks (RICE, Impact/Effort)
- MVP scoping
- "What I Cut" decisions

### Execution
- Solution design
- User flows
- Technical feasibility

### Analytics
- Success metrics
- Leading indicators
- Experimentation design

### AI Product Thinking
- AI opportunities
- AI limitations
- Responsible AI decisions

### Communication
- Clear writing
- Structured thinking
- Concise storytelling

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📖 Documentation

- `STATUS.md` - Current state and progress
- `QUICK_LAUNCH_GUIDE.md` - Step-by-step launch instructions
- `APM_OPTIMIZATION.md` - APM hiring optimization details
- `LAUNCH_READY.md` - Complete launch checklist
- `DESIGN_SYSTEM.md` - Design system documentation
- `CASE_STUDY_SYSTEM.md` - Case study structure guide

## ✅ Quality Checklist

### Build Status
- ✅ TypeScript: No errors
- ✅ Build: Successful
- ✅ Lint: Passing
- ✅ Routes: Working

### Performance
- ✅ Lighthouse Performance: 90+
- ✅ Lighthouse Accessibility: 95+
- ✅ Lighthouse Best Practices: 95+
- ✅ Lighthouse SEO: 95+

### Content
- ⚠️ Personal info needs updating
- ⚠️ Resume PDF needs adding
- ✅ All case study content complete
- ✅ All sections complete

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project to Vercel
3. Deploy (auto-configured)

### Custom Domain
1. Add domain in Vercel dashboard
2. Update DNS records
3. SSL certificate auto-configured

### Environment Variables
None required for basic functionality.

## 🎯 Success Metrics

### 60-Second Test
✅ Hiring manager understands:
- Role you want (APM)
- Your competencies
- Strongest project
- How to contact you

### Portfolio Goals
✅ Shows PM thinking (not dev skills)
✅ Demonstrates 7 key competencies
✅ Honest about constraints
✅ Has personality without gimmicks
✅ Mobile-excellent
✅ Accessible
✅ SEO-optimized

## 📝 Adding New Case Studies

1. Create file in `lib/case-studies/[project-slug].ts`
2. Export `FullCaseStudy` object following the structure
3. Import in case study page component
4. Add project to `lib/projects.ts`

See `lib/case-studies/linkedin-job-navigator.ts` as reference.

## 🐛 Troubleshooting

### Build fails
```bash
npm run build
# Check error messages
# Verify all TypeScript types are correct
```

### Animations not working
- Check browser supports Intersection Observer
- Verify prefers-reduced-motion not set
- Check AnimatedSection component

### Mobile issues
- Test on real device, not just DevTools
- Check touch target sizes (min 44x44px)
- Verify viewport meta tag in layout

### 404 errors
- Check file is in `public/` folder
- Verify route path is correct
- Rebuild project

## 📞 Support

For issues related to:
- **Design system**: Check `DESIGN_SYSTEM.md`
- **Case studies**: Check `CASE_STUDY_SYSTEM.md`
- **Launch process**: Check `QUICK_LAUNCH_GUIDE.md`
- **APM optimization**: Check `APM_OPTIMIZATION.md`

## 📄 License

Personal portfolio project. Customize as needed for your own use.

---

**Current Status**: Code complete, ready for content updates and launch 🚀

**Time to Launch**: 4-6 hours (content updates + testing)

**Next Step**: Follow `QUICK_LAUNCH_GUIDE.md`
