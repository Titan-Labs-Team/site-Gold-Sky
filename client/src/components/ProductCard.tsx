// Gold Sky — ProductCard Component
// Design: Parisian Atelier Minimalismo Quente + GSAP Hover
import { useRef, useEffect } from 'react'
import { Link } from 'wouter'
import { Heart, Eye } from 'lucide-react'
import gsap from 'gsap'
import { useStore } from '@/contexts/StoreContext'
import { shouldAnimate } from '@/hooks/useGSAPAnimation'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  const { toggleWishlist, isInWishlist, addToCart } = useStore()
  const inWishlist = isInWishlist(product.id)
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const heartRef = useRef<HTMLButtonElement>(null)

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const installmentValue = product.price / product.installments

  // Card hover animations
  useEffect(() => {
    if (!shouldAnimate() || !cardRef.current) return

    const handleMouseEnter = () => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.07,
          duration: 0.6,
          ease: 'power2.out',
        })
      }

      if (ctaRef.current) {
        gsap.to(ctaRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        })
      }
    }

    const handleMouseLeave = () => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        })
      }

      if (ctaRef.current) {
        gsap.to(ctaRef.current, {
          y: '100%',
          opacity: 0,
          duration: 0.4,
          ease: 'power3.in',
        })
      }
    }

    const card = cardRef.current
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Wishlist heart animation
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (shouldAnimate() && heartRef.current) {
      gsap.to(heartRef.current, {
        scale: 1.4,
        duration: 0.2,
        ease: 'back.out(2)',
        yoyo: true,
        repeat: 1,
      })
    }

    toggleWishlist(product)
  }

  return (
    <div ref={cardRef} className={`group relative ${className}`}>
      {/* Image Container — 3:4 aspect ratio */}
      <Link href={`/produto/${product.slug}`}>
        <div className="product-img-wrap relative" style={{ aspectRatio: '3/4' }}>
          <img
            ref={imageRef}
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="px-2 py-0.5 bg-[#2B4A2F] text-white text-[9px] font-sans font-bold uppercase tracking-[0.1em]">
                Novo
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button
            ref={heartRef}
            onClick={handleWishlistClick}
            className={`heart-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm transition-all duration-200 ${
              inWishlist ? 'active' : ''
            }`}
            aria-label={inWishlist ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            <Heart
              size={14}
              strokeWidth={1.5}
              className={`transition-all duration-300 ${
                inWishlist ? 'fill-[#C9A96E] stroke-[#C9A96E]' : 'stroke-[#1A1A1A]'
              }`}
            />
          </button>

          {/* Hover CTA — glassmorphism */}
          <div
            ref={ctaRef}
            className="absolute inset-x-3 bottom-3"
            style={{ opacity: 0, transform: 'translateY(100%)' }}
          >
            <button
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
              }}
              className="glass-cta w-full py-2.5 flex items-center justify-center gap-2"
            >
              <Eye size={12} strokeWidth={1.5} />
              Ver Produto
            </button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="pt-3 pb-1">
        <Link href={`/produto/${product.slug}`}>
          <p className="text-[10px] font-sans font-medium uppercase tracking-[0.1em] text-[#7A7A7A] mb-1">
            {product.category === 'aneis' ? 'Anéis' :
             product.category === 'brincos' ? 'Brincos' :
             product.category === 'colares' ? 'Colares' :
             product.category === 'pulseiras' ? 'Pulseiras' :
             product.category === 'aliancas' ? 'Alianças' : 'Óculos'}
          </p>
          <h3 className="font-sans text-sm font-medium text-[#1A1A1A] leading-tight mb-1.5 line-clamp-2">
            {product.name}
          </h3>
          <p className="font-sans text-base font-semibold text-[#1A1A1A]">
            {formatPrice(product.price)}
          </p>
          <p className="text-[11px] font-sans text-[#7A7A7A] mt-0.5">
            ou {product.installments}x de {formatPrice(installmentValue)} sem juros
          </p>
        </Link>

        {/* Add to cart */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full py-2.5 bg-[#2B4A2F] text-white text-[10px] font-sans font-bold uppercase tracking-[0.12em] hover:bg-[#1e3521] transition-colors duration-200"
        >
          Adicionar à Sacola
        </button>
      </div>
    </div>
  )
}
