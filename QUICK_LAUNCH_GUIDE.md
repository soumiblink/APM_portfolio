# Quick Launch Guide

**Time Required**: 4-6 hours
**Current Status**: Code complete, needs content

---

## Step 1: Update Personal Information (2 hours)

### 1. Header (Name)
**File**: `components/layout/Header.tsx`

```typescript
// Line 31: Replace "Your Name" with your actual name
<Link 
  href="/" 
  variant="subtle"
  className="text-lg font-semibold text-neutral-900 hover:text-neutral-700"
>
  John Doe  // ← Change this
</Link>
```

### 2. Hero Section (Resume Link)
**File**: `components/sections/Hero.tsx`

```typescript
// Line 24-29: Verify resume path
<Button 
  variant="secondary" 
  size="lg"
  href="/resume.pdf"  // ← Make sure this matches your PDF filename
>
  Download resume
</Button>
```

### 3. Contact Section (Email & LinkedIn)
**File**: `components/sections/Contact.tsx`

```typescript
// Line 17-21: Update email
<Button
  href="mailto:your.email@example.com"  // ← Change this
  variant="primary"
  size="lg"
>
  Email me
</Button>

// Line 23-28: Update LinkedIn URL
<Button
  href="https://linkedin.com/in/yourprofile"  // ← Change this
  variant="secondary"
  size="lg"
>
  Connect on LinkedIn
</Button>
```

### 4. Footer (GitHub & LinkedIn)
**File**: `components/layout/Footer.tsx`

```typescript
// Update GitHub and LinkedIn URLs
<a href="https://github.com/yourusername"  // ← Change this
  ... >
  GitHub
</a>

<a href="https://linkedin.com/in/yourprofile"  // ← Change this
  ... >
  LinkedIn
</a>
```

### 5. Add Resume PDF
- Export your resume as PDF
- Name it `resume.pdf`
- Place it in `apm-portfolio/public/` folder
- URL will be: `https://yoursite.com/resume.pdf`

### 6. Update Page Title
**File**: `app/layout.tsx`

```typescript
// Add or update metadata
export const metadata = {
  title: "John Doe | Associate Product Manager",  // ← Change this
  description: "Product manager with CS/AI background. I solve problems with user research, technical fluency, and clear thinking."
};
```

---

## Step 2: Test Locally (1 hour)

### Build Test
```bash
cd apm-portfolio
npm run build
```
✅ Should complete without errors

### Visual Test
```bash
npm run dev
```

Open http://localhost:3000 and check:

#### Homepage Checklist:
- [ ] Your name appears in header
- [ ] Hero shows correct info
- [ ] "Download resume" button works
- [ ] All 4 projects display
- [ ] Featured project has accent border
- [ ] Sections scroll smoothly
- [ ] Contact buttons work

#### Mobile Test:
- [ ] Open Chrome DevTools (F12)
- [ ] Click "Toggle device toolbar" (Ctrl+Shift+M)
- [ ] Test iPhone 12 Pro (390px)
- [ ] Test iPad (768px)
- [ ] Check all sections are readable
- [ ] Touch targets are large enough
- [ ] No horizontal scroll

#### Case Study Test:
- [ ] Click LinkedIn Job Navigator
- [ ] Verify case study loads
- [ ] Check sticky navigation works
- [ ] Scroll through all sections
- [ ] Check mobile view

#### Link Test:
- [ ] Click email button → opens email client
- [ ] Click LinkedIn button → opens LinkedIn
- [ ] Click resume button → downloads PDF
- [ ] Click GitHub link → opens GitHub

---

## Step 3: Lighthouse Audit (30 minutes)

### Run Audit:
1. Open http://localhost:3000 in Chrome
2. Open DevTools (F12)
3. Click "Lighthouse" tab
4. Select: Performance, Accessibility, Best Practices, SEO
5. Click "Analyze page load"

### Target Scores:
- Performance: 90+ ✅
- Accessibility: 95+ ✅
- Best Practices: 95+ ✅
- SEO: 95+ ✅

### Common Issues & Fixes:

**Low Performance**:
- Add image optimization (next/image)
- Enable lazy loading

**Low Accessibility**:
- Add missing alt text
- Fix color contrast issues
- Verify keyboard navigation

**Low SEO**:
- Add meta descriptions
- Verify heading hierarchy
- Add Open Graph tags

---

## Step 4: Get Feedback (1-2 hours)

### Ask 2-3 People:

**Questions**:
1. What role do you think I'm applying for?
2. What are my strongest skills?
3. Which project stands out most?
4. What would you change?
5. Would you interview me?

**Ideal Testers**:
- Someone in PM role
- Someone in recruiting
- Someone unfamiliar with your background

---

## Step 5: Deploy to Vercel (30 minutes)

### Setup:
1. Create account: https://vercel.com
2. Connect GitHub repository
3. Import project
4. Deploy (auto-detected as Next.js)

### Configuration:
- Framework: Next.js (auto-detected)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### Custom Domain (Optional):
1. Buy domain (Namecheap, Google Domains, etc.)
2. Add domain in Vercel dashboard
3. Update DNS records
4. Wait for SSL certificate (automatic)

### After Deployment:
- [ ] Test live site URL
- [ ] Verify all links work
- [ ] Test on real phone
- [ ] Check HTTPS is working
- [ ] Test resume download

---

## Step 6: Final Checklist

### Content:
- [ ] Name updated everywhere
- [ ] Email is correct
- [ ] LinkedIn URL works
- [ ] GitHub URL works
- [ ] Resume PDF uploaded
- [ ] No "Your Name" placeholders
- [ ] No "your.email@example.com"

### Functionality:
- [ ] All buttons work
- [ ] All links work
- [ ] Resume downloads
- [ ] Case study loads
- [ ] Mobile works perfectly
- [ ] No console errors

### Quality:
- [ ] Lighthouse scores 90+
- [ ] Tested on iPhone
- [ ] Tested on Android
- [ ] Got feedback from 2+ people
- [ ] All typos fixed
- [ ] Professional and polished

---

## Launch Day Actions

### 1. Share on LinkedIn
```
I'm excited to share my product management portfolio! 

Over the past few weeks, I've documented my product thinking through 4 case studies covering:
• Product discovery & user research
• Strategic prioritization
• AI product thinking
• Experimentation frameworks

Looking for Associate Product Manager opportunities where I can learn from experienced PMs and ship products that matter.

Check it out: [your-portfolio-url]

#ProductManagement #APM #HireMe
```

### 2. Update Resume
Add portfolio URL to your resume:
- Header (with name and contact info)
- Projects section
- Skills section

### 3. Update Application Materials
Add portfolio URL to:
- LinkedIn profile ("Featured" section)
- Cold emails to recruiters
- Application cover letters
- Networking conversations

### 4. Monitor Analytics (Optional)
If you add analytics:
- [ ] Vercel Analytics (built-in)
- [ ] Google Analytics (optional)
- [ ] Plausible (privacy-friendly)

---

## Common Issues & Solutions

### Issue: Resume button shows 404
**Solution**: Make sure `resume.pdf` is in `/public` folder

### Issue: Email button doesn't work
**Solution**: Use `mailto:your@email.com` format

### Issue: Build fails on Vercel
**Solution**: 
1. Check build logs
2. Run `npm run build` locally first
3. Verify all files committed to Git

### Issue: Mobile view looks broken
**Solution**: Test with real device, not just DevTools

### Issue: Lighthouse score is low
**Solution**: Run audit incognito (disable extensions)

---

## Post-Launch (Week 1)

### Monitor:
- [ ] Check for any 404 errors
- [ ] Test all CTAs still work
- [ ] Monitor for recruiter contact
- [ ] Gather feedback from viewers

### Iterate:
- [ ] Fix any reported issues
- [ ] Add project visuals
- [ ] Add remaining case studies
- [ ] Refine based on feedback

---

## Quick Commands Reference

```bash
# Start development
npm run dev

# Build for production
npm run build

# Run production locally
npm run start

# Check TypeScript
npx tsc --noEmit

# Check for errors
npm run lint
```

---

## Files to Update (Summary)

| File | What to Change |
|------|----------------|
| `components/layout/Header.tsx` | Your name |
| `components/sections/Hero.tsx` | Resume path (verify) |
| `components/sections/Contact.tsx` | Email + LinkedIn |
| `components/layout/Footer.tsx` | GitHub + LinkedIn |
| `app/layout.tsx` | Page title metadata |
| `public/resume.pdf` | Add your resume |

---

## Time Breakdown

| Task | Time |
|------|------|
| Update personal info | 30 min |
| Add resume PDF | 15 min |
| Local testing | 1 hour |
| Lighthouse audit | 30 min |
| Get feedback | 1-2 hours |
| Deploy to Vercel | 30 min |
| Final checks | 30 min |
| **TOTAL** | **4-6 hours** |

---

## Ready to Launch? ✅

Answer these questions:

1. ✅ Is your name updated everywhere?
2. ✅ Does your email work?
3. ✅ Does your LinkedIn link work?
4. ✅ Is your resume PDF uploaded?
5. ✅ Did you test on mobile?
6. ✅ Are Lighthouse scores 90+?
7. ✅ Did 2+ people review it?
8. ✅ Are you confident in the content?

**If all YES → Launch! 🚀**

---

## Need Help?

1. Check STATUS.md for current state
2. Check LAUNCH_READY.md for full checklist
3. Check APM_OPTIMIZATION.md for competency mapping
4. Check build errors with `npm run build`

**Good luck with your APM applications! 🎉**
