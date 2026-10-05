import LegacyBridge, { legacyMetadata } from '@/app/components/LegacyBridge'

export const metadata = legacyMetadata('Splat Viewer', '/work/splat-viewer')

export default function Page() {
  return <LegacyBridge title="Splat Viewer" destination="/work/splat-viewer" />
}
