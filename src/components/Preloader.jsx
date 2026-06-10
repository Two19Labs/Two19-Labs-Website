import { useEffect, useLayoutEffect, useRef, useState } from 'react'

// Brand intro preloader: counts 00 → 100, lifts away, removes from DOM.
// Locks body scroll until lift completes. Respects prefers-reduced-motion.
export default function Preloader() {
  const [pct, setPct] = useState(0)
  const [lift, setLift] = useState(false)
  const [removed, setRemoved] = useState(false)
  const barRef = useRef(null)

  // Lock scroll *before* paint so the page never has a chance to scroll.
  useLayoutEffect(() => {
    document.documentElement.classList.add('scroll-locked')
    window.scrollTo(0, 0)
    return () => document.documentElement.classList.remove('scroll-locked')
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Belt-and-braces: kill wheel, touch, keyboard scroll while locked.
    const stop = (e) => { e.preventDefault() }
    const stopKeys = (e) => {
      const k = e.key
      if (k === ' ' || k === 'PageDown' || k === 'PageUp' || k === 'ArrowDown' || k === 'ArrowUp' || k === 'Home' || k === 'End') {
        e.preventDefault()
      }
    }
    window.addEventListener('wheel', stop, { passive: false })
    window.addEventListener('touchmove', stop, { passive: false })
    window.addEventListener('keydown', stopKeys, { passive: false })

    const unlock = () => {
      document.documentElement.classList.remove('scroll-locked')
      window.removeEventListener('wheel', stop)
      window.removeEventListener('touchmove', stop)
      window.removeEventListener('keydown', stopKeys)
    }

    const finish = () => {
      setLift(true)
      document.body.classList.add('loaded')
      window.dispatchEvent(new CustomEvent('site:loaded'))
      // Hold the lock 1s after the hero starts becoming visible — gives the
      // intro a clean reveal before the user can scroll away.
      setTimeout(unlock, 1000)
      setTimeout(() => setRemoved(true), 700)
    }

    if (reduce) {
      setPct(100)
      finish()
      return unlock
    }

    const t0 = performance.now()
    const dur = 700
    let raf = 0
    const tick = (t) => {
      const prog = Math.min(1, (t - t0) / dur)
      const ease = 1 - Math.pow(1 - prog, 2.4)
      setPct(Math.round(ease * 100))
      if (prog < 1) raf = requestAnimationFrame(tick)
      else setTimeout(finish, 80)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      unlock()
    }
  }, [])

  if (removed) return null

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[9000] flex items-end justify-between bg-ink text-[#f0efea]"
      style={{
        padding: 'clamp(24px, 4vw, 56px)',
        transform: lift ? 'translateY(-101%)' : 'translateY(0)',
        transition: 'transform 0.65s cubic-bezier(.2,.65,.2,1)',
        willChange: 'transform',
      }}
    >
      {/* Left — brand wordmark */}
      <div
        className="overflow-hidden font-sans uppercase"
        style={{
          fontWeight: 900,
          letterSpacing: '-0.03em',
          lineHeight: 0.9,
          fontSize: 'clamp(34px, 6vw, 84px)',
        }}
      >
        <span
          className="block"
          style={{
            transform: lift ? 'translateY(0)' : 'translateY(0)',
            animation: 'preloaderUp 0.55s cubic-bezier(.2,.65,.2,1) 0.05s both',
          }}
        >
          Two<span style={{ color: '#2540ff' }}>19</span>
          <br />
          Labs<span style={{ color: '#2540ff' }}>.</span>
        </span>
      </div>

      {/* Right — count + bar */}
      <div
        className="flex flex-col items-end gap-2.5 font-mono"
        style={{
          fontSize: 'clamp(13px, 1.4vw, 16px)',
          letterSpacing: '0.14em',
        }}
      >
        <span>{String(pct).padStart(2, '0')}</span>
        <div
          className="relative"
          style={{
            width: 'clamp(120px, 16vw, 220px)',
            height: '1px',
            background: 'rgba(240, 239, 234, 0.2)',
          }}
        >
          <i
            ref={barRef}
            className="absolute left-0 top-0 bottom-0"
            style={{
              width: pct + '%',
              background: '#f0efea',
              display: 'block',
            }}
          />
        </div>
      </div>

      {/* Slide-up keyframe for brand wordmark */}
      <style>{`
        @keyframes preloaderUp {
          from { transform: translateY(110%); }
          to   { transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
