'use client'

import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { useWishlistStore } from '@/lib/wishlist-store'

export default function FavoritesPage() {
  const { items, clearWishlist } = useWishlistStore()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-cream-50">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <Breadcrumbs items={[{ label: 'Lista de Desejos' }]} />

          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="font-serif text-3xl font-bold text-charcoal lg:text-4xl">
                Lista de Desejos
              </h1>
              <p className="mt-2 text-warm-gray">
                {items.length} {items.length === 1 ? 'item' : 'itens'} salvo{items.length !== 1 ? 's' : ''}
              </p>
            </div>
            {items.length > 0 && (
              <Button
                variant="ghost"
                onClick={clearWishlist}
                className="text-warm-gray hover:text-red-500"
              >
                Limpar Lista
              </Button>
            )}
          </div>

          {items.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center justify-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cream-200">
                <Heart className="h-12 w-12 text-warm-gray" />
              </div>
              <h2 className="mt-6 font-serif text-2xl font-semibold text-charcoal">
                Sua lista de desejos está vazia
              </h2>
              <p className="mt-2 text-warm-gray">
                Salve seus produtos favoritos para encontrá-los facilmente depois.
              </p>
              <Link href="/produtos" className="mt-8">
                <Button className="bg-black text-white hover:bg-gray-900">
                  Explorar Produtos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
