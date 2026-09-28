// ContactPage.tsx

import ContactSection from '@/app/sections/contact'
import { Metadata } from 'next'
import MainContainer from '../components/Container'

// metadata
export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact us to explore how we can collaborate and bring your ideas to life.',
}

const ContactPage = () => {
  return (
    <MainContainer>
      <h1 className="mb-4 text-center text-4xl font-bold text-primary">
        Drop Us a Line
      </h1>

      <p className="mb-8 text-center text-lg text-foreground/75">
        We&apos;re thrilled to engage with you. Whether you&apos;re interested
        in our services, have a project idea, or just want to connect, feel free
        to reach out. Your journey to innovative solutions begins here!
      </p>

      <ContactSection />

      <div className="mt-8 text-center">
        <p className="text-lg">
          Ready to take the next step? Contact us to explore how we can
          collaborate and bring your ideas to life.
        </p>
      </div>
    </MainContainer>
  )
}

export default ContactPage
