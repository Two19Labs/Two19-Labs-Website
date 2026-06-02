import { process } from '../data/content'
import Reveal from './Reveal'
import Roadmap from './Roadmap'

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

        <Roadmap steps={process} />
      </div>
    </section>
  )
}
