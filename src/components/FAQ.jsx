import { useState } from 'react'
import { faqs, PHONE_HREF } from '../data/content'
import Reveal from './Reveal'
import SectionTag from './SectionTag'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionTag>_05 / faq</SectionTag>
            </Reveal>
            <Reveal as="h2" delay={60} className="heading mt-5 text-4xl leading-[1.05] md:text-5xl">
              Frequently
              <br />
              <span className="text-brand-400">Asked Questions</span>
            </Reveal>
          </div>
          <Reveal delay={120} className="flex flex-col items-start gap-3">
            <p className="text-sm text-mute">Have more questions? We're just a call away.</p>
            <a href={PHONE_HREF} className="btn btn-primary">
              Ask a question
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal
                key={f.q}
                delay={(i % 2) * 80}
                className={`rounded-2xl border transition-[border-color,background-color] duration-300 ${
                  isOpen ? 'border-brand-500/40 bg-ink-200' : 'border-line bg-ink-200/50'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <h4 className="text-base font-semibold text-white">{f.q}</h4>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-mute transition-transform duration-300 ${
                      isOpen ? 'rotate-45 border-brand-500/40 text-brand-300' : ''
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-mute">{f.a}</p>
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
