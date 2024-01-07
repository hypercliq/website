import Link from 'next/link'
import { EmailSVG } from '../components/EmailSVG'

const TermsPage: React.FC = () => {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Terms of Service</h1>

      <p className="mb-4">
        Welcome to <span className="font-bold">Hypercliq</span>, a company based
        in Greece. Please read these terms and conditions carefully before
        browsing our website.
      </p>

      <p className="mb-4">
        By accessing or browsing our website, you agree to be bound by these
        Terms and all terms incorporated by reference. If you do not agree to
        all of these Terms, do not use our website.
      </p>

      <ol className="mb-4 list-decimal pl-4">
        <li className="mb-2">
          <span className="font-bold">Acceptance of Terms:</span> By accessing
          or using our website, you acknowledge that you have read, understood,
          and agree to be bound by these Terms.
        </li>
        <li className="mb-2">
          <span className="font-bold">Changes to Terms:</span> We reserve the
          right to change or modify these Terms at any time and in our sole
          discretion. If we make changes to these Terms, we will provide notice
          of such changes, such as by updating the &quot;Last Updated&quot; date
          at the end of these Terms.
        </li>
        <li className="mb-2">
          <span className="font-bold">User Obligations:</span> You agree to
          comply with all applicable laws and regulations regarding your use of
          our website, with Greek law taking precedence.
        </li>
        <li className="mb-2">
          <span className="font-bold">Privacy and Data Protection:</span> We are
          committed to protecting your privacy. Our Privacy Policy, available{' '}
          <Link href="/privacy" className="text-accent">
            here
          </Link>
          {''}, outlines how we collect, use, and disclose your personal
          information while browsing our website.
        </li>
        <li className="mb-2">
          <span className="font-bold">Intellectual Property:</span> All content
          and materials available on our website, including but not limited to
          text, graphics, logos, icons, images, audio clips, and software, are
          the property of <span className="font-bold">Hypercliq</span> or its
          licensors and are protected by applicable intellectual property laws.
        </li>
        <li className="mb-2">
          <span className="font-bold">Governing Law:</span> These Terms are
          governed by the laws of Greece. Any disputes arising under or in
          connection with these Terms shall be subject to the exclusive
          jurisdiction of the Greek courts. European Union laws will also apply
          where relevant.
        </li>
      </ol>

      <p className="mb-4">
        If you have any questions regarding the use of our website or these
        Terms, please contact us at <EmailSVG email="info@hypercliq.com" />.
      </p>

      <p className="mb-8">
        Your continued use of our website will confirm your acceptance of the
        revised Terms. We encourage you to frequently review the Terms to ensure
        you understand the terms and conditions that apply to your use of the
        website.
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

export default TermsPage
