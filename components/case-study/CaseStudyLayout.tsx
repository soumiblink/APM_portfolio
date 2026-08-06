import { ReactNode } from 'react';
import { Container } from '../layout/Container';
import { Display, Body, Eyebrow, Heading, Caption } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { CaseStudyNav } from './CaseStudyNav';
import { SectionHeader } from './SectionHeader';
import { CaseStudyOverview } from '@/lib/case-study-types';

interface CaseStudyLayoutProps {
  name: string;
  tagline: string;
  overview: CaseStudyOverview;
  children: ReactNode;
}

export function CaseStudyLayout({ 
  name, 
  tagline, 
  overview,
  children 
}: CaseStudyLayoutProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-neutral-200">
        <Container>
          <div className="max-w-4xl">
            <Button 
              href="/#work" 
              variant="ghost" 
              size="sm"
              className="mb-6"
            >
              ← Back to all work
            </Button>
            
            <Display className="mb-4">
              {name}
            </Display>
            
            <Body size="lg" className="mb-8 text-neutral-700">
              {tagline}
            </Body>

            {/* Overview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-200">
              <div>
                <Caption className="uppercase tracking-wide text-neutral-500 mb-1">
                  Project
                </Caption>
                <Body size="sm" className="font-medium">
                  {overview.product}
                </Body>
              </div>
              
              <div>
                <Caption className="uppercase tracking-wide text-neutral-500 mb-1">
                  My Role
                </Caption>
                <Body size="sm" className="font-medium">
                  {overview.myRole}
                </Body>
              </div>
              
              <div>
                <Caption className="uppercase tracking-wide text-neutral-500 mb-1">
                  Type
                </Caption>
                <Body size="sm" className="font-medium">
                  {overview.projectType}
                </Body>
              </div>
              
              <div>
                <Caption className="uppercase tracking-wide text-neutral-500 mb-1">
                  Timeline
                </Caption>
                <Body size="sm" className="font-medium">
                  {overview.timeline}
                </Body>
              </div>
            </div>

            <div className="mt-6">
              <Caption className="uppercase tracking-wide text-neutral-500 mb-2">
                Skills Demonstrated
              </Caption>
              <div className="flex flex-wrap gap-2">
                {overview.skillsDemonstrated.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Product Thesis */}
            <div className="mt-8 p-6 bg-neutral-50 border-l-4 border-accent-500">
              <Caption className="uppercase tracking-wide text-neutral-600 mb-2">
                Product Thesis
              </Caption>
              <Body className="font-medium italic">
                {overview.productThesis}
              </Body>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content with Sticky Nav */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky Navigation */}
            <div className="lg:col-span-3">
              <CaseStudyNav />
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
              <div className="max-w-3xl">
                {children}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
