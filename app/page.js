import Link from 'next/link'
import Navbar from '../components/Navbar'
import TypingSection from '../components/TypingSection'

const steps = [
  {
    number: '01',
    title: '20-minute call',
    description:
      'We ask about your week - what tools you use, which tasks eat your evenings, and where the frustration is. No pitch, just listening.',
  },
  {
    number: '02',
    title: 'We build it',
    description:
      'Our team sets up your automations. You won\'t need to touch any software or watch a training video. We handle it and show you how it runs.',
  },
  {
    number: '03',
    title: 'You get your time back',
    description:
      'Most clients are live within a few days. The automations run quietly in the background and you stop thinking about admin.',
  },
]

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden dot-pattern">
        {/* Decorative blobs - very subtle on white */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #dbeafe 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 -left-16 w-72 h-72 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ede9fe 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-light border border-blue-100 text-sm text-accent font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Built for Small NZ Business Owners Like You.
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink mb-6 leading-[1.08]">
            The admin will handle<br />
            <span className="gradient-text">itself from here.</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-3 max-w-2xl mx-auto mb-10 leading-relaxed">
            AutoTact automates the invoicing, follow-ups, and scheduling that eat your evenings -
            so you can actually knock off when the job is done.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/enquiries" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
              Book a free chat
            </Link>
            <Link href="/about" className="btn-secondary text-base px-8 py-3.5 w-full sm:w-auto">
              How it works
            </Link>
          </div>

          <p className="mt-6 text-sm text-ink-3">
            20-minute call &middot; No obligation &middot; 100% NZ team
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-rule bg-surface py-12">
        <div className="max-w-7xl mx-auto px-6">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '5+', label: 'NZ businesses' },
              { value: '~12 hrs', label: 'saved per week, on average' },
              { value: '4.9 / 5', label: 'client rating' },
              { value: 'No', label: 'lock-in contracts' },
            ].map(({ value, label }) => (
              <div key={label}>
                <dt className="text-3xl font-bold text-ink mb-1">{value}</dt>
                <dd className="text-sm text-ink-3">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <TypingSection />

      {/* How it works */}
      <section className="py-24 bg-surface border-y border-rule">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
              Up and running in days
            </h2>
            <p className="text-ink-3 text-lg max-w-lg">
              Not months. There's no IT team involved on your side - we sort everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map(({ number, title, description }) => (
              <div key={number}>
                <span className="text-5xl font-bold text-rule select-none">{number}</span>
                <h3 className="text-xl font-bold text-ink mt-3 mb-2">{title}</h3>
                <p className="text-ink-3 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-5">
            Reckon it'd work for your business?
          </h2>
          <p className="text-ink-3 text-lg mb-10 leading-relaxed">
            Most of the people who book a call tell us they wish they'd done it six months earlier.
            It's 20 minutes and there's no obligation to go any further.
          </p>
          <Link href="/enquiries" className="btn-accent text-base px-10 py-4 inline-block">
            Book a free chat →
          </Link>
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
