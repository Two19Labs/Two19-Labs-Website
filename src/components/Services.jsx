import { services } from '../data/content'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <Reveal as="p" className="tag">our services</Reveal>
        <Reveal as="h2" delay={70} className="sec-h">
          Everything you need to build &amp; scale.
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 md:mt-[72px] lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.n}
              delay={(i % 3) * 70}
              className="group relative flex min-h-[200px] cursor-pointer flex-col overflow-hidden bg-paper p-7 transition-colors duration-500 hover:bg-card md:min-h-[280px] md:p-10"
            >
              <div className="font-mono text-[13px] text-blue">{s.n}</div>
              <span className="pointer-events-none absolute right-7 top-8 text-xl text-blue opacity-0 transition-[opacity,transform] duration-300 [transform:translate(-8px,8px)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 md:right-9 md:top-10">
                ↗
              </span>
              <h3 className="mb-3.5 mt-9 text-[22px] font-semibold leading-[1.1] tracking-tight2 md:mt-[60px] md:text-[25px]">
                {s.title}
              </h3>
              <p className="text-sm leading-[1.6] text-ink-soft">{s.body}</p>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue transition-[width] duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
