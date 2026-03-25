'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Enquiries', href: '/enquiries' },
]

function LogoMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-accent transition-transform duration-300 group-hover:rotate-12">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/40 backdrop-blur-2xl border-b border-rule shadow-[0_1px_12px_rgba(0,0,0,0.15)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={clsx(
            'group flex items-center gap-2.5 font-heading text-base font-bold tracking-tight text-ink hover:opacity-80 transition-all duration-500',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
          )}
        >
          <LogoMark />
          AutoTact
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }, i) => {
            const isActive = pathname === href
            return (
              <li
                key={href}
                className={clsx(
                  'transition-all duration-500',
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
                )}
                style={{ transitionDelay: mounted ? `${(i + 1) * 80}ms` : '0ms' }}
              >
                <Link
                  href={href}
                  className={clsx(
                    'relative px-4 py-2 text-sm font-heading transition-colors duration-200',
                    isActive ? 'text-ink font-medium' : 'text-ink-3 hover:text-ink font-normal'
                  )}
                >
                  {label}
                  <span
                    className={clsx(
                      'absolute bottom-0 left-4 right-4 h-px transition-all duration-300 ease-out',
                      isActive ? 'bg-accent scale-x-100' : 'bg-ink/30 scale-x-0'
                    )}
                    style={{ transformOrigin: 'left' }}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <div
          className={clsx(
            'flex items-center gap-3 transition-all duration-500',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
          )}
          style={{ transitionDelay: mounted ? '320ms' : '0ms' }}
        >
          <ThemeToggle />
          <Link
            href="/enquiries"
            className="group/btn hidden sm:inline-flex items-center gap-2 text-sm font-heading font-semibold text-ink border border-rule rounded-full px-5 py-2 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.12)] transition-all duration-300"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true">
              <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-overlay/5 transition-colors"
          >
            <span className={clsx('block w-5 h-[1.5px] bg-ink-2 rounded-full transition-all duration-300', menuOpen ? 'rotate-45 translate-y-[5px]' : '')} />
            <span className={clsx('block w-5 h-[1.5px] bg-ink-2 rounded-full transition-all duration-300 my-[3.5px]', menuOpen ? 'opacity-0 scale-x-0' : '')} />
            <span className={clsx('block h-[1.5px] bg-ink-2 rounded-full transition-all duration-300', menuOpen ? '-rotate-45 -translate-y-[5px] w-5' : 'w-3.5')} />
          </button>
        </div>
      </nav>

      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-400 ease-out border-t',
          menuOpen ? 'max-h-80 opacity-100 border-rule' : 'max-h-0 opacity-0 border-transparent'
        )}
      >
        <div className="bg-background/60 backdrop-blur-2xl px-6 py-5 space-y-1">
          {navLinks.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                'block px-3 py-3 rounded-lg text-sm font-heading transition-all duration-200',
                pathname === href ? 'text-ink font-medium bg-overlay/5' : 'text-ink-3 hover:text-ink hover:bg-overlay/[0.03]'
              )}
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-rule">
            <Link
              href="/enquiries"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-heading font-semibold text-ink border border-rule rounded-full px-5 py-3 hover:border-accent hover:bg-accent/10 transition-all duration-300"
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
