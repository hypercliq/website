import ContentLink from '@/app/components/ContentLink'
import type { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'
import { company } from '@/app/data/company'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How Hypercliq handles information related to this website.',
}

export default function Privacy() {
  return (
    <PageTemplate
      title="Privacy policy"
      intro="This page explains what happens when you visit this website or contact us."
      sections={[
        {
          title: 'Browsing the site',
          content: (
            <>
              We do not run analytics or advertising trackers on this site. It
              is hosted on GitHub Pages, which{' '}
              <ContentLink
                href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages"
                variant="inline"
              >
                logs visitors&apos; IP addresses for security
              </ContentLink>
              . GitHub describes its handling of that information in its{' '}
              <ContentLink
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                variant="inline"
              >
                privacy statement
              </ContentLink>
              .
            </>
          ),
        },
        {
          title: 'Email',
          content:
            'If you email us, we receive your address and the information you send. We use it to reply and to discuss your enquiry. Please avoid sending sensitive personal information unless it is needed for that conversation.',
        },
        {
          title: 'Theme preference',
          content: (
            <>
              The theme control stores your choice in your browser. See our{' '}
              <ContentLink href="/cookies" className="" variant="inline">
                cookie policy
              </ContentLink>{' '}
              for details.
            </>
          ),
        },
        {
          title: 'Your choices and requests',
          content: `You can clear your browser storage at any time. For questions about information you have sent us, or to request access, correction, or deletion, email ${company.email}.`,
        },
      ]}
      lastUpdated="28 Sep 2026"
    />
  )
}
