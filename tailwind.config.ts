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
        // darkAccent: 'rgb(33 246 175 / <alpha-value>)',

        onAccent: 'rgb(var(--color-on-accent) / <alpha-value>)',
        // onDarkAccent: 'rgb(22 22 29 / <alpha-value>)',

        complementary: '#2168f6',

        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        // darkForeground: 'rgb(255 255 255 / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        // darkBackground: 'rgb(22 22 29 / <alpha-value>)',

        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        // darkSurface: 'rgb(31 31 38 / <alpha-value>)',
      },
      keyframes: {
        highlight: {
          to: {
            'background-position': '0 0',
            color: '#16161D',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flipIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        flipOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },

        'left-slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'right-slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'top-slide-in': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'bottom-slide-in': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'left-slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'right-slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'top-slide-out': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'bottom-slide-out': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        highlight: 'highlight 1.5s 1 .5s normal forwards',
        fadeIn: 'fadeIn 1s 1 normal forwards',
        fadeOut: 'fadeOut 1s 1 normal forwards',
        slideIn: 'slideIn 1s 1 normal forwards',
        slideOut: 'slideOut 1s 1 normal forwards',
        flipIn: 'slideIn 1s 1 normal forwards',
        flipOut: 'slideOut 1s 1 normal forwards',

        'left-slide-in': 'left-slide-in 2s forwards',
        'right-slide-in': 'right-slide-in 2s forwards',
        'top-slide-in': 'top-slide-in 2s forwards',
        'bottom-slide-in': 'bottom-slide-in 2s forwards',
        'left-slide-out': 'left-slide-out 2s forwards',
        'right-slide-out': 'right-slide-out 2s forwards',
        'top-slide-out': 'top-slide-out 2s forwards',
        'bottom-slide-out': 'bottom-slide-out 2s forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
export default config
