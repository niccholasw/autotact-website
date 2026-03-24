import Reveal from './Reveal'

export default function Footer() {
  return (
    <Reveal variant="fade-in" duration={0.6}>
      <footer className="border-t border-rule bg-surface-deep py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <span className="font-semibold text-ink-3">AutoTact</span>
          <p>© {new Date().getFullYear()} AutoTact Ltd. Auckland, New Zealand.</p>
          <a href="mailto:nic@autotact.co.nz" className="hover:text-ink-2 transition-colors">
            nic@autotact.co.nz
          </a>
        </div>
      </footer>
    </Reveal>
  )
}
