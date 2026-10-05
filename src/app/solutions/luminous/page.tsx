import LegacyBridge, { legacyMetadata } from '@/app/components/LegacyBridge'

export const metadata = legacyMetadata(
  'Spatial tools for LUMINOUS',
  '/work/luminous',
)

export default function Page() {
  return (
    <LegacyBridge
      title="Spatial tools for LUMINOUS"
      destination="/work/luminous"
    />
  )
}
