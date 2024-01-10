import { EmailSVG } from '@/app/components/EmailSVG'
import Link from 'next/link'

interface Section {
  title: string
  content: string | JSX.Element
}

interface PageProps {
  title: string
  intro: string
  sections: Section[]
  contactEmail: string
  companyName: string
  companyAddress: string
  lastUpdated: string
  buttonText?: string
}

const PageTemplate: React.FC<PageProps> = ({
  title,
  intro,
  sections,
  contactEmail,
  companyName,
  companyAddress,
  lastUpdated,
  buttonText = 'Contact Us',
}) => {
  return (
    <main className="bg-surface py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <h1 className="mb-6 text-4xl font-bold md:w-1/2">{title}</h1>

          <div className="text-lg md:w-1/2">
            <p className="mb-4">{intro}</p>
          </div>
        </div>

        {sections.map((section) => (
          <section className="mt-8" key={section.title}>
            <h2 className="mb-4 text-2xl font-bold text-primary">
              {section.title}
            </h2>
            <p className="mb-4">{section.content}</p>
          </section>
        ))}

        {contactEmail && companyName && companyAddress ? (
          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-primary">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this {title} or our practices, you
              can contact us at <EmailSVG email={contactEmail} />
            </p>

            <p className="mb-8">
              This {title} is effective as of January 2024 and may be updated
              from time to time. Please review this {title} periodically for any
              changes.
            </p>

            <p className="mb-4 font-bold">{companyName}</p>

            <address className="mb-4">
              {companyAddress.split(',').map((line) => (
                <p key={line.replace(' ', '-')}>{line}</p>
              ))}
            </address>

            <p className="mb-4 text-sm">Last Updated: {lastUpdated}</p>
          </section>
        ) : (
          <section className="mt-8">
            <Link
              href="/contact"
              className="text-md rounded-md bg-accent px-3.5 py-2.5 font-semibold text-onAccent shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {buttonText}
            </Link>
          </section>
        )}
      </div>
    </main>
  )
}

export default PageTemplate
