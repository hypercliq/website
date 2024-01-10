// SolutionsPage.tsx (updated section)
import Link from 'next/link'

import AdidasConsulting from '@/app/assets/images/adidas-consulting_1.jpg'
import Bionic from '@/app/assets/images/bionic_1.jpg'
import EasyIMP from '@/app/assets/images/easy-imp_1.jpg'
import EurofitApp from '@/app/assets/images/eurofit-app_1.jpg'
import HumanTech from '@/app/assets/images/human-tech_1.jpg'
import Hydac from '@/app/assets/images/hydac_1.jpg'
import SportInfinity from '@/app/assets/images/sport-infinity_1.jpg'

import { Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'

export const metadata: Metadata = {
  title: 'Data-Driven Solutions Showcase - AI, ML, Data Analysis - Hypercliq',
  description:
    'Explore our showcase of past projects and case studies, highlighting the transformative power of our data-driven solutions. Witness our commitment to innovation and the impact we bring to businesses across diverse domains.',
}

interface ProjectSectionProps {
  title: string
  description: string[]
  bulletPoints?: string[]
  imageSrc: StaticImageData
  link: string
  reverse?: boolean
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  description,
  imageSrc,
  bulletPoints,
  link,
  reverse,
}) => (
  <section className="mt-16">
    <h2 className="mb-4 text-2xl font-bold text-primary">{title}</h2>
    <div
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className="mb-4 max-h-72 w-full overflow-hidden rounded-lg shadow-md md:mb-0 md:h-auto md:w-1/2">
        <Image
          src={imageSrc}
          alt={title}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className={`md:w-1/2 ${reverse ? 'md:pr-8' : 'md:pl-8'}`}>
        {description.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}

        {/* Bullet Points */}
        {bulletPoints && (
          <ul className="mb-4 list-disc pl-6">
            {bulletPoints.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}

        {/* Link to the dedicated page */}
        <Link
          href={link}
          className="text-md inline-block font-semibold text-accent"
        >
          Explore More
        </Link>
      </div>
    </div>
  </section>
)

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

        {/* Sustainable Design Data Management Platform Section */}
        <ProjectSection
          title="Sustainable Design Data Management Platform"
          description={[
            'Cloud-based platform streamlining sustainable product design. Seamlessly gathers knowledge on new product samples, materials, and manufacturing processes. Empowers designers and engineers to create environmentally conscious solutions with advanced search functionalities and data analysis tools.',
            'Developed in the Sport Infinity project led by Adidas and funded by the European Union’s Horizon 2020 Framework Programme. Aiming for automated production of customizable sporting goods using recyclable materials, fostering greater design freedom.',
          ]}
          imageSrc={SportInfinity}
          link="/solutions/sustainable-design-data-management-platform"
          reverse={true}
        />

        <div className="mx-auto my-8 h-2 w-1/2 border-t-2 border-dashed border-foreground/60 md:my-16"></div>

        {/* 3D Motion Tracking for Ergonomic Movement Assessment Section */}
        <ProjectSection
          title="3D Motion Tracking for Ergonomic Movement Assessment"
          description={[
            'Transforming workplace ergonomics, our 3D Motion Tracking system seamlessly collects and visualizes kinetic and kinematic data from wearable sensors. Offering a comprehensive ergonomic assessment for enhanced workplace efficiency.',
          ]}
          bulletPoints={[
            'Adheres to standards like OWAS and relevant ISO norms.',
            'Utilizes AI-based software for valid and trustworthy movement data.',
            'Enables simultaneous ergonomic assessment of workers.',
            'Incorporates Machine Learning-based analytics for proactive optimization.',
          ]}
          imageSrc={Bionic}
          link="/solutions/3d-motion-tracking-for-ergonomic-movement-assessment"
        />

        <div className="mx-auto my-8 h-2 w-1/2 border-t-2 border-dashed border-foreground/60 md:my-16"></div>

        {/* Anthropometric 3D Shape Analysis Section */}
        <ProjectSection
          title="Anthropometric 3D Shape Analysis"
          description={[
            'Cutting-edge 3D shape analysis tools revolutionizing product development processes. Unlocking the potential of 3D human body surface data, these tools set a new standard for precision and efficiency in design. Developed in collaboration with EUROFIT, an intensive R&D project funded by the European Commission.',
          ]}
          bulletPoints={[
            'Designers and industrialists draw useful shape information and use it in their product development processes.',
            'Database owners pool data they already hold and obtain revenues from its exploitation.',
            'Third-party IT companies develop new services to reuse pooled data in unforeseen ways.',
          ]}
          imageSrc={EurofitApp}
          link="/solutions/anthropometric-3d-shape-analysis"
          reverse={true}
        />

        <div className="mx-auto my-8 h-2 w-1/2 border-t-2 border-dashed border-foreground/60 md:my-16"></div>

        {/* Product Configuration Engine Section */}
        <ProjectSection
          title="Product Configuration Engine"
          description={[
            'Online data mining services automate wearable electronics configurations based on intelligent consumer profiling. Developed under the EASY-IMP framework by the European Commission, the project simplifies decision-making by suggesting personalized product configurations. The framework provides guidelines for designing smart garments with wearable intelligent sensors.',
          ]}
          imageSrc={EasyIMP}
          link="/solutions/product-configuration-engine"
          bulletPoints={[
            'Outdoor video game',
            'Personal training',
            'Functional rehabilitation',
            'Assisted living for the elderly and handicapped',
          ]}
        />

        <div className="mx-auto my-8 h-2 w-1/2 border-t-2 border-dashed border-foreground/60 md:my-16"></div>

        {/* System Architecture Design for Construction Automation Section */}
        <ProjectSection
          title="System Architecture Design for Construction Automation"
          description={[
            'Unleashing innovation in construction with a cutting-edge system architecture. Our design, aligned with the EU’s Data strategy, integrates wearables, vision-empowered robots, and AI for Dynamic Semantic Digital Twins of construction sites.',
            "Developed under the EU's HumanTech initiative, our project disrupts traditional construction. From safety wearables to robots driving the green transition, we create a digital, safe, and efficient construction environment.",
          ]}
          imageSrc={HumanTech}
          link="/solutions/system-architecture-design-for-construction-automation"
          reverse={true}
        />

        <div className="mx-auto my-8 h-2 w-1/2 border-t-2 border-dashed border-foreground/60 md:my-16"></div>

        {/* Innovation Concept Consulting Section */}
        <ProjectSection
          title="Innovation Concept Consulting and Funding Application Support"
          description={[
            'Elevating innovation through strategic consulting and funding application support. Our expertise extends to formulating innovative project concepts and securing EU funding for their development.',
          ]}
          imageSrc={AdidasConsulting}
          link="/solutions/innovation-concept-consulting"
          bulletPoints={[
            'Specializing in sustainability, applying technologies for fully recyclable, adhesive-free sports goods.',
            'Resulted in the highly successful Sport Infinity project, developing recyclable materials for customizable and sustainable sporting goods.',
            'Researching existing technologies to propel the design and manufacturing of innovative products.',
            'Formulated multiple projects, established interdisciplinary consortia, and submitted successful research and innovation funding applications.',
          ]}
        />

        <div className="mx-auto my-8 h-2 w-1/2 border-t-2 border-dashed border-foreground/60 md:my-16"></div>

        {/* Visual Repository for Agricultural R&D Innovation Section */}
        <ProjectSection
          title="Visual Repository for Agricultural R&D Innovation"
          description={[
            'Revolutionizing agricultural research, our web-based data management platform serves as a visual repository within a cutting-edge R&D initiative. Tailored for diverse roles, it supports the entire research pipeline—from the fields to creating datasets for Deep Learning.',
          ]}
          imageSrc={Hydac}
          link="/solutions/visual-repository-for-agricultural-rd-innovation"
          reverse={true}
        />
      </div>
    </div>
  )
}

export default Solutions
