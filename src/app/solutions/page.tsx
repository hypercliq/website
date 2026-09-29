import FeaturedLuminous from '@/app/components/FeaturedLuminous'
import FeaturedSplatViewer from '@/app/components/FeaturedSplatViewer'
import ProjectCard from '@/app/components/ProjectCard'
import { caseStudyProjects } from '@/app/data/projects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Selected work',
  description:
    'Selected spatial tools, data platforms, and research software by Hypercliq.',
}

export default function Solutions() {
  return (
    <main>
      <header className="border-foreground/15 bg-surface border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Selected work
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
            Built around real problems.
          </h1>
          <p className="text-foreground/75 mt-7 max-w-2xl text-xl leading-8">
            Current work in spatial data and XR, followed by earlier platforms
            for movement, materials, and product data.
          </p>
        </div>
      </header>
      <section
        className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24"
        aria-label="Projects"
      >
        <h2 className="text-3xl font-semibold tracking-tight">Current work</h2>
        <FeaturedSplatViewer />
        <FeaturedLuminous />
        <h2 className="mt-20 text-3xl font-semibold tracking-tight">
          Earlier projects
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudyProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
