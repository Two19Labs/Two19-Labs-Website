import { useEffect, useState } from 'react'

export default function Hero() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay) => ({
    opacity: show ? 1 : 0,
    transform: show ? 'none' : 'translateY(20px)',
    transition: 'opacity 1s ease, transform 1s cubic-bezier(0.16,1,0.3,1)',
    transitionDelay: `${delay}ms`,
  })

  const Line = ({ children, accent }) => (
    <span className="block overflow-hidden">
      <span
        className={`block ${accent ? 'text-blue' : ''}`}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(110%)',
          transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {children}
      </span>
    </span>
  )

  return (
    <header
      id="home"
      className="relative flex min-h-screen flex-col justify-center px-6 pb-[60px] pt-[120px] md:px-12"
    >
      <p
        className="mb-10 max-w-[560px] font-mono text-[13px] leading-[1.7] text-ink-soft"
        style={fade(100)}
      >
        "The businesses that <span className="text-blue">automate today</span> are the ones that{' '}
        <span className="text-blue">dominate tomorrow</span>."
      </p>

      <h1
        className="mb-[38px] font-bold tracking-tightest"
        style={{ fontSize: 'clamp(42px,9vw,140px)', lineHeight: 0.92 }}
      >
        <Line>Build smarter.</Line>
        <Line accent>Scale faster.</Line>
        <Line>Transform fully.</Line>
      </h1>

      <p
        className="mb-11 max-w-[600px] font-normal leading-[1.6] text-ink-soft"
        style={{ ...fade(650), fontSize: 'clamp(15px,2vw,19px)' }}
      >
        Two19 Labs is a technology &amp; digital transformation agency. We build custom software, AI
        automations, and internal tools from scratch — systems that eliminate the manual work killing
        your team's time. No templates. Ever.
      </p>

      <div className="flex flex-wrap gap-4" style={fade(800)}>
        <button className="btn-primary">
          <span>Start a project</span> <span className="arrow">↗</span>
        </button>
        <button className="btn-ghost">Explore services</button>
      </div>
    </header>
  )
}
