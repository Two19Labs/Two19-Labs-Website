import { industriesRow1, industriesRow2 } from '../data/content'
import Reveal from './Reveal'

function Pill({ children }) {
  return (
    <span className="whitespace-nowrap rounded-pill border border-line px-7 py-3.5 text-[17px] font-medium text-ink transition-colors duration-300 hover:border-blue hover:bg-blue hover:text-white">
      {children}
    </span>
  )
}

function Row({ items, reverse }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-5">
      <div
        className="flex w-max gap-6 animate-scroll-ind"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {doubled.map((it, i) => (
          <Pill key={i}>{it}</Pill>
        ))}
      </div>
    </div>
  )
}

export default function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container-x">
        <Reveal as="p" className="tag">who we work with</Reveal>
        <Reveal as="h2" delay={70} className="sec-h">
          Industries we transform.
        </Reveal>
      </div>
      <div className="mt-10">
        <Row items={industriesRow1} />
        <Row items={industriesRow2} reverse />
      </div>
    </section>
  )
}
