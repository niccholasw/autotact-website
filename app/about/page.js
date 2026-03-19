import Link from 'next/link'
import Navbar from '../../components/Navbar'

const values = [
  {
    title: 'We move fast',
    description:
      "We've had clients go from first call to live automations in 72 hours. There's no lengthy discovery phase or project management overhead - we learn what you need, build it, and get out of your way.",
    accent: 'border-l-accent',
  },
  {
    title: 'Plain English, always',
    description:
      "We don't talk about APIs, webhooks, or workflow orchestration unless you want to. We explain what we're building in terms of your actual day - 'when you finish a job in ServiceM8, your invoice goes out automatically.' That's it.",
    accent: 'border-l-accent-purple',
  },
  {
    title: 'We care if it actually works',
    description:
      "After we go live, we check in. Not once - regularly. If something's not firing correctly or you've changed how you work, we fix it. You're not buying a product and getting left alone.",
    accent: 'border-l-accent',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 dot-pattern overflow-hidden">
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ede9fe 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-ink tracking-tight mb-6 leading-tight">
            We got tired of watching<br />
            <span className="gradient-text">good businesses drown in paperwork.</span>
          </h1>
          <p className="text-xl text-ink-3 max-w-2xl leading-relaxed">
            AutoTact started because we kept running into the same story - a plumber who was brilliant on the tools
            but spent every Sunday night at the kitchen table doing admin. A bookkeeper managing ten clients
            who was manually chasing every single payment reminder.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 border-t border-rule">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6 leading-snug">
                The automation tools existed. The problem was no one was translating them into small business reality.
              </h2>
              <p className="text-ink-3 leading-relaxed mb-5">
                Large companies have had automated billing, scheduling, and follow-up systems for years.
                But the people selling those tools weren't talking to one-man trades operations or solo bookkeepers
                in Hamilton. They were talking to enterprise IT departments.
              </p>
              <p className="text-ink-3 leading-relaxed mb-5">
                We're a small NZ team. We sit down with you, learn how your business actually runs -
                not how a textbook says it should - and build something that fits your real workflow.
                Not a template. Not a cookie-cutter system.
              </p>
              <p className="text-ink-3 leading-relaxed mb-8">
                When you need support, you're talking to someone based here. Not a chatbot, not an overseas
                call centre. A Kiwi who picked up the phone.
              </p>
              <Link href="/enquiries" className="btn-primary inline-block">
                Talk to us
              </Link>
            </div>

            {/* Visual */}
            <div className="bg-surface rounded-2xl border border-rule p-10 space-y-6">
              <div className="border-l-4 border-accent pl-5">
                <p className="text-ink-3 text-sm leading-relaxed italic">
                  "I didn't know anything about automation software. I just told them what was taking up my time,
                  and they sorted it. Now I barely think about invoicing."
                </p>
                <p className="text-sm font-semibold text-ink mt-3">Dave T. - Auckland Plumber</p>
              </div>
              <div className="border-l-4 border-accent-purple pl-5">
                <p className="text-ink-3 text-sm leading-relaxed italic">
                  "As a bookkeeper I was sceptical - I thought I'd need to manage a complicated system.
                  There was nothing to manage. It just worked."
                </p>
                <p className="text-sm font-semibold text-ink mt-3">Sarah M. - Wellington Bookkeeper</p>
              </div>
              <div className="pt-4 border-t border-rule flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-ink">50+</p>
                  <p className="text-xs text-ink-3 mt-0.5">businesses automated</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink">~12 hrs</p>
                  <p className="text-xs text-ink-3 mt-0.5">saved per week</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink">100%</p>
                  <p className="text-xs text-ink-3 mt-0.5">NZ based</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface border-y border-rule">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-ink mb-12">How we work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ title, description, accent }) => (
              <article
                key={title}
                className={`card-hover bg-background rounded-xl p-8 border border-rule border-l-4 ${accent}`}
              >
                <h3 className="text-lg font-bold text-ink mb-3">{title}</h3>
                <p className="text-ink-3 text-sm leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-5">
                A small team with a very specific focus
              </h2>
              <p className="text-ink-3 leading-relaxed mb-5">
                We're not a generalist software agency that also does automation. This is all we do.
                We've spent years learning what actually works for trades businesses and bookkeeping practices
                in New Zealand - the tools they use, the way their days run, the admin that kills their evenings.
              </p>
              <p className="text-ink-3 leading-relaxed">
                That focus means we can move fast, speak your language, and build things that don't
                need a manual to operate.
              </p>
            </div>
            <div>
              <div className="card-hover bg-surface rounded-xl p-6 border border-rule text-center max-w-xs">
                <div className="w-14 h-14 rounded-full bg-accent-light border border-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">N</span>
                </div>
                <p className="font-semibold text-ink text-sm">Nicholas W.</p>
                <p className="text-ink-3 text-xs mt-1 leading-snug">Founder & Software Architect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NZ callout */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-ink rounded-2xl p-10 text-center">
            <p className="text-3xl mb-3">🇳🇿</p>
            <h3 className="text-xl font-bold text-white mb-3">Proudly based in Auckland</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed mb-6">
              When you email or call, you get us. No waiting rooms, no ticketing systems, no runaround.
            </p>
            <Link href="/enquiries" className="btn-accent text-sm px-6 py-3 inline-block">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rule bg-surface py-10">
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
