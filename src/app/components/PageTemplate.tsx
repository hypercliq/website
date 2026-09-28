import Link from 'next/link'

interface Section {
  title: string
  content: React.ReactNode
}

interface PageProps {
  title: string
  intro: string
  sections: Section[]
  contactEmail: string
  companyName: string
  companyAddress: string
  lastUpdated: string
}

export default function PageTemplate({
  title,
  intro,
  sections,
  contactEmail,
  companyName,
  companyAddress,
  lastUpdated,
}: PageProps) {
  return (
    <main>
      <header className="border-foreground/15 bg-surface border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Information
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="text-foreground/75 mt-6 max-w-2xl text-lg leading-8">
            {intro}
          </p>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1fr_2fr] md:px-8 md:py-24">
        <div>
          <p className="text-foreground/65 text-sm">Updated {lastUpdated}</p>
        </div>
        <div className="max-w-2xl">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-foreground/15 border-t py-7 first:pt-0"
            >
              <h2 className="text-2xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <div className="text-foreground/75 mt-4 leading-7">
                {section.content}
              </div>
            </section>
          ))}
          <div className="border-foreground/15 border-t pt-8">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="text-foreground/75 mt-4 leading-7">
              Questions about this page can be sent to{' '}
              <a
                href={`mailto:${contactEmail}`}
                className="text-accent underline"
              >
                {contactEmail}
              </a>
              .
            </p>
            <address className="text-foreground/75 mt-4 not-italic">
              {companyName}
              <br />
              {companyAddress}
            </address>
            <Link
              href="/contact"
              className="border-accent text-accent mt-6 inline-block border-b pb-1 font-semibold"
            >
              Contact details ↗
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
