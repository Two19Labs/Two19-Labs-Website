import { useState } from 'react'
import { services } from '../data/content'
import Reveal from './Reveal'
import SectionTag from './SectionTag'

function FlowVisual() {
  const nodes = [
    { k: 'trigger', v: 'New Lead Form' },
    { k: 'action', v: 'WhatsApp Message' },
    { k: 'action', v: 'Add to Sheet' },
    { k: 'output', v: 'Follow-up Email' },
  ]
  return (
    <div className="flex flex-wrap items-center gap-2">
      {nodes.map((n, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="rounded-xl border border-line bg-ink-100 px-3 py-2">
            <span className="font-mono text-[0.62rem] uppercase tracking-wider text-brand-300">{n.k}</span>
            <p className="text-xs text-white/85">{n.v}</p>
          </div>
          {i < nodes.length - 1 && <span className="text-brand-500">→</span>}
        </div>
      ))}
    </div>
  )
}

function AiVisual() {
  return (
    <div className="space-y-2.5">
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-500 px-4 py-2 text-sm text-white">
        How do I track my order?
      </div>
      <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-line bg-ink-100 px-4 py-2.5 text-sm text-white/90">
        <span className="mb-1 inline-block rounded bg-brand-500/15 px-1.5 font-mono text-[0.6rem] text-brand-300">AI</span>
        <p>Your order #2847 is out for delivery and arrives by 4 PM today. Want a live map link?</p>
      </div>
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-500 px-4 py-2 text-sm text-white">
        Yes please!
      </div>
    </div>
  )
}

function DemoVisual() {
  return (
    <a
      href="https://darkbeancoffee.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-xl border border-line bg-ink-100 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[0.6rem] text-faint">darkbeancoffee.vercel.app</span>
      </div>
      <img src="/dark-bean-screenshot.png" alt="Dark Bean Coffee website demo" className="w-full" loading="lazy" />
    </a>
  )
}

function BundleVisual() {
  const items = [
    'Custom Website',
    'Lead Automation Pipeline',
    'AI Chatbot / Assistant',
    'Real-time Dashboard',
    'Ongoing Maintenance',
  ]
  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <div key={it} className="flex items-center gap-3 rounded-xl border border-line bg-ink-100 px-4 py-2.5">
          <span className="font-mono text-xs text-brand-300">{String(i + 1).padStart(2, '0')}</span>
          <span className="text-sm text-white/90">{it}</span>
        </div>
      ))}
    </div>
  )
}

const visuals = [<FlowVisual />, <AiVisual />, <DemoVisual />, <BundleVisual />]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <SectionTag>_03 / services</SectionTag>
        </Reveal>
        <Reveal as="h2" delay={60} className="heading mt-5 max-w-2xl text-4xl leading-[1.05] md:text-5xl">
          Everything you need to <span className="text-brand-400">work smarter.</span>
        </Reveal>

        <div className="mt-14 space-y-4">
          {services.map((s, i) => {
            const open = active === i
            return (
              <Reveal
                key={s.title}
                delay={i * 70}
                className={`overflow-hidden rounded-3xl border transition-[border-color,box-shadow] duration-300 ${
                  open ? 'border-brand-500/40 bg-ink-200 shadow-card' : 'border-line bg-ink-200/60'
                }`}
              >
                <button
                  onClick={() => setActive(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left md:px-8"
                >
                  <h3 className="heading flex items-center gap-3 text-xl md:text-2xl">
                    {s.title}
                    {s.flagship && (
                      <span className="rounded-full border border-brand-500/40 bg-brand-500/10 px-2.5 py-0.5 font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-brand-300">
                        Flagship
                      </span>
                    )}
                  </h3>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-mute transition-transform duration-300 ${
                      open ? 'rotate-180 border-brand-500/40 text-brand-300' : ''
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 px-6 pb-8 md:grid-cols-2 md:px-8 md:pb-10">
                      <div>
                        <h4 className="heading text-lg text-white">{s.heading}</h4>
                        <p className="mt-3 text-sm leading-relaxed text-mute">{s.desc}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {s.tags.map((t) => (
                            <span key={t} className="chip">
                              {t}
                            </span>
                          ))}
                        </div>
                        <a
                          href={s.cta.href}
                          target={s.cta.href.startsWith('http') ? '_blank' : undefined}
                          rel={s.cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="btn btn-primary mt-7"
                        >
                          {s.cta.label}
                        </a>
                      </div>
                      <div className="flex items-center justify-center rounded-2xl border border-line bg-ink-100/60 p-5">
                        {visuals[i]}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
