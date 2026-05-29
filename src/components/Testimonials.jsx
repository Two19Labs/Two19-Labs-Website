import { useState } from 'react'
import { testimonials } from '../data/content'
import Reveal from './Reveal'

function Stars() {
  return (
    <div className="flex gap-1 text-brand-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section id="testimonials" className="relative border-y border-line bg-ink-100/60 py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <span className="chip border-brand-500/30 bg-brand-500/[0.06] text-brand-200">
            ✦ Trusted by businesses
          </span>
          <h2 className="heading mt-6 text-4xl leading-[1.05] md:text-5xl">
            Loved by
            <br />
            <span className="text-brand-400">our clients.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-mute">
            Real results from real businesses that made the switch to smarter operations with Two19 Labs.
          </p>
          <div className="mt-8 flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
                  i === active ? 'w-8 bg-brand-500' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="card relative p-8 shadow-card md:p-10">
            <div className="font-serif text-6xl leading-none text-brand-500/40">“</div>
            <p className="-mt-4 text-lg leading-relaxed text-white/90 md:text-xl">{t.quote}</p>
            <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
              <img
                src={t.img}
                alt={t.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-500/30"
                loading="lazy"
              />
              <div className="flex-1">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-sm text-faint">{t.role}</div>
              </div>
              <Stars />
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-brand-500/20 blur-3xl"
          />
        </Reveal>
      </div>
    </section>
  )
}
