import ProjectCard from '@/app/components/ProjectCard'
import { projects } from '@/app/data/projects'
import Link from 'next/link'

export default function Solutions() {
  return (
    <section
      className="border-foreground/15 bg-surface border-t py-20 md:py-28"
      aria-labelledby="work-title"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Selected work
            </p>
            <h2
              id="work-title"
              className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Work you can look through.
            </h2>
          </div>
          <Link
            href="/solutions"
            className="border-accent text-accent w-fit border-b-2 pb-1 font-semibold"
          >
            All projects ↗
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
