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

    let cx = 0, cy = 0, tx = 0, ty = 0, raf, started = false
    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      // First real movement: snap to position + reveal (avoids the corner blob
      // and any load-time grow state showing before the cursor is placed).
      if (!started) {
        started = true
        cx = tx
        cy = ty
        cur.classList.remove('grow')
        cur.style.opacity = '1'
      }
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

    // Delegation: works for elements added later (e.g. after route changes),
    // not just those present at mount.
    const SEL = 'a,button,[data-cursor="grow"]'
    const onOver = (e) => {
      if (e.target.closest(SEL)) cur.classList.add('grow')
    }
    const onOut = (e) => {
      if (e.target.closest(SEL)) cur.classList.remove('grow')
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue md:block"
      style={{ mixBlendMode: 'difference', opacity: 0 }}
    />
  )
}
