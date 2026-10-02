import FeaturedLuminous from '@/app/components/FeaturedLuminous'
import FeaturedSplatViewer from '@/app/components/FeaturedSplatViewer'
import ContentLink from '@/app/components/ContentLink'
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
    <main id="main-content" tabIndex={-1}>
      <header className="border-divider bg-surface border-b">
        <div className="site-container section-generous">
          <p className="text-accent eyebrow">Selected work</p>
          <h1 className="heading-page mt-4 max-w-4xl">
            Built around real problems.
          </h1>
          <p className="text-foreground/75 type-intro mt-7 max-w-2xl">
            Our current work in spatial data and XR, followed by earlier data
            platforms, research tools, and system designs.
          </p>
        </div>
      </header>
      <section
        className="site-container section-standard"
        aria-label="Projects"
      >
        <h2 className="heading-subsection">Current work</h2>
        <FeaturedSplatViewer />
        <FeaturedLuminous />
        <h2 className="heading-subsection mt-20">Earlier projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudyProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <ContentLink href="/contact" variant="action" className="mt-8 w-fit">
          Discuss a project
        </ContentLink>
      </section>
    </main>
  )
}
