'use client'

import { useEffect, useState } from 'react'

const workflowSteps = [
  { label: 'Job completed' },
  { label: 'Invoice generated' },
  { label: 'Client notified' },
  { label: 'Payment received' },
]

export default function AutomationVisual() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div
        className="absolute -inset-4 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative bg-surface-elevated border border-rule rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-rule">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-[11px] font-medium text-muted uppercase tracking-wider font-sans">
              Live workflow
            </span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-surface-2" />
            <div className="w-2 h-2 rounded-full bg-surface-2" />
            <div className="w-2 h-2 rounded-full bg-surface-2" />
          </div>
        </div>

        <div className="p-5 space-y-0">
          {workflowSteps.map((step, i) => {
            const isHighlighted = i <= activeStep
            return (
              <div key={step.label}>
                <div className="flex items-center gap-3.5 py-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-500 ${
                      isHighlighted
                        ? 'bg-accent/15 text-accent border border-accent/30'
                        : 'bg-surface-2 text-muted border border-rule'
                    }`}
                  >
                    {isHighlighted ? '✓' : (i + 1)}
                  </div>
                  <span className={`text-sm font-sans transition-colors duration-500 ${isHighlighted ? 'text-ink-2' : 'text-muted'}`}>
                    {step.label}
                  </span>
                  {i === activeStep && (
                    <span className="ml-auto text-[10px] text-accent font-mono font-sans">now</span>
                  )}
                </div>
                {i < workflowSteps.length - 1 && (
                  <div className="ml-[13px] h-3 flex items-center">
                    <div className={`w-px h-full transition-colors duration-500 ${i < activeStep ? 'bg-accent/30' : 'bg-rule'}`} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="px-5 py-3.5 border-t border-rule flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
            <span className="text-[11px] text-muted font-sans">Automated — no action needed</span>
          </div>
          <span className="text-[10px] text-muted font-mono font-sans">autotact</span>
        </div>
      </div>

      <div className="absolute -top-3 -right-3 bg-surface border border-rule rounded-lg px-3 py-2 shadow-card" style={{ animation: 'floatBadge 3s ease-in-out infinite' }}>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#22c55e]/15 flex items-center justify-center">
            <span className="text-[8px] text-[#22c55e]">$</span>
          </div>
          <div>
            <p className="text-[10px] text-ink-2 font-sans font-medium">Payment received</p>
            <p className="text-[9px] text-muted font-sans">$1,240.00 — 2 min ago</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-2 -left-3 bg-surface border border-rule rounded-lg px-3 py-2 shadow-card" style={{ animation: 'floatBadge 3s ease-in-out 1.5s infinite' }}>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center">
            <span className="text-[8px] text-accent">✉</span>
          </div>
          <div>
            <p className="text-[10px] text-ink-2 font-sans font-medium">Invoice sent</p>
            <p className="text-[9px] text-muted font-sans">INV-0047 — Beans Delivery</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  )
}
