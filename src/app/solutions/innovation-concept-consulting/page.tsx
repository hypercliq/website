import CaseStudy from '@/app/components/CaseStudy'
import { getProject } from '@/app/data/projects'
import type { Metadata } from 'next'

const project = getProject('innovation-concept-consulting')

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
}

export default function Page() {
  return <CaseStudy project={project} />
}
