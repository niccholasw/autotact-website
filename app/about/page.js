'use client'

import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Reveal, { StaggerContainer, Parallax } from '../../components/Reveal'

const values = [
  {
    title: 'We move fast',
    description:
      "We've had clients go from first call to live automations in 72 hours. There's no lengthy discovery phase or project management overhead — we learn what you need, build it, and get out of your way.",
  },
  {
    title: 'Plain English, always',
    description:
      "We don't talk about APIs, webhooks, or workflow orchestration unless you want to. We explain what we're building in terms of your actual day — 'when you close out the till, your end-of-day report goes out automatically.' That's it.",
  },
  {
    title: 'We care if it actually works',
    description:
      "After we go live, we keep checking in. If something's not firing correctly or you've changed how you work, we fix it. You're not handed a product and left to figure it out.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 dot-pattern overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(167,139,250,0.06) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Reveal variant="fade-up" duration={0.7}>
            <p className="eyebrow mb-7">Our story</p>
          </Reveal>
          <Reveal variant="scale-fade" duration={1.1} delay={0.15}>
            <h1 className="text-5xl md:text-6xl font-bold text-ink tracking-tight mb-8 leading-[1.06]">
              We got tired of watching<br />
              <span className="gradient-text">good businesses drown in paperwork.</span>
            </h1>
          </Reveal>
          <Reveal variant="fade-up" delay={0.35} duration={0.9}>
            <p className="text-xl text-ink-3 max-w-2xl leading-relaxed">
              AutoTact started because we kept running into the same story — a cafe owner who made incredible coffee
              but spent every Sunday night at the kitchen table doing admin. A bookkeeper managing ten clients
              who was manually chasing every single payment reminder.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 border-t border-rule">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <Reveal variant="fade-up">
                <p className="eyebrow mb-6">Why we exist</p>
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8 leading-snug tracking-tight">
                  The automation tools existed. The problem was no one was translating them into small business reality.
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={0.1}>
                <p className="text-ink-3 leading-relaxed mb-5">
                  Large companies have had automated billing, scheduling, and follow-up systems for years.
                  But the people selling those tools weren't talking to busy cafe owners or solo bookkeepers
                  in Hamilton. They were talking to enterprise IT departments.
                </p>
              </Reveal>
              <Reveal variant="fade-up" delay={0.15}>
                <p className="text-ink-3 leading-relaxed mb-5">
                  We're a small NZ team. We sit down with you, learn how your business actually runs —
                  not how a textbook says it should — and build something that fits your real workflow.
                  Something built around how you work, not the other way around.
                </p>
              </Reveal>
              <Reveal variant="fade-up" delay={0.2}>
                <p className="text-ink-3 leading-relaxed mb-10">
                  When you need support, you're talking to someone based here. A Kiwi who picked up the phone.
                </p>
                <Link href="/enquiries" className="btn-primary inline-block">
                  Talk to us
                </Link>
              </Reveal>
            </div>

            {/* Testimonials + stats */}
            <Reveal variant="slide-left" delay={0.2} duration={1.1}>
              <Parallax speed={0.06}>
                <div className="space-y-px bg-rule rounded-xl overflow-hidden border border-rule">
                  <div className="bg-background p-8">
                    <p className="text-ink-3 text-sm leading-relaxed italic mb-4">
                      "I didn't know anything about automation software. I just told them what was taking up my time,
                      and they sorted it. Now I barely think about invoicing."
                    </p>
                    <p className="text-sm font-semibold text-ink">Dave T. — Auckland Cafe Owner</p>
                  </div>
                  <div className="bg-background p-8">
                    <p className="text-ink-3 text-sm leading-relaxed italic mb-4">
                      "As a bookkeeper I was sceptical — I thought I'd need to manage a complicated system.
                      There was nothing to manage. It just worked."
                    </p>
                    <p className="text-sm font-semibold text-ink">Sarah M. — Wellington Bookkeeper</p>
                  </div>
                  <div className="bg-surface-deep p-8 flex gap-10">
                    <div>
                      <p className="text-2xl font-bold text-ink tracking-tight">5+</p>
                      <p className="text-xs text-muted mt-1">businesses automated</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-ink tracking-tight">~12 hrs</p>
                      <p className="text-xs text-muted mt-1">saved per week</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-ink tracking-tight">100%</p>
                      <p className="text-xs text-muted mt-1">NZ based</p>
                    </div>
                  </div>
                </div>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 border-t border-rule">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fade-up">
            <p className="eyebrow mb-6">How we work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-16 tracking-tight">
              Three things we don't compromise on
            </h2>
          </Reveal>
          <StaggerContainer stagger={0.12} variant="fade-up" className="grid md:grid-cols-3 gap-px bg-rule">
            {values.map(({ title, description }) => (
              <article key={title} className="bg-background p-10 card-hover">
                <h3 className="text-lg font-semibold text-ink mb-4 tracking-tight">{title}</h3>
                <p className="text-ink-3 text-sm leading-relaxed">{description}</p>
              </article>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 border-t border-rule">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal variant="fade-up">
                <p className="eyebrow mb-6">The team</p>
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6 tracking-tight leading-snug">
                  A small team with a very specific focus
                </h2>
              </Reveal>
              <Reveal variant="fade-up" delay={0.1}>
                <p className="text-ink-3 leading-relaxed mb-5">
                  Automation is all we do. We've spent years learning what actually works for small hospitality
                  businesses and bookkeeping practices in New Zealand — the tools they use, the way their days run,
                  the admin that kills their evenings.
                </p>
              </Reveal>
              <Reveal variant="fade-up" delay={0.15}>
                <p className="text-ink-3 leading-relaxed">
                  Because of that, we move quickly, explain things in plain terms, and build things
                  you won't need a manual to operate.
                </p>
              </Reveal>
            </div>
            <Reveal variant="slide-left" delay={0.2} duration={1}>
              <div className="card-hover bg-surface rounded-xl p-8 border border-rule text-center max-w-xs">
                <div className="w-14 h-14 rounded-full bg-surface-2 border border-rule flex items-center justify-center mx-auto mb-5">
                  <span className="text-xl font-bold text-accent">N</span>
                </div>
                <p className="font-semibold text-ink text-sm">Nicholas W.</p>
                <p className="text-muted text-xs mt-1.5 leading-snug">Founder & Software Architect</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NZ callout */}
      <Reveal variant="scale-fade" duration={1}>
        <section className="pb-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-surface-deep border border-rule rounded-2xl p-14 text-center">
              <p className="text-3xl mb-5">🇳🇿</p>
              <h3 className="text-2xl font-bold text-ink mb-4 tracking-tight">Proudly based in Auckland</h3>
              <p className="text-ink-3 text-sm max-w-md mx-auto leading-relaxed mb-8">
                When you email or call, you get us. No waiting rooms, no ticketing systems, no runaround.
              </p>
              <Link href="/enquiries" className="btn-accent text-sm px-8 py-3 inline-block">
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  )
}
