import { useEffect, useState } from 'react'

// True once the preloader has finished (event `site:loaded`).
// On route changes within the SPA the preloader is already gone, so
// we initialise from body.loaded so deep-linked pages animate instantly.
export function useReady() {
  const [ready, setReady] = useState(() => {
    if (typeof document === 'undefined') return false
    return document.body.classList.contains('loaded')
  })

  useEffect(() => {
    if (ready) return
    const onReady = () => setReady(true)
    window.addEventListener('site:loaded', onReady)
    // Catch case where body class was set between render + effect
    if (document.body.classList.contains('loaded')) setReady(true)
    return () => window.removeEventListener('site:loaded', onReady)
  }, [ready])

  return ready
}
