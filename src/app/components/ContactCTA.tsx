import ContentLink, {
  type ContentLinkProps,
} from '@/app/components/ContentLink'

type SecondaryAction = Pick<ContentLinkProps, 'href' | 'children'>

export default function ContactCTA({
  secondaryAction,
}: {
  secondaryAction?: SecondaryAction
}) {
  return (
    <div className="border-divider bg-surface border-t">
      <div className="site-container flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <p className="heading-item">Have a related project in mind?</p>
        <div className="flex flex-wrap items-center gap-6">
          <ContentLink href="/contact" variant="action" className="w-fit">
            Get in touch
          </ContentLink>
          {secondaryAction && (
            <ContentLink {...secondaryAction} variant="action" />
          )}
        </div>
      </div>
    </div>
  )
}
