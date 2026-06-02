import { EMAIL, PHONE, footerCols } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="mt-[120px] flex flex-wrap justify-between gap-10 border-t border-line px-6 pb-12 pt-20 md:px-12">
      <div className="max-w-[240px]">
        <a href="#home" aria-label="Two19 Labs home" className="inline-flex text-ink">
          <Logo className="h-[30px] w-auto" />
        </a>
        <p className="mt-3.5 text-sm text-ink-soft">
          Technology &amp; Digital Transformation Agency.
        </p>
      </div>

      {footerCols.map((col) => (
        <div key={col.heading}>
          <h5 className="mb-4 font-mono text-xs uppercase tracking-[0.05em] text-ink-soft">
            {col.heading}
          </h5>
          {col.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="mb-2.5 block text-[15px] text-ink opacity-75 transition-[opacity,color] duration-300 hover:text-blue hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
        </div>
      ))}

      <div>
        <h5 className="mb-4 font-mono text-xs uppercase tracking-[0.05em] text-ink-soft">
          Get in touch
        </h5>
        <a
          href={`mailto:${EMAIL}`}
          className="mb-2.5 block text-[15px] text-ink opacity-75 transition-[opacity,color] duration-300 hover:text-blue hover:opacity-100"
        >
          {EMAIL}
        </a>
        <a
          href={`tel:${PHONE}`}
          className="mb-2.5 block text-[15px] text-ink opacity-75 transition-[opacity,color] duration-300 hover:text-blue hover:opacity-100"
        >
          Book a call ↗
        </a>
      </div>

      <div className="mt-5 w-full border-t border-line pt-10 font-mono text-xs text-ink-soft">
        {/* Single text node (no static+{expr}+static split) so the prerendered
            HTML hydrates cleanly — adjacent text nodes merge on serialization. */}
        {`© ${new Date().getFullYear()} Two19 Labs. All rights reserved.`}
      </div>
    </footer>
  )
}
