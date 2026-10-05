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
            We bring together software engineering, data, and applied research.
            We like curious people who enjoy turning difficult questions into
            useful work.
          </p>
        </div>
      </header>
      <section
        className="site-container section-standard"
        aria-labelledby="jobs"
      >
        <div className="border-divider border-t pt-8">
          <h2 id="jobs" className="text-2xl font-semibold">
            Jobs
          </h2>
          <p className="text-foreground/75 type-prose mt-4 max-w-xl">
            We’re a small team working with partners across Europe, often on
            projects where the path isn’t obvious at the start. We help shape
            the ideas, make the case for them, develop the systems, and bring
            the pieces together. There’s room for people who enjoy both the
            technical detail and the bigger picture.
          </p>
          <p className="text-foreground/75 type-prose mt-4 max-w-xl">
            We don’t have any open positions at the moment, but we’re always
            interested in meeting people whose experience and interests connect
            with our work.
          </p>
          <p className="text-foreground/75 type-prose mt-4 max-w-xl">
            Send us a short introduction at{' '}
            <ContentLink href={`mailto:${company.email}`} variant="inline">
              {company.email}
            </ContentLink>
            . Tell us what you’ve worked on and what you’d like to explore next.
            You’re welcome to include a CV, portfolio, or examples of your work.
          </p>
          <p className="text-foreground/75 type-prose mt-4 max-w-xl">
            If we see a possible fit, we may get back to you for a conversation.
          </p>
        </div>
      </section>
    </main>
  )
}
