'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TypingSection from '../components/TypingSection'
import AutomationVisual from '../components/AutomationVisual'
import Reveal, { StaggerContainer, Parallax } from '../components/Reveal'

const steps = [
  {
    number: '01',
    title: '20-minute call',
    description:
      'We ask about your week — what tools you use, which tasks eat your evenings, and where the frustration is. No pitch, just listening.',
  },
  {
    number: '02',
    title: 'We build it',
    description:
      "Our team sets up your automations. You won't need to touch any software or watch a training video. We handle it and show you how it runs.",
  },
  {
    number: '03',
    title: 'You get your time back',
    description:
      'Most clients are live within a few days. The automations run quietly in the background and you stop thinking about admin.',
  },
]

const stats = [
  {
    value: '5+',
    label: 'NZ businesses',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
      </svg>
    ),
  },
  {
    value: '~12 hrs',
    label: 'saved per week, on average',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: '4.9 / 5',
    label: 'client rating',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    value: 'No',
    label: 'lock-in contracts',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
]

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero — split layout */}
      <section className="relative pt-40 pb-24 overflow-hidden dot-pattern">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — copy */}
            <div>
              <Reveal variant="fade-up" duration={0.7}>
                <p className="eyebrow mb-6">Built for Small NZ Business Owners</p>
              </Reveal>

              <Reveal variant="scale-fade" duration={1.1} delay={0.15}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink mb-7 leading-[1.06]">
                  The admin will handle{' '}
                  <span className="gradient-text">itself from here.</span>
                </h1>
              </Reveal>

              <Reveal variant="fade-up" delay={0.35} duration={0.9}>
                <p className="text-lg md:text-xl text-ink-3 max-w-lg mb-10 leading-relaxed">
                  AutoTact automates the invoicing, follow-ups, and scheduling that eat your evenings —
                  so you can actually knock off when the job is done.
                </p>
              </Reveal>

              <Reveal variant="fade-up" delay={0.5} duration={0.8}>
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <Link href="/enquiries" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
                    Book a free chat
                  </Link>
                  <Link href="/about" className="btn-secondary text-base px-8 py-3.5 w-full sm:w-auto">
                    How it works
                  </Link>
                </div>
              </Reveal>

              <Reveal variant="fade-in" delay={0.7} duration={1}>
                <p className="mt-7 text-sm text-muted">
                  20-minute call &middot; No obligation &middot; 100% NZ team
                </p>
              </Reveal>
            </div>

            {/* Right — automation visual with parallax */}
            <Reveal variant="slide-left" delay={0.3} duration={1.2} className="hidden lg:block">
              <Parallax speed={0.08}>
                <AutomationVisual />
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative border-t border-rule border-b border-rule bg-surface-deep py-16 overflow-hidden">
        {/* Parallax gear background */}
        <Parallax speed={-0.12} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ opacity: 0.045 }}>
            {/* Large gear — top-right */}
            <svg className="absolute -top-16 -right-12 w-[320px] h-[320px] text-accent animate-[spin_40s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="50" cy="50" r="22" />
              <circle cx="50" cy="50" r="8" />
              {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => (
                <rect key={a} x="46" y="26" width="8" height="12" rx="2" transform={`rotate(${a} 50 50)`} fill="currentColor" stroke="none" />
              ))}
            </svg>
            {/* Medium gear — bottom-left */}
            <svg className="absolute -bottom-10 -left-8 w-[220px] h-[220px] text-accent animate-[spin_30s_linear_infinite_reverse]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="50" cy="50" r="20" />
              <circle cx="50" cy="50" r="7" />
              {[0,40,80,120,160,200,240,280,320].map(a => (
                <rect key={a} x="46" y="27" width="8" height="11" rx="2" transform={`rotate(${a} 50 50)`} fill="currentColor" stroke="none" />
              ))}
            </svg>
            {/* Small gear — center-left */}
            <svg className="absolute top-6 left-[18%] w-[140px] h-[140px] text-accent animate-[spin_25s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="50" cy="50" r="18" />
              <circle cx="50" cy="50" r="6" />
              {[0,45,90,135,180,225,270,315].map(a => (
                <rect key={a} x="47" y="29" width="6" height="10" rx="1.5" transform={`rotate(${a} 50 50)`} fill="currentColor" stroke="none" />
              ))}
            </svg>
            {/* Tiny gear — right of center */}
            <svg className="absolute bottom-4 right-[28%] w-[100px] h-[100px] text-accent animate-[spin_20s_linear_infinite_reverse]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="50" cy="50" r="18" />
              <circle cx="50" cy="50" r="6" />
              {[0,60,120,180,240,300].map(a => (
                <rect key={a} x="47" y="29" width="6" height="10" rx="1.5" transform={`rotate(${a} 50 50)`} fill="currentColor" stroke="none" />
              ))}
            </svg>
          </div>
        </Parallax>

        <StaggerContainer stagger={0.1} variant="fade-up" className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label, icon }) => (
            <dl key={label} className="group relative bg-surface/80 backdrop-blur-sm border border-rule rounded-xl p-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_24px_rgba(59,130,246,0.06)]">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
              <dt className="text-3xl font-bold text-ink mb-1 tracking-tight">{value}</dt>
              <dd className="text-sm text-muted">{label}</dd>
            </dl>
          ))}
        </StaggerContainer>
      </section>

      <TypingSection />

      {/* How it works */}
      <section className="py-28 border-t border-rule">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fade-up">
            <div className="mb-16">
              <p className="eyebrow mb-5">The process</p>
              <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-5 leading-tight">
                Up and running in days
              </h2>
              <p className="text-ink-3 text-lg max-w-lg leading-relaxed">
                Not months. There's no IT team involved on your side — we sort everything.
              </p>
            </div>
          </Reveal>

          <StaggerContainer stagger={0.12} variant="fade-up" className="grid md:grid-cols-3 gap-px bg-rule">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="bg-background p-10">
                <span className="text-6xl font-bold text-surface-2 select-none leading-none font-heading">{number}</span>
                <h3 className="text-xl font-semibold text-ink mt-5 mb-3 tracking-tight">{title}</h3>
                <p className="text-ink-3 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal variant="fade-up">
            <p className="eyebrow mb-6">Ready to start?</p>
          </Reveal>
          <Reveal variant="scale-fade" delay={0.1} duration={1}>
            <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-6 leading-tight">
              Reckon it'd work for your business?
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={0.2}>
            <p className="text-ink-3 text-lg mb-12 leading-relaxed">
              Most of the people who book a call tell us they wish they'd done it six months earlier.
              It's 20 minutes and there's no obligation to go any further.
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={0.3}>
            <Link href="/enquiries" className="btn-accent text-base px-10 py-4 inline-block">
              Book a free chat →
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
