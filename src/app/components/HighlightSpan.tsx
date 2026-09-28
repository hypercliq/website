export default function HighlightSpan({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return <span className="font-semibold text-accent">{children}</span>
}
