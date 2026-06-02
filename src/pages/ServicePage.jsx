import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { services, serviceDetails } from '../data/content'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Roadmap from '../components/Roadmap'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function ServicePage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  const detail = serviceDetails[slug]

  if (!service) return <NotFound />

  const description = detail?.promise || detail?.overview || service.body

  return (
    <main>
      <Seo
        title={service.title}
        description={description}
        path={`/services/${slug}`}
      />
      <Intro service={service} detail={detail} />
      {detail?.included?.length > 0 && <Included items={detail.included} />}
      {detail?.steps?.length > 0 && <Steps steps={detail.steps} />}
      {detail?.stack?.length > 0 && <Stack groups={detail.stack} />}
      {detail?.useCases?.length > 0 && <UseCases cases={detail.useCases} />}
      {detail?.faqs?.length > 0 && <ServiceFaq faqs={detail.faqs} />}
      <CTA />
      <Footer />
    </main>
  )
}

/* ── 1. Intro / overview (no hero) ─────────────────────────────── */
function Intro({ service, detail }) {
  return (
    <section className="section pt-[120px] md:pt-[140px]">
      <div className="container-x">
        <Reveal as="p" className="tag">
          <Link to="/#services" className="transition-opacity hover:opacity-60">
            services
          </Link>
          <span className="opacity-40">/</span>
          <span className="text-ink-soft">{service.n}</span>
        </Reveal>

        <Reveal as="h1" delay={70} className="sec-h">
          {service.title}
        </Reveal>

        {detail?.promise && (
          <Reveal as="p" delay={120} className="mt-7 max-w-[760px] text-xl font-medium leading-[1.4] tracking-tight2 text-ink md:text-2xl">
            {detail.promise}
          </Reveal>
        )}

        {detail?.overview && (
          <Reveal as="p" delay={180} className="sec-p mt-6">
            {detail.overview}
          </Reveal>
        )}

        <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-4">
          <button className="btn-primary">
            <span>Book a call</span> <span className="arrow">↗</span>
          </button>
          <Link to="/#services" className="btn-ghost">
            All services
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ── 2. What's included ────────────────────────────────────────── */
function Included({ items }) {
  return (
    <section className="section pt-0 md:pt-0">
      <div className="container-x">
        <Reveal as="p" className="tag">what&apos;s included</Reveal>
        <Reveal as="h2" delay={70} className="sec-h">
          Everything in scope.
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 md:mt-[60px] lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={(i % 3) * 70}
              className="group relative flex min-h-[180px] flex-col overflow-hidden bg-paper p-7 transition-colors duration-500 hover:bg-card md:min-h-[230px] md:p-10"
            >
              <div className="font-mono text-[13px] text-blue">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-3 mt-8 text-[20px] font-semibold leading-[1.15] tracking-tight2 md:mt-12 md:text-[22px]">
                {it.title}
              </h3>
              <p className="text-sm leading-[1.6] text-ink-soft">{it.body}</p>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue transition-[width] duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 3. Process steps ──────────────────────────────────────────── */
function Steps({ steps }) {
  return (
    <section className="section pt-0 md:pt-0">
      <div className="container-x">
        <Reveal as="p" className="tag">how we deliver</Reveal>
        <Reveal as="h2" delay={70} className="sec-h">
          From brief to launch.
        </Reveal>

        <Roadmap steps={steps} />
      </div>
    </section>
  )
}

/* ── 4. Tech stack ─────────────────────────────────────────────── */
function Stack({ groups }) {
  return (
    <section className="section pt-0 md:pt-0">
      <div className="container-x">
        <Reveal as="p" className="tag">tech stack</Reveal>
        <Reveal as="h2" delay={70} className="sec-h">
          Built on proven tools.
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-[60px] md:grid-cols-3">
          {groups.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 70} className="border-t border-line pt-6">
              <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.05em] text-ink-soft">
                {g.group}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-pill border border-line bg-card px-4 py-2 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 5. Use cases / outcomes ───────────────────────────────────── */
function UseCases({ cases }) {
  return (
    <section className="section pt-0 md:pt-0">
      <div className="container-x">
        <Reveal as="p" className="tag">use cases</Reveal>
        <Reveal as="h2" delay={70} className="sec-h">
          Outcomes, not output.
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-[60px] md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(i % 3) * 70}
              className="flex flex-col rounded-band border border-line bg-card p-8 transition-shadow duration-500 hover:shadow-[0_18px_50px_-20px_rgba(37,64,255,0.25)]"
            >
              <div className="mb-5 font-mono text-[13px] text-blue">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-3 text-[19px] font-semibold leading-[1.25] tracking-tight2">
                {c.title}
              </h3>
              <p className="text-sm leading-[1.65] text-ink-soft">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 6. Service-specific FAQ ───────────────────────────────────── */
function ServiceFaq({ faqs }) {
  const [open, setOpen] = useState(0)

  return (
    <section className="section pt-0 md:pt-0">
      <div className="container-x">
        <Reveal as="p" className="tag">questions</Reveal>
        <Reveal as="h2" delay={70} className="sec-h">
          Good to know.
        </Reveal>

        <Reveal className="mt-12 max-w-[900px]">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-[30px] text-left font-medium tracking-tight text-ink"
                  style={{ fontSize: 'clamp(18px,2.4vw,24px)' }}
                >
                  {f.q}
                  <span
                    className="shrink-0 text-[26px] text-blue transition-transform duration-[400ms]"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[760px] pb-[30px] text-base leading-[1.7] text-ink-soft">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

/* ── Fallback for unknown slug ─────────────────────────────────── */
function NotFound() {
  return (
    <section className="section pt-[150px] md:pt-[200px]">
      <div className="container-x">
        <p className="tag">404</p>
        <h1 className="sec-h">Service not found.</h1>
        <Link to="/#services" className="btn-ghost mt-10">
          Back to services
        </Link>
      </div>
    </section>
  )
}
