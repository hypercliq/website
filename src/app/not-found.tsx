import ContentLink from '@/app/components/ContentLink'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="site-container flex min-h-[65vh] flex-col justify-center py-20"
    >
      <p className="text-accent eyebrow">404</p>
      <h1 className="heading-section mt-4">We couldn’t find that page.</h1>
      <p className="text-foreground/75 mt-6 text-lg">
        The address may have changed, or the page may no longer be here.
      </p>
      <ContentLink href="/" className="mt-8 w-fit" variant="action">
        Back to home
      </ContentLink>
    </main>
  )
}
