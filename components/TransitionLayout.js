'use client'

import { usePathname } from 'next/navigation'
import { useRef, useEffect, useState, useCallback } from 'react'

/**
 * Lightweight page-transition wrapper.
 * On pathname change: quick fade-out → swap → fade-in.
 * No AnimatePresence, no frozen router, no context duplication.
 */
export default function TransitionLayout({ children }) {
  const pathname = usePathname()
  const wrapperRef = useRef(null)
  const prevPath = useRef(pathname)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (pathname !== prevPath.current) {
      prevPath.current = pathname
      // New page just mounted — play the entrance
      setIsVisible(false)
      // Force a reflow so the opacity:0 frame is painted first
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true)
          // Scroll to top on navigation
          window.scrollTo({ top: 0, behavior: 'instant' })
        })
      })
    }
  }, [pathname])

  return (
    <div
      ref={wrapperRef}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(6px)',
        transform: isVisible ? 'scale(1)' : 'scale(0.99)',
        transition: isVisible
          ? 'opacity 0.4s cubic-bezier(0.16,1,0.3,1), filter 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)'
          : 'none',
      }}
    >
      {children}
    </div>
  )
}
