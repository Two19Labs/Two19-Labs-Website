import { useEffect, useState } from 'react'
import { nav } from '../data/content'
import Logo from './Logo'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[1000] flex items-center justify-between transition-[padding,background-color,box-shadow,backdrop-filter,color] duration-[400ms] md:px-12 ${
          scrolled
            ? 'bg-paper/80 px-5 py-3 text-ink shadow-[0_1px_0_#dcdcd6] backdrop-blur-[14px] sm:px-6'
            : 'px-5 py-[18px] text-white sm:px-6 md:py-[22px]'
        }`}
      >
        <a href="#home" aria-label="Two19 Labs home" className="inline-flex items-center text-current">
          <Logo className="h-[26px] w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-current opacity-85 transition-opacity duration-300 hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
          <button
            className={`rounded-pill border border-current px-5 py-2.5 text-[13px] font-semibold transition-colors duration-300 ${
              scrolled ? 'hover:bg-ink hover:text-white' : 'hover:bg-white hover:text-ink'
            }`}
          >
            Book a call
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center text-current md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

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
