'use client'

import Link from 'next/link'
import { Instagram, Facebook, MessageCircle, ChevronDown, ArrowUp } from 'lucide-react'
import { useState } from 'react'

const sections = [
  {
    title: 'Nossas Joias',
    links: [
      { name: 'Anéis', href: '/categoria/aneis' },
      { name: 'Brincos', href: '/categoria/brincos' },
      { name: 'Colares', href: '/categoria/colares' },
      { name: 'Pulseiras', href: '/categoria/pulseiras' },
      { name: 'Alianças', href: '/categoria/aliancas' },
      { name: 'Óculos', href: '/categoria/oculos' },
      { name: 'Joias', href: '/produtos' },
    ],
  },
  {
    title: 'Nossa Empresa',
    links: [
      { name: 'Sobre a Gold Sky', href: '/sobre' },
      { name: 'Trabalhe Conosco', href: '/contato' },
      { name: 'Sustentabilidade', href: '/sobre' },
    ],
  },
  {
    title: 'Atendimento',
    links: [
      { name: 'Central de Atendimento', href: '/contato' },
      { name: 'WhatsApp', href: '/contato' },
      { name: 'Acompanhe seu Pedido', href: '/contato' },
      { name: 'Horário de Atendimento', href: '/contato' },
      { name: 'Trocas e Devoluções', href: '/contato' },
    ],
  },
  {
    title: 'Informações',
    links: [
      { name: 'Política de Privacidade', href: '/privacidade' },
      { name: 'Formas de Pagamento', href: '/contato' },
      { name: 'Política de Trocas', href: '/contato' },
      { name: 'Prazo de Entrega', href: '/contato' },
    ],
  },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', Icon: Facebook },
  { label: 'WhatsApp', href: 'https://whatsapp.com', Icon: MessageCircle },
]

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggle = (title: string) =>
    setOpenSection((prev) => (prev === title ? null : title))

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-gray-100 bg-white text-charcoal">
      <div className="container mx-auto px-6 py-10 lg:py-14">

        {/* Mobile: back to top */}
        <button
          onClick={scrollToTop}
          className="mb-6 flex w-full items-center justify-center gap-2 border-b border-gray-200 pb-5 text-xs font-bold tracking-[0.15em] uppercase text-charcoal transition-colors hover:text-gold lg:hidden"
        >
          <ArrowUp className="h-3 w-3" />
          Voltar ao Topo
        </button>

        <div className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-10">

          {/* Newsletter — first on mobile, last column on desktop */}
          <div className="mb-8 lg:order-last lg:col-span-1 lg:mb-0">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-charcoal">
              Acompanhe Nossas Novidades
            </p>
            <p className="mt-1 text-xs text-warm-gray">
              Cadastre seu e-mail para receber informações exclusivas
            </p>

            <div className="mt-4 flex items-stretch border-b border-charcoal">
              <input
                type="email"
                placeholder="E-MAIL"
                className="flex-1 bg-transparent py-2 text-xs uppercase tracking-widest text-charcoal placeholder:text-warm-gray outline-none"
              />
              <button className="bg-charcoal px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-gray-900">
                Cadastrar
              </button>
            </div>

            <p className="mt-3 text-[11px] leading-relaxed text-warm-gray">
              Ao cadastrar, aceito receber comunicações de marketing da Gold Sky.
            </p>
          </div>

          {/* Link sections — accordion on mobile, 4 columns on desktop */}
          <div className="lg:order-first lg:col-span-4 lg:grid lg:grid-cols-4 lg:gap-8">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-gray-100 lg:border-none">

                {/* Mobile: accordion toggle */}
                <button
                  className="flex w-full items-center justify-between py-4 font-serif text-base font-semibold text-charcoal lg:hidden"
                  onClick={() => toggle(section.title)}
                >
                  {section.title}
                  <ChevronDown
                    className={`h-4 w-4 text-gold transition-transform duration-200 ${
                      openSection === section.title ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Desktop: heading always visible */}
                <h3 className="mb-4 hidden font-serif text-base font-semibold text-charcoal lg:block">
                  {section.title}
                </h3>

                {/* Links */}
                <ul
                  className={`flex flex-col gap-3 overflow-hidden transition-all duration-300 lg:flex lg:max-h-none ${
                    openSection === section.title ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-warm-gray transition-colors hover:text-charcoal"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="mt-10 border-t border-gray-100 pt-8">
          <p className="mb-4 text-xs font-semibold text-charcoal">Redes Sociais</p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-white transition-opacity hover:opacity-80"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-[#faf5ee]">
        <div className="container mx-auto flex flex-col items-center gap-2 px-6 py-6 text-center">
          <Link
            href="/"
            className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-black"
          >
            Gold Sky
          </Link>
          <p className="text-xs text-warm-gray">
            &copy; {new Date().getFullYear()} Gold Sky — Ótica e Joalheria. Todos os direitos reservados.
          </p>
          <div className="mt-1 flex items-center gap-4 text-xs text-warm-gray">
            <Link href="/privacidade" className="transition-colors hover:text-charcoal">
              Política de Privacidade
            </Link>
            <span>·</span>
            <Link href="/termos" className="transition-colors hover:text-charcoal">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
