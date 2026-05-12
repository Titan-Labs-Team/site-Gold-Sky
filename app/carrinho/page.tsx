'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/lib/cart-store'
import { formatPrice, formatInstallments } from '@/lib/products'
import { toast } from 'sonner'

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCartStore()
  const total = getTotal()

  const handleRemove = (productId: string, productName: string) => {
    removeItem(productId)
    toast.info('Produto removido do carrinho', {
      description: productName,
    })
  }

  const shipping = total >= 29900 ? 0 : 1990 // Free shipping above R$ 299
  const finalTotal = total + shipping

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-cream-50">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <Breadcrumbs items={[{ label: 'Carrinho' }]} />

          <h1 className="font-serif text-3xl font-bold text-charcoal lg:text-4xl">
            Meu Carrinho
          </h1>

          {items.length > 0 ? (
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="rounded-lg bg-white shadow-sm">
                  {items.map((item, index) => (
                    <div
                      key={item.product.id}
                      className={`flex gap-4 p-4 sm:p-6 ${
                        index !== items.length - 1 ? 'border-b border-cream-200' : ''
                      }`}
                    >
                      {/* Image */}
                      <Link href={`/produto/${item.product.slug}`}>
                        <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-cream-100 sm:h-32 sm:w-24">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>
                      </Link>

                      {/* Info */}
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link
                              href={`/produto/${item.product.slug}`}
                              className="font-medium text-charcoal hover:text-gold-600"
                            >
                              {item.product.name}
                            </Link>
                            <p className="mt-1 text-xs text-warm-gray sm:text-sm">
                              {item.product.material}
                            </p>
                          </div>
                          <button
                            onClick={() => handleRemove(item.product.id, item.product.name)}
                            className="text-warm-gray transition-colors hover:text-red-500"
                            aria-label="Remover produto"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>

                        <div className="mt-auto flex items-end justify-between pt-4">
                          {/* Quantity */}
                          <div className="flex items-center rounded-lg border border-cream-300">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="flex h-8 w-8 items-center justify-center text-warm-gray transition-colors hover:text-charcoal"
                              aria-label="Diminuir quantidade"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="flex h-8 w-8 items-center justify-center text-warm-gray transition-colors hover:text-charcoal"
                              aria-label="Aumentar quantidade"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="font-semibold text-charcoal">
                              {formatPrice(item.product.price * item.quantity)}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-xs text-warm-gray">
                                {formatPrice(item.product.price)} cada
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clear Cart */}
                <div className="mt-4 text-right">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      clearCart()
                      toast.info('Carrinho limpo')
                    }}
                    className="text-warm-gray hover:text-red-500"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Limpar Carrinho
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 rounded-lg bg-white p-6 shadow-sm">
                  <h2 className="font-serif text-xl font-semibold text-charcoal">
                    Resumo do Pedido
                  </h2>

                  <div className="mt-6 space-y-3 border-b border-cream-200 pb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-warm-gray">Subtotal</span>
                      <span className="text-charcoal">{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-warm-gray">Frete</span>
                      <span className={shipping === 0 ? 'text-green-600' : 'text-charcoal'}>
                        {shipping === 0 ? 'Grátis' : formatPrice(shipping)}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-gold-600">
                        Frete grátis a partir de R$ 299,00
                      </p>
                    )}
                  </div>

                  <div className="mt-6 flex justify-between">
                    <span className="text-lg font-semibold text-charcoal">Total</span>
                    <div className="text-right">
                      <p className="text-xl font-bold text-charcoal">
                        {formatPrice(finalTotal)}
                      </p>
                      <p className="text-xs text-warm-gray">
                        ou 10x de {formatPrice(finalTotal / 10)} sem juros
                      </p>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="mt-6 w-full bg-black text-white hover:bg-gray-900"
                  >
                    Finalizar Compra
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Link href="/produtos">
                    <Button
                      variant="outline"
                      size="lg"
                      className="mt-3 w-full border-black text-black hover:bg-black hover:text-white"
                    >
                      Continuar Comprando
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center justify-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cream-200">
                <ShoppingBag className="h-12 w-12 text-warm-gray" />
              </div>
              <h2 className="mt-6 font-serif text-2xl font-semibold text-charcoal">
                Seu carrinho está vazio
              </h2>
              <p className="mt-2 text-warm-gray">
                Explore nossos produtos e encontre algo especial para você.
              </p>
              <Link href="/produtos" className="mt-8">
                <Button className="bg-black text-white hover:bg-gray-900">
                  Ver Produtos
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
