import { process } from '../data/content'
import Reveal from './Reveal'
import SectionTag from './SectionTag'

export default function Process() {
  return (
    <section id="process" className="relative border-y border-line bg-ink-100/60 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionTag>_02 / process</SectionTag>
            </Reveal>
            <Reveal as="h2" delay={60} className="heading mt-5 max-w-xl text-4xl leading-[1.05] md:text-5xl">
              Simple process.
              <br />
              <span className="text-brand-400">Powerful results.</span>
            </Reveal>
          </div>
          <Reveal as="p" delay={120} className="max-w-sm text-sm leading-relaxed text-mute">
            No bloated timelines, no endless meetings. A focused build loop that ships working systems
            in days, not quarters.
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-500/40 via-line to-transparent md:block"
          />
          {process.map((step, i) => (
            <Reveal key={step.num} delay={i * 110} className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/30 bg-ink-200 font-mono text-lg text-brand-300 shadow-glow">
                {step.num}
              </div>
              <h3 className="heading mt-6 text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
