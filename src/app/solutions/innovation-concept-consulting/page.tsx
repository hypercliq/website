// InnovationConsultingCaseStudy.tsx

import ImagePopper from '@/app/components/ImagePopper'
import Link from 'next/link'

import AdidasConsulting1 from '@/app/assets/images/adidas-consulting_1.avif'
import { Metadata } from 'next'

// create metadata for this page
export const metadata: Metadata = {
  title: 'Innovation Concept Consulting and Funding Application Support',
  description:
    'Catalyzing Innovation Through Strategic Consulting and Funding Application Support',
}

// Header Section
const InnovationConsultingCaseStudy = () => {
  return (
    <div className="bg-surface py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-primary">
            Innovation Concept Consulting and Funding Application Support
          </h1>
          <p className="text-lg text-foreground/75">
            Catalyzing Innovation Through Strategic Consulting and Funding
            Application Support
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mt-8">
          <p>
            Our consulting services specialize in formulating innovative project
            concepts and providing comprehensive support for funding
            applications, particularly targeting EU funding for project
            development. We go beyond traditional consulting by actively
            researching existing technologies and their application, propelling
            the design and manufacturing of groundbreaking products.
          </p>
        </section>

        <div className="my-8 flex flex-col md:flex-row md:gap-8">
          <div className="md:order-2 md:w-3/5">
            {/* Challenge, Solution, and Approach Section */}
            <section>
              <p>
                Our expertise lies in fostering sustainability and envisioning
                innovative products, including fully recyclable, adhesive-free
                sports goods and other technologies that contribute to a greener
                era of consumer goods. Our work has resulted in the formulation
                of multiple projects, the establishment of interdisciplinary
                consortia, and the successful submission of research and
                innovation funding applications.
              </p>
            </section>

            {/* Successful Project - Sport Infinity Section */}
            <section className="mt-8">
              <p>
                A remarkable outcome of our services is the highly successful
                Sport Infinity project. This initiative aimed to identify and
                develop innovative recyclable materials enabling the automatic
                production of easily customizable sporting goods. The project
                not only allowed for greater design freedom but also paved the
                way for the manufacturing of sustainable sports goods.
              </p>
            </section>
          </div>

          <div className="md:order-1 md:w-2/5">
            <ImagePopper
              src={AdidasConsulting1}
              alt="Consulting and Funding Application Support in Action"
              className="cursor-pointer pt-8 md:pt-0"
            />
          </div>
        </div>

        {/* CTA */}
        <section className="mt-8">
          <p className="text-center text-lg md:text-left">
            Ready to transform your innovative ideas into successful projects?
            Contact us to explore how our Innovation Concept Consulting and
            Funding Application Support can catalyze your journey toward
            groundbreaking achievements.
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

export default InnovationConsultingCaseStudy
