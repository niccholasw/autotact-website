'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

const phrases = [
  'writing invoices',
  'chasing late payments',
  'following up on quotes',
  'sorting the schedule',
  'reminding clients',
  'booking in new jobs',
  'end-of-week admin',
  'texting back and forth',
]

const TYPE_SPEED = 75
const DELETE_SPEED = 38
const PAUSE_AFTER_TYPE = 1800
const PAUSE_BEFORE_TYPE = 400

export default function TypingSection() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const timeout = useRef(null)

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(id)
  }, [])

  // Typing logic
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

  return (
    <section className="bg-ink py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-8">
          Sound familiar?
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Still spending hours a day on
        </h2>

        {/* Typed phrase */}
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10 min-h-[1.2em]">
          <span className="gradient-text">{displayed}</span>
          <span
            className="inline-block w-[3px] h-[0.85em] ml-1 rounded-sm align-middle"
            style={{
              background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
              opacity: cursorVisible ? 1 : 0,
              transition: 'opacity 0.1s',
              verticalAlign: 'middle',
              marginBottom: '0.05em',
            }}
          />
        </div>

        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          AutoTact handles it automatically - so you stop losing hours to admin
          that doesn't need a human touch.
        </p>

        <Link href="/enquiries" className="btn-accent text-base px-9 py-4 inline-block">
          Let's fix that →
        </Link>
      </div>
    </section>
  )
}
