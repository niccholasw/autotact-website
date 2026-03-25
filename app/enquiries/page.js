'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'

const businessTypes = [
  { value: '', label: 'What kind of business?' },
  { value: 'cafe', label: 'Cafe / Hospitality' },
  { value: 'accountant', label: 'Accountant' },
  { value: 'retail', label: 'Retail' },
  { value: 'other', label: 'Something else' },
]

const initialForm = { name: '', email: '', phone: '', businessType: '', message: '' }

export default function EnquiriesPage() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'What should we call you?'
    if (!form.email.trim()) {
      e.email = 'We need an email to get back to you.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "That email doesn't look right..."
    }
    if (!form.businessType) e.businessType = 'Pick the closest option.'
    if (!form.message.trim()) e.message = 'A sentence or two is fine, just give us a rough idea.'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    setLoading(true)
    await new Promise((res) => setTimeout(res, 1000))
    console.log('Enquiry submitted:', form)
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 dot-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal variant="fade-up" duration={0.7}>
            <p className="eyebrow mb-7">Get in touch</p>
          </Reveal>
          <Reveal variant="scale-fade" duration={1.1} delay={0.15}>
            <h1 className="text-5xl md:text-6xl font-bold text-ink tracking-tight mb-6 leading-[1.06]">
              Let's have a chat about<br />
              <span className="gradient-text">your week.</span>
            </h1>
          </Reveal>
          <Reveal variant="fade-up" delay={0.35} duration={0.9}>
            <p className="text-xl text-ink-3 max-w-lg leading-relaxed">
              Fill in the form and we'll be in touch within one business day to set up a free
              20-minute call. No pitch, no hard sell.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-28 border-t border-rule">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Form */}
            <Reveal variant="fade-up" delay={0.1} duration={0.9} className="lg:col-span-3">
              {submitted ? (
                <div className="bg-surface border border-rule rounded-2xl p-14 text-center">
                  <div className="w-14 h-14 rounded-full bg-surface-2 border border-rule flex items-center justify-center mx-auto mb-6">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <polyline points="20,6 9,17 4,12" className="stroke-accent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-ink mb-3 tracking-tight">Got it, {form.name.split(' ')[0]}.</h2>
                  <p className="text-ink-3 leading-relaxed mb-8">
                    We'll come back to you within one business day to organise a quick call.
                    Check your inbox — it'll come from nic@autotact.co.nz.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm) }}
                    className="btn-secondary text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="bg-surface border border-rule rounded-2xl p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-ink-3 mb-2 uppercase tracking-wider">
                        Your name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" autoComplete="name"
                        placeholder="Kevin Nguyen"
                        value={form.name} onChange={handleChange}
                        className="form-input"
                        aria-describedby={errors.name ? 'name-err' : undefined}
                      />
                      {errors.name && <p id="name-err" className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-ink-3 mb-2 uppercase tracking-wider">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" autoComplete="email"
                        placeholder="k.nguyen@baristabros.co.nz"
                        value={form.email} onChange={handleChange}
                        className="form-input"
                        aria-describedby={errors.email ? 'email-err' : undefined}
                      />
                      {errors.email && <p id="email-err" className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-ink-3 mb-2 uppercase tracking-wider">
                        Phone <span className="text-muted normal-case font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone" name="phone" type="tel" autoComplete="tel"
                        placeholder="+64 21 000 0000"
                        value={form.phone} onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="businessType" className="block text-xs font-medium text-ink-3 mb-2 uppercase tracking-wider">
                        Business type <span className="text-accent">*</span>
                      </label>
                      <select
                        id="businessType" name="businessType"
                        value={form.businessType} onChange={handleChange}
                        className="form-input"
                        aria-describedby={errors.businessType ? 'bt-err' : undefined}
                      >
                        {businessTypes.map(({ value, label }) => (
                          <option key={value} value={value} disabled={value === ''}>{label}</option>
                        ))}
                      </select>
                      {errors.businessType && <p id="bt-err" className="mt-1.5 text-xs text-red-400">{errors.businessType}</p>}
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-xs font-medium text-ink-3 mb-2 uppercase tracking-wider">
                      What's eating your time? <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={5}
                      placeholder="E.g. I run a small cafe in Auckland. I spend way too long on invoices each week and I'm always behind on supplier orders..."
                      value={form.message} onChange={handleChange}
                      className="form-input resize-none"
                      aria-describedby={errors.message ? 'msg-err' : undefined}
                    />
                    {errors.message && <p id="msg-err" className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <button
                    type="submit" disabled={loading}
                    className="btn-accent w-full text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending…
                      </span>
                    ) : 'Send message →'}
                  </button>
                  <p className="mt-3 text-xs text-muted text-center">
                    We reply within one business day. No spam, ever.
                  </p>
                </form>
              )}
            </Reveal>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-10">
              <Reveal variant="fade-up" delay={0.2}>
                <div>
                  <p className="eyebrow mb-5">Direct contact</p>
                  <ul className="space-y-5">
                    {[
                      { label: 'Email', value: 'nic@autotact.co.nz', href: 'mailto:nic@autotact.co.nz' },
                      { label: 'Phone', value: '+64 28 8515 0393', href: 'tel:+6490000000' },
                      { label: 'Location', value: 'Auckland, New Zealand', href: null },
                    ].map(({ label, value, href }) => (
                      <li key={label}>
                        <p className="eyebrow mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="text-ink font-medium text-sm hover:text-accent transition-colors">{value}</a>
                        ) : (
                          <p className="text-ink font-medium text-sm">{value}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal variant="fade-up" delay={0.3}>
                <div className="bg-surface border border-rule rounded-xl p-7">
                  <p className="eyebrow mb-5">What happens next</p>
                  <ol className="space-y-4">
                    {[
                      'We read your message and get back to you within one business day.',
                      "We'll suggest a time for a free 20-minute call.",
                      'On the call, we map out what automation would look like for your business and give you a quote.',
                      "If you're happy, we're live within days.",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-5 h-5 rounded-full bg-surface-2 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-rule">
                          {i + 1}
                        </span>
                        <p className="text-ink-3 text-sm leading-relaxed">{text}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <Reveal variant="fade-up" delay={0.35}>
                <div className="flex flex-wrap gap-2">
                  {['No lock-in contracts', '100% NZ based', 'Setup in days'].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-surface text-ink-3 border border-rule">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
