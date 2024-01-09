// AboutPage.tsx
import { Metadata } from 'next'
import Link from 'next/link'

import Fokker1 from '@/app/assets/images/Florendia_r.png'
import Fokker2 from '@/app/assets/images/Mirco_r.png'
import Fokker3 from '@/app/assets/images/George_r.png'

// Replace with the real names of the experts
const founders = [
  {
    name: 'Florendia Fourlì',
    urlImage: Fokker1.src,
    description:
      'One of the founding experts at Hypercliq brings a wealth of professional and research experience in the development of innovative AI applications. With a dedication to staying at the forefront of technology, this expert plays a crucial role in steering Hypercliq towards impactful AI solutions.',
  },
  {
    name: 'Mirco Sanguineti',
    urlImage: Fokker2.src,
    description:
      "The second founder, boasting over two decades of expertise in AI, contributes a deep understanding of complex systems. His proficiency in analysis and programming has been a cornerstone of Hypercliq's technical capabilities, ensuring a strategic position in the dynamic field of AI.",
  },
  {
    name: 'George Kartsounis',
    urlImage: Fokker3.src,
    description:
      "The third founder, a physicist and Ph.D. holder in Robotic Vision and Flexible Automation, brings a unique perspective to Hypercliq's leadership. With extensive experience in coordinating large European research projects, he provides crucial insights into the industrial IT landscape, guiding the company toward innovative solutions.",
  },
]

export const metadata: Metadata = {
  title:
    'Driving Change Through Expertise - About Hypercliq - AI Experts and IT Services',
  description:
    'Founded in 2011, Hypercliq is an established entity in the IT landscape, rooted in a partnership of seasoned Artificial Intelligence experts. Learn about our founders and the collaborative network that drives our success.',
}

interface Founder {
  urlImage: string
  name: string
  description: string
}

interface FounderCardProps {
  founder: Founder
}

const FounderCard: React.FC<FounderCardProps> = ({ founder }) => (
  <div className="mb-8 items-center justify-between md:flex">
    <div
      className="mx-auto h-28 w-28 flex-shrink-0 rounded-full bg-cover bg-center md:mx-0 md:h-40 md:w-40"
      style={{ backgroundImage: `url(${founder.urlImage})` }}
    />
    <div className="mt-4 flex-grow md:ml-4 md:mt-0">
      <h3 className="text-center text-xl font-semibold md:text-left">
        {founder.name}
      </h3>
      <p className="mt-2 text-center text-foreground/75 md:text-left">
        {founder.description}
      </p>
    </div>
  </div>
)

const AboutPage = () => {
  return (
    <div className="bg-surface py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-primary">
            Driving Change Through Expertise
          </h1>
          <p className="text-lg">
            Founded in 2011, Hypercliq is an established entity in the IT
            landscape, rooted in a partnership of seasoned Artificial
            Intelligence (AI) experts. Specializing in comprehensive IT
            services, the company excels in designing and implementing data
            management platforms and crafting data analysis solutions for a
            diverse range of business and industrial applications.
          </p>
        </div>

        {/* About Our Founders Section */}
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-primary">
            Meet Our Founders
          </h2>

          {founders.map((founder, index) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </section>

        {/* Collaborative Network Section */}
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-primary">
            Collaborative Network of Experts
          </h2>
          <p>
            Beyond its founders, Hypercliq leverages a network of affiliated IT
            experts across European countries. Chosen for their expertise, these
            collaborators have played integral roles in demanding projects,
            contributing to the company&apos;s success. This collaborative
            approach enhances Hypercliq&apos;s capabilities and ensures
            adaptability to various challenges.
          </p>
        </section>

        {/* European Presence and Key Partnerships Section */}
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-primary">
            Our European Presence and Key Partnerships
          </h2>
          <p>
            Hypercliq&apos;s influence extends beyond its technical
            capabilities. Leveraging our extensive newtwork we are
            well-recognized in the European IT, R&D and Industrial sector. Our
            key partnerships with reputable organizations throughout Europe
            further solidify our standing in delivering innovative IT solutions.
          </p>
        </section>

        {/* R&D Page Link */}
        {/* <div className="mt-8 text-center">
          <Link
            href="/reserach-development"
            className="text-lg font-semibold text-accent"
          >
            Explore Our R&D Involvements
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default AboutPage
