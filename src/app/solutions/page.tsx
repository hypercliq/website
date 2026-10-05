import LegacyBridge, { legacyMetadata } from '@/app/components/LegacyBridge'

export const metadata = legacyMetadata('Selected work', '/work')

export default function Page() {
  return <LegacyBridge title="Selected work" destination="/work" />
}
