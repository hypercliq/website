import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline'
import TextCarousel from '@/app/components/TextCarousel'

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

const sentences = [
  'Your Domain, Our Expertise',
  'Data Mastery, Domain Expertise',
  'Your Vision, Our Innovation',
  'Transforming Domains with Data',
  'Strategic Solutions, Diverse Domains',
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

      <TextCarousel
        textArray={sentences}
        fromDirection="top"
        toDirection="bottom"
        className="mt-2 h-10 text-2xl font-bold tracking-tight text-accent sm:text-3xl"
        innerClassName="px-4 md:px-8 text-center"
        tag={'h3'}
      />

      <div className="mt-8 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-8 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="bg-surface p-4 shadow-md">
            <div className="flex items-center justify-center">
              {service.icon}
            </div>

            <h4 className="mt-6 text-2xl font-bold">{service.title}</h4>
            <p className="mt-4 text-xl">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 px-4 md:px-8">
        <p className="bg-gradient-to-r from-[#af21f6] to-[#21f6af] p-4 text-center  text-xl font-semibold leading-8 tracking-normal text-white shadow-md">
          Unleashing the power of data with our cutting-edge Machine Learning
          and AI technologies, we work closely with you, leveraging your domain
          expertise with our data proficiency to create tailored strategies.
        </p>
      </div>
    </section>
  )
}
