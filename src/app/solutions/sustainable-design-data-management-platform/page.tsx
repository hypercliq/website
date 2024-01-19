// SustainableDesignCaseStudy.tsx

import ImagePopper from '@/app/components/ImagePopper'
import Link from 'next/link'

import SportInfinity1 from '@/app/assets/images/sport-infinity_1.avif'
import SportInfinity2 from '@/app/assets/images/sport-infinity_2.avif'
import SportInfinity3 from '@/app/assets/images/sport-infinity_3.avif'
import SportInfinity4 from '@/app/assets/images/sport-infinity_4.avif'
import { Metadata } from 'next'

// create metadata for this page
export const metadata: Metadata = {
  title: 'Sustainable Design Data Management Platform',
  description: 'Revolutionizing Product Innovation through Sustainable Design',
}

// Header Section
const SustainableDesignCaseStudy = () => {
  return (
    <div className="bg-surface py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-primary">
            Sustainable Design Data Management Platform
          </h1>
          <p className="text-lg text-foreground/75">
            Revolutionizing Product Innovation through Sustainable Design
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mt-8">
          <p>
            In the pursuit of a greener future, our Sustainable Design Data
            Management Platform stands as a beacon of innovation. This
            cloud-based platform is meticulously designed to streamline the
            development of sustainable products by seamlessly gathering and
            providing access to a wealth of knowledge. From new product samples
            and materials to engineering properties, manufacturing processes,
            and their correlations with desired product characteristics —
            including vital Sustainability Parameters such as environmental
            footprint and recyclability — this platform sets a new standard for
            environmentally conscious design.
          </p>
        </section>

        <div className="my-8 flex flex-col md:flex-row md:gap-8">
          <div className="md:order-2 md:w-3/5">
            {/* Challenge, Solution, and Approach Section */}
            <section>
              <p>
                At its core, the platform boasts advanced search functionalities
                and a comprehensive suite of data analysis tools, serving as
                pivotal enablers for driving product innovation. This dynamic
                combination empowers designers and engineers to navigate the
                intricacies of creating environmentally conscious and
                sustainable solutions, fostering efficiency and excellence in
                the pursuit of a greener future.
              </p>
            </section>

            {/* Project Objectives Section */}
            <section className="mt-8">
              <p>
                Developed within the framework of the groundbreaking Sport
                Infinity project, led by Adidas and funded by the European
                Union’s Horizon 2020 Framework Programme for Research and
                Innovation, the platform played a crucial role in achieving key
                project objectives:
              </p>
              <ul className="list-disc pl-8">
                <li>
                  The identification, selection, and processing of appropriate
                  materials (virgin or recycled), enabling the achievement of
                  semi-automated and sustainable production.
                </li>
                <li>
                  The design and development of innovative production processes,
                  enabling local and adhesive-free production of customizable
                  sporting goods.
                </li>
                <li>
                  Definition and development of an integrated design approach,
                  based on effective knowledge management and including
                  user-involvement in the configuration of custom products.
                </li>
              </ul>
            </section>

            {/* Results, Challenges, and Solutions Section */}
            <section className="mt-8">
              <p>
                The Sustainable Design Data Management Platform, as part of the
                Sport Infinity project, has not only met but exceeded
                expectations. By seamlessly integrating sustainability
                parameters into the design process, it has facilitated the
                creation of sporting goods that are not only cutting-edge in
                design but also environmentally responsible.
              </p>
              <p>
                Overcoming challenges in material selection, production
                processes, and design integration, the platform has become an
                instrumental tool for Adidas and its partners in the pursuit of
                sustainable innovation. The result is a revolution in the sports
                industry, where every gram of a football boot can be broken down
                and recycled into a 3D shapeable material for the next creator
                to mold into their dream product without the use of adhesives.
              </p>
            </section>
          </div>

          <div className="md:order-1 md:w-2/5">
            <ImagePopper
              src={SportInfinity4}
              alt="Design Phase of the Sustainable Design Data Management Platform"
              className="cursor-pointer pt-8 md:pt-0"
            />
            <ImagePopper
              src={SportInfinity1}
              alt="Sustainable Design Data Management Platform in Action"
              className="cursor-pointer pt-8"
            />
            <ImagePopper
              src={SportInfinity3}
              alt="Susainable Design Data Management Platform in Action"
              className="cursor-pointer pt-8"
            />
            <ImagePopper
              src={SportInfinity2}
              alt="The Project Concept of the Sustainable Design Data Management Platform"
              className="cursor-pointer pt-8"
            />
          </div>
        </div>

        {/* CTA */}
        <section className="mt-8">
          <p className="text-center text-lg md:text-left">
            Ready to embark on the journey of sustainable design innovation?
            Contact us to explore how our Sustainable Design Data Management
            Platform can empower your product development with environmental
            consciousness.
          </p>
        </section>

        <section className="mt-8 flex items-center justify-center px-4 md:px-8">
          <Link
            className="text-md rounded-md bg-accent px-3.5 py-2.5 font-semibold text-onAccent shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            href="/contact"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  )
}

export default SustainableDesignCaseStudy
