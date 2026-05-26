// Gold Sky — useGSAPAnimation hook
// Wrapper around @gsap/react with ScrollTrigger + prefers-reduced-motion support
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGSAPAnimation(callback: (ctx: gsap.Context) => void, deps?: React.DependencyList) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(ctx)
    }, containerRef)

    return () => ctx.revert()
  }, deps)

  return containerRef
}

export function shouldAnimate() {
  return typeof window !== 'undefined'
}

export function createTimeline(options?: gsap.TimelineVars) {
  return gsap.timeline(options)
}
