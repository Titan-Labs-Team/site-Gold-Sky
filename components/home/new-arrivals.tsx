'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { getNewProducts } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'

export function NewArrivals() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const newProducts = getNewProducts()

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="bg-cream-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <span className="text-sm font-medium uppercase tracking-wider text-gold-600">
              Acabaram de chegar
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-forest-900 lg:text-4xl">
              Novidades
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-300 text-forest-800 transition-colors hover:bg-forest-800 hover:text-cream-50"
              aria-label="Rolar para esquerda"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-300 text-forest-800 transition-colors hover:bg-forest-800 hover:text-cream-50"
              aria-label="Rolar para direita"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="mt-10 flex gap-4 overflow-x-auto pb-4 scrollbar-hide sm:gap-6"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {newProducts.map((product) => (
            <div
              key={product.id}
              className="w-[260px] flex-shrink-0 sm:w-[280px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-cream-50"
          >
            <Link href="/produtos">
              Ver Todas as Novidades
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
