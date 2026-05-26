// Gold Sky — Home Page
// Design: Parisian Atelier Minimalismo Quente + GSAP Animations
import { useRef, useEffect, useState } from 'react'
import { Link } from 'wouter'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import WhatsAppButton from '@/components/WhatsAppButton'
import { PageLoadOverlay } from '@/components/PageLoadOverlay'
import { AnimatedSectionTitle } from '@/components/AnimatedSectionTitle'
import { getNewProducts, getFeaturedProducts, categoryImages, categoryLabels } from '@/data/products'
import { shouldAnimate } from '@/hooks/useGSAPAnimation'

gsap.registerPlugin(ScrollTrigger)

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663697016376/PckeVDWrdRKJrQb8cb4ogt/hero-jewelry-hm2b4iKNnbk84yRrgRNV8P.webp'
const STORE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663697016376/PckeVDWrdRKJrQb8cb4ogt/store-interior-HTHi5RvpsMwTbpN2nnzBHf.webp'

const categories = [
  { key: 'aneis', label: 'Anéis' },
  { key: 'brincos', label: 'Brincos' },
  { key: 'colares', label: 'Colares' },
  { key: 'pulseiras', label: 'Pulseiras' },
  { key: 'aliancas', label: 'Alianças' },
  { key: 'oculos', label: 'Óculos' },
]

export default function Home() {
  const newProducts = getNewProducts()
  const featuredProducts = getFeaturedProducts()
  const [pageLoadComplete, setPageLoadComplete] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const catRef = useRef<HTMLDivElement>(null)
  const novRef = useRef<HTMLDivElement>(null)
  const destRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  const novCarousel = useCarousel(newProducts.length, 4)
  const novCarouselMobile = useCarousel(newProducts.length, 1)

  // Hero parallax
  useEffect(() => {
    if (!pageLoadComplete || !heroRef.current) return

    const ctx = gsap.context(() => {
      const heroImage = heroRef.current!.querySelector('.parallax-img') as HTMLElement
      const heroText = heroRef.current!.querySelector('.hero-content') as HTMLElement

      if (!heroImage) return

      // scrub numérico adiciona suavização (inércia); force3D garante GPU
      gsap.to(heroImage, {
        y: 80,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      })
      gsap.to(heroText, {
        y: -50,
        opacity: 0,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '60% top',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [pageLoadComplete])

  // Category cards entrance
  useEffect(() => {
    if (!pageLoadComplete || !catRef.current) return

    const ctx = gsap.context(() => {
      const cards = catRef.current!.querySelectorAll('a')
      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        force3D: true,
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger: catRef.current, start: 'top 85%', once: true },
      })
    }, catRef)

    return () => ctx.revert()
  }, [pageLoadComplete])

  // Product cards entrance
  useEffect(() => {
    if (!pageLoadComplete || !destRef.current) return

    const ctx = gsap.context(() => {
      const cards = destRef.current!.querySelectorAll('[data-product-card]')
      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: 0.55,
        stagger: 0.07,
        ease: 'power2.out',
        force3D: true,
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger: destRef.current, start: 'top 88%', once: true },
      })
    }, destRef)

    return () => ctx.revert()
  }, [pageLoadComplete])

  // About section reveal
  useEffect(() => {
    if (!pageLoadComplete || !aboutRef.current) return

    const ctx = gsap.context(() => {
      const section = aboutRef.current!
      const image = section.querySelector('.about-image') as HTMLElement
      const textElements = section.querySelectorAll('.about-text > *')

      // Substituído clipPath (causa repaints) por opacity+translateX
      gsap.from(section, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 75%', once: true },
      })

      if (image) {
        gsap.from(image, {
          x: -50,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          force3D: true,
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: section, start: 'top 70%', once: true },
        })
      }

      gsap.from(textElements, {
        y: 25,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power2.out',
        force3D: true,
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger: section, start: 'top 65%', once: true },
      })
    }, aboutRef)

    return () => ctx.revert()
  }, [pageLoadComplete])

  return (
    <div className="min-h-screen bg-white">
      {!pageLoadComplete && <PageLoadOverlay onComplete={() => setPageLoadComplete(true)} />}
      <Header />

      {/* ─── HERO BANNER ─── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ minHeight: '580px', height: '90vh', maxHeight: '800px' }}
      >
        {/* Parallax image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="Gold Sky — Joias para seus momentos especiais"
            className="parallax-img w-full h-[130%] object-cover object-center"
            style={{ objectPosition: '50% 65%', willChange: 'transform', transform: 'translateZ(0) scale(1.08)' }}
          />
        </div>

        {/* Cinematic overlay */}
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" style={{ opacity: 0.6 }} />

        {/* Content */}
        <div className="hero-content relative z-10 h-full flex flex-col justify-between px-6 lg:px-16 py-10 lg:py-16 max-w-[1280px] mx-auto">
          {/* Top content */}
          <div className="flex flex-col items-start max-w-2xl">
            {/* Badge */}
            <span className="hero-badge inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-[#C9A96E]/30 border border-[#C9A96E]/50 text-white text-[10px] font-sans font-semibold uppercase tracking-[0.15em]" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              Coleção Especial
            </span>

            {/* H1 */}
            <h1 className="font-serif font-bold text-white leading-[0.95] mb-4" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
              <span className="hero-h1-line block" style={{ opacity: 0, transform: 'translateY(60px)' }}>Traduza seu amor</span>
              <span className="hero-h1-line block" style={{ opacity: 0, transform: 'translateY(60px)' }}>em joias</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle font-sans text-white/85 text-base lg:text-lg leading-relaxed mb-8 max-w-md" style={{ opacity: 0, transform: 'translateY(30px)' }}>
              Peças únicas escolhidas para os seus momentos mais especiais
            </p>

            {/* Buttons */}
            <div className="hidden lg:flex hero-buttons items-center gap-4">
              <Link href="/produtos">
                <button className="px-8 py-3.5 border border-white/60 text-white text-[11px] font-sans font-bold uppercase tracking-[0.15em] hover:bg-white/10 transition-colors duration-200" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                  Ver Coleção
                </button>
              </Link>
              <Link href="/sobre">
                <button className="px-8 py-3.5 bg-[#2B4A2F] text-white text-[11px] font-sans font-bold uppercase tracking-[0.15em] hover:bg-[#1e3521] transition-colors duration-200" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                  Nossa História
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex lg:hidden hero-buttons flex-col gap-3 w-full">
            <Link href="/produtos">
              <button className="w-full py-3.5 border border-white/60 text-white text-[11px] font-sans font-bold uppercase tracking-[0.15em] hover:bg-white/10 transition-colors duration-200" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                Ver Coleção
              </button>
            </Link>
            <Link href="/sobre">
              <button className="w-full py-3.5 bg-[#2B4A2F] text-white text-[11px] font-sans font-bold uppercase tracking-[0.15em] hover:bg-[#1e3521] transition-colors duration-200" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                Nossa História
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="gold-divider" />

      {/* ─── NOSSAS CATEGORIAS ─── */}
      <section ref={catRef} className="bg-[#FAF5EE] py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <AnimatedSectionTitle className="font-serif font-bold text-[#1A1A1A] text-3xl lg:text-5xl mb-2">
              Nossas Categorias
            </AnimatedSectionTitle>
            <p className="font-sans text-[#7A7A7A] text-sm lg:text-base">
              Explore nossa coleção completa de joias e óculos
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#FAF5EE] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FAF5EE] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {categories.map((cat) => (
                <Link key={cat.key} href={`/categoria/${cat.key}`} className="shrink-0 snap-start group" style={{ width: 'clamp(160px, 22vw, 220px)' }}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
                    <img
                      src={categoryImages[cat.key]}
                      alt={cat.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-serif font-semibold text-white text-lg leading-tight">
                        {cat.label}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="gold-divider" />

      {/* ─── NOVIDADES ─── */}
      <section ref={novRef} className="bg-[#FAF5EE] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block px-3 py-1 border border-[#C9A96E] text-[#C9A96E] text-[9px] font-sans font-bold uppercase tracking-[0.2em] mb-3">
                Recém Chegadas
              </span>
              <AnimatedSectionTitle className="font-serif font-bold text-[#1A1A1A] text-3xl lg:text-5xl">
                Novidades
              </AnimatedSectionTitle>
            </div>
            <Link href="/produtos">
              <button className="btn-outline flex items-center gap-2 self-start lg:self-auto">
                Ver Todas as Novidades
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </Link>
          </div>

          {/* Desktop carousel */}
          <div className="hidden lg:block relative">
            <div className="overflow-hidden">
              <div className="flex gap-6 transition-transform duration-300 ease-out" style={{ transform: `translateX(-${novCarousel.index * (100 / 4)}%)` }}>
                {newProducts.map((product) => (
                  <div key={product.id} className="shrink-0 w-[calc(25%-18px)]">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
            {novCarousel.canPrev && (
              <button onClick={novCarousel.prev} className="absolute left-0 top-1/3 -translate-x-4 w-10 h-10 rounded-full bg-white border border-[#FAF5EE] flex items-center justify-center shadow-sm hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-200">
                <ChevronLeft size={16} strokeWidth={1.5} />
              </button>
            )}
            {novCarousel.canNext && (
              <button onClick={novCarousel.next} className="absolute right-0 top-1/3 translate-x-4 w-10 h-10 rounded-full bg-white border border-[#FAF5EE] flex items-center justify-center shadow-sm hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-200">
                <ChevronRight size={16} strokeWidth={1.5} />
              </button>
            )}
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {newProducts.map(product => (
              <div key={product.id} className="shrink-0 snap-start w-[70vw] max-w-[260px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="gold-divider" />

      {/* ─── DESTAQUES ─── */}
      <section ref={destRef} className="bg-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
            <AnimatedSectionTitle className="font-serif font-bold text-[#1A1A1A] text-3xl lg:text-5xl">
              Destaques
            </AnimatedSectionTitle>
            <Link href="/produtos">
              <button className="btn-outline self-start lg:self-auto">
                Ver Todos
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <div key={product.id} data-product-card>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="gold-divider" />

      {/* ─── NOSSA HISTÓRIA ─── */}
      <section ref={aboutRef} className="bg-[#2B4A2F] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="about-image relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#C9A96E]/40 rounded-[4px]" />
              <img
                src={STORE_IMAGE}
                alt="Interior da Gold Sky"
                className="relative w-full object-cover rounded-[4px]"
                style={{ aspectRatio: '4/3' }}
                loading="lazy"
              />
            </div>

            <div className="about-text">
              <span className="inline-block text-[#C9A96E] text-[10px] font-sans font-bold uppercase tracking-[0.2em] mb-4">
                Nossa História
              </span>
              <h2 className="font-serif font-bold text-white text-3xl lg:text-5xl mb-6 leading-tight">
                A Gold Sky
              </h2>
              <p className="font-sans text-white/85 text-base leading-relaxed mb-8">
                Nascemos da paixão por beleza e exclusividade. Na Gold Sky, cada joia e cada par de óculos é escolhido com cuidado para refletir sua história. Venha nos visitar e descubra peças únicas que combinam com você.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {['Qualidade', 'Elegância', 'Exclusividade'].map(value => (
                  <div key={value} className="text-center">
                    <div className="w-8 h-px bg-[#C9A96E] mx-auto mb-3" />
                    <p className="font-serif font-semibold text-white text-sm lg:text-base">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/sobre">
                <button className="px-8 py-3.5 bg-[#FAF5EE] text-[#1A1A1A] text-[11px] font-sans font-bold uppercase tracking-[0.15em] hover:bg-[#f0e8da] transition-colors duration-200">
                  Conheça Nossa História
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

// Carousel hook
function useCarousel(itemCount: number, visibleCount: number) {
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, itemCount - visibleCount)
  const prev = () => setIndex(i => Math.max(0, i - 1))
  const next = () => setIndex(i => Math.min(maxIndex, i + 1))
  return { index, prev, next, canPrev: index > 0, canNext: index < maxIndex }
}
