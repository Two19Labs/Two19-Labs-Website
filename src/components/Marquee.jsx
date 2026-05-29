import { marqueeTop } from '../data/content'

export default function Marquee() {
  const items = [...marqueeTop, ...marqueeTop]
  return (
    <section aria-label="What we do" className="relative border-y border-line bg-ink-100 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-100 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-100 to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-lg font-medium text-mute">
            {item}
            <span className="text-brand-500" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
