import type { MetadataRoute } from 'next'
import { caseStudyProjects } from '@/app/data/projects'

export const dynamic = 'force-static'

const siteUrl = 'https://hypercliq.com'
const pages = [
  '/',
  '/fields',
  '/services',
  '/work',
  '/work/luminous',
  '/work/splat-viewer',
  '/about',
  '/careers',
  '/contact',
  '/site-map',
  '/privacy',
  '/terms',
  '/cookies',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}` })),
    ...caseStudyProjects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
    })),
  ]
}
