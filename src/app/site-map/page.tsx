import ContentLink from '@/app/components/ContentLink'
import { caseStudyProjects } from '@/app/data/projects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site map',
  description: 'Find Hypercliq pages, project details, and site information.',
  alternates: { canonical: '/site-map' },
}

const groups = [
  {
    title: 'Pages',
    links: [
      { href: '/', label: 'Home' },
      { href: '/work', label: 'Work' },
      { href: '/services', label: 'Services' },
      { href: '/fields', label: 'Fields' },
      { href: '/about', label: 'About' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { href: '/work/splat-viewer', label: 'Splat Viewer' },
      { href: '/work/luminous', label: 'LUMINOUS' },
      ...caseStudyProjects.map((project) => ({
        href: `/work/${project.slug}`,
        label: project.title,
      })),
    ],
  },
  {
    title: 'Information',
    links: [
      { href: '/site-map', label: 'Site map' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/cookies', label: 'Cookies' },
      { href: '/terms', label: 'Terms' },
    ],
  },
]

export default function SiteMap() {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="border-divider bg-surface border-b">
        <div className="site-container section-standard">
          <h1 className="heading-page">Site map</h1>
        </div>
      </header>
      <div className="site-container section-standard space-y-12">
        {groups.map((group) => (
          <section key={group.title}>
            <h2 className="heading-subsection">{group.title}</h2>
            <ul className="type-body mt-5 max-w-2xl list-disc space-y-3 pl-6">
              {group.links.map(({ href, label }) => (
                <li key={href}>
                  <ContentLink href={href}>{label}</ContentLink>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
