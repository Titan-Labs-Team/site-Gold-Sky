'use client'

import Link from 'next/link'
import { Search, Heart, ShoppingBag, Menu, ChevronRight, User } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { useCartStore } from '@/lib/cart-store'
import { useWishlistStore } from '@/lib/wishlist-store'
import { cn } from '@/lib/utils'

const categories = [
  { name: 'Anéis', href: '/categoria/aneis' },
  { name: 'Brincos', href: '/categoria/brincos' },
  { name: 'Colares', href: '/categoria/colares' },
  { name: 'Pulseiras', href: '/categoria/pulseiras' },
  { name: 'Alianças', href: '/categoria/aliancas' },
  { name: 'Óculos', href: '/categoria/oculos' },
  { name: 'Joias', href: '/produtos' },
]

const secondaryLinks = [
  { name: 'Minha Conta', href: '/conta' },
  { name: 'Sobre a Gold Sky', href: '/sobre' },
  { name: 'Atendimento e Serviços', href: '/contato' },
  { name: 'Encontre uma loja', href: '/contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const cartItemCount = useCartStore((state) => state.getItemCount())
  const wishlistCount = useWishlistStore((state) => state.items.length)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white transition-shadow duration-300',
        isScrolled ? 'shadow-md' : 'border-b border-cream-300'
      )}
    >
      {/* Top Bar */}
      <div className="border-b border-cream-300">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-forest-800 hover:bg-cream-200"
                    aria-label="Abrir menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex w-[85vw] max-w-sm flex-col bg-white p-0">
                  <SheetTitle className="sr-only">Menu de navegação</SheetTitle>

                  {/* Logo */}
                  <div className="flex items-center justify-center border-b border-gray-100 py-5">
                    <Link
                      href="/"
                      className="font-serif text-2xl font-bold tracking-[0.2em] text-forest-800 uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Gold Sky
                    </Link>
                  </div>

                  {/* Login */}
                  <div className="border-b border-gray-100 px-6 py-4">
                    <Link
                      href="/conta"
                      className="flex items-center gap-3 text-charcoal transition-colors hover:text-gold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User className="h-5 w-5 text-warm-gray" />
                      <span className="text-sm font-medium">Olá! Entre ou Cadastre-se</span>
                    </Link>
                  </div>

                  {/* Search */}
                  <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center gap-2 rounded bg-gray-100 px-3 py-2">
                      <Search className="h-4 w-4 text-warm-gray" />
                      <input
                        type="text"
                        placeholder="Buscar por nome ou código"
                        className="flex-1 bg-transparent text-sm text-charcoal placeholder:text-warm-gray outline-none"
                      />
                    </div>
                  </div>

                  {/* Main Categories */}
                  <nav className="flex flex-1 flex-col overflow-y-auto">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex items-center justify-between border-b border-gray-100 px-6 py-4 text-sm font-bold tracking-[0.15em] uppercase text-charcoal transition-colors hover:text-gold"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                        <ChevronRight className="h-4 w-4 text-gold" />
                      </Link>
                    ))}
                  </nav>

                  {/* Secondary Links */}
                  <div className="flex flex-col gap-4 border-t border-gray-200 px-6 py-6">
                    {secondaryLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="font-serif text-sm text-charcoal transition-colors hover:text-gold"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <Link href="/" className="font-serif text-xl font-bold tracking-[0.2em] text-forest-800 uppercase lg:text-2xl">
              Gold Sky
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-sm font-medium text-charcoal transition-colors hover:text-gold-500"
                >
                  {category.name}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-forest-800 hover:bg-cream-200"
                aria-label="Buscar"
              >
                <Search className="h-5 w-5" />
              </Button>

              <Link href="/favoritos">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-forest-800 hover:bg-cream-200"
                  aria-label="Lista de desejos"
                >
                  <Heart className="h-5 w-5" />
                  {mounted && wishlistCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-400 text-xs font-medium text-charcoal">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
              </Link>

              <Link href="/carrinho">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-forest-800 hover:bg-cream-200"
                  aria-label="Carrinho de compras"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {mounted && cartItemCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-400 text-xs font-medium text-charcoal">
                      {cartItemCount}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}
