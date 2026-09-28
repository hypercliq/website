import type { MetadataRoute } from 'next'
import { projects } from '@/app/data/projects'

export const dynamic = 'force-static'

const siteUrl = 'https://hypercliq.com'
const pages = [
  '/',
  '/domains',
  '/services',
  '/solutions',
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
    ...projects
      // Splat Viewer remains noindex while its content is reviewed.
      .filter((project) => project.slug !== 'splat-viewer')
      .map((project) => ({
        url: `${siteUrl}/solutions/${project.slug}`,
      })),
  ]
}
