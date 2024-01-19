import Link from 'next/link'
import PageTemplate from '@/app/components/PageTemplate'

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: (
        <>
          By accessing or using our website, you acknowledge that you have read,
          understood, and agree to be bound by these Terms. If you do not agree
          to all of these Terms, please do not use our website. Your continued
          use of our website will confirm your acceptance of the revised Terms.
          We encourage you to frequently review the Terms to ensure you
          understand the terms and conditions that apply to your use of the
          website.
        </>
      ),
    },
    {
      title: 'Changes to Terms',
      content: (
        <>
          We reserve the right to change or modify these Terms at any time and
          in our sole discretion. If we make changes to these Terms, we will
          provide notice of such changes, such as by updating the &ldquot;Last
          Updated&rdquot; date at the end of these Terms.
        </>
      ),
    },
    {
      title: 'User Obligations',
      content: (
        <>
          By using our website, you agree to comply with all applicable laws and
          regulations, with Greek law taking precedence.
        </>
      ),
    },
    {
      title: 'Privacy and Data Protection',
      content: (
        <>
          We are committed to protecting your privacy. Our{' '}
          <Link href="/privacy" className="text-accent">
            Privacy Policy
          </Link>{' '}
          outlines how we collect, use, and disclose your personal information
          while browsing our website.
        </>
      ),
    },
    {
      title: 'Intellectual Property',
      content: (
        <>
          All content and materials available on our website, including but not
          limited to text, graphics, logos, icons, images, audio clips, and
          software, are the property of Hypercliq or its licensors and are
          protected by applicable intellectual property laws.
        </>
      ),
    },
    {
      title: 'Governing Law and Jurisdiction',
      content: (
        <>
          These Terms are governed by the laws of Greece. Any disputes arising
          under or in connection with these Terms shall be subject to the
          exclusive jurisdiction of the Greek courts. European Union laws will
          also apply where relevant.
        </>
      ),
    },
  ]

  return (
    <PageTemplate
      title="Terms of Service"
      intro="Welcome to Hypercliq, a company based in Greece. Please read these terms and conditions carefully before browsing our website."
      sections={sections}
      contactEmail="info@hypercliq.com"
      companyName="Hypercliq"
      companyAddress="Prantouna 57, 11525 Athens, Greece"
      lastUpdated="05 Jan 2024"
    />
  )
}

export default TermsPage
