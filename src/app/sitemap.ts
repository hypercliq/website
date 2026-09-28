import type { MetadataRoute } from 'next'
import { caseStudyProjects } from '@/app/data/projects'

export const dynamic = 'force-static'

const siteUrl = 'https://hypercliq.com'
const pages = [
  '/',
  '/domains',
  '/services',
  '/solutions',
  '/solutions/luminous',
  '/solutions/splat-viewer',
  '/about',
  '/careers',
  '/contact',
  '/privacy',
  '/terms',
  '/cookies',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}` })),
    ...caseStudyProjects.map((project) => ({
      url: `${siteUrl}/solutions/${project.slug}`,
    })),
  ]
}
