// Gold Sky — AnimatedSectionTitle Component
// Section titles with character-by-character entrance animation
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { shouldAnimate } from '@/hooks/useGSAPAnimation'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedSectionTitleProps {
  children: string
  className?: string
}

export function AnimatedSectionTitle({ children, className = '' }: AnimatedSectionTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    if (!shouldAnimate()) {
      titleRef.current.textContent = children
      return
    }

    const text = children
    titleRef.current.innerHTML = text
      .split('')
      .map(char => `<span class="char" style="display: inline-block; opacity: 0; transform: translateY(80px) rotate(5deg);">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('')

    const chars = titleRef.current.querySelectorAll('.char')
    const ctx = gsap.context(() => {
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: 'power3.out',
        force3D: true,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 88%',
          once: true,
        },
      })
    }, titleRef)

    return () => ctx.revert()
  }, [children])

  return (
    <h2 ref={titleRef} className={className}>
      {children}
    </h2>
  )
}
