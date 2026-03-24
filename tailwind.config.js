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
        background: '#121218',
        surface: {
          DEFAULT: '#1a1a22',
          2: '#222230',
          elevated: '#16161e',
          deep: '#0d0d12',
        },
        ink: {
          DEFAULT: '#f0f0f5',
          2: '#d4d4dd',
          3: '#7a7a90',
        },
        accent: {
          DEFAULT: '#3b82f6',
          light: 'rgba(59,130,246,0.12)',
          purple: '#a78bfa',
          'purple-light': 'rgba(167,139,250,0.12)',
        },
        rule: '#2a2a36',
        muted: '#5a5a6e',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
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
