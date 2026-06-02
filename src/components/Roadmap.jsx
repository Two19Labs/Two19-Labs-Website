import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// One stacking card. It pins (CSS sticky) at a staggered top offset so cards
// pile up as you scroll; the framer scale/lift makes a covered card recede
// slightly behind the one landing on top of it.
function StackCard({ step, i, total, scrollYProgress }) {
  const seg = 1 / total
  const isLast = i === total - 1
  // While the NEXT card slides up to cover this one, shrink + dim this one.
  // Input range must stay within [0,1] (framer requirement).
  const start = Math.min((i + 0.4) * seg, 0.999)
  const end = Math.min((i + 1.2) * seg, 1)

  const scale = useTransform(scrollYProgress, [start, end], isLast ? [1, 1] : [1, 0.9])
  const opacity = useTransform(scrollYProgress, [start, end], isLast ? [1, 1] : [1, 0.55])

  return (
    <div
      className="sticky"
      style={{ top: `calc(110px + ${i * 18}px)` }}
    >
      <motion.article
        style={{ scale, opacity, transformOrigin: 'center top' }}
        className="relative mx-auto flex w-full max-w-[680px] flex-col overflow-hidden rounded-band border-l-4 border-blue bg-ink p-7 text-white md:p-10"
      >
        {/* blue glow corner */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(37,64,255,0.4), transparent 70%)' }}
        />
        <div
          className="relative mb-5 font-mono font-semibold leading-none text-blue md:mb-6"
          style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}
        >
          {step.n}
        </div>
        <h4 className="relative mb-3 text-[22px] font-semibold leading-[1.15] tracking-tight2 md:text-[30px]">
          {step.title}
        </h4>
        <p className="relative max-w-[480px] text-[15px] leading-[1.65] text-[#9a9aa6] md:text-base">
          {step.body}
        </p>
      </motion.article>
    </div>
  )
}

// Vertical sticky-stacking roadmap (gruhas "Spotlight Company" style): scroll
// down and each step card slides up and stacks on top of the previous one.
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
