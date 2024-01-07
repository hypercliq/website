import { EmailSVG } from '../components/EmailSVG'

const PrivacyPolicy = () => {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy outlines how we collect, use, and protect your
        personal information when you browse our website.
      </p>

      <p className="mb-4">
        By using our website, you agree to the terms outlined in this Privacy
        Policy.
      </p>

      <p className="mb-2 font-bold">Information We Collect</p>
      <p className="mb-4">
        We do not use third-party cookies, and we do not collect any browsing
        information or statistics while you browse our website.
      </p>

      <p className="mb-2 font-bold">Contacting Us</p>
      <p className="mb-4">
        The only form of data collection on our website is when you choose to
        contact us. If you decide to email us using the provided email address,
        we will receive your email address and any additional information you
        choose to include in your email.
      </p>

      <p className="mb-2 font-bold">How We Use Your Information</p>
      <p className="mb-4">
        We use the information you provide when contacting us solely for the
        purpose of responding to your inquiries. We do not share this
        information with third parties or use it for any other purposes.
      </p>

      <p className="mb-2 font-bold">Your Choices</p>
      <p className="mb-4">
        You can choose not to provide any personal information when browsing our
        website. If you choose to contact us, you are consenting to the use of
        the provided information for the purpose of communication.
      </p>

      <p className="mb-2 font-bold">Contact Us</p>
      <p className="mb-4">
        If you have any questions about this Privacy Policy or our practices,
        you can contact us at <EmailSVG email="info@hypercliq.com" />
      </p>

      <p className="mb-8">
        This Privacy Policy is effective as of January 2024 and may be updated
        from time to time. Please review this Privacy Policy periodically for
        any changes.
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

export default PrivacyPolicy
