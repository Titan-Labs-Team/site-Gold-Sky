import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

const footerLinks = {
  institucional: [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Nossas Lojas', href: '/contato' },
    { name: 'Trabalhe Conosco', href: '/contato' },
  ],
  ajuda: [
    { name: 'Fale Conosco', href: '/contato' },
    { name: 'Trocas e Devoluções', href: '/contato' },
    { name: 'Formas de Pagamento', href: '/contato' },
    { name: 'Prazo de Entrega', href: '/contato' },
  ],
  categorias: [
    { name: 'Anéis', href: '/categoria/aneis' },
    { name: 'Brincos', href: '/categoria/brincos' },
    { name: 'Colares', href: '/categoria/colares' },
    { name: 'Pulseiras', href: '/categoria/pulseiras' },
    { name: 'Alianças', href: '/categoria/aliancas' },
    { name: 'Óculos', href: '/categoria/oculos' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-forest-800 text-cream-100">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-50">
                <span className="font-serif text-2xl font-bold text-forest-800">
                  g
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-wide text-cream-50">
                  Gold Sky
                </span>
                <span className="text-xs text-cream-300">Ótica e Joalheria</span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream-300">
              Gold Sky — Ótica e Joalheria. Sua beleza, nossa missão.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 text-cream-200 transition-colors hover:bg-gold-500 hover:text-charcoal"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 text-cream-200 transition-colors hover:bg-gold-500 hover:text-charcoal"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            {/* Institucional */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-cream-50">
                Institucional
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.institucional.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream-300 transition-colors hover:text-gold-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ajuda */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-cream-50">
                Ajuda
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.ajuda.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream-300 transition-colors hover:text-gold-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categorias */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-cream-50">
                Categorias
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.categorias.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream-300 transition-colors hover:text-gold-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 border-t border-forest-700 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-cream-300 lg:justify-start">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-gold-400"
            >
              <MapPin className="h-4 w-4" />
              <span>Rua das Joias, 123 - Centro, São Paulo - SP</span>
            </a>
            <a
              href="tel:+551199999999"
              className="flex items-center gap-2 transition-colors hover:text-gold-400"
            >
              <Phone className="h-4 w-4" />
              <span>(11) 9999-9999</span>
            </a>
            <a
              href="mailto:contato@goldsky.com.br"
              className="flex items-center gap-2 transition-colors hover:text-gold-400"
            >
              <Mail className="h-4 w-4" />
              <span>contato@goldsky.com.br</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-700 bg-forest-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-cream-400 sm:flex-row sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} Gold Sky — Ótica e Joalheria.
              Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacidade" className="hover:text-gold-400">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="hover:text-gold-400">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
