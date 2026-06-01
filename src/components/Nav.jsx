import { useEffect, useState } from 'react'
import { nav } from '../data/content'
import Logo from './Logo'
import { GlassFilter } from './ui/liquid-glass'

// Scroll distance (px) over which the bar fully morphs from full-width to pill.
// Larger = morph spread over more scroll = slower, smoother.
const MORPH_RANGE = 360
// Easing factor: how fast p chases the scroll target each frame (lower = smoother lag).
const EASE = 0.08

const lerp = (a, b, t) => a + (b - a) * t

export default function Nav() {
  // p = morph progress, 0 (hero/top) → 1 (fully condensed pill). Driven by scroll.
  const [p, setP] = useState(0)
  // darkBg = is the section directly behind the bar dark? → text goes white.
  const [darkBg, setDarkBg] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let raf = 0
    let current = 0 // eased value chasing the scroll target

    const detectDark = () => {
      // Sample a point on the bar's center line, test against [data-nav-dark] sections.
      const sampleY = 34
      const darks = document.querySelectorAll('[data-nav-dark]')
      let onDark = false
      for (const el of darks) {
        const r = el.getBoundingClientRect()
        if (r.top <= sampleY && r.bottom >= sampleY) {
          onDark = true
          break
        }
      }
      setDarkBg(onDark)
    }

    const tick = () => {
      const target = Math.min(1, Math.max(0, window.scrollY / MORPH_RANGE))
      current += (target - current) * EASE
      if (Math.abs(target - current) < 0.001) current = target
      setP(current)
      detectDark()
      // Keep easing until settled, then stop the loop.
      raf = Math.abs(target - current) > 0.0005 ? requestAnimationFrame(tick) : 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    tick()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const scrolled = p > 0.5

  // Interpolated styles — track scroll exactly (no CSS transition).
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1280
  const pillW = Math.min(880, vw * 0.92)
  const isMd = vw >= 768
  const navStyle = {
    maxWidth: lerp(vw, pillW, p),
    marginTop: lerp(0, 14, p),
    paddingTop: lerp(isMd ? 22 : 18, 10, p),
    paddingBottom: lerp(isMd ? 22 : 18, 10, p),
    borderRadius: lerp(0, 9999, p),
    // Color follows the background behind the bar, not scroll — crossfades smoothly.
    color: darkBg ? '#ffffff' : '#0a0a0c',
    transition: 'color 0.35s ease',
    boxShadow: `0 8px 24px rgba(0,0,0,${0.12 * p}), 0 0 20px rgba(0,0,0,${0.05 * p})`,
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Global SVG filter that powers the liquid-glass distortion (render once) */}
      <GlassFilter />

      {/* Outer rail: always full width, just centers the morphing bar */}
      <div className="fixed inset-x-0 top-0 z-[1000] flex justify-center">
        <nav
          className="relative flex w-full items-center justify-between overflow-hidden px-5 sm:px-6 md:px-8"
          style={navStyle}
        >
          {/* Liquid-glass layers — always mounted (radius inherits), opacity tracks scroll */}
          <div
            className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
            style={{
              backdropFilter: 'blur(3px)',
              filter: 'url(#glass-distortion)',
              isolation: 'isolate',
              opacity: p,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
            style={{ background: 'rgba(255, 255, 255, 0.25)', opacity: p }}
          />
          <div
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
            style={{
              boxShadow:
                'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)',
              opacity: p,
            }}
          />

          <a
            href="#home"
            aria-label="Two19 Labs home"
            className="relative z-30 inline-flex items-center text-current"
          >
            <Logo className="h-[26px] w-auto" />
          </a>

          {/* Desktop links — absolutely centered so they sit at the bar's true center
              and glide with the width as it morphs into the pill */}
          <div className="absolute left-1/2 z-30 hidden -translate-x-1/2 items-center gap-9 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-current opacity-85 transition-opacity duration-300 hover:opacity-100"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Book a call — pinned right */}
          <button
            className={`relative z-30 hidden rounded-pill border border-current px-5 py-2.5 text-[13px] font-semibold transition-colors duration-300 md:inline-flex ${
              scrolled ? 'hover:bg-ink hover:text-white' : 'hover:bg-white hover:text-ink'
            }`}
          >
            Book a call
          </button>

          {/* Mobile hamburger */}
          <button
            className="relative z-30 flex h-10 w-10 items-center justify-center text-current md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[1100] flex flex-col bg-ink px-6 py-6 text-white transition-[opacity,transform] duration-300 md:hidden ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo className="h-[26px] w-auto text-white" />
          <button
            className="flex h-10 w-10 items-center justify-center text-white"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-5 text-3xl font-semibold tracking-tight text-white transition-colors hover:text-blue"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(false)}
          className="w-full rounded-pill bg-blue py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#1b33e6]"
        >
          Book a call
        </button>
      </div>
    </>
  )
}
