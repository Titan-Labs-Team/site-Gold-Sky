'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { id: '1', name: 'Anéis',      slug: 'aneis',      image: '/categories/aneis.jpg' },
  { id: '2', name: 'Brincos',    slug: 'brincos',    image: '/categories/brincos.jpg' },
  { id: '3', name: 'Colares',    slug: 'colares',    image: '/categories/colares.jpg' },
  { id: '4', name: 'Pulseiras',  slug: 'pulseiras',  image: '/categories/pulseiras.jpg' },
  { id: '5', name: 'Alianças',   slug: 'aliancas',   image: '/categories/aliancas.jpg' },
  { id: '6', name: 'Óculos',     slug: 'oculos',     image: '/categories/oculos.jpg' },
]

export function CategoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-cream-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-charcoal lg:text-4xl">
            Nossas Categorias
          </h2>
          <p className="mt-4 text-warm-gray">
            Encontre a joia perfeita para cada momento especial
          </p>
        </div>

        <div className="relative mt-12">
          {/* Setas — visíveis apenas no desktop */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/3 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream-300 bg-white text-black shadow-sm transition-colors hover:bg-black hover:text-white lg:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/3 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream-300 bg-white text-black shadow-sm transition-colors hover:bg-black hover:text-white lg:flex"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Gradiente nas bordas */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-cream-50 to-transparent lg:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-cream-50 to-transparent lg:hidden" />

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 lg:gap-6"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categoria/${category.slug}`}
                className="group flex w-[42%] flex-shrink-0 flex-col transition-all hover:-translate-y-1 sm:w-[30%] lg:w-0 lg:flex-1"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="aspect-square overflow-hidden rounded-[4px]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 text-center text-sm font-medium text-charcoal transition-colors group-hover:text-gold-600">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
