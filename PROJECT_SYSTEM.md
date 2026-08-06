# Project System — PM-Focused Portfolio Structure

## Overview

The Selected Work section has been redesigned to communicate **Product Management thinking** rather than just showcasing projects. Each project card now follows a structured hierarchy that helps visitors understand the PM perspective before opening the case study.

## New Card Structure

### 1. Project Type & Status
- **Type**: Product Strategy | AI Product | Consumer Product | 0→1 Product | Experimentation | Technical PM
- **Status**: Portfolio Project | Speculative Case Study | Coded Product | Concept
- **Purpose**: Set expectations immediately about what kind of work this is

### 2. Project Name
- Clear, memorable name
- Optimized for scanning

### 3. One-Line Problem Statement
- Communicates the product problem, not the solution
- Format: "[User] can't [core problem]"
- Examples:
  - "Early-career job seekers can't filter signal from noise."
  - "Teams run A/B tests but don't understand what actually moved metrics."

### 4. PM Competencies Demonstrated
- 2-4 specific PM skills shown in this project
- Examples:
  - User Research
  - Problem Framing
  - Prioritization
  - Product Strategy
  - AI Product Thinking
  - Experiment Design
  - Metrics & Analytics
  - Customer Discovery
  - Technical Execution

### 5. Visual Differentiation
Each project includes a unique visual element that reinforces its PM focus:

**Strategy Visual** (LinkedIn Job Navigator, Notion AI)
- Shows strategic decisions or tradeoffs
- Format: "From X → To Y" or "Key Decision: Z"

**Insight Visual** (FeedbackLens)
- Highlights pattern discovery or data insights
- Format: "X pieces → Y themes"

**Experiment Visual** (AI Experiment Hub)
- Shows experiment structure or methodology
- Format: "Hypothesis → Metric → Decision"

**Metric Visual** (future projects)
- Displays key outcome (when real data exists)
- Format: Large number + context

### 6. Key Insight
- "The interesting part" or "What I decided"
- One sentence that previews the case study's depth
- Avoids fabricated outcomes
- Examples:
  - "Decided to focus on relevance over volume..."
  - "Built an NLP-powered tool that groups feedback by theme..."

### 7. Context-Specific CTA
- Varies by project type
- "Read the case study →"
- "Explore the product thinking →"
- "See the product decisions →"

## Data Model

### File Structure
```
lib/
  projects.ts          # Reusable data model

components/
  projects/
    ProjectCard.tsx    # Main card component
    ProjectVisual.tsx  # Visual elements
    index.ts           # Exports

sections/
  SelectedWork.tsx     # Section that maps projects
```

### Type Definitions

```typescript
interface ProjectData {
  // Basic Info
  slug: string;
  name: string;
  tagline: string;           // One-line problem
  
  // PM Classification
  type: ProjectType;         // Product Strategy, AI Product, etc.
  status: ProjectStatus;     // Portfolio Project, Coded Product, etc.
  
  // PM Competencies
  competencies: PMCompetency[];
  
  // Preview
  keyInsight: string;        // "What I decided" preview
  
  // Visual Differentiation
  visual?: {
    type: 'metric' | 'strategy' | 'insight' | 'experiment';
    data?: any;
  };
  
  // Navigation
  cta: string;
  
  // Metadata (for case study pages)
  metadata?: {
    timeline?: string;
    team?: string;
    industry?: string;
  };
}
```

## Current Projects

### 1. LinkedIn Job Navigator
- **Type**: Consumer Product
- **Status**: Portfolio Project
- **Problem**: "Early-career job seekers can't filter signal from noise."
- **Competencies**: User Research, Problem Framing, Product Strategy, Prioritization
- **Insight**: Focus on relevance over volume
- **Visual**: Strategic tradeoff display

### 2. Notion AI — AI Operating System
- **Type**: AI Product
- **Status**: Speculative Case Study
- **Problem**: "Current AI tools feel like features, not a coherent system."
- **Competencies**: Product Vision, AI Product Thinking, Competitive Analysis, Product Strategy
- **Insight**: Connecting knowledge over generating text
- **Visual**: Vision shift (AI Writer → AI Operating System)

### 3. FeedbackLens
- **Type**: Technical PM
- **Status**: Coded Product
- **Problem**: "Product teams drown in feedback but can't find patterns."
- **Competencies**: Customer Discovery, Technical Execution, Problem Framing, AI Product Thinking
- **Insight**: NLP-powered theme grouping
- **Visual**: Data insight (500+ pieces → 12 themes)

### 4. AI Experiment Hub
- **Type**: Experimentation
- **Status**: Concept
- **Problem**: "Teams run A/B tests but don't understand what actually moved metrics."
- **Competencies**: Experiment Design, Metrics & Analytics, Product Strategy, Technical Execution
- **Insight**: Connecting tests to decisions, not just significance
- **Visual**: Experiment structure flow

## Why This Structure Works

### For Recruiters/Hiring Managers
- Immediately see PM competencies without reading paragraphs
- Understand project scope and status (credibility)
- Preview the depth of thinking before clicking

### For Product People
- Clear problem framing shows PM mindset
- Visual elements communicate different PM approaches
- "Key insight" reveals quality of thinking

### For Credibility
- Status labels (Portfolio Project, Coded Product, Concept) set honest expectations
- No fabricated metrics or fake outcomes
- Focus on thinking and decisions, not just deliverables

## Design Principles

1. **Scannable**: Hierarchy allows quick understanding
2. **Honest**: Clear labels about project status
3. **PM-Focused**: Competencies and decisions over features
4. **Differentiated**: Each card has unique visual treatment
5. **Reusable**: Data model supports case study pages

## Usage for Case Studies

The `ProjectData` structure is designed to be reused for full case study pages:

```typescript
import { projects } from '@/lib/projects';

// In case study page
const project = projects.find(p => p.slug === params.slug);
```

All metadata needed for case studies lives in the same data structure, ensuring consistency between the homepage preview and the full case study.

## Adding New Projects

1. Add project data to `lib/projects.ts`
2. Choose appropriate visual type
3. Write problem-focused tagline
4. Select 2-4 relevant competencies
5. Write key insight preview
6. Choose honest status label

The card will automatically render with proper structure and visual treatment.

## Next Steps

- Build case study page template using this data model
- Add more projects as needed
- Refine competency list based on target roles
- Update projects as they evolve (e.g., Concept → Coded Product)
