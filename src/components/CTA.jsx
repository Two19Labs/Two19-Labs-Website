import Reveal from './Reveal'

export default function CTA() {
  return (
    <Reveal className="mx-4 rounded-band bg-ink px-6 py-16 text-center text-white sm:mx-6 md:mx-12 md:px-12 md:py-[90px]">
      <h2
        className="mb-6 font-bold tracking-tight2"
        style={{ fontSize: 'clamp(34px,6vw,86px)', lineHeight: 1 }}
      >
        Ready to be
        <br />
        unstoppable?
      </h2>
      <p className="mb-10 text-lg text-[#9a9aa6]">Let's build something extraordinary together.</p>
      <button className="btn-primary cta-btn">
        <span>Book a discovery call</span> <span className="arrow">↗</span>
      </button>
    </Reveal>
  )
}
