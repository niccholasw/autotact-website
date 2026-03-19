'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'

const businessTypes = [
  { value: '', label: 'What kind of business?' },
  { value: 'tradie-plumber', label: 'Tradie - Plumber' },
  { value: 'tradie-electrician', label: 'Tradie - Electrician' },
  { value: 'tradie-builder', label: 'Tradie - Builder' },
  { value: 'tradie-landscaper', label: 'Tradie - Landscaper' },
  { value: 'tradie-other', label: 'Tradie - Other' },
  { value: 'bookkeeper', label: 'Bookkeeper' },
  { value: 'accountant', label: 'Accountant' },
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
      e.email = 'That email doesn\'t look right.'
    }
    if (!form.businessType) e.businessType = 'Pick the closest option.'
    if (!form.message.trim()) e.message = 'A sentence or two is fine - just give us a rough idea.'
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
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 dot-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-ink tracking-tight mb-5 leading-tight">
            Let's have a chat about<br />
            <span className="gradient-text">your week.</span>
          </h1>
          <p className="text-xl text-ink-3 max-w-lg leading-relaxed">
            Fill in the form and we'll be in touch within one business day to set up a free
            20-minute call. No pitch, no hard sell.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-surface rounded-2xl border border-rule p-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent-light border border-blue-100 flex items-center justify-center mx-auto mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <polyline points="20,6 9,17 4,12" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-ink mb-3">Got it, {form.name.split(' ')[0]}.</h2>
                  <p className="text-ink-3 leading-relaxed mb-6">
                    We'll come back to you within one business day to organise a quick call.
                    Check your inbox - it'll come from nic@autotact.co.nz.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm) }}
                    className="btn-secondary text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="bg-surface rounded-2xl border border-rule p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ink-2 mb-1.5">
                        Your name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" autoComplete="name"
                        placeholder="Dave Smith"
                        value={form.name} onChange={handleChange}
                        className="form-input"
                        aria-describedby={errors.name ? 'name-err' : undefined}
                      />
                      {errors.name && <p id="name-err" className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink-2 mb-1.5">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" autoComplete="email"
                        placeholder="dave@plumbingco.co.nz"
                        value={form.email} onChange={handleChange}
                        className="form-input"
                        aria-describedby={errors.email ? 'email-err' : undefined}
                      />
                      {errors.email && <p id="email-err" className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-ink-2 mb-1.5">
                        Phone <span className="text-ink-3 font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone" name="phone" type="tel" autoComplete="tel"
                        placeholder="+64 21 000 0000"
                        value={form.phone} onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-ink-2 mb-1.5">
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
                      {errors.businessType && <p id="bt-err" className="mt-1.5 text-xs text-red-500">{errors.businessType}</p>}
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-ink-2 mb-1.5">
                      What's eating your time? <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={5}
                      placeholder="E.g. I'm a plumber in Auckland. I spend way too long on invoices each week and I'm always forgetting to follow up on quotes..."
                      value={form.message} onChange={handleChange}
                      className="form-input resize-none"
                      aria-describedby={errors.message ? 'msg-err' : undefined}
                    />
                    {errors.message && <p id="msg-err" className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit" disabled={loading}
                    className="btn-accent w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
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
                  <p className="mt-3 text-xs text-ink-3 text-center">
                    We reply within one business day. No spam, ever.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-ink mb-4">Get in touch directly</h2>
                <ul className="space-y-4">
                  {[
                    { label: 'Email', value: 'nic@autotact.co.nz', href: 'mailto:nic@autotact.co.nz' },
                    { label: 'Phone', value: '+64 9 000 0000', href: 'tel:+6490000000' },
                    { label: 'Location', value: 'Auckland, New Zealand', href: null },
                  ].map(({ label, value, href }) => (
                    <li key={label}>
                      <p className="text-xs text-ink-3 uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-ink font-medium text-sm hover:text-accent transition-colors">{value}</a>
                      ) : (
                        <p className="text-ink font-medium text-sm">{value}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface rounded-xl border border-rule p-6">
                <h3 className="text-sm font-bold text-ink mb-4">What happens after you send this</h3>
                <ol className="space-y-3">
                  {[
                    'We read your message and get back to you within one business day.',
                    'We\'ll suggest a time for a free 20-minute call.',
                    'On the call, we map out what automation would look like for your business and give you a quote.',
                    'If you\'re happy, we\'re live within days.',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent-light text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-ink-3 text-sm leading-relaxed">{text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-wrap gap-2">
                {['No lock-in contracts', '100% NZ based', 'Setup in days'].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-surface-2 text-ink-3 border border-rule">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rule bg-surface py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-3">
          <span className="font-bold text-ink">AutoTact</span>
          <p>© {new Date().getFullYear()} AutoTact Ltd. Auckland, New Zealand.</p>
          <a href="mailto:nic@autotact.co.nz" className="hover:text-ink transition-colors">
            nic@autotact.co.nz
          </a>
        </div>
      </footer>
    </div>
  )
}
