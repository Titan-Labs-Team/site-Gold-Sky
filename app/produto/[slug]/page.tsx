'use client'

import { useState, useEffect, useRef } from 'react'
import { notFound } from 'next/navigation'
import { Heart, Minus, Plus, Truck, Shield, RotateCcw, Check } from 'lucide-react'
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
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
  const isWishlisted = isInWishlist(product.id)

  const [quantity, setQuantity] = useState(1)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [showStickyBar, setShowStickyBar] = useState(false)
  const addToCartRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const btn = addToCartRef.current
    if (!btn) return
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(btn)
    return () => observer.disconnect()
  }, [])

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product)
    toast.success('Produto adicionado ao carrinho', { description: product.name })
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

  const toggleSection = (id: string) =>
    setOpenSection((prev) => (prev === id ? null : id))

  const accordionSections = [
    {
      id: 'description',
      label: 'Descrição',
      content: <p className="text-sm leading-relaxed text-warm-gray">{product.description}</p>,
    },
    {
      id: 'details',
      label: 'Detalhes',
      content: (
        <ul className="space-y-2 text-sm text-warm-gray">
          <li><span className="font-medium text-charcoal">Material:</span> {product.material}</li>
          <li><span className="font-medium text-charcoal">SKU:</span> {product.sku}</li>
          <li><span className="font-medium text-charcoal">Categoria:</span> {category?.name}</li>
        </ul>
      ),
    },
    {
      id: 'care',
      label: 'Cuidados',
      content: (
        <ul className="list-disc space-y-2 pl-5 text-sm text-warm-gray">
          <li>Evite contato com perfumes e produtos químicos</li>
          <li>Guarde em local seco e arejado</li>
          <li>Limpe com flanela macia</li>
          <li>Retire antes de dormir ou praticar esportes</li>
        </ul>
      ),
    },
    {
      id: 'benefits',
      label: 'Benefícios',
      content: (
        <div className="space-y-3 text-sm text-warm-gray">
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 flex-shrink-0 text-forest-700" />
            <span>Frete grátis acima de R$ 299</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 flex-shrink-0 text-forest-700" />
            <span>Garantia de 1 ano</span>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="h-5 w-5 flex-shrink-0 text-forest-700" />
            <span>Troca em até 30 dias</span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-6 lg:py-12">
          <Breadcrumbs
            items={[
              { label: 'Produtos', href: '/produtos' },
              { label: category?.name || 'Categoria', href: `/categoria/${product.category}` },
              { label: product.name },
            ]}
          />

          <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Gallery */}
            <ProductGallery images={product.images} productName={product.name} />

            {/* Info */}
            <div>
              {category && (
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-warm-gray">
                  {category.name}
                </p>
              )}

              <h1 className="mt-2 font-serif text-xl font-bold uppercase tracking-wide text-charcoal lg:text-2xl">
                {product.name}
              </h1>

              <div className="mt-2 flex items-center gap-2">
                {product.isNew && (
                  <span className="bg-forest-800 px-2.5 py-0.5 text-xs font-medium text-cream-50">
                    Novidade
                  </span>
                )}
                {product.inStock ? (
                  <span className="flex items-center gap-1 text-xs text-green-600">
                    <Check className="h-3 w-3" /> Em estoque
                  </span>
                ) : (
                  <span className="text-xs text-warm-gray">Esgotado</span>
                )}
              </div>

              {/* Price */}
              <div className="mt-5 border-t border-gray-100 pt-5">
                <p className="text-3xl font-bold text-charcoal">
                  {formatPrice(product.price)}
                </p>
                <p className="mt-1 text-sm text-warm-gray">
                  {formatInstallments(product.price, product.installments)}
                </p>
              </div>

              {/* Material */}
              <p className="mt-4 text-sm text-warm-gray">
                <span className="font-medium text-charcoal">Material: </span>
                {product.material}
              </p>

              {/* Quantity */}
              <div className="mt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-charcoal">
                  Quantidade
                </p>
                <div className="inline-flex items-center border border-gray-300">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-10 w-10 items-center justify-center text-charcoal transition-colors hover:bg-gray-50"
                    aria-label="Diminuir"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="flex h-10 w-12 items-center justify-center border-x border-gray-300 text-sm font-semibold text-charcoal">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="flex h-10 w-10 items-center justify-center text-charcoal transition-colors hover:bg-gray-50"
                    aria-label="Aumentar"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-col gap-3">
                <button
                  ref={addToCartRef}
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-forest-800 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-forest-900 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Adicionar à Sacola
                </button>
                <button
                  onClick={handleToggleWishlist}
                  className={cn(
                    'flex w-full items-center justify-center border py-4 text-sm font-bold uppercase tracking-[0.15em] transition-colors',
                    isWishlisted
                      ? 'border-forest-800 bg-forest-800/10 text-forest-800'
                      : 'border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-white'
                  )}
                >
                  <Heart className={cn('mr-2 h-4 w-4', isWishlisted && 'fill-forest-800')} />
                  {isWishlisted ? 'Na Lista de Desejos' : 'Lista de Desejos'}
                </button>
              </div>

              {/* Accordion */}
              <div className="mt-8 border-t border-gray-100">
                {accordionSections.map((section) => (
                  <div key={section.id} className="border-b border-gray-100">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="flex w-full items-center justify-between py-4"
                    >
                      <span
                        className={cn(
                          'text-xs font-bold uppercase tracking-[0.15em] transition-colors',
                          openSection === section.id ? 'text-forest-800' : 'text-charcoal'
                        )}
                      >
                        {section.label}
                      </span>
                      {openSection === section.id ? (
                        <Minus className="h-4 w-4 text-charcoal" />
                      ) : (
                        <Plus className="h-4 w-4 text-charcoal" />
                      )}
                    </button>
                    {openSection === section.id && (
                      <div className="pb-5">{section.content}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16 lg:mt-24">
              <h2 className="font-serif text-xl font-bold uppercase tracking-wide text-charcoal lg:text-2xl">
                Você também pode gostar
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Sticky bottom bar — só aparece quando o botão principal saiu do viewport */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.12)] lg:hidden">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2">
            <p className="max-w-[60%] truncate text-xs font-medium text-charcoal">
              {product.name}
            </p>
            <p className="text-sm font-bold text-charcoal">
              {formatPrice(product.price)}
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-forest-800 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-forest-900 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Adicionar à Sacola
          </button>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
