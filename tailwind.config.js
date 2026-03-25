/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--c-surface) / <alpha-value>)',
          2: 'rgb(var(--c-surface-2) / <alpha-value>)',
          elevated: 'rgb(var(--c-surface-el) / <alpha-value>)',
          deep: 'rgb(var(--c-surface-deep) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--c-ink) / <alpha-value>)',
          2: 'rgb(var(--c-ink-2) / <alpha-value>)',
          3: 'rgb(var(--c-ink-3) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--c-accent) / <alpha-value>)',
          light: 'rgb(var(--c-accent) / 0.12)',
          purple: 'rgb(var(--c-purple) / <alpha-value>)',
          'purple-light': 'rgb(var(--c-purple) / 0.12)',
        },
        rule: 'rgb(var(--c-rule) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        overlay: 'rgb(var(--c-overlay) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-serif)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-roboto-slab)', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.25)',
        'card-hover': '0 4px 6px rgba(0,0,0,0.3), 0 12px 32px rgba(0,0,0,0.4)',
        btn: '0 1px 2px rgba(0,0,0,0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
