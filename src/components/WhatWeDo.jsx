import { stats } from '../data/content'
import Reveal from './Reveal'
import { useCountUp } from '../hooks/useCountUp'

function Stat({ count, suffix, label, delay }) {
  const [ref, value] = useCountUp(count, { suffix })
  return (
    <Reveal delay={delay} className="stat">
      <div
        ref={ref}
        className="font-bold leading-none tracking-tightest text-blue"
        style={{ fontSize: 'clamp(56px,9vw,120px)' }}
      >
        {value}
      </div>
      <div className="mt-3.5 max-w-[240px] text-base text-ink-soft">{label}</div>
    </Reveal>
  )
}

export default function WhatWeDo() {
  return (
    <section id="what" className="section">
      <div className="container-x">
        <Reveal as="p" className="tag">what we do</Reveal>
        <Reveal as="h2" delay={70} className="sec-h">
          We make your business unstoppable.
        </Reveal>
        <Reveal as="p" delay={140} className="sec-p mt-8">
          We design, develop, and maintain fully custom software solutions that align precisely with
          your operations and strategic objectives — no off-the-shelf compromises.
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3 md:gap-12">
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
