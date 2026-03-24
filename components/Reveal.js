'use client'

import { useRef, useEffect, useState } from 'react'

/**
 * Apple-style scroll-triggered reveal.
 * Pure CSS transitions driven by IntersectionObserver — no framer-motion dependency.
 *
 * Variants:
 *   fade-up | fade-down | fade-in | scale-fade | slide-left | slide-right | blur-in
 */

const hidden = {
  'fade-up':     { opacity: 0, transform: 'translateY(60px)' },
  'fade-down':   { opacity: 0, transform: 'translateY(-40px)' },
  'fade-in':     { opacity: 0 },
  'scale-fade':  { opacity: 0, transform: 'scale(1.06)', filter: 'blur(8px)' },
  'slide-left':  { opacity: 0, transform: 'translateX(80px)' },
  'slide-right': { opacity: 0, transform: 'translateX(-80px)' },
  'blur-in':     { opacity: 0, filter: 'blur(12px)' },
}

const visible = {
  'fade-up':     { opacity: 1, transform: 'translateY(0)' },
  'fade-down':   { opacity: 1, transform: 'translateY(0)' },
  'fade-in':     { opacity: 1 },
  'scale-fade':  { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
  'slide-left':  { opacity: 1, transform: 'translateX(0)' },
  'slide-right': { opacity: 1, transform: 'translateX(0)' },
  'blur-in':     { opacity: 1, filter: 'blur(0px)' },
}

const APPLE_EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.9,
  once = true,
  className = '',
  threshold = 0.15,
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin: '-40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold])

  const from = hidden[variant] || hidden['fade-up']
  const to = visible[variant] || visible['fade-up']

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(inView ? to : from),
        transition: inView
          ? `opacity ${duration}s ${APPLE_EASE} ${delay}s, transform ${duration}s ${APPLE_EASE} ${delay}s, filter ${duration}s ${APPLE_EASE} ${delay}s`
          : 'none',
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  )
}

/**
 * Container that makes each direct child stagger its reveal.
 * Wraps children in Reveal components with increasing delay.
 */
export function StaggerContainer({
  children,
  stagger = 0.1,
  baseDelay = 0,
  variant = 'fade-up',
  duration = 0.8,
  className = '',
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '-40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const from = hidden[variant] || hidden['fade-up']
  const to = visible[variant] || visible['fade-up']

  const items = Array.isArray(children) ? children : [children]

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={child?.key ?? i}
          style={{
            ...(inView ? to : from),
            transition: inView
              ? `opacity ${duration}s ${APPLE_EASE} ${baseDelay + i * stagger}s, transform ${duration}s ${APPLE_EASE} ${baseDelay + i * stagger}s, filter ${duration}s ${APPLE_EASE} ${baseDelay + i * stagger}s`
              : 'none',
            willChange: 'opacity, transform, filter',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

/**
 * Parallax wrapper — shifts children at a different scroll rate.
 */
export function Parallax({ children, speed = 0.15, className = '' }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function onScroll() {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      setOffset((center - viewCenter) * speed)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translateY(${offset}px)`, willChange: 'transform' }}
    >
      {children}
    </div>
  )
}
