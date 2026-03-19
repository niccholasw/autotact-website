import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'AutoTact - AI Automation for NZ Businesses',
  description:
    'AutoTact helps NZ tradies and bookkeepers automate their admin with AI - save 10+ hours a week on invoicing, quotes, scheduling, and more. 100% NZ based.',
  keywords: [
    'AI automation NZ',
    'tradie admin automation',
    'bookkeeper automation New Zealand',
    'automated invoicing NZ',
    'small business automation Auckland',
  ],
  authors: [{ name: 'AutoTact' }],
  openGraph: {
    title: 'AutoTact - AI Automation for NZ Businesses',
    description: 'Stop doing admin. Start growing. AI-powered automation for NZ tradies and bookkeepers.',
    type: 'website',
    locale: 'en_NZ',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-NZ" className={inter.variable}>
      <body className="bg-background text-ink antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
