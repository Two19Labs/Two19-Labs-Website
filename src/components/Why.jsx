import { why } from '../data/content'
import Reveal from './Reveal'
import SectionTag from './SectionTag'

const icons = [
  // bolt
  <path key="b" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  // shield
  <path key="s" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  // spark
  <g key="sp">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8L7 17M17 7l2.8-2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </g>,
  // team
  <g key="t">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </g>,
]

export default function Why() {
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <SectionTag>_04 / why us</SectionTag>
        </Reveal>
        <Reveal as="h2" delay={60} className="heading mt-5 max-w-2xl text-4xl leading-[1.05] md:text-5xl">
          Built for small teams.
          <br />
          <span className="text-brand-400">Engineered for results.</span>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="group rounded-3xl border border-line bg-ink-200/70 p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-line-strong hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/[0.08] text-brand-400">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {icons[i]}
                </svg>
              </div>
              <h4 className="heading mt-5 text-lg">{item.title}</h4>
              <p className="mt-2.5 text-sm leading-relaxed text-mute">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
