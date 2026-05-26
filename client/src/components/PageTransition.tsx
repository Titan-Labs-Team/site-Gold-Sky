// Gold Sky — PageTransition Component
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLocation } from 'wouter'
import gsap from 'gsap'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)
  // displayChildren holds what's actually shown — only swapped after exit animation
  const [displayChildren, setDisplayChildren] = useState(children)
  const isFirstRender = useRef(true)

  // Set opacity:0 synchronously before first paint so there's no flash
  useLayoutEffect(() => {
    if (containerRef.current) {
      gsap.set(containerRef.current, { opacity: 0, y: 0 })
    }
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // First load: no exit needed, just fade in
    if (isFirstRender.current) {
      isFirstRender.current = false
      gsap.fromTo(el,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      )
      return
    }

    // Navigation: exit current page → scroll top → swap content → enter new page
    gsap.killTweensOf(el)
    gsap.to(el, {
      opacity: 0,
      y: -10,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: () => {
        window.scrollTo(0, 0)
        // Only now swap to the new page — user never sees new content during exit
        setDisplayChildren(children)
        gsap.fromTo(el,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.42, ease: 'power3.out' }
        )
      },
    })
  }, [location]) // eslint-disable-line react-hooks/exhaustive-deps

  // No opacity in JSX — GSAP owns the opacity property, React must not override it
  return (
    <div ref={containerRef}>
      {displayChildren}
    </div>
  )
}
