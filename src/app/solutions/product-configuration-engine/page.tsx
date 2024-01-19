// ProductConfigCaseStudy.tsx

import Link from 'next/link'
import EasyIMP1 from '@/app/assets/images/easy-imp_1.avif'
import EasyIMP2 from '@/app/assets/images/easy-imp_2.avif'
import EasyIMP3 from '@/app/assets/images/easy-imp_3.avif'
import ImagePopper from '@/app/components/ImagePopper'
import { Metadata } from 'next'

// create metadata for this page
export const metadata: Metadata = {
  title: 'Product Configuration Engine based on Intelligent Consumer Profiling',
  description:
    'Transforming Wearable Electronics Marketplace through Personalized Recommendations',
}

// Header Section
const ProductConfigCaseStudy = () => {
  return (
    <div className="bg-surface py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-primary">
            Product Configuration Engine based on Intelligent Consumer Profiling
          </h1>
          <p className="text-lg text-foreground/75">
            Transforming Wearable Electronics Marketplace through Personalized
            Recommendations
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mt-8">
          <p>
            Our Product Configuration Engine is at the forefront of
            revolutionizing the wearable electronics marketplace. Specialized in
            consumer profiling and the recommendation of product configurations,
            our online data mining services have successfully automated
            intricate sensor recommendations seamlessly embedded in garments or
            accessories.
          </p>
        </section>

        <div className="my-8 flex flex-col md:flex-row md:gap-8">
          <div className="md:order-2 md:w-3/5">
            <section className="">
              <p>
                Harnessing the power of these services, we go beyond
                conventional approaches by conducting a detailed analysis of
                user interests and preferences on social media. This allows us
                to suggest configurations that align precisely with each
                consumer&apos;s unique needs, simplifying the decision-making
                process and eliminating the need for consumers to possess
                in-depth knowledge about how various components integrate. The
                result is a personalized and seamless experience for every
                consumer.
              </p>
            </section>

            {/* Project Development Section */}
            <section className="mt-8">
              <p>
                Developed in the framework of EASY-IMP, funded by the European
                Commission under the Seventh Framework Program for research,
                technological development, and demonstration, our Product
                Configuration Engine represents a groundbreaking solution. The
                EASY-IMP project aimed to develop methodologies, tools, and
                platforms for the design and production of personalized
                products, combining wearable intelligent sensors with mobile and
                cloud computing.
              </p>
              <p>
                The project focused on several pilot applications, including
                outdoor video games, personal training, functional
                rehabilitation, and assisted living for the elderly and
                handicapped. These applications involved miniature motion,
                skin-temperature, and skin-conductivity sensors. EASY-IMP built
                upon existing games, sport, and training applications for
                testing and demonstration purposes while focusing on the
                development of the methodological Meta-Product framework.
              </p>
            </section>

            {/* Methodologies and Achievements Section */}
            <section className="mt-8">
              <p>
                The EASY-IMP project not only developed guidelines and standards
                but also methodologies and reference architectures for the
                design and production of smart garments. It successfully
                integrated wearable intelligent sensors with mobile and cloud
                computing, paving the way for innovative applications in various
                fields.
              </p>
            </section>

            {/* Conclusion */}
            <section className="mt-8">
              <p>
                In conclusion, our Product Configuration Engine has emerged as a
                transformative force in the wearable electronics market. The
                EASY-IMP project laid the foundation for personalized product
                development, and our engine now sets the standard for seamless
                and intelligent consumer profiling.
              </p>
            </section>
          </div>

          <div className="md:order-1 md:w-2/5">
            <ImagePopper
              src={EasyIMP3}
              alt="Product Configuration Engine in Action"
              className="cursor-pointer pt-8 md:pt-0"
            />
            <ImagePopper
              src={EasyIMP1}
              alt="Product Configuration Engine in Action"
              className="cursor-pointer pt-8"
            />
            <ImagePopper
              src={EasyIMP2}
              alt="Product Configuration Engine in Action"
              className="cursor-pointer pt-8"
            />
          </div>
        </div>

        {/* CTA */}
        <section className="mt-8">
          <p>
            Ready to enhance your consumer&apos;s experience? Contact us to
            explore how our Product Configuration Engine can provide
            personalized recommendations for your wearable electronics.
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

export default ProductConfigCaseStudy
