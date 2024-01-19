// MotionTrackingCaseStudy.tsx

import ImagePopper from '@/app/components/ImagePopper'
import Link from 'next/link'

import Bionic1 from '@/app/assets/images/bionic_1.avif'
import Bionic2 from '@/app/assets/images/bionic_2.avif'
import Bionic3 from '@/app/assets/images/bionic_3.avif'
import { Metadata } from 'next'

// create metadata for this page
export const metadata: Metadata = {
  title: '3D Motion Tracking for Ergonomic Movement Assessment',
  description:
    'Enhancing Workplace Efficiency through Cloud-Based Ergonomic Assessments',
}

// Header Section
const MotionTrackingCaseStudy = () => {
  return (
    <div className="bg-surface py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-primary">
            3D Motion Tracking for Ergonomic Movement Assessment
          </h1>
          <p className="text-lg text-foreground/75">
            Enhancing Workplace Efficiency through Cloud-Based Ergonomic
            Assessments
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mt-8">
          <p>
            Our cloud-based platform is designed to seamlessly collect, manage,
            and visualize kinetic and kinematic data sourced from wearable
            sensors. With a primary focus on offering a comprehensive ergonomic
            movement assessment, our goal is to enhance workplace efficiency by
            providing valuable insights into the dynamics of human movement.
          </p>
        </section>

        <div className="my-8 flex flex-col md:flex-row md:gap-8">
          <div className="md:order-2 md:w-3/5">
            {/* Challenge, Solution, and Approach Section */}
            <section>
              <p>
                The platform conducts ergonomic evaluations based on widely
                recognized standards such as OWAS and relevant ISO norms,
                ensuring a robust and reliable analysis. Leveraging AI-based
                software, we achieve valid and trustworthy movement data,
                enabling the simultaneous ergonomic assessment of 5-10 workers.
              </p>
            </section>

            {/* Services Provided Section */}
            <section className="mt-8">
              <p>
                Moreover, our platform incorporates Machine Learning-based
                analytics to provide insightful forecasts for workplace and
                process redesign. By combining real-time data, AI-driven
                assessments, and predictive analytics, we empower businesses to
                proactively optimize their environments for improved
                productivity and employee well-being.
              </p>
            </section>

            {/* Project Objectives Section */}
            <section className="mt-8">
              <p>
                Developed in collaboration with our trusted partner DFKI within
                the framework of BIONIC, funded by the European Union’s Horizon
                2020 Framework Programme for Research and Innovation. The
                project aimed to develop an unobtrusive, autonomous, and
                privacy-preserving platform for real-time risk alerting and
                continuous persuasive coaching, enabling the design of workplace
                interventions adapted to the needs and fitness levels of
                specific aging workforce.
              </p>
              <p>
                Gamification strategies adapted to the needs and wishes of the
                elderly workers ensure optimal engagement for prevention and
                self-management of musculoskeletal health in any working/living
                environment.
              </p>
            </section>

            {/* Results, Challenges, and Solutions Section */}
            <section className="mt-8">
              <p>
                Our 3D Motion Tracking platform has proven to be a revolutionary
                tool in ergonomic assessments. By adhering to established
                standards and incorporating AI and Machine Learning
                capabilities, we provide businesses with actionable insights to
                optimize workplace conditions. The simultaneous assessment of
                multiple workers, real-time risk alerting, and continuous
                coaching contribute to a safer and more efficient working
                environment.
              </p>
            </section>
          </div>

          <div className="md:order-1 md:w-2/5">
            <ImagePopper
              src={Bionic1}
              alt="Ergonomic Movement Assessment with 3D Motion Tracking"
              className="cursor-pointer pt-8 md:pt-0"
            />
            <ImagePopper
              src={Bionic2}
              alt="Real-Time Risk Alerting with Motion Tracking Sensors"
              className="cursor-pointer pt-8"
            />
            <ImagePopper
              src={Bionic3}
              alt="Machine Learning Analytics for Workplace Optimization"
              className="cursor-pointer pt-8"
            />
          </div>
        </div>

        {/* CTA */}
        <section className="mt-8">
          <p className="text-center text-lg md:text-left">
            Ready to revolutionize your workplace with cutting-edge ergonomic
            assessments? Contact us to explore how our 3D Motion Tracking
            platform can enhance workplace efficiency and promote employee
            well-being.
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

export default MotionTrackingCaseStudy
