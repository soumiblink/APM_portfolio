import { Heading, Body, Eyebrow, Caption } from '../ui/Typography';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Link } from '../ui/Link';
import { ProjectData } from '@/lib/projects';
import { ProjectVisual } from './ProjectVisual';

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card 
      hover 
      padding="lg"
      className={`h-full flex flex-col group cursor-pointer ${
        project.metadata?.featured ? 'border-accent-600 border-2' : ''
      }`}
    >
      {/* Header: Type and Status */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Eyebrow className="text-accent-700">
            {project.type}
          </Eyebrow>
          {project.metadata?.featured && (
            <Badge variant="accent" className="text-xs">
              Featured
            </Badge>
          )}
        </div>
        <Badge variant="outline" className="text-xs">
          {project.status}
        </Badge>
      </div>

      {/* Project Name */}
      <Heading as="h3" className="mb-3 group-hover:text-accent-600 transition-colors text-xl">
        {project.name}
      </Heading>

      {/* One-line Problem */}
      <Body size="sm" className="mb-6 text-neutral-700 leading-relaxed">
        {project.tagline}
      </Body>

      {/* PM Competencies */}
      <div className="mb-6">
        <Caption className="uppercase tracking-wide text-neutral-500 mb-2 block text-xs">
          What I Demonstrated
        </Caption>
        <div className="flex flex-wrap gap-2">
          {project.competencies.map(comp => (
            <Badge key={comp} variant="default" className="text-xs">
              {comp}
            </Badge>
          ))}
        </div>
      </div>

      {/* Visual Element */}
      {project.visual && (
        <div className="mb-6">
          <ProjectVisual 
            type={project.visual.type} 
            data={project.visual.data} 
          />
        </div>
      )}

      {/* Key Insight */}
      <div className="mb-6 flex-1">
        <Caption className="uppercase tracking-wide text-neutral-500 mb-2 block text-xs">
          The Interesting Part
        </Caption>
        <Body size="sm" className="text-neutral-700 italic leading-relaxed">
          {project.keyInsight}
        </Body>
      </div>

      {/* CTA */}
      <div className="pt-4 border-t border-neutral-200">
        <Link 
          href={`/work/${project.slug}`}
          variant="accent"
          className="inline-flex items-center gap-1 text-sm font-semibold no-underline text-accent-600 hover:text-accent-700 group-hover:gap-2 transition-all"
        >
          {project.cta}
        </Link>
      </div>
    </Card>
  );
}
