import { process } from '../data/content'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container-x">
        <Reveal as="p" className="tag">how we work</Reveal>
        <Reveal as="h2" delay={70} className="sec-h">
          A process built for precision.
        </Reveal>
        <Reveal as="p" delay={140} className="sec-p mt-8">
          Every engagement follows a structured process — from the first discovery call through to
          long-term partnership.
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line md:mt-[72px] md:grid-cols-2">
          {process.map((step, i) => (
            <Reveal
              key={step.n}
              delay={(i % 2) * 70}
              className="flex gap-5 bg-paper p-7 transition-colors duration-[400ms] hover:bg-card md:gap-6 md:p-10"
            >
              <div className="min-w-9 font-mono text-[15px] font-medium text-blue">{step.n}</div>
              <div>
                <h4 className="mb-2.5 text-xl font-semibold tracking-tight">{step.title}</h4>
                <p className="text-sm leading-[1.6] text-ink-soft">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
