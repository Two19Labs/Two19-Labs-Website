import { useState } from 'react'
import { faqs } from '../data/content'
import Reveal from './Reveal'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section">
      <div className="container-x">
        <Reveal as="p" className="tag">frequently asked questions</Reveal>
        <Reveal as="h2" delay={70} className="sec-h">
          Questions we get asked.
        </Reveal>

        <Reveal className="mt-14 max-w-[900px]">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-[30px] text-left font-medium tracking-tight text-ink"
                  style={{ fontSize: 'clamp(18px,2.4vw,24px)' }}
                >
                  {f.q}
                  <span
                    className="shrink-0 text-[26px] text-blue transition-transform duration-[400ms]"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[760px] pb-[30px] text-base leading-[1.7] text-ink-soft">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
