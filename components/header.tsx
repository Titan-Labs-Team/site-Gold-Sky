'use client'

import Link from 'next/link'
import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react'
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
                <SheetContent side="left" className="w-80 bg-cream-50 p-0">
                  <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
                  <div className="flex flex-col">
                    <div className="border-b border-cream-300 p-6">
                      <Link
                        href="/"
                        className="font-serif text-2xl font-semibold text-forest-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Gold Sky
                      </Link>
                    </div>
                    <nav className="flex flex-col p-6">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="border-b border-cream-200 py-4 text-lg text-charcoal transition-colors hover:text-gold-500"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                      <Link
                        href="/sobre"
                        className="border-b border-cream-200 py-4 text-lg text-charcoal transition-colors hover:text-gold-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Sobre
                      </Link>
                      <Link
                        href="/contato"
                        className="py-4 text-lg text-charcoal transition-colors hover:text-gold-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contato
                      </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-800 lg:h-12 lg:w-12">
                <span className="font-serif text-xl font-bold text-cream-50 lg:text-2xl">
                  g
                </span>
              </div>
              <div className="hidden flex-col sm:flex">
                <span className="font-serif text-xl font-semibold tracking-wide text-forest-800 lg:text-2xl">
                  Gold Sky
                </span>
                <span className="text-xs text-warm-gray lg:text-sm">
                  Ótica e Joalheria
                </span>
              </div>
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
