import ContentLink from '@/app/components/ContentLink'
import { company } from '@/app/data/company'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Working with Hypercliq on data, software, and research projects.',
}

export default function Careers() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-[65vh]">
      <header className="border-divider bg-surface border-b">
        <div className="site-container section-generous">
          <p className="text-accent eyebrow">Careers</p>
          <h1 className="heading-page mt-4 max-w-3xl">Work with us.</h1>
          <p className="text-foreground/75 type-intro mt-8 max-w-2xl">
            Our projects sit between software engineering, data, and applied
            research. If your experience fits that kind of work, we would like
            to hear from you.
          </p>
        </div>
      </header>
      <section
        className="site-container section-standard"
        aria-labelledby="get-in-touch"
      >
        <div className="border-divider border-t pt-8">
          <h2 id="get-in-touch" className="text-2xl font-semibold">
            Get in touch
          </h2>
          <p className="text-foreground/75 type-prose mt-4 max-w-xl">
            Send a short introduction and your CV to{' '}
            <ContentLink href={`mailto:${company.email}`} variant="inline">
              {company.email}
            </ContentLink>
            . Tell us what you have worked on and what interests you.
          </p>
        </div>
      </section>
    </main>
  )
}
