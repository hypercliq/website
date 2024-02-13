// ServicesPage.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import {
  BoltIcon,
  EyeIcon,
  CogIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'
import HighlightSpan from '../components/HighlightSpan'
import MainContainer from '../components/Container'

const services = [
  {
    icon: <BoltIcon className="h-8 w-8 text-primary" />,
    title: 'Data-Driven Solutions',
    text: "Experience the seamless orchestration of your data with Hypercliq's adaptable and efficient data structuring systems. Whether it's analysis, visualization, organization, or extraction, our proficiency in AI, ML, and statistical analysis ensures that your data becomes a strategic asset. Unlock the full potential of your data and revolutionize the way you make decisions.",
  },
  {
    icon: <EyeIcon className="h-8 w-8 text-primary" />,
    title: 'Data Visualization and Insight Extraction',
    text: 'Uncover the stories hidden within your data. Hypercliq transforms raw data into compelling visual narratives and extracts actionable insights. Our advanced data visualization and knowledge extraction tools empower you to make informed decisions and stay ahead in your industry. Turn complex datasets into a source of strategic advantage.',
  },
  {
    icon: <CogIcon className="h-8 w-8 text-primary" />,
    title: 'Professional IT Consulting',
    text: "Navigate the ever-evolving landscape of technology with confidence. Hypercliq's professional IT consulting services provide strategic guidance and hands-on support. Whether you're embarking on a digital transformation or seeking optimization, our consulting team is your trusted partner. Let's shape the future of your IT landscape together.",
  },
  {
    icon: <CpuChipIcon className="h-8 w-8 text-primary" />,
    title: 'Unleashing the Power of Data with ML and AI',
    text: 'At Hypercliq, we go beyond data processing; we unleash its power with cutting-edge Machine Learning and AI technologies. Collaborate closely with our team as we blend your domain expertise with our data proficiency to create strategies that go beyond conventional boundaries. Revolutionize your approach to innovation, elevate your business, and embark on a journey where data drives your success.',
  },
]

export const metadata: Metadata = {
  title: 'Igniting Innovation with Hypercliq Services',
  description:
    'Empowering innovation through data-driven solutions and expert IT consulting services. Transform your business with our cutting-edge technologies.',
}

const Services = () => {
  return (
    <MainContainer>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start">
        <h1 className="mb-6 text-4xl font-bold md:w-1/2">
          Igniting Innovation with Hypercliq Services
        </h1>
        <p className="text-lg md:w-1/2">
          Welcome to a realm where data becomes a{' '}
          <HighlightSpan>catalyst for innovation</HighlightSpan>. Hypercliq
          offers a <HighlightSpan>comprehensive suite</HighlightSpan> of
          data-driven solutions and expert IT consulting services, transforming
          businesses with{' '}
          <HighlightSpan>cutting-edge technologies</HighlightSpan>. Explore our
          dynamic range of services, each meticulously crafted to{' '}
          <HighlightSpan>elevate your domain</HighlightSpan> to new heights.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <section key={index} className="bg-background p-4">
            <div className="mb-4 flex items-center">
              {service.icon}
              <h2 className="ml-4 text-xl font-bold">{service.title}</h2>
            </div>
            <p className="">{service.text}</p>
          </section>
        ))}
      </div>

      <div className="mt-8">
        {/* Additional Text */}
        <section>
          <p className="text-lg">
            Elevate your business to new heights with Hypercliq&apos;s
            innovative services. Our commitment to excellence and expertise in{' '}
            <Link className="text-accent underline" href="/solutions">
              data-driven solutions
            </Link>{' '}
            position us as your strategic partner. Connect with us to explore{' '}
            <Link className="text-accent underline" href="/domains">
              collaborative opportunities
            </Link>{' '}
            and revolutionize your approach to innovation.
          </p>
        </section>
      </div>

      <section className="mt-8 flex items-center justify-center">
        <Link
          className="text-md rounded-md bg-accent px-3.5 py-2.5 font-semibold text-onAccent shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href="/contact"
        >
          Transform Now
        </Link>
      </section>
    </MainContainer>
  )
}

export default Services
