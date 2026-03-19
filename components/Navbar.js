'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Enquiries', href: '/enquiries' },
]

function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#2563eb" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink hover:opacity-80 transition-opacity"
        >
          <BoltIcon />
          AutoTact
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    'px-4 py-2 rounded-md text-sm font-medium transition-all duration-150',
                    isActive
                      ? 'text-accent bg-accent-light'
                      : 'text-ink-3 hover:text-ink hover:bg-surface'
                  )}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/enquiries"
            className="btn-primary text-sm px-5 py-2.5 hidden sm:inline-block"
          >
            Get in touch
          </Link>
          <button
            aria-label="Open menu"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-surface transition"
          >
            <span className="block w-5 h-0.5 bg-ink-2 rounded" />
            <span className="block w-5 h-0.5 bg-ink-2 rounded" />
            <span className="block w-4 h-0.5 bg-ink-2 rounded" />
          </button>
        </div>
      </nav>
    </header>
  )
}
