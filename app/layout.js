import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'AutoTact - Admin Automation for NZ Tradies and Bookkeepers',
  description:
    'AutoTact sets up invoicing, follow-up, and scheduling automations for NZ tradies and bookkeepers. 100% NZ based, live within days.',
  keywords: [
    'AI automation NZ',
    'tradie admin automation',
    'bookkeeper automation New Zealand',
    'automated invoicing NZ',
    'small business automation Auckland',
  ],
  authors: [{ name: 'AutoTact' }],
  openGraph: {
    title: 'AutoTact - Admin Automation for NZ Tradies and Bookkeepers',
    description: 'AutoTact handles the invoicing, reminders, and scheduling so NZ tradies and bookkeepers can stop working evenings.',
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
