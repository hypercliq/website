import ContentLink from '@/app/components/ContentLink'

export default function Contact() {
  return (
    <section id="contact" className="bg-accent text-onAccent">
      <div className="site-container section-generous flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow opacity-85">Get in touch</p>
          <h2 className="heading-section mt-4 max-w-3xl">
            A problem worth working through?
          </h2>
          <p className="type-body mt-5 max-w-xl opacity-85">
            Tell us about the work and the questions behind it.
          </p>
        </div>
        <ContentLink
          href="/contact"
          className="w-fit text-lg"
          tone="on-accent"
          variant="action"
        >
          Contact us
        </ContentLink>
      </div>
    </section>
  )
}
