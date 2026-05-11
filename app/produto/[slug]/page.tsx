'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import { Heart, ShoppingBag, Truck, Shield, RotateCcw, Check } from 'lucide-react'
import {
  getProductBySlug,
  getProductsByCategory,
  formatPrice,
  formatInstallments,
  categories,
} from '@/lib/products'
import { useCartStore } from '@/lib/cart-store'
import { useWishlistStore } from '@/lib/wishlist-store'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ProductGallery } from '@/components/product-gallery'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { use } from 'react'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params)
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const category = categories.find((c) => c.slug === product.category)
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const addToCart = useCartStore((state) => state.addItem)
  const {
    addItem: addToWishlist,
    removeItem: removeFromWishlist,
    isInWishlist,
  } = useWishlistStore()
  const isWishlisted = isInWishlist(product.id)

  const handleAddToCart = () => {
    addToCart(product)
    toast.success('Produto adicionado ao carrinho', {
      description: product.name,
    })
  }

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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-cream-50">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <Breadcrumbs
            items={[
              { label: 'Produtos', href: '/produtos' },
              { label: category?.name || 'Categoria', href: `/categoria/${product.category}` },
              { label: product.name },
            ]}
          />

          {/* Product Details */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Gallery */}
            <ProductGallery images={product.images} productName={product.name} />

            {/* Product Info */}
            <div>
              {/* Badges */}
              <div className="mb-4 flex items-center gap-2">
                {product.isNew && (
                  <span className="rounded bg-forest-800 px-3 py-1 text-xs font-medium text-cream-50">
                    Novidade
                  </span>
                )}
                {product.inStock ? (
                  <span className="flex items-center gap-1 text-sm text-green-600">
                    <Check className="h-4 w-4" />
                    Em estoque
                  </span>
                ) : (
                  <span className="text-sm text-warm-gray">Esgotado</span>
                )}
              </div>

              {/* Name and SKU */}
              <h1 className="font-serif text-2xl font-bold text-forest-900 lg:text-3xl">
                {product.name}
              </h1>
              <p className="mt-1 text-sm text-warm-gray">SKU: {product.sku}</p>

              {/* Price */}
              <div className="mt-6 rounded-lg bg-cream-100 p-4">
                <p className="text-3xl font-bold text-forest-800">
                  {formatPrice(product.price)}
                </p>
                <p className="mt-1 text-sm text-warm-gray">
                  {formatInstallments(product.price, product.installments)}
                </p>
              </div>

              {/* Material */}
              <div className="mt-6">
                <h3 className="font-medium text-charcoal">Material</h3>
                <p className="mt-1 text-warm-gray">{product.material}</p>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-forest-800 text-cream-50 hover:bg-forest-900"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Adicionar ao Carrinho
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleToggleWishlist}
                  className={cn(
                    'border-forest-800',
                    isWishlisted
                      ? 'bg-gold-400/20 text-gold-700'
                      : 'text-forest-800 hover:bg-forest-800 hover:text-cream-50'
                  )}
                >
                  <Heart
                    className={cn(
                      'mr-2 h-5 w-5',
                      isWishlisted && 'fill-gold-500 text-gold-500'
                    )}
                  />
                  {isWishlisted ? 'Na Lista' : 'Lista de Desejos'}
                </Button>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-cream-200 pt-8">
                <div className="text-center">
                  <Truck className="mx-auto h-6 w-6 text-forest-700" />
                  <p className="mt-2 text-xs text-warm-gray">
                    Frete Grátis acima de R$ 299
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="mx-auto h-6 w-6 text-forest-700" />
                  <p className="mt-2 text-xs text-warm-gray">
                    Garantia de 1 ano
                  </p>
                </div>
                <div className="text-center">
                  <RotateCcw className="mx-auto h-6 w-6 text-forest-700" />
                  <p className="mt-2 text-xs text-warm-gray">
                    Troca em até 30 dias
                  </p>
                </div>
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="mt-8">
                <AccordionItem value="description">
                  <AccordionTrigger className="text-charcoal">
                    Descrição
                  </AccordionTrigger>
                  <AccordionContent className="text-warm-gray">
                    {product.description}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="details">
                  <AccordionTrigger className="text-charcoal">
                    Detalhes
                  </AccordionTrigger>
                  <AccordionContent className="text-warm-gray">
                    <ul className="space-y-2">
                      <li>
                        <strong>Material:</strong> {product.material}
                      </li>
                      <li>
                        <strong>SKU:</strong> {product.sku}
                      </li>
                      <li>
                        <strong>Categoria:</strong> {category?.name}
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="care">
                  <AccordionTrigger className="text-charcoal">
                    Cuidados
                  </AccordionTrigger>
                  <AccordionContent className="text-warm-gray">
                    <ul className="list-disc space-y-2 pl-5">
                      <li>Evite contato com perfumes e produtos químicos</li>
                      <li>Guarde em local seco e arejado</li>
                      <li>Limpe com flanela macia</li>
                      <li>Retire antes de dormir ou praticar esportes</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16 lg:mt-24">
              <h2 className="font-serif text-2xl font-bold text-forest-900 lg:text-3xl">
                Você também pode gostar
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
