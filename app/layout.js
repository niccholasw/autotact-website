import { IBM_Plex_Serif, Roboto_Slab } from 'next/font/google'
import TransitionLayout from '../components/TransitionLayout'
import './globals.css'

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-serif',
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab',
})

export const metadata = {
  title: 'AutoTact - Admin Automation for Small NZ Businesses',
  description:
    'AutoTact sets up invoicing, follow-up, and scheduling automations for Small NZ Businesses. 100% NZ based, live within days.',
  keywords: [
    'AI automation NZ',
    'cafe admin automation',
    'bookkeeper automation New Zealand',
    'automated invoicing NZ',
    'small business automation Auckland',
  ],
  authors: [{ name: 'AutoTact' }],
  openGraph: {
    title: 'AutoTact - Admin Automation for Small NZ Businesses',
    description: 'AutoTact handles the invoicing, reminders, and scheduling so Small NZ Businesses can stop working evenings.',
    type: 'website',
    locale: 'en_NZ',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-NZ" className={`${ibmPlexSerif.variable} ${robotoSlab.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()` }} />
      </head>
      <body className="bg-background text-ink antialiased min-h-screen">
        <TransitionLayout>{children}</TransitionLayout>
      </body>
    </html>
  )
}
