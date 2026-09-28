import type { Metadata } from 'next'
import PageTemplate from '@/app/components/PageTemplate'

export const metadata: Metadata = {
  title: 'Cookie policy',
  description: 'How this website uses browser storage.',
}

export default function Cookies() {
  return (
    <PageTemplate
      title="Cookie policy"
      intro="This site does not set advertising or analytics cookies. The theme control can save your display preference in your browser."
      sections={[
        {
          title: 'Theme preference',
          content:
            'If you choose a light, dark, or system theme, the site stores that choice in your browser so it can use it on your next visit. You can clear it through your browser settings.',
        },
        {
          title: 'Other services',
          content:
            'The contact page links to OpenStreetMap. Its website opens only if you follow that link; it is not embedded here.',
        },
      ]}
      lastUpdated="28 Sep 2026"
    />
  )
}
