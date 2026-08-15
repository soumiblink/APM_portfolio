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
      <Body size="sm" className="mb-6 text-charcoal-700 leading-relaxed">
        {project.tagline}
      </Body>

      {/* PM Competencies */}
      <div className="mb-6">
        <Caption className="uppercase tracking-wide text-charcoal-500 mb-2 block text-xs">
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
        <Caption className="uppercase tracking-wide text-charcoal-500 mb-2 block text-xs">
          The Interesting Part
        </Caption>
        <Body size="sm" className="text-charcoal-700 italic leading-relaxed">
          {project.keyInsight}
        </Body>
      </div>

      {/* CTA */}
      <div className="pt-4 border-t border-border">
        {/* Show GitHub/Live links for coded products */}
        {(project.githubLink || project.liveLink !== undefined) ? (
          <div className="space-y-3">
            <div className="flex gap-2">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-1.5 text-center text-xs font-medium border-2 border-charcoal-900 text-charcoal-900 rounded hover:bg-charcoal-900 hover:text-warmth-100 transition-colors"
                >
                  GitHub →
                </a>
              )}
              {project.liveLink !== undefined && (
                <a
                  href={project.liveLink || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 px-3 py-1.5 text-center text-xs font-medium border-2 border-accent-600 text-accent-600 rounded transition-colors ${
                    project.liveLink 
                      ? 'hover:bg-accent-600 hover:text-warmth-100' 
                      : 'opacity-50 cursor-not-allowed pointer-events-none'
                  }`}
                >
                  Live Demo →
                </a>
              )}
            </div>
            <Link 
              href={`/work/${project.slug}`}
              variant="accent"
              className="inline-flex items-center gap-1 text-sm font-semibold no-underline text-accent-600 hover:text-accent-700 group-hover:gap-2 transition-all"
            >
              {project.cta}
            </Link>
          </div>
        ) : (
          <Link 
            href={`/work/${project.slug}`}
            variant="accent"
            className="inline-flex items-center gap-1 text-sm font-semibold no-underline text-accent-600 hover:text-accent-700 group-hover:gap-2 transition-all"
          >
            {project.cta}
          </Link>
        )}
      </div>
    </Card>
  );
}
