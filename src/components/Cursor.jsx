import { useEffect, useRef } from 'react'

// Custom trailing cursor dot that grows over interactive elements.
// Disabled on touch / coarse pointers.
export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    const cur = ref.current
    if (!cur) return

    let cx = 0, cy = 0, tx = 0, ty = 0, raf
    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }
    const loop = () => {
      cx += (tx - cx) * 0.18
      cy += (ty - cy) * 0.18
      cur.style.left = cx + 'px'
      cur.style.top = cy + 'px'
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)

    const grow = () => cur.classList.add('grow')
    const shrink = () => cur.classList.remove('grow')
    const targets = document.querySelectorAll(
      'a,button,[data-cursor="grow"]'
    )
    targets.forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue md:block"
      style={{ mixBlendMode: 'difference' }}
    />
  )
}
