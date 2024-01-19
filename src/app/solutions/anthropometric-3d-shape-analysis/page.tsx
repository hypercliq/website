// AnthropometricCaseStudy.tsx

import EuroFit from '@/app/assets/images/eurofit-app_1.avif'
import EuroFit2 from '@/app/assets/images/eurofit-app_2.avif'
import ImagePopper from '@/app/components/ImagePopper'
import { Metadata } from 'next'
import Link from 'next/link'

// create metadata for this page
export const metadata: Metadata = {
  title: 'Anthropometric 3D Shape Analysis',
  description:
    'Revolutionizing Product Development through Advanced 3D Shape Analysis',
}

// Header Section
const AnthropometricCaseStudy = () => {
  return (
    <div className="bg-surface py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-primary">
            Anthropometric 3D Shape Analysis
          </h1>
          <p className="text-lg text-foreground/75">
            Revolutionizing Product Development through Advanced 3D Shape
            Analysis
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mt-8">
          <p>
            In the dynamic landscape of product development, precision and
            efficiency are paramount. Our Anthropometric 3D Shape Analysis tools
            represent a pioneering leap in the field, empowering designers and
            engineers to seamlessly capture and visualize intricate shape data
            for the entire human body or specific body parts in real time. This
            groundbreaking development is set to redefine industry standards,
            particularly in sectors where consumer fit, comfort, and ergonomic
            considerations are of utmost importance.
          </p>
        </section>

        <div className="my-8 flex flex-col md:flex-row md:gap-8">
          <div className="md:order-2 md:w-3/5">
            {/* Challenge, Solution, and Approach Section */}
            <section>
              <p>
                Addressing the challenge of unlocking the vast potential of 3D
                human body surface data repositories, our tools provide a
                transformative solution for industries focusing on
                consumer-centric factors. Developed within the framework of
                EUROFIT, a comprehensive R&D project funded by the European
                Commission, our tools are at the forefront of innovation. The
                project&apos;s goal was to establish an online platform and an
                open framework facilitating the creation of value from digital
                anthropometric resources.
              </p>
            </section>

            {/* Services Provided Section */}
            <section className="mt-8">
              <p>
                Our tools offer a range of services, including real-time
                visualization of 3D human body surface data, seamless
                integration into product development processes, utilization of
                existing data resources by database owners, and the opportunity
                for third-party IT companies to develop innovative services
                tapping into pooled data.
              </p>
            </section>

            {/* Implementation and Technical Details Section */}
            <section className="mt-8">
              <p>
                The implementation of Anthropometric 3D Shape Analysis tools
                involved a meticulous process of data gathering, processing, and
                integration. Leveraging EUROFIT&apos;s extensive data
                repositories, our tools provide an innovative solution for
                industries aiming to enhance their design precision and
                efficiency.
              </p>
              <p>
                Technical details encompass a robust framework with AI-driven
                algorithms, ensuring the accurate capture and visualization of
                3D shape data. The tools seamlessly integrate into existing
                workflows, offering a user-friendly interface for designers and
                industrialists.
              </p>
            </section>

            {/* Collaboration Section */}
            <section className="mt-8">
              <p>
                Collaboration was a key element in the success of this project.
                Working in tandem with EUROFIT project partners, our team
                fostered an environment of innovation, drawing on diverse
                expertise to create tools that address the evolving needs of
                industries relying on anthropometric data.
              </p>
            </section>

            {/* Results, Challenges, and Solutions Section */}
            <section className="mt-8">
              <p>
                The Anthropometric 3D Shape Analysis tools have redefined the
                landscape of product development, providing industries with a
                competitive edge. Designers now have unprecedented access to
                detailed shape information, ensuring that products are not only
                visually appealing but also optimized for comfort and
                functionality.
              </p>
              <p>
                While faced with the challenge of transforming vast datasets
                into actionable insights, our team navigated this by
                implementing advanced algorithms and user-friendly interfaces.
                The result is a set of tools that empower industries to extract
                maximum value from anthropometric data.
              </p>
            </section>

            {/* Conclusion*/}
            <section className="mt-8">
              <p>
                In conclusion, the Anthropometric 3D Shape Analysis tools
                represent a significant leap in design innovation. The EUROFIT
                project laid the foundation for a transformative solution that
                continues to empower industries with unparalleled insights into
                human body shapes, setting new standards for product
                development.
              </p>
            </section>
          </div>

          <div className="md:order-1 md:w-2/5">
            <ImagePopper
              src={EuroFit2}
              alt="Anthropometric 3D Shape Analysis in Action"
              className="cursor-pointer pt-8 md:pt-0"
            />
            <ImagePopper
              src={EuroFit}
              alt="Anthropometric 3D Shape Analysis in Action"
              className="cursor-pointer pt-8"
            />
          </div>
        </div>

        {/* CTA */}
        <section className="mt-8">
          <p className="text-center text-lg md:text-left">
            Ready to revolutionize your product development process? Contact us
            to explore how Anthropometric 3D Shape Analysis can elevate your
            design precision and efficiency.
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

export default AnthropometricCaseStudy
