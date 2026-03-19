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
        background: '#ffffff',
        surface: {
          DEFAULT: '#f8fafc',
          2: '#f1f5f9',
        },
        ink: {
          DEFAULT: '#0f172a',
          2: '#334155',
          3: '#64748b',
        },
        accent: {
          DEFAULT: '#2563eb',
          light: '#eff6ff',
          purple: '#7c3aed',
          'purple-light': '#f5f3ff',
        },
        rule: '#e2e8f0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(15,23,42,0.06), 0 4px 16px rgba(15,23,42,0.06)',
        'card-hover': '0 4px 6px rgba(15,23,42,0.05), 0 12px 32px rgba(15,23,42,0.1)',
        btn: '0 1px 2px rgba(15,23,42,0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
