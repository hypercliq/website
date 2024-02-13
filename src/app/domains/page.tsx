// DomainsPage.js
import { Metadata } from 'next'
import Link from 'next/link'
import HighlightSpan from '../components/HighlightSpan'
import MainContainer from '../components/Container'

export const metadata: Metadata = {
  title:
    'Harnessing Data Across Diverse Domains - AI, ML, Data Analysis - Hypercliq',
  description:
    'Empowering businesses with data-driven solutions, AI and ML expertise, and innovative data analysis services.',
}

const Domains = () => {
  return (
    <MainContainer>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start">
        <h1 className="mb-6 text-4xl font-bold md:w-1/2">
          Harnessing Data Across Diverse Domains
        </h1>

        <p className="text-lg md:w-1/2">
          Welcome to our world, where data meets{' '}
          <HighlightSpan>innovation</HighlightSpan>, and solutions transcend
          boundaries. We are not just a team; we are a{' '}
          <HighlightSpan>collective force</HighlightSpan> of data scientists,
          software engineers, and business developers united by a common
          purpose: to <HighlightSpan>transform</HighlightSpan> the modern world
          through <HighlightSpan>data-driven solutions</HighlightSpan>.
        </p>
      </div>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-primary">About Us</h2>
        <p className="">
          At Hypercliq, we believe in the limitless possibilities that data
          offers. Our team brings together diverse expertise in AI, Machine
          Learning, and Data Analysis. We don&apos;t just provide solutions; we
          architect the future. Our passion for innovation fuels our exploration
          of new frontiers, ensuring that we remain at the forefront of
          cutting-edge technologies.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-primary">
          Empowering Businesses, Igniting Growth
        </h2>
        <p className="">
          Our mission is clear: to empower businesses across all domains to make
          informed decisions and drive exponential growth. No matter your
          industry or specialization, if you have a data challenge, we have the
          solution. We&apos;re not just problem-solvers; we&apos;re your
          strategic partners on the journey towards a data-powered future.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-primary">
          What Sets Us Apart
        </h2>
        <ul className="list-disc space-y-4 pl-6">
          <li>
            <span className="font-semibold">Expertise Beyond Boundaries:</span>{' '}
            Bringing together a fusion of talent, we specialize in transcending
            traditional domain barriers. Whether you&apos;re in healthcare,
            finance, education, or any other field, our team thrives on
            challenges and excels in finding data-driven solutions.
          </li>
          <li>
            <span className="font-semibold">Collaboration at its Core:</span> We
            believe in the power of collaboration. You bring your domain
            expertise, and we bring our proficiency in AI, ML, and data
            analysis. Together, we create synergies that lead to innovative,
            tailor-made solutions for your unique challenges.
          </li>
          <li>
            <span className="font-semibold">Innovation in Every Pixel:</span> In
            a world that&apos;s constantly evolving, innovation is not just a
            choice; it&apos;s a necessity. We are committed to exploring new
            possibilities, pushing the boundaries of what&apos;s achievable, and
            delivering impactful solutions that transform entire industries.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-primary">How We Work</h2>
        <ol className="list-decimal space-y-4 pl-6">
          <li>
            <span className="font-semibold">Understanding Your Needs:</span> We
            start by diving deep into your specific challenges, gaining a
            profound understanding of your domain and business goals.
          </li>
          <li>
            <span className="font-semibold">
              Collaborative Solution Design:
            </span>{' '}
            Your expertise meets ours as we work collaboratively to design
            customized data-driven solutions tailored to your unique
            requirements.
          </li>
          <li>
            <span className="font-semibold">
              Implementation with Precision:
            </span>{' '}
            From AI algorithms to machine learning models, we implement
            solutions with precision, ensuring seamless integration into your
            existing systems.
          </li>
          <li>
            <span className="font-semibold">Continuous Innovation:</span> Our
            commitment doesn&apos;t end with the solution. We stay ahead of the
            curve, continuously innovating to keep your strategies aligned with
            the dynamic landscape of data and technology.
          </li>
        </ol>
      </section>

      <section className="mt-8">
        {/* <h2 className="mb-4 text-2xl font-bold text-primary">
            Join Us on the Data-Powered Journey
          </h2> */}
        <p className="text-lg">
          Are you ready to revolutionize your approach to data challenges?{' '}
          <Link className="text-accent underline" href="/services">
            Explore our services
          </Link>{' '}
          to see how we can transform your data into actionable insights. Join
          us on this exciting journey towards a future where data is not just a
          tool but a driving force. Dive into{' '}
          <Link className="text-accent underline" href="/solutions">
            our case studies
          </Link>{' '}
          to witness firsthand the impact of our solutions across various
          domains. Your challenges are our opportunities. Let&apos;s shape the
          future together.
        </p>
      </section>

      <section className="mt-8 flex items-center justify-center">
        <Link
          className="text-md rounded-md bg-accent px-3.5 py-2.5 font-semibold text-onAccent shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href="/contact"
        >
          Start Innovating
        </Link>
      </section>
    </MainContainer>
  )
}

export default Domains
