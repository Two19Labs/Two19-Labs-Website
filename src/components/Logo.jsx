export default function Logo({ className = '' }) {
  return (
    <span
      className={`select-none font-display font-semibold tracking-tight text-white ${className}`}
      aria-label="Two19 Labs"
    >
      <span className="text-brand-500">[</span>
      <span className="px-1">
        Two
        <span className="bg-gradient-to-br from-brand-300 to-brand-600 bg-clip-text text-transparent">
          19
        </span>{' '}
        Labs
      </span>
      <span className="text-brand-500">]</span>
    </span>
  )
}
