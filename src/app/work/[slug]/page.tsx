import CaseStudy from '@/app/components/CaseStudy'
import { caseStudyProjects, getProject } from '@/app/data/projects'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudyProjects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug)
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
  }
}

export default async function Page({ params }: Props) {
  return <CaseStudy project={getProject((await params).slug)} />
}
