import { pillars } from '../data/content'
import Reveal from './Reveal'
import SectionTag from './SectionTag'

function Check() {
  return (
    <svg className="mt-0.5 shrink-0 text-brand-400" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pillars() {
  return (
    <section id="pillars" className="relative py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <SectionTag>_01 / our pillars</SectionTag>
        </Reveal>
        <Reveal as="h2" delay={60} className="heading mt-5 max-w-2xl text-4xl leading-[1.05] md:text-5xl">
          Engineered for growth.
          <br />
          <span className="text-brand-400">Built for scale.</span>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.num}
              delay={i * 90}
              className={`group relative overflow-hidden rounded-3xl border p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 ${
                p.featured
                  ? 'border-brand-500/40 bg-gradient-to-b from-brand-500/[0.10] to-ink-200 shadow-glow'
                  : 'border-line bg-ink-200/80 hover:border-line-strong hover:shadow-card'
              }`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[7rem] font-bold leading-none text-white/[0.04]"
              >
                {p.num}
              </div>
              <div className="relative">
                <span className="font-mono text-xs text-brand-300">{p.tag}</span>
                <h3 className="heading mt-3 text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{p.body}</p>
                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-white/85">
                      <Check />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
