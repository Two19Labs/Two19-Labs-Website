import { deliver } from '../data/content'

export default function Marquee() {
  // duplicate the list so the -50% scroll loops seamlessly
  const items = [...deliver, ...deliver]
  return (
    <>
      <p className="mb-6 px-6 font-mono text-xs text-ink-soft md:px-12">// what we deliver</p>
      <div className="group relative overflow-hidden border-y border-line bg-paper py-[30px]">
        <div className="flex w-max gap-20 animate-scroll group-hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-20 whitespace-nowrap">
              <span className="text-[26px] font-semibold text-ink opacity-55 transition-[opacity,color] duration-300 hover:text-blue hover:opacity-100">
                {item}
              </span>
              <span aria-hidden className="text-[26px] font-semibold text-ink opacity-30">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
