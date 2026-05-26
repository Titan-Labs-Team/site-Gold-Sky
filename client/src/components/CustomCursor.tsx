// Gold Sky — CustomCursor Component
// Custom cursor with magnetic effect on links/buttons
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { shouldAnimate } from '@/hooks/useGSAPAnimation'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const dotX = useRef(0)
  const dotY = useRef(0)
  const ringX = useRef(0)
  const ringY = useRef(0)

  useEffect(() => {
    if (!shouldAnimate() || typeof window === 'undefined') return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Hide default cursor
    document.body.style.cursor = 'none'

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      gsap.to(dot, { scale: 0, duration: 0.3, ease: 'power2.out' })
      gsap.to(ring, {
        scale: 2.5,
        backgroundColor: 'rgba(201, 169, 110, 0.2)',
        borderColor: '#C9A96E',
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(dot, { scale: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(ring, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: '#1A1A1A',
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseDown = () => {
      gsap.to([dot, ring], { scale: 0.8, duration: 0.15 })
    }

    const handleMouseUp = () => {
      gsap.to([dot, ring], { scale: 1, duration: 0.15 })
    }

    // Add listeners to all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, select, textarea'
    )

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Animation loop
    const animate = () => {
      // Dot follows mouse directly
      gsap.to(dot, {
        x: mouseX.current - 4,
        y: mouseY.current - 4,
        duration: 0,
      })

      // Ring follows with lag (lerp)
      ringX.current += (mouseX.current - ringX.current) * 0.12
      ringY.current += (mouseY.current - ringY.current) * 0.12

      gsap.to(ring, {
        x: ringX.current - 20,
        y: ringY.current - 20,
        duration: 0,
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      document.body.style.cursor = 'auto'
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-[#1A1A1A] rounded-full pointer-events-none z-[10000]"
        style={{ top: 0, left: 0 }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed w-10 h-10 border border-[#1A1A1A] rounded-full pointer-events-none z-[10000]"
        style={{ top: 0, left: 0 }}
      />
    </>
  )
}
