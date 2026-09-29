import type { CaseStudyProject } from '@/app/data/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function CaseStudy({ project }: { project: CaseStudyProject }) {
  return (
    <main>
      <div className="border-foreground/15 bg-surface border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <Link
            href="/solutions"
            className="text-accent text-sm font-semibold hover:underline"
          >
            ← All projects
          </Link>
          <p className="text-accent mt-14 text-xs font-semibold tracking-[0.18em] uppercase">
            {project.field}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="text-foreground/75 mt-7 max-w-3xl text-xl leading-8">
            {project.summary}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div>
            <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Project notes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              The work
            </h2>
          </div>
          <div className="max-w-2xl space-y-8 text-lg leading-8">
            <p>{project.contribution}</p>
            <div className="border-foreground/15 border-t pt-8">
              <h3 className="text-accent text-sm font-semibold tracking-[0.14em] uppercase">
                Context
              </h3>
              <p className="text-foreground/75 mt-3">{project.context}</p>
            </div>
          </div>
        </div>
        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          {project.images.map(({ image, alt }) => (
            <div
              key={image.src}
              className="border-foreground/10 bg-surface border p-3"
            >
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
      <div className="border-foreground/15 bg-surface border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-2xl font-semibold tracking-tight">
            Have a related project in mind?
          </p>
          <Link
            href="/contact"
            className="border-accent text-accent inline-flex w-fit items-center border-b-2 pb-1 font-semibold"
          >
            Get in touch ↗
          </Link>
        </div>
      </div>
    </main>
  )
}
