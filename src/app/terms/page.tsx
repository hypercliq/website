import ContentLink from '@/app/components/ContentLink'
import PageTemplate from '@/app/components/PageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website terms',
  description: 'Terms for using the Hypercliq website.',
}

export default function Terms() {
  return (
    <PageTemplate
      title="Website terms"
      intro="These terms concern use of the Hypercliq website."
      sections={[
        {
          title: 'Using this site',
          content:
            'Please use the site in accordance with applicable law. If you do not agree with these terms, you should not use the site.',
        },
        {
          title: 'Site content',
          content:
            'Text, images, logos, and other material on the site belong to Hypercliq or their respective rights holders and are protected by applicable intellectual property law.',
        },
        {
          title: 'Privacy',
          content: (
            <>
              Our{' '}
              <ContentLink href="/privacy" className="" variant="inline">
                privacy policy
              </ContentLink>{' '}
              explains how information related to the site is handled.
            </>
          ),
        },
        {
          title: 'Changes',
          content:
            'We may revise these terms. The date below shows when this page was last updated.',
        },
        {
          title: 'Applicable law',
          content:
            'These terms are governed by Greek law, with European Union law applying where relevant. Disputes are subject to the jurisdiction of Greek courts.',
        },
      ]}
      lastUpdated="28 Sep 2026"
    />
  )
}
