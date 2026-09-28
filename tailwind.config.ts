import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          info: '#d3f621',
          DEFAULT: '#f6b221',
          warning: '#f64521',
        },
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        onAccent: 'rgb(var(--color-on-accent) / <alpha-value>)',
        complementary: '#2168f6',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

export default config
