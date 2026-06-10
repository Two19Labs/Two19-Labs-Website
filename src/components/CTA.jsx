import Reveal from './Reveal'
import { PHONE } from '../data/content'

export default function CTA() {
  return (
    <Reveal data-nav-dark className="mx-4 rounded-band bg-ink px-6 py-16 text-center text-white sm:mx-6 md:mx-12 md:px-12 md:py-[90px]">
      <h2
        className="mb-6 tracking-tight2"
        style={{ fontSize: 'clamp(34px,6vw,86px)', lineHeight: 1 }}
      >
        <span className="accent-italic" style={{ fontSize: '1.1em' }}>
          ready to be unstoppable?
        </span>
      </h2>
      <p className="mb-10 text-lg text-[#9a9aa6]">Let's build something extraordinary together.</p>
      <a href={`tel:${PHONE}`} className="btn-primary cta-btn">
        <span>Book a discovery call</span> <span className="arrow">↗</span>
      </a>
    </Reveal>
  )
}
