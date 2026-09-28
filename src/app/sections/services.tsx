import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Flexible Data Organization',
    description:
      'Experience seamless data management with our adaptable and efficient data structuring systems.',
    icon: <CircleStackIcon className="h-12 w-12 text-primary" />,
  },
  {
    title: 'Data Visualization and Insight Extraction',
    description:
      'Turn data into insights with our advanced data visualization and knowledge extraction tools.',
    icon: <ChartBarIcon className="h-12 w-12 text-primary" />,
  },
  {
    title: 'Professional IT Consulting',
    description:
      'Transform your business with our expert IT consulting services.',
    icon: <ChatBubbleLeftRightIcon className="h-12 w-12 text-primary" />,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="m-auto flex max-w-7xl flex-col py-10 md:py-16"
    >
      <h2 className="mt-2 px-4 text-center text-4xl font-bold tracking-tight sm:text-5xl md:px-8">
        Empowering Innovation
      </h2>

      <p className="mx-auto mt-5 max-w-2xl px-4 text-center text-lg leading-8 text-foreground/75">
        From organizing complex information to finding useful patterns, we build
        practical tools around each partner&apos;s needs.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-8 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-foreground/10 bg-surface p-6"
          >
            <div className="flex items-center justify-center">
              {service.icon}
            </div>

            <h4 className="mt-6 text-2xl font-bold">{service.title}</h4>
            <p className="mt-4 text-xl">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
