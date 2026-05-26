// Gold Sky — useScrollTriggerAnimation hook
// Handles all scroll-triggered animations with ScrollTrigger
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { shouldAnimate } from './useGSAPAnimation'

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationOptions {
  trigger?: string | Element
  start?: string
  end?: string
  markers?: boolean
  onEnter?: () => void
  onLeave?: () => void
}

export function useScrollTriggerAnimation(
  callback: (ctx: gsap.Context) => void,
  deps?: React.DependencyList
) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAnimate()) return

    const ctx = gsap.context(() => {
      callback(ctx)
    }, containerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, deps)

  return containerRef
}

// Helper: animate elements on scroll with stagger
export function animateOnScroll(
  selector: string,
  options: {
    from?: { [key: string]: any }
    to?: { [key: string]: any }
    duration?: number
    stagger?: number
    ease?: string
    delay?: number
    trigger?: string
    start?: string
  } = {}
) {
  if (!shouldAnimate()) return

  const {
    from = { y: 50, opacity: 0 },
    to = { y: 0, opacity: 1 },
    duration = 0.65,
    stagger = 0.08,
    ease = 'power3.out',
    delay = 0,
    trigger = selector,
    start = 'top 85%',
  } = options

  gsap.fromTo(
    selector,
    from,
    {
      ...to,
      duration,
      stagger,
      ease,
      delay,
      scrollTrigger: {
        trigger,
        start,
        markers: false,
      },
    }
  )
}

// Helper: split text into characters for animation
export function splitTextToChars(element: HTMLElement | null) {
  if (!element) return []
  const text = element.textContent || ''
  const chars: HTMLElement[] = []

  element.innerHTML = text
    .split('')
    .map((char, i) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.display = 'inline-block'
      span.dataset.index = String(i)
      chars.push(span)
      return span.outerHTML
    })
    .join('')

  return chars
}
