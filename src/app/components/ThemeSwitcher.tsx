'use client'

import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  // The stored theme is only available after hydration.
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )

  return (
    <label className="flex items-center gap-2 text-sm">
      <span>Theme</span>
      <select
        aria-label="Color theme"
        value={mounted ? (theme ?? 'system') : 'system'}
        onChange={(event) => setTheme(event.target.value)}
        className="border-foreground/25 bg-background text-foreground focus-visible:outline-accent border px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  )
}
