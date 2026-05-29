export default function SectionTag({ children }) {
  return (
    <span className="eyebrow">
      <span className="h-px w-8 bg-brand-500/60" aria-hidden />
      {children}
    </span>
  )
}
