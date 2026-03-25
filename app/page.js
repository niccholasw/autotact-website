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
      'We ask about your week: what tools you use, which tasks eat your evenings, and where the frustration is. No pitch, just listening.',
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

const logos = [
  { src: '/images/6907cf3ffa6875df88abcfd0_ChatGPT.png', alt: 'ChatGPT' },
  { src: '/images/6907cf4ccb6fdcb5d986576d_Copilot.png', alt: 'Copilot' },
  { src: '/images/6907cf4c51da5a551b6c784b_Gemini.png', alt: 'Gemini' },
  { src: '/images/6907d1164b30dfaa6bc91bcf_Glean WIDE.png', alt: 'Glean' },
  { src: '/images/6907cf4c016fe09d35b3bae4_Claude.png', alt: 'Claude' },
  { src: '/images/6907cf4c61a39922df825583_Looker.png', alt: 'Looker' },
  { src: '/images/6907cf4c71cefe15bc055860_Autohive.png', alt: 'Autohive' },
  { src: '/images/6907cf4c25d3d4f912df79a3_N8N.png', alt: 'N8N' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero -split layout */}
      <section className="relative pt-40 pb-24 overflow-hidden dot-pattern">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left -copy */}
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
                  AutoTact automates the boring stuff eating 3-4 hours a day - think invoicing, follow-ups, and scheduling.
                  You should focus on what really matters.
                  
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

            {/* Right -automation visual with parallax */}
            <Reveal variant="slide-left" delay={0.3} duration={1.2} className="hidden lg:block">
              <Parallax speed={0.08}>
                <AutomationVisual />
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="border-t border-rule border-b border-rule bg-surface-deep py-14">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fade-up" duration={0.7}>
            <p className="text-center text-sm text-muted mb-10">
              Powered by industry-leading AI and automation platforms
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={0.15} duration={0.9}>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
              {logos.map(({ src, alt }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  className="h-9 md:h-11 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 logo-invert"
                />
              ))}
            </div>
          </Reveal>
        </div>
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
                Not months. There's no IT team involved on your side -we sort everything.
              </p>
            </div>
          </Reveal>

          <StaggerContainer stagger={0.12} variant="fade-up" className="grid md:grid-cols-3 gap-px bg-rule">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="bg-surface p-10 h-full">
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
