// Gold Sky — PageLoadOverlay Component
// Cinematic page load entrance with black overlay fade + staggered elements
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface PageLoadOverlayProps {
  onComplete?: () => void
}

const HEADER_SELECTORS = [
  'header .logo',
  'header nav a',
  'header .header-icons button',
  'header .header-icons a',
]
const HERO_SELECTORS = [
  '.hero-badge',
  '.hero-h1-line',
  '.hero-subtitle',
  '.hero-buttons button',
]

export function PageLoadOverlay({ onComplete }: PageLoadOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!overlayRef.current) {
      onComplete?.()
      return
    }

    // Set initial hidden states before animating
    gsap.set('header .logo', { opacity: 0, y: -30 })
    gsap.set('header nav a', { opacity: 0, y: -20 })
    gsap.set('header .header-icons button, header .header-icons a', { opacity: 0 })

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.()
      },
    })

    // Overlay fades out
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
    }, 0)

    // Logo slides down
    tl.to('header .logo', {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
    }, 0.3)

    // Nav links stagger in
    tl.to('header nav a', {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
    }, 0.5)

    // Header icons
    tl.to('header .header-icons button, header .header-icons a', {
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
    }, 0.5)

    // Hero image scales in
    tl.to('.parallax-img', {
      scale: 1,
      duration: 1.8,
      ease: 'power2.out',
    }, 0.7)

    // Hero text stagger
    tl.to('.hero-badge', { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, 0.9)
    tl.to('.hero-h1-line', { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, 1.0)
    tl.to('.hero-subtitle', { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 1.3)
    tl.to('.hero-buttons button', { y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: 'power3.out' }, 1.45)

    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-black"
      style={{ opacity: 1 }}
    />
  )
}
