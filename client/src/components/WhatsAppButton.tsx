// Gold Sky — WhatsApp Floating Button
// Forest green circle with GSAP pulse animation
import { useEffect, useRef } from 'react'
import { MessageCircle } from 'lucide-react'
import gsap from 'gsap'
import { shouldAnimate } from '@/hooks/useGSAPAnimation'

interface WhatsAppButtonProps {
  stickyBarVisible?: boolean
  isMobile?: boolean
}

export default function WhatsAppButton({ stickyBarVisible = false, isMobile = false }: WhatsAppButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const iconRef = useRef<SVGSVGElement>(null)

  const bottomClass = stickyBarVisible
    ? isMobile
      ? 'bottom-[136px]'
      : 'bottom-[72px]'
    : 'bottom-6'

  useEffect(() => {
    if (!shouldAnimate() || !buttonRef.current) return

    // Entrance animation: scale + rotation
    gsap.from(buttonRef.current, {
      scale: 0,
      rotation: -180,
      duration: 0.8,
      ease: 'back.out(2)',
      delay: 2,
    })

    // Pulse animation: infinite
    gsap.to(buttonRef.current, {
      scale: 1.08,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    // Hover animation setup
    const handleMouseEnter = () => {
      gsap.to(buttonRef.current, {
        scale: 1.12,
        duration: 0.3,
        ease: 'power2.out',
      })
      gsap.to(iconRef.current, {
        rotation: 15,
        duration: 0.3,
      })
    }

    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        scale: 1.08,
        duration: 0.3,
        ease: 'power2.out',
      })
      gsap.to(iconRef.current, {
        rotation: 0,
        duration: 0.3,
      })
    }

    buttonRef.current.addEventListener('mouseenter', handleMouseEnter)
    buttonRef.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      buttonRef.current?.removeEventListener('mouseenter', handleMouseEnter)
      buttonRef.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <a
      ref={buttonRef}
      href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as joias da Gold Sky."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-6 z-40 w-12 h-12 rounded-full bg-[#2B4A2F] flex items-center justify-center text-white shadow-md hover:bg-[#1e3521] transition-all duration-300 ${bottomClass}`}
      aria-label="Fale conosco no WhatsApp"
      style={{ scale: 0 }}
    >
      <MessageCircle ref={iconRef} size={22} strokeWidth={1.5} />
    </a>
  )
}
