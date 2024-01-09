import { Metadata } from 'next'
import { EmailSVG } from '../components/EmailSVG'

// create metadata for this page
export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Hypercliq',
}

const CookiePolicy = () => {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Cookie Policy</h1>

      <p className="mb-4">
        This Cookie Policy outlines how we use cookies on our website.
      </p>

      <p className="mb-4">
        By using our website, you consent to the use of cookies as described in
        this policy.
      </p>

      <p className="mb-2 font-bold">What Are Cookies</p>
      <p className="mb-4">
        Cookies are small pieces of data stored on your device&apos;s browser.
        They are commonly used to enhance your browsing experience, remember
        your preferences, and provide personalized content.
      </p>

      <p className="mb-2 font-bold">Our Use of Cookies</p>
      <p className="mb-4">
        Currently, we do not use any cookies on our website. However, in the
        future, we may use our own cookies to improve site functionalities.
        These cookies will not be used for ads or any intrusive purposes.
      </p>

      <p className="mb-2 font-bold">Your Choices</p>
      <p className="mb-4">
        You have the option to disable cookies in your browser settings. Please
        note that this may affect the functionality of our website.
      </p>

      <p className="mb-2 font-bold">Changes to This Policy</p>
      <p className="mb-4">
        This Cookie Policy is effective as of January 2024 and may be updated
        from time to time. Any changes to our use of cookies will be reflected
        in this policy. Please review this Cookie Policy periodically for any
        updates.
      </p>

      <p className="mb-2 font-bold">Contact Us</p>
      <p className="mb-8">
        If you have any questions about this Cookie Policy or our practices, you
        can contact us at <EmailSVG email="info@hypercliq.com" />.
      </p>

      <p className="mb-4 font-bold">Hypercliq</p>

      <address className="mb-4">
        Prantouna 57,
        <br />
        11525 Athens,
        <br />
        Greece
      </address>

      <p className="mb-4 text-right text-sm">Last Updated: 05 Jan 2024</p>
    </main>
  )
}

export default CookiePolicy
