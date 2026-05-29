import { useEffect, useRef, useState } from 'react'

// Counts from 0 to `end` once the element scrolls into view (eased, ~1.6s).
export function useCountUp(end, { suffix = '', duration = 1600 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setValue(end)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let t0 = null
          const tick = (t) => {
            if (!t0) t0 = t
            const p = Math.min((t - t0) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(Math.round(eased * end))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          obs.unobserve(entry.target)
        }
      },
      { threshold: 0.6 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [end, duration])

  return [ref, `${value}${suffix}`]
}
