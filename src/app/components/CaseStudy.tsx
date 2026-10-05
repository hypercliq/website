import ContactCTA from '@/app/components/ContactCTA'
import ContentLink from '@/app/components/ContentLink'
import type { CaseStudyProject } from '@/app/data/projects'
import Image from 'next/image'

export default function CaseStudy({ project }: { project: CaseStudyProject }) {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="border-divider bg-surface border-b">
        <div className="site-container section-standard">
          <ContentLink href="/work" variant="back">
            All projects
          </ContentLink>
          <p className="text-accent eyebrow mt-14">{project.field}</p>
          <h1 className="heading-project mt-4 max-w-4xl">{project.title}</h1>
          <p className="text-foreground/75 type-intro mt-7 max-w-3xl">
            {project.summary}
          </p>
        </div>
      </div>
      <div className="site-container section-standard">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div>
            <p className="text-accent eyebrow">Project notes</p>
            <h2 className="heading-subsection mt-3">The work</h2>
          </div>
          <div className="type-body max-w-2xl space-y-8">
            <p>{project.contribution}</p>
            <div className="border-divider border-t pt-8">
              <h3 className="text-accent text-sm font-semibold tracking-[0.14em] uppercase">
                Context
              </h3>
              <p className="text-foreground/75 mt-3">{project.context}</p>
            </div>
          </div>
        </div>
        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          {project.images.map(({ image, alt }) => (
            <div key={image.src} className="border-frame bg-surface border p-3">
              <Image
                src={image}
                alt={alt}
                className="h-auto w-full"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
      <ContactCTA />
    </main>
  )
}
