// SolutionsPage.tsx (updated section)
import Link from 'next/link'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data-Driven Solutions Showcase - AI, ML, Data Analysis - Hypercliq',
  description:
    'Explore our showcase of past projects and case studies, highlighting the transformative power of our data-driven solutions. Witness our commitment to innovation and the impact we bring to businesses across diverse domains.',
}

const Solutions = () => {
  return (
    <div className="bg-surface py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-primary">
            Unleashing Impactful Solutions
          </h1>
          <p className="text-lg">
            Explore our showcase of past projects and case studies to witness
            the transformative power of our data-driven solutions. Each story
            reflects our commitment to innovation and the tangible impact we
            bring to businesses across diverse domains.
          </p>
        </div>

        {/* Anthropometric 3D Shape Analysis Section */}
        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-bold">
            Anthropometric 3D Shape Analysis
          </h2>
          {/* Alternating layout */}
          <div className="flex flex-col md:flex-row-reverse">
            {/* Project Image */}
            <div className="mb-4 max-h-72 w-full overflow-hidden rounded-lg shadow-md md:mb-0 md:h-auto md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="https://via.placeholder.com/1200x600"
                alt="Anthropometric 3D Shape Analysis"
              />
            </div>
            {/* Project Summary */}
            <div className="md:w-1/2 md:pr-8">
              <p className="mb-4">
                Cutting-edge 3D shape analysis tools revolutionizing product
                development processes. Unlocking the potential of 3D human body
                surface data, these tools set a new standard for precision and
                efficiency in design. Developed in collaboration with EUROFIT,
                an intensive R&D project funded by the European Commission.
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  Designers and industrialists draw useful shape information and
                  use it in their product development processes.
                </li>
                <li>
                  Database owners pool data they already hold and obtain
                  revenues from its exploitation.
                </li>
                <li>
                  Third-party IT companies develop new services to reuse pooled
                  data in unforeseen ways.
                </li>
              </ul>
              {/* Link to the dedicated page */}
              <Link
                href="/anthropometric-3d-shape-analysis"
                className="text-md inline-block font-semibold text-accent"
              >
                Explore More
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto my-8 h-2 w-1/2 border-t-2 border-dashed border-foreground/60 md:my-16"></div>

        {/* Product Configuration Engine Section */}
        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-bold">
            Product Configuration Engine
          </h2>
          {/* Alternating layout */}
          <div className="flex flex-col md:flex-row">
            {/* Project Image */}
            <div className="mb-4 max-h-72 w-full overflow-hidden rounded-lg shadow-md md:mb-0 md:h-auto md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="https://via.placeholder.com/1200x600"
                alt="Product Configuration Engine"
              />
            </div>
            {/* Project Summary */}
            <div className="md:w-1/2 md:pl-8">
              <p className="mb-4">
                Online data mining services automate wearable electronics
                configurations based on intelligent consumer profiling.
                Developed under the EASY-IMP framework by the European
                Commission, the project simplifies decision-making by suggesting
                personalized product configurations. The framework provides
                guidelines for designing smart garments with wearable
                intelligent sensors.
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>Outdoor video game</li>
                <li>Personal training</li>
                <li>Functional rehabilitation</li>
                <li>Assisted living for the elderly and handicapped</li>
              </ul>
              {/* Link to the dedicated page */}
              <Link
                href="/product-configuration-engine"
                className="text-md inline-block font-semibold text-accent"
              >
                Explore More
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto my-8 h-2 w-1/2 border-t-2 border-dashed border-foreground/60 md:my-16"></div>

        {/* Sustainable Design Data Management Platform Section */}
        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-bold">
            Sustainable Design Data Management Platform
          </h2>
          {/* Alternating layout */}
          <div className="flex flex-col md:flex-row-reverse">
            {/* Project Image */}
            <div className="mb-4 max-h-72 w-full overflow-hidden rounded-lg shadow-md md:mb-0 md:h-auto md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="https://via.placeholder.com/1200x600"
                alt="Sustainable Design Data Management Platform"
              />
            </div>
            {/* Project Summary */}
            <div className="md:w-1/2 md:pr-8">
              <p className="mb-4">
                Cloud-based platform streamlining sustainable product design.
                Seamlessly gathers knowledge on new product samples, materials,
                and manufacturing processes. Empowers designers and engineers to
                create environmentally conscious solutions with advanced search
                functionalities and data analysis tools.
              </p>
              <p className="mb-4">
                Developed in the Sport Infinity project led by Adidas and funded
                by the European Union’s Horizon 2020 Framework Programme. Aiming
                for automated production of customizable sporting goods using
                recyclable materials, fostering greater design freedom.
              </p>
              {/* Link to the dedicated page */}
              <Link
                href="/sustainable-design-data-management"
                className="text-md inline-block font-semibold text-accent"
              >
                Explore More
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto my-8 h-2 w-1/2 border-t-2 border-dashed border-foreground/60 md:my-16"></div>

        {/* 3D Motion Tracking for Ergonomic Movement Assessment Section */}
        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-bold">
            3D Motion Tracking for Ergonomic Movement Assessment
          </h2>
          {/* Alternating layout */}
          <div className="flex flex-col md:flex-row">
            {/* Project Image */}
            <div className="mb-4 max-h-72 w-full overflow-hidden rounded-lg shadow-md md:mb-0 md:h-auto md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="https://via.placeholder.com/1200x600"
                alt="3D Motion Tracking for Ergonomic Movement Assessment"
              />
            </div>
            {/* Project Summary */}
            <div className="md:w-1/2 md:pl-8">
              <p className="mb-4">
                Transforming workplace ergonomics, our 3D Motion Tracking system
                seamlessly collects and visualizes kinetic and kinematic data
                from wearable sensors. Offering a comprehensive ergonomic
                assessment for enhanced workplace efficiency.
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>Adheres to standards like OWAS and relevant ISO norms.</li>
                <li>
                  Utilizes AI-based software for valid and trustworthy movement
                  data.
                </li>
                <li>Enables simultaneous ergonomic assessment of workers.</li>
                <li>
                  Incorporates Machine Learning-based analytics for proactive
                  optimization.
                </li>
              </ul>
              {/* Link to the dedicated page */}
              <Link
                href="/3d-motion-tracking-for-ergonomic-assessment"
                className="text-md inline-block font-semibold text-accent"
              >
                Explore More
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto my-8 h-2 w-1/2 border-t-2 border-dashed border-foreground/60 md:my-16"></div>

        {/* System Architecture Design for Construction Automation Section */}
        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-bold">
            System Architecture Design for Construction Automation
          </h2>
          {/* Alternating layout */}
          <div className="flex flex-col md:flex-row">
            {/* Project Summary */}
            <div className="md:w-1/2 md:pr-8">
              <p className="mb-4">
                Unleashing innovation in construction with a cutting-edge system
                architecture. Our design, aligned with the EU’s Data strategy,
                integrates wearables, vision-empowered robots, and AI for
                Dynamic Semantic Digital Twins of construction sites.
              </p>
              <p className="mb-4">
                Developed under the EU's HumanTech initiative, our project
                disrupts traditional construction. From safety wearables to
                robots driving the green transition, we create a digital, safe,
                and efficient construction environment.
              </p>
              {/* Link to the dedicated page */}
              <Link
                href="/system-architecture-for-construction-automation"
                className="text-md inline-block font-semibold text-accent"
              >
                Explore More
              </Link>
            </div>
            {/* Project Image */}
            <div className="mb-4 max-h-72 w-full overflow-hidden rounded-lg shadow-md md:mb-0 md:h-auto md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="https://via.placeholder.com/1200x600"
                alt="System Architecture Design for Construction Automation"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto my-8 h-2 w-1/2 border-t-2 border-dashed border-foreground/60 md:my-16"></div>

        {/* Innovation Concept Consulting Section */}
        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-bold">
            Innovation Concept Consulting and Funding Application Support
          </h2>
          {/* Alternating layout */}
          <div className="flex flex-col md:flex-row">
            {/* Placeholder Image */}
            <div className="mb-4 max-h-72 w-full overflow-hidden rounded-lg shadow-md md:mb-0 md:h-auto md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="https://via.placeholder.com/1200x600"
                alt="Innovation Concept Consulting"
              />
            </div>
            {/* Project Summary */}
            <div className="md:w-1/2 md:pl-8">
              <p className="mb-4">
                Elevating innovation through strategic consulting and funding
                application support. Our expertise extends to formulating
                innovative project concepts and securing EU funding for their
                development.
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>
                  Specializing in sustainability, applying technologies for
                  fully recyclable, adhesive-free sports goods.
                </li>
                <li>
                  Resulted in the highly successful Sport Infinity project,
                  developing recyclable materials for customizable and
                  sustainable sporting goods.
                </li>
                <li>
                  Researching existing technologies to propel the design and
                  manufacturing of innovative products.
                </li>
                <li>
                  Formulated multiple projects, established interdisciplinary
                  consortia, and submitted successful research and innovation
                  funding applications.
                </li>
              </ul>
              {/* Link to the dedicated page */}
              <Link
                href="/innovation-concept-consulting"
                className="text-md inline-block font-semibold text-accent"
              >
                Explore More
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto my-8 h-2 w-1/2 border-t-2 border-dashed border-foreground/60 md:my-16"></div>

        {/* Agricultural R&D Innovation Section */}
        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-bold">
            Visual Repository for Agricultural R&D Innovation
          </h2>
          {/* Alternating layout */}
          <div className="flex flex-col md:flex-row">
            {/* Project Summary */}
            <div className="md:w-1/2 md:pr-8">
              <p className="mb-4">
                Revolutionizing agricultural research, our web-based data
                management platform serves as a visual repository within a
                cutting-edge R&D initiative. Tailored for diverse roles, it
                supports the entire research pipeline—from the fields to
                creating datasets for Deep Learning.
              </p>
              {/* Link to the dedicated page */}
              <Link
                href="/agricultural-rnd-innovation"
                className="text-md inline-block font-semibold text-accent"
              >
                Explore More
              </Link>
            </div>
            {/* Placeholder Image */}
            <div className="mb-4 max-h-72 w-full overflow-hidden rounded-lg shadow-md md:mb-0 md:h-auto md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="https://via.placeholder.com/1200x600"
                alt="Agricultural R&D Innovation"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Solutions
