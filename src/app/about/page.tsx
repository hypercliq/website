// AboutPage.tsx
import { Metadata } from 'next'
import Link from 'next/link'

// Replace with the real names of the experts
const expertNames = [
  'Florendia Fourlì',
  'Mirco Sanguineti',
  'George Kartsounis',
]

export const metadata: Metadata = {
  title: 'About Hypercliq - AI Experts and IT Services',
  description:
    'Founded in 2011, Hypercliq is an established entity in the IT landscape, rooted in a partnership of seasoned Artificial Intelligence experts. Learn about our founders and the collaborative network that drives our success.',
}

const AboutPage = () => {
  return (
    <div className="bg-surface py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-primary">
            Empowering Through Expertise
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
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">Meet Our Founders</h2>

          {/* Expert 1 */}
          <div className="mb-8 flex items-center justify-between">
            <div className="h-20 w-20 flex-shrink-0 rounded-full bg-primary"></div>
            <div className="ml-4 flex-grow">
              <h3 className="text-xl font-semibold">{expertNames[0]}</h3>
              <p className="text-foreground/75">
                One of the founding experts at Hypercliq brings a wealth of
                professional and research experience in the development of
                innovative AI applications. With a dedication to staying at the
                forefront of technology, this expert plays a crucial role in
                steering Hypercliq towards impactful AI solutions.
              </p>
            </div>
          </div>

          {/* Expert 2 */}
          <div className="mb-8 flex items-center justify-between">
            <div className="h-20 w-20 flex-shrink-0 rounded-full bg-primary"></div>
            <div className="ml-4 flex-grow">
              <h3 className="text-xl font-semibold">{expertNames[1]}</h3>
              <p className="text-foreground/75">
                The second founder, boasting over two decades of expertise in
                AI, contributes a deep understanding of complex systems. Their
                proficiency in analysis and programming has been a cornerstone
                of Hypercliq&apos;s technical capabilities, ensuring a strategic
                position in the dynamic field of AI.
              </p>
            </div>
          </div>

          {/* Expert 3 */}
          <div className="mb-8 flex items-center justify-between">
            <div className="h-20 w-20 flex-shrink-0 rounded-full bg-primary"></div>
            <div className="ml-4 flex-grow">
              <h3 className="text-xl font-semibold">{expertNames[2]}</h3>
              <p className="text-foreground/75">
                The third founder, a physicist and Ph.D. holder in Robotic
                Vision and Flexible Automation, brings a unique perspective to
                Hypercliq&apos;s leadership. With extensive experience in
                coordinating large European research projects, they provide
                crucial insights into the industrial IT landscape, guiding the
                company toward innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Collaborative Network Section */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">
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
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">
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
        <div className="mt-12 text-center">
          <Link
            href="/reserach-development"
            className="text-lg font-semibold text-accent"
          >
            Explore Our R&D Involvements
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
