// Gold Sky — Header Component
// Design: Parisian Atelier Minimalismo Quente + GSAP Animations
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import { Search, Heart, ShoppingBag, Menu, X, ChevronRight, User } from 'lucide-react'
import { useStore } from '@/contexts/StoreContext'

const navLinks = [
  { label: 'Anéis', href: '/categoria/aneis' },
  { label: 'Brincos', href: '/categoria/brincos' },
  { label: 'Colares', href: '/categoria/colares' },
  { label: 'Pulseiras', href: '/categoria/pulseiras' },
  { label: 'Alianças', href: '/categoria/aliancas' },
  { label: 'Óculos', href: '/categoria/oculos' },
  { label: 'Joias', href: '/produtos' },
]

const mobileSecondaryLinks = [
  { label: 'Minha Conta', href: '/conta', key: 'conta' },
  { label: 'Sobre', href: '/sobre', key: 'sobre' },
  { label: 'Atendimento', href: '/contato', key: 'atendimento' },
  { label: 'Encontre uma loja', href: '/contato', key: 'loja' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount, wishlistCount } = useStore()
  const [location] = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
    setSearchOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between h-16 px-8 max-w-[1280px] mx-auto">
          {/* Nav Left */}
          <nav className="flex items-center gap-6">
            {navLinks.slice(0, 4).map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#7A7A7A] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo Center */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="logo font-serif text-2xl font-bold uppercase tracking-[0.25em] text-[#1A1A1A] select-none">
              GOLD SKY
            </span>
          </Link>

          {/* Nav Right + Icons */}
          <div className="flex items-center gap-6">
            {navLinks.slice(4).map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-[#1A1A1A] hover:text-[#7A7A7A] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-4 bg-[#E5E5E5]" />
            <div className="header-icons flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1 text-[#1A1A1A] hover:text-[#7A7A7A] transition-colors duration-200"
                aria-label="Buscar"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <Link href="/favoritos" className="relative p-1 text-[#1A1A1A] hover:text-[#7A7A7A] transition-colors duration-200">
                <Heart size={18} strokeWidth={1.5} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C9A96E] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}
              </Link>
              <Link href="/carrinho" className="relative p-1 text-[#1A1A1A] hover:text-[#7A7A7A] transition-colors duration-200">
                <ShoppingBag size={18} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C9A96E] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between h-14 px-4">
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-1 text-[#1A1A1A]"
            aria-label="Menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          <Link href="/">
            <span className="logo font-serif text-xl font-bold uppercase tracking-[0.25em] text-[#1A1A1A]">
              GOLD SKY
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-1 text-[#1A1A1A]" aria-label="Buscar">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link href="/favoritos" className="relative p-1 text-[#1A1A1A]">
              <Heart size={20} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C9A96E] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link href="/carrinho" className="relative p-1 text-[#1A1A1A]">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C9A96E] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t border-[#E5E5E5] bg-white px-4 lg:px-8 py-3">
            <div className="max-w-[1280px] mx-auto">
              <input
                type="text"
                placeholder="O que você está procurando?"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full text-sm font-sans text-[#1A1A1A] placeholder:text-[#7A7A7A] bg-transparent border-none outline-none"
              />
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-[300px] bg-white flex flex-col transition-transform duration-300 ease-out ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E5E5]">
          <span className="font-serif text-lg font-bold uppercase tracking-[0.25em] text-[#1A1A1A]">
            GOLD SKY
          </span>
          <button onClick={() => setDrawerOpen(false)} className="p-1 text-[#1A1A1A]">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* User */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E5E5E5]">
          <div className="w-8 h-8 rounded-full bg-[#FAF5EE] flex items-center justify-center">
            <User size={16} strokeWidth={1.5} className="text-[#7A7A7A]" />
          </div>
          <span className="text-sm font-sans text-[#7A7A7A]">Olá! Entre ou Cadastre-se</span>
        </div>

        {/* Search */}
        <div className="px-5 py-3 border-b border-[#E5E5E5]">
          <div className="flex items-center gap-2 bg-[#F5F5F5] px-3 py-2">
            <Search size={14} strokeWidth={1.5} className="text-[#7A7A7A] shrink-0" />
            <input
              type="text"
              placeholder="Buscar"
              className="text-sm font-sans text-[#1A1A1A] placeholder:text-[#7A7A7A] bg-transparent border-none outline-none w-full"
            />
          </div>
        </div>

        {/* Category Links */}
        <nav className="flex-1 overflow-y-auto">
          <div className="py-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between px-5 py-3.5 text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#1A1A1A] hover:bg-[#FAF5EE] transition-colors duration-200"
              >
                {link.label}
                <ChevronRight size={14} strokeWidth={1.5} className="text-[#C9A96E]" />
              </Link>
            ))}
          </div>

          <div className="border-t border-[#E5E5E5] py-2">
            {mobileSecondaryLinks.map(link => (
              <Link
                key={link.key}
                href={link.href}
                className="flex items-center px-5 py-3 text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-14 lg:h-16" />
    </>
  )
}
