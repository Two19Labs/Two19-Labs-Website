import { EMAIL, PHONE, PHONE_HREF, nav } from '../data/content'
import Reveal from './Reveal'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line bg-ink-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]"
      />

      {/* CTA band */}
      <div className="container-x py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="heading text-5xl leading-[1.02] md:text-7xl">
            Work smarter.
            <br />
            <span className="bg-gradient-to-r from-brand-300 to-brand-600 bg-clip-text text-transparent">
              Ship faster.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mute">
            Tell us what's slowing your business down. We'll show you exactly how to automate it —
            usually in a single call.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={PHONE_HREF} className="btn btn-primary px-7 py-3.5">
              Book a consultation →
            </a>
            <a href={`mailto:${EMAIL}`} className="btn btn-ghost px-7 py-3.5">
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>

      {/* bottom bar */}
      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          <div className="flex items-center gap-4">
            <Logo className="text-lg" />
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-mute transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5 text-sm text-mute">
            <a href={PHONE_HREF} className="transition-colors duration-200 hover:text-white">
              +91 {PHONE}
            </a>
          </div>
        </div>
        <div className="container-x flex flex-col items-center justify-between gap-2 border-t border-line py-5 text-xs text-faint md:flex-row">
          <span>© {new Date().getFullYear()} Two19 Labs. All rights reserved.</span>
          <span className="font-mono">Automation · AI · Web — built in India, shipped worldwide.</span>
        </div>
      </div>
    </footer>
  )
}
