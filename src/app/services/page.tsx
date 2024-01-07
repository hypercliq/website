// ServicesPage.tsx
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Data Services and IT Consulting - Hypercliq',
  description:
    'Empowering innovation through data-driven solutions and expert IT consulting services. Transform your business with our cutting-edge technologies.',
}

const Services = () => {
  return (
    <div className="bg-surface py-8 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-8">
        <div className="md:col-span-2">
          <h1 className="mb-6 text-4xl font-bold text-primary">
            Empowering Innovation with Hypercliq Services
          </h1>
          <p className="text-lg">
            Welcome to a realm where data becomes a catalyst for innovation.
            Hypercliq offers a comprehensive suite of data-driven solutions and
            expert IT consulting services, transforming businesses with
            cutting-edge technologies. Explore our dynamic range of services,
            each meticulously crafted to elevate your domain to new heights.
          </p>
        </div>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Data-Driven Solutions</h2>
          <p className="">
            Experience the seamless orchestration of your data with
            Hypercliq&apos;s adaptable and efficient data structuring systems.
            Whether it&apos;s analysis, visualization, organization, or
            extraction, our proficiency in AI, ML, and statistical analysis
            ensures that your data becomes a strategic asset. Unlock the full
            potential of your data and revolutionize the way you make decisions.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">
            Data Visualization and Insight Extraction
          </h2>
          <p className="">
            Uncover the stories hidden within your data. Hypercliq transforms
            raw data into compelling visual narratives and extracts actionable
            insights. Our advanced data visualization and knowledge extraction
            tools empower you to make informed decisions and stay ahead in your
            industry. Turn complex datasets into a source of strategic
            advantage.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">
            Professional IT Consulting
          </h2>
          <p className="">
            Navigate the ever-evolving landscape of technology with confidence.
            Hypercliq&apos;s professional IT consulting services provide
            strategic guidance and hands-on support. Whether you&apos;re
            embarking on a digital transformation or seeking optimization, our
            consulting team is your trusted partner. Let&apos;s shape the future
            of your IT landscape together.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">
            Unleashing the Power of Data with ML and AI
          </h2>
          <p className="">
            At Hypercliq, we go beyond data processing; we unleash its power
            with cutting-edge Machine Learning and AI technologies. Collaborate
            closely with our team as we blend your domain expertise with our
            data proficiency to create strategies that go beyond conventional
            boundaries. Revolutionize your approach to innovation, elevate your
            business, and embark on a journey where data drives your success.
          </p>
        </section>
      </div>
      <section className="mt-8 flex items-center justify-center px-4 md:px-8">
        <Link
          className="text-md rounded-md bg-accent px-3.5 py-2.5 font-semibold text-onAccent shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href="/contact"
        >
          Transform Now
        </Link>
      </section>
    </div>
  )
}

export default Services
