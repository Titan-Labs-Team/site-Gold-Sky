// Gold Sky — Wishlist Page
import { Link } from 'wouter'
import { Heart } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import WhatsAppButton from '@/components/WhatsAppButton'
import { useStore } from '@/contexts/StoreContext'

export default function Wishlist() {
  const { wishlistItems, clearWishlist } = useStore()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif font-bold text-[#1A1A1A] text-3xl lg:text-4xl">
            Meus Favoritos
          </h1>
          {wishlistItems.length > 0 && (
            <button
              onClick={clearWishlist}
              className="text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-[#7A7A7A] border border-[#7A7A7A] px-4 py-2 hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors"
            >
              Limpar Lista
            </button>
          )}
        </div>

        <div className="gold-divider mb-8" />

        {wishlistItems.length === 0 ? (
          <div className="text-center py-24">
            <Heart size={48} strokeWidth={1} className="text-[#E5E5E5] mx-auto mb-6" />
            <p className="font-serif text-2xl text-[#1A1A1A] mb-2">Sua lista está vazia</p>
            <p className="font-sans text-sm text-[#7A7A7A] mb-8">
              Salve suas peças favoritas para encontrá-las facilmente depois.
            </p>
            <Link href="/produtos">
              <button className="btn-primary">Explorar Coleção</button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {wishlistItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
