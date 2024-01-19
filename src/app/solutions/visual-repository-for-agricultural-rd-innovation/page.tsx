// AgriculturalInnovationCaseStudy.tsx

import ImagePopper from '@/app/components/ImagePopper'
import Link from 'next/link'

import Hydac1 from '@/app/assets/images/hydac_1.avif'
import Hydac2 from '@/app/assets/images/hydac_2.avif'
import { Metadata } from 'next'

// create metadata for this page
export const metadata: Metadata = {
  title: 'Visual Repository for Agricultural R&D Innovation',
  description:
    'Empowering Agricultural Research through Web-Based Visual Data Management',
}

// Header Section
const AgriculturalInnovationCaseStudy = () => {
  return (
    <div className="bg-surface py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-primary">
            Visual Repository for Agricultural R&D Innovation
          </h1>
          <p className="text-lg text-foreground/75">
            Empowering Agricultural Research through Web-Based Visual Data
            Management
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mt-8">
          <p>
            Our web-based data management platform is meticulously designed to
            serve as a visual repository within a pioneering R&D initiative in
            the field of Agriculture. Tailored for the storage and processing of
            visual data, this platform offers customized views and user access
            aligned with different roles, supporting the entire research
            pipeline—from agricultural fields to the creation of datasets for
            Deep Learning.
          </p>
        </section>

        <div className="my-8 flex flex-col md:flex-row md:gap-8">
          <div className="md:order-2 md:w-3/5">
            {/* Challenge, Solution, and Approach Section */}
            <section>
              <p>
                Recognizing the diverse needs within agricultural research, our
                platform provides role-specific views and access, ensuring that
                stakeholders across the research pipeline have the tools they
                need. From capturing visual data in agricultural fields to
                processing and utilizing the data for advanced technologies like
                Deep Learning, our platform is a versatile solution for the
                evolving landscape of agricultural R&D.
              </p>
            </section>
          </div>

          <div className="md:order-1 md:w-2/5">
            <ImagePopper
              src={Hydac1}
              alt="Visual Repository for Agricultural R&D Innovation in Action"
              className="cursor-pointer pt-8 md:pt-0"
            />
            <ImagePopper
              src={Hydac2}
              alt="Customized Views and User Access for Agricultural R&D"
              className="cursor-pointer pt-8"
            />
          </div>
        </div>

        {/* CTA */}
        <section className="mt-8">
          <p className="text-center text-lg md:text-left">
            Ready to revolutionize your agricultural research? Contact us to
            explore how our Visual Repository for Agricultural R&D Innovation
            can enhance your capabilities in visual data management and
            accelerate innovation.
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

export default AgriculturalInnovationCaseStudy
