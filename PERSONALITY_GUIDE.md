# Personality Layer — Usage Guide

## Overview

These components add subtle personality to the portfolio without being gimmicky. They make the site memorable for the person's thinking, not flashy animations.

## Components

### 1. ProductQuestion
**Purpose**: Prompt deeper thinking about a product decision
**When to use**: When there's a genuinely interesting question worth considering
**When NOT to use**: Don't manufacture questions just to use the component

```tsx
<ProductQuestion question="What would need to be true for this to work at LinkedIn scale?" />
```

**Visual**: Simple bordered quote with "Product question:" prefix

---

### 2. TheTradeoff
**Purpose**: Highlight an important product tradeoff
**When to use**: When a choice involved sacrificing something valuable
**When NOT to use**: For obvious decisions or when there was no real tradeoff

```tsx
<TheTradeoff 
  chose="Strategic depth over working code"
  overThis="Browser extension I could ship"
  because="The goal was to demonstrate product thinking, not engineering execution."
/>
```

**Visual**: Two-column comparison with arrow, showing what was chosen vs. what was sacrificed

---

### 3. TheDecision
**Purpose**: Highlight a key product decision
**When to use**: For pivotal choices that shaped the product direction
**When NOT to use**: For minor decisions or implementation details

```tsx
<TheDecision decision="Focus on relevance over volume — show fewer jobs, but make sure they actually fit." />
```

**Visual**: Accent-colored callout with "The decision:" prefix

---

### 4. WhatICut
**Purpose**: Show what was deliberately NOT built
**When to use**: To demonstrate prioritization and saying no
**When NOT to use**: Don't list obvious non-features

```tsx
<WhatICut items={[
  {
    what: "Automated apply-to-all feature",
    why: "Would increase volume but decrease quality."
  },
  {
    what: "Endless scroll feed",
    why: "Optimizes for engagement, not outcomes."
  }
]} />
```

**Visual**: List with ✕ icons showing rejected ideas and reasoning

---

### 5. StillThinkingAbout
**Purpose**: Show unresolved product questions
**When to use**: For genuine open questions that demonstrate intellectual honesty
**When NOT to use**: Don't create fake uncertainty to seem humble

```tsx
<StillThinkingAbout questions={[
  "How would users react to seeing only 15 jobs when they're used to hundreds?",
  "What if the algorithm gets it wrong?"
]} />
```

**Visual**: Dashed border box with question marks, signals work-in-progress thinking

---

### 6. BuildersNote
**Purpose**: Connect technical background to product decisions
**When to use**: When technical context genuinely matters for the product decision
**When NOT to use**: To show off technical knowledge or when tech context isn't relevant

```tsx
<BuildersNote note="As someone who has built recommendation systems, I know relevance is harder than it looks. The question isn't technical feasibility — it's whether their business model allows it." />
```

**Visual**: Dark background callout with "Builder's Note" label

---

## Design Principles

### DO:
✓ Use sparingly — each component should add genuine value
✓ Write in first person — "I decided" not "The team decided"
✓ Be specific — "chose A over B because C" not "made tradeoffs"
✓ Show real thinking — admit uncertainty, unresolved questions
✓ Connect to PM competencies — prioritization, tradeoffs, user focus

### DON'T:
✗ Overuse — not every section needs a personality component
✗ Fake uncertainty — only use "Still Thinking About" for real questions
✗ Manufactured questions — ProductQuestion should prompt genuine thought
✗ Technical showing-off — BuildersNote is about product context, not flexing
✗ Buzzwords — avoid "synergy," "leverage," "disrupt," etc.
✗ Emojis — maybe one or two in the entire site, if at all

---

## Tone Guidelines

**Curious**
- Ask real questions you don't have answers to
- Show interest in how things work
- Demonstrate learning mindset

**Thoughtful**
- Explain reasoning behind decisions
- Acknowledge complexity and nuance
- Consider multiple perspectives

**Confident**
- State decisions clearly
- Take ownership of choices
- Don't hedge everything with "maybe" or "possibly"

**Honest**
- Admit constraints and limitations
- Label speculative vs. real data
- Show what you don't know

**Slightly Playful**
- Subtle personality in microcopy
- Occasional unexpected phrasing
- Human voice without being unprofessional

**Technically Literate**
- Use technical terms correctly
- Connect engineering realities to product decisions
- Show understanding of implementation constraints

---

## Example Usage Patterns

### Case Study Introduction
```tsx
<ProblemSection problem={content.problem} />
<ProductQuestion question="What would I need to know before building this?" />
<EvidenceSection evidence={content.evidence} />
```

### After Insight
```tsx
<InsightSection insight={content.insight} />
<TheDecision decision="Focus on X over Y because Z." />
<GoalsSection goals={content.goals} />
```

### After Options Considered
```tsx
<OptionsSection options={content.options} />
<TheTradeoff chose="..." overThis="..." because="..." />
<PrioritizationSection prioritization={content.prioritization} />
```

### After MVP
```tsx
<MVPSection mvp={content.mvp} />
<WhatICut items={[...]} />
<ExperimentationSection experimentation={content.experimentation} />
```

### Before Reflection
```tsx
<LearningsSection learnings={content.learnings} />
<StillThinkingAbout questions={[...]} />
<ReflectionSection reflection={content.pmReflection} />
```

---

## Real Examples from Portfolio

### Good ProductQuestion:
✓ "What would need to be true for this to work at LinkedIn scale?"
✓ "How do you build trust when you're filtering out 95% of options?"

### Bad ProductQuestion:
✗ "What is product management?" (too generic)
✗ "How can we innovate in this space?" (buzzword-y)

### Good TheDecision:
✓ "Focus on relevance over volume — show fewer jobs, but make sure they actually fit."
✓ "Build for retention, not engagement. Let users complete their task and leave."

### Bad TheDecision:
✗ "We decided to leverage synergies to disrupt the market." (buzzwords)
✗ "Chose to make it user-friendly." (obvious, not a real decision)

### Good BuildersNote:
✓ "As someone who has built recommendation systems, I know relevance is harder than it looks."
✓ "The technical challenge isn't AI — it's getting clean training data at scale."

### Bad BuildersNote:
✗ "I used React and TypeScript for this project." (not product-relevant)
✗ "The algorithm I designed is very sophisticated." (showing off)

---

## Component File Structure

```
components/
  personality/
    ProductQuestion.tsx
    TheTradeoff.tsx
    TheDecision.tsx
    WhatICut.tsx
    StillThinkingAbout.tsx
    BuildersNote.tsx
    index.ts
```

All components are:
- Fully typed (TypeScript)
- Styled consistently with design system
- Visually distinct but not distracting
- Semantically appropriate (use proper HTML)
- Accessible (proper ARIA labels, keyboard nav)

---

## Impact

These components make the portfolio memorable by:
1. **Showing thinking process** — not just outcomes
2. **Demonstrating PM skills** — tradeoffs, prioritization, constraints
3. **Being human** — honest, curious, slightly playful
4. **Standing out** — different from generic PM portfolios

But they stay subtle by:
- Using sparingly (not in every section)
- Serving content (not decoration)
- Matching design system (no visual clutter)
- Supporting narrative (not interrupting it)

The goal: Visitor thinks "this person thinks deeply about products" not "this website has cool components."
