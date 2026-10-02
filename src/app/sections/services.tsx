import ContentLink from '@/app/components/ContentLink'

const services = [
  {
    number: '01',
    title: 'Spatial data and visualization',
    text: 'We build tools for inspecting 3D scans, Gaussian splats, and other complex data.',
  },
  {
    number: '02',
    title: 'Data platforms',
    text: 'We structure and connect information so teams can find it, maintain it, and use it in their work.',
  },
  {
    number: '03',
    title: 'Applied AI and research software',
    text: 'We develop software for research projects, including machine learning workflows and domain specific tools.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="site-container section-generous"
      aria-labelledby="services-title"
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-accent eyebrow">What we do</p>
          <h2 id="services-title" className="heading-section mt-4">
            From data to working software.
          </h2>
        </div>
        <p className="text-foreground/75 type-body max-w-lg">
          We work with partners from the first questions through to a usable
          system. Our projects often bring together data engineering, design,
          and research.
        </p>
      </div>
      <div className="border-divider mt-14 grid border-t md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.number}
            className="border-divider border-b py-8 md:pr-10"
          >
            <p className="text-accent text-sm font-semibold">
              {service.number}
            </p>
            <h3 className="heading-item mt-5">{service.title}</h3>
            <p className="text-foreground/75 type-prose mt-4">{service.text}</p>
          </div>
        ))}
      </div>
      <ContentLink
        href="/services"
        className="mt-10 inline-block"
        variant="action"
      >
        More about our services
      </ContentLink>
    </section>
  )
}
