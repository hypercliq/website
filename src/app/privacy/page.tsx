import { Metadata } from 'next'
import Link from 'next/link'
import PageTemplate from '@/app/components/PageTemplate'

// create metadata for this page
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Hypercliq',
}

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: (
        <>
          We do not use third-party{' '}
          <Link href="/cookies" className="text-accent">
            cookies
          </Link>
          {''}, and we do not collect any browsing information or statistics
          while you browse our website.
        </>
      ),
    },
    {
      title: 'Contacting Us',
      content: (
        <>
          The only form of data collection on our website is when you choose to
          contact us. If you decide to email us using the provided email
          address, we will receive your email address and any additional
          information you choose to include in your email.
        </>
      ),
    },
    {
      title: 'How We Use Your Information',
      content: (
        <>
          We use the information you provide when contacting us solely for the
          purpose of responding to your inquiries. We do not share this
          information with third parties or use it for any other purposes.
        </>
      ),
    },
    {
      title: 'Your Choices',
      content: (
        <>
          You can choose not to provide any personal information when browsing
          our website. If you choose to contact us, you are consenting to the
          use of the provided information for the purpose of communication.
        </>
      ),
    },
  ]

  return (
    <PageTemplate
      title="Privacy Policy"
      intro="This Privacy Policy outlines how we collect, use, and protect your personal information when you browse our website. By using our website, you agree to the terms outlined in this Privacy Policy."
      sections={sections}
      contactEmail="info@hypercliq.com"
      companyName="Hypercliq"
      companyAddress="Prantouna 57, 11525 Athens, Greece"
      lastUpdated="05 Jan 2024"
    />
  )
}

export default PrivacyPolicy
