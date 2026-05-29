import { PHONE_HREF, stats } from '../data/content'
import Reveal from './Reveal'

const tags = ['Automation', 'Artificial Intelligence', 'Web Development']

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* layered radial glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% -5%, rgba(59,109,255,0.22), transparent 60%), radial-gradient(40% 40% at 85% 20%, rgba(90,126,255,0.12), transparent 60%), radial-gradient(50% 50% at 10% 30%, rgba(43,83,230,0.10), transparent 60%)',
        }}
      />
      {/* grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(70% 60% at 50% 20%, black, transparent 80%)',
        }}
      />

      <div className="container-x relative">
        <Reveal className="flex flex-wrap justify-center gap-3">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-brand-500/30 bg-brand-500/[0.06] px-4 py-1.5 font-mono text-xs text-brand-200"
            >
              {t}
            </span>
          ))}
        </Reveal>

        <Reveal
          as="h1"
          delay={80}
          className="heading mx-auto mt-8 max-w-5xl text-center text-[2.8rem] leading-[1.02] text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          One Studio. Three Pillars.
          <br />
          <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-600 bg-clip-text text-transparent">
            Endless Efficiency.
          </span>
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-mute md:text-lg"
        >
          We engineer advanced automations, integrate custom AI, and build digital platforms for
          forward-thinking businesses. Stop operating. Start scaling.
        </Reveal>

        <Reveal delay={240} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#services" className="btn btn-primary px-7 py-3.5 text-[0.95rem]">
            Explore our solutions
          </a>
          <a href={PHONE_HREF} className="btn btn-ghost px-7 py-3.5 text-[0.95rem]">
            Book a consultation →
          </a>
        </Reveal>

        <Reveal
          delay={320}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-100 px-5 py-6 text-center">
              <div className="heading text-3xl text-white md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-faint">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
