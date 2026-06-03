import { useState } from 'react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { portfolioCategories, portfolioProjects } from '../data/content'

const STATUS_STYLES = {
  live: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  building: 'bg-amber-50 text-amber-700 border-amber-200',
  internal: 'bg-blue/10 text-blue border-blue/20',
}

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === active)

  return (
    <main>
      <Seo
        title="Portfolio — Two19 Labs"
        description="Real projects, real results. See how Two19 Labs builds custom software, AI automation, and web experiences for clients across India."
        path="/portfolio"
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="section pt-[100px] sm:pt-[120px] md:pt-[160px]">
        <div className="container-x">
          <Reveal as="p" className="tag">our work</Reveal>
          <Reveal as="h1" delay={70} className="sec-h">
            Built for real problems.<br className="hidden sm:block" />
            {' '}Measured in real results.
          </Reveal>
          <Reveal as="p" delay={130} className="sec-p mt-5 sm:mt-6">
            Every project is bespoke — no templates, no filler. Here's a selection of what we've shipped.
          </Reveal>
        </div>
      </section>

      {/* ── Filter tabs ──────────────────────────────────────────── */}
      <div className="border-b border-line bg-paper">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-6 md:px-12">
          <div className="flex items-center gap-1.5 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 whitespace-nowrap rounded-pill border px-4 py-1.5 text-[12px] font-semibold transition-all duration-300 sm:px-5 sm:py-2 sm:text-[13px] ${
                  active === cat
                    ? 'border-ink bg-ink text-white'
                    : 'border-line bg-transparent text-ink-soft hover:border-ink hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Project list ─────────────────────────────────────────── */}
      <section className="section pt-0 md:pt-0">
        <div className="container-x">
          {filtered.length === 0 ? (
            <Reveal className="py-16 text-center text-ink-soft sm:py-20">
              No projects in this category yet.
            </Reveal>
          ) : (
            <div className="mt-8 flex flex-col divide-y divide-line sm:mt-10 md:mt-14">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}

function ProjectCard({ project, index }) {
  const flip = index % 2 === 1

  return (
    <Reveal
      delay={(index % 3) * 60}
      className="group grid grid-cols-1 gap-8 py-10 sm:gap-10 sm:py-12 md:gap-12 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20 xl:gap-24"
    >
      {/* Content */}
      <div className={`flex flex-col justify-center ${flip ? 'lg:order-2' : 'lg:order-1'}`}>
        {/* Meta row */}
        <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5 sm:gap-3">
          <span className="font-mono text-[11px] text-blue sm:text-[12px]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="rounded-pill border border-line bg-card px-3 py-1 text-[11px] font-medium text-ink-soft sm:text-[12px]">
            {project.category}
          </span>
          <span
            className={`rounded-pill border px-3 py-1 text-[11px] font-semibold sm:text-[12px] ${STATUS_STYLES[project.status] ?? STATUS_STYLES.live}`}
          >
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h2
          className="mb-1 font-semibold leading-[1.12] tracking-tight2"
          style={{ fontSize: 'clamp(22px, 3.5vw, 36px)' }}
        >
          {project.title}
        </h2>

        {/* Client */}
        <p className="mb-4 text-sm text-ink-soft sm:mb-5">
          {project.client}&nbsp;·&nbsp;{project.location}
        </p>

        {/* Description */}
        <p className="mb-5 text-[15px] leading-[1.7] text-ink-soft sm:text-base">
          {project.description}
        </p>

        {/* Result metric */}
        {project.result && (
          <div className="mb-5 inline-flex items-center gap-2.5 self-start rounded-band border border-blue/20 bg-blue/5 px-4 py-2.5 sm:px-5 sm:py-3">
            <span className="text-blue" aria-hidden>↗</span>
            <span className="text-[13px] font-semibold text-blue sm:text-[14px]">{project.result}</span>
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-pill border border-line bg-card px-3 py-1 text-[11px] font-medium text-ink sm:text-[12px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image / placeholder */}
      <div className={`flex items-stretch ${flip ? 'lg:order-1' : 'lg:order-2'}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full rounded-band object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex min-h-[220px] w-full flex-col items-center justify-center gap-3 rounded-band border border-dashed border-line bg-card text-center transition-colors duration-300 group-hover:border-ink/30 group-hover:bg-[#f8f8f5] sm:min-h-[280px] md:min-h-[320px] lg:min-h-0">
            <div className="rounded-full border border-line bg-paper p-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-ink-soft opacity-40">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 16l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-mono text-[11px] text-ink-soft sm:text-[12px]">screenshot coming soon</span>
          </div>
        )}
      </div>
    </Reveal>
  )
}
