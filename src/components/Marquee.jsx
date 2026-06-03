import { clients } from '../data/content'

export default function Marquee() {
  // quadruple so fewer logos still fill the viewport with no gap
  const items = [...clients, ...clients, ...clients, ...clients]
  return (
    <section className="pt-24 md:pt-28">
      <div className="px-5 sm:px-6 md:px-12">
        <div className="container-x">
          <p className="tag">clients we&apos;ve worked with</p>
        </div>
      </div>
      <div className="group relative overflow-hidden border-y border-line bg-paper py-[34px]">
        <div className="flex w-max items-center gap-20 will-change-transform [animation:scroll_20s_linear_infinite] [animation-delay:-5s] group-hover:[animation-play-state:paused] md:[animation:scroll_20s_linear_infinite]">
          {items.map((c, i) => (
            <div key={i} className="flex shrink-0 items-center justify-center">
              {c.logo ? (
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-9 w-auto object-contain opacity-50 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0 md:h-11"
                />
              ) : (
                <span className="whitespace-nowrap text-[26px] font-semibold text-ink opacity-40 transition-[opacity,color] duration-300 hover:text-blue hover:opacity-100">
                  {c.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
