'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useWishlistStore } from '@/lib/wishlist-store'
import { type Product, formatPrice, formatInstallments } from '@/lib/products'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  showAddToCart?: boolean
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
  const isWishlisted = isInWishlist(product.id)

  const handleToggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id)
      toast.info('Removido da lista de desejos')
    } else {
      addToWishlist(product)
      toast.success('Adicionado à lista de desejos')
    }
  }

  return (
    <div className="group relative">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-[4px] bg-cream-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="rounded bg-forest-800 px-2.5 py-1 text-xs font-medium text-cream-50">
              Novo
            </span>
          )}
          {!product.inStock && (
            <span className="rounded bg-warm-gray px-2.5 py-1 text-xs font-medium text-white">
              Esgotado
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-sm transition-all hover:bg-white hover:text-gold-500"
          aria-label={isWishlisted ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <Heart
            className={cn(
              'h-5 w-5 transition-colors',
              isWishlisted && 'fill-gold-500 text-gold-500'
            )}
          />
        </button>

        {/* Desktop hover: single centered CTA */}
        <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:flex">
          <Link href={`/produto/${product.slug}`}>
            <Button className="bg-forest-800 px-6 text-cream-50 hover:bg-forest-900">
              Ver Produto
            </Button>
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <Link href={`/produto/${product.slug}`}>
          <h3 className="font-medium text-charcoal transition-colors hover:text-gold-600">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-warm-gray">{product.material}</p>
        <div className="mt-2">
          <p className="text-lg font-semibold text-forest-800">
            {formatPrice(product.price)}
          </p>
          <p className="text-xs text-warm-gray">
            {formatInstallments(product.price, product.installments)}
          </p>
        </div>
      </div>
    </div>
  )
}
