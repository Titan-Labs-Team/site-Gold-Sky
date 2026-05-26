// Gold Sky — Cart Page
import { Link } from 'wouter'
import { Minus, Plus, X, ArrowRight, ShoppingBag } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { useStore } from '@/contexts/StoreContext'

export default function Cart() {
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useStore()

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const shipping = cartTotal > 500 ? 0 : 29.90
  const total = cartTotal + shipping

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <h1 className="font-serif font-bold text-[#1A1A1A] text-3xl lg:text-4xl mb-8">
          Minha Sacola
        </h1>

        <div className="gold-divider mb-8" />

        {cartItems.length === 0 ? (
          <div className="text-center py-24">
            <ShoppingBag size={48} strokeWidth={1} className="text-[#E5E5E5] mx-auto mb-6" />
            <p className="font-serif text-2xl text-[#1A1A1A] mb-2">Sua sacola está vazia</p>
            <p className="font-sans text-sm text-[#7A7A7A] mb-8">
              Explore nossas coleções e encontre peças únicas para você.
            </p>
            <Link href="/produtos">
              <button className="btn-primary">
                Explorar Coleção
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map(item => (
                <div key={item.product.id} className="flex gap-4 pb-6 border-b border-[#E5E5E5]">
                  {/* Image */}
                  <Link href={`/produto/${item.product.slug}`}>
                    <div className="w-20 lg:w-28 shrink-0 bg-[#FAF5EE]" style={{ aspectRatio: '3/4' }}>
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-sans font-medium uppercase tracking-[0.1em] text-[#7A7A7A] mb-1">
                      {item.product.category}
                    </p>
                    <Link href={`/produto/${item.product.slug}`}>
                      <p className="font-sans text-sm font-medium text-[#1A1A1A] mb-1 line-clamp-2">
                        {item.product.name}
                      </p>
                    </Link>
                    <p className="text-xs font-sans text-[#7A7A7A] mb-3">
                      {item.product.material}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-[#E5E5E5]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-[#FAF5EE] transition-colors"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center text-sm font-sans border-x border-[#E5E5E5]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-[#FAF5EE] transition-colors"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      {/* Price + remove */}
                      <div className="flex items-center gap-4">
                        <span className="font-sans font-semibold text-[#1A1A1A]">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors"
                          aria-label="Remover"
                        >
                          <X size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Link href="/produtos">
                <button className="btn-outline">
                  Continuar Comprando
                </button>
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#FAF5EE] p-6">
                <p className="text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-6">
                  Resumo do Pedido
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-[#7A7A7A]">Subtotal</span>
                    <span className="text-[#1A1A1A] font-medium">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-[#7A7A7A]">Frete</span>
                    <span className="text-[#1A1A1A] font-medium">
                      {shipping === 0 ? 'Grátis' : formatPrice(shipping)}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-[11px] font-sans text-[#2B4A2F]">
                      ✓ Frete grátis para compras acima de R$ 500
                    </p>
                  )}
                </div>

                <div className="border-t border-[#E5E5E5] pt-4 mb-6">
                  <div className="flex justify-between font-sans">
                    <span className="font-bold text-[#1A1A1A]">Total</span>
                    <span className="font-bold text-[#1A1A1A] text-lg">{formatPrice(total)}</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-[#1A1A1A] text-white text-[11px] font-sans font-bold uppercase tracking-[0.15em] hover:bg-[#333] transition-colors duration-200">
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
