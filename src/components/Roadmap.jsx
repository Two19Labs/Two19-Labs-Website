import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Subtle, deterministic tilt per card — the "stacked deck" look. Straightens on
// hover. Kept small so rotated corners never break the column on narrow screens.
const TILTS = [-2.4, 1.8, -1.4, 2.2, -1, 1.6, -2]

// One stacking card. The sticky wrapper pins it at a staggered top offset so the
// cards pile up; framer scale/opacity makes a covered card recede behind the one
// landing on top. Rotation sits on the inner <article> so it never collides with
// framer's transform on the motion layer.
function StackCard({ step, i, total, scrollYProgress }) {
  const seg = 1 / total
  const isLast = i === total - 1
  const start = Math.min((i + 0.4) * seg, 0.999)
  const end = Math.min((i + 1.2) * seg, 1)

  const scale = useTransform(scrollYProgress, [start, end], isLast ? [1, 1] : [1, 0.9])
  const opacity = useTransform(scrollYProgress, [start, end], isLast ? [1, 1] : [1, 0.5])

  const tilt = TILTS[i % TILTS.length]

  return (
    <div className="sticky" style={{ top: `calc(110px + ${i * 18}px)` }}>
      <motion.div
        style={{ scale, opacity, transformOrigin: 'center top' }}
        className="mx-auto w-full max-w-[680px]"
      >
        <article
          className="group/card relative flex flex-col overflow-hidden rounded-band bg-ink p-8 text-white [transition:transform_.5s_cubic-bezier(.34,1.56,.64,1),box-shadow_.5s_ease] will-change-transform hover:!rotate-0 hover:-translate-y-1.5 md:p-11"
          style={{
            transform: `rotate(${tilt}deg)`,
            boxShadow:
              '0 28px 60px -24px rgba(37,64,255,0.45), 0 8px 22px -12px rgba(0,0,0,0.55)',
          }}
        >
          {/* blue glow corner */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(37,64,255,0.45), transparent 70%)' }}
          />
          {/* top sheen */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
          />

          <div className="relative mb-6 flex items-center gap-4">
            <span
              className="font-mono font-semibold leading-none text-blue"
              style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}
            >
              {step.n}
            </span>
            <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
              {`step ${i + 1} / ${total}`}
            </span>
          </div>

          <h4 className="relative mb-3 text-[22px] font-semibold leading-[1.15] tracking-tight2 md:text-[30px]">
            {step.title}
          </h4>
          <p className="relative max-w-[480px] text-[15px] leading-[1.7] text-[#9a9aa6] md:text-base">
            {step.body}
          </p>
        </article>
      </motion.div>
    </div>
  )
}

// Vertical sticky-stacking roadmap: scroll down and each step card slides up,
// tilts into the deck, and stacks on top of the previous one.
export default function Roadmap({ steps }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  return (
    // gap between wrappers = scroll distance before the next card covers this one
    <div ref={ref} className="mt-10 flex flex-col gap-[26vh] pb-[26vh] md:mt-16">
      {steps.map((step, i) => (
        <StackCard
          key={step.n}
          step={step}
          i={i}
          total={steps.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  )
}
