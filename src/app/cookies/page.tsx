import { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'

// create metadata for this page
export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Hypercliq',
}

const CookiePolicy = () => {
  const sections = [
    {
      title: 'What Are Cookies',
      content: (
        <>
          Cookies are small pieces of data stored on your device&apos;s browser.
          They are commonly used to enhance your browsing experience, remember
          your preferences, and provide personalized content.
        </>
      ),
    },
    {
      title: 'Our Use of Cookies',
      content: (
        <>
          Currently, we do not use any cookies on our website. However, in the
          future, we may use our own cookies to improve site functionalities.
          These cookies will not be used for ads or any intrusive purposes.
        </>
      ),
    },
    {
      title: 'Your Choices',
      content: (
        <>
          You have the option to disable cookies in your browser settings.
          Please note that this may affect the functionality of our website.
        </>
      ),
    },
    {
      title: 'Changes to This Policy',
      content: (
        <>
          This Cookie Policy is effective as of January 2024 and may be updated
          from time to time. Any changes to our use of cookies will be reflected
          in this policy. Please review this Cookie Policy periodically for any
          updates.
        </>
      ),
    },
  ]

  return (
    <PageTemplate
      title="Cookie Policy"
      intro="This Cookie Policy outlines how we use cookies on our website. By using our website, you consent to the use of cookies as described in this policy."
      sections={sections}
      contactEmail="info@hypercliq.com"
      companyName="Hypercliq"
      companyAddress="Prantouna 57, 11525 Athens, Greece"
      lastUpdated="05 Jan 2024"
    />
  )
}

export default CookiePolicy
