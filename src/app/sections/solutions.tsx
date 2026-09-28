import Image from 'next/image'
import Link from 'next/link'
import SportInfinity from '@/app/assets/images/sport-infinity_1.avif'
import Bionic from '@/app/assets/images/bionic_1.avif'
import HumanTech from '@/app/assets/images/human-tech_1.avif'
import EurofitApp from '@/app/assets/images/eurofit-app_1.avif'
import EasyImp from '@/app/assets/images/easy-imp_1.avif'
import AdidasConsulting from '@/app/assets/images/adidas-consulting_1.avif'
import Hydac from '@/app/assets/images/hydac_1.avif'

const solutions = [
  {
    id: 1,
    title: 'Sustainable Design Data Management platform',
    description:
      'Cloud-based platform to streamline the design of sustainable products. This innovative platform seamlessly gathers and provides access to a wealth of knowledge encompassing new product samples, materials, engineering properties, manufacturing processes, and their correlations with desired product characteristics, including vital Sustainability Parameters like environmental footprint and recyclability.',
    url: '/solutions/sustainable-design-data-management-platform',
    imageUrl: SportInfinity,
  },
  {
    id: 2,
    title:
      '3D motion tracking for ergonomic movement assessment in real work conditions',
    description:
      'Cloud-based platform designed to seamlessly collect, manage, and visualize kinetic and kinematic data sourced from wearable sensors. Our primary goal is to offer a comprehensive ergonomic movement assessment for enhanced workplace efficiency.',
    url: '/solutions/3d-motion-tracking-for-ergonomic-movement-assessment',
    imageUrl: Bionic,
  },
  {
    id: 3,
    title: 'System architecture design for construction automation',
    description:
      'System architecture design for an automation solution targeting the construction industry. Our design harmonizes breakthrough technologies, including wearables for worker safety and support, vision-empowered robots, scanning devices, and AI-based software, enabling a new breed of Dynamic Semantic Digital Twins (DSDTs) of construction sites.',
    url: '/solutions/system-architecture-design-for-construction-automation',
    imageUrl: HumanTech,
  },
  {
    id: 4,
    title: 'Anthropometric 3D Shape Analysis',
    description:
      'Cutting-edge 3D shape analysis and visualization tools. These tools empower designers and engineers to effortlessly capture and visualize detailed shape data for the entire human body or specific body parts in real time.',
    url: '/solutions/anthropometric-3d-shape-analysis',
    imageUrl: EurofitApp,
  },
  {
    id: 5,
    title:
      'Product configuration engine based on intelligent consumer profiling',
    description:
      'Online data mining services specialized in consumer profiling and recommendation of product configurations leveraged by a wearable electronics marketplace.',
    url: '/solutions/product-configuration-engine',
    imageUrl: EasyImp,
  },
  {
    id: 6,
    title: 'Innovation concept consulting and funding application support',
    description:
      'Consulting services for the formulation of several innovative project concepts and support for application aiming to secure EU funding for the development of the projects Our comprehensive support extended to researching existing technologies and their application to propel the design and manufacturing of innovative products.',
    url: '/solutions/innovation-concept-consulting',
    imageUrl: AdidasConsulting,
  },
  {
    id: 7,
    title: 'Visual repository for Agricultural R&D Innovation',
    description:
      'Web-based data management platform designed for the storage and processing of visual data within an ambitious R&D initiative in the field of Agriculture. This platform offers customized views and user access tailored to different roles, supporting the entire research pipeline—from agricultural fields to the creation of datasets for Deep Learning.',
    url: '/solutions/visual-repository-for-agricultural-rd-innovation',
    imageUrl: Hydac,
  },
]

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="m-auto flex max-w-7xl flex-col py-10 md:py-16"
    >
      <div className="px-4 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Selected work
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Work across research and industry
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/75">
          A selection of platforms, analysis tools, and consulting projects
          developed with our partners.
        </p>
      </div>

      <div className="mt-10 grid gap-6 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
        {solutions
          .filter((solution) => [2, 3, 7].includes(solution.id))
          .map((solution) => (
            <article
              key={solution.id}
              className="overflow-hidden border border-foreground/10 bg-background"
            >
              <Image
                src={solution.imageUrl}
                alt=""
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold leading-snug">
                  <Link href={solution.url} className="hover:text-accent">
                    {solution.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-foreground/75">
                  {solution.description}
                </p>
              </div>
            </article>
          ))}
      </div>
      <div className="mt-10 px-4 md:px-8">
        <Link href="/solutions" className="font-semibold text-accent underline">
          View all case studies
        </Link>
      </div>
    </section>
  )
}
