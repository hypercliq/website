import type { Project } from '@/app/data/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/solutions/${project.slug}`}
      className="group border-foreground/15 bg-background focus-visible:outline-accent block border focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      <div className="bg-surface aspect-[3/2] overflow-hidden">
        <Image
          src={project.images[0]}
          alt=""
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6 md:p-8">
        <p className="text-accent text-xs font-semibold tracking-[0.16em] uppercase">
          {project.field}
        </p>
        <h3 className="mt-3 text-2xl leading-tight font-semibold tracking-tight group-hover:underline group-hover:underline-offset-4">
          {project.title}
        </h3>
        <p className="text-foreground/75 mt-3 leading-7">{project.summary}</p>
        <span className="text-accent mt-6 inline-block text-sm font-semibold">
          View project <span aria-hidden="true">↗</span>
        </span>
      </div>
    </Link>
  )
}
