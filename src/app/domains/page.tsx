import LegacyBridge, { legacyMetadata } from '@/app/components/LegacyBridge'

export const metadata = legacyMetadata('Areas of work', '/fields')

export default function Page() {
  return <LegacyBridge title="Areas of work" destination="/fields" />
}
