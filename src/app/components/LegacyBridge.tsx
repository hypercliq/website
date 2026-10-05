import ContentLink from '@/app/components/ContentLink'
import type { Metadata } from 'next'

export function legacyMetadata(title: string, destination: string): Metadata {
  return {
    title,
    alternates: { canonical: destination },
    robots: { index: false, follow: true },
  }
}

export default function LegacyBridge({
  title,
  destination,
}: {
  title: string
  destination: string
}) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="site-container section-generous"
    >
      <h1 className="heading-section max-w-3xl">{title}</h1>
      <p className="text-foreground/75 type-body mt-7 max-w-2xl">
        This page has moved to a new address.
      </p>
      <ContentLink
        href={destination}
        className="mt-8 inline-block"
        variant="action"
      >
        Continue to {title}
      </ContentLink>
    </main>
  )
}
