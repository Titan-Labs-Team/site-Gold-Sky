'use client'

import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  stickyBarVisible?: boolean
}

export function WhatsAppButton({ stickyBarVisible = false }: WhatsAppButtonProps) {
  const whatsappNumber = '5511999999999'
  const message = 'Olá! Gostaria de mais informações sobre os produtos da Gold Sky.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl',
        stickyBarVisible ? 'bottom-[136px] md:bottom-[72px]' : 'bottom-6'
      )}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
