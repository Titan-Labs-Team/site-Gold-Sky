// Gold Sky — useFadeUp hook
// Triggers fade-up entrance animation when element enters viewport
import { useEffect, useRef } from 'react'

export function useFadeUp<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function useFadeUpGroup<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = container.querySelectorAll<HTMLElement>('.fade-up')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach(child => child.classList.add('visible'))
          observer.unobserve(container)
        }
      },
      { threshold: 0.05, ...options }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return ref
}
