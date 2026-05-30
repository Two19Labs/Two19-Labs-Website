import { useEffect, useState } from 'react'
import { nav } from '../data/content'
import Logo from './Logo'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[1000] flex items-center justify-between transition-[padding,background-color,box-shadow,backdrop-filter,color] duration-[400ms] md:px-12 ${
        scrolled
          ? 'bg-paper/80 px-6 py-3 text-ink shadow-[0_1px_0_#dcdcd6] backdrop-blur-[14px]'
          : 'px-6 py-[22px] text-white'
      }`}
    >
      <a href="#home" aria-label="Two19 Labs home" className="inline-flex items-center text-current">
        <Logo className="h-[26px] w-auto" />
      </a>

      <div className="flex items-center gap-9">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hidden text-sm font-medium text-current opacity-85 transition-opacity duration-300 hover:opacity-100 md:inline"
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
    </nav>
  )
}
