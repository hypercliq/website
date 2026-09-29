import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Spatial data and visualization',
    text: 'We build tools to inspect Gaussian splats and LiDAR scans, including measurement and building geometry extraction.',
  },
  {
    number: '02',
    title: 'Data platforms',
    text: 'We build platforms that connect product, manufacturing, and sustainability records or organize research images.',
  },
  {
    number: '03',
    title: 'Applied AI and research software',
    text: 'Our research software includes movement analysis from wearable sensors and YOLO-World detections in 3D scans.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28"
      aria-labelledby="services-title"
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            What we do
          </p>
          <h2
            id="services-title"
            className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            From data to working software.
          </h2>
        </div>
        <p className="text-foreground/75 max-w-lg text-lg leading-8">
          Our work runs from system architecture and data models to viewers,
          repositories, and analysis tools.
        </p>
      </div>
      <div className="border-foreground/15 mt-14 grid border-t md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.number}
            className="border-foreground/15 border-b py-8 md:pr-10"
          >
            <p className="text-accent text-sm font-semibold">
              {service.number}
            </p>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">
              {service.title}
            </h3>
            <p className="text-foreground/75 mt-4 leading-7">{service.text}</p>
          </div>
        ))}
      </div>
      <Link
        href="/services"
        className="border-accent text-accent mt-10 inline-block border-b-2 pb-1 font-semibold"
      >
        More about our services ↗
      </Link>
    </section>
  )
}
