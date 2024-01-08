// ConstructionAutomationCaseStudy.tsx

import ImagePopper from '@/app/components/ImagePopper'
import Link from 'next/link'

import HumanTech1 from '@/app/assets/images/human-tech_1.jpg'
import HumanTech2 from '@/app/assets/images/human-tech_2.jpg'
// import HumanTech3 from '@/app/assets/images/human-tech_3.jpg'

// Header Section
const ConstructionAutomationCaseStudy = () => {
  return (
    <div className="bg-surface py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-primary">
            System Architecture Design for Construction Automation
          </h1>
          <p className="text-lg text-foreground/75">
            Revolutionizing Construction with Advanced Automation Technologies
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mt-8">
          <p>
            Our system architecture design for construction automation
            represents a groundbreaking solution that integrates cutting-edge
            technologies for worker safety, support, and the creation of Dynamic
            Semantic Digital Twins (DSDTs) of construction sites. By combining
            wearables, vision-empowered robots, scanning devices, and AI-based
            software, we usher in a new era of digital construction, ensuring
            efficiency, safety, and environmental consciousness.
          </p>
        </section>

        <div className="my-8 flex flex-col md:flex-row md:gap-8">
          <div className="md:order-2 md:w-3/5">
            {/* Challenge, Solution, and Approach Section */}
            <section>
              <p>
                Our system architecture harmonizes breakthrough technologies,
                including wearables for worker safety and support,
                vision-empowered robots, scanning devices, and AI-based
                software. This integration enables the creation of Dynamic
                Semantic Digital Twins (DSDTs) of construction sites, providing
                a comprehensive and real-time understanding of project dynamics.
              </p>
            </section>

            {/* Compliance with EU's Data Strategy Section */}
            <section className="mt-8">
              <p>
                Notably, our system architecture is meticulously aligned with
                the EU’s Data strategy, ensuring compliance with the highest
                standards in security, privacy, and data integrity. This
                commitment to data governance safeguards sensitive information
                and fosters trust in the application of advanced technologies in
                the construction industry.
              </p>
            </section>

            {/* Project Objectives Section */}
            <section className="mt-8">
              <p>
                Developed in the framework of HumanTech, funded by the European
                Union’s Horizon Europe research and innovation programme, this
                initiative aims to advance the European construction industry.
                The project focuses on increasing the safety and well-being of
                the workforce, improving productivity, and making the industry
                greener and resource-efficient.
              </p>
              <p>
                From wearables (exoskeletons, cameras, XR glasses) for
                workers&apos; protection and support to robots that collaborate
                with humans, the project strives to disrupt traditional
                construction methods. By creating a digital, safe, and rewarding
                environment, the goal is to empower a new generation of highly
                skilled workers and engineers.
              </p>
            </section>

            {/* Green and Circular Construction Section */}
            <section className="mt-8">
              <p>
                To create a green, circular, and more efficient construction
                industry, the project addresses the need to decrease error-prone
                manual labor and increase fabrication precision. Automation
                technologies developed in this project enable precise processes
                and optimized use of building materials. Additionally, they
                facilitate the inventory of materials used in buildings,
                promoting reuse and recycling. This approach advances
                circularity, significantly reducing resource waste and
                greenhouse gas emissions in the construction sector.
              </p>
            </section>

            {/* Results, Challenges, and Solutions Section */}
            <section className="mt-8">
              <p>
                Our system architecture design for construction automation has
                proven to be a pivotal force in transforming the industry. By
                aligning with the EU’s Data strategy, incorporating advanced
                technologies, and addressing key challenges, we&apos;ve
                successfully enhanced safety, productivity, and sustainability
                in construction projects. The creation of Dynamic Semantic
                Digital Twins (DSDTs) has provided stakeholders with invaluable
                insights, ensuring informed decision-making and efficient
                project management.
              </p>
            </section>
          </div>

          <div className="md:order-1 md:w-2/5">
            <ImagePopper
              src={HumanTech2}
              alt="Construction Automation System in Action"
              className="cursor-pointer pt-8 md:pt-0"
            />
            <ImagePopper
              src={HumanTech1}
              alt="Wearables for Worker Safety and Support"
              className="cursor-pointer pt-8"
            />
          </div>
        </div>

        {/* CTA */}
        <section className="mt-8">
          <p className="text-center text-lg md:text-left">
            Ready to embrace the future of construction through advanced
            automation? Contact us to explore how our System Architecture Design
            can revolutionize your construction projects.
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

export default ConstructionAutomationCaseStudy
