'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

const phrases = [
  'writing invoices',
  'chasing late payments',
  'chasing supplier invoices',
  'sorting the roster',
  'reminding customers',
  'reordering stock',
  'end-of-week admin',
  'texting back and forth',
]

const TYPE_SPEED = 75
const DELETE_SPEED = 38
const PAUSE_AFTER_TYPE = 1800
const PAUSE_BEFORE_TYPE = 400
const APPLE_EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function TypingSection() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [inView, setInView] = useState(false)
  const timeout = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el) } },
      { threshold: 0.25, rootMargin: '-40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const current = phrases[phraseIndex]
    if (!isDeleting && displayed === current) {
      timeout.current = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE)
      return
    }
    if (isDeleting && displayed === '') {
      timeout.current = setTimeout(() => {
        setIsDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
      }, PAUSE_BEFORE_TYPE)
      return
    }
    timeout.current = setTimeout(() => {
      setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1))
    }, isDeleting ? DELETE_SPEED : TYPE_SPEED)
    return () => clearTimeout(timeout.current)
  }, [displayed, isDeleting, phraseIndex])

  function anim(delay, duration = 0.9, variant = 'fade-up') {
    const from = variant === 'scale-fade'
      ? { opacity: 0, transform: 'scale(1.06)', filter: 'blur(8px)' }
      : variant === 'fade-in'
        ? { opacity: 0 }
        : { opacity: 0, transform: 'translateY(40px)' }
    const to = variant === 'scale-fade'
      ? { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' }
      : variant === 'fade-in'
        ? { opacity: 1 }
        : { opacity: 1, transform: 'translateY(0)' }
    return {
      style: {
        ...(inView ? to : from),
        transition: inView
          ? `opacity ${duration}s ${APPLE_EASE} ${delay}s, transform ${duration}s ${APPLE_EASE} ${delay}s, filter ${duration}s ${APPLE_EASE} ${delay}s`
          : 'none',
      },
    }
  }

  return (
    <section ref={sectionRef} className="border-t border-rule py-28 px-6 overflow-hidden section-glow">
      <div className="max-w-4xl mx-auto text-center">
        <p className="eyebrow mb-10" {...anim(0, 0.7)}>Sound familiar?</p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-4 tracking-tight" {...anim(0.1, 1.1, 'scale-fade')}>
          Still spending hours a day on
        </h2>

        <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 min-h-[1.2em]" {...anim(0.3, 0.8, 'fade-in')}>
          <span className="gradient-text">{displayed}</span>
          <span
            className="inline-block w-[3px] h-[0.85em] ml-1 rounded-sm align-middle"
            style={{
              background: 'linear-gradient(135deg, rgb(var(--c-accent)), rgb(var(--c-purple)))',
              opacity: cursorVisible ? 1 : 0,
              transition: 'opacity 0.1s',
              verticalAlign: 'middle',
              marginBottom: '0.05em',
            }}
          />
        </div>

        <p className="text-ink-3 text-lg max-w-xl mx-auto mb-12 leading-relaxed" {...anim(0.35)}>
          AutoTact handles it for you -so the hours you used to spend on admin
          go back to your actual day.
        </p>

        <div {...anim(0.5, 0.8)}>
          <Link href="/enquiries" className="btn-accent text-base px-9 py-4 inline-block">
            Let's fix that →
          </Link>
        </div>
      </div>
    </section>
  )
}
