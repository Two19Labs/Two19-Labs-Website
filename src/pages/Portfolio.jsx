import { useState, useEffect } from 'react'
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
  const [selected, setSelected] = useState(null)

  const filtered =
    active === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === active)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

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
            Every project is bespoke — no templates, no filler. Click any card to see the full story.
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

      {/* ── Card grid ────────────────────────────────────────────── */}
      <section className="section pt-10 md:pt-14">
        <div className="container-x">
          {filtered.length === 0 ? (
            <Reveal className="py-16 text-center text-ink-soft">No projects in this category yet.</Reveal>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onClick={() => setSelected(project)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Modal ────────────────────────────────────────────────── */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}

      <div className="mt-16 md:mt-[100px]">
        <CTA />
        <Footer />
      </div>
    </main>
  )
}

/* ── Compact card ────────────────────────────────────────────────── */
function ProjectCard({ project, index, onClick }) {
  return (
    <Reveal
      delay={(index % 3) * 50}
      data-cursor="grow"
      className="group cursor-pointer overflow-hidden rounded-band border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)]"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#f0f0ec]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-20">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="#0a0a0c" strokeWidth="1.5" />
              <circle cx="8.5" cy="8.5" r="1.5" stroke="#0a0a0c" strokeWidth="1.5" />
              <path d="M3 16l5-5 4 4 3-3 6 6" stroke="#0a0a0c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
        <span
          className={`absolute right-3 top-3 rounded-pill border px-2.5 py-0.5 text-[11px] font-semibold ${STATUS_STYLES[project.status] ?? STATUS_STYLES.live}`}
        >
          {project.status}
        </span>
      </div>

      {/* Info */}
      <div className="p-5 sm:p-6">
        <div className="mb-2.5 flex items-center gap-2">
          <span className="font-mono text-[11px] text-blue">{String(index + 1).padStart(2, '0')}</span>
          <span className="rounded-pill border border-line bg-paper px-2.5 py-0.5 text-[11px] font-medium text-ink-soft">
            {project.category}
          </span>
        </div>
        <h3 className="mb-1 text-[17px] font-semibold leading-[1.2] tracking-tight2 transition-colors duration-200 group-hover:text-blue sm:text-[18px]">
          {project.title}
        </h3>
        <p className="mb-3 text-[13px] text-ink-soft">
          {project.client}&nbsp;·&nbsp;{project.location}
          {project.year && <>&nbsp;·&nbsp;{project.year}</>}
        </p>
        <p className="text-[13px] leading-[1.6] text-ink-soft">{project.description}</p>
      </div>
    </Reveal>
  )
}

/* ── Modal ───────────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center p-4 sm:p-6 md:p-10"
      style={{ background: 'rgba(10,10,12,0.65)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-[680px] flex-col overflow-hidden rounded-band bg-card shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] md:max-w-[860px] lg:max-w-[1000px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-paper text-ink-soft transition-all duration-200 hover:border-ink hover:text-ink"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Scrollable body */}
        <div className="overflow-y-auto">

          {/* Screenshot */}
          {project.image && (
            <div className="w-full overflow-hidden bg-[#f0f0ec]">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <img src={project.image} alt={project.title} className="w-full object-contain" />
                </a>
              ) : (
                <img src={project.image} alt={project.title} className="w-full object-contain" />
              )}
            </div>
          )}

          <div className="p-6 sm:p-8">
            {/* Badges */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-pill border border-line bg-paper px-3 py-1 text-[12px] font-medium text-ink-soft">
                {project.category}
              </span>
              <span className={`rounded-pill border px-3 py-1 text-[12px] font-semibold ${STATUS_STYLES[project.status] ?? STATUS_STYLES.live}`}>
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h2 className="mb-1 text-[22px] font-semibold leading-[1.15] tracking-tight2 sm:text-[26px]">
              {project.title}
            </h2>

            {/* Meta */}
            <p className="mb-6 text-[13px] text-ink-soft">
              {project.client}&nbsp;·&nbsp;{project.location}
              {project.year && <>&nbsp;·&nbsp;{project.year}</>}
            </p>

            <div className="mb-6 h-px bg-line" />

            {/* Problem */}
            {project.problem && (
              <div className="mb-6">
                <p className="mb-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-blue">
                  // The Problem
                </p>
                <p className="text-[15px] leading-[1.75] text-ink-soft">{project.problem}</p>
              </div>
            )}

            {/* What we built */}
            {project.built && (
              <div className="mb-6">
                <p className="mb-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-blue">
                  // What We Built
                </p>
                <p className="text-[15px] leading-[1.75] text-ink-soft">{project.built}</p>
              </div>
            )}

            {/* Result */}
            {project.result && (
              <div className="mb-6 flex">
                <div className="inline-flex items-center gap-2.5 rounded-band border border-blue/20 bg-blue/5 px-4 py-2.5">
                  <span className="text-blue" aria-hidden>↗</span>
                  <span className="text-[14px] font-semibold text-blue">{project.result}</span>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-pill border border-line bg-paper px-3 py-1 text-[12px] font-medium text-ink">
                  {tag}
                </span>
              ))}
            </div>

            {/* Live link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <span>Visit live site</span>
                <span className="arrow">↗</span>
              </a>
            )}

            {/* Project-specific CTA */}
            {project.cta && (
              <div className="mt-8 border-t border-line pt-8">
                <a
                  href={project.cta.href}
                  className="btn-primary inline-flex w-full justify-center"
                >
                  <span>{project.cta.label}</span>
                  <span className="arrow">↗</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
