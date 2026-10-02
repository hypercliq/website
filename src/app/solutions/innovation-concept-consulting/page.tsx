import ContentLink from '@/app/components/ContentLink'
import type { Metadata } from 'next'

const sportInfinityPath =
  '/solutions/sustainable-design-data-management-platform'

export const metadata: Metadata = {
  title: 'Research concept and funding support',
  description: 'This work is now covered in the Sport Infinity case study.',
  alternates: { canonical: sportInfinityPath },
  robots: { index: false, follow: true },
}

export default function ResearchStrategyMoved() {
  return (
    <main className="site-container section-generous">
      <h1 className="heading-section max-w-3xl">
        Research strategy in Sport Infinity
      </h1>
      <p className="text-foreground/75 type-body mt-7 max-w-2xl">
        Our research concept work is now described alongside the materials data
        platform we built for Sport Infinity.
      </p>
      <ContentLink
        href={sportInfinityPath}
        className="mt-8 inline-block"
        variant="action"
      >
        Read the Sport Infinity case study
      </ContentLink>
    </main>
  )
}
