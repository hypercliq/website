// ContactPage.tsx

import ContactSection from '@/app/sections/contact'
import TextCarousel from '../components/TextCarousel'
import { Metadata } from 'next'

const sentences = [
  "Ready to move forward? Reach out and let's make things happen.",
  "Connect with us! Your ideas matter, and we're here to listen.",
  "Embark on a journey of collaboration. Let's bring your ideas to life!",
  "Have something in mind? Drop us a line – we'd love to hear from you.",
  "Send us a message! We're eager to discuss your projects and ideas.",
]

// metadata
export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact us to explore how we can collaborate and bring your ideas to life.',
}

const ContactPage = () => {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-16">
        <h1 className="mb-4 text-center text-4xl font-bold text-primary">
          Drop Us a Line
        </h1>

        <TextCarousel
          textArray={sentences}
          fromDirection="top"
          toDirection="bottom"
          className="mb-2 h-10 text-2xl font-bold tracking-tight text-accent"
          innerClassName="px-4 md:px-8 text-center"
          tag={'h3'}
        />

        <p className="mb-8 text-center text-lg text-foreground/75">
          We&apos;re thrilled to engage with you. Whether you&apos;re interested
          in our services, have a project idea, or just want to connect, feel
          free to reach out. Your journey to innovative solutions begins here!
        </p>

        <ContactSection />

        <div className="mt-8 text-center">
          <p className="text-lg">
            Ready to take the next step? Contact us to explore how we can
            collaborate and bring your ideas to life.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
