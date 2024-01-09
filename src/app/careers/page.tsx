// CareersPage.tsx

import Link from 'next/link'
import { EmailSVG } from '../components/EmailSVG'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Our Team',
  description:
    'Explore Opportunities for Bright Minds and Innovators - Join Our Team',
}

const CareersPage = () => {
  return (
    <div className="bg-surface py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-primary">
            Join Our Team
          </h1>
          <p className="text-lg text-foreground/75">
            Explore Opportunities for Bright Minds and Innovators
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mt-8">
          <p>
            At Hypercliq, we believe in the power of innovation and the value of
            a diverse and dynamic team. Although we may not have specific
            openings at the moment, we&apos;re always on the lookout for
            talented individuals who share our passion for pushing boundaries
            and creating meaningful solutions.
          </p>
        </section>

        {/* Why Join Us Section */}
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-primary">Why Join Us?</h2>
          <p>
            We foster a collaborative and inclusive work environment that
            encourages creativity, continuous learning, and professional growth.
            As part of our team, you&apos;ll have the opportunity to work on
            cutting-edge projects, collaborate with industry experts, and
            contribute to shaping the future.
          </p>
        </section>

        {/* How to Apply Section */}
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-primary">How to Apply</h2>
          <p>
            If you&apos;re a passionate individual ready to make a difference,
            we&apos;d love to hear from you. Send your CV and a cover letter
            highlighting your skills and why you&apos;d be a great fit for
            Hypercliq to{' '}
            <EmailSVG className="font-semibold" email="info@hypercliq.com" />
          </p>
        </section>

        {/* Contact Us CTA */}
        <section className="mt-8">
          <p className="text-lg">
            Have questions or want more information?{' '}
            <Link href="/contact" className="text-accent underline">
              Contact us
            </Link>{' '}
            — we&apos;d love to connect.
          </p>
        </section>
      </div>
    </div>
  )
}

export default CareersPage
