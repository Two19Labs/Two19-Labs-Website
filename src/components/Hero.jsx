import { motion } from 'framer-motion'
import { LampContainer } from '@/components/ui/lamp'
import { useReady } from '../hooks/useReady'

export default function Hero() {
  // Wait for the preloader. `ready` flips true the moment the curtain starts
  // lifting, so the hero plays its entrance underneath and is mid-reveal as
  // the preloader clears.
  const ready = useReady()
  const hidden = { headline: { opacity: 0, y: 80 }, line: { opacity: 0, y: 40 } }
  const shown = { opacity: 1, y: 0 }

  return (
    <header id="home" data-nav-dark>
      <LampContainer>
        <motion.h1
          initial={hidden.headline}
          animate={ready ? shown : hidden.headline}
          transition={{ delay: 0.6, duration: 0.75, ease: [0.2, 0.65, 0.2, 1] }}
          className="display-brand bg-gradient-to-br from-slate-200 to-slate-500 bg-clip-text py-4 text-center text-5xl text-transparent md:text-8xl"
        >
          Build Smarter. <br />
          Scale <span className="text-blue" style={{ WebkitTextFillColor: '#2540ff' }}>Faster.</span>
        </motion.h1>

        <motion.p
          initial={hidden.line}
          animate={ready ? shown : hidden.line}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.2, 0.65, 0.2, 1] }}
          className="mx-auto mt-4 max-w-xl text-center text-[15px] leading-[1.6] text-slate-400 md:text-lg"
        >
          Two19 Labs builds custom software, AI automations, and internal tools from scratch —
          systems that eliminate the manual work killing your team's time. No templates. Ever.
        </motion.p>

        <motion.div
          initial={hidden.line}
          animate={ready ? shown : hidden.line}
          transition={{ delay: 1.0, duration: 0.7, ease: [0.2, 0.65, 0.2, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 rounded-pill bg-blue px-8 py-4 text-[15px] font-semibold text-white transition-[transform,background-color] duration-300 hover:bg-[#1b33e6] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Start a project <span aria-hidden>↗</span>
          </a>
          <a
            href="#process"
            className="inline-flex items-center rounded-pill border border-white/25 bg-white/[0.04] px-8 py-4 text-[15px] font-semibold text-white transition-[transform,background-color,border-color] duration-300 hover:border-white/50 hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            How we work
          </a>
        </motion.div>
      </LampContainer>
    </header>
  )
}
