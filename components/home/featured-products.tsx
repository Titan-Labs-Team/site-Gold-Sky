import Link from 'next/link'
import { getFeaturedProducts } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts().slice(0, 4)

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="font-serif text-3xl font-bold text-forest-900 lg:text-4xl">
              Destaques
            </h2>
            <p className="mt-2 text-warm-gray">
              Peças selecionadas especialmente para você
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-cream-50"
          >
            <Link href="/produtos">
              Ver Todos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
