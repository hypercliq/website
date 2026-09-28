import { MetadataRoute } from 'next'
import { projects } from '@/app/data/projects'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: 'https://hypercliq.com/',
      lastModified: '2026-09-28',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://hypercliq.com/domains',
      lastModified: '2026-09-28',
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://hypercliq.com/services',
      lastModified: '2026-09-28',
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://hypercliq.com/solutions',
      lastModified: '2026-09-28',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://hypercliq.com/about',
      lastModified: '2026-09-28',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://hypercliq.com/careers',
      lastModified: '2026-09-28',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://hypercliq.com/contact',
      lastModified: '2026-09-28',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://hypercliq.com/privacy',
      lastModified: '2026-09-28',
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://hypercliq.com/terms',
      lastModified: '2026-09-28',
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://hypercliq.com/cookies',
      lastModified: '2026-09-28',
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
  return [
    ...pages,
    ...projects
      .filter((project) => project.slug !== 'splat-viewer')
      .map((project) => ({
        url: `https://hypercliq.com/solutions/${project.slug}`,
        lastModified: '2026-09-28',
        changeFrequency: 'yearly' as const,
        priority: 0.6,
      })),
  ]
}
