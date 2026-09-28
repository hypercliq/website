import { staticImage } from '@/app/data/image'
import type { StaticImageData } from 'next/image'

const Adidas = staticImage('adidas-consulting_1', 1200, 678)
const Bionic1 = staticImage('bionic_1', 1200, 733)
const Bionic2 = staticImage('bionic_2', 1200, 850)
const Bionic3 = staticImage('bionic_3', 1200, 733)
const Easy1 = staticImage('easy-imp_1', 1200, 667)
const Easy2 = staticImage('easy-imp_2', 1200, 616)
const Easy3 = staticImage('easy-imp_3', 1200, 1029)
const Eurofit1 = staticImage('eurofit-app_1', 1200, 712)
const Eurofit2 = staticImage('eurofit-app_2', 1200, 1102)
const Human1 = staticImage('human-tech_1', 1200, 628)
const Human2 = staticImage('human-tech_2', 1200, 407)
const Hydac1 = staticImage('hydac_1', 1200, 600)
const Hydac2 = staticImage('hydac_2', 1200, 800)
const Sport1 = staticImage('sport-infinity_1', 1200, 751)
const Sport2 = staticImage('sport-infinity_2', 1200, 1029)
const Sport3 = staticImage('sport-infinity_3', 1200, 651)
const Sport4 = staticImage('sport-infinity_4', 1200, 961)
const SplatViewerPoster: StaticImageData = {
  src: '/splat-viewer/poster.jpg',
  width: 1920,
  height: 1080,
}

export interface ProjectSummary {
  slug: string
  title: string
  field: string
  summary: string
  images: [StaticImageData, ...StaticImageData[]]
}

export interface CaseStudyProject extends ProjectSummary {
  contribution: string
  context: string
}

export const splatViewerProject: ProjectSummary = {
  slug: 'splat-viewer',
  title: 'Splat Viewer',
  field: '3DGS · LiDAR',
  summary:
    'A desktop viewer for Gaussian splats and large LiDAR scans, with tools to inspect, measure, and extract structure from spaces.',
  images: [SplatViewerPoster],
}

export const caseStudyProjects: CaseStudyProject[] = [
  {
    slug: 'sustainable-design-data-management-platform',
    title: 'Materials data for sustainable product design',
    field: 'Product design · Sport Infinity',
    summary:
      'A platform for finding and comparing material, process, and sustainability data during product development.',
    contribution:
      'We developed a cloud based knowledge platform linking product samples, engineering properties, manufacturing processes, and sustainability measures. Search and analysis tools help design teams work across these connected records.',
    context:
      'The work was part of Sport Infinity, a Horizon 2020 project led by Adidas that explored customizable sporting goods and recyclable materials.',
    images: [Sport1, Sport2, Sport3, Sport4],
  },
  {
    slug: '3d-motion-tracking-for-ergonomic-movement-assessment',
    title: 'Motion data for workplace ergonomics',
    field: 'Workplace health · BIONIC',
    summary:
      'A platform for collecting, managing, and viewing movement data from wearable sensors.',
    contribution:
      'The platform brings kinetic and kinematic data into one place for ergonomic assessment. It supports analysis of movement against methods such as OWAS and makes the results available for review.',
    context:
      'Developed with DFKI in the EU funded BIONIC research project, which studied musculoskeletal health in the workplace.',
    images: [Bionic1, Bionic2, Bionic3],
  },
  {
    slug: 'system-architecture-design-for-construction-automation',
    title: 'Architecture for construction site data',
    field: 'Construction · HumanTech',
    summary:
      'A system design connecting site sensors, worker equipment, robotics, and digital models.',
    contribution:
      'We designed an architecture for bringing data from wearables, scanning devices, and vision systems into dynamic semantic digital twins of construction sites.',
    context:
      'This work belongs to HumanTech, a Horizon Europe research project on digital tools and automation for construction.',
    images: [Human1, Human2],
  },
  {
    slug: 'anthropometric-3d-shape-analysis',
    title: '3D body shape analysis',
    field: 'Product fit · EUROFIT',
    summary:
      'Tools to examine and visualize body shape data for product design.',
    contribution:
      'We built analysis and visualization tools for digital anthropometric data, giving designers a way to explore body shapes and measurements for products where fit matters.',
    context:
      'The tools were developed through EUROFIT, a European Commission funded project on the use of digital anthropometric resources.',
    images: [Eurofit1, Eurofit2],
  },
  {
    slug: 'product-configuration-engine',
    title: 'Configuration for wearable products',
    field: 'Wearables · EASY-IMP',
    summary:
      'A recommendation engine for selecting components of personalized wearable products.',
    contribution:
      'The engine connects consumer preferences with possible sensor and garment configurations. It was designed to support choices without requiring users to understand every component.',
    context:
      'Developed in EASY-IMP, a European Commission funded research project on personalized smart garments and connected products.',
    images: [Easy1, Easy2, Easy3],
  },
  {
    slug: 'innovation-concept-consulting',
    title: 'Research concept and funding support',
    field: 'Research strategy · Sport Infinity',
    summary:
      'Research, concept development, and application support for collaborative projects.',
    contribution:
      'Our work included investigating materials and production approaches, shaping project concepts, assembling interdisciplinary consortia, and preparing research funding applications.',
    context:
      'Sport Infinity is one example: the project examined recyclable materials and production methods for customizable sporting goods.',
    images: [Adidas],
  },
  {
    slug: 'visual-repository-for-agricultural-rd-innovation',
    title: 'Visual data for agricultural research',
    field: 'Agriculture · Research software',
    summary:
      'A web based repository for organizing visual data collected during agricultural research.',
    contribution:
      'The platform stores and processes images, with views and access tailored to different research roles. It supports the path from field collection to datasets used in deep learning work.',
    context: 'Built for an agricultural research and development initiative.',
    images: [Hydac1, Hydac2],
  },
]

export const projects: ProjectSummary[] = [
  splatViewerProject,
  ...caseStudyProjects,
]

export function getProject(slug: string): CaseStudyProject {
  const project = caseStudyProjects.find((item) => item.slug === slug)
  if (!project) throw new Error(`Unknown project: ${slug}`)
  return project
}
