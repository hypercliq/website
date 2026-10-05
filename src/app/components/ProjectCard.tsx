import type { ProjectSummary } from '@/app/data/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
  project,
  headingLevel = 3,
}: {
  project: ProjectSummary
  headingLevel?: 3 | 4
}) {
  const Heading = headingLevel === 4 ? 'h4' : 'h3'

  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-card border-divider bg-background block border"
    >
      <div className="bg-surface aspect-[3/2] overflow-hidden">
        <Image
          src={project.images[0].image}
          alt=""
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6 md:p-8">
        <p className="text-accent eyebrow-compact">{project.field}</p>
        <Heading className="project-card-title mt-3 text-2xl leading-tight font-semibold tracking-tight">
          {project.title}
        </Heading>
        <p className="text-foreground/75 type-prose mt-3">{project.summary}</p>
        <span className="text-accent mt-6 inline-block text-sm font-semibold">
          View{' '}
          <span className="link-ending">
            project<span aria-hidden="true">&nbsp;→</span>
          </span>
        </span>
      </div>
    </Link>
  )
}
