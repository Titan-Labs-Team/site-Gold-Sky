// Gold Sky — Footer Component
// Design: Parisian Atelier Minimalismo Quente + GSAP Animations
import { useState, useEffect, useRef } from 'react'
import { Link } from 'wouter'
import { ChevronDown, Instagram, Facebook, MessageCircle, ArrowUp } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { shouldAnimate } from '@/hooks/useGSAPAnimation'

gsap.registerPlugin(ScrollTrigger)

const footerSections = [
  {
    title: 'Nossas Joias',
    links: [
      { label: 'Anéis', href: '/categoria/aneis' },
      { label: 'Brincos', href: '/categoria/brincos' },
      { label: 'Colares', href: '/categoria/colares' },
      { label: 'Pulseiras', href: '/categoria/pulseiras' },
      { label: 'Alianças', href: '/categoria/aliancas' },
      { label: 'Óculos', href: '/categoria/oculos' },
    ],
  },
  {
    title: 'Nossa Empresa',
    links: [
      { label: 'Sobre a Gold Sky', href: '/sobre' },
      { label: 'Nossa História', href: '/sobre' },
      { label: 'Trabalhe Conosco', href: '/contato' },
      { label: 'Imprensa', href: '/contato' },
    ],
  },
  {
    title: 'Atendimento',
    links: [
      { label: 'Central de Ajuda', href: '/contato' },
      { label: 'Fale Conosco', href: '/contato' },
      { label: 'Trocas e Devoluções', href: '/contato' },
      { label: 'Rastrear Pedido', href: '/contato' },
    ],
  },
  {
    title: 'Informações',
    links: [
      { label: 'Política de Privacidade', href: '/contato' },
      { label: 'Termos de Uso', href: '/contato' },
      { label: 'Política de Cookies', href: '/contato' },
      { label: 'Garantia e Cuidados', href: '/contato' },
    ],
  },
]

function AccordionSection({ section }: { section: typeof footerSections[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#E5E5E5]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#1A1A1A]">
          {section.title}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-[#C9A96E] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-4 space-y-2.5">
          {section.links.map(link => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="block text-sm font-sans text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const footerRef = useRef<HTMLDivElement>(null)

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert(`Obrigado! ${email} foi cadastrado com sucesso.`)
      setEmail('')
    }
  }

  // Footer entrance animation
  useEffect(() => {
    if (!shouldAnimate() || !footerRef.current) return

    const columns = footerRef.current.querySelectorAll('.footer-column')
    const icons = footerRef.current.querySelectorAll('.footer-icon')

    gsap.from(columns, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 85%',
        markers: false,
      },
    })

    gsap.from(icons, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'back.out(2)',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 85%',
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <footer ref={footerRef} className="bg-white border-t border-[#E5E5E5]">
      {/* Gold divider */}
      <div className="gold-divider" />

      {/* Main Footer Content */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-12 lg:py-16">

        {/* Mobile: Back to top */}
        <div className="lg:hidden mb-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#7A7A7A] transition-colors"
          >
            <ArrowUp size={14} strokeWidth={1.5} />
            Voltar ao Topo
          </button>
        </div>

        {/* Mobile: Newsletter first */}
        <div className="lg:hidden mb-6">
          <p className="text-lg font-serif font-semibold text-[#1A1A1A] mb-1">
            Receba novidades
          </p>
          <p className="text-sm font-sans text-[#7A7A7A] mb-4">
            Cadastre seu e-mail e fique por dentro das nossas coleções
          </p>
          <form onSubmit={handleNewsletter} className="flex gap-0">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="input-underline flex-1 text-sm"
            />
            <button
              type="submit"
              className="ml-3 px-5 py-2 bg-[#1A1A1A] text-white text-[11px] font-sans font-bold uppercase tracking-[0.12em] hover:bg-[#333] transition-colors duration-200"
            >
              Cadastrar
            </button>
          </form>
        </div>

        {/* Mobile: Accordion sections */}
        <div className="lg:hidden">
          {footerSections.map(section => (
            <AccordionSection key={section.title} section={section} />
          ))}
        </div>

        {/* Desktop: 5 columns */}
        <div className="hidden lg:grid grid-cols-5 gap-8">
          {footerSections.map(section => (
            <div key={section.title} className="footer-column">
              <p className="text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-5">
                {section.title}
              </p>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-sans text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div className="footer-column">
            <p className="text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-5">
              Receba Novidades
            </p>
            <p className="text-sm font-sans text-[#7A7A7A] mb-5 leading-relaxed">
              Cadastre seu e-mail e fique por dentro das nossas coleções
            </p>
            <form onSubmit={handleNewsletter} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="input-underline text-sm"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#1A1A1A] text-white text-[11px] font-sans font-bold uppercase tracking-[0.12em] hover:bg-[#333] transition-colors duration-200"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-10 lg:mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon w-9 h-9 rounded-full bg-[#2B4A2F] flex items-center justify-center text-white hover:bg-[#1e3521] transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram size={16} strokeWidth={1.5} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon w-9 h-9 rounded-full bg-[#2B4A2F] flex items-center justify-center text-white hover:bg-[#1e3521] transition-colors duration-200"
            aria-label="Facebook"
          >
            <Facebook size={16} strokeWidth={1.5} />
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon w-9 h-9 rounded-full bg-[#2B4A2F] flex items-center justify-center text-white hover:bg-[#1e3521] transition-colors duration-200"
            aria-label="WhatsApp"
          >
            <MessageCircle size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Bottom Bar — Cream with subtle pattern */}
      <div
        className="border-t border-[#E5E5E5]"
        style={{
          backgroundColor: '#FAF5EE',
          backgroundImage: `radial-gradient(circle, #C9A96E22 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-3">
          <span className="font-serif text-lg font-bold uppercase tracking-[0.25em] text-[#1A1A1A]">
            GOLD SKY
          </span>
          <p className="text-[11px] font-sans text-[#7A7A7A] text-center">
            Gold Sky — Ótica e Joalheria. Sua beleza, nossa missão.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contato" className="text-[11px] font-sans text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors">
              Política de Privacidade
            </Link>
            <span className="text-[#C9A96E]">·</span>
            <Link href="/contato" className="text-[11px] font-sans text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
