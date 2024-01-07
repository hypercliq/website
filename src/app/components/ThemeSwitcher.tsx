'use client'

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { SVGProps, useMemo } from 'react'

type ThemeButtonProps = {
  theme: string
  currentTheme: string | undefined
  onClick: () => void
  label: string
  IconComponent: React.ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string
      titleId?: string
    } & React.RefAttributes<SVGSVGElement>
  >
  position: string
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  theme,
  currentTheme,
  onClick,
  label,
  position,
  IconComponent,
}) => (
  <button
    onClick={onClick}
    className={`absolute ${position} flex h-full w-1/3 cursor-pointer items-center justify-center`}
    aria-label={`Set ${label} mode`}
    title={
      currentTheme === theme
        ? `${label} theme selected`
        : `Switch to ${label} theme`
    }
  >
    <IconComponent
      className={`h-6 w-6 ${
        currentTheme === theme
          ? 'stroke-accent'
          : 'stroke-foreground/60 hover:stroke-foreground'
      }`}
    />
  </button>
)

enum Theme {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

const switchPositions: { [key: string]: string } = {
  [Theme.Dark]: 'left-0',
  [Theme.Light]: 'left-2/3',
  [Theme.System]: 'left-1/3',
}

const ThemeSwitcher = () => {
  // const [theme, setTheme] = useState(Theme.System)
  const { theme, setTheme } = useTheme()

  const setDarkTheme = () => setTheme(Theme.Dark)
  const setLightTheme = () => setTheme(Theme.Light)
  const setSystemTheme = () => setTheme(Theme.System)

  const switchPosition = useMemo(() => {
    return switchPositions[theme ?? Theme.System]
  }, [theme])

  return (
    <div className="mb-4 max-w-max rounded-full border-2 border-surface p-1">
      <div className="relative h-9 w-[6.75rem]">
        <div
          className={`absolute ${switchPosition} h-full w-1/3 rounded-full bg-surface transition-all`}
        ></div>
        <div className="block h-full w-full">
          <ThemeButton
            theme="dark"
            currentTheme={theme}
            onClick={setDarkTheme}
            label="Dark"
            position="left-0"
            IconComponent={MoonIcon}
          />
          <ThemeButton
            theme="system"
            currentTheme={theme}
            onClick={setSystemTheme}
            label="System"
            position="left-1/3"
            IconComponent={ComputerDesktopIcon}
          />
          <ThemeButton
            theme="light"
            currentTheme={theme}
            onClick={setLightTheme}
            label="Light"
            position="right-0"
            IconComponent={SunIcon}
          />
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitcher
