import LegacyBridge, { legacyMetadata } from '@/app/components/LegacyBridge'
import { caseStudyProjects } from '@/app/data/projects'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ slug: string }> }

function getLegacyProject(slug: string) {
  const project = caseStudyProjects.find((project) => project.slug === slug)
  if (!project) notFound()
  return project
}

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudyProjects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getLegacyProject((await params).slug)
  return legacyMetadata(project.title, `/work/${project.slug}`)
}

export default async function Page({ params }: Props) {
  const project = getLegacyProject((await params).slug)
  return (
    <LegacyBridge title={project.title} destination={`/work/${project.slug}`} />
  )
}
